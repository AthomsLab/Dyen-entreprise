"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Facebook, Instagram, Home, Mountain, Hammer, ImageIcon, Mail, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [animateItems, setAnimateItems] = useState(false)

  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
      // Délai réduit pour l'animation des éléments du menu (150ms au lieu de 300ms)
      setTimeout(() => {
        setAnimateItems(true)
      }, 150)
    } else {
      document.body.style.overflow = "auto"
      setAnimateItems(false)
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isMenuOpen])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [])

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/95 py-3 shadow-md backdrop-blur-sm" : "bg-transparent py-5"
      }`}
      role="banner"
    >
      <div className="w-full px-4 lg:px-4 md:px-3 sm:px-3 flex items-center justify-between">
        {/* Logo - positionné à gauche avec un padding fixe sur mobile */}
        <div className="w-[220px] lg:pl-5 md:pl-3 sm:pl-3">
          <Link href="/" className="flex items-center gap-2" aria-label="Accueil Entreprise D'Yen">
            <div
              className="relative rounded-lg overflow-hidden"
              style={{ borderRadius: "0.5rem", WebkitBorderRadius: "0.5rem" }}
            >
              <div className={`absolute inset-0 ${isScrolled ? "bg-transparent" : "bg-white/70"} z-0`}></div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_transparent-XZVD5xQHj0QoSSd78TxlAKdquTq7hU.png"
                alt="DYEN Construction Bois - Logo"
                width={220}
                height={60}
                className="relative z-10 p-1"
              />
            </div>
          </Link>
        </div>

        {/* Navigation - parfaitement centrée */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <nav className="hidden lg:block" aria-label="Navigation principale">
            <ul className="flex items-center gap-8">
              <li>
                <Link
                  href="/"
                  className={`text-sm font-medium transition-colors hover:text-[#A59765] ${
                    isScrolled ? "text-[#4F5960]" : "text-white"
                  }`}
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/chalets"
                  className={`text-sm font-medium transition-colors hover:text-[#A59765] ${
                    isScrolled ? "text-[#4F5960]" : "text-white"
                  }`}
                >
                  Chalets & Extensions
                </Link>
              </li>
              <li>
                <Link
                  href="/carpentry"
                  className={`text-sm font-medium transition-colors hover:text-[#A59765] ${
                    isScrolled ? "text-[#4F5960]" : "text-white"
                  }`}
                >
                  Menuiserie
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className={`text-sm font-medium transition-colors hover:text-[#A59765] ${
                    isScrolled ? "text-[#4F5960]" : "text-white"
                  }`}
                >
                  Galerie
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`text-sm font-medium transition-colors hover:text-[#A59765] ${
                    isScrolled ? "text-[#4F5960]" : "text-white"
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Social Media Icons - positionnés à droite avec un padding fixe sur mobile */}
        <div className="w-[220px] flex justify-end lg:pr-5 md:pr-3 sm:pr-3">
          <div className="hidden items-center space-x-3 lg:flex">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full p-2 transition-colors ${
                isScrolled
                  ? "bg-[#A59765]/10 text-[#A59765] hover:bg-[#A59765] hover:text-white"
                  : "bg-white/10 text-white hover:bg-[#A59765]"
              }`}
              aria-label="Facebook Entreprise D'Yen"
              style={{ borderRadius: "9999px", WebkitBorderRadius: "9999px" }}
            >
              <Facebook className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full p-2 transition-colors ${
                isScrolled
                  ? "bg-[#A59765]/10 text-[#A59765] hover:bg-[#A59765] hover:text-white"
                  : "bg-white/10 text-white hover:bg-[#A59765]"
              }`}
              aria-label="Instagram Entreprise D'Yen"
              style={{ borderRadius: "9999px", WebkitBorderRadius: "9999px" }}
            >
              <Instagram className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative z-50 rounded-full p-2 transition-all duration-300"
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            style={{
              backgroundColor: isMenuOpen
                ? "white"
                : isScrolled
                  ? "rgba(165, 151, 101, 0.1)"
                  : "rgba(255, 255, 255, 0.1)",
              color: isMenuOpen ? "#4F5960" : isScrolled ? "#4F5960" : "white",
              borderRadius: "9999px",
              WebkitBorderRadius: "9999px",
            }}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Redesigned */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 overflow-y-auto transition-all duration-500 lg:hidden ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ height: "100vh" }}
        aria-hidden={!isMenuOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation mobile"
      >
        {/* Fond avec dégradé et SVG de chalet */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#4F5960] to-[#3a4248] overflow-hidden">
          {/* SVG de chalet en arrière-plan - version plus aérée */}
          <svg
            className="absolute bottom-0 right-0 w-full h-auto opacity-10 transform translate-y-1/4"
            viewBox="0 0 800 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M400 50L100 300H200V550H600V300H700L400 50Z" stroke="#A59765" strokeWidth="8" fill="none" />
            <path d="M350 550V400H450V550H350Z" stroke="#A59765" strokeWidth="8" fill="none" />
            <path d="M250 350H350V250H250V350Z" stroke="#A59765" strokeWidth="8" fill="none" />
            <path d="M450 350H550V250H450V350Z" stroke="#A59765" strokeWidth="8" fill="none" />
          </svg>

          {/* Texture subtile */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fillOpacity='1' fillRule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
            aria-hidden="true"
          ></div>
        </div>

        <div className="relative min-h-screen flex flex-col pt-12 pb-16 px-8">
          {/* Logo en haut du menu - remonté */}
          <div className="mb-12 flex justify-center">
            <div
              className="relative rounded-lg overflow-hidden bg-white/90"
              style={{ borderRadius: "0.5rem", WebkitBorderRadius: "0.5rem" }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_transparent-XZVD5xQHj0QoSSd78TxlAKdquTq7hU.png"
                alt="DYEN Construction Bois - Logo"
                width={180}
                height={50}
                className="p-1"
              />
            </div>
          </div>

          <nav aria-label="Navigation mobile">
            <ul className="flex flex-col gap-5">
              {/* Liens du menu avec animation et icônes - délais réduits */}
              <li
                className={`transform transition-all duration-500 ${
                  animateItems ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: "50ms" }}
              >
                <Link
                  href="/"
                  className="flex items-center gap-4 p-3 rounded-lg bg-white/10 text-white transition-all hover:bg-white/20"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ borderRadius: "0.5rem", WebkitBorderRadius: "0.5rem" }}
                >
                  <Home className="h-5 w-5 text-[#A59765]" aria-hidden="true" />
                  <span className="text-lg font-medium">Accueil</span>
                  <ChevronRight className="h-5 w-5 ml-auto" aria-hidden="true" />
                </Link>
              </li>

              <li
                className={`transform transition-all duration-500 ${
                  animateItems ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: "100ms" }}
              >
                <Link
                  href="/chalets"
                  className="flex items-center gap-4 p-3 rounded-lg bg-white/10 text-white transition-all hover:bg-white/20"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ borderRadius: "0.5rem", WebkitBorderRadius: "0.5rem" }}
                >
                  <Mountain className="h-5 w-5 text-[#A59765]" aria-hidden="true" />
                  <span className="text-lg font-medium">Chalets & Extensions</span>
                  <ChevronRight className="h-5 w-5 ml-auto" aria-hidden="true" />
                </Link>
              </li>

              <li
                className={`transform transition-all duration-500 ${
                  animateItems ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: "150ms" }}
              >
                <Link
                  href="/carpentry"
                  className="flex items-center gap-4 p-3 rounded-lg bg-white/10 text-white transition-all hover:bg-white/20"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ borderRadius: "0.5rem", WebkitBorderRadius: "0.5rem" }}
                >
                  <Hammer className="h-5 w-5 text-[#A59765]" aria-hidden="true" />
                  <span className="text-lg font-medium">Menuiserie</span>
                  <ChevronRight className="h-5 w-5 ml-auto" aria-hidden="true" />
                </Link>
              </li>

              <li
                className={`transform transition-all duration-500 ${
                  animateItems ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <Link
                  href="/gallery"
                  className="flex items-center gap-4 p-3 rounded-lg bg-white/10 text-white transition-all hover:bg-white/20"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ borderRadius: "0.5rem", WebkitBorderRadius: "0.5rem" }}
                >
                  <ImageIcon className="h-5 w-5 text-[#A59765]" aria-hidden="true" />
                  <span className="text-lg font-medium">Galerie</span>
                  <ChevronRight className="h-5 w-5 ml-auto" aria-hidden="true" />
                </Link>
              </li>

              <li
                className={`transform transition-all duration-500 ${
                  animateItems ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: "250ms" }}
              >
                <Link
                  href="/contact"
                  className="flex items-center gap-4 p-3 rounded-lg bg-white/10 text-white transition-all hover:bg-white/20"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ borderRadius: "0.5rem", WebkitBorderRadius: "0.5rem" }}
                >
                  <Mail className="h-5 w-5 text-[#A59765]" aria-hidden="true" />
                  <span className="text-lg font-medium">Contact</span>
                  <ChevronRight className="h-5 w-5 ml-auto" aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </nav>

          {/* Bouton CTA - marge augmentée */}
          <div
            className={`mt-16 transform transition-all duration-500 ${
              animateItems ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 w-full rounded-full bg-[#A59765] px-6 py-4 text-lg font-medium text-white transition-all duration-300 hover:bg-[#8a7d53] hover:shadow-lg"
              onClick={() => setIsMenuOpen(false)}
              style={{ borderRadius: "9999px", WebkitBorderRadius: "9999px" }}
              aria-label="Demander un devis pour votre projet"
            >
              Demander un devis
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>

          {/* Réseaux sociaux - remontés */}
          <div
            className={`mt-auto mb-8 pt-8 flex justify-center gap-4 transform transition-all duration-500 ${
              animateItems ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "350ms" }}
          >
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 p-3 text-white transition-all hover:bg-[#A59765]"
              aria-label="Facebook Entreprise D'Yen"
              style={{ borderRadius: "9999px", WebkitBorderRadius: "9999px" }}
            >
              <Facebook className="h-6 w-6" aria-hidden="true" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 p-3 text-white transition-all hover:bg-[#A59765]"
              aria-label="Instagram Entreprise D'Yen"
              style={{ borderRadius: "9999px", WebkitBorderRadius: "9999px" }}
            >
              <Instagram className="h-6 w-6" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

