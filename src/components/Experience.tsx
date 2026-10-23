import { useRef, useState } from 'react'
import { roles } from '../data/content'
import type { Role } from '../data/content'
import { useSpotlight } from '../lib/effects'
import { TechButtons } from './TechIcon'

const visibleCount = 4

export function Experience() {
  const [open, setOpen] = useState(false)
  const shown = open ? roles : roles.slice(0, visibleCount)
  const hidden = roles.length - visibleCount

  return (
    <section id="work" className="section">
      <div className="wrap">
        <p className="kicker">[ 03 ] Career</p>
        <h2>
          Professional <span className="accent">experience.</span>
        </h2>
        <div className="roles">
          {shown.map((role) => (
            <RoleCard key={`${role.company}-${role.period}`} role={role} />
          ))}
        </div>
        {hidden > 0 && (
          <button type="button" className="more-btn" onClick={() => setOpen((value) => !value)}>
            <span className="more-chevron" aria-hidden="true">
              ›
            </span>
            {open ? 'Show less' : 'Show more'}
            <span className="more-count">{open ? 'hide earlier' : `${hidden} earlier`}</span>
          </button>
        )}
      </div>
    </section>
  )
}

function RoleCard({ role }: { role: Role }) {
  const ref = useRef<HTMLElement>(null)
  useSpotlight(ref)
  return (
    <article ref={ref} className="role spotlight">
      <img className="company-logo" src={role.logo} alt="" />
      <div>
        <p className="role-period">{role.period}</p>
        <h3>{role.title}</h3>
        <p className="role-company">{role.company}</p>
        <p className="role-place">{role.place}</p>
        <ul className="points">
          {role.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <TechButtons items={role.stack} />
      </div>
    </article>
  )
}
