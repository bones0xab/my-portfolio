"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = ["home", "about", "skills", "experience", "projects", "education", "contact"]
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          BA
        </div>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-3 py-2 text-sm font-medium transition-colors relative group ${
                activeSection === item.id ? "text-accent" : "text-foreground/70 hover:text-foreground"
              }`}
            >
              {item.label}
              {activeSection === item.id && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />}
            </button>
          ))}
        </div>

        <Button
          onClick={() => scrollToSection("contact")}
          className="bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          Get In Touch
        </Button>
      </div>
    </nav>
  )
}

export default Navigation
