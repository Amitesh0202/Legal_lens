# Tasks: LegalLens Core

## Legend
- `[x]` done  `[~]` in progress  `[ ]` pending
- `P0` = blocks everything  `P1` = core  `P2` = enhancement

---

## Phase 1 — Foundation
- [x] P0 Set up monorepo structure (`backend/`, `frontend/`)
- [x] P0 Create FastAPI app with CORS and health endpoint
- [x] P0 Scaffold React + Vite frontend with routing
- [x] P1 Configure Gemini 2.5 Flash via google-generativeai SDK

## Phase 2 — Core Analysis Pipeline
- [x] P0 PDF text extraction with PyMuPDF
- [x] P0 DOCX text extraction with python-docx
- [x] P0 Design and implement analysis JSON schema
- [x] P0 Write Gemini system prompt with structured output contract
- [x] P0 Implement `/api/analyze` endpoint (upload → extract → analyze → return)

## Phase 3 — Frontend
- [x] P1 Home page with drag-and-drop file upload
- [x] P1 Results page — summary card + risk meter
- [x] P1 Results page — hidden clauses with severity badges
- [x] P1 Results page — Indian law cross-reference table
- [x] P1 Results page — future implications by timeframe
- [x] P1 Results page — negotiation tips
- [x] P1 Laws reference page with search + category filter
- [x] P1 Navbar component with language switcher

## Phase 4 — Multilingual Support
- [x] P1 LangContext for global language state (en / hi / te)
- [x] P1 translations.js with all UI strings in 3 languages
- [x] P1 lawsData.js with law descriptions in 3 languages
- [x] P1 Chatbot language-aware replies (respects UI lang toggle)

## Phase 5 — AI Resilience
- [x] P1 Ollama fallback service (ollama_service.py)
- [x] P1 Auto-fallback in gemini_service on any exception
- [x] P1 Auto-fallback in chat_service on any exception
- [x] P1 `ai_provider` field in all analysis responses

## Phase 6 — Polish & Deploy
- [x] P1 Global CSS design system (variables, typography, spacing)
- [x] P1 Loading, error, and empty states on all async calls
- [x] P1 Deploy backend to Render
- [x] P1 Deploy frontend to Vercel
- [x] P1 README with setup instructions + Ollama docs
- [ ] P2 Mobile responsiveness audit and fixes

## Phase 7 — Future Features
- [ ] P2 PDF export of analysis report
- [ ] P2 Document comparison mode
- [ ] P2 Browser extension for ToS analysis
- [ ] P2 User accounts and saved analyses
- [ ] P2 OCR for scanned PDFs
- [ ] P2 Lawyer connect / referral integration
