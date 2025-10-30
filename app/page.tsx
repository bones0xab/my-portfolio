"use client"
import Navigation from "@/components/navigation"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Skills from "@/components/sections/skills"
import Certifications from "@/components/sections/certifications"
import Experience from "@/components/sections/experience"
import Projects from "@/components/sections/projects"
import Education from "@/components/sections/education"
import Contact from "@/components/sections/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </main>
  )
}
