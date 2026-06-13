from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from services.chat_service import get_chat_reply

router = APIRouter()


class Message(BaseModel):
    role: str  # "user" or "assistant"
    content: str


class ChatRequest(BaseModel):
    messages: list[Message]
    lang: str = "en"


@router.post("/chat")
async def chat(request: ChatRequest) -> dict[str, str]:
    if not request.messages:
        raise HTTPException(status_code=400, detail="No messages provided.")

    reply = await get_chat_reply([m.model_dump() for m in request.messages], lang=request.lang)
    return {"reply": reply}
