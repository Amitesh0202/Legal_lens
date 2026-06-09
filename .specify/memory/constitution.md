# LegalLens — Project Constitution

## Mission
Help everyday Indians understand legal documents before signing them — without needing a lawyer.

## Core Principles

### 1. India-first
- All analysis is grounded in Indian law (73+ laws across 11 categories)
- Use Indian legal terminology and reference specific Indian statutes, sections, and amendments
- Acknowledge state-specific variations (Rent Control Acts, Shops & Establishments, etc.)

### 2. Plain English above all
- Every explanation must be understandable by a non-lawyer
- No unexplained legal jargon — if a term must be used, define it immediately
- Use analogies and concrete examples where possible

### 3. Be honest about risk
- Never downplay a risky clause to seem less alarming
- Risk scores must be consistent — a Critical clause always means real harm is possible
- State implications clearly even if they sound scary

### 4. Not a substitute for legal advice
- Always include the disclaimer: "This is not legal advice"
- For high-risk documents, always recommend consulting a qualified advocate
- Never tell users their document is "safe to sign" — say it is "lower risk"

## Coding Standards

### Python (Backend)
- FastAPI for all API endpoints
- Type hints on all function signatures
- `.env` for all secrets — never hardcode API keys
- Return structured JSON matching the defined schema at all times
- Handle all exceptions gracefully with meaningful error messages

### JavaScript / React (Frontend)
- Functional components with hooks only — no class components
- CSS modules or plain CSS per component — no global style pollution
- React Router v6 for navigation
- No heavy UI libraries — keep bundle lean

### AI Prompting
- System prompt is the single source of truth for output schema
- Always strip markdown fences from AI responses before JSON parsing
- Truncate document text to 12,000 characters to stay within token limits
- Retry once on JSON parse failure before returning an error

## Quality Rules
- Every new feature must have a corresponding spec in `specs/`
- No API endpoint ships without input validation
- Frontend must handle loading, error, and empty states for every async call
- All risk severity levels (Low / Medium / High / Critical) must be visually distinct in the UI
- Mobile responsiveness is required for all pages
