import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import SkipToContent from "@/components/skip-to-content"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Entreprise D'Yen - Construction de chalets en bois dans les Alpes de Haute-Provence",
    template: "%s | Entreprise D'Yen - Colmars, Haut-Verdon",
  },
  description:
    "Entreprise D'Yen, spécialiste depuis 1936 en construction de chalets en bois, extensions, menuiserie et aménagements intérieurs à Colmars dans le Haut-Verdon Val d'Allos (04).",
  keywords: [
    "chalets bois",
    "construction bois",
    "menuiserie",
    "extensions bois",
    "Colmars",
    "Haut-Verdon",
    "Val d'Allos",
    "Alpes de Haute-Provence",
    "04",
    "charpente",
    "rénovation",
    "aménagement intérieur",
    "sauna",
  ],
  authors: [{ name: "Entreprise D'Yen" }],
  creator: "Entreprise D'Yen",
  publisher: "Entreprise D'Yen",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://entreprise-dyen.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Entreprise D'Yen - Construction de chalets en bois dans les Alpes de Haute-Provence",
    description:
      "Spécialiste depuis 1936 en construction de chalets en bois, extensions, menuiserie et aménagements intérieurs à Colmars dans le Haut-Verdon Val d'Allos (04).",
    url: "https://entreprise-dyen.vercel.app",
    siteName: "Entreprise D'Yen",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chalet_lake-0vQnXzkFRGZaH8TQova9Rr1VDWEwwX.jpeg",
        width: 1200,
        height: 630,
        alt: "Chalet en bois par Entreprise D'Yen dans le Haut-Verdon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Entreprise D'Yen - Construction de chalets en bois dans les Alpes de Haute-Provence",
    description:
      "Spécialiste depuis 1936 en construction de chalets en bois, extensions, menuiserie et aménagements intérieurs à Colmars dans le Haut-Verdon Val d'Allos (04).",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chalet_lake-0vQnXzkFRGZaH8TQova9Rr1VDWEwwX.jpeg"],
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
      </body>
    </html>
  )
}



import './globals.css'