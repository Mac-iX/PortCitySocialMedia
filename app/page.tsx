import Hero from "@/components/Hero"
import Services from "@/components/Services"
import About from "@/components/About"
import WhyUs from "@/components/WhyUs"
import Pricing from "@/components/Pricing"
import Work from "@/components/Work"
import Faqs from "@/components/Faqs"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Navigation from "@/components/Navigation"
import OceanWaveBackground from "@/components/OceanWaveBackground"
import FishCursor from "@/components/FishCursor"
import FishHookPopups from "@/components/FishHookPopups"
import SeaCreatures from "@/components/SeaCreatures"

export default function Home() {
  return (
    <>
      <FishCursor />
      <OceanWaveBackground />
      <SeaCreatures />
      <FishHookPopups />
      <main className="min-h-screen relative z-0">
        <div className="ocean-gold-overlay" />
        <div className="relative z-10">
          <Navigation />
          <Hero />
          <Services />
          <About />
          <WhyUs />
          <Pricing />
          <Work />
          <Faqs />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  )
}
