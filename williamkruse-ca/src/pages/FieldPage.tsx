import { site, fieldLabel, sectionsFor, inSection, latest, type Field } from '../content'
import { Reveal, SectionCard, ProjectCard, Grid } from '../components/ui'

export default function FieldPage({ field }: { field: Field }) {
  const secs = sectionsFor(field)
  const recent = latest(6, field)
  return (
    <>
      <section className="wrap page-head">
        <Reveal>
          <h1>{fieldLabel[field]}</h1>
          <p className="lede">{site.fieldIntro[field]}</p>
        </Reveal>
      </section>

      <section className="wrap section--tight">
        <div className="stack">
          {secs.map((s, i) => <SectionCard key={s.slug} s={s} count={inSection(s.slug).length} index={i} />)}
        </div>
      </section>

      {recent.length > 0 && (
        <section className="wrap section">
          <Reveal><h2 className="h-section">Latest in {fieldLabel[field].toLowerCase()}</h2></Reveal>
          <Grid>
            {recent.map((p, i) => <ProjectCard key={p.slug} p={p} index={i} />)}
          </Grid>
        </section>
      )}
    </>
  )
}
