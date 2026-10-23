import { useEffect, useRef, useState, type ReactNode } from 'react'
import { site } from '../data/content'
import { useMagnetic } from '../lib/effects'

const stacks = [
  'NestJS · TypeScript · AWS',
  'PostgreSQL · Prisma · Docker',
  'C# · .NET · React',
]

export function Hero() {
  const [text, setText] = useState('')
  const [stackIndex, setStackIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setText(stacks[0])
      return
    }
    const current = stacks[stackIndex]
    const done = !deleting && text === current
    const empty = deleting && text === ''
    const delay = done ? 1400 : empty ? 280 : deleting ? 28 : 55
    const timer = window.setTimeout(() => {
      if (done) {
        setDeleting(true)
        return
      }
      if (empty) {
        setDeleting(false)
        setStackIndex((index) => (index + 1) % stacks.length)
        return
      }
      setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1))
    }, delay)
    return () => window.clearTimeout(timer)
  }, [text, deleting, stackIndex])

  return (
    <section id="profile" className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="prompt" aria-hidden="true">
            <i className="prompt-dot" />
            diego@florianopolis:~$
            <i className="caret" />
          </p>
          <h1 aria-label="Diego Aprigio.">
            Diego
            <br />
            <span className="accent">Aprigio.</span>
          </h1>
          <p className="stack-line">
            <span className="sr-only">Core stack: </span>
            {text}
            <i className="caret" aria-hidden="true" />
          </p>
          <p className="lede">
            Senior software engineer focused on backend and cloud-native systems. APIs, SaaS
            platforms, and infrastructure for teams in technology, iGaming, and agriculture.
          </p>
          <a className="pill" href="/#contact">
            <i /> Open to remote roles
          </a>
          <div className="hero-links">
            <MagneticLink className="btn-solid" href={site.linkedin}>
              LinkedIn <span aria-hidden="true">→</span>
            </MagneticLink>
            <MagneticLink className="btn-ghost" href={site.github}>
              GitHub <span aria-hidden="true">→</span>
            </MagneticLink>
          </div>
        </div>
        <figure className="avatar">
          <img
            src="/images/portrait.jpg"
            alt="Diego Aprigio working on a laptop"
            width={1200}
            height={800}
          />
          <figcaption className="online">
            <i />
            Online
          </figcaption>
        </figure>
      </div>
      <a className="scroll-cue" href="/#about">
        Scroll
      </a>
    </section>
  )
}

function MagneticLink({
  className,
  href,
  children,
}: {
  className: string
  href: string
  children: ReactNode
}) {
  const ref = useRef<HTMLAnchorElement>(null)
  useMagnetic(ref, 0.3)
  return (
    <a ref={ref} className={className} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  )
}
