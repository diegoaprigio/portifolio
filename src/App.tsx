import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Blog } from './pages/Blog'
import { Home } from './pages/Home'
import { Post } from './pages/Post'
import { ThemeProvider } from './theme'

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <ScrollManager />
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/blog"
            element={
              <Layout>
                <Blog />
              </Layout>
            }
          />
          <Route
            path="/blog/:slug"
            element={
              <Layout>
                <Post />
              </Layout>
            }
          />
          <Route
            path="*"
            element={
              <Layout>
                <section className="section">
                  <div className="wrap prose">
                    <h1>This page does not exist.</h1>
                    <a className="text-link" href="/">
                      Back home
                    </a>
                  </div>
                </section>
              </Layout>
            }
          />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

function ScrollManager() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [location.pathname, location.hash])

  return null
}
