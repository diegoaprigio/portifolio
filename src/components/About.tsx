import { useRef, type ReactNode } from 'react'
import { education, quotes } from '../data/content'
import { useSpotlight } from '../lib/effects'

export function About() {
  return (
    <section id="about" className="section">
      <div className="wrap">
        <p className="kicker">[ 01 ] About</p>
        <div className="about-grid">
          <div className="prose">
            <h2>
              A bit <span className="accent">about me</span>
            </h2>
            <p>
              I am <strong>Diego Aprigio</strong>, a senior software engineer with more than 12
              years shipping ERP systems, APIs, and SaaS platforms. The core of the work is
              backend and cloud architecture: Node.js, NestJS, TypeScript, and AWS, with
              PostgreSQL, Prisma, and SQL Server on the data side, plus React, Next.js, C#, .NET,
              Docker, and Terraform.
            </p>
            <p>
              I was the first backend engineer at a slot studio. I set the .NET standards and
              shipped casino games whose math matches models written with mathematicians in the
              United States and Hungary. At CI&amp;T I modernized connected beverage dispensers
              across Europe and the United States, including a three-month drink-sharing campaign
              that finished with no production bugs reported. Today I lead backend, infrastructure,
              and database for a United States R&amp;D tax platform rebuilt with NestJS on AWS.
            </p>
            <p>
              I work remotely from Florianópolis, with hours that overlap North America and Europe.
              English is full professional. Portuguese is native.
            </p>
          </div>
          <aside className="stat-panel" aria-label="Highlights">
            <Glow className="stat-hero">
              <strong>12+</strong>
              <span>years building software</span>
            </Glow>
            <div className="stat-row">
              <Glow>
                <small>Location</small>
                <b>Remote from Florianópolis</b>
              </Glow>
              <Glow>
                <small>Methods</small>
                <b>Scrum and Kanban</b>
              </Glow>
            </div>
            <Glow className="stat-wide">
              <small>Focus</small>
              <b>APIs, SaaS, and cloud infrastructure</b>
            </Glow>
          </aside>
        </div>
        <figure className="workspace">
          <img
            src="/images/workspace.jpg"
            alt="Diego Aprigio in a wood-paneled workspace, laptop open, trees outside the windows"
            width={1600}
            height={900}
          />
          <figcaption>Remote, from Florianópolis.</figcaption>
        </figure>
        <div className="split">
          <div>
            <h3>Education</h3>
            <ul className="edu">
              {education.map((item) => (
                <li key={item.title}>
                  <span>{item.period}</span>
                  <strong>{item.title}</strong>
                  <em>{item.school}</em>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>From people I have worked with</h3>
            <div className="quotes">
              {quotes.map((quote) => (
                <blockquote key={quote.name}>
                  <p>{quote.text}</p>
                  <footer>{quote.name}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Glow({ className, children }: { className?: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  useSpotlight(ref)
  return (
    <div ref={ref} className={className ? `spotlight ${className}` : 'spotlight'}>
      {children}
    </div>
  )
}
