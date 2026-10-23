import { About } from '../components/About'
import { BlogPreview } from '../components/BlogPreview'
import { Contact } from '../components/Contact'
import { Experience } from '../components/Experience'
import { Hero } from '../components/Hero'
import { Projects } from '../components/Projects'
import { Skills } from '../components/Skills'

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <BlogPreview />
      <Contact />
    </>
  )
}
