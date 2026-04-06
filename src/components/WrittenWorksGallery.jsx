import { useState } from 'react'
import './WrittenWorksGallery.css'
import ZoomableImage from './ZoomableImage'

const photos = [
  { id: 1, src: '/photos/box.jpg',     title: 'Senior Seminar Poem: The Little Box' },
  { id: 2, src: '/photos/article.jpg', title: 'University Relations & Marketing Ghana Article' },
  { id: 3, src: '/photos/noyes.png',   title: 'Noyes Art Garage Press Release' },
]

export default function WrittenWorksGallery({ onBack }) {
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
    <div className="ww-wrap">
      <div className="ww-header">
        <button className="ww-back" onClick={onBack}>← back</button>
        <h2 className="ww-title">Written Works</h2>
      </div>

      <div className="ww-scroll">
        <div className="ww-grid">
          {photos.map((p) => (
            <button key={p.id} className={`ww-cell ww-cell-${p.id}`} onClick={() => openPhoto(p)}>
              <img src={p.src} alt={p.title} />
              <div className="ww-cell-shade" />
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div className="ww-lightbox" onClick={closePhoto}>
          <div
            className={`ww-single ${phase === 'opening' ? 'lift-in' : phase === 'closing' ? 'drop-back' : 'lifted'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="ww-single-back" onClick={closePhoto}>← back</button>
            <ZoomableImage className="ww-single-img" src={selected.src} alt={selected.title} />
            <div className="ww-single-title">{selected.title}</div>
          </div>
        </div>
      )}
    </div>
  )
}
