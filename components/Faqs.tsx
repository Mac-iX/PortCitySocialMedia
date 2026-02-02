"use client"

import { useState } from "react"
import { ChevronDownIcon } from "@heroicons/react/24/outline"

export default function Faqs() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    {
      question: "How fast is a launch?",
      answer: "Most single-page builds go live within 7–10 days after content sign-off. Full 6-week transformations include ongoing support and training throughout.",
    },
    {
      question: "Will AI make it generic?",
      answer: "No. The key to eliminating AI slop is understanding the patterns first, then prompting your AI accordingly. We teach you to engineer prompts that lock in your unique voice and brand identity, creating content that's distinctly yours—not generic robot-speak.",
    },
    {
      question: "What do you need from me?",
      answer: "Brand basics, offerings, any visuals, and decision-maker access. The 2-hour consultation gives us everything we need to draft a tailored scope.",
    },
    {
      question: "Do I own the site?",
      answer: "Yes—repo & deployment are yours. You walk away with full ownership and the skills to maintain it.",
    },
    {
      question: "How do we measure results?",
      answer: "We establish clear KPIs during the consultation based on your specific goals—whether that's lead generation, engagement rates, or conversion metrics. We monitor progress throughout the engagement, adjusting strategies to accelerate results while staying aligned with your evolving needs.",
    },
  ]

  return (
    <section id="faqs" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--pc-front)] mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-[var(--pc-muted)]">Everything you need to know about working with us</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[var(--pc-bg)]/50 border border-[var(--pc-muted)]/20 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-[var(--pc-muted)]/5 transition-colors duration-200"
              >
                <span className="text-[var(--pc-front)] font-medium">{faq.question}</span>
                <ChevronDownIcon
                  className={`w-5 h-5 text-[var(--pc-muted)] transition-transform duration-200 ${
                    openFaq === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openFaq === index && (
                <div className="px-6 pb-4">
                  <p className="text-[var(--pc-muted)]">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
