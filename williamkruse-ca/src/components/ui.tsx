import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { fieldLabel, type Project, type Section } from '../content'

/** Image that falls back to a labelled placeholder when the file is missing. */
export function Img({ src, alt, label, className }: { src: string; alt: string; label?: string; className?: string }) {
  const [missing, setMissing] = useState(false)
  if (missing) {
    return (
      <div className={`ph ${className ?? ''}`} role="img" aria-label={alt}>
        <span>{label ?? alt}</span>
      </div>
    )
  }
  return <img className={className} src={src} alt={alt} loading="lazy" onError={() => setMissing(true)} />
}

/** Fade-up on enter. */
export function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [on, setOn] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) { setOn(true); return }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect() } }, { rootMargin: '0px 0px -8% 0px' })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <div ref={ref} className={`reveal ${on ? 'is-in' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

export function Kicker({ children }: { children: ReactNode }) {
  return <p className="kicker">{children}</p>
}

export function ProjectCard({ p, index = 0 }: { p: Project; index?: number }) {
  return (
    <Reveal delay={index * 60}>
      <Link className="card" to={`/projects/${p.slug}`}>
        <div className="card__img">
          <Img src={p.cover} alt={p.title} label="Project photograph" />
        </div>
        <div className="card__body">
          <span className="tag">{fieldLabel[p.field]}</span>
          <h3>{p.title}</h3>
          <p>{p.summary}</p>
          <span className="card__year">{p.date.slice(0, 4)}</span>
        </div>
      </Link>
    </Reveal>
  )
}

export function SectionCard({ s, count, index = 0 }: { s: Section; count: number; index?: number }) {
  return (
    <Reveal delay={index * 80}>
      <Link className="scard" to={`/${s.field}/${s.slug}`}>
        <div className="scard__img">
          <Img src={s.cover} alt={s.name} label="Program photograph" />
        </div>
        <div className="scard__body">
          <span className="tag">{fieldLabel[s.field]}</span>
          <h2>{s.name}</h2>
          <p>{s.intro}</p>
          <span className="scard__count">{count} {count === 1 ? 'project' : 'projects'}</span>
        </div>
      </Link>
    </Reveal>
  )
}

export function Grid({ children }: { children: ReactNode }) {
  return <div className="grid">{children}</div>
}
