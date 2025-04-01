"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"
import Script from "next/script"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <>
      <Script
        id="schema-contact"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Entreprise D'Yen",
            description:
              "Contactez Entreprise D'Yen pour vos projets de construction en bois, extensions et menuiserie à Colmars dans le Haut-Verdon Val d'Allos (04).",
            mainEntity: {
              "@type": "LocalBusiness",
              name: "Entreprise D'Yen Construction Bois",
              image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_transparent-XZVD5xQHj0QoSSd78TxlAKdquTq7hU.png",
              telephone: "04 92 83 44 25",
              email: "entreprisedyen@hotmail.fr",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Chemin de la Cascade",
                addressLocality: "Colmars",
                postalCode: "04370",
                addressRegion: "Alpes de Haute-Provence",
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
              areaServed: ["Colmars", "Haut-Verdon", "Val d'Allos", "Alpes de Haute-Provence"],
            },
          }),
        }}
      />

      <div className="flex flex-col">
        {/* Hero Section */}
        <section className="relative h-[40vh] w-full">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/boat_lake-lo1kFoNswsEiQ7q7Yd6k3dftuA4ghU.webp"
            alt="Contactez Entreprise D'Yen pour vos projets dans les Alpes de Haute-Provence"
            fill
            priority
            className="object-cover brightness-[0.7]"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
            <h1 className="animate-fade-in-up mb-6 text-4xl font-bold leading-tight md:text-5xl">
              <span className="text-[#A59765]">Contactez</span>-Nous
            </h1>
            <p className="animate-fade-in-up animation-delay-300 mb-8 max-w-2xl text-lg md:text-xl">
              Nous sommes à votre écoute pour répondre à toutes vos questions sur vos projets à Colmars et dans le
              Haut-Verdon
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col gap-12 lg:flex-row">
              {/* Contact Information */}
              <div className="lg:w-1/3">
                <h2 className="mb-6 text-2xl font-bold text-[#4F5960] md:text-3xl">
                  Nos <span className="text-[#A59765]">Coordonnées</span>
                </h2>

                <div className="mb-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-[#A59765]/10 p-3">
                      <MapPin className="h-6 w-6 text-[#A59765]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#4F5960]">Adresse</h3>
                      <p className="text-gray-600">
                        Chemin de la Cascade
                        <br />
                        04370 COLMARS
                        <br />
                        Alpes de Haute-Provence, France
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-[#A59765]/10 p-3">
                      <Phone className="h-6 w-6 text-[#A59765]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#4F5960]">Téléphone</h3>
                      <p className="text-gray-600">04 92 83 44 25</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-[#A59765]/10 p-3">
                      <Mail className="h-6 w-6 text-[#A59765]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#4F5960]">Email</h3>
                      <p className="text-gray-600">entreprisedyen@hotmail.fr</p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="mb-4 text-lg font-semibold text-[#4F5960]">Zone d'intervention</h3>
                  <p className="text-gray-600">
                    Nous intervenons généralement sur les communes du Haut Verdon Val d'Allos et dans les Alpes de
                    Haute-Provence. Si vous avez un projet au-delà de ce secteur, n'hésitez pas à nous contacter, nous
                    étudierons votre demande.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="mb-4 text-lg font-semibold text-[#4F5960]">Horaires d'ouverture</h3>
                  <div className="space-y-2 text-gray-600">
                    <p className="flex justify-between">
                      <span>Lundi - Vendredi:</span>
                      <span>8h30 - 18h00</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Samedi:</span>
                      <span>9h00 - 12h00</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Dimanche:</span>
                      <span>Fermé</span>
                    </p>
                  </div>
                </div>

                <div>
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chaletOssatureBois4.jpg-YYIiZudRBnNfzNQBVg5R2zGUhT4GKP.jpeg"
                    alt="Bureaux d'Entreprise D'Yen à Colmars dans le Haut-Verdon"
                    width={400}
                    height={300}
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:w-2/3">
                <h2 className="mb-6 text-2xl font-bold text-[#4F5960] md:text-3xl">
                  Envoyez-nous un <span className="text-[#A59765]">Message</span>
                </h2>

                {isSubmitted ? (
                  <div className="rounded-lg bg-green-50 p-6 text-green-700">
                    <h3 className="mb-2 text-xl font-semibold">Message envoyé avec succès !</h3>
                    <p>Merci de nous avoir contactés. Nous vous répondrons dans les plus brefs délais.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-2 block text-sm font-medium text-[#4F5960]">
                          Nom complet *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full rounded-lg border border-gray-300 p-3 text-gray-700 focus:border-[#A59765] focus:outline-none focus:ring-1 focus:ring-[#A59765]"
                          aria-describedby="name-help"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#4F5960]">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full rounded-lg border border-gray-300 p-3 text-gray-700 focus:border-[#A59765] focus:outline-none focus:ring-1 focus:ring-[#A59765]"
                          aria-describedby="email-help"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <label htmlFor="phone" className="mb-2 block text-sm font-medium text-[#4F5960]">
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-gray-300 p-3 text-gray-700 focus:border-[#A59765] focus:outline-none focus:ring-1 focus:ring-[#A59765]"
                          aria-describedby="phone-help"
                        />
                      </div>

                      <div>
                        <label htmlFor="subject" className="mb-2 block text-sm font-medium text-[#4F5960]">
                          Sujet *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full rounded-lg border border-gray-300 p-3 text-gray-700 focus:border-[#A59765] focus:outline-none focus:ring-1 focus:ring-[#A59765]"
                          aria-describedby="subject-help"
                        >
                          <option value="">Sélectionnez un sujet</option>
                          <option value="devis-chalet">Devis chalet en bois</option>
                          <option value="devis-extension">Devis extension</option>
                          <option value="devis-menuiserie">Devis menuiserie</option>
                          <option value="devis-amenagement">Devis aménagement intérieur</option>
                          <option value="information">Demande d'information</option>
                          <option value="autre">Autre</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="mb-2 block text-sm font-medium text-[#4F5960]">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full rounded-lg border border-gray-300 p-3 text-gray-700 focus:border-[#A59765] focus:outline-none focus:ring-1 focus:ring-[#A59765]"
                        aria-describedby="message-help"
                      />
                    </div>

                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group inline-flex items-center gap-2 rounded-full bg-[#A59765] px-6 py-3 text-lg font-medium text-white transition-all duration-300 hover:bg-[#8a7d53] hover:shadow-lg disabled:opacity-70"
                        aria-label="Envoyer votre message à Entreprise D'Yen"
                      >
                        {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                        <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-2xl font-bold text-[#4F5960] md:text-3xl">
              Nous <span className="text-[#A59765]">Trouver</span>
            </h2>

            <div className="h-[400px] w-full overflow-hidden rounded-lg shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.1478811809245!2d6.626332476758737!3d44.18007611456996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cc625a6a864443%3A0xcc53a8ab32b94888!2sDyen%20Construction%20Bois-%20Entreprise%20de%20menuiserie%20construction%20bois%20-chalet%20bois%20-maison%20ossature%20bois!5e0!3m2!1sfr!2sfr!4v1711027175599!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation d'Entreprise D'Yen à Colmars dans le Haut-Verdon"
                aria-label="Carte Google Maps montrant l'emplacement d'Entreprise D'Yen à Colmars"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

