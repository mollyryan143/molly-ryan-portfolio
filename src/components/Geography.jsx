export default function Geography() {
  return (
    <section id="geography">
      <hr className="divider" />
      <div className="container" style={{ paddingTop: '4rem' }}>
        <p className="section-label">Geography</p>
        <h2 className="section-heading">Does the SNAP–Education Gap Vary by Region?</h2>
        <p className="section-sub">
          Because the NLSCYA public data does not include state identifiers, geographic
          analysis is limited to the four U.S. Census regions. Region and urban/rural
          status were extracted from the raw survey data across 13 waves (1994–2018)
          and assigned based on the most commonly observed value per child.
        </p>

        <div className="geo-grid" style={{ marginBottom: '1.5rem' }}>
          <div className="figure-card">
            <img src="/figures/map_snap_rate_by_region.png" alt="SNAP receipt rate by region" />
            <div className="figure-caption">
              <strong>Figure 5. SNAP Receipt Rate by Census Region</strong>
              <p>
                Darker shading indicates a higher share of children who ever received
                SNAP/Food Stamps. The South has the highest SNAP receipt rate in this
                sample, followed by the Midwest. All four regions are colored by their
                NLSCYA sample's rate — not the general population rate.
              </p>
            </div>
          </div>
          <div className="figure-card">
            <img src="/figures/map_grade_gap_snap_vs_nonsnap.png" alt="Education gap by region" />
            <div className="figure-caption">
              <strong>Figure 6. Education Gap: Non-SNAP vs. SNAP Children by Region</strong>
              <p>
                This map shows the difference in average highest grade completed between
                non-SNAP and SNAP children within each Census region. A larger value (darker)
                means the grade gap between the two groups is wider in that region.
                The South shows the largest gap, suggesting regional context may matter
                for how SNAP status relates to educational outcomes.
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <h4 style={{ marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 700 }}>
            What the geographic analysis can and can't tell us
          </h4>
          <p style={{ color: 'var(--muted)', fontSize: '0.875rem', lineHeight: 1.75 }}>
            Because all children within a region are assigned the same regional value,
            these maps show regional averages rather than individual variation. They are
            useful for describing where SNAP families are concentrated and where the
            education gap is larger, but should not be interpreted as evidence that
            living in a particular region causes worse outcomes. State-level analysis
            would require applying for restricted geocode access through the NLS.
          </p>
        </div>
      </div>
    </section>
  )
}
