import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import Script from "next/script"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Menuiserie & Aménagements Intérieurs | Val-des-Cimes - Val des Cimes",
  description:
    "Menuiserie sur mesure et aménagements intérieurs en bois à Val-des-Cimes et en montagne. Matériaux nobles et finitions soignées par Cimes & Bois.",
  alternates: {
    canonical: "/carpentry",
  },
}

export default function Carpentry() {
  return (
    <>
      <Script
        id="schema-carpentry"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Menuiserie et aménagements intérieurs",
            provider: {
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
            description:
              "Menuiserie sur mesure et aménagements intérieurs en bois à Val-des-Cimes et en montagne. Matériaux nobles et finitions soignées.",
            areaServed: ["Val-des-Cimes", "Val des Cimes", "Val des Cimes", "montagne"],
            serviceType: ["Menuiserie extérieure", "Menuiserie intérieure", "Aménagements sur mesure", "Rénovation"],
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
              priceSpecification: {
                "@type": "PriceSpecification",
                priceCurrency: "EUR",
              },
            },
          }),
        }}
      />

      <div className="flex flex-col">
        {/* Hero Section */}
        <section className="relative h-[60vh] w-full">
          <Image
            src="/images/2963af05ae.jpg"
            alt="Menuiserie et aménagements intérieurs en bois en montagne"
            fill
            priority
            className="object-cover brightness-[0.7]"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
            <h1 className="animate-fade-in-up mb-6 text-4xl font-bold leading-tight md:text-5xl">
              Menuiserie & <span className="text-white">Aménagements Intérieurs</span>
            </h1>
            <p className="animate-fade-in-up animation-delay-300 mb-8 max-w-2xl text-lg md:text-xl">
              Des solutions sur mesure pour sublimer votre intérieur et extérieur à Val-des-Cimes et dans le Val des Cimes
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
              <div className="lg:w-1/2">
                <h2 className="mb-6 text-3xl font-bold text-[#4F5960] md:text-4xl">
                  Notre Expertise en <span className="text-[#7a6e43]">Menuiserie</span>
                </h2>
                <p className="mb-6 text-lg text-gray-700">
                  CIMES & BOIS intervient dans le domaine de la menuiserie extérieure (Bois, Alu, PVC) à
                  Val-des-Cimes et en montagne. Nous avons comme priorité le choix de produits de qualité
                  et leur mise en œuvre soignée afin d'atteindre des performances énergétiques en accord avec les normes
                  en vigueur.
                </p>

                <div className="mb-8 space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#7a6e43]" />
                    <div>
                      <h3 className="text-lg font-semibold text-[#4F5960]">Menuiserie extérieure</h3>
                      <p className="text-gray-600">
                        Fenêtres, portes, volets, pergolas, terrasses en bois dans le Val des Cimes
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#7a6e43]" />
                    <div>
                      <h3 className="text-lg font-semibold text-[#4F5960]">Menuiserie intérieure</h3>
                      <p className="text-gray-600">
                        Portes, escaliers, parquets, plafonds, cloisons adaptés au style montagnard
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#7a6e43]" />
                    <div>
                      <h3 className="text-lg font-semibold text-[#4F5960]">Aménagements sur mesure</h3>
                      <p className="text-gray-600">
                        Placards, dressings, bibliothèques, meubles intégrés pour votre habitat en montagne
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#7a6e43]" />
                    <div>
                      <h3 className="text-lg font-semibold text-[#4F5960]">Rénovation</h3>
                      <p className="text-gray-600">
                        Restauration de menuiseries anciennes, adaptation aux normes actuelles pour les chalets du
                        Val des Cimes
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#7a6e43] px-6 py-3 text-lg font-medium text-white transition-all duration-300 hover:bg-[#665c37] hover:shadow-lg"
                  aria-label="Demander un devis pour vos travaux de menuiserie à Val-des-Cimes"
                >
                  Demander un devis
                  <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="lg:w-1/2">
                <div className="overflow-hidden rounded-xl shadow-xl">
                  <Image
                    src="/images/a1p0nkkxng.jpg"
                    alt="Travaux de menuiserie en bois en montagne"
                    width={600}
                    height={400}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interior Fittings Section */}
        <section className="bg-[#f8f7f4] py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col gap-12 lg:flex-row-reverse lg:items-center">
              <div className="lg:w-1/2">
                <h2 className="mb-6 text-3xl font-bold text-[#4F5960] md:text-4xl">
                  <span className="text-[#7a6e43]">Aménagements</span> Intérieurs
                </h2>
                <p className="mb-6 text-lg text-gray-700">
                  Nous réalisons également des agencements en bois afin de parfaire vos intérieurs à Val-des-Cimes et dans le
                  Val des Cimes. En effet, nous mettons l'accent sur l'utilisation de matériaux nobles tels que le mélèze,
                  le vieux bois, le bois thermo-chauffé, etc. Allier modernité et tradition est notre souhait afin de
                  réaliser vos projets « Sur-mesure » en montagne.
                </p>

                <div className="mb-8 space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#7a6e43]" />
                    <div>
                      <h3 className="text-lg font-semibold text-[#4F5960]">Matériaux nobles</h3>
                      <p className="text-gray-600">
                        Utilisation de mélèze, vieux bois, bois thermo-chauffé pour des finitions de qualité dans le Val des Cimes
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#7a6e43]" />
                    <div>
                      <h3 className="text-lg font-semibold text-[#4F5960]">Alliance tradition et modernité</h3>
                      <p className="text-gray-600">
                        Des créations qui respectent le patrimoine tout en intégrant des éléments contemporains,
                        parfaits pour les chalets de montagne
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#7a6e43]" />
                    <div>
                      <h3 className="text-lg font-semibold text-[#4F5960]">Projets sur-mesure</h3>
                      <p className="text-gray-600">
                        Chaque réalisation est unique et adaptée à vos besoins spécifiques en montagne
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#7a6e43]" />
                    <div>
                      <h3 className="text-lg font-semibold text-[#4F5960]">Finitions soignées</h3>
                      <p className="text-gray-600">
                        Attention particulière aux détails pour un résultat impeccable, adapté aux exigences des
                        habitations du Val des Cimes
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#7a6e43] px-6 py-3 text-lg font-medium text-white transition-all duration-300 hover:bg-[#665c37] hover:shadow-lg"
                  aria-label="Demander un devis pour vos aménagements intérieurs en montagne"
                >
                  Demander un devis
                  <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="lg:w-1/2">
                <div className="overflow-hidden rounded-xl shadow-xl">
                  <Image
                    src="/images/b535e34284.jpg"
                    alt="Aménagement intérieur en bois à Val-des-Cimes dans le Val des Cimes"
                    width={600}
                    height={400}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-[#4F5960] md:text-4xl">
              Nos <span className="text-[#7a6e43]">Réalisations</span>
            </h2>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="group overflow-hidden rounded-lg">
                <Image
                  src="/images/2963af05ae.jpg"
                  alt="Dressing pour équipement de ski sur mesure dans le Val des Cimes"
                  width={400}
                  height={300}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="group overflow-hidden rounded-lg">
                <Image
                  src="/images/e25f284123.jpg"
                  alt="Habillage cheminée et miroir en bois en montagne"
                  width={400}
                  height={300}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="group overflow-hidden rounded-lg">
                <Image
                  src="/images/zmqnoxqmzo.jpg"
                  alt="Détail décoratif en vieux bois à Val-des-Cimes"
                  width={400}
                  height={300}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="group overflow-hidden rounded-lg">
                <Image
                  src="/images/92b513eaf6.jpg"
                  alt="Cave à vin sur mesure en bois dans le Val des Cimes"
                  width={400}
                  height={300}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="group overflow-hidden rounded-lg">
                <Image
                  src="/images/6kj12uwokq.jpg"
                  alt="Décoration murale en pierre et bois en montagne"
                  width={400}
                  height={300}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="group overflow-hidden rounded-lg">
                <Image
                  src="/images/kwrznz6dc6.jpg"
                  alt="Rangements sur mesure en bois à Val-des-Cimes"
                  width={400}
                  height={300}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="mt-12 flex justify-center">
              <Link
                href="/gallery"
                className="group flex items-center gap-2 rounded-full border-2 border-[#A59765] px-6 py-3 text-lg font-medium text-[#7a6e43] transition-all duration-300 hover:bg-[#7a6e43] hover:text-white"
                aria-label="Voir toutes nos réalisations de menuiserie dans le Val des Cimes"
              >
                Voir toutes nos réalisations
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#4F5960] py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
              Un projet de menuiserie ou d'aménagement en montagne ?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
              Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé pour vos travaux à Val-des-Cimes et
              dans le Val des Cimes.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[#7a6e43] px-8 py-4 text-lg font-medium text-white transition-all duration-300 hover:bg-[#665c37] hover:shadow-lg"
              aria-label="Nous contacter pour votre projet de menuiserie dans le Val des Cimes"
            >
              Nous contacter
              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}

