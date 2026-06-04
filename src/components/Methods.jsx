const steps = [
  {
    title: 'Data cleaning & variable construction',
    desc: 'Loaded the raw NLSCYA CSV (11,545 rows, 82,318 columns). Recoded negative values (NLS missing codes −1 through −9) as NaN. Constructed binary welfare indicators, education outcome variables, and family structure measures. Saved a cleaned subset with 87 columns.'
  },
  {
    title: 'Geographic variable extraction',
    desc: 'Identified Census region (REGION94–REGION2018) and urban/rural (URBAN-RURAL) variable IDs in the NLS codebook. Extracted these across 13 survey waves and assigned each child their most commonly observed region and urban/rural classification.'
  },
  {
    title: 'Cognitive & work variable extraction',
    desc: 'Extracted PPVT verbal scores and math achievement scores across up to 15 waves (1986–2014), yielding averages with 80%+ coverage. Also extracted child work-for-pay indicators across 6 waves (2002–2012), with lower coverage (~28%).'
  },
  {
    title: 'Split-sample OLS regression',
    desc: 'Divided the sample into SNAP (n=2,754) and non-SNAP (n=5,529) groups. Ran the same OLS specification separately on each group, with highest grade completed as the outcome. Used HC3 robust standard errors throughout. Compared coefficient estimates side by side to identify where background factors predict differently across groups.'
  },
  {
    title: 'Interaction model',
    desc: 'Ran a single OLS model including snap_ever × each control variable as interaction terms. This formally tests whether the slope for a given variable (e.g., mother\'s education) is statistically significantly different for SNAP vs. non-SNAP children.'
  },
  {
    title: 'Correlation ranking & full model',
    desc: 'Computed Pearson correlations between each predictor and highest grade, separately for SNAP and non-SNAP groups. Ran a full OLS model including all available variables to assess relative effect sizes and statistical significance.'
  },
  {
    title: 'Geographic visualization',
    desc: 'Downloaded a U.S. Census TIGER shapefile and dissolved state polygons into the four Census regions using geopandas. Plotted choropleth maps showing SNAP receipt rates and education gaps using matplotlib, with no state lines — only region outlines.'
  },
]

export default function Methods() {
  return (
    <section id="methods">
      <hr className="divider" />
      <div className="container" style={{ paddingTop: '4rem' }}>
        <p className="section-label">Methods</p>
        <h2 className="section-heading">How the Analysis Was Done</h2>
        <p className="section-sub">
          Seven steps from raw data to final figures. Each step corresponds to a
          numbered Python script in the GitHub repository.
        </p>

        <div className="methods-steps">
          {steps.map((s, i) => (
            <div key={i} className="method-step">
              <div className="step-num">{i + 1}</div>
              <div className="step-body">
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
