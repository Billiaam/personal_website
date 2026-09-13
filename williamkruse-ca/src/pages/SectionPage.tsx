import { Link, useParams } from 'react-router-dom'
import { getSection, inSection, fieldLabel } from '../content'
import { Img, Reveal, Kicker, ProjectCard, Grid } from '../components/ui'
import NotFound from './NotFound'

export default function SectionPage() {
  const { section } = useParams()
  const s = section ? getSection(section) : undefined
  if (!s) return <NotFound />
  const list = inSection(s.slug)
  return (
    <>
      <section className="banner">
        <div className="banner__media">
          <Img src={s.cover} alt="" label="Program photograph" />
        </div>
        <div className="banner__shade" aria-hidden="true" />
        <div className="wrap banner__copy">
          <Reveal>
            <Kicker><Link to={`/${s.field}`}>{fieldLabel[s.field]}</Link></Kicker>
            <h1>{s.name}</h1>
            <p className="lede">{s.intro}</p>
          </Reveal>
        </div>
      </section>

      <section className="wrap section">
        {list.length === 0 ? (
          <p className="muted">Projects coming soon.</p>
        ) : (
          <Grid>
            {list.map((p, i) => <ProjectCard key={p.slug} p={p} index={i} />)}
          </Grid>
        )}
      </section>
    </>
  )
}
