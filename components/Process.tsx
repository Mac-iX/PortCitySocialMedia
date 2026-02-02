export default function Process() {
  const phases = [
    {
      months: "Months 1-2",
      title: "Assessment & Foundation",
      items: [
        "Complete social media audit",
        "Develop AI strategy blueprint",
        "Set up essential AI tools",
        "Begin AI literacy training",
      ],
    },
    {
      months: "Months 3-4",
      title: "Implementation & Training",
      items: [
        "Website/landing page creation",
        "Social media channel setup",
        "Content creation & posting begins",
        "Behind-the-scenes workflow training",
      ],
    },
    {
      months: "Months 5-6",
      title: "Mastery & Independence",
      items: [
        "Advanced prompt engineering techniques",
        "Reels & video content creation",
        "Community building strategies",
        "Final independence assessment",
      ],
    },
  ]

  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--pc-front)] mb-4">
            Your 6-Month Journey to Digital Independence
          </h2>
          <p className="text-xl text-[var(--pc-front)] max-w-3xl mx-auto">
            A structured program that combines hands-on implementation with comprehensive AI training.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="bg-[var(--pc-bg)]/50 border border-[var(--pc-muted)]/20 rounded-xl p-8 hover:border-[var(--pc-accent)]/40 transition-all duration-200 relative"
            >
              <div className="absolute -top-4 left-8">
                <span className="bg-gradient-to-r from-[var(--pc-accent)] to-[var(--pc-gold)] text-[var(--pc-bg)] px-4 py-1 rounded-full text-sm font-semibold">
                  {phase.months}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-[var(--pc-front)] mb-6 mt-2">{phase.title}</h3>
              <ul className="space-y-3">
                {phase.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[var(--pc-accent)] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-[var(--pc-muted)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <p className="text-4xl font-bold text-[var(--pc-accent)] mb-2">88%</p>
            <p className="text-[var(--pc-muted)] text-sm">of digital marketers now use AI daily</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-[var(--pc-gold)] mb-2">70%</p>
            <p className="text-[var(--pc-muted)] text-sm">of marketers lack employer AI training</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-[var(--pc-warm)] mb-2">40%</p>
            <p className="text-[var(--pc-muted)] text-sm">productivity increase with AI content</p>
          </div>
        </div>
      </div>
    </section>
  )
}
