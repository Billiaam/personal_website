import { Link, useParams } from 'react-router-dom'
import { getSection, getVehicle, vehiclesOf, inVehicle, fieldLabel, vehicleUrl } from '../content'
import { Img, Reveal, Kicker, ProjectCard, Grid, Rich, Specs } from '../components/ui'
import NotFound from './NotFound'

export default function VehiclePage() {
  const { section, vehicle } = useParams()
  const s = section ? getSection(section) : undefined
  const v = s ? getVehicle(s.slug, vehicle) : undefined
  if (!s || !v) return <NotFound />
  const list = inVehicle(s.slug, v.slug)
  const all = vehiclesOf(s.slug)
  const i = all.findIndex((x) => x.slug === v.slug)
  const newer = all[i - 1]
  const older = all[i + 1]
  return (
    <>
      <div className="detail__hero">
        <Img src={v.cover} alt={v.name} label="Rocket photograph" />
      </div>
      <article className="wrap detail">
        <Reveal>
          <p className="crumb">
            <Link to={`/${s.field}`}>{fieldLabel[s.field]}</Link>
            <span>/</span><Link to={`/${s.field}/${s.slug}`}>{s.name}</Link>
          </p>
          <Kicker>{v.kicker} · {v.status}</Kicker>
          <h1>{v.name}</h1>
          <p className="lede"><Rich text={v.summary} /></p>
          {v.specs && <Specs specs={v.specs} className="specs--project" />}
          <div className="prose">
            {v.body.map((para, k) => <p key={k}><Rich text={para} /></p>)}
          </div>
        </Reveal>
      </article>

      {list.length > 0 && (
        <section className="wrap section">
          <Reveal><Kicker>Projects</Kicker><h2 className="h-section">What I worked on</h2></Reveal>
          <Grid>{list.map((p, k) => <ProjectCard key={p.slug} p={p} index={k} />)}</Grid>
        </section>
      )}

      {(older || newer) && (
        <section className="wrap section--tight">
          <nav className="lineage lineage--vehicles" aria-label="Other rockets">
            {older ? <Link to={vehicleUrl(s, older)}>← {older.name}</Link> : <span />}
            {newer && <Link to={vehicleUrl(s, newer)}>{newer.name} →</Link>}
          </nav>
        </section>
      )}
    </>
  )
}
