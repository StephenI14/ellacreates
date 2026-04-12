import { useState } from 'react'
import './WrittenWorksGallery.css'
import ZoomableImage from './ZoomableImage'

const photos = [
  { id: 1, src: '/photos/box.jpg',     title: 'Senior Seminar Poem: The Little Box' },
  { id: 2, src: '/photos/article.jpg', title: 'University Relations & Marketing Ghana Article' },
  { id: 3, src: '/photos/noyes.png',   title: 'Noyes Art Garage Press Release' },
  { id: 4, src: '/photos/babyd.png',  title: 'Baby Day Article', slides: ['/photos/bs1.png', '/photos/bs2.png', '/photos/bs3.png'], link: 'https://stockton.edu/news/2026/baby-day.html' },
]

export default function WrittenWorksGallery({ onBack }) {
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
              <span className="ww-cell-title">{p.title}</span>
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
            {selected.slides ? (
              <>
                <ZoomableImage className="ww-single-img" src={selected.slides[slideIndex]} alt={`${selected.title} ${slideIndex + 1}`} />
                <div className="ww-slide-controls">
                  <button
                    className="ww-slide-btn"
                    onClick={() => setSlideIndex((i) => Math.max(0, i - 1))}
                    disabled={slideIndex === 0}
                  >
                    ←
                  </button>
                  <span className="ww-slide-count">{slideIndex + 1} / {selected.slides.length}</span>
                  <button
                    className="ww-slide-btn"
                    onClick={() => setSlideIndex((i) => Math.min(selected.slides.length - 1, i + 1))}
                    disabled={slideIndex === selected.slides.length - 1}
                  >
                    →
                  </button>
                </div>
              </>
            ) : (
              <ZoomableImage className="ww-single-img" src={selected.src} alt={selected.title} />
            )}
            <div className="ww-single-title">{selected.title}</div>
            {selected.link && (
              <a className="ww-article-link" href={selected.link} target="_blank" rel="noopener noreferrer">
                View Published Article →
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
