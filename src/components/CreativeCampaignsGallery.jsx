import { useState } from 'react'
import './CreativeCampaignsGallery.css'

const photos = [
  { id: 1,  src: '/photos/scanned_page4.jpg',    title: 'Untitled I' },
  { id: 2,  src: '/photos/scanned_doc_p1.jpg',   title: 'Untitled II' },
  { id: 3,  src: '/photos/scanned_doc_p2.jpg',   title: 'Untitled III' },
  { id: 4,  src: '/photos/scanned_doc_p3.jpg',   title: 'Untitled IV' },
  { id: 5,  src: '/photos/scanned_doc_p4.jpg',   title: 'Untitled V' },
  { id: 6,  src: '/photos/scanned_doc_p5.jpg',   title: 'Untitled VI' },
  { id: 7,  src: '/photos/scanned_doc2_p7.jpg',  title: 'Untitled VII' },
  { id: 8,  src: '/photos/scanned_doc2_p11.jpg', title: 'Untitled VIII' },
  { id: 9,  src: '/photos/scanned_doc2_p13.jpg', title: 'Untitled IX' },
  { id: 10, src: '/photos/scanned_doc2_p14.jpg', title: 'Untitled X' },
  { id: 11, src: '/photos/scanned_doc2_p15.jpg', title: 'Untitled XI' },
  { id: 12, src: '/photos/scanned_doc2_p16.jpg', title: 'Untitled XII' },
  { id: 13, src: '/photos/scanned_doc2_p17.jpg', title: 'Untitled XIII' },
  { id: 14, src: '/photos/scanned_doc2_p18.jpg', title: 'Untitled XIV' },
  { id: 15, src: '/photos/blueberries.jpg',      title: 'Blueberries' },
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
            <img className="cc-single-img" src={selected.src} alt={selected.title} />
            <div className="cc-single-title">{selected.title}</div>
          </div>
        </div>
      )}
    </div>
  )
}
