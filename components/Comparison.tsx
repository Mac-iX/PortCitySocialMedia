export default function Comparison() {
  return (
    <section id="transformation" className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--pc-bg)]/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[var(--pc-accent)] font-semibold mb-2 tracking-wide uppercase text-sm">
            The Difference
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--pc-front)] mb-4">
            Traditional Agency vs Port City Social Media
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Traditional */}
          <div className="bg-[var(--pc-bg)]/50 border border-[var(--pc-muted)]/30 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-[var(--pc-muted)] mb-6">Traditional Social Media Agency</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-[var(--pc-warm)] mt-1">✕</span>
                <span className="text-[var(--pc-muted)]">Monthly retainers that never end</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--pc-warm)] mt-1">✕</span>
                <span className="text-[var(--pc-muted)]">They do the work, you stay dependent</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--pc-warm)] mt-1">✕</span>
                <span className="text-[var(--pc-muted)]">Generic content that doesn't feel like you</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--pc-warm)] mt-1">✕</span>
                <span className="text-[var(--pc-muted)]">No skills transfer to your team</span>
              </li>
            </ul>
          </div>

          {/* Port City */}
          <div className="bg-gradient-to-br from-[var(--pc-accent)]/10 to-[var(--pc-gold)]/10 border border-[var(--pc-accent)]/30 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-[var(--pc-accent)] mb-6">Port City Social Media</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-[var(--pc-accent)] mt-1">✓</span>
                <span className="text-[var(--pc-front)]">6-month program with clear end date</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--pc-accent)] mt-1">✓</span>
                <span className="text-[var(--pc-front)]">You learn to do it yourself with AI</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--pc-accent)] mt-1">✓</span>
                <span className="text-[var(--pc-front)]">Content that matches your authentic voice</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--pc-accent)] mt-1">✓</span>
                <span className="text-[var(--pc-front)]">Lifetime skills you own forever</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
