const limitations = [
  'This is an observational study. SNAP receipt and educational outcomes are both driven by underlying poverty, so we cannot conclude that SNAP causes lower grades.',
  'The sample shrinks significantly when cognitive scores are included (~1,400 complete cases vs. 8,000+), which may introduce selection bias in the full model.',
  'Geography is limited to Census regions. State-level variation is not available in the public NLSCYA data.',
  'SNAP receipt is self-reported and measured biennially. Families that received SNAP between survey waves may be misclassified as non-SNAP.',
  'The NLSCYA oversamples disadvantaged groups, so findings may not generalize exactly to the full U.S. population.',
]

export default function Takeaway() {
  return (
    <section id="takeaway">
      <hr className="divider" />
      <div className="container" style={{ paddingTop: '4rem' }}>
        <p className="section-label">Takeaway</p>
        <h2 className="section-heading">For Food-Insecure Children, Cognitive Ability Is the Key Predictor</h2>

        <div className="takeaway-box">
          <p>
            Ultimately, the results show that children who ever received SNAP score lower on the attainment scale on average than
            children who did not. This gap is not explained simply by differences in race, sex, family structure,
            or cognitive ability. Rather, this project reveals how these family background factors operate differently
            across the two groups. Mother's education, father's presence in the household, and being female are all
            associated with higher educational attainment in both groups, but these relationships are consistently weaker
            for SNAP children than for non-SNAP children.
          </p>
          <p style={{ marginTop: '0.75rem' }}>
            This suggests that the factors we typically associate with educational success, stable household structure
            and parental education, are less influential for families receiving welfare benefits like SNAP. Math
            achievement scores, on the other hand, were more predictive of educational attainment within the SNAP
            group, suggesting that cognitive ability may be a more reliable pathway to educational success for
            children in disadvantaged households.
          </p>
          <p style={{ marginTop: '0.75rem' }}>
            This research aims to identify ways to better support educational attainment for children in poverty in
            the United States. These findings are patterns in correlational data, not causal claims. But they raise a
            meaningful question for policy: if cognitive ability is what pushes through the disadvantage of food
            insecurity, how can we better integrate early academic programs into welfare programs like SNAP?
          </p>
        </div>

        <div className="card">
          <h4 style={{ marginBottom: '0.75rem', fontSize: '0.9rem', fontWeight: 700 }}>Limitations to keep in mind</h4>
          <ul className="limitations-list">
            {limitations.map((l, i) => <li key={i}>{l}</li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}
