import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Clock, Leaf, Shield } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen w-full">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chalet_lake-0vQnXzkFRGZaH8TQova9Rr1VDWEwwX.jpeg"
          alt="Chalet en bois par Entreprise D'Yen"
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
            Implantée à Colmars au cœur du Haut-Verdon Val d'Allos, l'entreprise DYEN CONSTRUCTION BOIS vous propose son
            savoir-faire depuis 1936
          </p>
          <Link
            href="/contact"
            className="animate-fade-in-up animation-delay-600 group flex items-center gap-2 rounded-full bg-[#A59765] px-6 py-3 text-lg font-medium text-white transition-all duration-300 hover:bg-[#8a7d53] hover:shadow-lg"
          >
            Demander un devis
            <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-16 text-center text-3xl font-bold text-[#4F5960] md:text-4xl">
            Nos <span className="text-[#A59765]">Services</span>
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Service 1 */}
            <div className="group rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl">
              <div className="mb-4 overflow-hidden rounded-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chaletOssatureBois2.jpg-n1NP9lH9zrp8nVepyH20ICCC0VXwnB.jpeg"
                  alt="Construction de chalets en bois"
                  width={400}
                  height={300}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-[#4F5960]">Construction / Rénovation</h3>
              <p className="mb-4 text-gray-600">
                Construction et rénovation de chalets en bois, avec un savoir-faire traditionnel et des matériaux de
                qualité.
              </p>
              <Link
                href="/chalets"
                className="flex items-center gap-2 text-[#A59765] transition-all duration-300 hover:text-[#8a7d53]"
              >
                Découvrir
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Service 2 */}
            <div className="group rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl">
              <div className="mb-4 overflow-hidden rounded-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/extension3.jpg-H0cgQoBSKagpxEKTq04rpXjzSicZf4.jpeg"
                  alt="Extensions de maison"
                  width={400}
                  height={300}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-[#4F5960]">Extension & Charpente</h3>
              <p className="mb-4 text-gray-600">
                Extensions en bois parfaitement intégrées à l'existant et travaux de charpente/couverture pour votre
                habitation.
              </p>
              <Link
                href="/chalets#extensions"
                className="flex items-center gap-2 text-[#A59765] transition-all duration-300 hover:text-[#8a7d53]"
              >
                Découvrir
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Service 3 */}
            <div className="group rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl">
              <div className="mb-4 overflow-hidden rounded-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/caveAVin.jpg-X56hEBg7LfaZhQinenVgmV1sD7d6Nc.jpeg"
                  alt="Menuiserie et aménagements intérieurs"
                  width={400}
                  height={300}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-[#4F5960]">Menuiserie & Agencement</h3>
              <p className="mb-4 text-gray-600">
                Travaux de menuiserie extérieure et intérieure, agencements sur mesure pour sublimer votre intérieur.
              </p>
              <Link
                href="/carpentry"
                className="flex items-center gap-2 text-[#A59765] transition-all duration-300 hover:text-[#8a7d53]"
              >
                Découvrir
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-[#f8f7f4] py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-16 text-center text-3xl font-bold text-[#4F5960] md:text-4xl">
            Pourquoi <span className="text-[#A59765]">Nous Choisir</span>
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Benefit 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-[#A59765]/10 p-4">
                <Leaf className="h-8 w-8 text-[#A59765]" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-[#4F5960]">Écologique</h3>
              <p className="text-gray-600">Matériaux durables et approche respectueuse de l'environnement</p>
            </div>

            {/* Benefit 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-[#A59765]/10 p-4">
                <Clock className="h-8 w-8 text-[#A59765]" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-[#4F5960]">Rapidité</h3>
              <p className="text-gray-600">Délais optimisés grâce à nos méthodes de construction efficaces</p>
            </div>

            {/* Benefit 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-[#A59765]/10 p-4">
                <Award className="h-8 w-8 text-[#A59765]" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-[#4F5960]">Qualité</h3>
              <p className="text-gray-600">Savoir-faire artisanal et matériaux de premier choix</p>
            </div>

            {/* Benefit 4 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-[#A59765]/10 p-4">
                <Shield className="h-8 w-8 text-[#A59765]" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-[#4F5960]">Accompagnement</h3>
              <p className="text-gray-600">Support administratif et technique tout au long de votre projet</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-center text-3xl font-bold text-[#4F5960] md:text-4xl">
            Nos <span className="text-[#A59765]">Réalisations</span>
          </h2>
          <p className="mb-12 text-center text-gray-600">Découvrez quelques-unes de nos réalisations récentes</p>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="group overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chaletBoisMassif.jpg-Gn4DUb8OsIAKRMsJiFBA9wXGRugFAD.jpeg"
                alt="Chalet en bois massif"
                width={400}
                height={300}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="group overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/extension2.jpg-GWDJKeJCEc4JjXAaw1mION65hyu1o2.jpeg"
                alt="Extension avec terrasse"
                width={400}
                height={300}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="group overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/skiroom.jpg-uVRrJPejTgrr6cPLGBUjlAd6D1Tgtc.jpeg"
                alt="Aménagement intérieur"
                width={400}
                height={300}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="group overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sauna.jpg-ff9unpeXKYyIU1TyvAqY0FKytTJ2OW.jpeg"
                alt="Sauna"
                width={400}
                height={300}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="group overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/habillageCheminee.jpg-nV13Bmjgnx8WnqQwo965cFLMnUy4j5.jpeg"
                alt="Habillage cheminée"
                width={400}
                height={300}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="group overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/interieurExtensionChalet2.jpg-aBRhgZj2Ygdgokv5LRXmy6vF4ykM5U.jpeg"
                alt="Intérieur extension"
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
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[#4F5960]/90">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chaletOssatureBois4.jpg-YYIiZudRBnNfzNQBVg5R2zGUhT4GKP.jpeg"
            alt="Background"
            fill
            className="object-cover opacity-20 mix-blend-overlay"
          />
        </div>
        <div className="container relative mx-auto px-4 text-center text-white">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Prêt à concrétiser votre projet ?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Ayant à cœur la qualité et le respect des matériaux, nous mettrons tout en œuvre pour vous proposer des
            solutions à vos projets. Contactez-nous au 04 92 83 44 25 ou par email à entreprisedyen@hotmail.fr
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

