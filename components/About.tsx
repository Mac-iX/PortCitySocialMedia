"use client"

export default function About() {
  const ncCities = [
    "Wilmington",
    "Southport", 
    "Jacksonville",
    "Raleigh",
    "Durham",
    "Charlotte",
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--pc-accent)]/5 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--pc-front)] mb-4">
            Social Media in the Port City
          </h2>
          <p className="text-xl text-[var(--pc-muted)] max-w-3xl mx-auto">
            Wilmington-based. North Carolina-focused. AI-powered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-[var(--pc-front)] leading-relaxed">
              Port City Social Media operates from the shores of North Carolina, where the Cape Fear River meets the Atlantic. We're rooted in Wilmington, but we service businesses across the entire state.
            </p>
            
            <p className="text-[var(--pc-muted)] leading-relaxed">
              I love where I come from, and I love what I do. I wanted my business to give back to the community while applying my talents as a productive member of modern society. This is my way of contributing—because most AI training won't be as qualitative as mine.
            </p>

            <p className="text-[var(--pc-muted)] leading-relaxed">
              It won't be one-on-one or hands-on. It won't be as personable or tailored. And it won't leave you with lasting skills you can continue to apply long after we've worked together.
            </p>

            <p className="text-[var(--pc-accent)] font-medium">
              That's the difference. That's the Port City way.
            </p>
          </div>

          <div className="bg-black/40 border border-[var(--pc-muted)]/20 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-[var(--pc-front)] mb-6">
              Serving All of North Carolina
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {ncCities.map((city, index) => (
                <span
                  key={city}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    index === 0
                      ? "bg-[var(--pc-accent)]/20 text-[var(--pc-accent)] border border-[var(--pc-accent)]/30"
                      : "bg-[var(--pc-muted)]/10 text-[var(--pc-muted)] border border-[var(--pc-muted)]/20"
                  }`}
                >
                  {city}
                </span>
              ))}
              <span className="px-4 py-2 rounded-full text-sm font-medium bg-[var(--pc-gold)]/10 text-[var(--pc-gold)] border border-[var(--pc-gold)]/30">
                + Eastern NC
              </span>
            </div>

            <div className="mt-8 pt-6 border-t border-[var(--pc-muted)]/20">
              <p className="text-sm text-[var(--pc-muted)] mb-4">Our Ethical AI-First Approach:</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2 text-[var(--pc-front)]">
                  <span className="text-[var(--pc-accent)]">•</span>
                  Transparent about AI usage in every deliverable
                </li>
                <li className="flex items-start gap-2 text-[var(--pc-front)]">
                  <span className="text-[var(--pc-accent)]">•</span>
                  Human oversight and quality control always
                </li>
                <li className="flex items-start gap-2 text-[var(--pc-front)]">
                  <span className="text-[var(--pc-accent)]">•</span>
                  Skills transfer so you're never dependent
                </li>
                <li className="flex items-start gap-2 text-[var(--pc-front)]">
                  <span className="text-[var(--pc-accent)]">•</span>
                  No AI slop—only quality, branded content
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
