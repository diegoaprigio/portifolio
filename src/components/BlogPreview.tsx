import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { formatDate, posts, readingTime } from '../data/posts'

export function BlogPreview() {
  return (
    <section id="blog" className="section">
      <div className="wrap">
        <p className="kicker">[ 05 ] Blog</p>
        <h2>
          Latest <span className="accent">posts.</span>
        </h2>
        <p className="sub">Backend, cloud, and the decisions behind systems I have shipped.</p>
      </div>
      <DragScroll>
        {posts.map((post) => (
          <article key={post.slug} className="post-card">
            <img className="post-cover" src={post.image} alt={post.imageAlt} />
            <div className="post-body">
              <p className="post-meta">
                <span>{post.category}</span>
                <span>{formatDate(post.date)}</span>
                <span>{readingTime(post)} min read</span>
              </p>
              <h3>
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>
              <p>{post.excerpt}</p>
              <Link className="text-link" to={`/blog/${post.slug}`}>
                Continue reading <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        ))}
      </DragScroll>
      <div className="blog-actions">
        <p className="drag-hint">
          <span aria-hidden="true">‹</span>
          Drag or scroll
          <span aria-hidden="true">›</span>
        </p>
        <Link className="see-all" to="/blog">
          See all posts <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  )
}

function DragScroll({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return
    let active = false
    let startX = 0
    let startLeft = 0
    let moved = false

    const down = (event: PointerEvent) => {
      if (event.pointerType === 'mouse' && event.button !== 0) return
      active = true
      moved = false
      startX = event.clientX
      startLeft = element.scrollLeft
    }
    const move = (event: PointerEvent) => {
      if (!active) return
      const delta = event.clientX - startX
      if (Math.abs(delta) > 6) {
        moved = true
        element.classList.add('dragging')
        element.scrollLeft = startLeft - delta
      }
    }
    const up = () => {
      active = false
      element.classList.remove('dragging')
    }
    const click = (event: MouseEvent) => {
      if (!moved) return
      event.preventDefault()
      event.stopPropagation()
      moved = false
    }
    const wheel = (event: WheelEvent) => {
      if (element.scrollWidth <= element.clientWidth) return
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return
      event.preventDefault()
      element.scrollLeft += event.deltaY
    }

    element.addEventListener('pointerdown', down)
    window.addEventListener('pointermove', move)
    window.addEventListener('pointerup', up)
    element.addEventListener('click', click, true)
    element.addEventListener('wheel', wheel, { passive: false })
    return () => {
      element.removeEventListener('pointerdown', down)
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerup', up)
      element.removeEventListener('click', click, true)
      element.removeEventListener('wheel', wheel)
    }
  }, [])

  return (
    <div
      className="hscroll"
      ref={ref}
      tabIndex={0}
      aria-label="Latest posts"
      onKeyDown={(event) => {
        if (event.key === 'ArrowRight') ref.current?.scrollBy({ left: 380, behavior: 'smooth' })
        if (event.key === 'ArrowLeft') ref.current?.scrollBy({ left: -380, behavior: 'smooth' })
      }}
    >
      {children}
    </div>
  )
}
