"use client"

import { useEffect, useRef, useState } from "react"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-32 border-t border-border relative overflow-hidden" ref={sectionRef}>
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className={`transition-all duration-700 ${isVisible ? "animate-fade-in-left" : "opacity-0"}`}>
            <p className="text-sm text-primary mb-4 tracking-wide uppercase font-semibold">About Me</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-balance">
              Transforming ideas into powerful digital solutions
            </h2>
            <div className="rounded-2xl overflow-hidden border border-border shadow-2xl hover:shadow-primary/20 transition-shadow duration-500 h-85">
              <img
                src="/Me working in my workspace.png"
                alt="Developer workspace with multiple monitors and code"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
          <div
            className={`space-y-6 text-lg leading-relaxed text-muted-foreground transition-all duration-700 delay-200 ${isVisible ? "animate-fade-in-right" : "opacity-0"}`}
          >
            <p className="text-pretty">
              I'm your go-to Full Stack Developer with a passion for transforming ideas into powerful, real-world
              digital solutions. Whether you're a startup looking to launch your dream product or a business ready to
              elevate your online presence, I specialize in delivering scalable, high-performance applications that make
              an impact.
            </p>
            <p className="text-pretty">
              With expertise spanning both backend and frontend development, I create sleek, responsive, and
              user-friendly interfaces, backed by robust server-side logic and well-architected RESTful APIs. I also
              excel at integrating third-party services and ensuring seamless functionality across platforms—including
              mobile.
            </p>
            <p className="text-pretty">
              Beyond coding, I enjoy singing and music, which keeps me inspired and balanced. I thrive on collaboration,
              continuous learning, and building tech that truly matters.
            </p>
            <p className="text-pretty font-semibold text-foreground">
              Let's connect and build something extraordinary—your vision, brought to life with precision and
              innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
