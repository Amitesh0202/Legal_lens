from typing import Any

from fastapi import APIRouter, File, Form, HTTPException, UploadFile

from services.file_processor import extract_text
from services.gemini_service import analyze_document

router = APIRouter()


@router.post("/analyze")
async def analyze(
    file: UploadFile = File(...),
    document_name: str = Form(default=""),
) -> dict[str, Any]:
    # Validate file type
    allowed = {
        "application/pdf",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/msword",
        "text/plain",
    }
    if file.content_type not in allowed:
        ext = (file.filename or "").rsplit(".", 1)[-1].lower()
        if ext not in {"pdf", "docx", "doc", "txt"}:
            raise HTTPException(
                status_code=400, detail="Unsupported file type. Upload PDF, DOCX, or TXT."
            )

    contents = await file.read()
    if len(contents) > 10 * 1024 * 1024:  # 10 MB limit
        raise HTTPException(status_code=400, detail="File too large. Maximum size is 10 MB.")

    # Extract text
    text = extract_text(contents, file.filename or "")
    if not text.strip():
        raise HTTPException(
            status_code=422, detail="Could not extract text from document. Try a text-based PDF."
        )

    # Analyze with Gemini
    result = await analyze_document(text, document_name or file.filename or "Document")
    return result
