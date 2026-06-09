# ⚖️ LegalLens

**AI-powered legal document analyzer for India.**
Upload any contract, agreement, or Terms of Service — LegalLens finds hidden clauses, checks against 73 Indian laws, and tells you exactly what you're agreeing to in plain English.

> Built for everyday Indians who shouldn't need a lawyer to understand what they're signing.

---

## What it does

- 🔍 **Hidden clause detection** — finds buried terms that could hurt you
- ⚖️ **Indian law cross-reference** — checks against 73 laws across 11 categories
- 📊 **Risk scoring** — rates the document and each clause (Low → Critical)
- 🔮 **Future implications** — what signing means for you in 1 month, 1 year, long-term
- 💬 **Plain English** — no legal jargon
- 🤝 **Negotiation tips** — how to push back on unfair terms

---

## Supported Documents

Employment Contracts · Rental Agreements · Loan Agreements · Terms of Service ·
Privacy Policies · NDAs · Builder-Buyer Agreements · Freelance Contracts · Insurance Policies

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Backend | Python 3.11 + FastAPI |
| Frontend | React 18 + Vite |
| AI | Gemini 2.5 Flash |
| PDF parsing | pdfplumber |
| DOCX parsing | python-docx |
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
cp .env.example .env
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

---

## Project Structure

```
legallens/
├── backend/                  # FastAPI backend
│   ├── main.py               # /analyze endpoint + Gemini integration
│   ├── requirements.txt
│   └── .env.example
├── frontend/                 # React + Vite frontend
│   ├── src/
│   │   ├── pages/            # Home, Results, Laws
│   │   └── components/       # Navbar
│   └── public/               # favicon.ico, logo.svg
├── specs/                    # Spec-kit project specs
│   └── 001-legallens-core/   # spec, plan, tasks, data-model, research
├── .specify/                 # Spec-kit config
│   ├── memory/constitution.md
│   ├── templates/            # spec, plan, tasks, feature, bug templates
│   └── scripts/bash/         # setup.sh, dev.sh
├── .gitlab-ci.yml            # CI/CD — auto-deploys frontend to GitLab Pages
├── .gitignore
├── CHANGELOG.md
├── CONTRIBUTING.md
└── LICENSE
```

---

## Indian Laws Coverage

73 laws across 11 categories:

| Category | Laws |
|----------|------|
| Financial & Banking | RBI Act, SEBI Act, FEMA, IBC, SARFAESI, PMLA + 6 more |
| Contract & Civil | Indian Contract Act, Specific Relief Act, Limitation Act + 4 more |
| Property & Real Estate | RERA, Land Acquisition Act, Rent Control Acts + 2 more |
| Employment & Labour | Industrial Disputes Act, POSH Act, Minimum Wages Act + 6 more |
| Consumer Protection | Consumer Protection Act 2019, FSSAI, BIS Act + 1 more |
| Digital & Data Privacy | IT Act 2000, DPDPA 2023, Aadhaar Act + 1 more |
| Criminal | BNS 2023, Prevention of Corruption Act + 1 more |
| Healthcare | Clinical Establishments Act, Mental Healthcare Act + 1 more |
| Family & Personal | Hindu Marriage Act, Domestic Violence Act + 2 more |
| Business & IP | Patents Act, Copyright Act, Competition Act + 3 more |
| Environment | Environment Protection Act, Forest Conservation Act |

---

## Disclaimer

LegalLens is an informational tool. It is **not a substitute for professional legal advice**. For important documents, always consult a qualified advocate.

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Please read the [project constitution](.specify/memory/constitution.md) first.