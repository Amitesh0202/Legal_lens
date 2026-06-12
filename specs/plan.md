# Plan: LegalLens Core — Technical Blueprint

## Stack Decisions

| Layer | Choice | Reason |
|-------|--------|--------|
| Backend | Python + FastAPI | Fast to build, async support, great PDF/DOCX library ecosystem |
| Frontend | React + Vite | Component reuse (clause cards, badges), fast HMR, small bundle |
| AI (primary) | Gemini 2.5 Flash | Free tier, strong legal reasoning, handles long context well |
| AI (fallback) | Ollama (llama3.2) | Local fallback when Gemini is unavailable; no data leaves infrastructure |
| PDF parsing | PyMuPDF | Robust text extraction for complex PDFs |
| DOCX parsing | python-docx | Native support, handles most DOCX formatting |
| Routing | React Router v6 | Simple, no extra dependencies |
| Deployment | Vercel (frontend) + Render (backend) | Free tier, CI/CD built-in |
| Styling | Plain CSS with CSS variables | No build-time dependencies, easy to maintain |

## Architecture

```
Browser
  └── React SPA (Vite) — Vercel
        ├── / (Home — upload page)
        ├── /results (Analysis results)
        └── /laws (Laws reference)
              │
              │ POST /api/analyze (multipart/form-data)
              │ POST /api/chat (JSON)
              ▼
        FastAPI Backend — Render
          ├── File validator (type + size)
          ├── Text extractor (PyMuPDF / python-docx)
          ├── gemini_service → Gemini 2.5 Flash
          │     └── on failure → ollama_service → Ollama
          └── JSON response → React
```

## API Endpoints

### `POST /api/analyze`
- **Input:** `multipart/form-data` — `file` (PDF/DOCX/TXT) + `document_name` (string)
- **Output:** Structured JSON (see data-model.md) + `ai_provider` field
- **Limits:** 10MB max file size, 50,000 char text limit sent to AI

### `POST /api/chat`
- **Input:** `{ messages: [...], lang: "en" | "hi" | "te" }`
- **Output:** `{ reply: string }`

### `GET /`
- Returns `{ status: "ok" }` — health check for Render

## Data Flow

1. User selects file in browser → React holds it in state
2. User clicks "Analyze" → `FormData` POST to `/api/analyze`
3. FastAPI validates file type and size
4. Text extracted from document (PyMuPDF / python-docx)
5. Text truncated to 50,000 characters
6. Structured prompt + document text sent to Gemini 2.5 Flash
7. On Gemini failure → automatically retries with Ollama
8. AI returns JSON (markdown fences stripped if present)
9. JSON parsed and returned with `ai_provider` field
10. React navigates to `/results` with analysis data in router state

## Key Design Decisions

### No document storage
Documents are analyzed in-memory and never written to disk or database. Privacy by design.

### Two-tier AI fallback
Gemini is primary for speed and JSON-native output. Ollama is the fallback for resilience. The switch is transparent to the user.

### Language-aware chatbot
The UI language (EN/HI/TE) is sent with every chat request. The system prompt explicitly instructs the AI to respond in that language, overriding message-language detection.

### Router state for results
Analysis result is passed via React Router `state`. Results are lost on refresh — acceptable for v1.

## Edge Cases

| Case | Handling |
|------|----------|
| Scanned PDF (image-only) | `extract_text()` returns empty → 400 error with clear message |
| File > 10MB | Rejected before extraction with 400 error |
| Gemini unavailable | Auto-fallback to Ollama |
| Ollama also unavailable | Returns graceful error structure |
| Unsupported file type | Rejected with 400 error |

## Risks

| Risk | Mitigation |
|------|------------|
| Gemini free tier rate limits | Ollama fallback handles overflow automatically |
| AI hallucinating law references | Prompt explicitly asks for real Indian laws only; UI shows disclaimer |
| Large documents analyzed partially | 50,000 char limit covers most contracts |
| CORS issues in production | Backend restricted to Vercel frontend domain |
