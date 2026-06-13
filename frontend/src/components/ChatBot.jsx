import { useState, useRef, useEffect } from "react";
import { useLang } from "../context/LangContext.jsx";
import { API } from "../lib/api.js";
import "./ChatBot.css";

function TypingDots() {
  return (
    <div className="chat-bubble assistant typing">
      <span className="dot" />
      <span className="dot" />
      <span className="dot" />
    </div>
  );
}

export default function ChatBot() {
  const { t, lang } = useLang();
  const tc = t.chat;

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: tc.welcome },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const bottomRef = useRef();
  const inputRef = useRef();

  // Reset welcome message when language changes
  useEffect(() => {
    setMessages([{ role: "assistant", content: tc.welcome }]);
    setShowSuggestions(true);
  }, [tc.welcome]);

  useEffect(() => {
    if (open) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
      inputRef.current?.focus();
    }
  }, [open, messages]);

  async function sendMessage(text) {
    const userText = (text || input).trim();
    if (!userText || loading) return;

    setInput("");
    setShowSuggestions(false);
    const newMessages = [...messages, { role: "user", content: userText }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const res = await fetch(API.chat, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages, lang }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || "Chat failed");
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply },
      ]);
    } catch (e) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `Sorry, something went wrong: ${e.message}. Please try again.`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKey(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  function clearChat() {
    setMessages([{ role: "assistant", content: tc.welcome }]);
    setShowSuggestions(true);
    setInput("");
  }

  return (
    <>
      <button
        className={`chat-fab ${open ? "open" : ""}`}
        onClick={() => setOpen((o) => !o)}
        aria-label={tc.fabLabel}
      >
        {open ? "✕" : "💬"}
        {!open && <span className="chat-fab-label">{tc.fabLabel}</span>}
      </button>

      {open && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-header-left">
              <div className="chat-avatar">⚖️</div>
              <div>
                <div className="chat-header-title">{tc.headerTitle}</div>
                <div className="chat-header-sub">{tc.headerSub}</div>
              </div>
            </div>
            <button
              className="chat-clear-btn"
              onClick={clearChat}
              title={tc.clearTitle}
            >
              🗑
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-bubble ${msg.role}`}>
                {msg.content
                  .split("\n")
                  .map((line, j) =>
                    line ? <p key={j}>{line}</p> : <br key={j} />,
                  )}
              </div>
            ))}

            {showSuggestions && !loading && (
              <div className="chat-suggestions">
                {tc.suggestions.map((s) => (
                  <button
                    key={s}
                    className="chat-suggestion-btn"
                    onClick={() => sendMessage(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {loading && <TypingDots />}
            <div ref={bottomRef} />
          </div>

          <div className="chat-input-row">
            <textarea
              ref={inputRef}
              className="chat-input"
              placeholder={tc.inputPlaceholder}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              rows={2}
              disabled={loading}
            />
            <button
              className="chat-send-btn"
              onClick={() => sendMessage()}
              disabled={!input.trim() || loading}
            >
              {loading ? <span className="chat-spinner" /> : "↑"}
            </button>
          </div>
          <div className="chat-disclaimer">{tc.disclaimer}</div>
        </div>
      )}
    </>
  );
}
