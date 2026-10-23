import { useEffect, useRef, useState } from 'react'
import { projects } from '../data/content'
import type { Project, ProjectImage } from '../data/content'
import { useSpotlight } from '../lib/effects'
import { TechButtons } from './TechIcon'

export function Projects() {
  const [active, setActive] = useState<ProjectImage | null>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!active) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActive(null)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [active])

  return (
    <section id="projects" className="section">
      <div className="wrap">
        <p className="kicker">[ 04 ] Projects</p>
        <h2>
          Work that <span className="accent">shipped.</span>
        </h2>
        <div className="project-list">
          {projects.map((project) => (
            <ProjectCard key={project.index} project={project} onOpen={setActive} />
          ))}
        </div>
      </div>
      {active && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          onClick={() => setActive(null)}
        >
          <button
            ref={closeRef}
            type="button"
            className="lightbox-close"
            onClick={() => setActive(null)}
          >
            Close
          </button>
          <img src={active.src} alt={active.alt} onClick={(event) => event.stopPropagation()} />
        </div>
      )}
    </section>
  )
}

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project
  onOpen: (image: ProjectImage) => void
}) {
  const ref = useRef<HTMLElement>(null)
  useSpotlight(ref)
  return (
    <article ref={ref} className="project spotlight">
      <div className="project-copy">
        <div className="project-heading">
          <img className="company-logo" src={project.logo} alt="" />
          <div>
            <p className="project-index">
              <span>{project.index}</span>
              {project.kicker}
            </p>
            <h3>{project.title}</h3>
          </div>
        </div>
        <p>{project.summary}</p>
        <ul className="points">
          {project.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <TechButtons items={project.stack} />
        {project.href && project.hrefLabel && (
          <a className="text-link" href={project.href} target="_blank" rel="noreferrer">
            {project.hrefLabel} <span aria-hidden="true">→</span>
          </a>
        )}
        {project.links && (
          <>
            <h4>{project.linksLabel}</h4>
            <ul className="game-list">
              {project.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noreferrer">
                    <img src={link.image} alt="" width={96} height={64} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="hint">Each title opens in a new tab.</p>
          </>
        )}
      </div>
      {project.images && (
        <div className={project.images.length > 1 ? 'gallery' : 'gallery single'}>
          {project.images.map((image) => (
            <button key={image.src} type="button" className="shot" onClick={() => onOpen(image)}>
              <img src={image.src} alt={image.alt} className={image.fit ?? 'cover'} />
              <span className="sr-only">Open image</span>
            </button>
          ))}
        </div>
      )}
    </article>
  )
}
