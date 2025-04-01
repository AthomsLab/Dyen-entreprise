"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import Script from "next/script"
import Head from "next/head"

// Gallery data
const galleryItems = [
  // Chalets category
  {
    id: 1,
    title: "Intérieur chalet en bois",
    category: "chalets",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chaletOssatureBois4.jpg-YYIiZudRBnNfzNQBVg5R2zGUhT4GKP.jpeg",
    description: "Aménagement intérieur d'un chalet en bois avec cheminée en pierre et mobilier confortable à Colmars",
  },
  {
    id: 2,
    title: "Chalet moderne avec garage",
    category: "chalets",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chaletOssatureBois2.jpg-n1NP9lH9zrp8nVepyH20ICCC0VXwnB.jpeg",
    description:
      "Construction d'un chalet moderne en bois avec éléments en pierre et garage intégré dans les Alpes de Haute-Provence",
  },
  {
    id: 3,
    title: "Chalet en bois massif hivernal",
    category: "chalets",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chaletBoisMassif.jpg-Gn4DUb8OsIAKRMsJiFBA9wXGRugFAD.jpeg",
    description: "Chalet en bois massif dans un paysage enneigé avec vue panoramique sur les montagnes du Haut-Verdon",
  },
  {
    id: 4,
    title: "Chalet à ossature bois avec balcons",
    category: "chalets",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chaletOssatureBois3.jpg-SF794eXmmplGl3TzX9Qg7gB6jEUoku.jpeg",
    description: "Chalet à ossature bois avec balcons et éléments décoratifs en bois apparents à Colmars",
  },
  {
    id: 5,
    title: "Intérieur en bois naturel",
    category: "chalets",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chaletOssatureBois5.jpg-ob9zlS9lyRoGHeQOBwnr8Ths0aAOtD.jpeg",
    description: "Détail d'un couloir intérieur en bois naturel avec porte et miroir assortis dans le Val d'Allos",
  },
  {
    id: 6,
    title: "Terrasse avec vue montagne",
    category: "chalets",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chaletOssatureBois.jpg-1Re5cEMrg7NtWN6E4yVTQpXlR0xQkA.jpeg",
    description:
      "Terrasse en bois avec garde-corps offrant une vue imprenable sur les montagnes des Alpes de Haute-Provence",
  },
  {
    id: 29,
    title: "Charpente en épicéa et terrasse",
    category: "chalets",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/charpenteEpicea.jpg-GzoLkDXqK1EgRBV1uAoRLarcDFy66v.jpeg",
    description: "Charpente en épicéa avec vue panoramique sur la montagne et espace terrasse avec barbecue à Colmars",
  },

  // Extensions category
  {
    id: 7,
    title: "Extension avec espace couvert",
    category: "extensions",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/extension3.jpg-H0cgQoBSKagpxEKTq04rpXjzSicZf4.jpeg",
    description: "Extension de chalet avec espace couvert multifonctionnel et fondations en pierre dans le Haut-Verdon",
  },
  {
    id: 8,
    title: "Chambre lumineuse",
    category: "extensions",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/interieurExtensionChalet.jpg-4zKIZIZErMcR1caaKKUMkSusJ5KycR.jpeg",
    description:
      "Chambre avec grandes baies vitrées offrant une vue sur la nature environnante des Alpes de Haute-Provence",
  },
  {
    id: 9,
    title: "Détails architecturaux",
    category: "extensions",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/extension4.jpg-EbnTUpQf5N60dz9OapxJet2WKlEXoJ.jpeg",
    description: "Détails de construction d'une extension en bois avec balcon et garde-corps à Colmars",
  },
  {
    id: 10,
    title: "Extension avec balcon",
    category: "extensions",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/extension.jpg-09V1nNbpPWFHi5lMn84odLq4QaPydx.jpeg",
    description: "Vue rapprochée d'une extension avec balcon et toiture traditionnelle dans le Val d'Allos",
  },
  {
    id: 11,
    title: "Espace détente sous combles",
    category: "extensions",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/interieurExtensionChalet2.jpg-aBRhgZj2Ygdgokv5LRXmy6vF4ykM5U.jpeg",
    description:
      "Aménagement d'un espace détente confortable sous les combles d'une extension dans les Alpes de Haute-Provence",
  },
  {
    id: 12,
    title: "Terrasses et baies vitrées",
    category: "extensions",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/extension2.jpg-GWDJKeJCEc4JjXAaw1mION65hyu1o2.jpeg",
    description: "Terrasses en bois avec grandes baies vitrées pour une connexion parfaite avec l'extérieur à Colmars",
  },
  {
    id: 13,
    title: "Vue panoramique",
    category: "extensions",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/interieurExtensionChalet3.jpg-FPICnHWSzWHTCsxlSObipnugyCLEJS.jpeg",
    description:
      "Fenêtre avec vue panoramique sur les montagnes dans une extension alliant pierre et bois dans le Haut-Verdon",
  },

  // Menuiseries category
  {
    id: 14,
    title: "Cave à vin sur mesure",
    category: "menuiseries",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/caveAVin2.jpg-eEZ432mQIww3iQLtL8GJL35wNe45w9.jpeg",
    description:
      "Cave à vin personnalisée avec rangements en bois, éclairage intégré et comptoir de dégustation dans les Alpes de Haute-Provence",
  },
  {
    id: 15,
    title: "Espace détente cave à vin",
    category: "menuiseries",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/caveAVin.jpg-X56hEBg7LfaZhQinenVgmV1sD7d6Nc.jpeg",
    description: "Espace salon adjacent à la cave à vin avec habillage mural en bois et mobilier assorti à Colmars",
  },
  {
    id: 16,
    title: "Escalier et balcon en bois",
    category: "menuiseries",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/escalier.jpg-I8NZqlbgR0pKxDxI0cQLuDJUtEbEqu.jpeg",
    description:
      "Escalier intérieur en bois massif et balcon extérieur avec garde-corps en bois sculpté dans le Val d'Allos",
  },
  {
    id: 17,
    title: "Rangements sur mesure",
    category: "menuiseries",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/skiroom2.jpg-NZMFYA5MSnaYZPfzqiFlYGsYNDgPzm.jpeg",
    description:
      "Meubles de rangement avec éclairage intégré pour équipements de ski et matériel de montagne dans le Haut-Verdon",
  },
  {
    id: 18,
    title: "Habillage cheminée et miroir",
    category: "menuiseries",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/habillageCheminee.jpg-nV13Bmjgnx8WnqQwo965cFLMnUy4j5.jpeg",
    description:
      "Habillage de cheminée en bois ancien et miroir avec cadre sculpté en bois massif dans les Alpes de Haute-Provence",
  },
  {
    id: 19,
    title: "Détail décoratif en vieux bois",
    category: "menuiseries",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/decoVieuxBois.jpg-zzIZfNkumCZHxM8mLPsDes1CTfHmnq.jpeg",
    description: "Détail d'une croix sculptée dans du vieux bois, élément décoratif traditionnel à Colmars",
  },
  {
    id: 20,
    title: "Dressing pour équipement de ski",
    category: "menuiseries",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/skiroom.jpg-uVRrJPejTgrr6cPLGBUjlAd6D1Tgtc.jpeg",
    description:
      "Dressing fonctionnel avec penderies et étagères pour ranger vêtements et équipements de ski dans le Val d'Allos",
  },
  {
    id: 21,
    title: "Décoration murale en pierre et bois",
    category: "menuiseries",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/decoInterieure.jpg-r1TljPDoootSItVaPUKTvbSve6hQCu.jpeg",
    description:
      "Mur en pierre avec étagère en bois brut et décoration murale, alliance parfaite des matériaux naturels dans le Haut-Verdon",
  },

  // Renovations category
  {
    id: 22,
    title: "Cave à vin sur mesure",
    category: "renovations",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/caveAVin2.jpg-eEZ432mQIww3iQLtL8GJL35wNe45w9.jpeg",
    description:
      "Rénovation d'un espace sous-sol transformé en cave à vin avec rangements en bois et éclairage intégré dans les Alpes de Haute-Provence",
  },
  {
    id: 23,
    title: "Espace détente rénové",
    category: "renovations",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/caveAVin.jpg-X56hEBg7LfaZhQinenVgmV1sD7d6Nc.jpeg",
    description: "Rénovation d'un espace salon avec habillage mural en bois et mobilier contemporain à Colmars",
  },
  {
    id: 24,
    title: "Escalier traditionnel restauré",
    category: "renovations",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/escalier.jpg-I8NZqlbgR0pKxDxI0cQLuDJUtEbEqu.jpeg",
    description: "Restauration d'un escalier en bois massif et rénovation d'un balcon extérieur dans le Val d'Allos",
  },
  {
    id: 25,
    title: "Rénovation cheminée en pierre et bois",
    category: "renovations",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/habillageCheminee.jpg-nV13Bmjgnx8WnqQwo965cFLMnUy4j5.jpeg",
    description:
      "Rénovation d'une cheminée avec habillage en bois ancien et création d'un miroir assorti dans le Haut-Verdon",
  },
  {
    id: 26,
    title: "Restauration boiseries anciennes",
    category: "renovations",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/decoVieuxBois.jpg-zzIZfNkumCZHxM8mLPsDes1CTfHmnq.jpeg",
    description:
      "Restauration minutieuse de boiseries anciennes avec conservation des motifs traditionnels dans les Alpes de Haute-Provence",
  },
  {
    id: 27,
    title: "Rénovation intérieure complète",
    category: "renovations",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/interieurExtensionChalet2.jpg-aBRhgZj2Ygdgokv5LRXmy6vF4ykM5U.jpeg",
    description: "Rénovation complète d'un espace sous combles transformé en salon confortable à Colmars",
  },
  {
    id: 28,
    title: "Rénovation fenêtre et encadrement",
    category: "renovations",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/interieurExtensionChalet3.jpg-FPICnHWSzWHTCsxlSObipnugyCLEJS.jpeg",
    description: "Rénovation d'une fenêtre avec encadrement en pierre et habillage en bois dans le Val d'Allos",
  },

  // Sauna category
  {
    id: 30,
    title: "Sauna et espace bien-être",
    category: "sauna",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/saunaSpa.jpg-C7DsaaOcPsLmVjprvWxxPnRDNzUDQG.jpeg",
    description: "Sauna en bois avec paroi vitrée, mur en pierre et peignoirs à disposition dans le Haut-Verdon",
  },
  {
    id: 31,
    title: "Espace spa avec éclairage d'ambiance",
    category: "sauna",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/saunaSpa2.jpg-xskoRcf4Nub7YjaU0TyVRT1N5DpSGk.jpeg",
    description:
      "Espace spa avec sauna, éclairage LED bleu et finitions en pierre et bois dans les Alpes de Haute-Provence",
  },
  {
    id: 32,
    title: "Détail traditionnel de sauna",
    category: "sauna",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sauna2.jpg-K3pVlOimDApWLB63xxCT82gEJevH9Q.jpeg",
    description:
      "Détail d'un sauna traditionnel avec bancs en bois et seau d'eau pour l'arrosage des pierres à Colmars",
  },
  {
    id: 33,
    title: "Sauna finlandais avec éclairage LED",
    category: "sauna",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sauna.jpg-ff9unpeXKYyIU1TyvAqY0FKytTJ2OW.jpeg",
    description:
      "Sauna finlandais avec porte en vieux bois et banquettes avec éclairage LED bleu d'ambiance dans le Val d'Allos",
  },
]

// Categories for filtering
const categories = [
  { id: "all", name: "Tous les projets" },
  { id: "chalets", name: "Chalets" },
  { id: "extensions", name: "Extensions" },
  { id: "menuiseries", name: "Menuiseries" },
  { id: "renovations", name: "Rénovations" },
  { id: "sauna", name: "Sauna" },
]

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [pageTitle, setPageTitle] = useState("Galerie de réalisations | Entreprise D'Yen - Colmars, Haut-Verdon")
  const [pageDescription, setPageDescription] = useState(
    "Découvrez nos réalisations en construction de chalets, extensions et menuiserie en bois à Colmars et dans les Alpes de Haute-Provence. Projets sur mesure par Entreprise D'Yen.",
  )

  // Update meta title and description when category changes
  useEffect(() => {
    if (selectedCategory === "all") {
      setPageTitle("Galerie de réalisations | Entreprise D'Yen - Colmars, Haut-Verdon")
      setPageDescription(
        "Découvrez nos réalisations en construction de chalets, extensions et menuiserie en bois à Colmars et dans les Alpes de Haute-Provence. Projets sur mesure par Entreprise D'Yen.",
      )
    } else if (selectedCategory === "chalets") {
      setPageTitle("Chalets en Bois | Galerie de réalisations | Entreprise D'Yen")
      setPageDescription(
        "Découvrez nos réalisations de chalets en bois à Colmars et dans le Haut-Verdon Val d'Allos. Construction traditionnelle et moderne par Entreprise D'Yen.",
      )
    } else if (selectedCategory === "extensions") {
      setPageTitle("Extensions en Bois | Galerie de réalisations | Entreprise D'Yen")
      setPageDescription(
        "Découvrez nos réalisations d'extensions en bois à Colmars et dans les Alpes de Haute-Provence. Solutions sur mesure par Entreprise D'Yen.",
      )
    } else if (selectedCategory === "menuiseries") {
      setPageTitle("Menuiseries | Galerie de réalisations | Entreprise D'Yen")
      setPageDescription(
        "Découvrez nos réalisations de menuiseries et aménagements intérieurs en bois à Colmars et dans le Haut-Verdon. Travail artisanal par Entreprise D'Yen.",
      )
    } else if (selectedCategory === "renovations") {
      setPageTitle("Rénovations | Galerie de réalisations | Entreprise D'Yen")
      setPageDescription(
        "Découvrez nos réalisations de rénovations en bois à Colmars et dans les Alpes de Haute-Provence. Restauration et modernisation par Entreprise D'Yen.",
      )
    } else if (selectedCategory === "sauna") {
      setPageTitle("Saunas | Galerie de réalisations | Entreprise D'Yen")
      setPageDescription(
        "Découvrez nos réalisations de saunas en bois à Colmars et dans le Haut-Verdon Val d'Allos. Espaces bien-être sur mesure par Entreprise D'Yen.",
      )
    }
  }, [selectedCategory])

  // Filter gallery items based on selected category
  const filteredItems =
    selectedCategory === "all" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  // Open image in modal
  const openModal = (id: number) => {
    setSelectedImage(id)
    document.body.style.overflow = "hidden"
  }

  // Close modal
  const closeModal = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto"
  }

  // Navigate to previous image
  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedImage === null) return

    const currentIndex = filteredItems.findIndex((item) => item.id === selectedImage)
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length
    setSelectedImage(filteredItems[prevIndex].id)
  }

  // Navigate to next image
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedImage === null) return

    const currentIndex = filteredItems.findIndex((item) => item.id === selectedImage)
    const nextIndex = (currentIndex + 1) % filteredItems.length
    setSelectedImage(filteredItems[nextIndex].id)
  }

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault()
      if (selectedImage === null) return
      const currentIndex = filteredItems.findIndex((item) => item.id === selectedImage)
      const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length
      setSelectedImage(filteredItems[prevIndex].id)
    }
    if (e.key === "ArrowRight") {
      e.preventDefault()
      if (selectedImage === null) return
      const currentIndex = filteredItems.findIndex((item) => item.id === selectedImage)
      const nextIndex = (currentIndex + 1) % filteredItems.length
      setSelectedImage(filteredItems[nextIndex].id)
    }
    if (e.key === "Escape") closeModal()
  }

  return (
    <>
      <Script
        id="schema-gallery"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            name: "Galerie de réalisations Entreprise D'Yen",
            description:
              "Découvrez nos réalisations en construction de chalets, extensions et menuiserie en bois à Colmars et dans les Alpes de Haute-Provence.",
            image: galleryItems.map((item) => item.image),
            about: {
              "@type": "LocalBusiness",
              name: "Entreprise D'Yen Construction Bois",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Chemin de la Cascade",
                addressLocality: "Colmars",
                postalCode: "04370",
                addressRegion: "Alpes de Haute-Provence",
                addressCountry: "FR",
              },
            },
          }),
        }}
      />

      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>

      <div className="flex flex-col">
        {/* Hero Section */}
        <section className="relative h-[40vh] w-full">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fakeChalet-min-QeBThwPMwwIfsg0vueIkLs7IxQqaIF.jpeg"
            alt="Galerie de réalisations en bois dans les Alpes de Haute-Provence"
            fill
            priority
            className="object-cover brightness-[0.7]"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
            <h1 className="animate-fade-in-up mb-6 text-4xl font-bold leading-tight md:text-5xl">
              Nos <span className="text-white">Réalisations</span>
            </h1>
            <p className="animate-fade-in-up animation-delay-300 mb-8 max-w-2xl text-lg md:text-xl">
              Découvrez nos projets récents en construction de chalets, extensions et menuiserie à Colmars et dans le
              Haut-Verdon
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Category Filter */}
            <div className="mb-12 flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-[#A59765] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  style={{ borderRadius: "9999px", WebkitBorderRadius: "9999px" }}
                  aria-label={`Filtrer par ${category.name}`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="group cursor-pointer overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
                  onClick={() => openModal(item.id)}
                  style={{ borderRadius: "0.5rem", WebkitBorderRadius: "0.5rem" }}
                >
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title + " - Entreprise D'Yen à Colmars"}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-[#4F5960]">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Image Modal - Completely redesigned */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={closeModal}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <button
              className="absolute right-4 top-4 rounded-full bg-black/50 p-2 text-white transition-all hover:bg-black/70"
              onClick={(e) => {
                e.stopPropagation()
                closeModal()
              }}
              style={{ borderRadius: "9999px", WebkitBorderRadius: "9999px" }}
              aria-label="Fermer la galerie"
            >
              <X className="h-6 w-6" />
            </button>

            {selectedImage && (
              <div className="flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
                {/* Image container with navigation buttons inside */}
                <div className="relative mb-4 overflow-hidden rounded-t-lg bg-transparent">
                  <img
                    src={galleryItems.find((item) => item.id === selectedImage)?.image || ""}
                    alt={
                      galleryItems.find((item) => item.id === selectedImage)?.title +
                        " - Entreprise D'Yen dans les Alpes de Haute-Provence" || ""
                    }
                    className="max-h-[75vh] max-w-[90vw] object-contain"
                  />

                  {/* Navigation buttons inside the image container */}
                  <button
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white transition-all hover:bg-black/70"
                    onClick={prevImage}
                    aria-label="Image précédente"
                    style={{ borderRadius: "9999px", WebkitBorderRadius: "9999px" }}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>

                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white transition-all hover:bg-black/70"
                    onClick={nextImage}
                    aria-label="Image suivante"
                    style={{ borderRadius: "9999px", WebkitBorderRadius: "9999px" }}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>

                {/* Description container */}
                <div
                  className="w-full max-w-[90vw] rounded-b-lg bg-white p-4"
                  style={{ borderRadius: "0 0 0.5rem 0.5rem", WebkitBorderRadius: "0 0 0.5rem 0.5rem" }}
                >
                  <h3 className="text-xl font-semibold text-[#4F5960]">
                    {galleryItems.find((item) => item.id === selectedImage)?.title}
                  </h3>
                  <p className="text-gray-600">{galleryItems.find((item) => item.id === selectedImage)?.description}</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  )
}

