const projects = [
  {
    icon: '📈',
    title: 'SNAP & Educational Attainment',
    description:
      'Analyzed how childhood SNAP receipt relates to highest grade completed using NLSCYA data (1979–2018). Built split-sample OLS regressions comparing SNAP vs. non-SNAP children across cognitive, family, and demographic factors.',
    tags: ['Python', 'statsmodels', 'pandas', 'OLS Regression'],
    link: 'https://github.com/mollyryan143/Qss20-snap-tanf-education-Molly-Ryan',
    linkLabel: 'View on GitHub →',
  },
  {
    icon: '🗺️',
    title: 'Geographic Analysis of SNAP Gaps',
    description:
      'Extracted Census region and urban/rural variables from 80,000+ column NLSCYA dataset. Built US choropleth maps showing education gaps between SNAP and non-SNAP children by region using geopandas and plotly.',
    tags: ['geopandas', 'plotly', 'Census Data', 'Python'],
    link: 'https://github.com/mollyryan143/Qss20-snap-tanf-education-Molly-Ryan',
    linkLabel: 'View on GitHub →',
  },
  {
    icon: '🧠',
    title: 'Cognitive Ability & Welfare Outcomes',
    description:
      'Extracted PPVT verbal scores and math achievement scores across 15 survey waves from raw NLSCYA data. Ran correlation and full OLS models to compare how cognitive ability predicts grade completion differently for SNAP vs. non-SNAP children.',
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
              <div className="project-icon">{p.icon}</div>
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
