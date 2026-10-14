import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import ScrollReveal from "@/components/scroll-reveal"
import Footer from "@/components/footer"
import SkipToContent from "@/components/skip-to-content"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Cimes & Bois - Construction de chalets en bois en montagne",
    template: "%s | Cimes & Bois - Val-des-Cimes, Val des Cimes",
  },
  description:
    "Cimes & Bois, spécialiste depuis 1936 en construction de chalets en bois, extensions, menuiserie et aménagements intérieurs à Val-des-Cimes dans le Val des Cimes.",
  keywords: [
    "chalets bois",
    "construction bois",
    "menuiserie",
    "extensions bois",
    "Val-des-Cimes",
    "Val des Cimes",
    "Val des Cimes",
    "montagne",
    "04",
    "charpente",
    "rénovation",
    "aménagement intérieur",
    "sauna",
  ],
  authors: [{ name: "Cimes & Bois" }],
  creator: "Cimes & Bois",
  publisher: "Cimes & Bois",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://cimes-et-bois.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Cimes & Bois - Construction de chalets en bois en montagne",
    description:
      "Spécialiste depuis 1936 en construction de chalets en bois, extensions, menuiserie et aménagements intérieurs à Val-des-Cimes dans le Val des Cimes.",
    url: "https://cimes-et-bois.vercel.app",
    siteName: "Cimes & Bois",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/kdqnvqnbyd.jpg",
        width: 1200,
        height: 630,
        alt: "Chalet en bois par Cimes & Bois dans le Val des Cimes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cimes & Bois - Construction de chalets en bois en montagne",
    description:
      "Spécialiste depuis 1936 en construction de chalets en bois, extensions, menuiserie et aménagements intérieurs à Val-des-Cimes dans le Val des Cimes.",
    images: ["/images/kdqnvqnbyd.jpg"],
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
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  verification: {
    // À remplir si vous avez des codes de vérification
    // google: 'votre-code-google',
    // yandex: 'votre-code-yandex',
  },
  category: "construction",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <SkipToContent />
        <Header />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  )
}



import './globals.css'