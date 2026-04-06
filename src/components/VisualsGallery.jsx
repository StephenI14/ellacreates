import { useState } from 'react'
import './VisualsGallery.css'
import ZoomableImage from './ZoomableImage'

const photos = [
  { id: 1, src: '/photos/citron.jpg',       title: 'Digital Studies Class Logo Project' },
  { id: 2, src: '/photos/gamelogo_inv.png', title: 'Logo Final "FLY"' },
]

export default function VisualsGallery({ onBack }) {
  const [selected, setSelected] = useState(null)
  const [phase, setPhase] = useState(null)

  const openPhoto = (photo) => {
    setSelected(photo)
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
            <ZoomableImage className="vg-single-img" src={selected.src} alt={selected.title} />
            <div className="vg-single-title">{selected.title}</div>
          </div>
        </div>
      )}
    </div>
  )
}
