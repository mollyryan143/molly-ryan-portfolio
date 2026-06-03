export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-avatar">👩‍💻</div>
        <h1>Molly Ryan</h1>
        <p className="hero-title">Data Science &amp; Quantitative Social Science</p>
        <p className="hero-bio">
          Dartmouth College student studying Quantitative Social Science.
          I use data to understand social policy, welfare programs, and educational
          inequality. Passionate about turning complex datasets into clear, meaningful stories.
        </p>
        <div className="hero-links">
          <a className="btn btn-primary" href="#projects">View Projects</a>
          <a className="btn btn-outline" href="https://github.com/mollyryan143" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="btn btn-outline" href="mailto:mollyryan143@gmail.com">
            Email Me
          </a>
        </div>
      </div>
    </section>
  )
}
