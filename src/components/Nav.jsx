export default function Nav({ theme, toggleTheme }) {
  return (
    <nav>
      <div className="nav-inner">
        <span className="nav-logo">Molly Ryan — QSS 20</span>
        <ul className="nav-links">
          <li><a href="#question">Research Question</a></li>
          <li><a href="#data">Data</a></li>
          <li><a href="#methods">Methods</a></li>
          <li><a href="#findings">Findings</a></li>
          <li><a href="#geography">Geography</a></li>
          <li><a href="#takeaway">Takeaway</a></li>
          <li><a href="#code">Code</a></li>
          <li>
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
