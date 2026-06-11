from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List
from services.chat_service import get_chat_reply

router = APIRouter()


class Message(BaseModel):
    role: str   # "user" or "assistant"
    content: str


class ChatRequest(BaseModel):
    messages: List[Message]


@router.post("/chat")
async def chat(request: ChatRequest):
    if not request.messages:
        raise HTTPException(status_code=400, detail="No messages provided.")

    reply = await get_chat_reply([m.model_dump() for m in request.messages])
    return {"reply": reply}
