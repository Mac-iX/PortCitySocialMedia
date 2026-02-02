export default function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-[var(--pc-muted)]/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex flex-wrap justify-center gap-2 text-[var(--pc-muted)] mb-2">
            <span>Wilmington</span>
            <span>•</span>
            <span>Wrightsville Beach</span>
            <span>•</span>
            <span>Southport</span>
            <span>•</span>
            <span>Leland</span>
            <span>•</span>
            <span>Carolina Beach</span>
            <span>•</span>
            <span>Jacksonville</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2 text-[var(--pc-muted)] mb-4">
            <span>Raleigh</span>
            <span>•</span>
            <span>Durham</span>
            <span>•</span>
            <span>Charlotte</span>
          </div>

          <p className="text-[var(--pc-muted)] mb-2">
            Email:{" "}
            <a
              href="mailto:qualitycreativenc@gmail.com"
              className="text-[var(--pc-accent)] hover:text-[var(--pc-gold)] transition-colors duration-200"
            >
              qualitycreativenc@gmail.com
            </a>
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[var(--pc-muted)]/20">
          <div className="text-[var(--pc-muted)] text-sm mb-4 md:mb-0">
            <p>© Port City Social Media — Built the lean way.</p>
            <p>Quality Creative Consulting, LLC</p>
          </div>

          <div className="flex gap-6 text-sm">
            <a href="#" className="text-[var(--pc-muted)] hover:text-[var(--pc-front)] transition-colors duration-200">
              Privacy
            </a>
            <a href="#" className="text-[var(--pc-muted)] hover:text-[var(--pc-front)] transition-colors duration-200">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
