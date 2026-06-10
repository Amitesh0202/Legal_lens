#!/bin/bash
# LegalLens — Full local setup

set -e

echo "=== LegalLens Setup ==="

# Backend
echo "\n[1/4] Setting up Python backend..."
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt

if [ ! -f .env ]; then
  cp .env.example .env
  echo "  ⚠ Created backend/.env — add your GEMINI_API_KEY"
fi

cd ..

# Frontend
echo "\n[2/4] Installing frontend dependencies..."
cd frontend
npm install
cd ..

echo "\n✅ Setup complete!"
echo "\nTo run:"
echo "  Backend:  cd backend && source venv/bin/activate && uvicorm main:app --reload"
echo "  Frontend: cd frontend && npm run dev"
echo "  Then open: http://localhost:5173"
