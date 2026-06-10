# ⚖️ LegalLens

**AI-powered legal document analyzer for India — now multilingual.**
Upload any contract, agreement, or Terms of Service — LegalLens finds hidden clauses, checks against 73 Indian laws, and tells you exactly what you're agreeing to in plain language.

> Built for everyday Indians who shouldn't need a lawyer to understand what they're signing.

---

## What it does

- 🔍 **Hidden clause detection** — finds buried terms that could hurt you
- ⚖️ **Indian law cross-reference** — checks against 73 laws across 11 categories
- 📊 **Risk scoring** — rates the document and each clause (Low → Critical)
- 🔮 **Future implications** — what signing means for you in 1 month, 1 year, long-term
- 💬 **Plain language** — no legal jargon, explained like a friend
- 🤝 **Negotiation tips** — how to push back on unfair terms
- 🤖 **Legal assistant chatbot** — ask questions about your legal situation in plain language
- 🌐 **Multilingual** — full UI and law descriptions in English, हिन्दी, and తెలుగు

---

## Supported Documents

Employment Contracts · Rental Agreements · Loan Agreements · Terms of Service ·
Privacy Policies · NDAs · Builder-Buyer Agreements · Freelance Contracts · Insurance Policies · Partnership Deeds · Franchise Agreements · Investment Agreements

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Backend | Python 3.11 + FastAPI |
| Frontend | React 18 + Vite |
| AI | Gemini 2.5 Flash |
| PDF parsing | pdfplumber |
| DOCX parsing | python-docx |
| i18n | React Context (LangContext) + translations.js |
| Deploy | GitLab Pages (frontend) |

---

## Local Setup

### 1. Get a free Gemini API key
Go to [aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey) → Create API Key

### 2. Backend
```bash
cd backend
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate
pip install -r requirements.txt
# Edit .env → paste your GEMINI_API_KEY
uvicorn main:app --reload
```

### 3. Frontend
```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

Or use the setup script:
```bash
bash .specify/scripts/bash/setup.sh
bash .specify/scripts/bash/dev.sh
```

> **Note:** The `.env` file lives in the project root (`legallens/.env`) and also needs to be present in `legallens/backend/.env`. Keep both in sync.

---

## Project Structure

```
legallens/
├── backend/                      # FastAPI backend
│   ├── main.py                   # App entry, CORS, router registration
│   ├── routes/
│   │   ├── analyze.py            # POST /analyze — document analysis
│   │   └── chat.py               # POST /chat — legal assistant chatbot
│   ├── services/
│   │   ├── gemini_service.py     # Gemini 2.5 Flash — document analysis
│   │   ├── chat_service.py       # Gemini 2.5 Flash — conversational chat
│   │   ├── file_processor.py     # PDF / DOCX / TXT extraction
│   │   └── ocr.py                # OCR for scanned PDFs
│   ├── requirements.txt
│   └── .env                      # GEMINI_API_KEY (keep in sync with root .env)
├── frontend/                     # React + Vite frontend
│   └── src/
│       ├── pages/
│       │   ├── Home.jsx          # Upload + analyze flow
│       │   ├── Results.jsx       # Analysis results display
│       │   └── Laws.jsx          # Indian laws reference (multilingual)
│       ├── components/
│       │   ├── Navbar.jsx        # Top nav with language switcher
│       │   └── ChatBot.jsx       # Floating legal assistant chatbot
│       ├── context/
│       │   └── LangContext.jsx   # Global language state (en / hi / te)
│       └── lib/
│           ├── translations.js   # UI strings for en / hi / te
│           └── lawsData.js       # 73 laws with multilingual descriptions
├── .specify/                     # Spec-kit config
│   ├── memory/constitution.md    # Project principles and coding standards
│   └── scripts/bash/             # setup.sh, dev.sh
├── .env                          # GEMINI_API_KEY (root — source of truth)
├── .gitlab-ci.yml                # CI/CD — auto-deploys frontend to GitLab Pages
├── CHANGELOG.md
├── CONTRIBUTING.md
└── README.md
```

---

## Multilingual Architecture

Language state is managed globally via `LangContext` (`en` / `hi` / `te`).

- **UI strings** — all labels, buttons, and messages live in `src/lib/translations.js`, keyed by language
- **Law descriptions** — `src/lib/lawsData.js` stores `short`, `governs`, `watchFor`, and `penalty` as `{ en, hi, te }` objects. Law names and section titles stay in English (standard Indian legal practice)
- **Chatbot** — automatically detects the user's message language and responds in the same language via Gemini's instruction
- **Language switcher** — in the Navbar; switching updates the entire UI instantly

---

## Indian Laws Coverage

73 laws across 11 categories:

| Category | Notable Laws |
|----------|------|
| Financial & Banking | RBI Act, Banking Regulation Act, SEBI Act, FEMA, IBC, SARFAESI, PMLA, NI Act |
| Contract & Civil | Indian Contract Act 1872, Arbitration & Conciliation Act, Limitation Act |
| Property & Real Estate | RERA 2016, Transfer of Property Act, Registration Act |
| Employment & Labour | Code on Wages, Maternity Benefit Act, POSH Act, Minimum Wages Act |
| Consumer Protection | Consumer Protection Act 2019, FSSAI Act |
| Digital & Data Privacy | DPDPA 2023, IT Act 2000 |
| Criminal Law | BNS 2023, Prevention of Corruption Act |
| Business & IP | Patents Act, Copyright Act, Competition Act |
| Environment | Environment Protection Act |

---

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| POST | `/analyze` | Analyze an uploaded document (PDF/DOCX/TXT) |
| POST | `/chat` | Legal assistant chat (conversation history) |
| GET | `/` | Health check |

---

## Disclaimer

LegalLens is an informational tool. It is **not a substitute for professional legal advice**. For important documents, always consult a qualified advocate.

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Please read the [project constitution](.specify/memory/constitution.md) first.
