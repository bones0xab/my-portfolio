"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const Experience = () => {
  const experiences = [
    {
      title: "Stagiaire Backend Java/Spring Boot",
      company: "Lotus Capital (Payment Service)",
      date: "Oct. 2025 – Jan. 2026",
      description:
        "Développement du Microservices critique de paiement en Java/Spring Boot. Implémentation de l'orchestration asynchrone via RabbitMQ pour la gestion des abonnements post-paiement. Collaboration en environnement Agile avec intégration des webhooks Stripe sécurisés.",
      highlights: ["Java/Spring Boot", "RabbitMQ", "Stripe", "Microservices", "Paiement en ligne"],
    },
    {
      title: "Développeur Web & Mobile",
      company: "Freelance & Projets Académiques",
      date: "Mars 2023 – Juin 2023",
      description:
        "Conception et développement d'un site web pour un cabinet médical en HTML, CSS et JavaScript, avec versions web et mobile. Hébergement sur Hostinger avec optimisation SEO avancée.",
      highlights: ["Web Development", "SEO Optimization", "Responsive Design"],
    },
    {
      title: "Stagiaire – Application Mobile IRM",
      company: "FST Mohammedia",
      date: "Fév. 2023 – Nov. 2024",
      description:
        "Développement et déploiement d'une application mobile React Native pour la gestion d'événements et le partage de cours, utilisée par plus de 150 étudiants. Optimisation de l'organisation académique et de la communication interne (+30% d'efficacité).",
      highlights: ["React Native", "Mobile Development", "150+ Users", "MongoDB"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4 animate-fade-up">
          <h2 className="text-4xl font-bold text-foreground">Professional Experience</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
        </div>

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <Card key={idx} className="bg-card border-border hover:border-primary/50 transition-all hover:shadow-lg animate-fade-up" style={{ animationDelay: `${idx * 100}ms` }}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-primary">{exp.title}</CardTitle>
                    <CardDescription className="text-foreground/60">{exp.company}</CardDescription>
                  </div>
                  <span className="text-sm text-foreground/50 whitespace-nowrap">{exp.date}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/80">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((highlight) => (
                    <span key={highlight} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                      {highlight}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
