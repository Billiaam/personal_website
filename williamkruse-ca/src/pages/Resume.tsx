import { site } from '../content'
import { Img, Reveal } from '../components/ui'

export default function Resume() {
  return (
    <section className="wrap resume">
      <Reveal>
        <h1>Resume</h1>
        <p className="lede">Aerospace engineering, hybrid propulsion, and unmanned flight. {site.lookingFor}</p>
        <p className="muted small">Updated {site.resumeUpdated}</p>
        <a className="btn btn--primary" href={site.resumePdf} target="_blank" rel="noreferrer">Download PDF</a>
      </Reveal>
      <Reveal delay={80}>
        <a className="resume__preview" href={site.resumePdf} target="_blank" rel="noreferrer" aria-label="Open resume PDF">
          <Img src={site.resumePreview} alt="Resume, page one" label="Resume preview — page one" />
        </a>
      </Reveal>
    </section>
  )
}
