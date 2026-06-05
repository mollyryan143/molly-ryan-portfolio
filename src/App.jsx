import { useState, useEffect } from 'react'
import Nav              from './components/Nav'
import Hero             from './components/Hero'
import About            from './components/About'
import ResearchQuestion from './components/ResearchQuestion'
import DataSection      from './components/DataSection'
import Methods          from './components/Methods'
import Findings         from './components/Findings'
import Geography        from './components/Geography'
import Takeaway         from './components/Takeaway'
import CodeSection      from './components/CodeSection'
import Contact          from './components/Contact'

export default function App() {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem('theme') || 'light'
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light')

  return (
    <>
      <Nav theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <ResearchQuestion />
        <DataSection />
        <Methods />
        <Findings />
        <Geography />
        <Takeaway />
        <CodeSection />
        <Contact />
      </main>
      <footer>
        <p>© {new Date().getFullYear()} Molly Ryan · Dartmouth College QSS 20 · Built with React + Vite</p>
      </footer>
    </>
  )
}
