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
      "/images/fpe8g2eqcn.jpg",
    description: "Aménagement intérieur d'un chalet en bois avec cheminée en pierre et mobilier confortable à Val-des-Cimes",
  },
  {
    id: 2,
    title: "Chalet moderne avec garage",
    category: "chalets",
    image:
      "/images/ej9ay5jee6.jpg",
    description:
      "Construction d'un chalet moderne en bois avec éléments en pierre et garage intégré en montagne",
  },
  {
    id: 3,
    title: "Chalet en bois massif hivernal",
    category: "chalets",
    image:
      "/images/t0bhafeffr.jpg",
    description: "Chalet en bois massif dans un paysage enneigé avec vue panoramique sur la montagnes du Val des Cimes",
  },
  {
    id: 4,
    title: "Chalet à ossature bois avec balcons",
    category: "chalets",
    image:
      "/images/ttskfgc6g1.jpg",
    description: "Chalet à ossature bois avec balcons et éléments décoratifs en bois apparents à Val-des-Cimes",
  },
  {
    id: 5,
    title: "Intérieur en bois naturel",
    category: "chalets",
    image:
      "/images/t7avuvcyr0.jpg",
    description: "Détail d'un couloir intérieur en bois naturel avec porte et miroir assortis dans le Val des Cimes",
  },
  {
    id: 6,
    title: "Terrasse avec vue montagne",
    category: "chalets",
    image:
      "/images/t0bhafeffr.jpg",
    description:
      "Terrasse en bois avec garde-corps offrant une vue imprenable sur les montagnes",
  },
  {
    id: 29,
    title: "Charpente en épicéa et terrasse",
    category: "chalets",
    image:
      "/images/thl5oc7qea.jpg",
    description: "Charpente en épicéa avec vue panoramique sur la montagne et espace terrasse avec barbecue à Val-des-Cimes",
  },

  // Extensions category
  {
    id: 7,
    title: "Extension avec espace couvert",
    category: "extensions",
    image: "/images/vfd9mdkcm6.jpg",
    description: "Extension de chalet avec espace couvert multifonctionnel et fondations en pierre dans le Val des Cimes",
  },
  {
    id: 8,
    title: "Chambre lumineuse",
    category: "extensions",
    image:
      "/images/thl5oc7qea.jpg",
    description:
      "Chambre avec grandes baies vitrées offrant une vue sur la nature environnante de montagne",
  },
  {
    id: 9,
    title: "Détails architecturaux",
    category: "extensions",
    image: "/images/fpe8g2eqcn.jpg",
    description: "Détails de construction d'une extension en bois avec balcon et garde-corps à Val-des-Cimes",
  },
  {
    id: 10,
    title: "Extension avec balcon",
    category: "extensions",
    image: "/images/ttskfgc6g1.jpg",
    description: "Vue rapprochée d'une extension avec balcon et toiture traditionnelle dans le Val des Cimes",
  },
  {
    id: 11,
    title: "Espace détente sous combles",
    category: "extensions",
    image:
      "/images/kwrznz6dc6.jpg",
    description:
      "Aménagement d'un espace détente confortable sous les combles d'une extension en montagne",
  },
  {
    id: 12,
    title: "Terrasses et baies vitrées",
    category: "extensions",
    image: "/images/ej9ay5jee6.jpg",
    description: "Terrasses en bois avec grandes baies vitrées pour une connexion parfaite avec l'extérieur à Val-des-Cimes",
  },
  {
    id: 13,
    title: "Vue panoramique",
    category: "extensions",
    image:
      "/images/6kj12uwokq.jpg",
    description:
      "Fenêtre avec vue panoramique sur la montagnes dans une extension alliant pierre et bois dans le Val des Cimes",
  },

  // Menuiseries category
  {
    id: 14,
    title: "Cave à vin sur mesure",
    category: "menuiseries",
    image: "/images/92b513eaf6.jpg",
    description:
      "Cave à vin personnalisée avec rangements en bois, éclairage intégré et comptoir de dégustation en montagne",
  },
  {
    id: 15,
    title: "Espace détente cave à vin",
    category: "menuiseries",
    image: "/images/b535e34284.jpg",
    description: "Espace salon adjacent à la cave à vin avec habillage mural en bois et mobilier assorti à Val-des-Cimes",
  },
  {
    id: 16,
    title: "Escalier et balcon en bois",
    category: "menuiseries",
    image: "/images/a1p0nkkxng.jpg",
    description:
      "Escalier intérieur en bois massif et balcon extérieur avec garde-corps en bois sculpté dans le Val des Cimes",
  },
  {
    id: 17,
    title: "Rangements sur mesure",
    category: "menuiseries",
    image: "/images/kwrznz6dc6.jpg",
    description:
      "Meubles de rangement avec éclairage intégré pour équipements de ski et matériel de montagne dans le Val des Cimes",
  },
  {
    id: 18,
    title: "Habillage cheminée et miroir",
    category: "menuiseries",
    image:
      "/images/e25f284123.jpg",
    description:
      "Habillage de cheminée en bois ancien et miroir avec cadre sculpté en bois massif en montagne",
  },
  {
    id: 19,
    title: "Détail décoratif en vieux bois",
    category: "menuiseries",
    image:
      "/images/zmqnoxqmzo.jpg",
    description: "Détail d'une croix sculptée dans du vieux bois, élément décoratif traditionnel à Val-des-Cimes",
  },
  {
    id: 20,
    title: "Dressing pour équipement de ski",
    category: "menuiseries",
    image: "/images/2963af05ae.jpg",
    description:
      "Dressing fonctionnel avec penderies et étagères pour ranger vêtements et équipements de ski dans le Val des Cimes",
  },
  {
    id: 21,
    title: "Décoration murale en pierre et bois",
    category: "menuiseries",
    image:
      "/images/6kj12uwokq.jpg",
    description:
      "Mur en pierre avec étagère en bois brut et décoration murale, alliance parfaite des matériaux naturels dans le Val des Cimes",
  },

  // Renovations category
  {
    id: 22,
    title: "Cave à vin sur mesure",
    category: "renovations",
    image: "/images/92b513eaf6.jpg",
    description:
      "Rénovation d'un espace sous-sol transformé en cave à vin avec rangements en bois et éclairage intégré en montagne",
  },
  {
    id: 23,
    title: "Espace détente rénové",
    category: "renovations",
    image: "/images/b535e34284.jpg",
    description: "Rénovation d'un espace salon avec habillage mural en bois et mobilier contemporain à Val-des-Cimes",
  },
  {
    id: 24,
    title: "Escalier traditionnel restauré",
    category: "renovations",
    image: "/images/a1p0nkkxng.jpg",
    description: "Restauration d'un escalier en bois massif et rénovation d'un balcon extérieur dans le Val des Cimes",
  },
  {
    id: 25,
    title: "Rénovation cheminée en pierre et bois",
    category: "renovations",
    image:
      "/images/e25f284123.jpg",
    description:
      "Rénovation d'une cheminée avec habillage en bois ancien et création d'un miroir assorti dans le Val des Cimes",
  },
  {
    id: 26,
    title: "Restauration boiseries anciennes",
    category: "renovations",
    image:
      "/images/zmqnoxqmzo.jpg",
    description:
      "Restauration minutieuse de boiseries anciennes avec conservation des motifs traditionnels en montagne",
  },
  {
    id: 27,
    title: "Rénovation intérieure complète",
    category: "renovations",
    image:
      "/images/kwrznz6dc6.jpg",
    description: "Rénovation complète d'un espace sous combles transformé en salon confortable à Val-des-Cimes",
  },
  {
    id: 28,
    title: "Rénovation fenêtre et encadrement",
    category: "renovations",
    image:
      "/images/6kj12uwokq.jpg",
    description: "Rénovation d'une fenêtre avec encadrement en pierre et habillage en bois dans le Val des Cimes",
  },

  // Sauna category
  {
    id: 30,
    title: "Sauna et espace bien-être",
    category: "sauna",
    image: "/images/pl9r5h2kkh.jpg",
    description: "Sauna en bois avec paroi vitrée, mur en pierre et peignoirs à disposition dans le Val des Cimes",
  },
  {
    id: 31,
    title: "Espace spa avec éclairage d'ambiance",
    category: "sauna",
    image: "/images/ypm6vh3fcw.jpg",
    description:
      "Espace spa avec sauna, éclairage LED bleu et finitions en pierre et bois en montagne",
  },
  {
    id: 32,
    title: "Détail traditionnel de sauna",
    category: "sauna",
    image: "/images/zclkduy2cz.jpg",
    description:
      "Détail d'un sauna traditionnel avec bancs en bois et seau d'eau pour l'arrosage des pierres à Val-des-Cimes",
  },
  {
    id: 33,
    title: "Sauna finlandais avec éclairage LED",
    category: "sauna",
    image: "/images/pl9r5h2kkh.jpg",
    description:
      "Sauna finlandais avec porte en vieux bois et banquettes avec éclairage LED bleu d'ambiance dans le Val des Cimes",
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
  const [pageTitle, setPageTitle] = useState("Galerie de réalisations | Cimes & Bois - Val-des-Cimes, Val des Cimes")
  const [pageDescription, setPageDescription] = useState(
    "Découvrez nos réalisations en construction de chalets, extensions et menuiserie en bois à Val-des-Cimes et en montagne. Projets sur mesure par Cimes & Bois.",
  )

  // Update meta title and description when category changes
  useEffect(() => {
    if (selectedCategory === "all") {
      setPageTitle("Galerie de réalisations | Cimes & Bois - Val-des-Cimes, Val des Cimes")
      setPageDescription(
        "Découvrez nos réalisations en construction de chalets, extensions et menuiserie en bois à Val-des-Cimes et en montagne. Projets sur mesure par Cimes & Bois.",
      )
    } else if (selectedCategory === "chalets") {
      setPageTitle("Chalets en Bois | Galerie de réalisations | Cimes & Bois")
      setPageDescription(
        "Découvrez nos réalisations de chalets en bois à Val-des-Cimes et dans le Val des Cimes. Construction traditionnelle et moderne par Cimes & Bois.",
      )
    } else if (selectedCategory === "extensions") {
      setPageTitle("Extensions en Bois | Galerie de réalisations | Cimes & Bois")
      setPageDescription(
        "Découvrez nos réalisations d'extensions en bois à Val-des-Cimes et en montagne. Solutions sur mesure par Cimes & Bois.",
      )
    } else if (selectedCategory === "menuiseries") {
      setPageTitle("Menuiseries | Galerie de réalisations | Cimes & Bois")
      setPageDescription(
        "Découvrez nos réalisations de menuiseries et aménagements intérieurs en bois à Val-des-Cimes et dans le Val des Cimes. Travail artisanal par Cimes & Bois.",
      )
    } else if (selectedCategory === "renovations") {
      setPageTitle("Rénovations | Galerie de réalisations | Cimes & Bois")
      setPageDescription(
        "Découvrez nos réalisations de rénovations en bois à Val-des-Cimes et en montagne. Restauration et modernisation par Cimes & Bois.",
      )
    } else if (selectedCategory === "sauna") {
      setPageTitle("Saunas | Galerie de réalisations | Cimes & Bois")
      setPageDescription(
        "Découvrez nos réalisations de saunas en bois à Val-des-Cimes et dans le Val des Cimes. Espaces bien-être sur mesure par Cimes & Bois.",
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
            name: "Galerie de réalisations Cimes & Bois",
            description:
              "Découvrez nos réalisations en construction de chalets, extensions et menuiserie en bois à Val-des-Cimes et en montagne.",
            image: galleryItems.map((item) => item.image),
            about: {
              "@type": "LocalBusiness",
              name: "Cimes & Bois Construction Bois",
              address: {
                "@type": "PostalAddress",
                streetAddress: "12 chemin des Exemples",
                addressLocality: "Val-des-Cimes",
                postalCode: "00000",
                addressRegion: "montagne",
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
            src="/images/t7avuvcyr0.jpg"
            alt="Galerie de réalisations en bois en montagne"
            fill
            priority
            className="object-cover brightness-[0.7]"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
            <h1 className="animate-fade-in-up mb-6 text-4xl font-bold leading-tight md:text-5xl">
              Nos <span className="text-white">Réalisations</span>
            </h1>
            <p className="animate-fade-in-up animation-delay-300 mb-8 max-w-2xl text-lg md:text-xl">
              Découvrez nos projets récents en construction de chalets, extensions et menuiserie à Val-des-Cimes et dans le
              Val des Cimes
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Category Filter */}
            <div className="mb-12 flex flex-wrap justify-center gap-2" role="group" aria-label="Filtres de la galerie">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-[#7a6e43] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  style={{ borderRadius: "9999px", WebkitBorderRadius: "9999px" }}
                  aria-label={`Filtrer par ${category.name}`}
                  aria-pressed={selectedCategory === category.id}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" role="list" aria-label="Galerie de réalisations">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="group cursor-pointer overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
                  onClick={() => openModal(item.id)}
                  style={{ borderRadius: "0.5rem", WebkitBorderRadius: "0.5rem" }}
                  role="listitem"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault()
                      openModal(item.id)
                    }
                  }}
                  aria-label={`${item.title} - ${item.description}`}
                >
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title + " - Cimes & Bois à Val-des-Cimes"}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-lg font-semibold text-[#4F5960]">{item.title}</h2>
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
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
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
              <X className="h-6 w-6" aria-hidden="true" />
            </button>

            {selectedImage && (
              <div className="flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
                {/* Image container with navigation buttons inside */}
                <div className="relative mb-4 overflow-hidden rounded-t-lg bg-transparent">
                  <img
                    src={galleryItems.find((item) => item.id === selectedImage)?.image || ""}
                    alt={
                      galleryItems.find((item) => item.id === selectedImage)?.title +
                        " - Cimes & Bois en montagne" || ""
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
                    <ChevronLeft className="h-6 w-6" aria-hidden="true" />
                  </button>

                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white transition-all hover:bg-black/70"
                    onClick={nextImage}
                    aria-label="Image suivante"
                    style={{ borderRadius: "9999px", WebkitBorderRadius: "9999px" }}
                  >
                    <ChevronRight className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Description container */}
                <div
                  className="w-full max-w-[90vw] rounded-b-lg bg-white p-4"
                  style={{ borderRadius: "0 0 0.5rem 0.5rem", WebkitBorderRadius: "0 0 0.5rem 0.5rem" }}
                >
                  <h2 id="modal-title" className="text-xl font-semibold text-[#4F5960]">
                    {galleryItems.find((item) => item.id === selectedImage)?.title}
                  </h2>
                  <p id="modal-description" className="text-gray-600">
                    {galleryItems.find((item) => item.id === selectedImage)?.description}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  )
}

