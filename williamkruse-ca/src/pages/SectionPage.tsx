import { Link, useParams } from 'react-router-dom'
import { getSection, inSection, fieldLabel, vehiclesOf, inVehicle } from '../content'
import { Img, Reveal, Kicker, ProjectCard, Grid, Rich, VehicleCard } from '../components/ui'
import NotFound from './NotFound'

export default function SectionPage() {
  const { section } = useParams()
  const s = section ? getSection(section) : undefined
  if (!s) return <NotFound />
  const list = inSection(s.slug)
  const vehicles = vehiclesOf(s.slug)
  const loose = list.filter((p) => !p.vehicle)
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
            <p className="lede"><Rich text={s.description ?? s.intro} /></p>
          </Reveal>
        </div>
      </section>

      {s.body && s.body.length > 0 && (
        <section className="wrap detail">
          <Reveal>
            <div className="prose">
              {s.body.map((para, k) => <p key={k}><Rich text={para} /></p>)}
            </div>
          </Reveal>
        </section>
      )}

      {vehicles.length > 0 && (
        <section className="wrap section">
          <Reveal><Kicker>Rockets</Kicker></Reveal>
          <div className="stack">
            {vehicles.map((v, i) => <VehicleCard key={v.slug} s={s} v={v} count={inVehicle(s.slug, v.slug).length} index={i} />)}
          </div>
        </section>
      )}

      {(loose.length > 0 || list.length === 0) && (
        <section className="wrap section">
          {list.length === 0 ? (
            <p className="muted">Projects coming soon.</p>
          ) : (
            <Grid>{loose.map((p, i) => <ProjectCard key={p.slug} p={p} index={i} />)}</Grid>
          )}
        </section>
      )}
    </>
  )
}
