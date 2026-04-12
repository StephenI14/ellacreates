import { useState } from 'react'
import './CampaignsGallery.css'
import ZoomableImage from './ZoomableImage'

const photos = [
  { id: 1,  src: '/photos/event.jpg',     title: "International Women's Day Event Flier" },
  { id: 2,  src: '/photos/flier.jpg',     title: 'Product Marketing Materials' },
  { id: 3,  src: '/photos/geo.jpg',       title: 'Geocaching Allaire Instagram Post' },
  { id: 4,  src: '/photos/marketing.jpg', title: 'Noyes Promotional Advertisement Post' },
  { id: 5,  src: '/photos/upcycle.jpg',   title: 'Upcycle & Unwind Event Flier' },
  { id: 6,  src: '/photos/fright.jpg',    title: 'Fright Fest Marketing Materials' },
  { id: 7,  src: '/photos/supplies.jpg',  title: 'Bag Charm Workshop Event Flier' },
  { id: 8,  src: '/photos/queens.jpg',    title: 'Geocaching New York Trip Post' },
  { id: 9,  src: '/photos/flow.jpg',      title: 'Letter to My Future Self Event Flier' },
  { id: 10, src: '/photos/ra.jpg',        title: 'Mini Bouquets Event Flier' },
  { id: 11, title: 'Ducktown Reel', link: 'https://www.instagram.com/p/DBMoaVky32W/' },
  { id: 12, title: 'Tawny Reynolds Post', link: 'https://www.instagram.com/p/DNsvlwJZgZc/?img_index=1' },
  { id: 13, title: 'Jorge Artist Post', link: 'https://www.instagram.com/p/DLqGv3FvMfi/?img_index=1' },
  { id: 14, title: 'Annaliese Artist Post', link: 'https://www.instagram.com/p/DJeQFtYRQRm/' },
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
          {photos.map((p) =>
            p.link ? (
              <a key={p.id} className="cg-cell cg-video-cell" href={p.link} target="_blank" rel="noopener noreferrer">
                <div className="cg-video-play">▶</div>
                <span className="cg-cell-title cg-cell-title-visible">{p.title}</span>
              </a>
            ) : (
              <button key={p.id} className={`cg-cell cg-cell-${p.id}`} onClick={() => openPhoto(p)}>
                <img src={p.src} alt={p.title} />
                <div className="cg-cell-shade" />
                <span className="cg-cell-title">{p.title}</span>
              </button>
            )
          )}
        </div>
      </div>

      {selected && (
        <div className="cg-lightbox" onClick={closePhoto}>
          <div
            className={`cg-single ${phase === 'opening' ? 'lift-in' : phase === 'closing' ? 'drop-back' : 'lifted'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="cg-single-back" onClick={closePhoto}>← back</button>
            <ZoomableImage className="cg-single-img" src={selected.src} alt={selected.title} />
            <div className="cg-single-title">{selected.title}</div>
          </div>
        </div>
      )}
    </div>
  )
}
