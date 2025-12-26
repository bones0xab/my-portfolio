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
            Étudiant M2 – PFE Développement Full Stack / IA
          </p>

          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Master 2 Student in Distributed Systems & AI | Full Stack Developer (Spring Boot/Angular) & AI Integration (RAG/LLMs)
          </p>
        </div>

        <div className="bg-card/50 border border-border rounded-lg p-6 max-w-2xl mx-auto backdrop-blur-sm">
          <p className="text-foreground/80 text-lg">
Futur diplômé du Master Systèmes Distribués (ENSET) et issu du cursus d'excellence 1337, je suis un Ingénieur Logiciel spécialisé dans les architectures Microservices (Spring Boot) et le Frontend moderne (Angular/REACT). Fort d'une culture DevOps (Docker) et d'une expertise en Sécurité (Secure Coding), je conçois des applications robustes, scalables et sécurisées dès la conception. Je recherche un stage de fin d'études (PFE) pour industrialiser vos solutions logicielles.          </p>
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
