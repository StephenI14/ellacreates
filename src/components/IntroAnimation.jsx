import { useState, useEffect } from 'react'
import './IntroAnimation.css'

export default function IntroAnimation({ onComplete, onWaveStart }) {
  const [phase, setPhase] = useState('title')

  useEffect(() => {
    const t1 = setTimeout(() => { setPhase('wave'); onWaveStart?.() }, 480)
    const t2 = setTimeout(() => onComplete(), 2800)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [onComplete, onWaveStart])

  return (
    <>
      {/* Layer 1: solid black overlay with centered title — clipped away bottom-to-top */}
      <div className={`intro-overlay intro-overlay-${phase}`}>
        <div className="intro-title">
          <span className="intro-of">Portfolio of</span>
          <h1 className="intro-name">Ella Johnson</h1>
        </div>
      </div>

      {/* Layer 2: wave band — sweeps bottom-to-top independently */}
      <div className={`intro-wave-band intro-wave-band-${phase}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          className="intro-wave-svg"
        >
          {/* Top edge: wave crests. Bottom edge: mirrored wave crests. */}
          <path
            d="
              M0,80
              C120,10  260,150 420,75
              C580,0   710,140 880,70
              C1040,0  1190,140 1350,70
              C1400,35 1428,85 1440,70
              L1440,830
              C1428,815 1400,865 1350,830
              C1190,760 1040,900 880,830
              C710,760  580,900 420,825
              C260,750  120,890 0,820
              Z
            "
            fill="#000"
            stroke="#fff"
            strokeWidth="5"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </>
  )
}
