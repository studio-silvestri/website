import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Studio Silvestri – Beratung & Konzepte für Gastronomie, Events & Markenentwicklung',
  description:
    'Studio Silvestri ist eine kreative und operative Beratungsplattform mit Sitz in Zürich. Wir begleiten Gastronomiebetriebe, Events und Marken von der Idee bis zur Umsetzung.',
  openGraph: {
    title: 'Studio Silvestri – Beratung & Konzepte',
    description:
      'Kreative und operative Beratungsplattform mit Sitz in Zürich für Gastronomie, Events und Markenentwicklung.',
    url: 'https://www.studio-silvestri.ch',
  },
}

const subbrands = [
  {
    name: 'Studio Next',
    tagline: 'Gastronomiebetriebe aufbauen & entwickeln',
    description:
      'Wir begleiten junge Gastronomiebetriebe von der ersten Idee bis zum laufenden Betrieb. Konzeptentwicklung, Finanzstruktur, operationale Unterstützung und Markenaufbau – alles aus einer Hand.',
    href: '/studio-next',
    accent: 'SN',
    color: 'border-bordeaux',
  },
  {
    name: 'Vitis Sylvestris',
    tagline: 'Weinberatung für Bars & Restaurants',
    description:
      'Von der Weinkarte bis zum Schulungskonzept: Wir verbinden regionale Winzer mit der urbanen Gastronomie und bringen Weinkultur auf ein neues Niveau.',
    href: '/vitis-sylvestris',
    accent: 'VS',
    color: 'border-bordeaux',
  },
  {
    name: 'Foodtruck Connect',
    tagline: 'Die Plattform für Foodtrucks & Events',
    description:
      'Wir vermitteln zwischen Foodtruck-Betreibern und Veranstaltern, übernehmen Kommunikation, Planung, Vertragsgestaltung und Zahlungsmanagement – damit beide Seiten sich aufs Wesentliche konzentrieren können.',
    href: '/foodtruck-connect',
    accent: 'FC',
    color: 'border-bordeaux',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[90vh] flex items-center border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-24 w-full">
          <div className="max-w-4xl">
            <p className="section-subheading">Zürich, Schweiz</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-anthracite leading-tight mb-8">
              Beratung & Konzepte für{' '}
              <span className="text-bordeaux">Gastronomie</span>,{' '}
              Events & Markenentwicklung
            </h1>
            <p className="text-lg md:text-xl text-anthracite/70 leading-relaxed mb-6 max-w-2xl">
              Studio Silvestri ist eine kreative und operative Beratungsplattform
              mit Sitz in Zürich. Wir begleiten Gastronomiebetriebe, Events und
              Marken von der Idee bis zur nachhaltigen Umsetzung.
            </p>
            <p className="text-base md:text-lg text-anthracite/60 leading-relaxed mb-12 max-w-2xl">
              Wir wissen, was wir tun — und wir machen es mit Leidenschaft.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/kontakt" className="btn-primary">
                Kontakt aufnehmen
              </Link>
              <Link href="/ueber-uns" className="btn-secondary">
                Über uns
              </Link>
            </div>
          </div>

          {/* Decorative element */}
          <div className="mt-16 md:mt-24 flex gap-8 items-center">
            <div className="h-px flex-1 bg-gray-200 max-w-xs" />
            <span className="text-xs tracking-widest uppercase text-anthracite/40">
              Studio Silvestri
            </span>
            <div className="h-px flex-1 bg-gray-200 max-w-xs" />
          </div>
        </div>
      </section>

      {/* Subbrands */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <p className="section-subheading">Unsere Marken</p>
            <h2 className="section-heading max-w-2xl">
              Drei spezialisierte Bereiche. Ein gemeinsames Fundament.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {subbrands.map((brand) => (
              <Link
                key={brand.name}
                href={brand.href}
                className="group block border border-gray-200 p-8 hover:border-bordeaux transition-all duration-300 hover:shadow-sm"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 border border-bordeaux flex items-center justify-center text-bordeaux text-sm font-medium tracking-wider group-hover:bg-bordeaux group-hover:text-white transition-all duration-300">
                    {brand.accent}
                  </div>
                  <svg
                    className="w-5 h-5 text-anthracite/30 group-hover:text-bordeaux transition-colors duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 transform transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M7 17L17 7M17 7H7M17 7v10"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-anthracite mb-2 tracking-tight">
                  {brand.name}
                </h3>
                <p className="text-sm text-bordeaux tracking-wide mb-4">
                  {brand.tagline}
                </p>
                <p className="text-sm text-anthracite/60 leading-relaxed">
                  {brand.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="py-24 md:py-32 border-t border-gray-200 bg-anthracite/[0.02]">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-subheading">Über Studio Silvestri</p>
              <h2 className="section-heading mb-6">
                Erfahrung, die zählt. Leidenschaft, die bewegt.
              </h2>
              <p className="text-base md:text-lg text-anthracite/70 leading-relaxed mb-6">
                Gegründet von Severin Silvestri — Gastrokonzeptentwickler,
                Eventstratege und Sommelier mit über zehn Jahren Erfahrung in der
                Schweizer Hospitality-Branche.
              </p>
              <p className="text-base text-anthracite/60 leading-relaxed mb-8">
                Von Michelin-Stern-Restaurants bis zum Zürich Openair: Unser Fundament
                ist gelebte Erfahrung. Unser Ziel ist ein netzwerkbasiertes
                Kompetenzzentrum für Hospitality-Innovation.
              </p>
              <Link href="/ueber-uns" className="btn-secondary">
                Mehr erfahren
              </Link>
            </div>
            <div className="space-y-6">
              {[
                { value: '10+', label: 'Jahre Erfahrung in der Hospitality-Branche' },
                { value: '3', label: 'Spezialisierte Beratungsbereiche' },
                { value: 'ZH', label: 'Verwurzelt in Zürich, vernetzt in der Schweiz' },
              ].map((stat) => (
                <div
                  key={stat.value}
                  className="flex items-center gap-6 border-l-2 border-bordeaux pl-6 py-2"
                >
                  <span className="text-3xl font-light text-bordeaux min-w-[4rem]">
                    {stat.value}
                  </span>
                  <span className="text-sm text-anthracite/60 leading-relaxed">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values snippet */}
      <section className="py-24 md:py-32 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <p className="section-subheading">Unsere Werte</p>
            <h2 className="section-heading">Was uns antreibt</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {[
              'Exzellenz',
              'Regionalität',
              'Gastfreundschaft',
              'Verbindlichkeit',
              'Mitgefühl',
              'Ruhe & Klarheit',
              'Weiterentwicklung',
            ].map((value) => (
              <div
                key={value}
                className="text-center py-6 px-3 border border-gray-200 hover:border-bordeaux hover:text-bordeaux transition-all duration-300 cursor-default"
              >
                <span className="text-xs tracking-widest uppercase text-anthracite/70 hover:text-bordeaux leading-relaxed">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-bordeaux text-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
          <p className="text-sm tracking-widest uppercase text-white/60 mb-6">
            Bereit für das nächste Kapitel?
          </p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-8 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam etwas Aussergewöhnliches aufbauen.
          </h2>
          <Link
            href="/kontakt"
            className="inline-block bg-white text-bordeaux px-8 py-3 text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:bg-cream hover:scale-[1.02]"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </>
  )
}
