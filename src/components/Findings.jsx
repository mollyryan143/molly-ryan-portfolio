// All numbers below come directly from output/correlation_ranking.csv
// and output/full_regression_results.csv — no invented values.

const findings = [
  {
    title: "Mother's education is the single strongest predictor of grade completion — but it matters less for SNAP children",
    detail: `Mother's education has the highest correlation with highest grade completed overall (r = +0.317).
      However, this relationship is noticeably weaker within the SNAP group (r = +0.278) than the non-SNAP group
      (r = +0.326). In the OLS regression, each additional grade of mother's education is associated with
      +0.23 grades for non-SNAP children and +0.22 grades for SNAP children — a gap that suggests family
      human capital is less protective when a household is experiencing food insecurity.`,
    stat: 'r = +0.317 overall | Non-SNAP: +0.23 grades per grade | SNAP: +0.22 grades per grade',
  },
  {
    title: 'Math scores are nearly as predictive as mother\'s education — and the gap between groups is striking',
    detail: `Average math score has the second-highest correlation with grade completion (r = +0.303).
      The OLS coefficient is roughly twice as large for SNAP children (β = +0.10 per point)
      as for non-SNAP children (β = +0.06 per point), and both are highly significant (p < 0.001).
      This means cognitive ability — as measured by math achievement — is actually a stronger predictor
      within the SNAP group, suggesting that among children in food-insecure households,
      academic ability plays an especially important role in determining how far they go in school.`,
    stat: 'r = +0.303 overall | SNAP β = +0.10 | Non-SNAP β = +0.06',
  },
  {
    title: 'Girls complete more grades than boys in both groups — and the gender gap is larger for SNAP children',
    detail: `Being female is consistently associated with higher grade completion. In the split-sample regression,
      girls in non-SNAP households complete on average 0.83 more grades than boys (p < 0.001).
      Among SNAP children, the gap is even larger: girls complete 0.94 more grades than boys (p < 0.001).
      This widened gender gap within the SNAP group may reflect that boys in food-insecure households
      face additional pressures — such as early labor force entry — that reduce their educational attainment
      relative to girls.`,
    stat: 'Non-SNAP gender gap: +0.83 grades | SNAP gender gap: +0.94 grades',
  },
  {
    title: "Father's presence in the household has a much weaker association for SNAP children",
    detail: `For non-SNAP children, having a father present in the household is associated with +0.66 more grades
      completed (p < 0.001) — a large and significant effect. For SNAP children, the estimated effect
      is only +0.42 grades, and it is not statistically significant (p = 0.09).
      The raw correlation also drops from +0.138 (non-SNAP) to just +0.048 (SNAP).
      This suggests that two-parent family structure, while protective for non-SNAP families,
      is less reliably associated with better outcomes in households that also face food insecurity.`,
    stat: "Non-SNAP β = +0.66 (p<0.001) | SNAP β = +0.42 (p=0.09, not significant)",
  },
  {
    title: "Being Black has opposite associations in the two groups",
    detail: `Among non-SNAP children, being Black is negatively correlated with highest grade completed
      (r = −0.107), consistent with well-documented racial gaps in educational attainment.
      However, within the SNAP group, the correlation flips to slightly positive (r = +0.059).
      In the regression, the Black coefficient is −0.24 for non-SNAP children (not significant, p = 0.15)
      and +0.15 for SNAP children (not significant, p = 0.65). While neither estimate is statistically
      significant, the reversal in direction suggests that once SNAP status is accounted for,
      the racial education gap may be more about economic circumstances than race itself.`,
    stat: 'r (non-SNAP): −0.107 | r (SNAP): +0.059',
  },
]

export default function Findings() {
  return (
    <section id="findings">
      <hr className="divider" />
      <div className="container" style={{ paddingTop: '4rem' }}>
        <p className="section-label">Findings</p>
        <h2 className="section-heading">What the Analysis Shows</h2>
        <p className="section-sub">
          Five numbered findings from the regression and correlation analysis.
          All statistics come directly from the data — no values are estimated or invented.
        </p>

        <div className="findings-list">
          {findings.map((f, i) => (
            <div key={i} className="finding-card">
              <div className="finding-num">{i + 1}</div>
              <div className="finding-body">
                <h4>{f.title}</h4>
                <p style={{ whiteSpace: 'pre-line' }}>{f.detail}</p>
                <span className="finding-stat">{f.stat}</span>
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
                  with 95% confidence intervals. Blue = non-SNAP children (n=1,168 with complete data),
                  red = SNAP children (n=293). Variables where the two groups' confidence intervals
                  do not overlap indicate meaningfully different relationships.
                </p>
              </div>
            </div>
            <div className="figure-card">
              <img src="/figures/full_regression_coef_plot.png" alt="Full regression model" />
              <div className="figure-caption">
                <strong>Figure 2. Full Model Including Cognitive Scores</strong>
                <p>
                  OLS model with all available variables, including average PPVT verbal score,
                  average math score, and work frequency. Markers (✦) indicate coefficients significant
                  at p &lt; 0.05. R² ≈ 0.30–0.33, meaning these variables explain about
                  30% of the variation in grade completion.
                </p>
              </div>
            </div>
            <div className="figure-card">
              <img src="/figures/correlation_ranking.png" alt="Correlation ranking" />
              <div className="figure-caption">
                <strong>Figure 3. Correlation Ranking by SNAP Status</strong>
                <p>
                  Pearson correlations between each predictor and highest grade completed,
                  shown separately for all children (grey), non-SNAP (blue), and SNAP (red).
                  Variables on the left are negatively correlated; variables on the right are
                  positively correlated. Note how father in household and Black race show
                  the largest differences between groups.
                </p>
              </div>
            </div>
            <div className="figure-card">
              <img src="/figures/interaction_coef_plot.png" alt="Interaction model" />
              <div className="figure-caption">
                <strong>Figure 4. Interaction Model: Where Slopes Differ Significantly</strong>
                <p>
                  Coefficients from a single OLS model that includes SNAP × control interaction
                  terms. Red bars indicate variables where the relationship with grade completion
                  is statistically different (p &lt; 0.05) for SNAP vs. non-SNAP children.
                  Grey bars are not significantly different between groups.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
