"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Twitter, Instagram } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
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
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-32 border-t border-border relative overflow-hidden" ref={sectionRef}>
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <p className="text-sm text-primary mb-4 tracking-wide uppercase font-semibold">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-balance">
            Let's discuss your next project or collaboration opportunity
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            I'm always interested in new opportunities, whether it's a freelance project, full-time position, or just a
            chat about technology and development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div
            className={`space-y-8 transition-all duration-700 delay-200 ${isVisible ? "animate-fade-in-left" : "opacity-0"}`}
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always interested in hearing about new projects and opportunities. Whether you have a question or
                just want to say hello, I'll do my best to get back to you!
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:prabhatgupta428@gmail.com"
                className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-all duration-300 group p-4 rounded-xl hover:bg-secondary/50"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-1">Email</div>
                  <span className="font-medium text-foreground">prabhatgupta428@gmail.com</span>
                </div>
              </a>

              <div className="pt-6">
                <div className="text-sm text-muted-foreground mb-4">Follow me on social media</div>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/PrabhatGupta1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center hover:scale-110 hover:shadow-lg"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/prabhatgupta012"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center hover:scale-110 hover:shadow-lg"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://instagram.com/prabhatgupta_101"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center hover:scale-110 hover:shadow-lg"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://twitter.com/prabhatgupta012"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center hover:scale-110 hover:shadow-lg"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-700 delay-400 ${isVisible ? "animate-fade-in-right" : "opacity-0"}`}>
            <div className="bg-card border border-border rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    required
                    className="transition-all duration-300 focus:scale-[1.02]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    required
                    className="transition-all duration-300 focus:scale-[1.02]"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project Discussion"
                    required
                    className="transition-all duration-300 focus:scale-[1.02]"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                    className="transition-all duration-300 focus:scale-[1.02]"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/50"
                  size="lg"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
