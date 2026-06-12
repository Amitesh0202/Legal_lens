import { useState } from 'react'
import { useLang } from '../context/LangContext.jsx'
import Navbar from '../components/Navbar.jsx'
import LAWS from '../lib/lawsData.js'

export default function Laws() {
  const { lang, t } = useLang()
  const l = t.laws

  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [expanded, setExpanded] = useState(null)

  const allCategories = ['All', ...LAWS.map(g => g.category)]

  const filtered = LAWS
    .filter(g => activeCategory === 'All' || g.category === activeCategory)
    .map(g => ({
      ...g,
      laws: g.laws.filter(law => {
        if (!search) return true
        const q = search.toLowerCase()
        return (
          law.name.toLowerCase().includes(q) ||
          law.short?.[lang]?.toLowerCase().includes(q) ||
          law.governs?.[lang]?.some(d => d.toLowerCase().includes(q)) ||
          law.keySections?.some(s => s.section.toLowerCase().includes(q) || s.title.toLowerCase().includes(q))
        )
      })
    }))
    .filter(g => g.laws.length > 0)

  const totalLaws = filtered.reduce((sum, g) => sum + g.laws.length, 0)

  return (
    <>
      <Navbar />
      <main style={{ maxWidth: 960, margin: '0 auto', padding: '32px 24px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 8 }}>{l.title}</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>
            <strong>{totalLaws}</strong> {l.subtitle.replace('{n}', allCategories.length - 1)}{' '}
            <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer"
              style={{ color: 'var(--accent)' }}>India Code</a>
          </p>
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder={l.searchPlaceholder}
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{
            width: '100%', padding: '12px 16px', border: '1px solid var(--border-strong)',
            borderRadius: 'var(--radius)', fontSize: 15, marginBottom: 20, outline: 'none',
            fontFamily: 'inherit', background: 'var(--bg-subtle)'
          }}
        />

        {/* Category filters */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32 }}>
          {allCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '6px 14px', borderRadius: 20, fontSize: 13, fontWeight: 500,
                border: `1px solid ${activeCategory === cat ? 'var(--accent)' : 'var(--border)'}`,
                background: activeCategory === cat ? 'var(--accent)' : 'var(--bg-subtle)',
                color: activeCategory === cat ? '#fff' : 'var(--text-secondary)',
                cursor: 'pointer', transition: 'all 0.15s'
              }}
            >
              {cat === 'All' ? l.allBtn : (l.categories?.[cat] || cat)}
            </button>
          ))}
        </div>

        {/* Laws grouped by category */}
        {filtered.map(group => (
          <div key={group.category} style={{ marginBottom: 40 }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16
            }}>
              <span style={{ fontSize: 22 }}>{group.icon}</span>
              <h2 style={{ fontSize: 17, fontWeight: 700 }}>
                {l.categories?.[group.category] || group.category}
              </h2>
              <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>
                {group.laws.length} {l.lawCount}
              </span>
            </div>

            <div style={{ display: 'grid', gap: 12 }}>
              {group.laws.map(law => {
                const key = `${group.category}::${law.name}`
                const open = expanded === key

                return (
                  <div key={law.name} style={{
                    border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden', background: 'var(--bg)'
                  }}>
                    {/* Law header — always visible */}
                    <button
                      onClick={() => setExpanded(open ? null : key)}
                      style={{
                        width: '100%', textAlign: 'left', background: 'none', border: 'none',
                        padding: '16px 20px', cursor: 'pointer', display: 'flex',
                        justifyContent: 'space-between', alignItems: 'flex-start', gap: 12
                      }}
                    >
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 4 }}>
                          {law.name}
                          <span style={{ fontWeight: 400, color: 'var(--text-muted)', marginLeft: 8, fontSize: 13 }}>
                            {law.year}
                          </span>
                        </div>
                        <div style={{ color: 'var(--text-secondary)', fontSize: 13, lineHeight: 1.5 }}>
                          {law.short?.[lang] || law.short?.en}
                        </div>
                        {law.governs?.[lang] && (
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 8 }}>
                            {law.governs[lang].map(g => (
                              <span key={g} style={{
                                background: 'var(--accent-light)', color: 'var(--accent)',
                                borderRadius: 12, padding: '2px 10px', fontSize: 12
                              }}>{g}</span>
                            ))}
                          </div>
                        )}
                      </div>
                      <span style={{ color: 'var(--text-muted)', fontSize: 18, flexShrink: 0 }}>
                        {open ? '▲' : '▼'}
                      </span>
                    </button>

                    {/* Expanded detail */}
                    {open && (
                      <div style={{ padding: '0 20px 20px', borderTop: '1px solid var(--border)' }}>

                        {/* Key sections */}
                        {law.keySections?.length > 0 && (
                          <div style={{ marginTop: 16 }}>
                            <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 10 }}>{l.keySections}</div>
                            {law.keySections.map(s => (
                              <div key={s.section} style={{
                                display: 'flex', gap: 12, padding: '8px 0',
                                borderBottom: '1px solid var(--border)'
                              }}>
                                <span style={{
                                  background: 'var(--primary)', color: '#fff',
                                  borderRadius: 6, padding: '2px 8px', fontSize: 12,
                                  fontWeight: 600, flexShrink: 0, height: 'fit-content'
                                }}>{s.section}</span>
                                <div>
                                  <div style={{ fontWeight: 600, fontSize: 13 }}>{s.title}</div>
                                  <div style={{ color: 'var(--text-secondary)', fontSize: 13, marginTop: 2 }}>{s.detail}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* What to watch for */}
                        {law.watchFor?.[lang] && (
                          <div style={{
                            marginTop: 16, background: 'var(--warning-light)', borderRadius: 'var(--radius)',
                            padding: '12px 14px'
                          }}>
                            <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 6 }}>{l.watchFor}</div>
                            <p style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{law.watchFor[lang]}</p>
                          </div>
                        )}

                        {/* Penalty */}
                        {law.penalty?.[lang] && (
                          <div style={{
                            marginTop: 12, background: 'var(--danger-light)', borderRadius: 'var(--radius)',
                            padding: '12px 14px'
                          }}>
                            <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 6 }}>{l.penalties}</div>
                            <p style={{ fontSize: 13, color: 'var(--danger)' }}>{law.penalty[lang]}</p>
                          </div>
                        )}

                        {/* Official link */}
                        {law.officialUrl && (
                          <a href={law.officialUrl} target="_blank" rel="noopener noreferrer"
                            style={{
                              display: 'inline-block', marginTop: 14, color: 'var(--accent)',
                              fontSize: 13, fontWeight: 500
                            }}>
                            {l.officialLink}
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '48px 0' }}>
            No laws found for "{search}"
          </div>
        )}

      </main>
    </>
  )
}
