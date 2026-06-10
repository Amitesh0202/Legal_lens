# Contributing to LegalLens

Thanks for your interest in contributing! LegalLens is an open-source project built to help Indians understand legal documents before signing them.

---

## Before You Start

Read the [constitution](.specify/memory/constitution.md) — it defines the project's coding standards, principles, and quality rules. All contributions must follow it.

---

## Ways to Contribute

- **Add or improve law explanations** — update `specs/001-legallens-core/` or the Laws page
- **Improve AI prompts** — better prompts = better clause detection
- **Fix bugs** — use the bug report template in `.specify/templates/bug_report.md`
- **Propose features** — use the feature spec template in `.specify/templates/feature_spec.md`
- **Improve the UI** — keep it minimal and professional (see constitution)
- **Add test documents** — sample contracts for testing the analyzer

---

## Workflow

1. **Fork** the repo and create a branch: `git checkout -b feature/your-feature-name`
2. **Check the spec** — does a spec exist for what you're building? If not, write one using `.specify/templates/feature_spec.md` first
3. **Make your changes** — follow the coding standards in the constitution
4. **Test locally** — run both backend and frontend, test with a real document
5. **Commit** with a clear message: `feat: add PDF export`, `fix: handle empty document`, etc.
6. **Open a Merge Request** — describe what you changed and why

---

## Commit Message Format

```
type: short description

Examples:
feat: add document comparison mode
fix: handle scanned PDF with empty text
docs: update laws reference for DPDPA 2023
refactor: extract clause parser into separate module
```

Types: `feat`, `fix`, `docs`, `refactor`, `test`, `chore`

---

## What NOT to Contribute

- Hardcoded API keys or secrets
- Features that store user documents (privacy by design)
- Legal advice — LegalLens informs, it does not advise
- Non-Indian law references (this project is India-specific)
- Heavy UI dependencies (no Bootstrap, Material UI, etc.)

---

## Legal Disclaimer

By contributing, you agree that your contributions are licensed under the MIT License and that LegalLens does not provide legal advice — it is an informational tool only.

---

## Questions?

Open an issue or reach out via the project's GitLab page.
