import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProject, getSection, getVehicle, inSection, fieldLabel, lineageOf, vehicleUrl } from '../content'
import { Img, Reveal, ProjectCard, Grid, Rich, Specs } from '../components/ui'
import NotFound from './NotFound'
import Lightbox from '../components/Lightbox'

export default function ProjectPage() {
  const { slug } = useParams()
  const [viewing, setViewing] = useState<number | null>(null)
  const p = slug ? getProject(slug) : undefined
  if (!p) return <NotFound />
  const s = getSection(p.section)
  const veh = s ? getVehicle(s.slug, p.vehicle) : undefined
  const { prev, next } = lineageOf(p)
  const pool = inSection(p.section).filter((x) => x.slug !== p.slug)
  const more = [...pool.filter((x) => x.vehicle === p.vehicle), ...pool.filter((x) => x.vehicle !== p.vehicle)].slice(0, 3)
  const meta = [
    p.role && { label: 'Role', value: p.role },
    { label: 'Year', value: p.status === 'Upcoming' ? 'Upcoming' : p.date.slice(0, 4) },
    { label: 'Status', value: p.status },
  ].filter(Boolean) as { label: string; value: string }[]

  return (
    <>
      <div className="detail__hero">
        <Img src={p.cover} alt={p.title} label="Project photograph" position={p.coverPosition} />
      </div>
      <article className="wrap detail">
        <Reveal>
          <p className="crumb">
            <Link to={`/${p.field}`}>{fieldLabel[p.field]}</Link>
            {s && <><span>/</span><Link to={`/${s.field}/${s.slug}`}>{s.name}</Link></>}
            {veh && s && <><span>/</span><Link to={vehicleUrl(s, veh)}>{veh.name}</Link></>}
          </p>

          {(prev || next) && (
            <nav className="lineage" aria-label="Other versions">
              {prev ? <Link to={`/projects/${prev.slug}`}>← Previous version: {prev.title}</Link> : <span />}
              {next && <Link to={`/projects/${next.slug}`}>Next version: {next.title} →</Link>}
            </nav>
          )}

          <h1>{p.title}</h1>
          <p className="lede"><Rich text={p.summary} /></p>
          <Specs specs={meta} className="specs--inline" />
          {p.specs && <Specs specs={p.specs} className="specs--project" />}
          <div className="prose">
            {p.body.map((para, i) => <p key={i}><Rich text={para} /></p>)}
          </div>
          {p.tools && (
            <ul className="chips" aria-label="Tools">
              {p.tools.map((t) => <li key={t}>{t}</li>)}
            </ul>
          )}
          {p.links && (
            <ul className="links">
              {p.links.map((l) => <li key={l.url}><a href={l.url} target="_blank" rel="noreferrer">{l.label} ↗</a></li>)}
            </ul>
          )}
        </Reveal>
        {p.videos && p.videos.length > 0 && (
          <div className="videos">
            {p.videos.map((v) => (
              <Reveal key={v.src}>
                <figure className="video">
                  <video controls playsInline preload="metadata" poster={v.poster}>
                    <source src={v.src} type="video/mp4" />
                  </video>
                  {v.caption && <figcaption>{v.caption}</figcaption>}
                </figure>
              </Reveal>
            ))}
          </div>
        )}
        {p.gallery && p.gallery.length > 0 && (
          <div className="gallery">
            {p.gallery.map((g, i) => (
              <button key={g} type="button" className="gallery__item" onClick={() => setViewing(i)} aria-label={`View photo ${i + 1} full screen`}>
                <Img src={g} alt={`${p.title} — image ${i + 1}`} label={`Photo ${i + 1}`} />
                <span className="gallery__expand" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="18" height="18"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
              </button>
            ))}
          </div>
        )}
        {viewing !== null && p.gallery && (
          <Lightbox images={p.gallery} alt={p.title} start={viewing} onClose={() => setViewing(null)} />
        )}
      </article>

      {more.length > 0 && s && (
        <section className="wrap section">
          <Reveal><h2 className="h-section">More from {veh ? veh.name : s.name}</h2></Reveal>
          <Grid>{more.map((x, i) => <ProjectCard key={x.slug} p={x} index={i} />)}</Grid>
        </section>
      )}
    </>
  )
}
