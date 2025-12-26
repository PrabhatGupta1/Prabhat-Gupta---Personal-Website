"use client"

import { useEffect, useState } from "react"
import { Heart } from "lucide-react"

export function Footer() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <footer className="border-t border-border py-16 bg-secondary/30 relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div
          className={`text-center space-y-6 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <div>
            <h3 className="text-2xl font-bold mb-2">Let's Build Something Amazing Together</h3>
            <p className="text-muted-foreground">Ready to transform your ideas into reality?</p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              © {new Date().getFullYear()} Prabhat Gupta. Built with{" "}
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
