export default function Challenge() {
  const challenges = [
    {
      title: "Limited Time",
      description: "You're running a business. You don't have hours to figure out social media algorithms and AI tools.",
    },
    {
      title: "Agency Dependency",
      description: "Traditional agencies keep you paying monthly forever. You never own the skills or the process.",
    },
    {
      title: "Lack of Training",
      description: "70% of marketers report their employers don't provide AI training. You're expected to figure it out alone.",
    },
  ]

  return (
    <section id="challenge" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[var(--pc-warm)] font-semibold mb-2 tracking-wide uppercase text-sm">
            The Problem
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--pc-front)] mb-4">
            Why Most Small Businesses Struggle with Social Media
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((item, index) => (
            <div
              key={index}
              className="bg-[var(--pc-bg)]/50 border border-[var(--pc-muted)]/20 rounded-xl p-8 text-center"
            >
              <h3 className="text-xl font-semibold text-[var(--pc-front)] mb-4">{item.title}</h3>
              <p className="text-[var(--pc-muted)]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
