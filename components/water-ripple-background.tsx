"use client"

import { useEffect, useRef } from "react"

export function WaterRippleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const ripples = useRef<
    Array<{
      x: number
      y: number
      radius: number
      maxRadius: number
      speed: number
      opacity: number
    }>
  >([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Mouse move handler - create ripples
    const handleMouseMove = (e: MouseEvent) => {
      ripples.current.push({
        x: e.clientX,
        y: e.clientY,
        radius: 0,
        maxRadius: 150,
        speed: 3,
        opacity: 1,
      })
    }

    // Mouse click handler - create ripples
    const handleMouseClick = (e: MouseEvent) => {
      ripples.current.push({
        x: e.clientX,
        y: e.clientY,
        radius: 0,
        maxRadius: 200,
        speed: 4,
        opacity: 1,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("click", handleMouseClick)

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw ripples
      ripples.current = ripples.current.filter((ripple) => {
        ripple.radius += ripple.speed
        ripple.opacity = 1 - ripple.radius / ripple.maxRadius

        if (ripple.radius < ripple.maxRadius) {
          // Draw ripple
          ctx.beginPath()
          ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(59, 130, 246, ${ripple.opacity * 0.5})`
          ctx.lineWidth = 2
          ctx.stroke()

          // Inner ripple
          ctx.beginPath()
          ctx.arc(ripple.x, ripple.y, ripple.radius * 0.7, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(96, 165, 250, ${ripple.opacity * 0.3})`
          ctx.lineWidth = 1
          ctx.stroke()

          return true
        }
        return false
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("click", handleMouseClick)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ opacity: 0.6 }} />
}
