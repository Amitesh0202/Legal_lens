# Tasks: Ollama AI Fallback

## Legend
- `[x]` done  `[~]` in progress  `[ ]` pending
- `P0` = blocks everything  `P1` = core  `P2` = enhancement

---

## Implementation
- [x] P0 Create `backend/services/ollama_service.py` with `analyze_document()` and `get_chat_reply()`
- [x] P0 Add try/except fallback in `gemini_service.analyze_document()`
- [x] P0 Add try/except fallback in `chat_service.get_chat_reply()`
- [x] P1 Add `httpx>=0.27.0` to `requirements.txt`
- [x] P1 Add `OLLAMA_BASE_URL` and `OLLAMA_MODEL` to `.env.example`
- [x] P1 Add `ai_provider` field to all analysis responses
- [x] P1 Update `chat_service` to pass `lang` through to Ollama fallback
- [x] P1 Update README with Ollama setup instructions
- [x] P1 Update USER_MANUAL with Ollama fallback explanation
- [x] P1 Update CHANGELOG

## Future
- [ ] P2 UI badge showing which AI provider handled the response
- [ ] P2 `/api/health` endpoint reporting Gemini + Ollama availability
- [ ] P2 Configurable fallback timeout
