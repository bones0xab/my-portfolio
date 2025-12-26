"use client"

import { Badge } from "@/components/ui/badge"

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend & Architecture",
      skills: ["Java", "Spring Boot", "Spring claud AI", "Spring Cloud", "Microservices", "JPA/Hibernate", "Kafka", "RabbitMQ"],
    },
    {
      title: "Frontend",
      skills: ["Angular", "React", "React Native", "HTML5", "CSS3", "RxJS", "TypeScript"],
    },
    {
      title: "DevOps & Tools",
      skills: ["Docker", "Docker Compose", "CI/CD" ,"Git", "GitFlow", "Bash Scripting", "Linux", "Maven" ],
    },
    {
      title: "Security Applicative (DevSec)",
      skills: ["Keycloak", "OAuth2", "OIDC", "JWT", "OWASP Top 10", "Secure Coding", "SonarQube"],
    },
    {
      title: "Databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "H2"],
    },
    {
      title: "Programming & Scripting",
      skills: ["Python", "Bash", "TypeScript"],
    },
    {
      title: "AI",
      skills: ["RAG", "LLM Integration", "TypeSPrompt Engineeringcript", "Fine-tuning" , "LangChain", "Ollama", "Hugging Face", "Embeddings", "NLP"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-4 animate-fade-up">
          <h2 className="text-4xl font-bold text-foreground">Technical Skills</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={category.title} className="space-y-4 animate-fade-up" style={{ animationDelay: `${idx * 50}ms` }}>
              <h3 className="text-lg font-semibold text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-card border border-primary/30 text-foreground hover:border-primary hover:bg-primary/10 transition-all cursor-default shadow-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
