# Security Policy

## Privacy by Design

LegalLens **never stores uploaded documents**. All analysis is performed in-memory. Documents are not written to disk, logged, or retained after the API response is sent.

## Supported Versions

| Version | Supported |
|---------|-----------|
| 0.1.x   | ✅ Yes    |

## Reporting a Vulnerability

If you discover a security vulnerability, **please do not open a public issue**.

Instead:
1. Email the maintainer directly (see GitLab profile)
2. Describe the vulnerability, its potential impact, and steps to reproduce
3. Allow up to 72 hours for an initial response

We take security seriously and will respond promptly.

## Known Security Considerations

### API Key
- `GEMINI_API_KEY` must be stored in `backend/.env` — never committed to git
- `.gitignore` and `.gitleaks.toml` are configured to prevent accidental commits

### File Uploads
- Maximum file size: 10MB
- Accepted types: PDF, DOCX, TXT only
- Files are processed in-memory and never written to disk

### CORS
- In development, CORS allows `localhost:5173` and `localhost:3000`
- In production, restrict `allow_origins` to your frontend domain in `backend/main.py`

### Data Privacy
- No user accounts, no session storage, no analytics
- Uploaded document text is sent to Google Gemini API — governed by Google's [data usage policies](https://ai.google.dev/gemini-api/terms)
- Users should be aware of this before uploading sensitive documents

## Dependency Scanning

Run `make audit` to check for known vulnerabilities in Python dependencies using `pip-audit`.
