import { useRef, useState, type ReactNode } from 'react'
import { site } from '../data/content'
import { useMagnetic, useSpotlight } from '../lib/effects'

export function Contact() {
  const [copied, setCopied] = useState(false)
  const emailRef = useRef<HTMLButtonElement>(null)
  useMagnetic(emailRef, 0.3)

  async function copy() {
    let copiedOk = false
    try {
      await navigator.clipboard.writeText(site.email)
      copiedOk = true
    } catch {
      const input = document.createElement('textarea')
      input.value = site.email
      input.setAttribute('readonly', '')
      input.style.position = 'fixed'
      input.style.left = '-9999px'
      document.body.appendChild(input)
      input.select()
      copiedOk = document.execCommand('copy')
      input.remove()
    }
    if (!copiedOk) {
      window.location.href = `mailto:${site.email}`
      return
    }
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="section contact">
      <div className="wrap contact-inner">
        <p className="kicker">[ 06 ] Contact</p>
        <h2>
          Let’s build <span className="accent">something strong</span> together?
        </h2>
        <p className="sub">
          Open to remote backend and cloud roles with international teams. Based in {site.location},
          with overlap for North America and Europe.
        </p>
        <button ref={emailRef} type="button" className="email-pill" onClick={copy}>
          {copied ? 'Copied' : site.email}
          <CopyIcon />
        </button>
        <p className="sr-only" role="status">
          {copied ? 'Email copied' : ''}
        </p>
        <ul className="socials">
          <li>
            <SocialLink href={`mailto:${site.email}`}>
              <MailIcon />
              Email
            </SocialLink>
          </li>
          <li>
            <SocialLink href={site.linkedin} external>
              <LinkedInIcon />
              LinkedIn
            </SocialLink>
          </li>
          <li>
            <SocialLink href={site.github} external>
              <GitHubIcon />
              GitHub
            </SocialLink>
          </li>
        </ul>
      </div>
    </section>
  )
}

function SocialLink({
  href,
  external,
  children,
}: {
  href: string
  external?: boolean
  children: ReactNode
}) {
  const ref = useRef<HTMLAnchorElement>(null)
  useMagnetic(ref, 0.3)
  useSpotlight(ref)
  return (
    <a
      ref={ref}
      className="spotlight"
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
    >
      {children}
    </a>
  )
}

function CopyIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <rect x="8" y="8" width="11" height="11" rx="2" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M6 16H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" fill="none" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <g className="line">
        <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" strokeWidth="1.7" />
      </g>
      <path
        className="solid"
        fill="currentColor"
        fillRule="evenodd"
        d="M4 5.2h16c.9 0 1.7.8 1.7 1.7v10.2c0 .9-.8 1.7-1.7 1.7H4c-.9 0-1.7-.8-1.7-1.7V6.9c0-.9.8-1.7 1.7-1.7zm.6 1.6 7.4 5.5 7.4-5.5H4.6z"
      />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <g className="line" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
        <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
        <path d="M8 10.5V17M8 7.4v.2M12 17v-4.1a1.8 1.8 0 0 1 3.6 0V17" />
      </g>
      <path
        className="solid"
        fill="currentColor"
        d="M4.7 3.2h14.6A1.7 1.7 0 0 1 21 4.9v14.2a1.7 1.7 0 0 1-1.7 1.7H4.7A1.7 1.7 0 0 1 3 19.1V4.9A1.7 1.7 0 0 1 4.7 3.2zM8.2 10.2H6.1V18h2.1v-7.8zM7.15 9.1a1.22 1.22 0 1 0 0-2.44 1.22 1.22 0 0 0 0 2.44zM18 18h-2.1v-3.8c0-.9-.02-2.06-1.26-2.06-1.26 0-1.45.98-1.45 2v3.86H11.1v-7.8h2.02v1.06h.03c.28-.53 1-1.1 2.05-1.1 2.2 0 2.6 1.45 2.6 3.33V18z"
      />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        className="line"
        d="M9 19c-4 1.5-4-2-6-2m12 4v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.1-1.5 6.1-6.6a5 5 0 0 0-1.4-3.5 4.7 4.7 0 0 0-.1-3.5s-1.1-.3-3.6 1.4a12.3 12.3 0 0 0-6.2 0C6.4 2.6 5.3 2.9 5.3 2.9a4.7 4.7 0 0 0-.1 3.5 5 5 0 0 0-1.4 3.5c0 5.1 3.1 6.2 6.1 6.6a3.4 3.4 0 0 0-.9 2.6V21"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="solid"
        fill="currentColor"
        d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.2-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.77.12 3.06.75.81 1.2 1.83 1.2 3.09 0 4.41-2.69 5.39-5.25 5.67.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"
      />
    </svg>
  )
}
