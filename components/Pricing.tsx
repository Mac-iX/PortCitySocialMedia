"use client"

import { useState } from "react"

export default function Pricing() {
  const [sliderValue, setSliderValue] = useState(0)

  const stages = [
    {
      position: 0,
      label: "$500",
      title: "2-Hour Consultation",
      description: "Deep-dive into your business needs",
      details: [
        "Full AI readiness assessment",
        "Scope of work draft",
        "Custom strategy blueprint",
        "Clear next steps roadmap",
      ],
      note: "The consultation fee is applied toward any package you choose.",
    },
    {
      position: 1,
      label: "$1,250",
      title: "Essential Package",
      description: "Core digital presence setup",
      details: [
        "Website or landing page",
        "Basic social media setup",
        "Content templates",
        "1 training session",
      ],
      note: "Best for businesses with existing brand assets.",
    },
    {
      position: 2,
      label: "$1,750",
      title: "Growth Package",
      description: "Comprehensive digital foundation",
      details: [
        "Custom website build",
        "Full social media setup",
        "2 weeks of content",
        "2 training sessions",
      ],
      note: "Most popular for new businesses.",
    },
    {
      position: 3,
      label: "$2,500",
      title: "Complete Transformation",
      description: "Full 6-week digital overhaul",
      details: [
        "Premium website & landing pages",
        "Complete social media presence",
        "4 weeks of content",
        "Full AI training program",
      ],
      note: "Maximum value for serious professionals.",
    },
  ]

  const currentStage = stages[sliderValue]
  const isConsultation = sliderValue === 0

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[var(--pc-accent)] font-semibold mb-2 tracking-wide uppercase text-sm">
            Investment
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--pc-front)] mb-4">
            Transform Your Online Presence in 6 Weeks or Less
          </h2>
          <p className="text-[var(--pc-muted)] max-w-2xl mx-auto">
            Every engagement starts with a 2-hour consultation to draft a tailored scope of work.
          </p>
        </div>

        {/* Interactive Meter */}
        <div className="bg-black/40 border border-[var(--pc-muted)]/20 rounded-2xl p-8 mb-8">
          {/* Slider Track */}
          <div className="relative mb-8">
            {/* Background Track */}
            <div className="h-3 bg-[var(--pc-muted)]/20 rounded-full relative">
              {/* Progress Fill */}
              <div
                className="absolute h-full rounded-full transition-all duration-300"
                style={{
                  width: `${(sliderValue / 3) * 100}%`,
                  background: "linear-gradient(90deg, var(--pc-accent), var(--pc-gold))",
                }}
              />
            </div>

            {/* Stage Markers */}
            <div className="absolute top-0 left-0 right-0 flex justify-between">
              {stages.map((stage, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSliderValue(index)}
                  className={`w-6 h-6 rounded-full -mt-1.5 transition-all duration-200 ${
                    index <= sliderValue
                      ? "bg-[var(--pc-accent)] shadow-lg shadow-[var(--pc-accent)]/30"
                      : "bg-[var(--pc-muted)]/30 hover:bg-[var(--pc-muted)]/50"
                  } ${index === sliderValue ? "ring-4 ring-[var(--pc-gold)]/50 scale-125" : ""}`}
                  aria-label={`Select ${stage.title}`}
                />
              ))}
            </div>

            {/* Stage Labels */}
            <div className="flex justify-between mt-6 text-xs">
              {stages.map((stage, index) => (
                <span
                  key={index}
                  className={`text-center max-w-[80px] ${
                    index === sliderValue ? "text-[var(--pc-gold)] font-semibold" : "text-[var(--pc-muted)]"
                  }`}
                >
                  {stage.label}
                </span>
              ))}
            </div>
          </div>

          {/* Hidden Range Input for Accessibility */}
          <input
            type="range"
            min="0"
            max="3"
            value={sliderValue}
            onChange={(e) => setSliderValue(Number(e.target.value))}
            className="sr-only"
            aria-label="Select pricing tier"
          />

          {/* Current Stage Display */}
          <div className="text-center py-8 border-t border-[var(--pc-muted)]/20">
            <p className="text-5xl md:text-6xl font-bold mb-2 text-[var(--pc-gold)]">
              {currentStage.label}
            </p>
            <p className="text-2xl text-[var(--pc-front)] font-semibold mb-2">{currentStage.title}</p>
            <p className="text-[var(--pc-muted)] mb-6">{currentStage.description}</p>

            {/* Details */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-6">
              {currentStage.details.map((detail, index) => (
                <div key={index} className="flex items-center gap-2 justify-center">
                  <div className="w-2 h-2 rounded-full bg-[var(--pc-accent)]" />
                  <span className="text-[var(--pc-front)] text-sm">{detail}</span>
                </div>
              ))}
            </div>

            {/* Note */}
            <p className="text-sm text-[var(--pc-accent)] italic">{currentStage.note}</p>
          </div>

          {/* CTA */}
          <div className="text-center pt-6 border-t border-[var(--pc-muted)]/20">
            <a
              href="#contact"
              className={`inline-block px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 ${
                isConsultation
                  ? "border-2 border-[var(--pc-accent)] text-[var(--pc-accent)] hover:bg-[var(--pc-accent)] hover:text-black"
                  : "bg-gradient-to-r from-[var(--pc-accent)] to-[var(--pc-gold)] text-black hover:shadow-xl hover:shadow-[var(--pc-accent)]/30"
              }`}
            >
              {isConsultation ? "Book Your Consultation" : "Start Your Transformation"}
            </a>
          </div>
        </div>

        {/* Value Props */}
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-black/30 border border-[var(--pc-muted)]/10 rounded-xl p-6">
            <p className="text-3xl font-bold text-[var(--pc-accent)] mb-2">$1,250 - $2,500</p>
            <p className="text-[var(--pc-front)] font-medium mb-1">Typical Project Range</p>
            <p className="text-sm text-[var(--pc-muted)]">Depends on scope and starting point</p>
          </div>
          <div className="bg-black/30 border border-[var(--pc-muted)]/10 rounded-xl p-6">
            <p className="text-3xl font-bold text-[var(--pc-gold)] mb-2">6 Weeks</p>
            <p className="text-[var(--pc-front)] font-medium mb-1">or Less</p>
            <p className="text-sm text-[var(--pc-muted)]">Fast turnaround, real results</p>
          </div>
          <div className="bg-black/30 border border-[var(--pc-muted)]/10 rounded-xl p-6">
            <p className="text-3xl font-bold text-[var(--pc-warm)] mb-2">Lifetime</p>
            <p className="text-[var(--pc-front)] font-medium mb-1">Skills Acquired</p>
            <p className="text-sm text-[var(--pc-muted)]">No ongoing dependency or fees</p>
          </div>
        </div>
      </div>
    </section>
  )
}
