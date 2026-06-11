# Changelog

All notable changes to LegalLens are documented here.
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [Unreleased]

### Added
- **Ollama fallback** — if Gemini is unavailable (quota exceeded, network error, or no API key), both document analysis and the chatbot automatically fall back to a locally running Ollama model
- New `backend/services/ollama_service.py` with `analyze_document` and `get_chat_reply` mirroring the Gemini interface
- `OLLAMA_BASE_URL` and `OLLAMA_MODEL` env vars (defaults: `http://localhost:11434` and `llama3.2`)
- All analysis responses now include an `ai_provider` field (`"gemini"` or `"ollama"`)
- `httpx` added to `requirements.txt` for async HTTP calls to Ollama

### Planned
- PDF export of analysis report
- "Ask a question about this document" chat interface
- Document comparison mode (two versions side by side)
- Browser extension for real-time ToS analysis
- OCR support for scanned PDFs

---

## [0.1.0] — 2026-06-09

### Added
- Full-stack web app: FastAPI backend + React/Vite frontend
- Document upload supporting PDF, DOCX, and TXT (up to 10MB)
- AI-powered analysis using Gemini 2.5 Flash
- Plain-English document summary
- Risk scoring (0–100) with Low / Medium / High / Critical labels
- Hidden clause detection with severity ratings per clause
- Indian law cross-reference against 73 laws across 11 categories
- Future implications timeline (Immediately → Long-term)
- Negotiation tips for risky clauses
- Overall verdict with sign/don't-sign guidance
- Laws reference page with search and category filter
- LegalLens brand icon (SVG + favicon.ico)
- GitLab CI/CD pipeline for auto-deploy to GitLab Pages
- Spec-kit project spec folder (.specify/ + specs/)
- Indian Laws Reference document (Word .docx, 73 laws)

### Tech Stack
- Backend: Python 3.11, FastAPI, pdfplumber, python-docx, google-generativeai
- Frontend: React 18, Vite, React Router v6
- AI: Gemini 2.5 Flash (free tier)

---

## How to read this file

- **Added** — new features
- **Changed** — changes to existing features
- **Deprecated** — features being removed in a future version
- **Removed** — features removed in this version
- **Fixed** — bug fixes
- **Security** — vulnerability fixes
