import Link from 'next/link'

const footerLinks = [
  { href: '/ueber-uns', label: 'Über uns' },
  { href: '/studio-next', label: 'Studio Next' },
  { href: '/vitis-sylvestris', label: 'Vitis Sylvestris' },
  { href: '/foodtruck-connect', label: 'Foodtruck Connect' },
  { href: '/kontakt', label: 'Kontakt' },
]

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-cream">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-sm font-bold tracking-[0.2em] text-anthracite uppercase hover:text-bordeaux transition-colors duration-200 block mb-4"
            >
              Studio Silvestri
            </Link>
            <p className="text-sm text-anthracite/55 leading-relaxed max-w-xs">
              Kreative und operative Beratungsplattform für Gastronomie, Events und
              Markenentwicklung. Mit Sitz in Zürich.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs tracking-widest uppercase text-bordeaux mb-5">
              Navigation
            </p>
            <nav className="flex flex-col gap-3" aria-label="Footer Navigation">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-anthracite/60 hover:text-bordeaux transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs tracking-widest uppercase text-bordeaux mb-5">
              Kontakt
            </p>
            <div className="space-y-3">
              <a
                href="mailto:info@studio-silvestri.ch"
                className="text-sm text-anthracite/60 hover:text-bordeaux transition-colors duration-200 block"
              >
                info@studio-silvestri.ch
              </a>
              <p className="text-sm text-anthracite/50">Zürich, Schweiz</p>
            </div>

            <div className="mt-8">
              <p className="text-xs tracking-widest uppercase text-bordeaux mb-4">
                Bereiche
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: 'SN', href: '/studio-next', title: 'Studio Next' },
                  { label: 'VS', href: '/vitis-sylvestris', title: 'Vitis Sylvestris' },
                  { label: 'FC', href: '/foodtruck-connect', title: 'Foodtruck Connect' },
                ].map((brand) => (
                  <Link
                    key={brand.label}
                    href={brand.href}
                    title={brand.title}
                    className="w-8 h-8 border border-bordeaux flex items-center justify-center text-bordeaux text-xs font-medium hover:bg-bordeaux hover:text-white transition-all duration-200"
                  >
                    {brand.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-anthracite/40">
            © 2026 Studio Silvestri. Alle Rechte vorbehalten.
          </p>
          <p className="text-xs text-anthracite/30 tracking-wide">
            Zürich · Schweiz
          </p>
        </div>
      </div>
    </footer>
  )
}
