import { site } from '../data/content'

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div>
          <p>© {new Date().getFullYear()} Diego Aprigio. All rights reserved.</p>
          <p className="footer-links">
            <a href="/#profile">Profile</a>
            <a href={site.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={site.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="/rss.xml">RSS</a>
          </p>
        </div>
        <p className="footer-mark" aria-hidden="true">
          {'</>'} DIEGOAPRIGIO
        </p>
      </div>
    </footer>
  )
}
