"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [theme, setTheme] = useState<"light" | "dark">("dark")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    document.documentElement.classList.toggle("dark")
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <button
            onClick={() => scrollToSection("home")}
            className="text-xl font-bold tracking-tight hover:text-primary transition-all duration-300 hover:scale-105"
          >
            Prabhat Gupta
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 relative group"
            >
              Skills
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 relative group"
            >
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </button>
            {/* <button
              onClick={() => scrollToSection("blog")}
              className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 relative group"
            >
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </button> */}
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 relative group"
            >
              Let's talk
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full hover:scale-110 transition-transform duration-300"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full hover:scale-110 transition-transform duration-300"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-full hover:scale-110 transition-transform duration-300"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-border animate-slide-down">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-muted-foreground hover:text-primary transition-colors py-2 hover:translate-x-2 transition-transform duration-300"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-left text-muted-foreground hover:text-primary transition-colors py-2 hover:translate-x-2 transition-transform duration-300"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-left text-muted-foreground hover:text-primary transition-colors py-2 hover:translate-x-2 transition-transform duration-300"
              >
                Projects
              </button>
              {/* <button
                onClick={() => scrollToSection("blog")}
                className="text-left text-muted-foreground hover:text-primary transition-colors py-2 hover:translate-x-2 transition-transform duration-300"
              >
                Blog
              </button> */}
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-muted-foreground hover:text-primary transition-colors py-2 hover:translate-x-2 transition-transform duration-300"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
