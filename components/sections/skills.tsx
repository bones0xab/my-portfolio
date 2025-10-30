"use client"

import { Badge } from "@/components/ui/badge"

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Scripting",
      skills: ["Python", "Java", "Bash"],
    },
    {
      title: "Frameworks",
      skills: ["Spring Boot", "Angular", "React Native", "NestJS", "GraphQL"],
    },
    {
      title: "Security Tools",
      skills: ["Nmap", "Burp Suite", "Metasploit", "Wireshark"],
    },
    {
      title: "Security Domains",
      skills: ["Network Security", "Web Application Security", "Vulnerability Exploitation", "SOC L1 Monitoring"],
    },
    {
      title: "Other",
      skills: ["Docker", "Git", "Swagger", "JWT", "REST", "Kafka"],
    },
    {
      title: "Operating Systems",
      skills: ["Linux (Kali, Ubuntu)", "Windows"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-foreground">My Technical Skills</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="space-y-4">
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
