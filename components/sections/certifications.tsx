"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const Certifications = () => {
  const certifications = [
    {
      title: "TryHackMe",
      description: "Top 4%, Hash Cracker, OhSINT, Webbed, Junior Pentester",
      icon: "🎯",
    },
    {
      title: "Cisco",
      description: "Network Security 0.2, Networking Basics",
      icon: "🌐",
    },
  ]

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-foreground">Certifications</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <Card
              key={cert.title}
              className="bg-card border-border hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-primary">{cert.title}</CardTitle>
                  <span className="text-2xl">{cert.icon}</span>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/70">{cert.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
