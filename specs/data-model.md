# Data Model: LegalLens Analysis Response

## Analysis Response (POST /analyze → JSON)

```json
{
  "document_type": "string",
  "summary": "string",
  "risk_score": 0,
  "risk_label": "Low | Medium | High | Critical",
  "parties": ["string"],
  "key_dates": [
    { "label": "string", "date": "string" }
  ],
  "hidden_clauses": [
    {
      "title": "string",
      "excerpt": "string",
      "explanation": "string",
      "severity": "Low | Medium | High | Critical",
      "relevant_law": "string"
    }
  ],
  "future_implications": [
    {
      "timeframe": "string",
      "implication": "string"
    }
  ],
  "law_violations": [
    {
      "law": "string",
      "section": "string",
      "issue": "string",
      "severity": "Low | Medium | High | Critical"
    }
  ],
  "negotiation_tips": [
    {
      "clause": "string",
      "suggestion": "string"
    }
  ],
  "overall_verdict": "string"
}
```

## Field Definitions

| Field | Type | Description |
|-------|------|-------------|
| `document_type` | string | e.g. "Employment Contract", "Rental Agreement", "Loan Agreement" |
| `summary` | string | 2-3 sentence plain English summary |
| `risk_score` | int 0–100 | 0 = very safe, 100 = extremely dangerous |
| `risk_label` | enum | Derived from risk_score: 0-25=Low, 26-50=Medium, 51-75=High, 76-100=Critical |
| `parties` | string[] | Names of parties to the contract (2 typically) |
| `key_dates` | object[] | Important dates found in document (effective date, expiry, notice periods) |
| `hidden_clauses` | object[] | Risky or hidden clauses found |
| `hidden_clauses[].title` | string | Short name for the clause |
| `hidden_clauses[].excerpt` | string | Verbatim or near-verbatim text from document |
| `hidden_clauses[].explanation` | string | Plain English explanation of what this means for the signee |
| `hidden_clauses[].severity` | enum | Low / Medium / High / Critical |
| `hidden_clauses[].relevant_law` | string | Indian law name and section this relates to |
| `future_implications` | object[] | What happens to the user after signing |
| `future_implications[].timeframe` | string | "Immediately", "Within 30 days", "After 1 year", "Long-term" |
| `law_violations` | object[] | Indian laws relevant to or potentially violated by this document |
| `law_violations[].law` | string | Full law name + year |
| `law_violations[].section` | string | Specific section if applicable |
| `law_violations[].issue` | string | What in the document triggers this law |
| `negotiation_tips` | object[] | Suggestions for negotiating better terms |
| `overall_verdict` | string | 2-3 sentence final assessment |

## Severity Scale

| Label | Score Range | Meaning |
|-------|-------------|---------|
| Low | 0–25 | Standard clause, minor concern |
| Medium | 26–50 | Unfair but common, negotiate if possible |
| High | 51–75 | Significant risk, legal advice recommended |
| Critical | 76–100 | Potentially illegal or severely harmful |

## Input Constraints

| Field | Constraint |
|-------|-----------|
| File size | Max 10MB |
| File types | PDF, DOCX, DOC, TXT |
| Text sent to AI | First 12,000 characters of extracted text |
| Document name | Optional, used for display only |

## Notes
- Documents are never stored — analysis is performed in-memory only
- Results are passed via React Router state and lost on page refresh (by design — privacy)
- The `/analyze` endpoint is stateless
