"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Social Networking Platform",
    description:
      "A dynamic social networking platform empowering users to connect, collaborate, and share their passions. Seamlessly integrates user profiles and connections with the ability to create and share posts.",
    tech: ["Node.js", "PostgreSQL", "Express", "React", "EJS"],
    image: "/tribesphere.png",
    github: "https://github.com/PrabhatGupta1/tribesphereApp",
    demo: "#",
  },
  {
    title: "Online Learning Platform",
    description:
      "Comprehensive e-learning platform with course management, where instructors can create and sell courses, students can enroll and learn from them.",
    tech: ["Asp.Net Core", "C#", "Entity Framework", "SQL Server"],
    image: "/onlineLearningPlatform.png",
    github: "https://github.com/PrabhatGupta1/OnlineLearningPlatform",
    demo: "#",
  },
  {
    title: "Job Search Mobile App",
    description:
      "Cross-platform Job Search mobile application with seamless user experience. Job seekers can search and apply for real time available jobs according to their profiles.",
    tech: ["React Native", "Expo", "External APIs"],
    image: "/job-search-mobile-app.png",
    github: "https://github.com/PrabhatGupta1/JobSearchApp",
    demo: "#",
  },
  {
    title: "Task Management Web App",
    description:
      "This is a user-friendly task management platform designed to enhance productivity built using HTML 5, CSS 3, Javascript, Bootstrap, Node.js, Express.js, EJS templating and PostgreSQL.",
    tech: ["Node.js", "Express", "PostgreSQL", "EJS", "Javascript"],
    image: "/task-management-web-app.jpg",
    github: "https://github.com/PrabhatGupta1/taskManagementWebApp",
    demo: "#",
  },
  {
    title: "Online Quiz Website",
    description:
      "This is an online quiz website which provides quizes on various technologies and subjects built using HTML5, CSS3, Bootstrap and Javascript.",
    tech: ["Javascript", "HTML 5", "CSS 3"],
    image: "/online-quiz-website.jpg",
    github: "https://github.com/PrabhatGupta1/onlinequiz",
    demo: "#",
  },
]

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
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
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-32 border-t border-border relative overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/20 via-blue-950/30 to-teal-950/20" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div
          className={`max-w-3xl mb-16 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <p className="text-sm text-cyan-400 mb-4 tracking-wide uppercase font-semibold">Featured Projects</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-balance">
            A collection of projects showcasing my expertise in full-stack development
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group overflow-hidden border-cyan-500/30 hover:border-cyan-400 transition-all duration-700 hover:shadow-2xl hover:shadow-cyan-500/30 hover:-translate-y-4 hover:rotate-1 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="aspect-video overflow-hidden bg-muted relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-2"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/95 via-blue-950/80 to-transparent" />
                  <div className="absolute inset-0 animate-ripple bg-cyan-500/10 rounded-full" />
                </div>
                {hoveredIndex === index && (
                  <div className="absolute inset-0 flex items-end justify-center pb-6 animate-fade-in-up z-10">
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-medium hover:scale-125 hover:rotate-3 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-cyan-500/50"
                      >
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 border-2 border-cyan-400 bg-cyan-950/80 text-cyan-100 rounded-full font-medium hover:scale-125 hover:-rotate-3 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-cyan-500/30"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </a>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6 space-y-4 bg-gradient-to-b from-transparent to-cyan-950/20">
                <h3 className="text-2xl font-semibold tracking-tight group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs border-cyan-500/50 hover:bg-cyan-500/20 hover:border-cyan-400 hover:scale-110 transition-all duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
