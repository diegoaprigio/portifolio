import { useEffect, useRef } from 'react'
import { useTheme } from '../theme'

type Node = { x: number; y: number; vx: number; vy: number }

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

    let frame = 0
    let width = 0
    let height = 0
    const color = theme === 'dark' ? '228, 176, 106' : '122, 74, 22'

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      const ratio = window.devicePixelRatio || 1
      canvas.width = Math.floor(width * ratio)
      canvas.height = Math.floor(height * ratio)
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
    }

    const draw = () => {
      context.clearRect(0, 0, width, height)
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
      if (!reduce) frame = window.requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
    }
  }, [theme])

  return <canvas ref={canvasRef} className="constellation" aria-hidden="true" />
}
