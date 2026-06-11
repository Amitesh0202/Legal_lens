.PHONY: help install lint format typecheck security dead-code audit test qa dev

help:
	@echo ""
	@echo "  LegalLens — Developer Commands"
	@echo "  make install     Install all dependencies"
	@echo "  make lint        Ruff + Flake8"
	@echo "  make format      Ruff format"
	@echo "  make typecheck   Mypy"
	@echo "  make security    Bandit + Semgrep"
	@echo "  make dead-code   Vulture"
	@echo "  make pylint      Pylint"
	@echo "  make audit       pip-audit (dependency vulnerabilities)"
	@echo "  make test        Pytest + coverage"
	@echo "  make qa          Run all checks"
	@echo "  make dev         Start backend + frontend"
	@echo ""

install:
	cd backend && pip install -r requirements.txt
	cd frontend && npm install

lint:
	ruff check backend --config pyproject.toml
	flake8 backend

format:
	ruff format backend --config pyproject.toml

typecheck:
	mypy backend --config-file pyproject.toml

security:
	bandit -c pyproject.toml -r backend -ll
	semgrep --config .semgrep.yml backend --error

dead-code:
	vulture backend --min-confidence 80

pylint:
	pylint backend --rcfile pyproject.toml --fail-under=8.0

audit:
	pip-audit -r backend/requirements.txt

test:
	pytest backend/tests --cov=backend --cov-report=term-missing --cov-config=pyproject.toml

qa: lint typecheck security dead-code audit test
	@echo ""
	@echo "✅ All quality checks passed"

dev:
	@echo "Starting LegalLens..."
	bash .specify/scripts/bash/dev.sh
