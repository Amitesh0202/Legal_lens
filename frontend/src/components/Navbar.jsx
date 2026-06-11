import { Link, useLocation } from 'react-router-dom'
import { useLang } from '../context/LangContext.jsx'
import './Navbar.css'

const LANGS = [
  { code: 'en', label: 'EN', full: 'English' },
  { code: 'hi', label: 'हि', full: 'हिंदी' },
  { code: 'te', label: 'తె', full: 'తెలుగు' },
]

export default function Navbar() {
  const loc = useLocation()
  const { lang, setLang, t } = useLang()

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <span className="navbar-logo">⚖</span>
        <span className="navbar-name">LegalLens</span>
        <span className="navbar-tag">{t.nav.tag}</span>
      </Link>

      <div className="navbar-center">
        <Link to="/" className={loc.pathname === '/' ? 'active' : ''}>{t.nav.analyze}</Link>
        <Link to="/laws" className={loc.pathname === '/laws' ? 'active' : ''}>{t.nav.laws}</Link>
      </div>

      <div className="lang-switcher">
        {LANGS.map(l => (
          <button
            key={l.code}
            className={`lang-btn ${lang === l.code ? 'active' : ''}`}
            onClick={() => setLang(l.code)}
            title={l.full}
          >
            {l.label}
          </button>
        ))}
      </div>
    </nav>
  )
}
