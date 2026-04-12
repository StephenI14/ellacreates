import { useState } from 'react'
import './CreativeCampaignsGallery.css'
import ZoomableImage from './ZoomableImage'

const photos = [
  { id: 1,  src: '/photos/scanned_page4.jpg',    title: 'Watercolor of Flower' },
  { id: 2,  src: '/photos/scanned_doc_p1.jpg',   title: 'Acrylic Gem Painting' },
  { id: 3,  src: '/photos/scanned_doc_p2.jpg',   title: 'Lighthouse Photo Weave' },
  { id: 4,  src: '/photos/scanned_doc_p3.jpg',   title: 'Watercolor Tree' },
  { id: 5,  src: '/photos/scanned_doc_p4.jpg',   title: 'Home is a Rainbow Weave' },
  { id: 6,  src: '/photos/scanned_doc_p5.jpg',   title: 'Landscape Photo Weave' },
  { id: 7,  src: '/photos/scanned_doc2_p7.jpg',  title: 'Acrylic Gothic Carving' },
  { id: 8,  src: '/photos/scanned_doc2_p11.jpg', title: 'Acid Etch Sauron' },
  { id: 9,  src: '/photos/scanned_doc2_p13.jpg', title: 'Bowling Linocut Practice' },
  { id: 10, src: '/photos/scanned_doc2_p14.jpg', title: 'Leaf Collagraphy Black & White' },
  { id: 11, src: '/photos/scanned_doc2_p15.jpg', title: 'Leaf Collagraphy Green' },
  { id: 12, src: '/photos/scanned_doc2_p16.jpg', title: 'Bowling Linocut Print' },
  { id: 13, src: '/photos/scanned_doc2_p17.jpg', title: 'Radiohead Linocut Prints' },
  { id: 14, src: '/photos/scanned_doc2_p18.jpg', title: 'Red Haku Linocut Print' },
  { id: 15, src: '/photos/blueberries.jpg',      title: 'Groovy Watercolor Blueberries' },
  { id: 16, src: '/photos/bug.jpg',              title: 'ASCII Bee' },
  { id: 17, src: '/photos/weave.png',            title: 'Balance Collage Weave' },
  { id: 18, src: '/photos/noyesin.jpeg',        title: 'Noyes Instructional' },
]

export default function CreativeCampaignsGallery({ onBack }) {
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
    <div className="cc-wrap">
      <div className="cc-header">
        <button className="cc-back" onClick={onBack}>← back</button>
        <h2 className="cc-title">Playground</h2>
      </div>

      <div className="cc-scroll">
        <div className="cc-grid">
          {photos.map((p) => (
            <button key={p.id} className={`cc-cell cc-cell-${p.id}`} onClick={() => openPhoto(p)}>
              <img src={p.src} alt={p.title} />
              <div className="cc-cell-shade" />
              <span className="cc-cell-title">{p.title}</span>
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div className="cc-lightbox" onClick={closePhoto}>
          <div
            className={`cc-single ${phase === 'opening' ? 'lift-in' : phase === 'closing' ? 'drop-back' : 'lifted'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="cc-single-back" onClick={closePhoto}>← back</button>
            <ZoomableImage className="cc-single-img" src={selected.src} alt={selected.title} />
            <div className="cc-single-title">{selected.title}</div>
          </div>
        </div>
      )}
    </div>
  )
}
