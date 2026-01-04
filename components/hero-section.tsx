"use client"

import { useEffect, useState } from "react"
import { ArrowDown, Download } from "lucide-react"

const roles = ["Full-Stack Engineer (Web & Mobile)", "Building Scalable Web Products", "From Idea to Production"]

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState("")
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentFullRole = roles[roleIndex]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (charIndex < currentFullRole.length) {
            setCurrentRole(currentFullRole.substring(0, charIndex + 1))
            setCharIndex(charIndex + 1)
          } else {
            // Pause before deleting
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          // Deleting
          if (charIndex > 0) {
            setCurrentRole(currentFullRole.substring(0, charIndex - 1))
            setCharIndex(charIndex - 1)
          } else {
            setIsDeleting(false)
            setRoleIndex((roleIndex + 1) % roles.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, roleIndex])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Underwater gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/20 via-blue-950/30 to-teal-950/20" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32 relative z-10">
        <div className="max-w-4xl">
          <p className="text-sm text-cyan-400 mb-6 tracking-wide uppercase animate-fade-in-up font-mono">
            {currentRole}
            <span className="animate-pulse">|</span>
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1] animate-fade-in-up delay-100 text-balance">
            Turning complex business ideas{" "}
            <span className="text-primary bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              into clean, scalable web products
            </span>
          </h1>

          <div className="flex flex-wrap gap-4 mt-12 animate-fade-in-up delay-300">
            <a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-medium hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-110 transition-all duration-300"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-cyan-500/50 rounded-full font-medium hover:bg-cyan-500/10 hover:border-cyan-400 hover:scale-110 transition-all duration-300"
            >
              Get In Touch
            </a>
            <a
              href="/resume/Prabhat_Gupta_Resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-8 py-3 border border-cyan-500/50 rounded-full font-medium hover:bg-cyan-500/10 hover:border-cyan-400 hover:scale-110 transition-all duration-300 flex items-center gap-2">
                <Download className="h-4 w-4" />
                Download Resume
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-5 w-5 text-cyan-400" />
      </div>
    </section>
  )
}
