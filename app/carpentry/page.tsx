import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function Carpentry() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kitchen-min.jpg-TUwWN4WnC39uQTSlkYcoxRNptNjKxy.jpeg"
          alt="Menuiserie et aménagements intérieurs"
          fill
          priority
          className="object-cover brightness-[0.7]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="animate-fade-in-up mb-6 text-4xl font-bold leading-tight md:text-5xl">
            Menuiserie & <span className="text-white">Aménagements Intérieurs</span>
          </h1>
          <p className="animate-fade-in-up animation-delay-300 mb-8 max-w-2xl text-lg md:text-xl">
            Des solutions sur mesure pour sublimer votre intérieur et extérieur
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
            <div className="lg:w-1/2">
              <h2 className="mb-6 text-3xl font-bold text-[#4F5960] md:text-4xl">
                Notre Expertise en <span className="text-[#A59765]">Menuiserie</span>
              </h2>
              <p className="mb-6 text-lg text-gray-700">
                DYEN CONSTRUCTION BOIS intervient dans le domaine de la menuiserie extérieure (Bois, Alu, PVC). Nous
                avons comme priorité le choix de produits de qualité et leur mise en œuvre soignée afin d'atteindre des
                performances énergétiques en accord avec les normes en vigueur.
              </p>

              <div className="mb-8 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#A59765]" />
                  <div>
                    <h3 className="text-lg font-semibold text-[#4F5960]">Menuiserie extérieure</h3>
                    <p className="text-gray-600">Fenêtres, portes, volets, pergolas, terrasses en bois</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#A59765]" />
                  <div>
                    <h3 className="text-lg font-semibold text-[#4F5960]">Menuiserie intérieure</h3>
                    <p className="text-gray-600">Portes, escaliers, parquets, plafonds, cloisons</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#A59765]" />
                  <div>
                    <h3 className="text-lg font-semibold text-[#4F5960]">Aménagements sur mesure</h3>
                    <p className="text-gray-600">Placards, dressings, bibliothèques, meubles intégrés</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#A59765]" />
                  <div>
                    <h3 className="text-lg font-semibold text-[#4F5960]">Rénovation</h3>
                    <p className="text-gray-600">
                      Restauration de menuiseries anciennes, adaptation aux normes actuelles
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
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/escalier.jpg-I8NZqlbgR0pKxDxI0cQLuDJUtEbEqu.jpeg"
                  alt="Travaux de menuiserie"
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
                <span className="text-[#A59765]">Aménagements</span> Intérieurs
              </h2>
              <p className="mb-6 text-lg text-gray-700">
                Nous réalisons également des agencements en bois afin de parfaire vos intérieurs. En effet, nous mettons
                l'accent sur l'utilisation de matériaux nobles tels que le mélèze, le vieux bois, le bois
                thermo-chauffé, etc. Allier modernité et tradition est notre souhait afin de réaliser vos projets «
                Sur-mesure ».
              </p>

              <div className="mb-8 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#A59765]" />
                  <div>
                    <h3 className="text-lg font-semibold text-[#4F5960]">Matériaux nobles</h3>
                    <p className="text-gray-600">
                      Utilisation de mélèze, vieux bois, bois thermo-chauffé pour des finitions de qualité
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#A59765]" />
                  <div>
                    <h3 className="text-lg font-semibold text-[#4F5960]">Alliance tradition et modernité</h3>
                    <p className="text-gray-600">
                      Des créations qui respectent le patrimoine tout en intégrant des éléments contemporains
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#A59765]" />
                  <div>
                    <h3 className="text-lg font-semibold text-[#4F5960]">Projets sur-mesure</h3>
                    <p className="text-gray-600">Chaque réalisation est unique et adaptée à vos besoins spécifiques</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#A59765]" />
                  <div>
                    <h3 className="text-lg font-semibold text-[#4F5960]">Finitions soignées</h3>
                    <p className="text-gray-600">Attention particulière aux détails pour un résultat impeccable</p>
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
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/caveAVin.jpg-X56hEBg7LfaZhQinenVgmV1sD7d6Nc.jpeg"
                  alt="Aménagement intérieur"
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
            Nos <span className="text-[#A59765]">Réalisations</span>
          </h2>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="group overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/skiroom.jpg-uVRrJPejTgrr6cPLGBUjlAd6D1Tgtc.jpeg"
                alt="Dressing pour équipement de ski"
                width={400}
                height={300}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="group overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/habillageCheminee.jpg-nV13Bmjgnx8WnqQwo965cFLMnUy4j5.jpeg"
                alt="Habillage cheminée et miroir"
                width={400}
                height={300}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="group overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/decoVieuxBois.jpg-zzIZfNkumCZHxM8mLPsDes1CTfHmnq.jpeg"
                alt="Détail décoratif en vieux bois"
                width={400}
                height={300}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="group overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/caveAVin2.jpg-eEZ432mQIww3iQLtL8GJL35wNe45w9.jpeg"
                alt="Cave à vin sur mesure"
                width={400}
                height={300}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="group overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/decoInterieure.jpg-r1TljPDoootSItVaPUKTvbSve6hQCu.jpeg"
                alt="Décoration murale en pierre et bois"
                width={400}
                height={300}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="group overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/skiroom2.jpg-NZMFYA5MSnaYZPfzqiFlYGsYNDgPzm.jpeg"
                alt="Rangements sur mesure"
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
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">Un projet de menuiserie ou d'aménagement ?</h2>
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

