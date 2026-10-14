"use client"

import { useState, useEffect } from "react"
import { Palette, X, Check } from "lucide-react"

interface Theme {
  id: string
  name: string
  color: string
  description: string
}

const themes: Theme[] = [
  {
    id: "default",
    name: "Or (actuel)",
    color: "#A59765",
    description: "Palette dorée actuelle",
  },
  {
    id: "amber",
    name: "A: Ambre bois",
    color: "#C07830",
    description: "Ambre chaud évoquant le bois alpin",
  },
  {
    id: "forest",
    name: "B: Forêt",
    color: "#2D6A4F",
    description: "Vert profond des forêts alpines",
  },
  {
    id: "slate",
    name: "C: Ardoise",
    color: "#4A6FA5",
    description: "Bleu-gris harmonisé avec le footer",
  },
  {
    id: "terracotta",
    name: "D: Terracotta",
    color: "#B26A56",
    description: "Tons chauds terre cuite (non bordeaux)",
  },
]

export default function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentTheme, setCurrentTheme] = useState("default")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem("cimes-bois-theme")
    if (saved && themes.some((t) => t.id === saved)) {
      setCurrentTheme(saved)
      applyTheme(saved)
    }
  }, [])

  const applyTheme = (themeId: string) => {
    if (themeId === "default") {
      document.documentElement.removeAttribute("data-theme")
    } else {
      document.documentElement.setAttribute("data-theme", themeId)
    }
  }

  const selectTheme = (themeId: string) => {
    setCurrentTheme(themeId)
    applyTheme(themeId)
    localStorage.setItem("cimes-bois-theme", themeId)
  }

  if (!mounted) return null

  const currentThemeData = themes.find((t) => t.id === currentTheme)

  return (
    <div className="fixed bottom-4 right-4 z-[60] flex flex-col items-end gap-2">
      {isOpen && (
        <div
          className="mb-2 w-72 rounded-lg bg-white shadow-xl border border-gray-200 overflow-hidden"
          role="dialog"
          aria-label="Sélecteur de thème de couleur"
        >
          <div className="bg-gray-100 px-4 py-3 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold text-gray-800">Sélecteur de thème</h3>
                <p className="text-xs text-gray-500">Démo uniquement - non production</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded hover:bg-gray-200 transition-colors"
                aria-label="Fermer"
              >
                <X className="h-4 w-4 text-gray-500" />
              </button>
            </div>
          </div>
          <div className="p-3 space-y-2 max-h-[60vh] overflow-y-auto">
            {themes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => selectTheme(theme.id)}
                className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all text-left ${
                  currentTheme === theme.id
                    ? "bg-gray-100 ring-2 ring-offset-1"
                    : "hover:bg-gray-50"
                }`}
                style={{
                  ringColor: currentTheme === theme.id ? theme.color : undefined,
                }}
                aria-pressed={currentTheme === theme.id}
              >
                <div
                  className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center"
                  style={{ backgroundColor: theme.color }}
                >
                  {currentTheme === theme.id && (
                    <Check className="h-4 w-4 text-white" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-gray-800">{theme.name}</div>
                  <div className="text-xs text-gray-500 truncate">{theme.description}</div>
                </div>
              </button>
            ))}
          </div>
          <div className="bg-amber-50 px-4 py-2 border-t border-amber-100">
            <p className="text-xs text-amber-700">
              ⚠️ Outil de démo pour comparer les palettes de couleurs
            </p>
          </div>
        </div>
      )}
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-full shadow-lg transition-all hover:shadow-xl"
        style={{
          backgroundColor: currentThemeData?.color || "#A59765",
          color: "white",
        }}
        aria-label={isOpen ? "Fermer le sélecteur de thème" : "Ouvrir le sélecteur de thème"}
        aria-expanded={isOpen}
      >
        <Palette className="h-5 w-5" />
        <span className="text-sm font-medium">Thème</span>
      </button>
    </div>
  )
}
