const TrendIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
  </svg>
)
const MapIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/>
    <line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/>
  </svg>
)
const BrainIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.66Z"/>
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.66Z"/>
  </svg>
)

const projects = [
  {
    icon: <TrendIcon />,
    title: 'SNAP & Educational Attainment',
    description:
      'Analyzed how childhood SNAP receipt relates to educational attainment using NLSCYA data (1979–2018). Built split-sample OLS regressions comparing SNAP vs. non-SNAP children across cognitive, family, and demographic factors.',
    tags: ['Python', 'statsmodels', 'pandas', 'OLS Regression'],
    link: 'https://github.com/mollyryan143/Qss20-snap-tanf-education-Molly-Ryan',
    linkLabel: 'View on GitHub →',
  },
  {
    icon: <MapIcon />,
    title: 'Geographic Analysis of SNAP Gaps',
    description:
      'Extracted Census region and urban/rural variables from 80,000+ column NLSCYA dataset. Built US choropleth maps showing education gaps between SNAP and non-SNAP children by region using geopandas and plotly.',
    tags: ['geopandas', 'plotly', 'Census Data', 'Python'],
    link: 'https://github.com/mollyryan143/Qss20-snap-tanf-education-Molly-Ryan',
    linkLabel: 'View on GitHub →',
  },
  {
    icon: <BrainIcon />,
    title: 'Cognitive Ability & Welfare Outcomes',
    description:
      'Extracted PPVT verbal scores and math achievement scores across 15 survey waves from raw NLSCYA data. Ran correlation and full OLS models to compare how cognitive ability predicts educational attainment differently for SNAP vs. non-SNAP children.',
    tags: ['Python', 'PPVT', 'Regression', 'NLSCYA'],
    link: 'https://github.com/mollyryan143/Qss20-snap-tanf-education-Molly-Ryan',
    linkLabel: 'View on GitHub →',
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <hr className="divider" />
      <div className="container" style={{ paddingTop: '4rem' }}>
        <h2 className="section-heading">Projects</h2>
        <p className="section-sub">Research and data science work</p>
        <div className="projects-grid">
          {projects.map((p) => (
            <div key={p.title} className="project-card">
              <div className="project-icon" style={{ color: 'var(--accent)' }}>{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="project-tags">
                {p.tags.map(t => <span key={t} className="project-tag">{t}</span>)}
              </div>
              <a className="project-link" href={p.link} target="_blank" rel="noreferrer">
                {p.linkLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
