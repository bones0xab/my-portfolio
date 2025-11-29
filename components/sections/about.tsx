"use client"

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4 animate-fade-up">
          <h2 className="text-4xl font-bold text-foreground">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
        </div>

        <div className="space-y-6">
          {/* Updated professional summary with new CV content */}
          <p className="text-lg text-foreground/80 leading-relaxed animate-fade-up animation-delay-100">
            Futur diplômé du Master Systèmes Distribués (ENSET) et issu du cursus d'excellence 1337, je suis un Ingénieur Logiciel spécialisé dans les architectures Microservices (Spring Boot) et le Frontend moderne (Angular/React). Fort d'une culture DevOps (Docker) et d'une expertise en Sécurité (Secure Coding), je conçois des applications robustes, scalables et sécurisées dès la conception. Je recherche un stage de fin d'études (PFE) pré-embauche pour industrialiser vos solutions logicielles.
          </p>

          <div className="grid md:grid-cols-3 gap-6 pt-6">
            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors animate-fade-up animation-delay-200">
              <h3 className="text-primary font-semibold mb-2">Languages</h3>
              <ul className="space-y-2 text-foreground/70">
                <li>🇸🇦 Arabic (Native)</li>
                <li>🇫🇷 French (Fluent)</li>
                <li>🇬🇧 English (Technical & Professional)</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors animate-fade-up animation-delay-300">
              <h3 className="text-primary font-semibold mb-2">Location</h3>
              <p className="text-foreground/70">Mohammedia, Morocco</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors animate-fade-up animation-delay-400">
              <h3 className="text-primary font-semibold mb-2">Contact</h3>
              <p className="text-foreground/70 text-sm break-all">bouchtiabdelkebir@gmail.com</p>
              <p className="text-foreground/70">+212 6 34 97 91 44</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
