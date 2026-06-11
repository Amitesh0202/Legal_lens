# Plan: LegalLens Core — Technical Blueprint

## Stack Decisions

| Layer | Choice | Reason |
|-------|--------|--------|
| Backend | Python + FastAPI | Fast to build, async support, great PDF/DOCX library ecosystem |
| Frontend | React + Vite | Component reuse (clause cards, badges), fast HMR, small bundle |
| AI | Gemini 2.5 Flash | Free tier, strong legal reasoning, handles long context well |
| PDF parsing | pdfplumber | Best text extraction quality for complex PDFs |
| DOCX parsing | python-docx | Native support, handles most DOCX formatting |
| Routing | React Router v6 | Simple, no extra dependencies |
| Deployment | GitLab Pages (frontend) + any Python host (backend) | CI/CD built-in, free frontend hosting |
| Styling | Plain CSS with CSS variables | No build-time dependencies, easy to maintain |

## Architecture

```
Browser
  └── React SPA (Vite)
        ├── / (Home — upload page)
        ├── /results (Analysis results)
        └── /laws (Laws reference)
              │
              │ POST /analyze (multipart/form-data)
              ▼
        FastAPI Backend
          ├── File validator (type + size)
          ├── Text extractor (pdfplumber / python-docx)
          ├── Gemini 2.5 Flash (analysis)
          └── JSON response → React
```

## API Endpoints

### `POST /analyze`
- **Input:** `multipart/form-data` — `file` (PDF/DOCX/TXT) + `document_name` (string)
- **Output:** Structured JSON (see data-model.md)
- **Limits:** 10MB max file size, 12,000 char text limit sent to AI

### `GET /health`
- Returns `{ status: "ok" }` — for CI/CD health checks

### `GET /laws`
- Returns law categories and count — for frontend info display

## Data Flow

1. User selects file in browser → React holds it in state
2. User clicks "Analyze" → `FormData` POST to `/api/analyze`
3. FastAPI validates file type and size
4. Text extracted from document (pdfplumber / python-docx)
5. Text truncated to 12,000 characters
6. Structured prompt + document text sent to Gemini 2.5 Flash
7. AI returns JSON (with possible markdown fences stripped)
8. JSON parsed and validated
9. Response sent to React frontend
10. React navigates to `/results` with analysis data in router state
11. Results page renders all sections (summary, clauses, laws, implications, tips)

## Key Design Decisions

### No document storage
Documents are analyzed in-memory and never written to disk or database. Privacy by design.

### Router state for results
Analysis result is passed via React Router `state` rather than URL params or localStorage. This means results are lost on page refresh — acceptable for v1 (user can re-upload).

### Gemini prompt as schema contract
The system prompt defines the exact JSON schema. Any deviation from the schema is caught by JSON parsing and returns a 500 error with a retry suggestion.

### Text truncation at 12,000 chars
Balances analysis quality vs. Gemini token limits and latency. Documents longer than ~8 pages will be analyzed based on their first section — acceptable for most contracts where risky clauses appear early.

## Edge Cases

| Case | Handling |
|------|----------|
| Scanned PDF (image-only) | `extract_text()` returns empty → 400 error with clear message |
| File > 10MB | Rejected before extraction with 400 error |
| Gemini returns non-JSON | Strip markdown fences, retry once, then 500 error |
| Unsupported file type | Rejected with 400 error |
| Gemini API key missing | 500 error on startup (FastAPI will fail to configure genai) |

## Risks

| Risk | Mitigation |
|------|------------|
| Gemini free tier rate limits | Display clear error message; user can retry |
| AI hallucinating law references | Prompt explicitly asks for real Indian laws only; UI shows disclaimer |
| Large documents analyzed partially | Show character limit warning in UI (future) |
| CORS issues in production | Backend has `allow_origins=["*"]` for now; restrict to frontend domain in prod |
