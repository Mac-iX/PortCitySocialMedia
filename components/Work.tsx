"use client"

import { useState } from "react"
import Modal from "./Modal"

export default function Work() {
  const [selectedWork, setSelectedWork] = useState<any>(null)
  const [activeCategory, setActiveCategory] = useState<"vibe" | "builder">("vibe")

  const vibeWorks = [
    {
      title: "michaelanthonycarter.xyz",
      description: "Personal consulting site with modern design",
      result: "Clean, professional presence for consulting services",
      image: "/mac-digital-portrait.png",
      stack: "v0.dev + Vercel",
      link: "https://michaelanthonycarter.xyz",
    },
    {
      title: "hawkinscleaningservices.com",
      description: "Local cleaning service landing page",
      result: "Local SEO optimized site driving qualified leads",
      image: "/hawkins-cleaning-thumbnail.png",
      stack: "v0.dev + Vercel",
      link: "https://hawkinscleaningservices.com",
    },
    {
      title: "qualitycreativeconsulting.com",
      description: "Creative consulting lead generation",
      result: "Conversion-focused landing page for creative services",
      image: "/quality-creative-logo.png",
      stack: "Next.js + Tailwind",
      link: "https://qualitycreativeconsulting.com",
    },
  ]

  const builderWorks = [
    {
      title: "qualitycreativenc.com",
      description: "Business funnel and service showcase",
      result: "Multi-service platform driving business growth",
      image: "/quality-creative-logo.png",
      stack: "Web Builder + CMS",
      link: "https://qualitycreativenc.com",
    },
    {
      title: "twinanchorsroofing.com",
      description: "Roofing contractor website",
      result: "Lead generation site for local roofing services",
      image: "/twin-anchors-logo.png",
      stack: "Web Builder + SEO",
      link: "https://twinanchorsroofing.com",
    },
    {
      title: "agapehealingjourney.com",
      description: "Wellness and healing services",
      result: "Calming, conversion-focused wellness site",
      image: "/agape-phoenix-logo.png",
      stack: "Web Builder + Booking",
      link: "https://agapehealingjourney.com",
    },
    {
      title: "agapecaninemassage.com",
      description: "Pet massage and wellness services",
      result: "Specialized pet wellness site with booking system",
      image: "/pet-massage-website-calming-blue.png",
      stack: "Web Builder + Scheduling",
      link: "https://agapecaninemassage.com",
    },
  ]

  const currentWorks = activeCategory === "vibe" ? vibeWorks : builderWorks

  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--pc-bg)]/30 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--pc-front)] mb-4">Recent Work</h2>
          <p className="text-xl text-[var(--pc-muted)] max-w-2xl mx-auto mb-8">
            Custom builds and strategic web solutions that deliver results
          </p>

          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveCategory("vibe")}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeCategory === "vibe"
                  ? "bg-[var(--pc-accent)] text-[var(--pc-bg)] shadow-lg"
                  : "bg-[var(--pc-bg)]/50 text-[var(--pc-muted)] border border-[var(--pc-muted)]/20 hover:text-[var(--pc-front)]"
              }`}
            >
              Vibe-Coded Sites
            </button>
            <button
              onClick={() => setActiveCategory("builder")}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeCategory === "builder"
                  ? "bg-[var(--pc-accent)] text-[var(--pc-bg)] shadow-lg"
                  : "bg-[var(--pc-bg)]/50 text-[var(--pc-muted)] border border-[var(--pc-muted)]/20 hover:text-[var(--pc-front)]"
              }`}
            >
              Web Builder Sites
            </button>
          </div>
        </div>

        <div className={`grid gap-8 ${currentWorks.length === 4 ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3"}`}>
          {currentWorks.map((work, index) => (
            <div key={index} className="group cursor-pointer" onClick={() => setSelectedWork(work)}>
              <div className="bg-[var(--pc-bg)]/50 border border-[var(--pc-muted)]/20 rounded-xl overflow-hidden hover:scale-105 hover:shadow-xl hover:shadow-[var(--pc-accent)]/10 transition-all duration-200">
                <div className="aspect-video bg-[var(--pc-muted)]/10 relative overflow-hidden">
                  <img
                    src={work.image || "/placeholder.svg"}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-[var(--pc-front)] mb-2">{work.title}</h3>
                  <p className="text-[var(--pc-muted)] text-sm mb-3">{work.description}</p>
                  <p className="text-[var(--pc-accent)] text-sm">{work.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedWork && <Modal isOpen={!!selectedWork} onClose={() => setSelectedWork(null)} work={selectedWork} />}
    </section>
  )
}
