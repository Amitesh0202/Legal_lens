#!/bin/bash
# LegalLens — Start both backend and frontend in dev mode

echo "=== Starting LegalLens Dev ==="

# Start backend
cd backend
source venv/bin/activate 2>/dev/null || true
uvicorn main:app --reload --port 8000 &
BACKEND_PID=$!
echo "Backend running (PID $BACKEND_PID) at http://localhost:8000"

cd ../frontend
npm run dev &
FRONTEND_PID=$!
echo "Frontend running (PID $FRONTEND_PID) at http://localhost:5173"

echo "\nPress Ctrl+C to stop both servers"
wait
