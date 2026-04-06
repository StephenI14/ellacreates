import { useState } from 'react'
import './CampaignsGallery.css'

const photos = [
  { id: 1, src: '/photos/event.jpg',     title: 'Event' },
  { id: 2, src: '/photos/flier.jpg',     title: 'Flier' },
  { id: 3, src: '/photos/geo.jpg',       title: 'Geo' },
  { id: 4, src: '/photos/marketing.jpg', title: 'Marketing' },
  { id: 5, src: '/photos/upcycle.jpg',   title: 'Upcycle' },
]

export default function CampaignsGallery({ onBack }) {
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
    <div className="cg-wrap">
      <div className="cg-header">
        <button className="cg-back" onClick={onBack}>← back</button>
        <h2 className="cg-title">Creative Campaigns</h2>
      </div>

      <div className="cg-scroll">
        <div className="cg-grid">
          {photos.map((p) => (
            <button key={p.id} className={`cg-cell cg-cell-${p.id}`} onClick={() => openPhoto(p)}>
              <img src={p.src} alt={p.title} />
              <div className="cg-cell-shade" />
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div className="cg-lightbox" onClick={closePhoto}>
          <div
            className={`cg-single ${phase === 'opening' ? 'lift-in' : phase === 'closing' ? 'drop-back' : 'lifted'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="cg-single-back" onClick={closePhoto}>← back</button>
            <img className="cg-single-img" src={selected.src} alt={selected.title} />
            <div className="cg-single-title">{selected.title}</div>
          </div>
        </div>
      )}
    </div>
  )
}
