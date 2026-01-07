"use client"

import { useEffect, useRef, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Cloud, Code2, Layers, Network, Sparkles, Wrench } from "lucide-react"

const skills = {
  "Backend Development": {
    icon: Layers,
    items: [
      "Node.js",
      "Express.js",
      "REST API Design",
      "PostgreSQL",
      "SQL",
      "Prisma ORM",
      "Firestore (NoSQL)",
      "Strapi CMS",
    ],
  },

  "Frontend Development": {
    icon: Code2,
    items: [
      "React.js",
      "Next.js",
      "React Native",
      "Tailwind CSS",
      "Firebase",
      "Expo",
    ],
  },

  "Programming & Problem Solving": {
    icon: Wrench,
    items: [
      "JavaScript",
      "TypeScript",
      "Core Java",
      "C#",
      "OOPs",
      "Data Structures",
      "Algorithms",
    ],
  },

  "System Design & Architecture": {
    icon: Network,
    items: [
      "High-Level Design",
      "Low-Level Design",
      "Database Design",
      "Scalability & Performance",
      "API Design & Versioning",
    ],
  },

  "Automation & AI": {
    icon: Sparkles,
    items: [
      "LLM Integrations",
      "Document Data Extraction",
      "Workflow Automation (n8n)",
    ],
  },

  "Cloud & DevOps": {
    icon: Cloud,
    items: [
      "GCP",
      "Cloud Run",
      "Virtual Machines",
      "Docker & Containers",
      "CI/CD",
    ],
  },
};

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)
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
      id="skills"
      className="py-32 border-t border-border bg-gradient-to-b from-teal-950/30 via-cyan-950/20 to-blue-950/30 relative overflow-hidden"
      ref={sectionRef}
    >
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0 animate-wave"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(34, 211, 238, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(34, 211, 238, 0.3) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div
          className={`max-w-3xl mb-16 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <p className="text-sm text-cyan-400 mb-4 tracking-wide uppercase font-semibold">Technical Skills</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-balance">
            Expertise across the full stack with modern technologies and best practices
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, { icon: Icon, items }], categoryIndex) => (
            <div
              key={category}
              className={`bg-card/50 backdrop-blur-sm border-2 border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/40 transition-all duration-700 hover:-translate-y-4 hover:scale-105 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              } ${hoveredCategory === category ? "animate-glow-pulse" : ""}`}
              style={{ animationDelay: `${categoryIndex * 150}ms` }}
              onMouseEnter={() => setHoveredCategory(category)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div className="mb-6">
                <div className="relative w-12 h-12 mb-4">
                  <div className="absolute inset-0 rounded-xl bg-cyan-500/20 animate-ripple" />
                  <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/30 to-blue-600/30 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-cyan-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-cyan-100">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, index) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-sm font-normal bg-cyan-950/50 border border-cyan-500/30 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 hover:text-white hover:border-cyan-400 hover:scale-125 hover:rotate-3 transition-all duration-300 shadow-lg shadow-cyan-500/20"
                    style={{ animationDelay: `${categoryIndex * 150 + index * 50}ms` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
