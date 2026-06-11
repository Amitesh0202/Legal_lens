<<<<<<< HEAD
# Research: LegalLens

## Problem Validation

### Who gets hurt by legal documents in India?
- **Homebuyers:** Pre-RERA, builders routinely inserted clauses allowing 2-3 year delays with no penalty. Thousands of buyers lost crores.
- **Employees:** Non-compete clauses (void under S.27 ICA) are routinely inserted in employment contracts. Most employees don't know they're unenforceable.
- **Borrowers:** Loan agreements from NBFCs and MFIs often bury processing fees, prepayment penalties, and variable interest clauses in fine print.
- **Tenants:** Landlords include rent hike clauses exceeding Rent Control Act limits. Tenants sign without knowing their rights.
- **App users:** Privacy policies and ToS routinely grant "irrevocable, perpetual, worldwide" data rights — potentially violating DPDPA 2023.

### Market size
- India has ~400 million working adults, most of whom will sign an employment contract
- ~35 million rental agreements are signed annually in India
- ~20 million home loan agreements per year
- Legal services market in India: $1.3B and growing

## Legal Research

### Key Indian laws with highest impact on everyday contracts

**Indian Contract Act, 1872 — S.27**
> "Every agreement by which any one is restrained from exercising a lawful profession, trade or business of any kind, is to that extent void."
Post-employment non-compete clauses are largely unenforceable in India. This is different from most Western countries.

**Consumer Protection Act, 2019 — Unfair Contracts**
> A contract is "unfair" if it causes significant imbalance in the rights and obligations of parties, to the detriment of the consumer.
Section 2(46) defines unfair contract terms. Courts can strike these terms even from signed contracts.

**RERA, 2016**
Builders must provide possession within the promised timeline or pay interest at SBI MCLR + 2%. Any clause that shifts this liability back to the buyer is void.

**DPDPA, 2023**
Consent must be specific, informed, unconditional, and revocable. "By continuing to use this app you consent to all data collection" is non-compliant.

**SARFAESI Act, 2002**
Banks can seize and auction secured assets (home, car) in 60 days of default — without court order. Most borrowers are unaware when signing loan agreements.

## Competitive Landscape

| Product | Country | Strengths | Weaknesses |
|---------|---------|-----------|------------|
| DoNotPay | USA | Broad automation, consumer focus | Not India-specific, subscription |
| LawGeex | Global (B2B) | Enterprise contract review | Expensive, not for individuals |
| SpotDraft | India (B2B) | India-specific, strong NDA tools | Enterprise only, not for consumers |
| TheLegalApp | India | Consumer-facing | Limited AI, no clause explanation |
| **LegalLens** | **India** | **Free, individual-focused, 73 Indian laws, plain English** | **New, no track record** |

## Key Insight
No product exists today that is:
1. Free / low cost
2. Consumer-facing (not B2B)
3. India-specific (Indian law, Indian document types)
4. AI-powered with plain English explanations
5. Focused on hidden clauses and future implications

LegalLens fills this gap.

## AI Model Selection

### Why Gemini 2.5 Flash?
- Free tier: 15 requests/min, 1 million tokens/day
- Strong legal reasoning capability
- Handles long context (documents up to ~100 pages)
- Fast response time (2-5 seconds for typical document)
- Superior to 1.5 Flash on structured JSON output and legal text

### Prompt Engineering Approach
The system prompt defines the full JSON schema as a contract. This is more reliable than asking the model to "return JSON" without a schema — it dramatically reduces malformed output.

Key prompt decisions:
- Explicitly enumerate severity levels (Low/Medium/High/Critical) to prevent creative alternatives
- Ask for `excerpt` (verbatim text) to ground explanations in the actual document
- Request specific Indian law names + sections to prevent hallucination of generic "contract law"
- Ask for `overall_verdict` last so the model reasons through everything before summarizing
=======
# Research: LegalLens

## Problem Validation

### Who gets hurt by legal documents in India?
- **Homebuyers:** Pre-RERA, builders routinely inserted clauses allowing 2-3 year delays with no penalty. Thousands of buyers lost crores.
- **Employees:** Non-compete clauses (void under S.27 ICA) are routinely inserted in employment contracts. Most employees don't know they're unenforceable.
- **Borrowers:** Loan agreements from NBFCs and MFIs often bury processing fees, prepayment penalties, and variable interest clauses in fine print.
- **Tenants:** Landlords include rent hike clauses exceeding Rent Control Act limits. Tenants sign without knowing their rights.
- **App users:** Privacy policies and ToS routinely grant "irrevocable, perpetual, worldwide" data rights — potentially violating DPDPA 2023.

### Market size
- India has ~400 million working adults, most of whom will sign an employment contract
- ~35 million rental agreements are signed annually in India
- ~20 million home loan agreements per year
- Legal services market in India: $1.3B and growing

## Legal Research

### Key Indian laws with highest impact on everyday contracts

**Indian Contract Act, 1872 — S.27**
> "Every agreement by which any one is restrained from exercising a lawful profession, trade or business of any kind, is to that extent void."
Post-employment non-compete clauses are largely unenforceable in India. This is different from most Western countries.

**Consumer Protection Act, 2019 — Unfair Contracts**
> A contract is "unfair" if it causes significant imbalance in the rights and obligations of parties, to the detriment of the consumer.
Section 2(46) defines unfair contract terms. Courts can strike these terms even from signed contracts.

**RERA, 2016**
Builders must provide possession within the promised timeline or pay interest at SBI MCLR + 2%. Any clause that shifts this liability back to the buyer is void.

**DPDPA, 2023**
Consent must be specific, informed, unconditional, and revocable. "By continuing to use this app you consent to all data collection" is non-compliant.

**SARFAESI Act, 2002**
Banks can seize and auction secured assets (home, car) in 60 days of default — without court order. Most borrowers are unaware when signing loan agreements.

## Competitive Landscape

| Product | Country | Strengths | Weaknesses |
|---------|---------|-----------|------------|
| DoNotPay | USA | Broad automation, consumer focus | Not India-specific, subscription |
| LawGeex | Global (B2B) | Enterprise contract review | Expensive, not for individuals |
| SpotDraft | India (B2B) | India-specific, strong NDA tools | Enterprise only, not for consumers |
| TheLegalApp | India | Consumer-facing | Limited AI, no clause explanation |
| **LegalLens** | **India** | **Free, individual-focused, 73 Indian laws, plain English** | **New, no track record** |

## Key Insight
No product exists today that is:
1. Free / low cost
2. Consumer-facing (not B2B)
3. India-specific (Indian law, Indian document types)
4. AI-powered with plain English explanations
5. Focused on hidden clauses and future implications

LegalLens fills this gap.

## AI Model Selection

### Why Gemini 2.5 Flash?
- Free tier: 15 requests/min, 1 million tokens/day
- Strong legal reasoning capability
- Handles long context (documents up to ~100 pages)
- Fast response time (2-5 seconds for typical document)
- Superior to 1.5 Flash on structured JSON output and legal text

### Prompt Engineering Approach
The system prompt defines the full JSON schema as a contract. This is more reliable than asking the model to "return JSON" without a schema — it dramatically reduces malformed output.

Key prompt decisions:
- Explicitly enumerate severity levels (Low/Medium/High/Critical) to prevent creative alternatives
- Ask for `excerpt` (verbatim text) to ground explanations in the actual document
- Request specific Indian law names + sections to prevent hallucination of generic "contract law"
- Ask for `overall_verdict` last so the model reasons through everything before summarizing
>>>>>>> b17ce45a6631397ab02e1de516e55dfc5317506a
