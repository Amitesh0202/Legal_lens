# Plan: Ollama AI Fallback — Implementation Blueprint

## Approach
Wrap every Gemini call in a `try/except`. On any exception, delegate to `ollama_service` which calls Ollama's `/api/chat` REST endpoint via `httpx`. Both services expose identical function signatures so the fallback is a single line.

## New Files
- `backend/services/ollama_service.py` — mirrors `gemini_service` and `chat_service` interfaces

## Modified Files
- `backend/services/gemini_service.py` — try/except around Gemini call
- `backend/services/chat_service.py` — try/except around Gemini chat call
- `backend/requirements.txt` — add `httpx>=0.27.0`
- `.env.example` — add `OLLAMA_BASE_URL` and `OLLAMA_MODEL`

## Ollama API Contract

```
POST {OLLAMA_BASE_URL}/api/chat
{
  "model": "{OLLAMA_MODEL}",
  "messages": [...],
  "format": "json",   // analysis only
  "stream": false,
  "options": { "temperature": 0.2 }
}

Response:
{
  "message": { "content": "..." }
}
```

## Fallback Chain

```
gemini_service.analyze_document()
  try:
    → Gemini 2.5 Flash → parse JSON → return { ...result, ai_provider: "gemini" }
  except Exception:
    → logger.warning(...)
    → ollama_service.analyze_document() → return { ...result, ai_provider: "ollama" }
```

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `OLLAMA_BASE_URL` | `http://localhost:11434` | Ollama server URL |
| `OLLAMA_MODEL` | `llama3.2` | Model to use for fallback |

## Recommended Models

| Model | Size | Best for |
|-------|------|----------|
| `llama3.2` | ~2GB | General purpose, good legal text comprehension |
| `mistral` | ~4GB | Strong instruction following |
| `gemma3` | ~3GB | Multilingual-friendly |
