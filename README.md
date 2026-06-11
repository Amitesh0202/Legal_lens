# LegalLens

**AI-powered legal document analyzer for India**

Upload any contract, agreement, or Terms of Service — LegalLens detects hidden clauses, cross-references 73 Indian laws, and explains exactly what you're agreeing to in plain language.

*Built for everyday Indians who shouldn't need a lawyer to understand what they're signing.*

---

## Features

| Feature | Description |
|---------|-------------|
| Hidden clause detection | Finds buried terms designed to work against you |
| Indian law cross-reference | Checks against 73 laws across 11 categories |
| Risk scoring | Rates every clause Low to Critical with explanations |
| Future implications | What signing means in 1 month, 1 year, and long-term |
| Plain language | No jargon — explained like a knowledgeable friend |
| Negotiation tips | Actionable ways to push back on unfair terms |
| Legal chatbot | Ask questions about your situation in natural language |
| Multilingual | Full UI in English, Hindi, and Telugu |
| OCR support | Works on scanned PDFs via Tesseract |

---

## Live Demo

**Frontend:** [https://legal-lens-ten.vercel.app](https://legal-lens-ten.vercel.app)  
**API:** [https://legal-lens-5cnc.onrender.com](https://legal-lens-5cnc.onrender.com)

> The backend runs on Render's free tier and may take ~30 seconds to wake up on the first request.

---

## Supported Document Types

Employment Contracts · Rental Agreements · Loan Agreements · Terms of Service · Privacy Policies · NDAs · Builder-Buyer Agreements · Freelance Contracts · Insurance Policies · Partnership Deeds · Franchise Agreements · Investment Agreements

**File formats:** PDF (text & scanned), DOCX, DOC, TXT — up to 10 MB

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 18 + Vite |
| Backend | Python + FastAPI |
| AI | Gemini 2.5 Flash |
| PDF parsing | PyMuPDF (fitz) |
| OCR | Tesseract via pytesseract |
| DOCX parsing | python-docx |
| i18n | React Context API (LangContext) |
| Frontend deploy | Vercel |
| Backend deploy | Render |

---

## Local Setup

### Prerequisites
- Python 3.11+
- Node.js 18+
- A free [Gemini API key](https://aistudio.google.com/app/apikey)

### 1. Clone the repo

```bash
git clone https://github.com/Amitesh0202/Legal_lens.git
cd Legal_lens
```

### 2. Backend

```bash
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Add your API key
echo "GEMINI_API_KEY=your_key_here" > .env

# Start the server
uvicorn main:app --reload
```

Backend runs at `http://localhost:8000`

### 3. Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at `http://localhost:5173`

> The Vite dev server proxies `/api` requests to `localhost:8000` automatically — no extra config needed locally.

---

## Project Structure

```
Legal_lens/
├── backend/
│   ├── main.py                   # FastAPI app, CORS, router registration
│   ├── routes/
│   │   ├── analyze.py            # POST /api/analyze — document analysis
│   │   └── chat.py               # POST /api/chat — legal chatbot
│   ├── services/
│   │   ├── gemini_service.py     # Gemini 2.5 Flash — structured JSON analysis
│   │   ├── chat_service.py       # Gemini 2.5 Flash — conversational chat
│   │   ├── file_processor.py     # PDF / DOCX / TXT text extraction
│   │   └── ocr.py                # Tesseract OCR for scanned PDFs
│   ├── requirements.txt
│   └── .env                      # GEMINI_API_KEY (never committed)
├── frontend/
│   └── src/
│       ├── pages/
│       │   ├── Home.jsx          # Upload + analyze flow
│       │   ├── Results.jsx       # Analysis results display
│       │   └── Laws.jsx          # 73 Indian laws reference (multilingual)
│       ├── components/
│       │   ├── Navbar.jsx        # Top nav with language switcher
│       │   └── ChatBot.jsx       # Floating legal assistant chatbot
│       ├── context/
│       │   └── LangContext.jsx   # Global language state (en / hi / te)
│       └── lib/
│           ├── api.js            # API base URL helper (dev vs production)
│           ├── translations.js   # UI strings for en / hi / te
│           └── lawsData.js       # 73 laws with multilingual descriptions
├── Dockerfile                    # Backend Docker image
├── .gitlab-ci.yml                # GitLab CI/CD config
└── .env.example                  # Template for required environment variables
```

---

## Multilingual Architecture

Language state is managed globally via `LangContext` (`en` / `hi` / `te`). Switching language updates the entire UI instantly.

- **UI strings** — all labels, buttons, and messages in `src/lib/translations.js`
- **Law descriptions** — stored as `{ en, hi, te }` objects in `lawsData.js`; resolved as `field[lang] || field.en`
- **Chatbot** — detects the user's message language and responds in the same language via Gemini's system instruction
- **Law names** — kept in English (standard Indian legal convention)

---

## Indian Laws Coverage

73 laws across 11 categories:

| Category | Notable Laws |
|----------|-------------|
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

## API Reference

Base URL (production): `https://legal-lens-5cnc.onrender.com`

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/` | Health check |
| `POST` | `/api/analyze` | Analyze a document — accepts `multipart/form-data` with `file` and `document_name` |
| `POST` | `/api/chat` | Legal chatbot — accepts `{ messages: [{role, content}] }` |

### Example: Analyze a document

```bash
curl -X POST https://legal-lens-5cnc.onrender.com/api/analyze \
  -F "file=@contract.pdf" \
  -F "document_name=Employment Contract"
```

### Example: Chat

```bash
curl -X POST https://legal-lens-5cnc.onrender.com/api/chat \
  -H "Content-Type: application/json" \
  -d '{"messages": [{"role": "user", "content": "What is RERA?"}]}'
```

---

## Deployment

### Frontend (Vercel)
Connect the GitHub repo to Vercel and set the environment variable:
```
VITE_API_BASE=https://legal-lens-5cnc.onrender.com
```

### Backend (Render)
Connect the GitHub repo to Render as a Python web service:
- **Root Directory:** `backend`
- **Build Command:** `pip install -r requirements.txt`
- **Start Command:** `uvicorn main:app --host 0.0.0.0 --port $PORT`
- **Environment Variable:** `GEMINI_API_KEY=your_key_here`

---

## Disclaimer

LegalLens is an informational tool only. It is **not a substitute for professional legal advice**. Always consult a qualified advocate for important legal matters.

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Please read the [project constitution](.specify/memory/constitution.md) before contributing.

---

## License

© 2026 Amitesh Garg