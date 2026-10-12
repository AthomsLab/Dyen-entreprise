"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

/**
 * Subtle scroll-reveal: fade + slight slide up as content enters the viewport.
 * - Classes are added by JS only, so content stays visible without JS.
 * - The first section (hero) is left alone so the LCP is never delayed.
 * - Uses transform/opacity only (no layout shift), one shared IntersectionObserver.
 * - Disabled when the user prefers reduced motion.
 */
const SELECTOR = [
  "main section:not(:first-of-type) h2",
  "main section:not(:first-of-type) h3",
  "main section:not(:first-of-type) p",
  "main section:not(:first-of-type) img",
  "main section:not(:first-of-type) .grid > *",
  "main section:not(:first-of-type) a[class*='rounded']",
  "footer .grid > *",
].join(",")

export default function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    if (!("IntersectionObserver" in window)) return

    const all = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR))
    // Keep only the outermost matches so nested elements don't animate twice.
    const els = all.filter((el) => !all.some((o) => o !== el && o.contains(el)))

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return
          const el = e.target as HTMLElement
          el.classList.add("sr-in")
          io.unobserve(el)
        })
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    )

    els.forEach((el) => {
      // Stagger siblings (cards in a grid, consecutive paragraphs…), capped to stay snappy.
      const parent = el.parentElement
      const index = parent ? Array.from(parent.children).indexOf(el) : 0
      el.style.setProperty("--sr-delay", `${Math.min(index, 5) * 80}ms`)
      el.classList.add("sr")
      io.observe(el)
    })

    return () => {
      io.disconnect()
      els.forEach((el) => el.classList.remove("sr", "sr-in"))
    }
  }, [pathname])

  return null
}
