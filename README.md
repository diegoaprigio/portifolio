# Diego Aprigio — portfolio

Single-page site in English, built with React and Vite. Profile, about, skills, experience, production work, a blog, and contact.

## Run locally

```bash
npm install
npm run dev
```

## Edit

- Copy, career, and projects: `src/data/content.ts`
- Posts: `src/data/posts.ts` (also update `public/rss.xml` and `public/sitemap.xml`)
- Photos: `public/images`

Public GitHub repositories are not listed. The header links to the GitHub profile only.

The public URL is `https://diegoaprigio-dev.vercel.app`. It is set in:

- `src/data/content.ts`
- `index.html`
- `public/rss.xml`
- `public/sitemap.xml`
- `public/robots.txt`

## Deploy on Vercel

1. Import this repository at [Vercel](https://vercel.com/new).
2. Framework preset: Vite.
3. Build command: `npm run build`
4. Output directory: `dist`
5. Name the project `diegoaprigio-dev` so the address is `https://diegoaprigio-dev.vercel.app`.

`vercel.json` sends unknown routes to the app, so `/blog` and each post keep working.
