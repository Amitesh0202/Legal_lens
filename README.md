# ⚖️ LegalLens

**AI-powered legal document analyzer for India — now multilingual.**

> Built for everyday Indians who shouldn't need a lawyer to understand what they're signing.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-black?logo=vercel)](https://legal-lens-ten.vercel.app)
[![Backend](https://img.shields.io/badge/Backend-Render-46E3B7?logo=render)](https://render.com)
[![License: AGPL v3](https://img.shields.io/badge/License-AGPLv3-blue.svg)](LICENSE)
[![Python 3.11](https://img.shields.io/badge/Python-3.11-blue?logo=python)](https://python.org)
[![React 18](https://img.shields.io/badge/React-18-61DAFB?logo=react)](https://react.dev)

---

## What it does

Upload any contract, agreement, or Terms of Service — LegalLens finds hidden clauses, checks against 73 Indian laws, and tells you exactly what you're agreeing to in plain language.

- 🔍 **Hidden clause detection** — finds buried terms that could hurt you
- ⚖️ **Indian law cross-reference** — checks against 73 laws across 11 categories
- 📊 **Risk scoring** — rates the document and each clause (Low → Critical)
- 🔮 **Future implications** — what signing means for you in 1 month, 1 year, long-term
- 💬 **Plain language** — no legal jargon, explained like a friend
- 🤝 **Negotiation tips** — how to push back on unfair terms
- 🤖 **Legal assistant chatbot** — ask questions about your legal situation in plain language
- 🌐 **Multilingual** — full UI and analysis in English, हिन्दी, and తెలుగు

---

## Supported Documents

Employment Contracts · Rental Agreements · Loan Agreements · Terms of Service · Privacy Policies · NDAs · Builder-Buyer Agreements · Freelance Contracts · Insurance Policies · Partnership Deeds · Franchise Agreements · Investment Agreements

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Backend | Python 3.11 + FastAPI |
| Frontend | React 18 + Vite |
| AI (primary) | Gemini 2.5 Flash |
| AI (fallback) | Ollama (llama3.2 by default) |
| PDF parsing | PyMuPDF |
| DOCX parsing | python-docx |
| i18n | React Context + translations.js |
| Deploy | Vercel (frontend) + Render (backend) |

---

## Installation

### Prerequisites

- Python 3.11+
- Node.js 18+
- A free [Gemini API key](https://aistudio.google.com/app/apikey) *(or Ollama for fully local use)*

### 1. Clone the repo

```bash
git clone https://github.com/Amitesh0202/Legal_lens.git
cd Legal_lens
```

### 2. Backend setup

```bash
cd backend
python -m venv venv

# Activate the virtual environment
source venv/bin/activate        # macOS/Linux
venv\Scripts\activate           # Windows

pip install -r requirements.txt

# Create your .env file
cp ../.env.example .env
# Open .env and paste your GEMINI_API_KEY
```

### 3. Frontend setup

```bash
cd frontend
npm install
```

### 4. Ollama (optional — local AI fallback)

If Gemini is unavailable or you prefer fully local inference:

```bash
# Install from https://ollama.com/download, then:
ollama pull llama3.2
ollama serve
```

Add to `backend/.env`:
```
OLLAMA_BASE_URL=http://localhost:11434
OLLAMA_MODEL=llama3.2
```

No Gemini key? Leave `GEMINI_API_KEY` blank — LegalLens will use Ollama automatically.

---

## Usage

### Run locally

**Terminal 1 — Backend:**
```bash
cd backend
source venv/bin/activate   # or venv\Scripts\activate on Windows
uvicorn main:app --reload
# API running at http://localhost:8000
```

**Terminal 2 — Frontend:**
```bash
cd frontend
npm run dev
# App running at http://localhost:5173
```

Or use the convenience script:
```bash
bash .specify/scripts/bash/dev.sh
```

### Analyze a document

1. Open [http://localhost:5173](http://localhost:5173)
2. Drag and drop a PDF, DOCX, or TXT file (up to 10MB)
3. Click **Analyze Document**
4. Review the results — risk score, hidden clauses, law references, negotiation tips
5. Use the **chatbot** to ask follow-up questions in English, Hindi, or Telugu

### Developer commands (Makefile)

```bash
make install      # Install all dependencies
make lint-py      # Lint backend (ruff + bandit)
make lint-js      # Lint frontend (eslint)
make format-py    # Format backend (ruff)
make format-js    # Format frontend (prettier)
make audit        # pip-audit + npm audit
make test         # Run pytest with coverage
make qa           # Run all checks
make dev          # Start backend + frontend
```

---

## API Reference

| Method | Path | Description |
|--------|------|-------------|
| `POST` | `/api/analyze` | Analyze an uploaded document (PDF/DOCX/TXT) |
| `POST` | `/api/chat` | Legal assistant chat |
| `GET` | `/` | Health check |

### `POST /api/analyze`

```bash
curl -X POST https://your-backend.onrender.com/api/analyze \
  -F "file=@contract.pdf" \
  -F "document_name=My Contract"
```

Response includes `ai_provider: "gemini" | "ollama"` so you know which model handled it.

### `POST /api/chat`

```json
{
  "messages": [{"role": "user", "content": "What is RERA?"}],
  "lang": "en"
}
```

---

## AI Provider Fallback

LegalLens uses a two-tier AI strategy for resilience:

1. **Gemini 2.5 Flash** (primary) — fast, JSON-native, optimized for structured legal analysis
2. **Ollama** (fallback) — kicks in automatically if Gemini fails for any reason

The switch is seamless — no errors, no restarts, no config changes needed at runtime.

---

## Indian Laws Coverage

73 laws across 11 categories:

| Category | Notable Laws |
|----------|-------------|
| Financial & Banking | RBI Act, SEBI Act, FEMA, IBC, SARFAESI, PMLA, NI Act |
| Contract & Civil | Indian Contract Act 1872, Arbitration & Conciliation Act |
| Property & Real Estate | RERA 2016, Transfer of Property Act, Registration Act |
| Employment & Labour | Code on Wages, Maternity Benefit Act, POSH Act |
| Consumer Protection | Consumer Protection Act 2019, FSSAI Act |
| Digital & Data Privacy | DPDPA 2023, IT Act 2000 |
| Criminal Law | BNS 2023, Prevention of Corruption Act |
| Business & IP | Patents Act, Copyright Act, Competition Act |
| Environment | Environment Protection Act |

---

## Project Structure

```
Legal_lens/
├── backend/                      # FastAPI backend
│   ├── main.py                   # App entry, CORS, router registration
│   ├── routes/
│   │   ├── analyze.py            # POST /api/analyze
│   │   └── chat.py               # POST /api/chat
│   ├── services/
│   │   ├── gemini_service.py     # Gemini 2.5 Flash (primary AI)
│   │   ├── ollama_service.py     # Ollama (fallback AI)
│   │   ├── chat_service.py       # Chatbot logic with lang support
│   │   ├── file_processor.py     # PDF / DOCX / TXT extraction
│   │   └── ocr.py                # OCR for scanned PDFs
│   └── requirements.txt
├── frontend/                     # React + Vite frontend
│   └── src/
│       ├── pages/
│       │   ├── Home.jsx          # Upload + analyze flow
│       │   ├── Results.jsx       # Analysis results display
│       │   └── Laws.jsx          # Indian laws reference
│       ├── components/
│       │   ├── Navbar.jsx        # Top nav with language switcher
│       │   └── ChatBot.jsx       # Floating legal assistant chatbot
│       ├── context/
│       │   └── LangContext.jsx   # Global language state (en/hi/te)
│       └── lib/
│           ├── translations.js   # UI strings in 3 languages
│           └── lawsData.js       # 73 laws with multilingual descriptions
├── specs/                        # Spec-driven development docs
│   ├── 001-legallens-core/
│   └── 002-ollama-fallback/
├── .env.example                  # Required environment variables
├── Makefile                      # Developer commands
├── Dockerfile                    # Container support
└── .gitlab-ci.yml                # CI/CD pipeline
```

---

## Contributing

We welcome contributions! Please read [CONTRIBUTING.md](CONTRIBUTING.md) and the [project constitution](.specify/memory/constitution.md) before opening a PR.

**Quick start:**
```bash
git checkout -b feature/your-feature-name
# make your changes
make lint          # check code quality
git commit -m "feat: describe your change"
# open a Pull Request / Merge Request
```

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full workflow, commit message format, and what not to contribute.

---

## Disclaimer

LegalLens is an informational tool. It is **not a substitute for professional legal advice**. For important documents, always consult a qualified advocate.

---

## License

This project is licensed under the [GNU Affero General Public License v3.0](LICENSE).
