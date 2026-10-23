import { useEffect, useState } from 'react'
import type { MouseEvent } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { noSections, sectionIds, useActiveSection } from '../lib/useActiveSection'
import { useTheme } from '../theme'

const links = [
  { id: 'profile', label: 'Profile' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'work', label: 'Work' },
  { id: 'projects', label: 'Projects' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { theme, toggle } = useTheme()
  const active = useActiveSection(location.pathname === '/' ? sectionIds : noSections)

  useEffect(() => {
    setOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    document.body.classList.toggle('nav-open', open)
    return () => document.body.classList.remove('nav-open')
  }, [open])

  function go(event: MouseEvent<HTMLAnchorElement>, id: string) {
    event.preventDefault()
    setOpen(false)
    if (location.pathname !== '/') {
      navigate(`/#${id}`)
      return
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    window.history.replaceState(null, '', `/#${id}`)
  }

  return (
    <header className="header">
      <a className="skip" href="#content">
        Skip to content
      </a>
      <div className="wrap header-inner">
        <a className="logo" href="/#profile" onClick={(event) => go(event, 'profile')}>
          <span className="logo-mark" aria-hidden="true">{'</>'}</span>
          DIEGOAPRIGIO
          <span className="logo-tilde">~/</span>
        </a>
        <nav id="primary-nav" className={open ? 'nav open' : 'nav'} aria-label="Primary">
          {links.map((link) => {
            const current = location.pathname === '/' && active === link.id
            return (
              <a
                key={link.id}
                href={`/#${link.id}`}
                aria-current={current ? 'true' : undefined}
                onClick={(event) => go(event, link.id)}
              >
                {link.label}
              </a>
            )
          })}
        </nav>
        <div className="header-actions">
          <button
            type="button"
            className="icon-btn"
            onClick={toggle}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            type="button"
            className="icon-btn menu-btn"
            aria-expanded={open}
            aria-controls="primary-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
    </header>
  )
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M12 3v2.2M12 18.8V21M3 12h2.2M18.8 12H21M5.8 5.8l1.5 1.5M16.7 16.7l1.5 1.5M18.2 5.8l-1.5 1.5M7.3 16.7l-1.5 1.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        d="M15.5 3.5a8.5 8.5 0 1 0 5 12.2A7 7 0 0 1 15.5 3.5z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}
