import logging
import os

import google.generativeai as genai

from services import ollama_service

logger = logging.getLogger(__name__)

genai.configure(api_key=os.environ.get("GEMINI_API_KEY"))

MODEL = "gemini-2.5-flash"

LANG_NAMES = {"en": "English", "hi": "Hindi", "te": "Telugu"}


def build_system_prompt(lang: str) -> str:
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


async def get_chat_reply(messages: list, lang: str = "en") -> str:
    try:
        model = genai.GenerativeModel(
            model_name=MODEL, system_instruction=build_system_prompt(lang)
        )

        history = []
        for msg in messages[:-1]:
            role = "user" if msg["role"] == "user" else "model"
            history.append({"role": role, "parts": [msg["content"]]})

        last_message = messages[-1]["content"]

        chat = model.start_chat(history=history)
        response = await chat.send_message_async(last_message)
        return str(response.text)

    except Exception as gemini_error:
        logger.warning(f"Gemini chat failed ({gemini_error}), falling back to Ollama...")
        return await ollama_service.get_chat_reply(messages, lang=lang)
