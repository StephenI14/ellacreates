import { useState } from 'react'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'
import Resume from './components/Resume'
import IntroAnimation from './components/IntroAnimation'
import IntroWeave from './components/IntroWeave'
import IntroBall from './components/IntroBall'
import IntroShatter from './components/IntroShatter'
import IntroShutter from './components/IntroShutter'
import './App.css'

// ── Swap intro animation here ──
// Options: IntroAnimation (wave), IntroWeave, IntroBall, IntroShatter, IntroShutter
const Intro = IntroShutter

const NAV = [
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'about', label: 'About' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
]

export default function App() {
  const [page, setPage] = useState('portfolio')
  return (
    <>
      <div className="app">
      <aside className="sidebar">
        <div>
          <div className="sidebar-name">Ella Johnson</div>
          <div className="sidebar-tagline">Aspiring Brand Strategist | PR &amp; Communications</div>
        </div>

        <nav className="sidebar-nav">
          {NAV.map(({ id, label }) => (
            <button
              key={id}
              className={`nav-btn ${page === id ? 'active' : ''}`}
              onClick={() => setPage(id)}
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">© 2025 ella johnson</div>
      </aside>

      <main className={`main-content ${page === 'resume' ? 'no-scroll' : ''}`}>
        {page === 'portfolio' && <Portfolio />}
        {page === 'about' && <About />}
        {page === 'resume' && <Resume />}
        {page === 'contact' && <Contact />}
      </main>
    </div>
    </>
  )
}
