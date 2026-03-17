import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Foodtruck Connect – Die Plattform für Foodtrucks & Events',
  description:
    'Foodtruck Connect vermittelt zwischen Foodtruck-Betreibern und Veranstaltern. Kommunikation, Planung, Vertragsgestaltung, Zahlungsmanagement und Sponsoringakquise.',
  openGraph: {
    title: 'Foodtruck Connect – Die Plattform für Foodtrucks & Events',
    description:
      'Foodtruck Connect vermittelt zwischen Foodtruck-Betreibern und Veranstaltern.',
    url: 'https://www.studio-silvestri.ch/foodtruck-connect',
  },
}

const forOperators = [
  'Zugang zu einem Netzwerk von Veranstaltern und Events',
  'Professionelle Vertragsgestaltung und rechtliche Absicherung',
  'Transparentes Zahlungsmanagement und Abrechnung',
  'Kommunikationsunterstützung mit Veranstaltern',
  'Beratung bei der Eventauswahl und Standplanung',
  'Unterstützung bei der Konzeptentwicklung',
  'Vernetzung mit anderen Foodtruck-Betreibern',
  'Hilfe bei Behördengängen und Bewilligungen',
]

const forOrganizers = [
  'Vermittlung passender Foodtrucks für Ihr Event',
  'Vorselektion nach Konzept, Qualität und Kapazität',
  'Koordination von mehreren Anbietern gleichzeitig',
  'Vertragsmanagement und rechtliche Absicherung',
  'Zahlungsabwicklung und Abrechnungsservice',
  'Sponsoringakquise für Food-Sponsoren',
  'On-site-Koordination und Logistikberatung',
  'Nachbereitung und Feedback-Management',
]

const process = [
  {
    step: '01',
    title: 'Anfrage',
    description:
      'Veranstalter und Foodtruck-Betreiber melden sich bei uns mit ihren Bedürfnissen und Rahmenbedingungen.',
  },
  {
    step: '02',
    title: 'Matching',
    description:
      'Wir gleichen Anforderungen, Kapazitäten und Konzepte ab und finden die passenden Partner für beide Seiten.',
  },
  {
    step: '03',
    title: 'Koordination',
    description:
      'Wir übernehmen die gesamte Kommunikation, Vertragsgestaltung und organisatorische Abstimmung.',
  },
  {
    step: '04',
    title: 'Durchführung',
    description:
      'Vom Aufbau bis zur Abrechnung: Wir begleiten den gesamten Prozess und sind Ansprechpartner für alle Beteiligten.',
  },
]

export default function FoodtruckConnectPage() {
  return (
    <>
      {/* Page Header */}
      <section className="py-24 md:py-32 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 border border-bordeaux flex items-center justify-center text-bordeaux text-xs font-medium tracking-wider">
              FC
            </div>
            <p className="section-subheading mb-0">Ein Bereich von Studio Silvestri</p>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-anthracite max-w-3xl leading-tight mb-6">
            Foodtruck Connect
          </h1>
          <p className="text-lg md:text-xl text-anthracite/60 max-w-2xl leading-relaxed">
            Die Vermittlungsplattform für Foodtruck-Betreiber und Veranstalter. Damit beide Seiten sich aufs Wesentliche konzentrieren können.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="section-heading mb-6">
                Was ist Foodtruck Connect?
              </h2>
              <p className="text-base md:text-lg text-anthracite/70 leading-relaxed mb-6">
                Foodtruck Connect ist die Schnittstelle zwischen zwei Welten: den
                leidenschaftlichen Foodtruck-Betreibern, die ihre Küche auf der
                Strasse leben — und den Veranstaltern, die einzigartige kulinarische
                Erlebnisse für ihr Publikum schaffen wollen.
              </p>
              <p className="text-base text-anthracite/60 leading-relaxed mb-6">
                Wir übernehmen die Kommunikation, Planung, Vertragsgestaltung und
                das Zahlungsmanagement. Beide Seiten sparen Zeit, vermeiden
                Missverständnisse und können sich auf das konzentrieren, was sie
                wirklich am besten können.
              </p>
              <p className="text-base text-anthracite/60 leading-relaxed">
                Dazu akquirieren wir Sponsoren und Partner für Food-Bereiche, die
                Events zu selbsttragenden oder profitablen Gastroangeboten machen.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '⟷', title: 'Vermittlung', desc: 'Wir bringen die richtigen Partner zusammen' },
                { icon: '◻', title: 'Verträge', desc: 'Rechtssichere Vertragsgestaltung für alle Beteiligten' },
                { icon: '◈', title: 'Zahlungen', desc: 'Transparentes Zahlungsmanagement und Abrechnung' },
                { icon: '◉', title: 'Sponsoring', desc: 'Akquise von Food-Sponsoren für Events' },
              ].map((item) => (
                <div key={item.title} className="border border-gray-200 p-6 hover:border-bordeaux transition-colors duration-300">
                  <span className="text-bordeaux text-xl mb-3 block">{item.icon}</span>
                  <h3 className="text-sm font-medium text-anthracite mb-2">{item.title}</h3>
                  <p className="text-xs text-anthracite/55 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* For whom */}
      <section className="py-24 md:py-32 border-t border-gray-200 bg-anthracite/[0.02]">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <p className="section-subheading">Für wen</p>
            <h2 className="section-heading max-w-2xl">
              Zwei Seiten. Eine Lösung.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-gray-200 p-8 hover:border-bordeaux transition-colors duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 border border-bordeaux flex items-center justify-center text-bordeaux text-xs">
                  FT
                </div>
                <h3 className="text-lg font-medium text-anthracite">
                  Für Foodtruck-Betreiber
                </h3>
              </div>
              <p className="text-sm text-anthracite/60 leading-relaxed mb-6">
                Sie konzentrieren sich auf Ihr Essen — wir kümmern uns um den Rest.
                Von der Eventsuche bis zur Abrechnung.
              </p>
              <ul className="space-y-3">
                {forOperators.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-bordeaux rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm text-anthracite/65 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-gray-200 p-8 hover:border-bordeaux transition-colors duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 border border-bordeaux flex items-center justify-center text-bordeaux text-xs">
                  EV
                </div>
                <h3 className="text-lg font-medium text-anthracite">
                  Für Veranstalter
                </h3>
              </div>
              <p className="text-sm text-anthracite/60 leading-relaxed mb-6">
                Sie planen Ihr Event — wir liefern das passende kulinarische
                Angebot. Verlässlich, professionell und auf Ihr Konzept abgestimmt.
              </p>
              <ul className="space-y-3">
                {forOrganizers.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-bordeaux rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm text-anthracite/65 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 md:py-32 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <p className="section-subheading">Ablauf</p>
            <h2 className="section-heading">Wie es funktioniert</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {process.map((step, index) => (
              <div
                key={step.step}
                className="border border-gray-200 p-8 hover:border-bordeaux transition-colors duration-300"
                style={{ marginLeft: index > 0 ? '-1px' : '0' }}
              >
                <span className="text-3xl font-light text-bordeaux/30 mb-4 block">
                  {step.step}
                </span>
                <h3 className="text-base font-medium text-anthracite mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-anthracite/60 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsoring */}
      <section className="py-24 md:py-32 border-t border-gray-200 bg-anthracite/[0.02]">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-subheading">Sponsoring</p>
              <h2 className="section-heading mb-6">
                Mehrwert durch Partnerschaften
              </h2>
              <p className="text-base text-anthracite/70 leading-relaxed mb-6">
                Wir akquirieren aktiv Food- und Getränke-Sponsoren für Events —
                Marken, die von der Sichtbarkeit profitieren und gleichzeitig den
                Event für alle Beteiligten bereichern.
              </p>
              <p className="text-base text-anthracite/60 leading-relaxed">
                Durch gezielte Partnerschaften können Events ihre Gastronomiekosten
                senken, neue Einnahmequellen erschliessen und gleichzeitig ein
                reichhaltigeres Angebot für ihre Besucher schaffen.
              </p>
            </div>
            <div className="space-y-0">
              {[
                { title: 'Für Veranstalter', desc: 'Kostenreduktion und zusätzliche Einnahmen durch Sponsorenbeiträge' },
                { title: 'Für Foodtruck-Betreiber', desc: 'Bessere Konditionen durch unterstützte Angebote und gemeinsame Auftritte' },
                { title: 'Für Sponsoren', desc: 'Gezielte Markenpräsenz bei kulinarisch affinem Publikum' },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="border border-gray-200 p-6"
                  style={{ borderTop: index > 0 ? 'none' : undefined }}
                >
                  <h3 className="text-sm font-medium text-bordeaux mb-2">{item.title}</h3>
                  <p className="text-sm text-anthracite/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-bordeaux text-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm tracking-widest uppercase text-white/60 mb-4">
                Foodtruck Connect
              </p>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
                Lassen Sie uns Ihr nächstes kulinarisches Event gemeinsam gestalten.
              </h2>
              <p className="text-base text-white/70 leading-relaxed">
                Ob Foodtruck-Betreiber oder Veranstalter — wir freuen uns auf Ihre Anfrage.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
              <Link
                href="/kontakt"
                className="inline-block bg-white text-bordeaux px-8 py-3 text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:bg-cream hover:scale-[1.02] text-center"
              >
                Kontakt aufnehmen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
