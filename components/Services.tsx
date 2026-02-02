"use client"

import { useState } from "react"

export default function Services() {
  const [activeTab, setActiveTab] = useState<"training" | "creation">("training")

  const trainingModules = [
    {
      title: "Deep Research with AI",
      description: "Master targeted audience research using leading LLMs",
      details: [
        "Grok, ChatGPT, Gemini, Claude, Manus workflows",
        "Build your prompt library with context engineering",
        "Knowledge graphs and framework development",
        "Perfect for executives, marketers, startups, entrepreneurs",
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      title: "Vibe Coding",
      description: "Build functional websites and apps without traditional coding",
      details: [
        "v0, Cursor, Replit, Lovable, Bolt workflows",
        "Non-developers can now build production-ready sites",
        "AI-assisted development fundamentals",
        "Deploy and iterate rapidly",
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: "Vibe Design",
      description: "Create professional graphics and brand assets with AI",
      details: [
        "AI image generation and editing",
        "Brand consistency with AI tools",
        "Social media graphics at scale",
        "Professional design without design school",
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Prompt Engineering Mastery",
      description: "The foundational skill for all AI productivity",
      details: [
        "Advanced prompting techniques",
        "Context engineering fundamentals",
        "Spec models and knowledge graphs",
        "Skills that transfer across all AI platforms",
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
  ]

  const creationServices = [
    {
      title: "AI Content Creation",
      description: "Website design, social media, graphics, and video",
      details: [
        "Website design from web builders to vibe coders",
        "Daily social media post scheduling",
        "AI graphics and short video production",
        "Content calendars and strategy",
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Social Media Setup & Strategy",
      description: "Complete social presence from scratch",
      details: [
        "Platform selection and optimization",
        "Content pillars and voice development",
        "Posting schedules and automation",
        "Community engagement frameworks",
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
    },
    {
      title: "Website & Landing Pages",
      description: "High-converting digital presence",
      details: [
        "Lead-gen landing pages",
        "Full website builds",
        "SEO optimization",
        "Conversion-focused design",
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Brand Development",
      description: "Complete brand identity with AI",
      details: [
        "Logo and visual identity",
        "Brand voice and messaging",
        "Style guides and assets",
        "Consistent brand presence",
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
  ]

  const currentServices = activeTab === "training" ? trainingModules : creationServices

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[var(--pc-accent)] font-semibold mb-2 tracking-wide uppercase text-sm">
            What We Offer
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--pc-front)] mb-4">
            AI Training & Creative Services
          </h2>
          <p className="text-[var(--pc-muted)] max-w-2xl mx-auto mb-8">
            Whether you want to learn to do it yourself or need it done for you, we have the solution.
          </p>

          {/* Tab Toggle */}
          <div className="inline-flex bg-black/50 border border-[var(--pc-muted)]/20 rounded-xl p-1">
            <button
              type="button"
              onClick={() => setActiveTab("training")}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === "training"
                  ? "bg-[var(--pc-accent)] text-black shadow-lg"
                  : "text-[var(--pc-muted)] hover:text-[var(--pc-front)]"
              }`}
            >
              Training Modules
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("creation")}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === "creation"
                  ? "bg-[var(--pc-accent)] text-black shadow-lg"
                  : "text-[var(--pc-muted)] hover:text-[var(--pc-front)]"
              }`}
            >
              Creative Services
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {currentServices.map((service, index) => (
            <div
              key={index}
              className="bg-black/40 border border-[var(--pc-muted)]/10 rounded-xl p-8 hover:border-[var(--pc-accent)]/40 transition-all duration-200 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-[var(--pc-accent)]/10 text-[var(--pc-accent)] rounded-lg group-hover:bg-[var(--pc-accent)]/20 transition-colors">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--pc-front)] mb-1">{service.title}</h3>
                  <p className="text-[var(--pc-muted)]">{service.description}</p>
                </div>
              </div>
              <ul className="space-y-2 ml-16">
                {service.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[var(--pc-gold)] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-[var(--pc-front)] text-sm">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-[var(--pc-muted)] mb-4">
            Not sure what you need? Start with a consultation to scope your project.
          </p>
          <a
            href="#pricing"
            className="inline-block border-2 border-[var(--pc-accent)] text-[var(--pc-accent)] px-8 py-4 rounded-xl font-semibold hover:bg-[var(--pc-accent)] hover:text-black transition-all duration-200"
          >
            View Consultation Options
          </a>
        </div>
      </div>
    </section>
  )
}
