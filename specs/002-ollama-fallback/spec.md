# Spec: Ollama AI Fallback

## Problem
LegalLens relies entirely on Gemini 2.5 Flash. If the Gemini API is unavailable — due to quota exhaustion, network issues, or a missing API key — the entire application fails. This is a single point of failure for a tool people depend on at critical moments (before signing a document).

## Solution
Add Ollama as a transparent fallback AI provider. When Gemini fails for any reason, the system automatically retries the same request using a locally running Ollama model. The user sees no error and no interruption — just a slightly slower response.

## Target Users
- **Self-hosters** running LegalLens on their own machine without a Gemini API key
- **All users** benefiting from improved reliability when Gemini hits rate limits

## User Stories
- As a user, I want the app to keep working even if Gemini is unavailable so I don't lose my work
- As a developer, I want to run LegalLens locally without needing a Gemini API key
- As a self-hoster, I want document analysis to stay on my own infrastructure for privacy

## Requirements

### Must Have
- [x] Auto-fallback to Ollama when Gemini raises any exception
- [x] Fallback covers both document analysis and chat endpoints
- [x] `ai_provider` field in responses indicates which model handled the request
- [x] Configurable via `OLLAMA_BASE_URL` and `OLLAMA_MODEL` env vars
- [x] Sensible defaults (`http://localhost:11434`, `llama3.2`)

### Nice to Have
- [ ] UI indicator showing which AI provider handled the response
- [ ] Admin endpoint to check Ollama availability status

## Out of Scope
- Automatic Ollama installation
- Model quality comparison / auto-selection
- Load balancing between Gemini and Ollama

## Acceptance Criteria
- [x] When `GEMINI_API_KEY` is blank, all requests succeed via Ollama
- [x] When Gemini returns a network error, Ollama handles the request seamlessly
- [x] Response schema is identical regardless of which provider is used
- [x] `ai_provider` field is present in all analysis responses
