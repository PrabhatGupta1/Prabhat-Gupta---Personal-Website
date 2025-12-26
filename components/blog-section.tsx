"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { FileText } from "lucide-react"

export function BlogSection() {
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
    <section
      id="blog"
      className="py-32 border-t border-border bg-secondary/30 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(var(--primary), 0.3) 0%, transparent 50%),
                              radial-gradient(circle at 80% 80%, rgba(var(--accent), 0.3) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div
          className={`max-w-3xl mb-16 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <p className="text-sm text-primary mb-4 tracking-wide uppercase font-semibold">Blog</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-balance">
            Sharing insights, tutorials, and thoughts on web development and technology
          </h2>
        </div>

        <Card
          className={`max-w-2xl mx-auto p-12 text-center border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 ${
            isVisible ? "animate-scale-in" : "opacity-0"
          }`}
        >
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center animate-float">
              <FileText className="h-10 w-10 text-primary" />
            </div>
          </div>
          <h3 className="text-3xl font-bold mb-4">Coming Soon</h3>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            I'm working on creating valuable content about web development, best practices, and tutorials. Stay tuned
            for insightful articles and technical guides!
          </p>
        </Card>
      </div>
    </section>
  )
}
