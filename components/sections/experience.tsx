"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const Experience = () => {
  const experiences = [
    {
      title: "Intern – IRM Mobile Application",
      company: "FST Mohammedia",
      date: "Feb 2023 – Nov 2024",
      description:
        "Designed and deployed a React Native app for event and course management used by 150+ students. Improved academic coordination and access to resources by 30%.",
      highlights: ["React Native", "Mobile Development", "150+ Users"],
    },
    {
      title: "Freelance Developer – SOS Doctor",
      company: "Self-Employed",
      date: "Jan 2024 – Jun 2024",
      description:
        "Designed and developed a medical website using HTML, CSS, and JavaScript, optimized for both web and mobile. Deployed on Hostinger with enhanced SEO optimization.",
      highlights: ["Web Development", "SEO Optimization", "Responsive Design"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-foreground">Professional Experience</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
        </div>

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <Card key={idx} className="bg-card border-border hover:border-primary/50 transition-all hover:shadow-lg">
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
