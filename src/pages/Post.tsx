import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { site } from '../data/content'
import { formatDate, posts, readingTime } from '../data/posts'
import type { Block } from '../data/posts'
import { highlight } from '../lib/highlight'
import { RichText } from '../lib/rich'

export function Post() {
  const { slug } = useParams()
  const index = posts.findIndex((item) => item.slug === slug)
  const post = index >= 0 ? posts[index] : undefined

  useEffect(() => {
    if (!post) {
      document.title = 'Post not found | Diego Aprigio'
      return
    }
    document.title = `${post.title} | Diego Aprigio`
    document.querySelector('meta[name="description"]')?.setAttribute('content', post.excerpt)
    return () => {
      document.title = 'Diego Aprigio | Senior Software Engineer'
      document.querySelector('meta[name="description"]')?.setAttribute('content', site.description)
    }
  }, [post])

  if (!post) {
    return (
      <section className="section">
        <div className="wrap prose">
          <h1>This note does not exist.</h1>
          <Link className="text-link" to="/blog">
            Back to all posts
          </Link>
        </div>
      </section>
    )
  }

  const newer = index > 0 ? posts[index - 1] : undefined
  const older = index < posts.length - 1 ? posts[index + 1] : undefined

  return (
    <article className="section post">
      <div className="wrap prose">
        <Link className="text-link" to="/blog">
          ← All posts
        </Link>
        <p className="post-meta">
          <span>{post.category}</span>
          <span>{formatDate(post.date)}</span>
          <span>{readingTime(post)} min read</span>
        </p>
        <h1>{post.title}</h1>
        <p className="sub">{post.excerpt}</p>
        {post.blocks.map((block, blockIndex) => (
          <BlockView key={blockIndex} block={block} />
        ))}
        <nav className="post-nav" aria-label="More posts">
          {newer ? (
            <Link to={`/blog/${newer.slug}`}>
              <span>Newer</span>
              {newer.title}
            </Link>
          ) : (
            <span />
          )}
          {older ? (
            <Link to={`/blog/${older.slug}`}>
              <span>Older</span>
              {older.title}
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </div>
    </article>
  )
}

function BlockView({ block }: { block: Block }) {
  if (block.type === 'p') {
    return (
      <p>
        <RichText text={block.text} />
      </p>
    )
  }
  if (block.type === 'h2') return <h2>{block.text}</h2>
  if (block.type === 'ul') {
    return (
      <ul className="points">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    )
  }
  return (
    <figure className="codeblock">
      <figcaption>{block.lang}</figcaption>
      <pre>
        <code dangerouslySetInnerHTML={{ __html: highlight(block.code, block.lang) }} />
      </pre>
    </figure>
  )
}
