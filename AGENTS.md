# AGENTS.md — LegalLens

Guidance for AI agents working on this codebase.

---

## Project Overview

LegalLens is a full-stack web app that analyzes Indian legal documents. Users upload a PDF, DOCX, or TXT file; the backend extracts text, sends it to Gemini 2.5 Flash with a structured prompt, and returns a risk assessment including hidden clauses, Indian law cross-references, future implications, and negotiation tips.

---

## Repository Structure

```
legallens/
├── backend/
│   ├── main.py                    # FastAPI app entry point, CORS, router registration
│   ├── requirements.txt
│   ├── .env.example
│   ├── routes/
│   │   └── analyze.py             # POST /analyze, GET /health, GET /laws
│   ├── services/
│   │   ├── file_processor.py      # PDF/DOCX/TXT text extraction + OCR fallback
│   │   ├── gemini_service.py      # Gemini 2.5 Flash calls, prompt, JSON parse, validate
│   │   └── ocr.py                 # Tesseract OCR wrapper for scanned PDFs
│   └── tests/
│       ├── conftest.py            # Pytest fixtures
│       ├── test_api.py            # Endpoint tests
│       └── test_utils.py          # Unit tests for services
├── frontend/
│   ├── src/
│   │   ├── pages/                 # Home.jsx, Results.jsx, Laws.jsx
│   │   └── components/            # Navbar.jsx
│   └── public/                    # favicon.ico, logo.svg
├── specs/001-legallens-core/      # spec.md, plan.md, tasks.md, data-model.md, research.md
├── .specify/                      # constitution.md, templates, scripts
├── .gitlab-ci.yml
└── [root config files]
```

---

## Backend

### Stack
- Python 3.11+
- FastAPI + uvicorn
- `google-genai` (new SDK — **not** `google-generativeai`)
- PyMuPDF (`fitz`) for PDF extraction
- `python-docx` for DOCX extraction
- `pytesseract` + Pillow for OCR on scanned PDFs
- `python-dotenv` for env vars

### Running
```bash
cd backend
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env       # add GEMINI_API_KEY
uvicorn main:app --reload --port 8000
```

### Key endpoint
`POST /analyze`
Form fields: `file` (PDF/DOCX/TXT, optional), `text` (string, optional), `document_name` (string, optional)
Returns: JSON with `document_type`, `summary`, `risk_score`, `risk_label`, `parties`, `key_dates`, `hidden_clauses`, `future_implications`, `law_violations`, `negotiation_tips`, `overall_verdict`

### Environment
Backend reads `backend/.env` for `GEMINI_API_KEY`. Without it, the server raises a `RuntimeError` on startup.

### Gemini model
Set to `gemini-2.5-flash` in `services/gemini_service.py`. Do not downgrade — older models have worse legal reasoning and structured output.

### JSON parsing
Gemini can wrap responses in markdown fences. `gemini_service.py` uses regex to strip fences and extract the JSON block. `response_mime_type="application/json"` is set to reduce this. If you modify the prompt, keep the instruction to respond with raw JSON only. Thinking is disabled (`thinking_budget=0`) for speed.

### File processing
- **PDF:** PyMuPDF text extraction, falls back to Tesseract OCR on image-only pages
- **DOCX:** python-docx paragraph extraction, skips empty paragraphs
- **TXT:** UTF-8 decode, falls back to UTF-16 then Latin-1

---

## Frontend

### Stack
- React 18 + Vite
- React Router v6
- Plain CSS with CSS variables (no Tailwind, no heavy UI libs)

### Running
```bash
cd frontend
npm install
npm run dev   # http://localhost:5173
```

### Pages
- `/` — `Home.jsx` — drag-and-drop upload, analyze button
- `/results` — `Results.jsx` — full analysis display (risk meter, clauses, law table, implications, tips)
- `/laws` — `Laws.jsx` — searchable reference of all 73 Indian laws

### API calls
Frontend proxies `/api/*` to `http://localhost:8000` via Vite config. In production, set `VITE_API_URL` to the deployed backend URL.

### Results state
Analysis result is passed via React Router `state` — it is lost on page refresh by design (privacy: no data stored).

---

## Indian Law Coverage
73 laws across 11 categories. Full list in `frontend/src/pages/Laws.jsx` and documented in `specs/001-legallens-core/research.md`. When adding new laws, update both files.

---

## Coding Conventions
- All backend services are **plain functions**, not classes
- FastAPI routes use `UploadFile | None` and `str | None` for optional inputs
- Keep Gemini prompt and parsing logic in `services/gemini_service.py` only — not in routes
- Frontend components receive data as props — no global state management library
- CSS variables only — no hardcoded colours in component CSS files
- Never store uploaded documents — analysis is in-memory only

## What to Avoid
- Do not switch Gemini SDK back to `google.generativeai` — it is deprecated
- Do not add `localStorage` usage in frontend — results are intentionally session-only
- Do not commit `backend/.env` — it contains the API key
- Do not add non-Indian law references — this project is India-specific
- Do not import heavy UI libraries (Bootstrap, Material UI, Chakra) — keep bundle lean
- Do not enable Gemini thinking mode — it adds latency with no benefit for structured output
