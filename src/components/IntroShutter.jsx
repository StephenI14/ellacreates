import { useState, useEffect, useMemo } from 'react'
import './IntroShutter.css'

const BLADES = 7
const CX = 500
const CY = 500
const R = 460

function buildBlades() {
  const blades = []

  for (let i = 0; i < BLADES; i++) {
    const angle = (i / BLADES) * Math.PI * 2
    // Pivot on outer ring
    const px = CX + R * Math.cos(angle)
    const py = CY + R * Math.sin(angle)

    // Unit vector: pivot → center
    const ux = (CX - px) / R
    const uy = (CY - py) / R
    // Perpendicular
    const nx = -uy
    const ny = ux

    const bladeLen = 720
    const midDist = bladeLen * 0.38
    const halfWidth = 210

    // Tip (far end, past center)
    const tx = px + ux * bladeLen
    const ty = py + uy * bladeLen

    // Quadratic control points at widest part of blade (leaf shape)
    const c1x = px + ux * midDist + nx * halfWidth
    const c1y = py + uy * midDist + ny * halfWidth
    const c2x = px + ux * midDist - nx * halfWidth
    const c2y = py + uy * midDist - ny * halfWidth

    const f = (v) => v.toFixed(1)

    blades.push({
      d: `M ${f(px)},${f(py)} Q ${f(c1x)},${f(c1y)} ${f(tx)},${f(ty)} Q ${f(c2x)},${f(c2y)} ${f(px)},${f(py)} Z`,
      px: f(px),
      py: f(py),
    })
  }
  return blades
}

export default function IntroShutter({ onComplete, onWaveStart }) {
  const [phase, setPhase] = useState('title')
  const blades = useMemo(buildBlades, [])

  useEffect(() => {
    const t1 = setTimeout(() => { setPhase('opening'); onWaveStart?.() }, 480)
    const t2 = setTimeout(() => setPhase('done'), 2100)
    const t3 = setTimeout(() => onComplete(), 2600)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [onComplete, onWaveStart])

  return (
    <>
      {/* Title underneath */}
      <div className={`ish-overlay ish-overlay-${phase}`}>
        <div className="ish-title">
          <span className="ish-of">Portfolio of</span>
          <h1 className="ish-name">Ella Johnson</h1>
        </div>
      </div>

      {/* Iris shutter */}
      <svg
        className={`ish-iris ish-iris-${phase}`}
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Outer ring */}
        <circle
          cx="500" cy="500" r="456"
          fill="none" stroke="#fff" strokeWidth="1.5"
          className="ish-ring"
        />

        {/* Blades */}
        {blades.map((b, i) => (
          <path
            key={i}
            d={b.d}
            className="ish-blade"
            style={{
              transformOrigin: `${b.px}px ${b.py}px`,
            }}
          />
        ))}
      </svg>
    </>
  )
}
