"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

const Projects = () => {
  const projects = [
     {
    id: "banking-cqrs-rag",
    title: "Plateforme Bancaire Intelligente – CQRS, Event Sourcing & IA Générative",
    date: "Nov. 2025",
    short: "Système distribué résilient (CQRS + Event Sourcing) avec assistant IA contextuel (RAG).",
    description:
      "Architecture avancée basée sur CQRS & Event Sourcing (Axon Framework + Spring Boot) pour auditabilité des transactions (Write Model) et lectures haute performance (Read Model → PostgreSQL). " +
      "Intégration d'un assistant bancaire via Spring AI + Ollama (Llama 3.2) en RAG pour interroger les soldes/ops en langage naturel. Frontend React (Hooks, Axios) et pipeline CI/CD + Docker Compose (Axon Server, Postgres, Ollama).",
    tech: [
      "Java", "Spring Boot", "Axon Framework", "Event Sourcing", "CQRS",
      "PostgreSQL", "React.js (Hooks)", "Spring AI", "Ollama (Llama 3.2)",
      "RAG", "Docker Compose", "GitHub Actions"
    ],
    github: "https://github.com/bones0xabe", // remplace par ton repo réel
  },
    {
      title: "Gestion des Cotations Boursières – Chatbot Telegram",
      description:
        "Plateforme distribuée de gestion des cotations boursières avec architecture Microservices. Implémentation du Stock-Service, Gateway-Service et Discovery-Service. Frontend Angular et chatbot Telegram intégré.",
      tech: ["Spring Boot", "Spring Cloud", "Angular", "Telegram API", "REST"],
      date: "Nov 2025",
      github: "https://github.com/bones0xab",
    },
    {
      title: "Microservices de Gestion de Conférences Sécurisées",
      description:
        "Plateforme Full Stack de gestion de conférences avec architecture Microservices scalable. Sécurisation OAuth2/OIDC via Keycloak, documentation OpenAPI Swagger, déploiement Docker Compose.",
      tech: ["Spring Boot", "Spring Cloud Gateway", "Keycloak", "OAuth2", "Docker", "Swagger"],
      date: "Oct 2025 – Nov 2025",
      github: "https://github.com/bones0xab",
    },
    {
      title: "Digital Banking Platform",
      description:
        "Système bancaire complet avec authentification JWT sécurisée, documentation API Swagger et tableau de bord interactif avec ChartJS.",
      tech: ["Spring Boot", "Angular", "JWT", "Swagger", "ChartJS"],
      date: "Mar 2025 – Apr 2025",
      github: "https://github.com/bones0xab/digital-banking",
    },
    {
      title: "SecurityFile",
      description:
        "Système sécurisé de partage de fichiers utilisant le chiffrement AES-GCM et dérivation de clés PBKDF pour une protection maximale des données.",
      tech: ["Angular", "Node.js", "AES-GCM", "PBKDF"],
      date: "Jun 2025 – Aug 2025",
      github: "https://github.com/bones0xab/securityfile",
    },
    {
      title: "SentinelView Platform",
      description:
        "Plateforme Full Stack de gestion des employés avec surveillance en temps réel, alertes intégrées et tableau de bord dynamique.",
      tech: ["Angular", "NestJS", "GraphQL", "Real-time Monitoring"],
      date: "Aug 2025",
      github: "https://github.com/bones0xab/sentinelview-platform",
    },
    {
      title: "Microservice Bancaire",
      description:
        "Implémentation d'API RESTful et GraphQL pour la gestion des comptes bancaires avec documentation complète Swagger.",
      tech: ["Spring Boot", "JPA", "GraphQL", "Swagger"],
      date: "Oct 2025 – Nov 2025",
      github: "https://github.com/bones0xab/microservice-banking",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-4 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground">Mes Projets</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <Card
              key={project.title}
              className="bg-card border-border hover:border-primary/50 transition-all hover:shadow-lg hover:scale-105 duration-300 flex flex-col animate-fade-in-up"
              style={{
                animationDelay: `${idx * 50}ms`,
                animationFillMode: "both",
              }}
            >
              <CardHeader>
                <CardTitle className="text-primary text-lg">{project.title}</CardTitle>
                <CardDescription className="text-foreground/60 text-xs">{project.date}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 flex-1 flex flex-col">
                <p className="text-foreground/80 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <Badge
                      key={t}
                      variant="secondary"
                      className="bg-primary/10 text-primary text-xs hover:bg-primary/20 transition-colors"
                    >
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
