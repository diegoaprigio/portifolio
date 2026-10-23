import { useEffect, type RefObject } from 'react'

const follow = 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)'
const press = 'transform 0.12s ease-out'
const release = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'

export function useMagnetic<T extends HTMLElement>(ref: RefObject<T | null>, strength = 0.3) {
  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame = 0
    let inside = false

    const apply = (transform: string, transition: string) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        el.style.transition = transition
        el.style.transform = transform
      })
    }

    const offset = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect()
      return {
        x: (event.clientX - rect.left - rect.width / 2) * strength,
        y: (event.clientY - rect.top - rect.height / 2) * strength,
      }
    }

    const onEnter = () => {
      inside = true
    }

    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return
      const { x, y } = offset(event)
      apply(`translate3d(${x}px, ${y}px, 0)`, follow)
    }

    const onDown = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') {
        apply('scale(0.94)', press)
        return
      }
      const { x, y } = offset(event)
      apply(`translate3d(${x}px, ${y}px, 0) scale(0.96)`, press)
    }

    const onUp = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse' || !inside) {
        apply('none', event.pointerType === 'mouse' ? follow : release)
        return
      }
      const { x, y } = offset(event)
      apply(`translate3d(${x}px, ${y}px, 0)`, follow)
    }

    const onLeave = (event: PointerEvent) => {
      inside = false
      apply('none', event.pointerType === 'mouse' ? follow : release)
    }

    el.style.willChange = 'transform'
    el.addEventListener('pointerenter', onEnter)
    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerdown', onDown)
    el.addEventListener('pointerup', onUp)
    el.addEventListener('pointercancel', onUp)
    el.addEventListener('pointerleave', onLeave)
    return () => {
      cancelAnimationFrame(frame)
      el.removeEventListener('pointerenter', onEnter)
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerdown', onDown)
      el.removeEventListener('pointerup', onUp)
      el.removeEventListener('pointercancel', onUp)
      el.removeEventListener('pointerleave', onLeave)
    }
  }, [ref, strength])
}

export function useSpotlight<T extends HTMLElement>(ref: RefObject<T | null>) {
  useEffect(() => {
    const el = ref.current
    if (!el) return

    const move = (event: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      if (!rect.width || !rect.height) return
      el.style.setProperty('--spotlight-x', `${((event.clientX - rect.left) / rect.width) * 100}%`)
      el.style.setProperty('--spotlight-y', `${((event.clientY - rect.top) / rect.height) * 100}%`)
    }
    const enter = () => el.classList.add('is-spotlight-active')
    const leave = () => {
      el.classList.remove('is-spotlight-active', 'is-spotlight-pressed')
      el.style.setProperty('--spotlight-x', '50%')
      el.style.setProperty('--spotlight-y', '50%')
    }
    const down = () => el.classList.add('is-spotlight-pressed')
    const up = () => el.classList.remove('is-spotlight-pressed')

    el.addEventListener('mousemove', move)
    el.addEventListener('mouseenter', enter)
    el.addEventListener('mouseleave', leave)
    el.addEventListener('pointerdown', down)
    window.addEventListener('pointerup', up)
    window.addEventListener('pointercancel', up)
    return () => {
      el.removeEventListener('mousemove', move)
      el.removeEventListener('mouseenter', enter)
      el.removeEventListener('mouseleave', leave)
      el.removeEventListener('pointerdown', down)
      window.removeEventListener('pointerup', up)
      window.removeEventListener('pointercancel', up)
    }
  }, [ref])
}
