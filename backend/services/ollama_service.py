import json
import os
import re
from typing import Any

import httpx

OLLAMA_BASE_URL = os.environ.get("OLLAMA_BASE_URL", "http://localhost:11434")
OLLAMA_MODEL = os.environ.get("OLLAMA_MODEL", "llama3.2")

ANALYSIS_SYSTEM_PROMPT = """You are LegalLens, an expert Indian legal analyst. Analyze the provided document and return a structured JSON response.

You must return ONLY valid JSON — no markdown, no explanation, no code blocks. The JSON must follow this exact schema:

{
  "document_type": "string — type of document (e.g. Employment Contract, Rental Agreement)",
  "summary": "string — 2-3 sentence plain-language summary",
  "overall_risk": "Low | Medium | High | Critical",
  "risk_score": number (0-100),
  "future_implications": {
    "one_month": "string",
    "one_year": "string",
    "long_term": "string"
  },
  "clauses": [
    {
      "title": "string — clause name",
      "content": "string — original clause text (brief excerpt)",
      "risk_level": "Low | Medium | High | Critical",
      "plain_english": "string — what this means in plain language",
      "indian_law_reference": "string — relevant Indian law (if any)",
      "recommendation": "string — what the user should do or watch out for"
    }
  ],
  "applicable_laws": [
    {
      "name": "string — law name",
      "relevance": "string — how it applies to this document"
    }
  ],
  "negotiation_tips": ["string"],
  "red_flags": ["string — critical issues the user must know"],
  "good_clauses": ["string — clauses that protect the user"]
}

Focus on Indian law. Flag anything unusual, one-sided, or potentially harmful. Be thorough but use plain language."""

LANG_NAMES = {"en": "English", "hi": "Hindi", "te": "Telugu"}


def build_chat_system_prompt(lang: str) -> str:
    lang_name = LANG_NAMES.get(lang, "English")
    return f"""You are LegalLens Assistant, a helpful legal guide specializing in Indian law.

Your role:
- Help users understand their legal rights and obligations in India
- Explain legal concepts in plain, simple language
- Reference relevant Indian laws when applicable (IPC/BNS, CPC, Contract Act, Consumer Protection Act, etc.)
- Identify if a situation might need a professional lawyer
- Be empathetic — many users are dealing with stressful legal situations

Rules:
- ALWAYS respond in {lang_name}, regardless of what language the user writes in. This is mandatory.
- Never give advice that could harm the user
- Always add a disclaimer when giving specific legal advice
- Keep responses concise and actionable
- If asked about a document, ask the user to upload it for a full analysis

You are NOT a substitute for a licensed advocate. Always recommend consulting one for important matters."""


async def analyze_document(text: str, document_name: str) -> dict:
    prompt = f"""Document Name: {document_name}

Document Content:
{text[:50000]}

Analyze this document thoroughly and return the JSON response."""

    payload = {
        "model": OLLAMA_MODEL,
        "messages": [
            {"role": "system", "content": ANALYSIS_SYSTEM_PROMPT},
            {"role": "user", "content": prompt},
        ],
        "format": "json",
        "stream": False,
        "options": {"temperature": 0.2},
    }

    async with httpx.AsyncClient(timeout=120.0) as client:
        response = await client.post(
            f"{OLLAMA_BASE_URL}/api/chat",
            json=payload,
        )
        response.raise_for_status()
        data = response.json()

    raw = data["message"]["content"].strip()

    # Strip markdown code blocks if present
    raw = re.sub(r"^```(?:json)?\s*", "", raw)
    raw = re.sub(r"\s*```$", "", raw)

    try:
        result: dict[str, Any] = json.loads(raw)
        result["ai_provider"] = "ollama"
        return result
    except json.JSONDecodeError:
        return {
            "document_type": "Unknown",
            "summary": "Analysis failed — Ollama could not produce a valid response.",
            "overall_risk": "Unknown",
            "risk_score": 0,
            "future_implications": {"one_month": "", "one_year": "", "long_term": ""},
            "clauses": [],
            "applicable_laws": [],
            "negotiation_tips": [],
            "red_flags": ["Analysis could not be completed. Please try again."],
            "good_clauses": [],
            "ai_provider": "ollama",
            "raw_response": raw[:500],
        }


async def get_chat_reply(messages: list, lang: str = "en") -> str:
    ollama_messages = [{"role": "system", "content": build_chat_system_prompt(lang)}]
    for msg in messages:
        role = "user" if msg["role"] == "user" else "assistant"
        ollama_messages.append({"role": role, "content": msg["content"]})

    payload = {
        "model": OLLAMA_MODEL,
        "messages": ollama_messages,
        "stream": False,
        "options": {"temperature": 0.7},
    }

    async with httpx.AsyncClient(timeout=60.0) as client:
        response = await client.post(
            f"{OLLAMA_BASE_URL}/api/chat",
            json=payload,
        )
        response.raise_for_status()
        data = response.json()

    return str(data["message"]["content"])
