import { Link, useParams } from 'react-router-dom'
import { getProject, getSection, inSection, fieldLabel } from '../content'
import { Img, Reveal, ProjectCard, Grid } from '../components/ui'
import NotFound from './NotFound'

export default function ProjectPage() {
  const { slug } = useParams()
  const p = slug ? getProject(slug) : undefined
  if (!p) return <NotFound />
  const s = getSection(p.section)
  const more = inSection(p.section).filter((x) => x.slug !== p.slug).slice(0, 3)
  return (
    <>
      <div className="detail__hero">
        <Img src={p.cover} alt={p.title} label="Project photograph" />
      </div>
      <article className="wrap detail">
        <Reveal>
          <p className="crumb">
            <Link to={`/${p.field}`}>{fieldLabel[p.field]}</Link>
            {s && <><span>/</span><Link to={`/${s.field}/${s.slug}`}>{s.name}</Link></>}
          </p>
          <h1>{p.title}</h1>
          <p className="lede">{p.summary}</p>
          <dl className="specs specs--inline">
            {p.role && <div><dt>Role</dt><dd>{p.role}</dd></div>}
            <div><dt>Year</dt><dd>{p.date.slice(0, 4)}</dd></div>
            <div><dt>Status</dt><dd>{p.status}</dd></div>
          </dl>
          <div className="prose">
            {p.body.map((para, i) => <p key={i}>{para}</p>)}
          </div>
          {p.tools && (
            <ul className="chips" aria-label="Tools">
              {p.tools.map((t) => <li key={t}>{t}</li>)}
            </ul>
          )}
        </Reveal>
        {p.gallery && p.gallery.length > 0 && (
          <div className="gallery">
            {p.gallery.map((g, i) => (
              <Reveal key={g} delay={i * 60}>
                <div className="gallery__item"><Img src={g} alt={`${p.title} — image ${i + 1}`} label={`Photo ${i + 1}`} /></div>
              </Reveal>
            ))}
          </div>
        )}
      </article>

      {more.length > 0 && s && (
        <section className="wrap section">
          <Reveal><h2 className="h-section">More from {s.name}</h2></Reveal>
          <Grid>
            {more.map((x, i) => <ProjectCard key={x.slug} p={x} index={i} />)}
          </Grid>
        </section>
      )}
    </>
  )
}
