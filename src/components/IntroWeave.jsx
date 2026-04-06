import { useState, useEffect } from 'react'
import './IntroWeave.css'

export default function IntroWeave({ onComplete, onWaveStart }) {
  const [phase, setPhase] = useState('title')

  useEffect(() => {
    const t1 = setTimeout(() => { setPhase('weave-in'); onWaveStart?.() }, 480)
    const t2 = setTimeout(() => setPhase('weave-out'), 1400)
    const t3 = setTimeout(() => onComplete(), 2800)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [onComplete, onWaveStart])

  return (
    <>
      {/* Black overlay with title */}
      <div className={`iw-overlay iw-overlay-${phase}`}>
        <div className="iw-title">
          <span className="iw-of">Portfolio of</span>
          <h1 className="iw-name">Ella Johnson</h1>
        </div>
      </div>

      {/* Weave strips from all 4 sides */}
      <div className={`iw-strips iw-strips-${phase}`}>
        {/* Left side strips */}
        <div className="iw-strip iw-strip-left iw-strip-1" />
        <div className="iw-strip iw-strip-left iw-strip-2" />
        <div className="iw-strip iw-strip-left iw-strip-3" />
        <div className="iw-strip iw-strip-left iw-strip-4" />
        {/* Right side strips */}
        <div className="iw-strip iw-strip-right iw-strip-5" />
        <div className="iw-strip iw-strip-right iw-strip-6" />
        <div className="iw-strip iw-strip-right iw-strip-7" />
        <div className="iw-strip iw-strip-right iw-strip-8" />
        {/* Top strips */}
        <div className="iw-strip iw-strip-top iw-strip-9" />
        <div className="iw-strip iw-strip-top iw-strip-10" />
        <div className="iw-strip iw-strip-top iw-strip-11" />
        {/* Bottom strips */}
        <div className="iw-strip iw-strip-bottom iw-strip-12" />
        <div className="iw-strip iw-strip-bottom iw-strip-13" />
        <div className="iw-strip iw-strip-bottom iw-strip-14" />
      </div>
    </>
  )
}
