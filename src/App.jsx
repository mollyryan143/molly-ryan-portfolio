import { useState, useEffect } from 'react'
import Nav     from './components/Nav'
import Hero    from './components/Hero'
import About   from './components/About'
import Projects from './components/Projects'
import Contact  from './components/Contact'

export default function App() {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem('theme') || 'light'
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () =>
    setTheme(t => (t === 'light' ? 'dark' : 'light'))

  return (
    <>
      <Nav theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer>
        <p>© {new Date().getFullYear()} Molly Ryan · Built with React + Vite</p>
      </footer>
    </>
  )
}
