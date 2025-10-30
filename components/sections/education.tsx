"use client"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const Education = () => {
  const education = [
    {
      degree: "Master in Distributed Systems and Artificial Intelligence",
      school: "ENSET Mohammedia",
      date: "2024 – Present",
      logo: "/logos/enset.png",
    },
    {
      degree: "Pentester Program",
      school: "1337 Coding School",
      date: "2024 – Present",
      logo: "/logos/um6p.png",
    },
    {
      degree: "Bachelor's Degree in Computer Science – Networks and Multimedia",
      school: "FST Mohammedia",
      date: "2020 – 2023",
      logo: "/logos/fst.png",
    },
  ]

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-foreground">Education</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
        </div>

        <div className="space-y-4">
          {education.map((edu, idx) => (
            <Card key={idx} className="bg-card border-border hover:border-primary/50 transition-all">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-background rounded-lg p-2 flex items-center justify-center">
                    <Image
                      src={edu.logo || "/placeholder.svg"}
                      alt={edu.school}
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-primary">{edu.degree}</CardTitle>
                    <CardDescription className="text-foreground/60">{edu.school}</CardDescription>
                  </div>
                  <span className="text-sm text-foreground/50 whitespace-nowrap">{edu.date}</span>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
