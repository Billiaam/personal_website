import { site } from '../content'
import { Img, Reveal } from '../components/ui'

export default function About() {
  return (
    <section className="wrap about">
      <Reveal>
        <div className="about__img"><Img src={site.portrait} alt="William Kruse" label="Portrait photograph" /></div>
      </Reveal>
      <Reveal delay={80}>
        <div className="about__body">
          <h1>About</h1>
          {site.about.map((p, i) => <p key={i}>{p}</p>)}
          <p className="accent">{site.lookingFor}</p>
          <div className="actions">
            <a className="btn btn--primary" href={`mailto:${site.email}`}>Email William</a>
            <a className="btn" href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
