import { useState } from 'react'
import './Portfolio.css'
import ZoomableImage from './ZoomableImage'
import CreativeCampaignsGallery from './CreativeCampaignsGallery'
import CampaignsGallery from './CampaignsGallery'
import VisualsGallery from './VisualsGallery'
import WrittenWorksGallery from './WrittenWorksGallery'

// ── Photography inner gallery photos ──
const photographyPhotos = [
  { id: 1, title: 'Boyce Thompson Landscape',   src: '/photos/boyce_thompson.jpg',   description: 'Arboretum trails and desert flora.' },
  { id: 2, title: 'Paris Pidgeon Landscape',   src: '/photos/steps.jpg',            description: 'Geometry and shadow in the city.' },
  { id: 3, title: 'Desert Botanical',          src: '/photos/desert_botanical.jpg', description: 'Cacti and blooms at the Desert Botanical Garden.' },
  { id: 4, title: 'Phoenix Rodeo',             src: '/photos/rodeo.jpg',            description: 'Dust, lights, and the electric energy of the rodeo.' },
  { id: 5, title: 'Arcosanti',                 src: '/photos/arcosanti.jpg',        description: "Paolo Soleri's experimental town in the Arizona desert." },
  { id: 6, title: 'Poetry Out Loud Event Photo', src: '/photos/poetry.jpg',         description: 'Quiet moments and found objects.' },
  { id: 7, title: 'Self Portrait',             src: '/photos/selfportrait.jpg',     description: 'A reflection.' },
]

// ── Top-level project cards ──
const projects = [
  { id: 'photography',        title: 'Photography',        cover: '/photos/desert_botanical.jpg', year: '2024' },
  { id: 'creative-campaigns', title: 'Creative Campaigns', cover: '/photos/disc.png',             year: '2024' },
  { id: 'visuals',            title: 'Visuals',            cover: '/photos/gamelogo_inv.png',      year: '2024' },
  { id: 'written-works',      title: 'Written Works',      cover: '/photos/noyes.png',             year: '2024' },
  { id: 'playground',         title: 'Playground',         cover: '/photos/weave.png',             year: '2024' },
]

// ── Reusable "coming soon" section ──
function ComingSoon({ title, onBack }) {
  return (
    <div className="pg-wrap">
      <div className="pg-header">
        <button className="pg-back" onClick={onBack}>← back</button>
        <h2 className="pg-title">{title}</h2>
      </div>
      <div className="coming-soon">
        <span className="coming-soon-text">coming soon</span>
      </div>
    </div>
  )
}

// ── Photography inner gallery ──
function PhotoGallery({ onBack }) {
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
    <div className="pg-wrap">
      <div className="pg-header">
        <button className="pg-back" onClick={onBack}>← back</button>
        <h2 className="pg-title">Photography</h2>
      </div>

      <div className="pg-scroll">
        <div className="pg-grid">
          {photographyPhotos.map((p) => (
            <button key={p.id} className="pg-cell" onClick={() => openPhoto(p)}>
              <img src={p.src} alt={p.title} />
              <div className="pg-cell-shade" />
              <span className="pg-cell-title">{p.title}</span>
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div className="pg-lightbox" onClick={closePhoto}>
          <div
            className={`pg-single ${phase === 'opening' ? 'lift-in' : phase === 'closing' ? 'drop-back' : 'lifted'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="pg-single-back" onClick={closePhoto}>← back</button>
            <ZoomableImage className="pg-single-img" src={selected.src} alt={selected.title} />
            <div className="pg-single-title">{selected.title}</div>
          </div>
        </div>
      )}
    </div>
  )
}

// ── Portfolio index ──
export default function Portfolio() {
  const [openProject, setOpenProject] = useState(null)
  const goBack = () => setOpenProject(null)

  if (openProject === 'photography')        return <PhotoGallery onBack={goBack} />
  if (openProject === 'creative-campaigns') return <CampaignsGallery onBack={goBack} />
  if (openProject === 'visuals')            return <VisualsGallery onBack={goBack} />
  if (openProject === 'written-works')      return <WrittenWorksGallery onBack={goBack} />
  if (openProject === 'playground')         return <CreativeCampaignsGallery onBack={goBack} />

  return (
    <div className="portfolio">
      <div className="portfolio-hero">
        <span className="portfolio-of">Portfolio of</span>
        <h1 className="portfolio-name">Ella Johnson</h1>
      </div>

      {/*
        3-col mosaic grid — same principle as the photo gallery
        Col 1: Photography spans both rows (tall)
        Col 2: Creative Campaigns (top) + Visuals (bottom)
        Col 3: Written Works (top) + Playground (bottom)
      */}
      <div className="index-mosaic">
        {projects.map((proj) => (
          <button
            key={proj.id}
            className={`project-card mosaic-${proj.id}`}
            onClick={() => setOpenProject(proj.id)}
          >
            <img src={proj.cover} alt={proj.title} />
            <div className="project-card-label">
              <span className="project-card-title">{proj.title}</span>
            </div>
            <div className="project-card-shade" />
          </button>
        ))}
      </div>
    </div>
  )
}
