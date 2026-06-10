# LegalLens — Project Constitution

## Mission
Help everyday Indians understand legal documents before signing them — in their own language, without needing a lawyer.

---

## Core Principles

### 1. India-first
- All analysis is grounded in Indian law (73+ laws across 11 categories)
- Reference specific Indian statutes, sections, and amendments by name
- Acknowledge state-specific variations (Rent Control Acts, Shops & Establishments, etc.)

### 2. Plain language above all
- Every explanation must be understandable by a non-lawyer
- No unexplained legal jargon — if a term must be used, define it immediately
- Use analogies and concrete examples where possible

### 3. Multilingual by default
- The app supports English (en), Hindi (hi), and Telugu (te)
- Language state is managed globally via `LangContext` (context/LangContext.jsx)
- UI strings live in `lib/translations.js` — keyed `{ en, hi, te }`
- Law content (short, governs, watchFor, penalty) lives in `lib/lawsData.js` — each field is `{ en, hi, te }`
- Law names and section titles stay in English (standard Indian legal practice)
- The chatbot (ChatBot.jsx + chat_service.py) detects user language and replies in kind
- Any new user-facing string must be added to all three languages in translations.js

### 4. Be honest about risk
- Never downplay a risky clause to seem less alarming
- Risk scores must be consistent — Critical always means real harm is possible
- State implications clearly even if they sound alarming

### 5. Not a substitute for legal advice
- Always include the disclaimer: "This is not legal advice"
- For high-risk documents, always recommend consulting a qualified advocate
- Never tell users their document is "safe to sign" — say "lower risk"

---

## Architecture

### Backend (FastAPI)
```
backend/
├── main.py                  # App entry, CORS, router registration
├── routes/analyze.py        # POST /analyze — document analysis endpoint
├── routes/chat.py           # POST /chat — conversational chatbot endpoint
└── services/
    ├── gemini_service.py    # Gemini 2.5 Flash — structured document analysis
    ├── chat_service.py      # Gemini 2.5 Flash — free-form legal chat
    ├── file_processor.py    # PDF / DOCX / TXT text extraction
    └── ocr.py               # OCR for scanned PDFs
```

### Frontend (React + Vite)
```
frontend/src/
├── pages/
│   ├── Home.jsx             # Upload + analyze flow
│   ├── Results.jsx          # Analysis output display
│   └── Laws.jsx             # Laws reference — reads from lawsData.js with lang
├── components/
│   ├── Navbar.jsx           # Top nav with language switcher (en/hi/te)
│   └── ChatBot.jsx          # Floating legal assistant chatbot
├── context/
│   └── LangContext.jsx      # Global lang state — { lang, setLang, t }
└── lib/
    ├── translations.js      # All UI strings keyed { en, hi, te }
    └── lawsData.js          # 73 laws with multilingual content fields
```

---

## Coding Standards

### Python (Backend)
- FastAPI for all API endpoints; type hints on all function signatures
- `.env` for all secrets — never hardcode API keys
- Root `.env` (`legallens/.env`) is the source of truth; keep `backend/.env` in sync
- Return structured JSON matching the defined schema at all times
- Handle all exceptions gracefully with meaningful error messages
- Gemini system prompt is the single source of truth for output schema
- Truncate document text to 12,000 characters to stay within token limits
- Retry once on JSON parse failure before returning an error
- Strip markdown fences from AI responses before JSON parsing

### JavaScript / React (Frontend)
- Functional components with hooks only — no class components
- CSS per component — no global style pollution
- React Router v6 for navigation
- No heavy UI libraries — keep bundle lean
- Always read `lang` from `useLang()` when rendering translated content
- Law fields (short, governs, watchFor, penalty) are `{ en, hi, te }` objects — always resolve with `field[lang] || field.en`

### Adding a New Language
1. Add translations to `translations.js` under the new locale key
2. Add translated content to every law entry in `lawsData.js`
3. Add the language option to the switcher in `Navbar.jsx`
4. Add the locale to `LangContext.jsx` if validation is needed

---

## Quality Rules
- Every new feature must have a corresponding spec in `specs/`
- No API endpoint ships without input validation
- Frontend must handle loading, error, and empty states for every async call
- All risk severity levels (Low / Medium / High / Critical) must be visually distinct in the UI
- Mobile responsiveness is required for all pages
- Any new user-facing text must be translated into all supported languages before shipping
