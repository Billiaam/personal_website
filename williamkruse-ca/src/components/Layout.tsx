import { useEffect } from 'react'
import { NavLink, Link, Outlet, useLocation } from 'react-router-dom'
import { site } from '../content'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0 }) }, [pathname])
  return null
}

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <a className="skip" href="#main">Skip to content</a>
      <header className="nav">
        <div className="nav__inner">
          <Link className="nav__brand" to="/" aria-label="Home">
            <img src="/logo/logo-color-transparent.svg" alt="" width="30" height="30" />
            <span>{site.wordmark}</span>
          </Link>
          <nav className="nav__tabs" aria-label="Primary">
            <NavLink to="/rocketry">Rocketry</NavLink>
            <NavLink to="/drones">Drones</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/resume">Resume</NavLink>
          </nav>
        </div>
      </header>
      <main id="main">
        <Outlet />
      </main>
      <footer className="footer">
        <div className="footer__inner">
          <p className="footer__copy">© {new Date().getFullYear()} {site.wordmark}</p>
          <div className="footer__links">
            <a href={`mailto:${site.email}`}>Email</a>
            <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={site.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={site.resumePdf} target="_blank" rel="noreferrer">Resume</a>
          </div>
        </div>
      </footer>
    </>
  )
}
