import { useEffect, useState } from 'react'

const EMPTY: readonly string[] = []

export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState(ids[0] ?? '')

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element))
    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        const top = visible[0]?.target
        if (top instanceof HTMLElement) setActive(top.id)
      },
      { rootMargin: '-42% 0px -48% 0px', threshold: [0.15, 0.4] },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [ids])

  return active
}

export const sectionIds = ['profile', 'about', 'skills', 'work', 'projects', 'blog', 'contact'] as const
export const noSections = EMPTY
