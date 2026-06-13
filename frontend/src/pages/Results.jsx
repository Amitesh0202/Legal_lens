import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useLang } from "../context/LangContext.jsx";
import Navbar from "../components/Navbar.jsx";

const RISK_BG = {
  Low: "var(--success-light)",
  Medium: "var(--warning-light)",
  High: "var(--danger-light)",
  Critical: "var(--critical-light)",
};
const RISK_COLOR = {
  Low: "var(--success)",
  Medium: "var(--warning)",
  High: "var(--danger)",
  Critical: "var(--critical)",
};

function RiskBadge({ level, labels }) {
  return (
    <span
      style={{
        background: RISK_BG[level] || "var(--bg-subtle)",
        color: RISK_COLOR[level] || "var(--text)",
        borderRadius: 20,
        padding: "3px 12px",
        fontSize: 13,
        fontWeight: 600,
      }}
    >
      {labels?.[level] || level}
    </span>
  );
}

function Section({ title, children }) {
  return (
    <section style={{ marginBottom: 32 }}>
      <h2
        style={{
          fontSize: 18,
          fontWeight: 700,
          marginBottom: 16,
          paddingBottom: 8,
          borderBottom: "2px solid var(--border)",
        }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function Results() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { t } = useLang();
  const r = t.results;

  useEffect(() => {
    if (!state?.result) navigate("/");
  }, [state, navigate]);

  if (!state?.result) return null;

  const { result, fileName } = state;
  const riskLabel = {
    Low: r.riskLow,
    Medium: r.riskMedium,
    High: r.riskHigh,
    Critical: r.riskCritical,
  };

  return (
    <>
      <Navbar />
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "32px 24px" }}>
        {/* Back */}
        <button
          onClick={() => navigate("/")}
          style={{
            background: "none",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius)",
            padding: "8px 16px",
            fontSize: 14,
            color: "var(--text-secondary)",
            marginBottom: 24,
            cursor: "pointer",
          }}
        >
          {r.backBtn}
        </button>

        {/* Header */}
        <div
          style={{
            background: "var(--bg-subtle)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-lg)",
            padding: 24,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 13,
                  color: "var(--text-muted)",
                  marginBottom: 4,
                }}
              >
                {fileName}
              </div>
              <div style={{ fontSize: 20, fontWeight: 700 }}>
                {result.document_type}
              </div>
              {result.ai_provider && (
                <div
                  style={{
                    fontSize: 12,
                    color: "var(--text-muted)",
                    marginTop: 4,
                  }}
                >
                  Analyzed by {result.ai_provider}
                </div>
              )}
            </div>
            <div style={{ textAlign: "right" }}>
              <RiskBadge level={result.overall_risk} labels={riskLabel} />
              <div style={{ marginTop: 8 }}>
                <span
                  style={{
                    fontSize: 32,
                    fontWeight: 800,
                    color: RISK_COLOR[result.overall_risk] || "var(--text)",
                  }}
                >
                  {result.risk_score}
                </span>
                <span style={{ fontSize: 14, color: "var(--text-muted)" }}>
                  /100
                </span>
              </div>
            </div>
          </div>
          {result.summary && (
            <p
              style={{
                marginTop: 16,
                color: "var(--text-secondary)",
                lineHeight: 1.7,
              }}
            >
              {result.summary}
            </p>
          )}
        </div>

        {/* Red flags */}
        {result.red_flags?.length > 0 && (
          <Section title="🚩 Red Flags">
            {result.red_flags.map((f, i) => (
              <div
                key={i}
                style={{
                  background: "var(--danger-light)",
                  borderLeft: "3px solid var(--danger)",
                  borderRadius: "var(--radius)",
                  padding: "10px 14px",
                  marginBottom: 10,
                  color: "var(--danger)",
                  fontSize: 14,
                }}
              >
                {f}
              </div>
            ))}
          </Section>
        )}

        {/* Good clauses */}
        {result.good_clauses?.length > 0 && (
          <Section title="✅ Good Clauses">
            {result.good_clauses.map((c, i) => (
              <div
                key={i}
                style={{
                  background: "var(--success-light)",
                  borderLeft: "3px solid var(--success)",
                  borderRadius: "var(--radius)",
                  padding: "10px 14px",
                  marginBottom: 10,
                  color: "var(--success)",
                  fontSize: 14,
                }}
              >
                {c}
              </div>
            ))}
          </Section>
        )}

        {/* Clauses */}
        {result.clauses?.length > 0 && (
          <Section title={r.hiddenClauses}>
            {result.clauses.map((c, i) => (
              <div
                key={i}
                style={{
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-lg)",
                  padding: 20,
                  marginBottom: 16,
                  borderLeft: `4px solid ${RISK_COLOR[c.risk_level] || "var(--border)"}`,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 10,
                  }}
                >
                  <div style={{ fontWeight: 600 }}>{c.title}</div>
                  <RiskBadge level={c.risk_level} labels={r.severityLabels} />
                </div>
                {c.content && (
                  <div
                    style={{
                      fontStyle: "italic",
                      color: "var(--text-muted)",
                      fontSize: 13,
                      background: "var(--bg-subtle)",
                      padding: "8px 12px",
                      borderRadius: 6,
                      marginBottom: 10,
                    }}
                  >
                    "{c.content}"
                  </div>
                )}
                <p
                  style={{
                    fontSize: 14,
                    color: "var(--text-secondary)",
                    marginBottom: 8,
                  }}
                >
                  {c.plain_english}
                </p>
                {c.indian_law_reference && (
                  <div
                    style={{
                      fontSize: 13,
                      color: "var(--accent)",
                      marginBottom: 6,
                    }}
                  >
                    ⚖️ {c.indian_law_reference}
                  </div>
                )}
                {c.recommendation && (
                  <div
                    style={{
                      fontSize: 13,
                      background: "var(--accent-light)",
                      color: "var(--accent)",
                      padding: "8px 12px",
                      borderRadius: 6,
                    }}
                  >
                    💡 {c.recommendation}
                  </div>
                )}
              </div>
            ))}
          </Section>
        )}

        {/* Future implications */}
        {result.future_implications && (
          <Section title={r.futureImplications}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: 16,
              }}
            >
              {[
                {
                  label: "1 Month",
                  value: result.future_implications.one_month,
                },
                { label: "1 Year", value: result.future_implications.one_year },
                {
                  label: "Long Term",
                  value: result.future_implications.long_term,
                },
              ].map(
                (item) =>
                  item.value && (
                    <div
                      key={item.label}
                      style={{
                        background: "var(--bg-subtle)",
                        border: "1px solid var(--border)",
                        borderRadius: "var(--radius-lg)",
                        padding: 16,
                      }}
                    >
                      <div
                        style={{
                          fontWeight: 600,
                          fontSize: 13,
                          color: "var(--text-muted)",
                          marginBottom: 8,
                        }}
                      >
                        {item.label}
                      </div>
                      <p
                        style={{ fontSize: 14, color: "var(--text-secondary)" }}
                      >
                        {item.value}
                      </p>
                    </div>
                  ),
              )}
            </div>
          </Section>
        )}

        {/* Applicable laws */}
        {result.applicable_laws?.length > 0 && (
          <Section title={r.lawCrossRef}>
            {result.applicable_laws.map((law, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 12,
                  padding: "12px 0",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <span style={{ color: "var(--accent)", fontSize: 18 }}>⚖️</span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>
                    {law.name}
                  </div>
                  <div
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: 13,
                      marginTop: 4,
                    }}
                  >
                    {law.relevance}
                  </div>
                </div>
              </div>
            ))}
          </Section>
        )}

        {/* Negotiation tips */}
        {result.negotiation_tips?.length > 0 && (
          <Section title={r.negotiationTips}>
            {result.negotiation_tips.map((tip, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 12,
                  padding: "10px 0",
                  borderBottom: "1px solid var(--border)",
                  fontSize: 14,
                  color: "var(--text-secondary)",
                }}
              >
                <span style={{ color: "var(--accent)", fontWeight: 700 }}>
                  {i + 1}.
                </span>
                <span>{tip}</span>
              </div>
            ))}
          </Section>
        )}

        {/* Disclaimer */}
        <div
          style={{
            marginTop: 40,
            padding: 16,
            background: "var(--bg-subtle)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius)",
            fontSize: 13,
            color: "var(--text-muted)",
            textAlign: "center",
          }}
        >
          {r.disclaimer}
        </div>
      </main>
    </>
  );
}
