"use client"

import { useEffect, useState } from "react"

export default function SkipToContent() {
  const [isVisible, setIsVisible] = useState(false)

  // Gérer la visibilité du lien lors de la navigation au clavier
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        setIsVisible(true)
      }
    }

    const handleMouseDown = () => {
      setIsVisible(false)
    }

    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("mousedown", handleMouseDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("mousedown", handleMouseDown)
    }
  }, [])

  return (
    <a
      href="#main-content"
      className={`fixed left-4 top-4 z-[100] transform bg-[#A59765] px-4 py-2 text-white transition-transform duration-200 focus:outline-none ${
        isVisible ? "translate-y-0" : "-translate-y-16"
      }`}
      style={{ borderRadius: "0.25rem", WebkitBorderRadius: "0.25rem" }}
    >
      Aller au contenu principal
    </a>
  )
}

