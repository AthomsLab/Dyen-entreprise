import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import Script from "next/script"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Chalets en Bois & Extensions | Construction dans le Val des Cimes",
  description:
    "Construction de chalets en bois et extensions sur mesure à Val-des-Cimes et en montagne. Solutions écologiques et personnalisées par Cimes & Bois.",
  alternates: {
    canonical: "/chalets",
  },
}

export default function Chalets() {
  return (
    <>
      <Script
        id="schema-chalets"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Construction de chalets en bois et extensions",
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
              "Construction de chalets en bois et extensions sur mesure à Val-des-Cimes et en montagne. Solutions écologiques et personnalisées.",
            areaServed: ["Val-des-Cimes", "Val des Cimes", "Val des Cimes", "montagne"],
            serviceType: ["Construction de chalets", "Extensions en bois", "Charpente"],
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
            src="/images/fpe8g2eqcn.jpg"
            alt="Chalets en bois et extensions en montagne"
            fill
            priority
            className="object-cover brightness-[0.7]"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
            <h1 className="animate-fade-in-up mb-6 text-4xl font-bold leading-tight md:text-5xl">
              Chalets en Bois & <span className="text-[#A59765]">Extensions</span>
            </h1>
            <p className="animate-fade-in-up animation-delay-300 mb-8 max-w-2xl text-lg md:text-xl">
              Des solutions sur mesure pour créer ou agrandir votre espace de vie à Val-des-Cimes et dans le Val des Cimes
            </p>
          </div>
        </section>

        {/* Wooden Chalets Section */}
        <section id="wooden-chalets" className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
              <div className="lg:w-1/2">
                <h2 className="mb-6 text-3xl font-bold text-[#4F5960] md:text-4xl">
                  Chalets en <span className="text-[#A59765]">Bois</span>
                </h2>
                <p className="mb-6 text-lg text-gray-700">
                  Notre entreprise vous propose ses services dans la conception et la réalisation de chalets en bois
                  en montagne. La construction en bois compte de nombreux avantages que nous
                  mettons à votre service pour des réalisations durables et personnalisées.
                </p>

                <div className="mb-8 space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#A59765]" />
                    <div>
                      <h3 className="text-lg font-semibold text-[#4F5960]">Matériau pur et écologique</h3>
                      <p className="text-gray-600">
                        Le bois, un choix naturel et respectueux de l'environnement pour vos constructions dans le
                        Val des Cimes
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#A59765]" />
                    <div>
                      <h3 className="text-lg font-semibold text-[#4F5960]">Grandes possibilités architecturales</h3>
                      <p className="text-gray-600">
                        Designs contemporains ou traditionnels selon vos préférences, adaptés au style alpin
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#A59765]" />
                    <div>
                      <h3 className="text-lg font-semibold text-[#4F5960]">Performances énergétiques optimales</h3>
                      <p className="text-gray-600">
                        Excellente isolation thermique pour un confort optimal dans le climat montagnard du Val des Cimes
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#A59765]" />
                    <div>
                      <h3 className="text-lg font-semibold text-[#4F5960]">Rapidité d'exécution</h3>
                      <p className="text-gray-600">
                        Délais de construction réduits par rapport aux méthodes traditionnelles, idéal pour les projets
                        à Val-des-Cimes
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#A59765]" />
                    <div>
                      <h3 className="text-lg font-semibold text-[#4F5960]">Accompagnement administratif</h3>
                      <p className="text-gray-600">
                        Assistance dans les démarches administratives et coordination des différents corps de métiers
                        pour un « esprit libre » en montagne
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#A59765] px-6 py-3 text-lg font-medium text-white transition-all duration-300 hover:bg-[#8a7d53] hover:shadow-lg"
                  aria-label="Demander un devis pour votre chalet en bois dans le Val des Cimes"
                >
                  Demander un devis
                  <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="lg:w-1/2">
                <div className="overflow-hidden rounded-xl shadow-xl">
                  <Image
                    src="/images/ttskfgc6g1.jpg"
                    alt="Chalet en bois à Val-des-Cimes en montagne"
                    width={600}
                    height={400}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Extensions Section */}
        <section id="extensions" className="bg-[#f8f7f4] py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col gap-12 lg:flex-row-reverse lg:items-center">
              <div className="lg:w-1/2">
                <h2 className="mb-6 text-3xl font-bold text-[#4F5960] md:text-4xl">
                  <span className="text-[#A59765]">Extensions</span> de Maison
                </h2>
                <p className="mb-6 text-lg text-gray-700">
                  Envie d'agrandir votre maison dans le Val des Cimes ? L'extension bois est la solution idéale pour
                  diverses raisons. Nous intervenons également pour la rénovation ou l'amélioration de votre Charpente /
                  Couverture en montagne.
                </p>

                <div className="mb-8 space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#A59765]" />
                    <div>
                      <h3 className="text-lg font-semibold text-[#4F5960]">Légèreté de la construction bois</h3>
                      <p className="text-gray-600">
                        Fondations simplifiées et impact minimal sur votre terrain à Val-des-Cimes et dans le Val des Cimes
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#A59765]" />
                    <div>
                      <h3 className="text-lg font-semibold text-[#4F5960]">
                        Grande capacité d'intégration à l'existant
                      </h3>
                      <p className="text-gray-600">
                        Design adapté pour une continuité parfaite avec votre habitation en montagne
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#A59765]" />
                    <div>
                      <h3 className="text-lg font-semibold text-[#4F5960]">Atout esthétique du bois</h3>
                      <p className="text-gray-600">
                        Finitions de qualité pour un résultat élégant, parfaitement adapté au style montagnard
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#A59765]" />
                    <div>
                      <h3 className="text-lg font-semibold text-[#4F5960]">Contraintes techniques simplifiées</h3>
                      <p className="text-gray-600">
                        Solutions adaptées aux configurations complexes des terrains du Val des Cimes
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#A59765] px-6 py-3 text-lg font-medium text-white transition-all duration-300 hover:bg-[#8a7d53] hover:shadow-lg"
                  aria-label="Demander un devis pour votre extension en bois en montagne"
                >
                  Demander un devis
                  <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="lg:w-1/2">
                <div className="overflow-hidden rounded-xl shadow-xl">
                  <Image
                    src="/images/ttskfgc6g1.jpg"
                    alt="Extension de maison en bois dans le Val des Cimes"
                    width={600}
                    height={400}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Showcase */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-[#4F5960] md:text-4xl">
              Nos <span className="text-[#A59765]">Projets Récents</span>
            </h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="group overflow-hidden rounded-lg shadow-md">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src="/images/t0bhafeffr.jpg"
                    alt="Chalet contemporain en bois à Val-des-Cimes"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-[#4F5960]">Chalet contemporain</h3>
                  <p className="mb-4 text-gray-600">
                    Construction d'un chalet moderne de 80m² en montagne
                  </p>
                  <Link
                    href="/gallery"
                    className="flex items-center gap-2 text-[#A59765] transition-all duration-300 hover:text-[#8a7d53]"
                    aria-label="Voir notre projet de chalet contemporain dans le Val des Cimes"
                  >
                    Voir le projet
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="group overflow-hidden rounded-lg shadow-md">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src="/images/ej9ay5jee6.jpg"
                    alt="Extension véranda en bois dans le Val des Cimes"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-[#4F5960]">Extension véranda</h3>
                  <p className="mb-4 text-gray-600">
                    Extension lumineuse pour une maison familiale dans le Val des Cimes
                  </p>
                  <Link
                    href="/gallery"
                    className="flex items-center gap-2 text-[#A59765] transition-all duration-300 hover:text-[#8a7d53]"
                    aria-label="Voir notre projet d'extension véranda en montagne"
                  >
                    Voir le projet
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="group overflow-hidden rounded-lg shadow-md">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src="/images/t7avuvcyr0.jpg"
                    alt="Rénovation complète de chalet à Val-des-Cimes"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-[#4F5960]">Rénovation complète</h3>
                  <p className="mb-4 text-gray-600">
                    Rénovation et extension d'un chalet traditionnel en montagne
                  </p>
                  <Link
                    href="/gallery"
                    className="flex items-center gap-2 text-[#A59765] transition-all duration-300 hover:text-[#8a7d53]"
                    aria-label="Voir notre projet de rénovation complète dans le Val des Cimes"
                  >
                    Voir le projet
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#4F5960] py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
              Envie de concrétiser votre projet dans le Val des Cimes ?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
              Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé pour votre construction en
              bois à Val-des-Cimes.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[#A59765] px-8 py-4 text-lg font-medium text-white transition-all duration-300 hover:bg-[#8a7d53] hover:shadow-lg"
              aria-label="Nous contacter pour votre projet de chalet ou extension en bois en montagne"
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

