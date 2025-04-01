import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function Chalets() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chalet_sunset-ovvnHa8eLXaMgLOCbroOsO3G1E2vY0.jpeg"
          alt="Chalets en bois et extensions"
          fill
          priority
          className="object-cover brightness-[0.7]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="animate-fade-in-up mb-6 text-4xl font-bold leading-tight md:text-5xl">
            Chalets en Bois & <span className="text-[#A59765]">Extensions</span>
          </h1>
          <p className="animate-fade-in-up animation-delay-300 mb-8 max-w-2xl text-lg md:text-xl">
            Des solutions sur mesure pour créer ou agrandir votre espace de vie
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
                Notre entreprise vous propose ses services dans la conception et la réalisation de chalets en bois. La
                construction en bois compte de nombreux avantages que nous mettons à votre service pour des réalisations
                durables et personnalisées.
              </p>

              <div className="mb-8 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#A59765]" />
                  <div>
                    <h3 className="text-lg font-semibold text-[#4F5960]">Matériau pur et écologique</h3>
                    <p className="text-gray-600">Le bois, un choix naturel et respectueux de l'environnement</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#A59765]" />
                  <div>
                    <h3 className="text-lg font-semibold text-[#4F5960]">Grandes possibilités architecturales</h3>
                    <p className="text-gray-600">Designs contemporains ou traditionnels selon vos préférences</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#A59765]" />
                  <div>
                    <h3 className="text-lg font-semibold text-[#4F5960]">Performances énergétiques optimales</h3>
                    <p className="text-gray-600">Excellente isolation thermique pour un confort optimal</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#A59765]" />
                  <div>
                    <h3 className="text-lg font-semibold text-[#4F5960]">Rapidité d'exécution</h3>
                    <p className="text-gray-600">
                      Délais de construction réduits par rapport aux méthodes traditionnelles
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#A59765]" />
                  <div>
                    <h3 className="text-lg font-semibold text-[#4F5960]">Accompagnement administratif</h3>
                    <p className="text-gray-600">
                      Assistance dans les démarches administratives et coordination des différents corps de métiers pour
                      un « esprit libre »
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[#A59765] px-6 py-3 text-lg font-medium text-white transition-all duration-300 hover:bg-[#8a7d53] hover:shadow-lg"
              >
                Demander un devis
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="lg:w-1/2">
              <div className="overflow-hidden rounded-xl shadow-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chaletOssatureBois3.jpg-SF794eXmmplGl3TzX9Qg7gB6jEUoku.jpeg"
                  alt="Chalet en bois"
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
                Envie d'agrandir votre maison ? L'extension bois est la solution idéale pour diverses raisons. Nous
                intervenons également pour la rénovation ou l'amélioration de votre Charpente / Couverture.
              </p>

              <div className="mb-8 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#A59765]" />
                  <div>
                    <h3 className="text-lg font-semibold text-[#4F5960]">Légèreté de la construction bois</h3>
                    <p className="text-gray-600">Fondations simplifiées et impact minimal sur votre terrain</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#A59765]" />
                  <div>
                    <h3 className="text-lg font-semibold text-[#4F5960]">Grande capacité d'intégration à l'existant</h3>
                    <p className="text-gray-600">Design adapté pour une continuité parfaite avec votre habitation</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#A59765]" />
                  <div>
                    <h3 className="text-lg font-semibold text-[#4F5960]">Atout esthétique du bois</h3>
                    <p className="text-gray-600">Finitions de qualité pour un résultat élégant</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#A59765]" />
                  <div>
                    <h3 className="text-lg font-semibold text-[#4F5960]">Contraintes techniques simplifiées</h3>
                    <p className="text-gray-600">Solutions adaptées aux configurations complexes</p>
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[#A59765] px-6 py-3 text-lg font-medium text-white transition-all duration-300 hover:bg-[#8a7d53] hover:shadow-lg"
              >
                Demander un devis
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="lg:w-1/2">
              <div className="overflow-hidden rounded-xl shadow-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/extension.jpg-09V1nNbpPWFHi5lMn84odLq4QaPydx.jpeg"
                  alt="Extension de maison"
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
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chaletBoisMassif.jpg-Gn4DUb8OsIAKRMsJiFBA9wXGRugFAD.jpeg"
                  alt="Chalet contemporain"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-[#4F5960]">Chalet contemporain</h3>
                <p className="mb-4 text-gray-600">
                  Construction d'un chalet moderne de 80m² à Saint-Martin-de-Belleville
                </p>
                <Link
                  href="/gallery"
                  className="flex items-center gap-2 text-[#A59765] transition-all duration-300 hover:text-[#8a7d53]"
                >
                  Voir le projet
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="group overflow-hidden rounded-lg shadow-md">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/extension2.jpg-GWDJKeJCEc4JjXAaw1mION65hyu1o2.jpeg"
                  alt="Extension véranda"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-[#4F5960]">Extension véranda</h3>
                <p className="mb-4 text-gray-600">Extension lumineuse pour une maison familiale à Annecy</p>
                <Link
                  href="/gallery"
                  className="flex items-center gap-2 text-[#A59765] transition-all duration-300 hover:text-[#8a7d53]"
                >
                  Voir le projet
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="group overflow-hidden rounded-lg shadow-md">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chaletOssatureBois5.jpg-ob9zlS9lyRoGHeQOBwnr8Ths0aAOtD.jpeg"
                  alt="Rénovation complète"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-[#4F5960]">Rénovation complète</h3>
                <p className="mb-4 text-gray-600">Rénovation et extension d'un chalet traditionnel à Megève</p>
                <Link
                  href="/gallery"
                  className="flex items-center gap-2 text-[#A59765] transition-all duration-300 hover:text-[#8a7d53]"
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
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">Envie de concrétiser votre projet ?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
            Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-[#A59765] px-8 py-4 text-lg font-medium text-white transition-all duration-300 hover:bg-[#8a7d53] hover:shadow-lg"
          >
            Nous contacter
            <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  )
}

