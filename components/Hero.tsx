import HeaderWaterEffect from "./HeaderWaterEffect" // Assuming HeaderWaterEffect is imported from another file

export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative"
      style={{
        background:
          "linear-gradient(135deg, var(--pc-bg) 0%, rgba(0, 224, 184, 0.15) 40%, rgba(255, 215, 0, 0.1) 100%)",
      }}
    >
      <HeaderWaterEffect />

      <div className="max-w-4xl mx-auto text-center pt-20">
        <div className="fade-up">
          <p className="text-[var(--pc-accent)] font-semibold mb-6 tracking-wide uppercase text-sm">
            AI Training & Digital Services for North Carolina Businesses
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--pc-front)] mb-8 leading-tight text-balance">
            Transform Your Online Presence Using AI in{" "}
            <span className="text-[var(--pc-gold)]">6 Weeks or Less</span>
          </h1>

          <p className="text-xl md:text-2xl text-[var(--pc-front)] mb-10 max-w-3xl mx-auto leading-relaxed">
            Learn to vibe code, vibe design, and prompt AI tools effectively. Build skills that last a lifetime, not dependency that drains your budget.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="#pricing"
              className="bg-gradient-to-r from-[var(--pc-accent)] to-[var(--pc-gold)] text-black px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-[var(--pc-accent)]/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--pc-accent)] focus:ring-offset-2 focus:ring-offset-black hover:scale-105"
            >
              Start Your Transformation
            </a>
            <a
              href="#services"
              className="border-2 border-[var(--pc-accent)] text-[var(--pc-accent)] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[var(--pc-accent)] hover:text-black transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--pc-accent)] focus:ring-offset-2 focus:ring-offset-black"
            >
              Explore Services
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-[var(--pc-front)]">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[var(--pc-accent)] rounded-full"></div>
              Ethical AI-First
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[var(--pc-gold)] rounded-full"></div>
              Vibe Design
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[var(--pc-warm)] rounded-full"></div>
              Prompt Mastery
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
