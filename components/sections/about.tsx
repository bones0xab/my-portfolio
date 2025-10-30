"use client"

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-foreground">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
        </div>

        <div className="space-y-6">
          <p className="text-lg text-foreground/80 leading-relaxed">
            Ambitious Master's student specializing in Distributed Systems and Artificial Intelligence with a strong
            focus on Offensive and Defensive Cybersecurity. Ranked Top 4% on TryHackMe with proven skills in penetration
            testing, vulnerability analysis, exploitation, digital forensics, and security automation (Python, Bash).
          </p>

          <div className="grid md:grid-cols-3 gap-6 pt-6">
            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
              <h3 className="text-primary font-semibold mb-2">Languages</h3>
              <ul className="space-y-2 text-foreground/70">
                <li>🇸🇦 Arabic (Native)</li>
                <li>🇫🇷 French (Fluent)</li>
                <li>🇬🇧 English (Advanced)</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
              <h3 className="text-primary font-semibold mb-2">Location</h3>
              <p className="text-foreground/70">Mohammedia, Morocco</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
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
