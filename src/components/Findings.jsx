const findings = [
  {
    title: "Mother's education is the single strongest predictor of grade completion, but it matters less for SNAP children",
    detail: `Mother's education has the highest correlation with highest grade completed overall.
      However, this relationship is noticeably weaker within the SNAP group than the non-SNAP group.
      This suggests that family human capital is less protective when a household is experiencing food insecurity.`,
  },
  {
    title: "Math scores are nearly as predictive as mother's education, and the gap between groups is notable",
    detail: `Average math score has the second-highest correlation with grade completion.
      The association is notably stronger for SNAP children than for non-SNAP children,
      suggesting that among children in food-insecure households,
      academic ability plays an especially important role in determining how far they go in school.`,
  },
  {
    title: 'Girls complete more grades than boys in both groups, and the gender gap is larger for SNAP children',
    detail: `Being female is consistently associated with higher grade completion in both groups.
      The gender gap is somewhat larger within the SNAP group than outside it.
      This may reflect that boys in food-insecure households face additional pressures, such as early labor force entry, that reduce their educational attainment relative to girls.`,
  },
  {
    title: "Father's presence in the household has a much weaker association for SNAP children",
    detail: `For non-SNAP children, having a father present in the household is associated with meaningfully higher grade completion, and the effect is statistically significant.
      For SNAP children, the estimated effect is smaller and not statistically significant.
      This suggests that two-parent family structure, while protective for non-SNAP families,
      is less reliably associated with better outcomes in households that also face food insecurity.`,
  },
  {
    title: "Being Black has opposite associations in the two groups",
    detail: `Among non-SNAP children, being Black is negatively correlated with highest grade completed,
      consistent with well-documented racial gaps in educational attainment.
      However, within the SNAP group, the correlation flips to slightly positive.
      Neither estimate is statistically significant, but the reversal in direction suggests that once SNAP status is accounted for,
      the racial education gap may be more about economic circumstances than race itself.`,
  },
]

export default function Findings() {
  return (
    <section id="findings">
      <hr className="divider" />
      <div className="container" style={{ paddingTop: '4rem' }}>
        <p className="section-label">Findings</p>
        <h2 className="section-heading">What the Analysis Shows</h2>
        <div className="findings-list">
          {findings.map((f, i) => (
            <div key={i} className="finding-card">
              <div className="finding-num">{i + 1}</div>
              <div className="finding-body">
                <h4>{f.title}</h4>
                <p style={{ whiteSpace: 'pre-line' }}>{f.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '2rem' }}>
          <p className="section-label" style={{ marginBottom: '1rem' }}>Supporting Figures</p>
          <div className="figures-grid">
            <div className="figure-card">
              <img src="/figures/split_sample_coef_plot.png" alt="Split-sample coefficient plot" />
              <div className="figure-caption">
                <strong>Figure 1. OLS Coefficients: SNAP vs. Non-SNAP Children</strong>
                <p>
                  Each dot shows the estimated effect of a variable on highest grade completed,
                  with 95% confidence intervals. Blue = non-SNAP children, orange = SNAP children.
                  Variables where the two groups' confidence intervals do not overlap indicate
                  meaningfully different relationships.
                </p>
              </div>
            </div>
            <div className="figure-card">
              <img src="/figures/correlation_ranking.png" alt="Correlation ranking" />
              <div className="figure-caption">
                <strong>Figure 2. Correlation Ranking by SNAP Status</strong>
                <p>
                  Pearson correlations between each predictor and highest grade completed,
                  shown separately for all children (grey), non-SNAP (blue), and SNAP (orange).
                  Variables on the left are negatively correlated; variables on the right are
                  positively correlated. Note how father in household and Black race show
                  the largest differences between groups.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
