"use client"

import { useEffect, useState } from "react"

// Aquatic elements that float around
const aquaticElements = [
  { emoji: "🌿", size: 24, speed: 0.5 },
  { emoji: "🍃", size: 20, speed: 0.7 },
  { emoji: "🌊", size: 18, speed: 0.6 },
  { emoji: "💧", size: 16, speed: 0.8 },
  { emoji: "🐚", size: 22, speed: 0.4 },
  { emoji: "🪸", size: 20, speed: 0.5 },
]

interface Particle {
  id: number
  emoji: string
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  rotation: number
  rotationSpeed: number
}

export function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    // Generate initial particles
    const initialParticles: Particle[] = Array.from({ length: 15 }, (_, i) => {
      const element = aquaticElements[Math.floor(Math.random() * aquaticElements.length)]
      return {
        id: i,
        emoji: element.emoji,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: element.size,
        speedX: (Math.random() - 0.5) * element.speed,
        speedY: (Math.random() - 0.5) * element.speed,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 2,
      }
    })

    setParticles(initialParticles)

    // Animation loop
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev.map((particle) => {
          let newX = particle.x + particle.speedX
          let newY = particle.y + particle.speedY

          // Bounce off edges
          if (newX < 0 || newX > 100) particle.speedX *= -1
          if (newY < 0 || newY > 100) particle.speedY *= -1

          newX = Math.max(0, Math.min(100, newX))
          newY = Math.max(0, Math.min(100, newY))

          return {
            ...particle,
            x: newX,
            y: newY,
            rotation: particle.rotation + particle.rotationSpeed,
          }
        }),
      )
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute transition-all duration-1000 ease-linear opacity-30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            fontSize: `${particle.size}px`,
            transform: `rotate(${particle.rotation}deg)`,
          }}
        >
          {particle.emoji}
        </div>
      ))}
    </div>
  )
}
