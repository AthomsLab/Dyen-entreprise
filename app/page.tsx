import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Clock, Leaf, Shield } from "lucide-react"
import Script from "next/script"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accueil | Construction de chalets en bois à Val-des-Cimes - Val des Cimes",
  description:
    "Cimes & Bois, spécialiste depuis 1936 en construction de chalets en bois, extensions et menuiserie à Val-des-Cimes dans le Val des Cimes. Devis gratuit.",
  alternates: {
    canonical: "/",
  },
}

export default function Home() {
  return (
    <>
      <Script
        id="schema-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Cimes & Bois Construction Bois",
            image:
              "/images/logo.svg",
            description:
              "Spécialiste depuis 1936 en construction de chalets en bois, extensions, menuiserie et aménagements intérieurs.",
            "@id": "https://cimes-et-bois.vercel.app",
            url: "https://cimes-et-bois.vercel.app",
            telephone: "01 23 45 67 89",
            email: "contact@cimes-et-bois.example",
            address: {
              "@type": "PostalAddress",
              streetAddress: "12 chemin des Exemples",
              addressLocality: "Val-des-Cimes",
              postalCode: "00000",
              addressRegion: "montagne",
              addressCountry: "FR",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 44.1800761,
              longitude: 6.6263325,
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "08:30",
                closes: "18:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Saturday",
                opens: "09:00",
                closes: "12:00",
              },
            ],
            sameAs: ["https://facebook.com", "https://instagram.com"],
            priceRange: "€€",
            servesCuisine: "Construction bois",
            areaServed: ["Val-des-Cimes", "Val des Cimes", "Val des Cimes", "montagne"],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Services de construction bois",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Construction de chalets en bois",
                    description:
                      "Construction et rénovation de chalets en bois, avec un savoir-faire traditionnel et des matériaux de qualité.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Extensions en bois",
                    description:
                      "Extensions en bois parfaitement intégrées à l'existant et travaux de charpente/couverture pour votre habitation.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Menuiserie et agencement",
                    description:
                      "Travaux de menuiserie extérieure et intérieure, agencements sur mesure pour sublimer votre intérieur.",
                  },
                },
              ],
            },
          }),
        }}
      />

      <div className="flex flex-col">
        {/* Hero Section */}
        <section className="relative h-screen w-full">
          <Image
            src="/images/kdqnvqnbyd.jpg"
            alt="Chalet en bois traditionnel par Cimes & Bois à Val-des-Cimes dans le Val des Cimes"
            fill
            priority
            className="object-cover brightness-[0.7] transition-all duration-700"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
            <h1 className="animate-fade-in-up mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Construisons ensemble <br />
              <span className="text-[#A59765]">votre espace de vie idéal</span>
            </h1>
            <p className="animate-fade-in-up animation-delay-300 mb-8 max-w-2xl text-lg md:text-xl">
              Implantée à Val-des-Cimes au cœur des Alpes, l'entreprise CIMES & BOIS vous propose
              son savoir-faire depuis 1936
            </p>
            <Link
              href="/contact"
              className="animate-fade-in-up animation-delay-600 group flex items-center gap-2 rounded-full bg-[#A59765] px-6 py-3 text-lg font-medium text-white transition-all duration-300 hover:bg-[#8a7d53] hover:shadow-lg"
              aria-label="Demander un devis pour votre projet de construction en bois"
            >
              Demander un devis
              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20" aria-labelledby="services-heading">
          <div className="container mx-auto px-4">
            <h2 id="services-heading" className="mb-16 text-center text-3xl font-bold text-[#4F5960] md:text-4xl">
              Nos <span className="text-[#A59765]">Services</span>
            </h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Service 1 */}
              <div className="group rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <Image
                    src="/images/ej9ay5jee6.jpg"
                    alt="Construction de chalets en bois à ossature en montagne"
                    width={400}
                    height={300}
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-[#4F5960]">Construction / Rénovation</h3>
                <p className="mb-4 text-gray-600">
                  Construction et rénovation de chalets en bois à Val-des-Cimes et dans le Val des Cimes, avec un savoir-faire
                  traditionnel et des matériaux de qualité.
                </p>
                <Link
                  href="/chalets"
                  className="flex items-center gap-2 text-[#A59765] transition-all duration-300 hover:text-[#8a7d53]"
                  aria-label="Découvrir nos services de construction et rénovation de chalets en bois"
                >
                  Découvrir
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Service 2 */}
              <div className="group rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <Image
                    src="/images/vfd9mdkcm6.jpg"
                    alt="Extensions de maison en bois dans le Val des Cimes"
                    width={400}
                    height={300}
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-[#4F5960]">Extension & Charpente</h3>
                <p className="mb-4 text-gray-600">
                  Extensions en bois parfaitement intégrées à l'existant et travaux de charpente/couverture pour votre
                  habitation en montagne.
                </p>
                <Link
                  href="/chalets#extensions"
                  className="flex items-center gap-2 text-[#A59765] transition-all duration-300 hover:text-[#8a7d53]"
                  aria-label="Découvrir nos services d'extension et charpente en bois"
                >
                  Découvrir
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Service 3 */}
              <div className="group rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <Image
                    src="/images/b535e34284.jpg"
                    alt="Menuiserie et aménagements intérieurs en bois à Val-des-Cimes"
                    width={400}
                    height={300}
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-[#4F5960]">Menuiserie & Agencement</h3>
                <p className="mb-4 text-gray-600">
                  Travaux de menuiserie extérieure et intérieure, agencements sur mesure pour sublimer votre intérieur
                  dans le Val des Cimes.
                </p>
                <Link
                  href="/carpentry"
                  className="flex items-center gap-2 text-[#A59765] transition-all duration-300 hover:text-[#8a7d53]"
                  aria-label="Découvrir nos services de menuiserie et agencement sur mesure"
                >
                  Découvrir
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-[#f8f7f4] py-20" aria-labelledby="benefits-heading">
          <div className="container mx-auto px-4">
            <h2 id="benefits-heading" className="mb-16 text-center text-3xl font-bold text-[#4F5960] md:text-4xl">
              Pourquoi <span className="text-[#A59765]">Nous Choisir</span>
            </h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* Benefit 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-[#A59765]/10 p-4">
                  <Leaf className="h-8 w-8 text-[#A59765]" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[#4F5960]">Écologique</h3>
                <p className="text-gray-600">
                  Matériaux durables et approche respectueuse de l'environnement pour vos projets en montagne
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-[#A59765]/10 p-4">
                  <Clock className="h-8 w-8 text-[#A59765]" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[#4F5960]">Rapidité</h3>
                <p className="text-gray-600">
                  Délais optimisés grâce à nos méthodes de construction efficaces à Val-des-Cimes et dans le Val des Cimes
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-[#A59765]/10 p-4">
                  <Award className="h-8 w-8 text-[#A59765]" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[#4F5960]">Qualité</h3>
                <p className="text-gray-600">
                  Savoir-faire artisanal et matériaux de premier choix pour vos constructions en bois dans le Val des Cimes
                </p>
              </div>

              {/* Benefit 4 */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-[#A59765]/10 p-4">
                  <Shield className="h-8 w-8 text-[#A59765]" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[#4F5960]">Accompagnement</h3>
                <p className="text-gray-600">
                  Support administratif et technique tout au long de votre projet de construction en montagne
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Preview */}
        <section className="py-20" aria-labelledby="gallery-heading">
          <div className="container mx-auto px-4">
            <h2 id="gallery-heading" className="mb-6 text-center text-3xl font-bold text-[#4F5960] md:text-4xl">
              Nos <span className="text-[#A59765]">Réalisations</span>
            </h2>
            <p className="mb-12 text-center text-gray-600">
              Découvrez quelques-unes de nos réalisations récentes à Val-des-Cimes et dans le Val des Cimes
            </p>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="group overflow-hidden rounded-lg">
                <Image
                  src="/images/t0bhafeffr.jpg"
                  alt="Chalet en bois massif en montagne"
                  width={400}
                  height={300}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="group overflow-hidden rounded-lg">
                <Image
                  src="/images/ej9ay5jee6.jpg"
                  alt="Extension avec terrasse en bois à Val-des-Cimes"
                  width={400}
                  height={300}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="group overflow-hidden rounded-lg">
                <Image
                  src="/images/2963af05ae.jpg"
                  alt="Aménagement intérieur en bois dans le Val des Cimes"
                  width={400}
                  height={300}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="group overflow-hidden rounded-lg">
                <Image
                  src="/images/pl9r5h2kkh.jpg"
                  alt="Sauna en bois sur mesure dans le Val des Cimes"
                  width={400}
                  height={300}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="group overflow-hidden rounded-lg">
                <Image
                  src="/images/e25f284123.jpg"
                  alt="Habillage cheminée en bois en montagne"
                  width={400}
                  height={300}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="group overflow-hidden rounded-lg">
                <Image
                  src="/images/kwrznz6dc6.jpg"
                  alt="Intérieur extension de chalet à Val-des-Cimes"
                  width={400}
                  height={300}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="mt-12 flex justify-center">
              <Link
                href="/gallery"
                className="group flex items-center gap-2 rounded-full border-2 border-[#A59765] px-6 py-3 text-lg font-medium text-[#A59765] transition-all duration-300 hover:bg-[#A59765] hover:text-white"
                aria-label="Voir toutes nos réalisations de construction en bois dans le Val des Cimes"
              >
                Voir toutes nos réalisations
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20" aria-labelledby="cta-heading">
          <div className="absolute inset-0 bg-[#4F5960]/90">
            <Image
              src="/images/fpe8g2eqcn.jpg"
              alt="Chalet en bois en montagne"
              fill
              className="object-cover opacity-20 mix-blend-overlay"
            />
          </div>
          <div className="container relative mx-auto px-4 text-center text-white">
            <h2 id="cta-heading" className="mb-6 text-3xl font-bold md:text-4xl">
              Prêt à concrétiser votre projet dans le Val des Cimes ?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg">
              Ayant à cœur la qualité et le respect des matériaux, nous mettrons tout en œuvre pour vous proposer des
              solutions à vos projets à Val-des-Cimes et en montagne. Contactez-nous au 01 23 45 67 89 ou
              par email à contact@cimes-et-bois.example
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[#A59765] px-8 py-4 text-lg font-medium text-white transition-all duration-300 hover:bg-[#8a7d53] hover:shadow-lg"
              aria-label="Contacter Cimes & Bois pour votre projet de construction en bois"
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

