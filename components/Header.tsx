'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/ueber-uns', label: 'Über uns' },
  { href: '/studio-next', label: 'Studio Next' },
  { href: '/vitis-sylvestris', label: 'Vitis Sylvestris' },
  { href: '/foodtruck-connect', label: 'Foodtruck Connect' },
  { href: '/kontakt', label: 'Kontakt' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-sm md:text-base font-bold tracking-[0.2em] text-anthracite uppercase hover:text-bordeaux transition-colors duration-200 flex-shrink-0"
            onClick={() => setMobileOpen(false)}
          >
            Studio Silvestri
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Hauptnavigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs tracking-widest uppercase transition-colors duration-200 ${
                    isActive
                      ? 'text-bordeaux'
                      : 'text-anthracite/60 hover:text-bordeaux'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Menü schliessen' : 'Menü öffnen'}
            aria-expanded={mobileOpen}
          >
            <span
              className={`block w-5 h-px bg-anthracite transition-all duration-300 ${
                mobileOpen ? 'rotate-45 translate-y-[6.5px]' : ''
              }`}
            />
            <span
              className={`block w-5 h-px bg-anthracite transition-all duration-300 ${
                mobileOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-px bg-anthracite transition-all duration-300 ${
                mobileOpen ? '-rotate-45 -translate-y-[6.5px]' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden border-t border-gray-200 overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav
          className="max-w-6xl mx-auto px-6 py-6 flex flex-col gap-5"
          aria-label="Mobile Navigation"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-sm tracking-widest uppercase transition-colors duration-200 ${
                  isActive
                    ? 'text-bordeaux'
                    : 'text-anthracite/70 hover:text-bordeaux'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
