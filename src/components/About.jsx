const skills = [
  'Python', 'pandas', 'statsmodels', 'matplotlib',
  'OLS Regression', 'R', 'SQL', 'Git', 'React', 'Jupyter',
]

const stats = [
  { label: 'Dataset size',        value: '11,545 children' },
  { label: 'Survey waves',        value: '1979 – 2018' },
  { label: 'Models run',          value: '6 regression models' },
  { label: 'Variables extracted', value: '87 columns' },
]

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-heading">About Me</h2>
        <p className="section-sub">Background, skills, and what I'm working on</p>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm a student at Dartmouth College studying Quantitative Social Science,
              with a focus on social welfare policy and educational outcomes. My research
              examines how childhood participation in programs like SNAP shapes long-term
              life trajectories.
            </p>
            <p>
              I enjoy combining rigorous statistical methods with thoughtful storytelling —
              using regression models, data visualization, and geographic analysis to
              communicate findings clearly.
            </p>
            <p>
              Outside of research I'm interested in public policy, economic inequality,
              and building tools that make data more accessible.
            </p>
            <div className="skills-list">
              {skills.map(s => <span key={s} className="skill-tag">{s}</span>)}
            </div>
          </div>

          <div className="stats-card">
            <h3>QSS 20 Final Project — At a Glance</h3>
            {stats.map(({ label, value }) => (
              <div key={label} className="stat-row">
                <span className="stat-label">{label}</span>
                <span className="stat-value">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
