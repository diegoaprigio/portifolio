import { useRef, type ReactNode } from 'react'
import { useSpotlight } from '../lib/effects'

const aliases: Record<string, string> = {
  'AWS ECS': 'Amazon ECS',
  Lambda: 'AWS Lambda',
  'VB.NET': '.NET',
}

export function TechIcon({ name }: { name: string }) {
  const key = aliases[name] ?? name
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {marks[key] ?? <Letters text={key.slice(0, 2)} />}
    </svg>
  )
}

export function TechButtons({ items }: { items: string[] }) {
  return (
    <ul className="tech-buttons">
      {items.map((item) => (
        <TechButton key={item} name={item} />
      ))}
    </ul>
  )
}

function TechButton({ name }: { name: string }) {
  const ref = useRef<HTMLLIElement>(null)
  useSpotlight(ref)
  return (
    <li ref={ref} className="tech-btn spotlight" title={name}>
      <TechIcon name={name} />
      <span className="sr-only">{name}</span>
    </li>
  )
}

function Letters({ text }: { text: string }) {
  return (
    <text
      x="12"
      y="16"
      textAnchor="middle"
      fontSize={text.length > 2 ? 7.5 : 10}
      fontFamily="IBM Plex Mono, ui-monospace, monospace"
      fontWeight="700"
      fill="currentColor"
      stroke="none"
    >
      {text}
    </text>
  )
}

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

const marks: Record<string, ReactNode> = {
  TypeScript: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" {...stroke} />
      <Letters text="TS" />
    </>
  ),
  'Node.js': (
    <>
      <path d="M12 3.2 20.2 8v8L12 20.8 3.8 16V8L12 3.2z" {...stroke} />
      <path d="M9.2 12.2v-2.2l2.8 1.6 2.8-1.6v2.2" {...stroke} />
    </>
  ),
  NestJS: (
    <>
      <path d="M5 16.5c2.2-4 4.2-6 7-6s4.6 2 7 6" {...stroke} />
      <path d="M7.2 13.2c1.6-2.6 3-3.8 4.8-3.8s3.1 1.2 4.8 3.8" {...stroke} />
      <path d="M9.4 10.6c1-.9 1.7-1.3 2.6-1.3s1.6.4 2.6 1.3" {...stroke} />
    </>
  ),
  React: (
    <>
      <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" {...stroke} />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)" {...stroke} />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)" {...stroke} />
    </>
  ),
  'Next.js': (
    <>
      <circle cx="12" cy="12" r="8.2" {...stroke} />
      <path d="M9.2 8.2v7.6M9.2 8.2l5.8 7.6M15 8.2v7.6" {...stroke} />
    </>
  ),
  'C#': <Letters text="C#" />,
  '.NET': <Letters text=".NET" />,
  PostgreSQL: (
    <>
      <ellipse cx="12" cy="7" rx="6.2" ry="2.4" {...stroke} />
      <path d="M5.8 7v4.2c0 1.3 2.8 2.4 6.2 2.4s6.2-1.1 6.2-2.4V7" {...stroke} />
      <path d="M5.8 11.2v4.2c0 1.3 2.8 2.4 6.2 2.4s6.2-1.1 6.2-2.4v-4.2" {...stroke} />
    </>
  ),
  Prisma: (
    <>
      <path d="M12 3.5 19.5 19.5h-4.2L12 13.2 8.7 19.5H4.5L12 3.5z" {...stroke} />
    </>
  ),
  'SQL Server': (
    <>
      <ellipse cx="10" cy="7" rx="5" ry="2.1" {...stroke} />
      <path d="M5 7v8.2c0 1.2 2.2 2.1 5 2.1s5-.9 5-2.1V7" {...stroke} />
      <path d="M15 10.5h4.2v7H15" {...stroke} />
    </>
  ),
  AWS: <Letters text="AWS" />,
  'Amazon ECS': (
    <>
      <rect x="3.5" y="6" width="7" height="5" rx="1.2" {...stroke} />
      <rect x="13.5" y="6" width="7" height="5" rx="1.2" {...stroke} />
      <rect x="8.5" y="14" width="7" height="5" rx="1.2" {...stroke} />
    </>
  ),
  'AWS Lambda': <path d="M8 19 13.2 5H16L10.2 19H8z" {...stroke} />,
  'Amazon S3': (
    <>
      <path d="M6 8.5h12l-1.2 9.2a2 2 0 0 1-2 1.7H9.2a2 2 0 0 1-2-1.7L6 8.5z" {...stroke} />
      <path d="M9 8.5V6.8A1.8 1.8 0 0 1 10.8 5h2.4A1.8 1.8 0 0 1 15 6.8v1.7" {...stroke} />
    </>
  ),
  DynamoDB: (
    <>
      <ellipse cx="12" cy="6.5" rx="6" ry="2.2" {...stroke} />
      <path d="M6 6.5v11c0 1.2 2.7 2.2 6 2.2s6-1 6-2.2v-11" {...stroke} />
    </>
  ),
  Azure: <path d="M4.5 17.5 11 4.8l3.2 6.2-2.4 6.5H4.5zm8.2 0h6.8L14.2 8.6 12.7 17.5z" {...stroke} />,
  Terraform: (
    <>
      <path d="M5 5.5h5.2v5.2H5zM12 8.2h5.2v5.2H12zM5 13.2h5.2v5.2H5z" {...stroke} />
    </>
  ),
  Docker: (
    <>
      <path d="M3.5 13.5h15.2c1.2 1.8-.2 4-2.6 4.2-2.2 2.2-6.4 2.4-9.2.4-2.2-.2-3.6-1.8-3.4-4.6z" {...stroke} />
      <path d="M7 13.2V10h2.3v3.2M10 13.2V8.2h2.3V13.2M13 13.2V10h2.3v3.2M10 7.6V5.2h2.3v2.4" {...stroke} />
    </>
  ),
  'REST APIs': (
    <>
      <path d="M7 8h10M14 5l3 3-3 3" {...stroke} />
      <path d="M17 16H7M10 13l-3 3 3 3" {...stroke} />
    </>
  ),
  'Generative AI': (
    <>
      <path d="M12 3.5 13.4 9 19 10.4 13.4 11.8 12 17.2 10.6 11.8 5 10.4 10.6 9 12 3.5z" {...stroke} />
      <path d="M18 15.5 18.6 17.4 20.5 18 18.6 18.6 18 20.5 17.4 18.6 15.5 18 17.4 17.4 18 15.5z" {...stroke} />
    </>
  ),
  Git: (
    <>
      <circle cx="7" cy="7" r="2.1" {...stroke} />
      <circle cx="17" cy="7" r="2.1" {...stroke} />
      <circle cx="7" cy="17" r="2.1" {...stroke} />
      <path d="M7 9.1v5.8M9.1 7h5.8" {...stroke} />
    </>
  ),
  CloudWatch: (
    <>
      <path d="M4 15.5a4 4 0 0 1 1.2-7.2 5 5 0 0 1 9.6-1.2A3.6 3.6 0 0 1 19.5 14" {...stroke} />
      <path d="M7 17.5 9.2 14l2 2.2 2.2-3.2 2.4 4.5" {...stroke} />
    </>
  ),
  'API Gateway': (
    <>
      <circle cx="6" cy="12" r="2" {...stroke} />
      <circle cx="18" cy="7" r="2" {...stroke} />
      <circle cx="18" cy="17" r="2" {...stroke} />
      <path d="M8 12h6M14 12l3.2-4M14 12l3.2 4" {...stroke} />
    </>
  ),
  DB2: <Letters text="DB2" />,
  Figma: (
    <>
      <path d="M9 4.5h3.2a2.6 2.6 0 0 1 0 5.2H9z" {...stroke} />
      <path d="M9 9.7h3.2a2.6 2.6 0 0 1 0 5.2H9z" {...stroke} />
      <path d="M9 14.9h3.2a2.6 2.6 0 1 1-2.6 2.6V14.9" {...stroke} />
      <path d="M9 4.5a2.6 2.6 0 0 0 0 5.2" {...stroke} />
    </>
  ),
  Scrum: (
    <>
      <path d="M16.8 8.2A6.2 6.2 0 1 0 18 13" {...stroke} />
      <path d="M18 6.2v3.2h-3.2" {...stroke} />
    </>
  ),
  Kanban: (
    <>
      <rect x="3.5" y="4.5" width="4.2" height="15" rx="1" {...stroke} />
      <rect x="9.9" y="4.5" width="4.2" height="10" rx="1" {...stroke} />
      <rect x="16.3" y="4.5" width="4.2" height="12.5" rx="1" {...stroke} />
    </>
  ),
  Handlebars: <Letters text="{ }" />,
}
