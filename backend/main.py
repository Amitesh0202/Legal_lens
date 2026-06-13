import os

from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

load_dotenv(os.path.join(os.path.dirname(__file__), ".env"))

from routes.analyze import router as analyze_router  # noqa: E402
from routes.chat import router as chat_router  # noqa: E402

app = FastAPI(
    title="LegalLens API",
    description="AI-powered legal document analyzer for India",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://legal-lens-ten.vercel.app"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(analyze_router, prefix="/api")
app.include_router(chat_router, prefix="/api")


@app.get("/")
async def health_check() -> dict[str, str]:
    return {"status": "ok", "service": "LegalLens API"}
