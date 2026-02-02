"use client"

import type React from "react"

import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setShowSuccess(true)
        setFormData({ name: "", email: "", business: "", message: "" })
      }
    } catch (error) {
      // Fallback to mailto
      window.location.href = `mailto:qualitycreativenc@gmail.com?subject=New Lead from ${formData.name}&body=${formData.message}`
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--pc-bg)]/30">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--pc-front)] mb-4">Let's Connect</h2>
          <p className="text-xl text-[var(--pc-muted)]">Ready to transform your North Carolina business? Let's talk.</p>
        </div>

        {showSuccess ? (
          <div className="bg-[var(--pc-accent)]/10 border border-[var(--pc-accent)]/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-semibold text-[var(--pc-accent)] mb-2">Thanks! We'll reply shortly.</h3>
            <p className="text-[var(--pc-muted)]">We'll get back to you within 24 hours to discuss your project.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-[var(--pc-front)] font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[var(--pc-bg)]/50 border border-[var(--pc-muted)]/20 rounded-lg text-[var(--pc-front)] placeholder-[var(--pc-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--pc-accent)] focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[var(--pc-front)] font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[var(--pc-bg)]/50 border border-[var(--pc-muted)]/20 rounded-lg text-[var(--pc-front)] placeholder-[var(--pc-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--pc-accent)] focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="business" className="block text-[var(--pc-front)] font-medium mb-2">
                Business
              </label>
              <input
                type="text"
                id="business"
                name="business"
                value={formData.business}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[var(--pc-bg)]/50 border border-[var(--pc-muted)]/20 rounded-lg text-[var(--pc-front)] placeholder-[var(--pc-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--pc-accent)] focus:border-transparent"
                placeholder="Your business name"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-[var(--pc-front)] font-medium mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[var(--pc-bg)]/50 border border-[var(--pc-muted)]/20 rounded-lg text-[var(--pc-front)] placeholder-[var(--pc-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--pc-accent)] focus:ring-offset-2 focus:ring-offset-[var(--pc-bg)] resize-none"
                placeholder="Tell us about your project and goals..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[var(--pc-accent)] to-[var(--pc-gold)] text-black px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-[var(--pc-accent)]/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--pc-accent)] focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
