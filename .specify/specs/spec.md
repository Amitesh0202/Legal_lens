<<<<<<< HEAD
# Spec: LegalLens Core — Document Analysis Platform

## Problem
Millions of Indians sign legal documents — employment contracts, rental agreements, loan papers, Terms of Service — without understanding what they're agreeing to. Legal advice is expensive and inaccessible. Hidden clauses cause real financial and legal harm.

## Target Users
- **Primary:** Salaried employees reviewing job offers and HR policies
- **Secondary:** Tenants reviewing rental agreements
- **Secondary:** Borrowers reviewing loan agreements
- **Secondary:** Anyone asked to sign a ToS, NDA, or vendor contract

## User Stories

### Upload & Analyze
- As a user, I want to upload a PDF/DOCX/TXT document so that LegalLens can analyze it
- As a user, I want to see a plain-English summary of the document so I understand what it is before reading details
- As a user, I want to know the overall risk level of the document so I can decide how carefully to review it

### Hidden Clause Detection
- As a user, I want hidden and risky clauses highlighted so I don't miss them buried in fine print
- As a user, I want each risky clause explained in plain English so I know what it means for me
- As a user, I want to know which Indian law governs or is violated by each clause so I understand my rights

### Legal Cross-Reference
- As a user, I want the document checked against relevant Indian laws so I know what protections apply to me
- As a user, I want to see which specific laws and sections are relevant so I can research further if needed

### Future Implications
- As a user, I want to know what signing this document means for me in the future so I can anticipate consequences
- As a user, I want implications shown by timeframe (immediately, 1 year, long-term) so I can plan accordingly

### Negotiation
- As a user, I want suggestions on which clauses to push back on so I can negotiate better terms
- As a user, I want suggested alternative wording so I know what to ask for

### Laws Reference
- As a user, I want to browse all 73 Indian laws LegalLens checks against so I can educate myself
- As a user, I want to search laws by name or keyword so I can find relevant laws quickly

## Requirements

### Must Have
- [ ] File upload supporting PDF, DOCX, TXT (up to 10MB)
- [ ] AI-powered document analysis using Gemini 2.5 Flash
- [ ] Plain-English summary of the document
- [ ] Risk score (0–100) with label (Low / Medium / High / Critical)
- [ ] Hidden clause detection with severity ratings
- [ ] Indian law cross-reference (73 laws)
- [ ] Future implications by timeframe
- [ ] Negotiation tips
- [ ] Laws reference page (searchable, filterable by category)
- [ ] Responsive design (mobile + desktop)

### Nice to Have
- [ ] PDF export of the analysis report
- [ ] "Ask a question about this document" chat interface
- [ ] Document comparison (two versions side by side)
- [ ] Browser extension for analyzing ToS on websites
- [ ] User accounts to save past analyses

## Out of Scope (v1)
- Real-time lawyer connect / referral
- Multi-language document support (non-English documents)
- Scanned/image PDFs (OCR)
- Advice specific to the user's personal legal situation

## Acceptance Criteria
- [ ] User can upload a PDF and receive a complete analysis in under 30 seconds
- [ ] Analysis correctly identifies at least 3 risky clauses in a standard employment contract
- [ ] Risk score is calibrated: a standard NDA scores Low, a predatory loan scores Critical
- [ ] All 73 laws appear in the Laws page with accurate explanations
- [ ] App works correctly on mobile screens (375px+)
- [ ] Error states are handled gracefully (unsupported file, API failure, empty document)

## Open Questions
- Should we store uploaded documents? (Privacy concern — currently we do NOT store them)
- What's the max document length we can reliably analyze? (Currently capped at 12,000 characters)
- Should risk scores be calibrated by document type? (A rental agreement and a loan have different baseline risks)
=======
# Spec: LegalLens Core — Document Analysis Platform

## Problem
Millions of Indians sign legal documents — employment contracts, rental agreements, loan papers, Terms of Service — without understanding what they're agreeing to. Legal advice is expensive and inaccessible. Hidden clauses cause real financial and legal harm.

## Target Users
- **Primary:** Salaried employees reviewing job offers and HR policies
- **Secondary:** Tenants reviewing rental agreements
- **Secondary:** Borrowers reviewing loan agreements
- **Secondary:** Anyone asked to sign a ToS, NDA, or vendor contract

## User Stories

### Upload & Analyze
- As a user, I want to upload a PDF/DOCX/TXT document so that LegalLens can analyze it
- As a user, I want to see a plain-English summary of the document so I understand what it is before reading details
- As a user, I want to know the overall risk level of the document so I can decide how carefully to review it

### Hidden Clause Detection
- As a user, I want hidden and risky clauses highlighted so I don't miss them buried in fine print
- As a user, I want each risky clause explained in plain English so I know what it means for me
- As a user, I want to know which Indian law governs or is violated by each clause so I understand my rights

### Legal Cross-Reference
- As a user, I want the document checked against relevant Indian laws so I know what protections apply to me
- As a user, I want to see which specific laws and sections are relevant so I can research further if needed

### Future Implications
- As a user, I want to know what signing this document means for me in the future so I can anticipate consequences
- As a user, I want implications shown by timeframe (immediately, 1 year, long-term) so I can plan accordingly

### Negotiation
- As a user, I want suggestions on which clauses to push back on so I can negotiate better terms
- As a user, I want suggested alternative wording so I know what to ask for

### Laws Reference
- As a user, I want to browse all 73 Indian laws LegalLens checks against so I can educate myself
- As a user, I want to search laws by name or keyword so I can find relevant laws quickly

## Requirements

### Must Have
- [ ] File upload supporting PDF, DOCX, TXT (up to 10MB)
- [ ] AI-powered document analysis using Gemini 2.5 Flash
- [ ] Plain-English summary of the document
- [ ] Risk score (0–100) with label (Low / Medium / High / Critical)
- [ ] Hidden clause detection with severity ratings
- [ ] Indian law cross-reference (73 laws)
- [ ] Future implications by timeframe
- [ ] Negotiation tips
- [ ] Laws reference page (searchable, filterable by category)
- [ ] Responsive design (mobile + desktop)

### Nice to Have
- [ ] PDF export of the analysis report
- [ ] "Ask a question about this document" chat interface
- [ ] Document comparison (two versions side by side)
- [ ] Browser extension for analyzing ToS on websites
- [ ] User accounts to save past analyses

## Out of Scope (v1)
- Real-time lawyer connect / referral
- Multi-language document support (non-English documents)
- Scanned/image PDFs (OCR)
- Advice specific to the user's personal legal situation

## Acceptance Criteria
- [ ] User can upload a PDF and receive a complete analysis in under 30 seconds
- [ ] Analysis correctly identifies at least 3 risky clauses in a standard employment contract
- [ ] Risk score is calibrated: a standard NDA scores Low, a predatory loan scores Critical
- [ ] All 73 laws appear in the Laws page with accurate explanations
- [ ] App works correctly on mobile screens (375px+)
- [ ] Error states are handled gracefully (unsupported file, API failure, empty document)

## Open Questions
- Should we store uploaded documents? (Privacy concern — currently we do NOT store them)
- What's the max document length we can reliably analyze? (Currently capped at 12,000 characters)
- Should risk scores be calibrated by document type? (A rental agreement and a loan have different baseline risks)
>>>>>>> b17ce45a6631397ab02e1de516e55dfc5317506a
