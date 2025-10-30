"use client"

import { Button } from "@/components/ui/button"

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
              BOUCHTI ABDELKEBIR
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-foreground/80 font-light">
            Master's Student in Distributed Systems & AI
          </p>

          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Specializing in Offensive and Defensive Cybersecurity | Top 4% on TryHackMe
          </p>
        </div>

        <div className="bg-card/50 border border-border rounded-lg p-6 max-w-2xl mx-auto backdrop-blur-sm">
          <p className="text-foreground/80 text-lg">
            Seeking a Final-Year Internship starting February 2026 to contribute to threat detection, prevention, and
            mitigation in demanding technical environments.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button
            onClick={() => scrollToSection("projects")}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            View My Work
          </Button>
          <Button
            onClick={() => scrollToSection("contact")}
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
          >
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero
