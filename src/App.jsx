import { useState } from 'react'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'
import './App.css'

const NAV = [
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

export default function App() {
  const [page, setPage] = useState('portfolio')

  return (
    <div className="app">
      <aside className="sidebar">
        <div>
          <div className="sidebar-name">Ella Johnson</div>
          <div className="sidebar-tagline">photographer &amp; creative</div>
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

      <main className="main-content">
        {page === 'portfolio' && <Portfolio />}
        {page === 'about' && <About />}
        {page === 'contact' && <Contact />}
      </main>
    </div>
  )
}
