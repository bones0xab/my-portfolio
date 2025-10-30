"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

const Projects = () => {
  const projects = [
    {
      title: "SentinelView Platform",
      description: "Designed a full-stack employee management system integrating real-time monitoring and alerting.",
      tech: ["Angular", "NestJS", "GraphQL"],
      date: "Aug 2025 – Present",
      github: "https://github.com/bones0xab/sentinelview-platform",
    },
    {
      title: "Microservice Banking System",
      description: "Developed RESTful and GraphQL APIs for account management with comprehensive documentation.",
      tech: ["Spring Boot", "JPA", "Swagger", "GraphQL"],
      date: "Oct 2025 – Present",
      github: "https://github.com/bones0xab/microservice-banking",
    },
    {
      title: "Digital Banking Platform",
      description: "Developed a complete banking system with secure authentication and an interactive dashboard.",
      tech: ["Spring Boot", "Angular", "JWT", "Swagger"],
      date: "Mar 2025 – Apr 2025",
      github: "https://github.com/bones0xab/digital-banking",
    },
    {
      title: "SecurityFile",
      description: "Built a secure file sharing system using AES-GCM encryption and PBKDF key derivation.",
      tech: ["Angular", "Node.js", "AES-GCM"],
      date: "Jun 2025 – Aug 2025",
      github: "https://github.com/bones0xab/securityfile",
    },
    {
      title: "Smart Contract CTFDonBox.sol",
      description: "Implemented blockchain donation contract with event-driven security architecture.",
      tech: ["Kafka", "Spring Cloud Streams", "Blockchain"],
      date: "Oct 2025",
      github: "https://github.com/bones0xab/ctfdonbox",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-foreground">My Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="bg-card border-border hover:border-primary/50 transition-all hover:shadow-lg hover:scale-105 duration-300 flex flex-col"
            >
              <CardHeader>
                <CardTitle className="text-primary text-lg">{project.title}</CardTitle>
                <CardDescription className="text-foreground/60 text-xs">{project.date}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 flex-1 flex flex-col">
                <p className="text-foreground/80 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <Badge key={t} variant="secondary" className="bg-primary/10 text-primary text-xs">
                      {t}
                    </Badge>
                  ))}
                </div>
                <div className="mt-auto pt-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-primary/30 hover:border-primary hover:bg-primary/10 text-primary bg-transparent"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View on GitHub
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
