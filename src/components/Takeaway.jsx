const limitations = [
  'This is an observational study. SNAP receipt and educational outcomes are both driven by underlying poverty, so we cannot conclude that SNAP causes lower grades.',
  'The sample shrinks significantly when cognitive scores are included (~1,400 complete cases vs. 8,000+), which may introduce selection bias in the full model.',
  'Geography is limited to Census regions — state-level variation is not available in the public NLSCYA data.',
  'SNAP receipt is self-reported and measured biennially. Families that received SNAP between survey waves may be misclassified as non-SNAP.',
  'The NLSCYA oversamples disadvantaged groups, so findings may not generalize exactly to the full U.S. population.',
]

export default function Takeaway() {
  return (
    <section id="takeaway">
      <hr className="divider" />
      <div className="container" style={{ paddingTop: '4rem' }}>
        <p className="section-label">Takeaway</p>
        <h2 className="section-heading">What This Study Tells Us</h2>
        <p className="section-sub">
          The main conclusion, stated carefully without overstating causality.
        </p>

        <div className="takeaway-box">
          <p>
            Children who ever received SNAP complete fewer grades on average than
            children who did not. However, this gap is not explained simply by differences
            in race, sex, family structure, or cognitive ability. The more interesting
            finding is <strong>how</strong> these factors work differently across the two groups.
            Mother's education, father's presence in the household, and being female
            are all associated with higher grade completion in both groups. It is important to note that these
            relationships are consistently weaker for SNAP children than for non-SNAP children.
          </p>
          <p style={{ marginTop: '0.75rem' }}>
            This suggests that the protective factors we typically associate with educational
            success, family human capital, stable household structure, may "buy less" in
            the context of food insecurity. Math achievement scores, on the other hand,
            appear to be <em>more</em> predictive within the SNAP group, hinting that cognitive
            ability may be a more reliable pathway to educational attainment for children
            in disadvantaged households.
          </p>
          <p style={{ marginTop: '0.75rem' }}>
            These are patterns in correlational data, not causal claims. But they raise a
            meaningful question for policy: are support programs designed with the assumption
            that family background factors work the same way for all children, when the
            evidence suggests they may not?
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
