const scripts = [
  { name: '01_clean_data.py',                   desc: 'Load raw NLSCYA CSV, recode missing values, construct welfare exposure indicators and education outcomes.' },
  { name: '02_extract_geography.py',             desc: 'Extract Census region and urban/rural variables across 13 waves; assign modal value per child.' },
  { name: '03_extract_cognitive_work.py',        desc: 'Extract PPVT verbal and math achievement scores across 15 waves; summarize child work-for-pay variables.' },
  { name: '04_regression_analysis.py',           desc: 'Run split-sample OLS and interaction models comparing SNAP vs. non-SNAP children. Produce coefficient plots.' },
  { name: '05_full_regression_correlations.py',  desc: 'Compute Pearson correlations by group; run full OLS with all variables; produce correlation ranking figure.' },
  { name: '06_maps.py',                          desc: 'Download Census shapefile, dissolve states into regions, produce choropleth maps with geopandas + matplotlib.' },
]

export default function CodeSection() {
  return (
    <section id="code">
      <hr className="divider" />
      <div className="container" style={{ paddingTop: '4rem' }}>
        <p className="section-label">Code</p>
        <h2 className="section-heading">How the Code Works</h2>
        <div className="code-grid" style={{ marginBottom: '1.5rem' }}>
          {scripts.map(s => (
            <div key={s.name} className="code-card">
              <h4>{s.name}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="card" style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 700 }}>Tech stack</h4>
          <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.7 }}>
            <strong style={{ color: 'var(--text)' }}>Python 3.13</strong> with pandas, numpy,
            statsmodels (OLS + GLM), matplotlib, geopandas, plotly, and kaleido.
            All scripts use relative paths and can be run from the project root directory
            after downloading the raw NLSCYA data from the NLS Investigator.
          </p>
        </div>

        <div style={{ textAlign: 'center' }}>
          <a
            className="btn btn-primary"
            href="https://github.com/mollyryan143/Qss20-snap-tanf-education-Molly-Ryan"
            target="_blank" rel="noreferrer"
          >
            View Full Repository on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
