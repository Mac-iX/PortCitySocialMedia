export default function WhyUs() {
  const benefits = [
    {
      title: "Community-first Approach",
      description: "Deep local market understanding and community connections",
      icon: "🏖️",
    },
    {
      title: "Lean builds, measurable outcomes",
      description: "Efficient development with clear ROI tracking and analytics",
      icon: "📊",
    },
    {
      title: "Brand-true AI implementation",
      description: "AI solutions that enhance your brand voice, not replace it",
      icon: "🤖",
    },
    {
      title: "Local partnership mindset",
      description: "Long-term relationships focused on community business growth",
      icon: "🤝",
    },
  ]

  return (
    <section id="why-us" className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--pc-bg)]/30 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="max-w-2xl mx-auto mb-8">
            <img
              src="/pcsm-creative.png"
              alt="Creative Social Media Agency - Port City Social Media"
              className="w-full h-auto rounded-xl shadow-2xl"
            />
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--pc-front)] mb-4">
            Why Choose Port City Social Media
          </h2>
          <p className="text-xl text-[var(--pc-muted)] max-w-2xl mx-auto">
            AI guided by brand. Local expertise meets modern technology.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-14 h-14 bg-[var(--pc-accent)]/10 border border-[var(--pc-accent)]/20 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">{benefit.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-[var(--pc-front)] text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-[var(--pc-muted)] leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 bg-[var(--pc-bg)]/50 border border-[var(--pc-muted)]/20 rounded-xl mb-12">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-[var(--pc-accent)]/10 border border-[var(--pc-accent)]/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[var(--pc-accent)] font-bold text-lg">MC</span>
              </div>
              <div>
                <p className="text-[var(--pc-muted)] text-sm mb-1">Led by</p>
                <p className="text-[var(--pc-front)] font-semibold text-xl">Mac Carter</p>
                <p className="text-[var(--pc-accent)] text-sm mb-4">Quality Creative Consulting, LLC</p>
                <p className="text-[var(--pc-muted)] leading-relaxed">
                  High-level prompt engineer and technical writer with a background in tech startups. Specializing in AI
                  integration for small businesses and community growth through innovative digital solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="max-w-2xl mx-auto">
            <img
              src="/pcsm-creative-2.png"
              alt="Social Media Business Agency - Growing Your Business with AI"
              className="w-full h-auto rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
