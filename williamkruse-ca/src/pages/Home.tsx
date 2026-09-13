import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { site, featuredProject, latest, getSection } from '../content'
import { Img, Reveal, Kicker, ProjectCard, Grid } from '../components/ui'

function Hero() {
  const imgRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const y = window.scrollY
        if (imgRef.current) {
          imgRef.current.style.transform = `translate3d(0, ${y * 0.4}px, 0)`
          imgRef.current.style.opacity = String(Math.max(0, 1 - y / (window.innerHeight * 1.1)))
        }
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf) }
  }, [])

  return (
    <section className="hero">
      <div className="hero__media" ref={imgRef}>
        <Img src={site.heroImage} alt="" label={site.heroImageLabel} className="hero__img" />
      </div>
      <div className="hero__shade" aria-hidden="true" />
      <div className="hero__copy">
        <h1>{site.name}</h1>
        <p className="hero__fields">{site.fields}</p>
        <p className="hero__line">{site.heroLine}</p>
        <div className="actions">
          <Link className="btn btn--primary" to="/resume">Resume</Link>
          <a className="btn" href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="btn" href={`mailto:${site.email}`}>Contact</a>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  const f = featuredProject()
  const sec = getSection(f.section)
  const work = latest(6)
  return (
    <>
      <Hero />

      <section className="wrap section">
        <Reveal>
          <Kicker>Featured project</Kicker>
          <Link className="feature" to={`/projects/${f.slug}`}>
            <div className="feature__img">
              <Img src={f.cover} alt={f.title} label="Featured photograph" />
            </div>
            <div className="feature__body">
              <h2>{f.title}</h2>
              <p>{f.summary}</p>
              <dl className="specs">
                <div><dt>Discipline</dt><dd>{f.field === 'rocketry' ? 'Rocketry' : 'Drones'}</dd></div>
                <div><dt>Role</dt><dd>{f.role ?? '—'}</dd></div>
                <div><dt>Section</dt><dd>{sec?.name ?? '—'}</dd></div>
                <div><dt>Status</dt><dd>{f.status}</dd></div>
              </dl>
            </div>
          </Link>
        </Reveal>
      </section>

      <section className="wrap section">
        <Reveal>
          <Kicker>Selected work</Kicker>
          <h2 className="h-section">{site.selectedWorkTitle}</h2>
        </Reveal>
        <Grid>
          {work.map((p, i) => <ProjectCard key={p.slug} p={p} index={i} />)}
        </Grid>
      </section>

      <section className="wrap cta">
        <Reveal>
          <h2>{site.lookingFor}</h2>
          <a className="btn btn--primary" href={`mailto:${site.email}`}>Email William</a>
        </Reveal>
      </section>
    </>
  )
}
