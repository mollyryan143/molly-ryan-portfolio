const variables = [
  { name: 'highest_grade_category', type: 'Outcome', desc: 'Highest grade completed (0–20). 12 = HS diploma, 16 = bachelor\'s degree.' },
  { name: 'any_snap', type: 'Key predictor', desc: 'Whether the child ever lived in a household receiving SNAP/Food Stamps across all observed survey waves.' },
  { name: 'mother_educ_latest', type: 'Control', desc: 'Mother\'s highest grade completed, measured at the most recent available survey wave.' },
  { name: 'father_in_hh_any', type: 'Control', desc: 'Whether a father figure was present in the household in any observed wave.' },
  { name: 'ppvt_avg', type: 'Control', desc: 'Average PPVT (Peabody Picture Vocabulary Test) score across all waves — measures verbal/language ability.' },
  { name: 'math_avg', type: 'Control', desc: 'Average math achievement score across all tested waves.' },
  { name: 'female / race', type: 'Control', desc: 'Sex (binary) and race/ethnicity (Black, Hispanic, Non-Black Non-Hispanic).' },
  { name: 'region / urban_rural', type: 'Geographic', desc: 'Census region (Northeast, Midwest, South, West) and urban vs. rural residence — extracted from raw survey data.' },
]

export default function DataSection() {
  return (
    <section id="data">
      <hr className="divider" />
      <div className="container" style={{ paddingTop: '4rem' }}>
        <p className="section-label">Data</p>
        <h2 className="section-heading">The NLSY79 Children &amp; Young Adults</h2>
        <p className="section-sub">
          Where the data comes from, what it covers, and its limitations.
        </p>

        <div className="data-grid" style={{ marginBottom: '1.5rem' }}>
          <div className="data-card">
            <h4>About the Survey</h4>
            <ul>
              <li><strong>Full name:</strong> National Longitudinal Survey of Youth 1979 — Children and Young Adults (NLSCYA)</li>
              <li><strong>Sponsor:</strong> Bureau of Labor Statistics, U.S. Department of Labor</li>
              <li><strong>Design:</strong> Children born to NLSY79 mothers, followed from birth through adulthood</li>
              <li><strong>Waves:</strong> Biennial surveys, 1986–2018</li>
              <li><strong>Sample:</strong> 11,545 child respondents</li>
              <li><strong>Access:</strong> nlsinfo.org/investigator</li>
            </ul>
          </div>
          <div className="data-card">
            <h4>Data Limitations</h4>
            <ul>
              <li><strong>No state identifiers:</strong> Geography is only available at the Census region level in the public data</li>
              <li><strong>Self-reported welfare:</strong> SNAP receipt is reported by the mother, which may under-report participation</li>
              <li><strong>Missingness:</strong> Cognitive scores (PPVT, math) are missing for ~20% of children; work variables are missing for ~72%</li>
              <li><strong>Cohort effects:</strong> Children born earlier were interviewed as adults in a different economic context</li>
              <li><strong>No causality:</strong> Observational data — we cannot rule out omitted variables</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <h4 style={{ marginBottom: '0.75rem', fontSize: '0.9rem', fontWeight: 700 }}>Key Variables</h4>
          <table className="var-table">
            <thead>
              <tr>
                <th>Variable name</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {variables.map(v => (
                <tr key={v.name}>
                  <td>{v.name}</td>
                  <td><span style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.78rem' }}>{v.type}</span></td>
                  <td>{v.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
