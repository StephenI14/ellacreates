import { useState, useRef, useCallback } from 'react'
import './ZoomableImage.css'

export default function ZoomableImage({ src, alt, className }) {
  const [scale, setScale] = useState(1)
  const [translate, setTranslate] = useState({ x: 0, y: 0 })
  const [dragging, setDragging] = useState(false)
  const dragStart = useRef({ x: 0, y: 0 })
  const translateStart = useRef({ x: 0, y: 0 })
  const containerRef = useRef(null)

  const handleWheel = useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()
    setScale((prev) => {
      const next = prev - e.deltaY * 0.002
      const clamped = Math.min(Math.max(next, 1), 5)
      if (clamped === 1) setTranslate({ x: 0, y: 0 })
      return clamped
    })
  }, [])

  const handleDoubleClick = useCallback((e) => {
    e.stopPropagation()
    if (scale > 1) {
      setScale(1)
      setTranslate({ x: 0, y: 0 })
    } else {
      setScale(2.5)
    }
  }, [scale])

  const handlePointerDown = useCallback((e) => {
    if (scale <= 1) return
    e.preventDefault()
    e.stopPropagation()
    setDragging(true)
    dragStart.current = { x: e.clientX, y: e.clientY }
    translateStart.current = { ...translate }
    e.target.setPointerCapture(e.pointerId)
  }, [scale, translate])

  const handlePointerMove = useCallback((e) => {
    if (!dragging) return
    e.stopPropagation()
    const dx = e.clientX - dragStart.current.x
    const dy = e.clientY - dragStart.current.y
    setTranslate({
      x: translateStart.current.x + dx,
      y: translateStart.current.y + dy,
    })
  }, [dragging])

  const handlePointerUp = useCallback((e) => {
    if (!dragging) return
    e.stopPropagation()
    setDragging(false)
  }, [dragging])

  // Prevent lightbox close when clicking zoomed image
  const handleClick = useCallback((e) => {
    if (scale > 1) e.stopPropagation()
  }, [scale])

  return (
    <div
      ref={containerRef}
      className={`zi-container ${className || ''}`}
      onWheel={handleWheel}
      onClick={handleClick}
    >
      <img
        src={src}
        alt={alt}
        className={`zi-img ${dragging ? 'zi-grabbing' : scale > 1 ? 'zi-grab' : ''}`}
        style={{
          transform: `scale(${scale}) translate(${translate.x / scale}px, ${translate.y / scale}px)`,
        }}
        onDoubleClick={handleDoubleClick}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        draggable={false}
      />
    </div>
  )
}
