import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useLang } from "../context/LangContext.jsx";
import Navbar from "../components/Navbar.jsx";
import { API } from "../lib/api.js";

const RISK_COLOR = {
  Low: "var(--success)",
  Medium: "var(--warning)",
  High: "var(--danger)",
  Critical: "var(--critical)",
};

export default function Home() {
  const { t } = useLang();
  const h = t.home;
  const navigate = useNavigate();

  const [file, setFile] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef();

  function handleFile(f) {
    if (!f) return;
    if (f.size > 10 * 1024 * 1024) {
      setError(h.errors.tooLarge);
      return;
    }
    setFile(f);
    setError("");
  }

  function onDrop(e) {
    e.preventDefault();
    setDragging(false);
    handleFile(e.dataTransfer.files[0]);
  }

  async function analyze() {
    if (!file || loading) return;
    setLoading(true);
    setError("");
    try {
      const form = new FormData();
      form.append("file", file);
      const res = await fetch(API.analyze, { method: "POST", body: form });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || h.errors.analysisFailed);
      navigate("/results", { state: { result: data, fileName: file.name } });
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Navbar />
      <main style={{ maxWidth: 800, margin: "0 auto", padding: "48px 24px" }}>
        {/* Hero */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div
            style={{
              display: "inline-block",
              background: "var(--accent-light)",
              color: "var(--accent)",
              borderRadius: 20,
              padding: "6px 16px",
              fontSize: 13,
              fontWeight: 600,
              marginBottom: 20,
            }}
          >
            {h.badge}
          </div>
          <h1
            style={{
              fontSize: "clamp(28px, 5vw, 44px)",
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: 12,
            }}
          >
            {h.heroTitle}{" "}
            <span style={{ color: "var(--accent)" }}>{h.heroHighlight}</span>
          </h1>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: 16,
              maxWidth: 560,
              margin: "0 auto",
            }}
          >
            {h.heroSubtitle}
          </p>
        </div>

        {/* Dropzone */}
        <div
          onClick={() => !loading && inputRef.current.click()}
          onDragOver={(e) => {
            e.preventDefault();
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={onDrop}
          style={{
            border: `2px dashed ${dragging ? "var(--accent)" : file ? "var(--success)" : "var(--border-strong)"}`,
            borderRadius: "var(--radius-lg)",
            padding: "40px 24px",
            textAlign: "center",
            cursor: loading ? "default" : "pointer",
            background: dragging
              ? "var(--accent-light)"
              : file
                ? "var(--success-light)"
                : "var(--bg-subtle)",
            transition: "all 0.2s",
            marginBottom: 16,
          }}
        >
          <input
            ref={inputRef}
            type="file"
            accept=".pdf,.docx,.txt"
            style={{ display: "none" }}
            onChange={(e) => handleFile(e.target.files[0])}
          />
          <div style={{ fontSize: 40, marginBottom: 12 }}>
            {file ? "✅" : "📄"}
          </div>
          {file ? (
            <div>
              <div style={{ fontWeight: 600, marginBottom: 4 }}>
                {file.name}
              </div>
              <div style={{ color: "var(--text-muted)", fontSize: 13 }}>
                {(file.size / 1024).toFixed(0)} KB —{" "}
                {loading ? "" : "click to change"}
              </div>
            </div>
          ) : (
            <div>
              <div style={{ fontWeight: 500, marginBottom: 4 }}>
                {h.dropzoneText}{" "}
                <span style={{ color: "var(--accent)", fontWeight: 600 }}>
                  {h.dropzoneClick}
                </span>
              </div>
              <div style={{ color: "var(--text-muted)", fontSize: 13 }}>
                {h.dropzoneHint}
              </div>
            </div>
          )}
        </div>

        {error && (
          <div
            style={{
              background: "var(--danger-light)",
              color: "var(--danger)",
              padding: "10px 16px",
              borderRadius: "var(--radius)",
              marginBottom: 16,
              fontSize: 14,
            }}
          >
            {error}
          </div>
        )}

        <button
          onClick={analyze}
          disabled={!file || loading}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "var(--radius)",
            border: "none",
            background:
              file && !loading ? "var(--primary)" : "var(--border-strong)",
            color: file && !loading ? "#fff" : "var(--text-muted)",
            fontWeight: 700,
            fontSize: 16,
            cursor: file && !loading ? "pointer" : "default",
            transition: "all 0.2s",
            marginBottom: 8,
          }}
        >
          {loading ? h.analyzingBtn : h.analyzeBtn}
        </button>

        {loading && (
          <div
            style={{
              textAlign: "center",
              color: "var(--text-muted)",
              fontSize: 13,
              marginBottom: 32,
            }}
          >
            {h.loadingHint}
          </div>
        )}

        {/* Features */}
        <section style={{ marginTop: 64 }}>
          <h2
            style={{
              textAlign: "center",
              fontWeight: 700,
              fontSize: 22,
              marginBottom: 28,
            }}
          >
            {h.featuresTitle}
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 16,
            }}
          >
            {h.features.map((f) => (
              <div
                key={f.title}
                style={{
                  background: "var(--bg-subtle)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-lg)",
                  padding: "20px 18px",
                }}
              >
                <div style={{ fontSize: 28, marginBottom: 10 }}>{f.icon}</div>
                <div style={{ fontWeight: 600, marginBottom: 6 }}>
                  {f.title}
                </div>
                <div style={{ color: "var(--text-secondary)", fontSize: 14 }}>
                  {f.desc}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Doc types */}
        <section style={{ marginTop: 48 }}>
          <h2
            style={{
              textAlign: "center",
              fontWeight: 700,
              fontSize: 22,
              marginBottom: 20,
            }}
          >
            {h.docTypesTitle}
          </h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              justifyContent: "center",
            }}
          >
            {h.docTypes.map((d) => (
              <span
                key={d}
                style={{
                  background: "var(--bg-subtle)",
                  border: "1px solid var(--border)",
                  borderRadius: 20,
                  padding: "6px 14px",
                  fontSize: 13,
                  color: "var(--text-secondary)",
                }}
              >
                {d}
              </span>
            ))}
          </div>
        </section>

        <footer
          style={{
            textAlign: "center",
            color: "var(--text-muted)",
            fontSize: 12,
            marginTop: 64,
          }}
        >
          {h.footer}
        </footer>
      </main>
    </>
  );
}
