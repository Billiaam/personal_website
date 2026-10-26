import { useState } from 'react'
import { Link } from 'react-router-dom'
import { site, skillIndex } from '../content'
import { Img, Reveal, Kicker } from '../components/ui'

function Skills() {
  const groups = skillIndex()
  const [open, setOpen] = useState<string | null>(null)
  return (
    <section className="wrap section skills">
      <Reveal>
        <Kicker>Skills</Kicker>
        <h2 className="h-section">Tools I've used on real hardware</h2>
        <p className="lede skills__lede">Every skill here links to the projects where I used it. Select one to see them.</p>
      </Reveal>
      <div className="skills__groups">
        {groups.map((g, gi) => {
          const active = g.skills.find((k) => k.name === open)
          return (
            <Reveal key={g.name} delay={gi * 60}>
              <div className="skills__group">
                <h3>{g.name}</h3>
                <ul className="skills__chips">
                  {g.skills.map((k) => (
                    <li key={k.name}>
                      <button
                        type="button"
                        className={`skill ${open === k.name ? 'is-open' : ''}`}
                        aria-expanded={open === k.name}
                        onClick={() => setOpen(open === k.name ? null : k.name)}
                      >
                        {k.name}<span className="skill__count">{k.projects.length}</span>
                      </button>
                    </li>
                  ))}
                </ul>
                {active && (
                  <ul className="skills__projects">
                    {active.projects.map((p) => (
                      <li key={p.slug}><Link to={`/projects/${p.slug}`}>{p.title}</Link></li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

export default function About() {
  return (
    <>
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
      <Skills />
    </>
  )
}
