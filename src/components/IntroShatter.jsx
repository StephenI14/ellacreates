import { useState, useEffect } from 'react'
import './IntroShatter.css'

const COLS = 8
const ROWS = 6
const TOTAL = COLS * ROWS

export default function IntroShatter({ onComplete, onWaveStart }) {
  const [phase, setPhase] = useState('title')

  useEffect(() => {
    const t1 = setTimeout(() => { setPhase('crack'); onWaveStart?.() }, 480)
    const t2 = setTimeout(() => setPhase('shatter'), 800)
    const t3 = setTimeout(() => onComplete(), 2600)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [onComplete, onWaveStart])

  // Generate tiles with random fall directions
  const tiles = Array.from({ length: TOTAL }, (_, i) => {
    const col = i % COLS
    const row = Math.floor(i / COLS)
    const cx = (col + 0.5) / COLS   // 0–1 center position
    const cy = (row + 0.5) / ROWS
    // Fall direction: outward from center + downward
    const dx = (cx - 0.5) * 300 + (Math.random() - 0.5) * 200
    const dy = 200 + Math.random() * 400
    const rot = (Math.random() - 0.5) * 180
    // Stagger from center outward
    const distFromCenter = Math.sqrt((cx - 0.5) ** 2 + (cy - 0.5) ** 2)
    const delay = distFromCenter * 0.4

    return { i, col, row, dx, dy, rot, delay }
  })

  return (
    <>
      {/* Solid title screen — visible only during title phase */}
      {phase === 'title' && (
        <div className="is-overlay">
          <div className="is-title">
            <span className="is-of">Portfolio of</span>
            <h1 className="is-name">Ella Johnson</h1>
          </div>
        </div>
      )}

      {/* Tile grid — each tile is a piece of the black screen that falls away */}
      {(phase === 'crack' || phase === 'shatter') && (
        <div className="is-tiles">
          {tiles.map((t) => (
            <div
              key={t.i}
              className={`is-tile ${phase === 'shatter' ? 'is-tile-fall' : 'is-tile-crack'}`}
              style={{
                left: `${(t.col / COLS) * 100}%`,
                top: `${(t.row / ROWS) * 100}%`,
                width: `${(1 / COLS) * 100}%`,
                height: `${(1 / ROWS) * 100}%`,
                '--dx': `${t.dx}px`,
                '--dy': `${t.dy}px`,
                '--rot': `${t.rot}deg`,
                '--delay': `${t.delay}s`,
              }}
            >
              {/* Show title text positioned so it lines up across tiles */}
              <div
                className="is-tile-content"
                style={{
                  left: `${-(t.col / COLS) * 100}vw`,
                  top: `${-(t.row / ROWS) * 100}vh`,
                  width: '100vw',
                  height: '100vh',
                }}
              >
                <div className="is-title">
                  <span className="is-of">Portfolio of</span>
                  <h1 className="is-name">Ella Johnson</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}
