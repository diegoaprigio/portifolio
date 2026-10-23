import { useEffect, useRef } from 'react'
import { useTheme } from '../theme'

type Node = { x: number; y: number; vx: number; vy: number }
type Hole = { x: number; y: number; born: number }

const holeLife = 2400

export function Constellation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const context = canvas.getContext('2d')
    if (!context) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const nodes: Node[] = Array.from({ length: 46 }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.00012,
      vy: (Math.random() - 0.5) * 0.00012,
    }))
    const holes: Hole[] = []

    let frame = 0
    let width = 0
    let height = 0
    const color = theme === 'dark' ? '228, 176, 106' : '122, 74, 22'
    const voidColor = theme === 'dark' ? '#14110e' : '#f6f1e8'

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      const ratio = window.devicePixelRatio || 1
      canvas.width = Math.floor(width * ratio)
      canvas.height = Math.floor(height * ratio)
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
    }

    const onClick = (event: MouseEvent) => {
      if (reduce || event.button !== 0) return
      const target = event.target
      if (!(target instanceof Element)) return
      if (target.closest('a, button, input, textarea, select, label, summary, img, svg, .hscroll')) return
      holes.push({ x: event.clientX, y: event.clientY, born: performance.now() })
    }

    const draw = () => {
      const now = performance.now()
      context.clearRect(0, 0, width, height)

      for (let index = holes.length - 1; index >= 0; index -= 1) {
        const age = (now - holes[index].born) / holeLife
        if (age >= 1) {
          holes.splice(index, 1)
          continue
        }
        const strength = Math.sin(Math.min(age / 0.18, 1) * Math.PI * 0.5) * (1 - Math.max(0, age - 0.62) / 0.38)
        const hole = holes[index]
        nodes.forEach((node) => {
          const px = node.x * width
          const py = node.y * height
          const dx = hole.x - px
          const dy = hole.y - py
          const distance = Math.hypot(dx, dy)
          if (distance < 18) {
            node.x = Math.random()
            node.y = Math.random()
            return
          }
          if (distance > 460) return
          const influence = (1 - distance / 460) ** 2
          const step = influence * 8.5 * strength
          node.x += ((dx / distance) * step + (-dy / distance) * step * 0.42) / width
          node.y += ((dy / distance) * step + (dx / distance) * step * 0.42) / height
        })
      }

      nodes.forEach((node) => {
        if (!reduce) {
          node.x += node.vx
          node.y += node.vy
          if (node.x < 0 || node.x > 1) node.vx *= -1
          if (node.y < 0 || node.y > 1) node.vy *= -1
        }
      })

      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const dx = (nodes[i].x - nodes[j].x) * width
          const dy = (nodes[i].y - nodes[j].y) * height
          const distance = Math.hypot(dx, dy)
          if (distance > 170) continue
          context.strokeStyle = `rgba(${color}, ${0.28 * (1 - distance / 170)})`
          context.lineWidth = 1
          context.beginPath()
          context.moveTo(nodes[i].x * width, nodes[i].y * height)
          context.lineTo(nodes[j].x * width, nodes[j].y * height)
          context.stroke()
        }
      }
      nodes.forEach((node) => {
        context.beginPath()
        context.fillStyle = `rgba(${color}, 0.85)`
        context.arc(node.x * width, node.y * height, 2.1, 0, Math.PI * 2)
        context.fill()
      })

      holes.forEach((hole) => {
        const age = (now - hole.born) / holeLife
        const radius = 150 * Math.sin(Math.min(age / 0.2, 1) * (Math.PI / 2)) * (age < 0.7 ? 1 : 1 - (age - 0.7) / 0.3)
        const gradient = context.createRadialGradient(hole.x, hole.y, radius * 0.08, hole.x, hole.y, radius)
        gradient.addColorStop(0, voidColor)
        gradient.addColorStop(0.42, voidColor)
        gradient.addColorStop(0.72, theme === 'dark' ? 'rgba(20, 17, 14, 0.72)' : 'rgba(246, 241, 232, 0.72)')
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')
        context.fillStyle = gradient
        context.beginPath()
        context.arc(hole.x, hole.y, radius, 0, Math.PI * 2)
        context.fill()
      })

      if (!reduce) frame = window.requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    window.addEventListener('click', onClick)
    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
      window.removeEventListener('click', onClick)
    }
  }, [theme])

  return <canvas ref={canvasRef} className="constellation" aria-hidden="true" />
}
