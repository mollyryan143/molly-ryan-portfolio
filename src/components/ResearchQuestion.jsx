export default function ResearchQuestion() {
  return (
    <section id="question">
      <div className="container">
        <p className="section-label">Research Question</p>
        <h2 className="section-heading">Do Predictors of Educational Attainment Differ by Childhood SNAP Receipt?</h2>
        <p className="section-sub">
          Using longitudinal NLSY79 data, this study examines how a range of individual,
          family, and geographic factors relate to educational attainment, and whether
          those relationships differ by childhood SNAP receipt.
        </p>

        <div className="rq-box">

          <p>
            It is widely known that poverty is associated with worse educational outcomes, but which
            specific factors predict how far a child goes in school? Do those factors
            work the same way for children in SNAP households as they do for children who
            never received SNAP? This study uses split-sample regression on four
            decades of longitudinal NLSY79 data to compare how family background, cognitive
            ability, demographics, and geography each relate to highest grade completed
            across the two groups.
          </p>
        </div>

        <div className="card">
          <h4 style={{ marginBottom: '0.75rem', fontSize: '0.95rem', fontWeight: 700 }}>Why this question matters</h4>
          <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.75 }}>
            SNAP is the largest food assistance program in the United States, serving
            millions of children each year. Policy discussions often assume that the same
            factors, like a stable family, an educated parent, and strong academic skills, protect
            all children equally. If those protective factors operate differently for children
            in food-insecure households, that has real implications for how we design
            educational support programs and measure inequality.
          </p>
          <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.75, marginTop: '0.75rem' }}>
            <strong style={{ color: 'var(--text)' }}>Important note on causality:</strong> This
            study identifies associations, not causes. SNAP receipt and educational outcomes
            are both shaped by underlying poverty and family circumstances. The findings
            describe patterns in the data and should not be interpreted as evidence that
            SNAP itself causes any particular outcome.
          </p>
        </div>
      </div>
    </section>
  )
}
