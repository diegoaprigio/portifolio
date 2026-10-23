import { Link, useSearchParams } from 'react-router-dom'
import { categories, formatDate, posts, readingTime } from '../data/posts'

const pageSize = 3

export function Blog() {
  const [params, setParams] = useSearchParams()
  const query = params.get('q') ?? ''
  const category = params.get('category') ?? 'All'
  const requested = Number(params.get('page') ?? '1')
  const page = Number.isFinite(requested) && requested > 0 ? Math.floor(requested) : 1

  const filtered = posts.filter((post) => {
    const matchesCategory = category === 'All' || post.category === category
    const haystack = `${post.title} ${post.excerpt} ${post.category}`.toLowerCase()
    const matchesQuery = query.trim() === '' || haystack.includes(query.trim().toLowerCase())
    return matchesCategory && matchesQuery
  })

  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize))
  const current = Math.min(page, pageCount)
  const visible = filtered.slice((current - 1) * pageSize, current * pageSize)

  function update(partial: { q?: string; category?: string; page?: number }) {
    const next = new URLSearchParams(params)
    const q = partial.q ?? next.get('q') ?? ''
    const nextCategory = partial.category ?? next.get('category') ?? 'All'
    const nextPage = partial.page ?? 1
    if (q) next.set('q', q)
    else next.delete('q')
    if (nextCategory !== 'All') next.set('category', nextCategory)
    else next.delete('category')
    if (nextPage > 1) next.set('page', String(nextPage))
    else next.delete('page')
    setParams(next, { replace: true })
  }

  return (
    <section className="section archive">
      <div className="wrap">
        <p className="kicker">Blog</p>
        <h1>All posts.</h1>
        <p className="sub">
          Search, filter by topic, or follow the <a href="/rss.xml">RSS feed</a>.
        </p>
        <div className="archive-tools">
          <label className="sr-only" htmlFor="blog-search">
            Search posts
          </label>
          <input
            id="blog-search"
            className="search"
            value={query}
            placeholder="Search posts"
            onChange={(event) => update({ q: event.target.value, page: 1 })}
          />
          <div className="filters" role="group" aria-label="Categories">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                aria-pressed={category === item}
                onClick={() => update({ category: item, page: 1 })}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        {visible.length === 0 ? (
          <p className="empty">No posts match that search.</p>
        ) : (
          <div className="archive-list">
            {visible.map((post) => (
              <article key={post.slug}>
                <p className="post-meta">
                  <span>{post.category}</span>
                  <span>{formatDate(post.date)}</span>
                  <span>{readingTime(post)} min read</span>
                </p>
                <h2>
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p>{post.excerpt}</p>
                <Link className="text-link" to={`/blog/${post.slug}`}>
                  Continue reading <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        )}
        {filtered.length > pageSize && (
          <div className="pager">
            <button type="button" disabled={current === 1} onClick={() => update({ page: current - 1 })}>
              Previous
            </button>
            <span>
              Page {current} of {pageCount}
            </span>
            <button
              type="button"
              disabled={current === pageCount}
              onClick={() => update({ page: current + 1 })}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
