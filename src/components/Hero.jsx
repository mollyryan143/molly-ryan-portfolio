// SVG icons — no emoji
const icons = {
  people: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  calendar: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="0"/><line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  ),
  chart: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
      <line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/>
    </svg>
  ),
  map: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/>
      <line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/>
    </svg>
  ),
}

const stats = [
  { icon: icons.people,   value: '11,545',   label: 'Children in dataset' },
  { icon: icons.calendar, value: '1979–2018', label: 'Survey years' },
  { icon: icons.chart,    value: '6',         label: 'Regression models' },
  { icon: icons.map,      value: '4',         label: 'Census regions' },
]

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-badge">QSS 20 Final Project · Dartmouth College · Spring 2026</div>
        <h1>Educational Attainment &amp; <em>Welfare</em><br />in the United States</h1>
        <p className="hero-sub" style={{ fontWeight: 600, fontStyle: 'normal', color: 'var(--text)', marginBottom: '0.75rem' }}>
          Do Predictors of Educational Attainment Differ by Childhood SNAP Receipt?
        </p>
        <p className="hero-sub" style={{ marginTop: 0 }}>
          Using longitudinal NLSY79 data, this study examines how a range of individual,
          family, and geographic factors relate to educational attainment — and whether
          those relationships differ by childhood SNAP receipt.
        </p>
        <div className="hero-meta">
          <span className="hero-meta-item"><strong>Author:</strong> Molly Ryan</span>
          <span className="hero-meta-item"><strong>Data:</strong> NLSY79 Children &amp; Young Adults</span>
          <span className="hero-meta-item"><strong>Method:</strong> OLS Regression</span>
        </div>

        <div className="stat-cards" style={{ marginBottom: '2rem' }}>
          {stats.map(s => (
            <div key={s.label} className="stat-card">
              <div className="stat-card-icon" style={{ color: 'var(--accent)' }}>{s.icon}</div>
              <div className="stat-card-value">{s.value}</div>
              <div className="stat-card-label">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="hero-links">
          <a className="btn btn-primary" href="#findings">Jump to Findings</a>
          <a className="btn btn-outline" href="#question">Read the Study</a>
          <a className="btn btn-outline"
            href="https://github.com/mollyryan143/Qss20-snap-tanf-education-Molly-Ryan"
            target="_blank" rel="noreferrer">
            GitHub Repo
          </a>
        </div>
      </div>
    </section>
  )
}
