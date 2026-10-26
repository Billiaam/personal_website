import { useCallback, useEffect, useState } from 'react'

/** Full-screen photo viewer with previous/next, keyboard, and swipe support. */
export default function Lightbox({ images, alt, start, onClose }: { images: string[]; alt: string; start: number; onClose: () => void }) {
  const [i, setI] = useState(start)
  const [touchX, setTouchX] = useState<number | null>(null)
  const many = images.length > 1
  const prev = useCallback(() => setI((n) => (n - 1 + images.length) % images.length), [images.length])
  const next = useCallback(() => setI((n) => (n + 1) % images.length), [images.length])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (many && e.key === 'ArrowLeft') prev()
      if (many && e.key === 'ArrowRight') next()
    }
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = overflow }
  }, [onClose, prev, next, many])

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`${alt}, photo ${i + 1} of ${images.length}`}
      onClick={onClose}
      onTouchStart={(e) => setTouchX(e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX === null || !many) return
        const dx = e.changedTouches[0].clientX - touchX
        if (Math.abs(dx) > 50) (dx > 0 ? prev() : next())
        setTouchX(null)
      }}
    >
      <img src={images[i]} alt={`${alt} — photo ${i + 1}`} onClick={(e) => e.stopPropagation()} />
      <button type="button" className="lightbox__btn lightbox__close" aria-label="Close" onClick={onClose}>✕</button>
      {many && (
        <>
          <button type="button" className="lightbox__btn lightbox__prev" aria-label="Previous photo" onClick={(e) => { e.stopPropagation(); prev() }}>‹</button>
          <button type="button" className="lightbox__btn lightbox__next" aria-label="Next photo" onClick={(e) => { e.stopPropagation(); next() }}>›</button>
          <p className="lightbox__count">{i + 1} / {images.length}</p>
        </>
      )}
    </div>
  )
}
