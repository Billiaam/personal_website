import { Fragment, useEffect, useRef, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { fieldLabel, vehicleUrl, type Project, type Section, type Vehicle } from '../content'

/** Renders [text](url) as links and *text* as italics. */
export function Rich({ text }: { text: string }) {
  const parts: ReactNode[] = []
  const re = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|(?<![\w*])\*(?!\s)([^*]+?)\*(?![\w*])/g
  let last = 0
  let m: RegExpExecArray | null
  let k = 0
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(<Fragment key={k++}>{text.slice(last, m.index)}</Fragment>)
    if (m[1]) {
      const external = /^https?:/.test(m[2])
      parts.push(
        external
          ? <a key={k++} className="inline-link" href={m[2]} target="_blank" rel="noreferrer">{m[1]}</a>
          : <Link key={k++} className="inline-link" to={m[2]}>{m[1]}</Link>,
      )
    } else if (m[3]) parts.push(<strong key={k++}>{m[3]}</strong>)
    else if (m[4]) parts.push(<em key={k++}>{m[4]}</em>)
    last = re.lastIndex
  }
  if (last < text.length) parts.push(<Fragment key={k++}>{text.slice(last)}</Fragment>)
  return <>{parts}</>
}

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
  const upcoming = p.status === 'Upcoming'
  return (
    <Reveal delay={index * 60}>
      <Link className={`card ${upcoming ? 'card--upcoming' : ''}`} to={`/projects/${p.slug}`}>
        <div className="card__img">
          <Img src={p.cover} alt={p.title} label="Project photograph" />
        </div>
        <div className="card__body">
          <span className="tag">{fieldLabel[p.field]}</span>
          <h3>{p.title}</h3>
          <p>{p.summary}</p>
          <span className="card__year">{upcoming ? 'Upcoming' : `${p.date.slice(0, 4)} · ${p.status}`}</span>
        </div>
      </Link>
    </Reveal>
  )
}

export function SectionCard({ s, count, index = 0 }: { s: Section; count: number; index?: number }) {
  const nv = s.vehicles?.length ?? 0
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
          <span className="scard__count">{nv ? `${nv} rockets · ` : ''}{count} {count === 1 ? 'project' : 'projects'}</span>
        </div>
      </Link>
    </Reveal>
  )
}

export function VehicleCard({ s, v, count, index = 0 }: { s: Section; v: Vehicle; count: number; index?: number }) {
  return (
    <Reveal delay={index * 80}>
      <Link className={`scard ${v.status === 'Upcoming' ? 'card--upcoming' : ''}`} to={vehicleUrl(s, v)}>
        <div className="scard__img">
          <Img src={v.cover} alt={v.name} label="Rocket photograph" />
        </div>
        <div className="scard__body">
          <span className="tag">{v.kicker}</span>
          <h2>{v.name}</h2>
          <p>{v.summary}</p>
          <span className="scard__count">{v.status}{count ? ` · ${count} ${count === 1 ? 'project' : 'projects'}` : ''}</span>
        </div>
      </Link>
    </Reveal>
  )
}

export function Specs({ specs, className = '' }: { specs: { label: string; value: string }[]; className?: string }) {
  return (
    <dl className={`specs ${className}`} style={{ ['--cols' as string]: String(Math.min(specs.length, 4)) }}>
      {specs.map((s) => (
        <div key={s.label}><dt>{s.label}</dt><dd>{s.value}</dd></div>
      ))}
    </dl>
  )
}

export function Grid({ children }: { children: ReactNode }) {
  return <div className="grid">{children}</div>
}
