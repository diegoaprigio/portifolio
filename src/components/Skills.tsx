import { useRef } from 'react'
import { skills } from '../data/content'
import { useSpotlight } from '../lib/effects'
import { TechIcon } from './TechIcon'

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="wrap">
        <p className="kicker">[ 02 ] Stack</p>
        <h2>
          Technologies I use <span className="accent">every day.</span>
        </h2>
      </div>
      <div className="marquee" aria-hidden="true">
        <Track items={skills} />
      </div>
      <div className="wrap">
        <ul className="skill-grid">
          {skills.map((item) => (
            <SkillCard key={item} item={item} />
          ))}
        </ul>
      </div>
    </section>
  )
}

function SkillCard({ item }: { item: string }) {
  const ref = useRef<HTMLLIElement>(null)
  useSpotlight(ref)
  return (
    <li ref={ref} className="skill-card spotlight">
      <TechIcon name={item} />
      <span>{item}</span>
    </li>
  )
}

function Track({ items }: { items: string[] }) {
  return (
    <div className="marquee-track">
      {[0, 1].map((copy) => (
        <ul key={copy}>
          {items.map((item) => (
            <li key={`${copy}-${item}`}>
              <TechIcon name={item} />
              {item}
            </li>
          ))}
        </ul>
      ))}
    </div>
  )
}
