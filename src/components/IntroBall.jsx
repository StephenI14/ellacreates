import { useState, useEffect } from 'react'
import './IntroBall.css'

export default function IntroBall({ onComplete, onWaveStart }) {
  const [phase, setPhase] = useState('title')

  useEffect(() => {
    const t1 = setTimeout(() => { setPhase('roll'); onWaveStart?.() }, 480)
    const t2 = setTimeout(() => setPhase('expand'), 1600)
    const t3 = setTimeout(() => setPhase('reveal'), 2200)
    const t4 = setTimeout(() => onComplete(), 2900)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4) }
  }, [onComplete, onWaveStart])

  return (
    <>
      {/* Black overlay with title */}
      <div className={`ib-overlay ib-overlay-${phase}`}>
        <div className="ib-title">
          <span className="ib-of">Portfolio of</span>
          <h1 className="ib-name">Ella Johnson</h1>
        </div>
      </div>

      {/* Rolling ball */}
      <div className={`ib-ball-wrap ib-ball-wrap-${phase}`}>
        <div className="ib-ball">
          <div className="ib-ball-inner" />
        </div>
      </div>
    </>
  )
}
