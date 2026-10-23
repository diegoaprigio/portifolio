import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'

export type Theme = 'dark' | 'light'

const ThemeContext = createContext<{ theme: Theme; toggle: () => void } | null>(null)

function initialTheme(): Theme {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(initialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content',
      theme === 'light' ? '#f6f1e8' : '#14110e',
    )
  }, [theme])

  const toggle = () => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))

  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const value = useContext(ThemeContext)
  if (!value) throw new Error('useTheme must be used within ThemeProvider')
  return value
}
