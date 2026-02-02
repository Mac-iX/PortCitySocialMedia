import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://portcitysocialmedia.com"),
  title: {
    default: "Port City Social Media | AI Training & Digital Marketing for North Carolina Businesses",
    template: "%s | Port City Social Media",
  },
  description:
    "Transform your online presence using AI in 6 weeks or less. Ethical AI-first training, vibe coding, prompt engineering, and digital marketing services for businesses across North Carolina - Wilmington, Raleigh, Charlotte, Durham, Jacksonville, and Eastern NC.",
  keywords: [
    "AI training North Carolina",
    "social media marketing Wilmington NC",
    "vibe coding",
    "prompt engineering training",
    "AI content creation",
    "digital marketing NC",
    "small business AI tools",
    "ethical AI marketing",
    "Wilmington social media",
    "North Carolina digital agency",
    "AI literacy training",
    "Eastern NC marketing",
  ],
  authors: [{ name: "Port City Social Media" }],
  creator: "Port City Social Media",
  publisher: "Port City Social Media",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Port City Social Media | AI Training & Digital Marketing for NC Businesses",
    description:
      "Transform your online presence using AI in 6 weeks or less. Ethical AI-first training and digital marketing services across North Carolina.",
    url: "https://portcitysocialmedia.com",
    siteName: "Port City Social Media",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Port City Social Media - AI Training & Digital Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Port City Social Media | AI Training for NC Businesses",
    description:
      "Transform your online presence using AI in 6 weeks or less. Ethical AI-first training across North Carolina.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://portcitysocialmedia.com",
  },
  category: "technology",
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#00e0b8",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://portcitysocialmedia.com/#organization",
        name: "Port City Social Media",
        url: "https://portcitysocialmedia.com",
        logo: {
          "@type": "ImageObject",
          url: "https://portcitysocialmedia.com/wave-logo.png",
          width: 512,
          height: 512,
        },
        description:
          "Ethical AI-first training and digital marketing services for North Carolina businesses. Specializing in AI literacy, vibe coding, prompt engineering, and social media transformation.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Wilmington",
          addressRegion: "NC",
          addressCountry: "US",
        },
        areaServed: [
          { "@type": "City", name: "Wilmington", containedInPlace: { "@type": "State", name: "North Carolina" } },
          { "@type": "City", name: "Raleigh", containedInPlace: { "@type": "State", name: "North Carolina" } },
          { "@type": "City", name: "Durham", containedInPlace: { "@type": "State", name: "North Carolina" } },
          { "@type": "City", name: "Charlotte", containedInPlace: { "@type": "State", name: "North Carolina" } },
          { "@type": "City", name: "Jacksonville", containedInPlace: { "@type": "State", name: "North Carolina" } },
          { "@type": "City", name: "Southport", containedInPlace: { "@type": "State", name: "North Carolina" } },
          { "@type": "GeoShape", name: "Eastern North Carolina" },
        ],
        email: "qualitycreativenc@gmail.com",
        sameAs: [],
        knowsAbout: [
          "Artificial Intelligence",
          "Prompt Engineering",
          "Social Media Marketing",
          "Content Creation",
          "Vibe Coding",
          "Digital Marketing",
          "AI Training",
          "Small Business Marketing",
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://portcitysocialmedia.com/#localbusiness",
        name: "Port City Social Media",
        image: "https://portcitysocialmedia.com/wave-logo.png",
        priceRange: "$500-$2500",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Wilmington",
          addressRegion: "NC",
          postalCode: "28401",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 34.2257,
          longitude: -77.9447,
        },
        url: "https://portcitysocialmedia.com",
        telephone: "",
        email: "qualitycreativenc@gmail.com",
      },
      {
        "@type": "WebSite",
        "@id": "https://portcitysocialmedia.com/#website",
        url: "https://portcitysocialmedia.com",
        name: "Port City Social Media",
        description: "AI Training & Digital Marketing for North Carolina Businesses",
        publisher: { "@id": "https://portcitysocialmedia.com/#organization" },
        inLanguage: "en-US",
      },
      {
        "@type": "Service",
        "@id": "https://portcitysocialmedia.com/#ai-training",
        name: "AI Training & Consultation",
        description:
          "2-hour consultations and 6-week transformation programs teaching ethical AI usage, prompt engineering, vibe coding, and AI content creation for business owners and executive teams.",
        provider: { "@id": "https://portcitysocialmedia.com/#organization" },
        serviceType: "AI Training",
        areaServed: "North Carolina",
        offers: {
          "@type": "Offer",
          price: "500",
          priceCurrency: "USD",
          description: "2-Hour AI Strategy Consultation",
        },
      },
      {
        "@type": "Service",
        "@id": "https://portcitysocialmedia.com/#digital-marketing",
        name: "Digital Marketing & Content Creation",
        description:
          "AI-powered social media management, content creation, website design using vibe coding, and brand development for North Carolina businesses.",
        provider: { "@id": "https://portcitysocialmedia.com/#organization" },
        serviceType: "Digital Marketing",
        areaServed: "North Carolina",
      },
      {
        "@type": "FAQPage",
        "@id": "https://portcitysocialmedia.com/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "How fast is a launch?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Most single-page builds go live within 7-10 days after content sign-off. Full 6-week transformations include ongoing support and training throughout.",
            },
          },
          {
            "@type": "Question",
            name: "Will AI make my content generic?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. The key to eliminating AI slop is understanding the patterns first, then prompting your AI accordingly. We teach you to engineer prompts that lock in your unique voice and brand identity.",
            },
          },
          {
            "@type": "Question",
            name: "How do you measure results?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We establish clear KPIs during the consultation based on your specific goals—whether that's lead generation, engagement rates, or conversion metrics. We monitor progress throughout the engagement, adjusting strategies to accelerate results.",
            },
          },
        ],
      },
    ],
  }

  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/wave-logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="geo.region" content="US-NC" />
        <meta name="geo.placename" content="Wilmington" />
        <meta name="geo.position" content="34.2257;-77.9447" />
        <meta name="ICBM" content="34.2257, -77.9447" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
