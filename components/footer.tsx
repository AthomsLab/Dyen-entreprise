import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer
      className="relative bg-gradient-to-b from-[#4F5960] to-[#3a4248] text-white overflow-hidden"
      role="contentinfo"
    >
      {/* Texture subtile */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fillOpacity='1' fillRule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      ></div>

      <div className="container relative mx-auto px-4 py-12 z-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              {/* Logo avec conteneur blanc opaque */}
              <div className="relative inline-block rounded-lg overflow-hidden">
                <div className={`absolute inset-0 bg-white/70 z-0`}></div>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_transparent-XZVD5xQHj0QoSSd78TxlAKdquTq7hU.png"
                  alt="DYEN Construction Bois - Logo"
                  width={220}
                  height={75}
                  className="relative z-10 p-1"
                />
              </div>
            </div>
            <p className="mb-4 text-white/80">
              Spécialiste en construction de chalets en bois, extensions et menuiserie depuis plus de 15 ans.
            </p>
            <div className="flex space-x-4" aria-label="Réseaux sociaux">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-2 transition-colors hover:bg-[#A59765]"
                aria-label="Facebook Entreprise D'Yen"
              >
                <Facebook className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-2 transition-colors hover:bg-[#A59765]"
                aria-label="Instagram Entreprise D'Yen"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-xl font-bold" id="footer-links">
              Liens Rapides
            </h3>
            <ul className="space-y-2" aria-labelledby="footer-links">
              <li>
                <Link href="/" className="text-white/80 transition-colors hover:text-[#A59765]">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/chalets" className="text-white/80 transition-colors hover:text-[#A59765]">
                  Chalets en Bois
                </Link>
              </li>
              <li>
                <Link href="/chalets#extensions" className="text-white/80 transition-colors hover:text-[#A59765]">
                  Extensions
                </Link>
              </li>
              <li>
                <Link href="/carpentry" className="text-white/80 transition-colors hover:text-[#A59765]">
                  Menuiserie
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-white/80 transition-colors hover:text-[#A59765]">
                  Galerie
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 transition-colors hover:text-[#A59765]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-xl font-bold" id="footer-contact">
              Contact
            </h3>
            <ul className="space-y-3" aria-labelledby="footer-contact">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-[#A59765]" aria-hidden="true" />
                <span className="text-white/80">
                  Chemin de la Cascade
                  <br />
                  04370 COLMARS
                  <br />
                  France
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-[#A59765]" aria-hidden="true" />
                <a href="tel:0492834425" className="text-white/80 hover:text-white">
                  04 92 83 44 25
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-[#A59765]" aria-hidden="true" />
                <a href="mailto:entreprisedyen@hotmail.fr" className="text-white/80 hover:text-white">
                  entreprisedyen@hotmail.fr
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="mb-4 text-xl font-bold" id="footer-hours">
              Horaires
            </h3>
            <dl className="space-y-2" aria-labelledby="footer-hours">
              <div className="flex justify-between">
                <dt className="text-white/80">Lundi - Vendredi:</dt>
                <dd className="text-white">8h30 - 18h00</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-white/80">Samedi:</dt>
                <dd className="text-white">9h00 - 12h00</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-white/80">Dimanche:</dt>
                <dd className="text-white">Fermé</dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Partie basse du footer */}
        <div className="relative mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/80">
          <p className="mb-2">
            ENTREPRISE DYEN SARL - SIRET 40473968200015 - TVA Intra. FR24404739682 - RCS Manosque B 404 739 682
          </p>
          <p>DYEN CONSTRUCTION BOIS © {new Date().getFullYear()} | Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

