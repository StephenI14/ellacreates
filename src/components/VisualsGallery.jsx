import { useState } from 'react'
import './VisualsGallery.css'
import ZoomableImage from './ZoomableImage'

const photos = [
  { id: 1, src: '/photos/citron.jpg',       title: 'Digital Studies Class Logo Project' },
  { id: 2, src: '/photos/gamelogo_inv.png', title: 'Logo Final "FLY"', slides: ['/photos/gamelogo_inv.png', '/photos/logo1.png', '/photos/logo2.png', '/photos/logo3.png', '/photos/logo4.png', '/photos/logo5.png', '/photos/logo6.png', '/photos/logo7.png', '/photos/logo8.png'] },
]

export default function VisualsGallery({ onBack }) {
  const [selected, setSelected] = useState(null)
  const [phase, setPhase] = useState(null)
  const [slideIndex, setSlideIndex] = useState(0)

  const openPhoto = (photo) => {
    setSelected(photo)
    setSlideIndex(0)
    setPhase('opening')
    setTimeout(() => setPhase('open'), 400)
  }

  const closePhoto = () => {
    setPhase('closing')
    setTimeout(() => { setSelected(null); setPhase(null) }, 350)
  }

  return (
    <div className="vg-wrap">
      <div className="vg-header">
        <button className="vg-back" onClick={onBack}>← back</button>
        <h2 className="vg-title">Visuals</h2>
      </div>

      <div className="vg-scroll">
        <div className="vg-grid">
          {photos.map((p) => (
            <button key={p.id} className={`vg-cell vg-cell-${p.id}`} onClick={() => openPhoto(p)}>
              <img src={p.src} alt={p.title} />
              <div className="vg-cell-shade" />
              <span className="vg-cell-title">{p.title}</span>
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div className="vg-lightbox" onClick={closePhoto}>
          <div
            className={`vg-single ${phase === 'opening' ? 'lift-in' : phase === 'closing' ? 'drop-back' : 'lifted'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="vg-single-back" onClick={closePhoto}>← back</button>
            {selected.slides ? (
              <>
                <ZoomableImage className="vg-single-img" src={selected.slides[slideIndex]} alt={`${selected.title} ${slideIndex + 1}`} />
                <div className="vg-slide-controls">
                  <button
                    className="vg-slide-btn"
                    onClick={() => setSlideIndex((i) => Math.max(0, i - 1))}
                    disabled={slideIndex === 0}
                  >
                    ←
                  </button>
                  <span className="vg-slide-count">{slideIndex + 1} / {selected.slides.length}</span>
                  <button
                    className="vg-slide-btn"
                    onClick={() => setSlideIndex((i) => Math.min(selected.slides.length - 1, i + 1))}
                    disabled={slideIndex === selected.slides.length - 1}
                  >
                    →
                  </button>
                </div>
              </>
            ) : (
              <ZoomableImage className="vg-single-img" src={selected.src} alt={selected.title} />
            )}
            <div className="vg-single-title">{selected.title}</div>
          </div>
        </div>
      )}
    </div>
  )
}
