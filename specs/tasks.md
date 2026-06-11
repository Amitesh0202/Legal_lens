# Tasks: LegalLens Core

## Legend
- `[x]` done  `[~]` in progress  `[ ]` pending
- `P0` = blocks everything  `P1` = core  `P2` = enhancement

---

## Phase 1 — Foundation
- [x] P0 Set up monorepo structure (`backend/`, `frontend/`) _(parallel with: nothing)_
- [x] P0 Create FastAPI app with CORS and health endpoint _(parallel with: frontend scaffold)_
- [x] P0 Scaffold React + Vite frontend with routing _(parallel with: backend setup)_
- [x] P1 Configure Gemini 2.5 Flash via google-generativeai SDK _(blocked by: backend setup)_

## Phase 2 — Core Analysis Pipeline
- [x] P0 PDF text extraction with pdfplumber _(parallel with: DOCX extraction)_
- [x] P0 DOCX text extraction with python-docx _(parallel with: PDF extraction)_
- [x] P0 Design and implement analysis JSON schema _(blocked by: Phase 1)_
- [x] P0 Write Gemini system prompt with structured output contract _(blocked by: schema design)_
- [x] P0 Implement `/analyze` endpoint (upload → extract → analyze → return) _(blocked by: above)_

## Phase 3 — Frontend
- [x] P1 Home page with drag-and-drop file upload _(parallel with: Laws page)_
- [x] P1 Results page — summary card + risk meter _(blocked by: API working)_
- [x] P1 Results page — hidden clauses with severity badges _(parallel with: law violations)_
- [x] P1 Results page — Indian law cross-reference table _(parallel with: hidden clauses)_
- [x] P1 Results page — future implications by timeframe _(parallel with: negotiation tips)_
- [x] P1 Results page — negotiation tips _(parallel with: future implications)_
- [x] P1 Laws reference page with search + category filter _(parallel with: Home page)_
- [x] P1 Navbar component _(parallel with: all pages)_

## Phase 4 — Polish & Deploy
- [x] P1 Global CSS design system (variables, typography, spacing) _(parallel with: all pages)_
- [x] P1 Loading, error, and empty states on all async calls _(blocked by: frontend complete)_
- [x] P1 GitLab CI/CD pipeline for frontend auto-deploy _(parallel with: everything)_
- [x] P1 README with setup instructions _(parallel with: everything)_
- [ ] P2 Mobile responsiveness audit and fixes _(blocked by: frontend complete)_

## Phase 5 — Future Features
- [ ] P2 PDF export of analysis report _(post-hackathon)_
- [ ] P2 "Ask a question about this document" chat interface _(post-hackathon)_
- [ ] P2 Document comparison mode _(post-hackathon)_
- [ ] P2 Browser extension for ToS analysis _(post-hackathon)_
- [ ] P2 User accounts and saved analyses _(post-hackathon)_
- [ ] P2 OCR for scanned PDFs _(post-hackathon)_
- [ ] P2 Multilingual document support _(post-hackathon)_
