# LegalLens — User Manual

## What is LegalLens?

LegalLens is a free AI-powered tool that helps you understand legal documents before you sign them. Upload any contract, agreement, or Terms of Service and get a plain-English breakdown of what you're agreeing to — including hidden clauses, risk ratings, and your rights under Indian law.

**LegalLens is not a substitute for professional legal advice.** For high-stakes documents, always consult a qualified advocate.

---

## How to Use

### Step 1: Upload your document
- Click the upload area on the home page, or drag and drop your file
- Supported formats: **PDF**, **DOCX** (Word), **TXT**
- Maximum file size: **10MB**

### Step 2: Click "Analyze Document"
- LegalLens will extract the text and send it to AI for analysis
- This takes **5–15 seconds** with Gemini, or **15–60 seconds** if Ollama is handling the request (see [AI Fallback](#ai-fallback) below)

### Step 3: Read your results

The results page shows:

| Section | What it tells you |
|---------|-------------------|
| **Risk Score** | 0–100. Higher = more dangerous. Low / Medium / High / Critical |
| **Summary** | Plain English: what this document is and what it does |
| **Hidden Clauses** | Risky or buried terms, each explained in plain English |
| **Indian Law Cross-Reference** | Which Indian laws apply to this document |
| **Future Implications** | What could happen to you after signing |
| **Negotiation Tips** | How to push back on unfair terms |
| **Overall Verdict** | Should you sign? What's the biggest risk? |

---

## Understanding Risk Scores

| Score | Label | What it means |
|-------|-------|---------------|
| 0–25 | 🟢 Low | Standard document, minor concerns |
| 26–50 | 🟡 Medium | Some unfair clauses, negotiate if possible |
| 51–75 | 🔴 High | Significant risks, consider legal advice |
| 76–100 | 🟣 Critical | Potentially illegal or severely harmful |

---

## Document Types Supported

LegalLens works best with:
- Employment contracts and offer letters
- Rental and lease agreements
- Loan and credit agreements
- Terms of Service and Privacy Policies
- NDAs and non-compete agreements
- Builder-buyer agreements (RERA regulated)
- Freelance and service contracts
- Insurance policy documents
- Partnership and shareholder agreements

---

## Limitations

- **Scanned PDFs:** If your PDF is an image scan (not typed text), LegalLens may not extract text correctly. Try a searchable/digital PDF.
- **Long documents:** Only the first ~8 pages are analyzed due to AI token limits.
- **Language:** Currently analyzes English-language documents only.
- **Accuracy:** AI analysis may miss clauses or misinterpret context. Always read the full document yourself.

---

## AI Fallback

LegalLens uses **Google Gemini 2.5 Flash** as its primary AI engine. If Gemini is temporarily unavailable (due to quota limits, a network issue, or no API key being configured), the system automatically falls back to **Ollama** — a local, self-hosted AI model — without any action needed from you.

When Ollama is handling your request:
- Analysis may take slightly longer (15–60 seconds instead of 5–15)
- Quality is comparable for most document types; very complex legal structures may be less detailed
- The fallback is fully transparent — you will not see an error message

**For self-hosted deployments:** install [Ollama](https://ollama.com/download), run `ollama pull llama3.2`, and set `OLLAMA_BASE_URL` in your `.env` file.

---

## Privacy

- Your document is **never stored**. It is analyzed in-memory and immediately discarded.
- When Gemini is active: document text is sent to Google Gemini API. See Google's [AI data policies](https://ai.google.dev/gemini-api/terms).
- When Ollama is active: analysis runs entirely on your own machine or server — no data leaves your infrastructure.
- We recommend **not uploading** documents containing Aadhaar numbers, PAN, bank account details, or other sensitive personal identifiers.

---

## Laws Reference

Visit the **Laws** page to browse all 73 Indian laws LegalLens checks against, organized by category. Use the search bar to find laws by name or keyword.

---

## Frequently Asked Questions

**Is this legal advice?**
No. LegalLens is an informational tool. It identifies risks and explains clauses but does not provide legal advice. For important decisions, consult a qualified advocate.

**What if the analysis misses something?**
AI is not perfect. Always read the full document yourself. LegalLens is a first pass, not a final review.

**Can I use this for court proceedings?**
No. LegalLens output is not admissible as legal evidence or expert opinion.

**Is my document safe to upload?**
See the Privacy section above. Avoid uploading documents with Aadhaar, PAN, or financial account numbers.

**Why does it say "could not extract text"?**
Your PDF is likely a scanned image. Try using a digitally-created PDF, or retype the key clauses into the text box instead.

**Why is my analysis taking longer than usual?**
Gemini may be temporarily unavailable and the system has fallen back to Ollama. This is normal — your analysis will complete, just a bit slower. No action is needed on your part.

**Can I use LegalLens without a Gemini API key?**
Yes. If no Gemini key is configured, all requests automatically use Ollama. You need Ollama installed and running locally (or point `OLLAMA_BASE_URL` to a remote instance).
