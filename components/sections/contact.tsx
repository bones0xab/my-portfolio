"use client"

import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-4xl font-bold text-foreground">Get In Touch</h2>
          <p className="text-lg text-foreground/60">I'm open to new opportunities. Feel free to reach out.</p>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <a href="mailto:bouchtiabdelkebir@gmail.com" className="group">
            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all hover:shadow-lg">
              <Mail className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-foreground mb-2">Email</h3>
              <p className="text-foreground/60 text-sm break-all">bouchtiabdelkebir@gmail.com</p>
            </div>
          </a>

          <a href="tel:+212634979144" className="group">
            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all hover:shadow-lg">
              <Phone className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-foreground mb-2">Phone</h3>
              <p className="text-foreground/60 text-sm">+212 6 34 97 91 44</p>
            </div>
          </a>

          <div className="group">
            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all hover:shadow-lg">
              <MapPin className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-foreground mb-2">Location</h3>
              <p className="text-foreground/60 text-sm">Mohammedia, Morocco</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-foreground mb-4">Connect With Me</h3>
            <div className="flex justify-center gap-4">
              <a href="https://github.com/bones0xab" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary/30 hover:border-primary hover:bg-primary/10 text-primary bg-transparent"
                >
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/abdelkebir-bouchti" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary/30 hover:border-primary hover:bg-primary/10 text-primary bg-transparent"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </Button>
              </a>
            </div>
          </div>

          <div className="text-center pt-4">
            <Button
              onClick={() => (window.location.href = "mailto:bouchtiabdelkebir@gmail.com")}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Send Me an Email
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
