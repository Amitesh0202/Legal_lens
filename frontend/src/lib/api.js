// In dev, Vite proxies /api → localhost:8000 via vite.config.js
// In production, VITE_API_BASE must point to the deployed backend URL
const BASE = import.meta.env.VITE_API_BASE || "";

export const API = {
  analyze: `${BASE}/api/analyze`,
  chat: `${BASE}/api/chat`,
};
