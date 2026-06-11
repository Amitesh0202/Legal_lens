import os
import json
import re
import logging
import google.generativeai as genai
from services import ollama_service

logger = logging.getLogger(__name__)

genai.configure(api_key=os.environ.get("GEMINI_API_KEY", ""))

MODEL = "gemini-2.5-flash"

SYSTEM_PROMPT = """You are LegalLens, an expert Indian legal analyst. Analyze the provided document and return a structured JSON response.

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


async def analyze_document(text: str, document_name: str) -> dict:
    prompt = f"""Document Name: {document_name}

Document Content:
{text[:50000]}

Analyze this document thoroughly and return the JSON response."""

    try:
        model = genai.GenerativeModel(
            model_name=MODEL,
            system_instruction=SYSTEM_PROMPT,
        )

        response = model.generate_content(
            prompt,
            generation_config=genai.GenerationConfig(
                temperature=0.2,
                response_mime_type="application/json",
            ),
        )

        raw = response.text.strip()

        # Strip markdown code blocks if present
        raw = re.sub(r'^```(?:json)?\s*', '', raw)
        raw = re.sub(r'\s*```$', '', raw)

        try:
            result = json.loads(raw)
            result["ai_provider"] = "gemini"
            return result
        except json.JSONDecodeError:
            # Return a graceful error structure
            return {
                "document_type": "Unknown",
                "summary": "Analysis failed — could not parse AI response.",
                "overall_risk": "Unknown",
                "risk_score": 0,
                "future_implications": {"one_month": "", "one_year": "", "long_term": ""},
                "clauses": [],
                "applicable_laws": [],
                "negotiation_tips": [],
                "red_flags": ["Analysis could not be completed. Please try again."],
                "good_clauses": [],
                "ai_provider": "gemini",
                "raw_response": raw[:500],
            }

    except Exception as gemini_error:
        logger.warning(f"Gemini failed ({gemini_error}), falling back to Ollama...")
        return await ollama_service.analyze_document(text, document_name)
