"use client"

import { useState, useEffect } from "react"
import WaveLogo from "./WaveLogo"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#pricing", label: "Pricing" },
    { href: "#work", label: "Work" },
    { href: "#faqs", label: "FAQs" },
  ]

  const handleMobileNavClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? "bg-[var(--pc-bg)]/95 backdrop-blur-sm border-b border-[var(--pc-muted)]/20" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#" className="flex-shrink-0 flex items-center gap-2 sm:gap-3">
            <WaveLogo className="w-8 h-8 sm:w-10 sm:h-10" />
            <span className="text-lg sm:text-xl font-bold text-[var(--pc-accent)]">Port City Social Media</span>
          </a>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-10">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-[var(--pc-muted)] hover:text-[var(--pc-front)] transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden sm:inline-block bg-gradient-to-r from-[var(--pc-accent)] to-[var(--pc-gold)] text-[var(--pc-bg)] px-6 py-2 rounded-xl font-medium hover:shadow-lg hover:shadow-[var(--pc-accent)]/25 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--pc-accent)] focus:ring-offset-2 focus:ring-offset-[var(--pc-bg)]"
            >
              Get Started
            </a>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[var(--pc-muted)] hover:text-[var(--pc-front)]"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-[var(--pc-muted)]/20 mt-2">
            <div className="flex flex-col space-y-2 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleMobileNavClick}
                  className="text-[var(--pc-muted)] hover:text-[var(--pc-front)] py-2 px-4 transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={handleMobileNavClick}
                className="mx-4 mt-2 text-center bg-gradient-to-r from-[var(--pc-accent)] to-[var(--pc-gold)] text-[var(--pc-bg)] px-6 py-3 rounded-xl font-medium"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
