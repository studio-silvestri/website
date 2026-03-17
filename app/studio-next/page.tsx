import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Studio Next – Beratung für junge Gastronomiebetriebe',
  description:
    'Studio Next begleitet junge Gastronomiebetriebe von der Idee bis zum laufenden Betrieb. Konzeptentwicklung, Finanzstruktur, operative Unterstützung und Markenaufbau.',
  openGraph: {
    title: 'Studio Next – Beratung für junge Gastronomiebetriebe',
    description:
      'Wir begleiten junge Gastronomiebetriebe von der Idee bis zum laufenden Betrieb.',
    url: 'https://www.studio-silvestri.ch/studio-next',
  },
}

const services = [
  {
    category: 'Konzeptentwicklung',
    items: [
      'Gastronomikonzept von Grund auf entwickeln',
      'Positionierung und Zielgruppenanalyse',
      'Standortanalyse und Marktforschung',
      'Betriebskonzept und Raumplanung',
      'Angebots- und Menüentwicklung',
      'Naming, Identity und Designbegleitung',
    ],
  },
  {
    category: 'Finanzstruktur',
    items: [
      'Businessplan und Finanzplanung',
      'Kostenkalkulation und Preisgestaltung',
      'Investitionsplanung und Finanzierungsmodelle',
      'Break-even-Analyse und Rentabilitätsprüfung',
      'Fördermittelberatung und Bankgespräche',
      'KPI-Entwicklung und Controlling-Systeme',
    ],
  },
  {
    category: 'Operative Unterstützung',
    items: [
      'Prozess- und Ablaufoptimierung',
      'Personalplanung und Stellenprofile',
      'Lieferantensuche und Einkaufsberatung',
      'HACCP und Hygienekonzepte',
      'Eröffnungsbegleitung und Soft Opening',
      'Laufende operative Beratung',
    ],
  },
  {
    category: 'Markenaufbau',
    items: [
      'Markenentwicklung und Markenstrategie',
      'Social-Media-Strategie und Content-Konzept',
      'PR und Kommunikationsplanung',
      'Eventplanung für Eröffnungen und Aktionen',
      'Community-Building und lokale Vernetzung',
      'Digitale Präsenz und Online-Marketing',
    ],
  },
]

const process = [
  {
    step: '01',
    title: 'Kennenlernen',
    description:
      'Wir nehmen uns Zeit für ein ausführliches Erstgespräch. Ohne Verkaufsdruck, mit ehrlichem Zuhören.',
  },
  {
    step: '02',
    title: 'Analyse',
    description:
      'Wir analysieren Ihre Situation, Ihren Markt und Ihre Ressourcen — sachlich und ohne Beschönigung.',
  },
  {
    step: '03',
    title: 'Konzept',
    description:
      'Gemeinsam entwickeln wir ein massgeschneidertes Konzept, das zu Ihnen und Ihrem Standort passt.',
  },
  {
    step: '04',
    title: 'Umsetzung',
    description:
      'Wir begleiten Sie durch die Umsetzung — von der Planung bis zum ersten Gast und darüber hinaus.',
  },
]

export default function StudioNextPage() {
  return (
    <>
      {/* Page Header */}
      <section className="py-24 md:py-32 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 border border-bordeaux flex items-center justify-center text-bordeaux text-xs font-medium tracking-wider">
              SN
            </div>
            <p className="section-subheading mb-0">Ein Bereich von Studio Silvestri</p>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-anthracite max-w-3xl leading-tight mb-6">
            Studio Next
          </h1>
          <p className="text-lg md:text-xl text-anthracite/60 max-w-2xl leading-relaxed">
            Beratung für junge Gastronomiebetriebe. Von der Idee bis zum laufenden Betrieb.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="section-heading mb-6">
                Was ist Studio Next?
              </h2>
              <p className="text-base md:text-lg text-anthracite/70 leading-relaxed mb-6">
                Studio Next ist der Beratungsbereich von Studio Silvestri, der sich
                speziell an Gründerinnen und Gründer in der Gastronomie richtet. Ob
                erstes Restaurant, neues Café-Konzept oder innovativer Gastrobetrieb:
                Wir begleiten Sie durch alle Phasen.
              </p>
              <p className="text-base text-anthracite/60 leading-relaxed mb-6">
                Die Gastronomie ist eine der herausforderndsten Branchen überhaupt.
                Sie verlangt Kreativität und Kalkulation, Herzblut und Struktur,
                Gastfreundschaft und unternehmerisches Denken. Studio Next bringt
                all das zusammen.
              </p>
              <p className="text-base text-anthracite/60 leading-relaxed">
                Wir sind kein Unternehmensberater im klassischen Sinne. Wir sind
                Praktiker mit Erfahrung an der Front — und wir reden im Klartext.
              </p>
            </div>
            <div className="border border-gray-200 p-8 self-start">
              <p className="text-xs tracking-widest uppercase text-bordeaux mb-6">
                Für wen ist Studio Next?
              </p>
              <ul className="space-y-4">
                {[
                  'Gastronomiebetriebe in der Gründungsphase',
                  'Bestehende Betriebe mit Entwicklungsbedarf',
                  'Investoren und Immobilieneigentümer mit Gastroflächen',
                  'Unternehmen, die Betriebsgastronomie planen',
                  'Hotels und Beherbergungsbetriebe',
                  'Pop-ups und temporäre Konzepte',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-bordeaux rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm text-anthracite/70 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 md:py-32 border-t border-gray-200 bg-anthracite/[0.02]">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <p className="section-subheading">Leistungen</p>
            <h2 className="section-heading max-w-2xl">
              Was wir für Sie tun können
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.category}
                className="border border-gray-200 p-8 hover:border-bordeaux transition-colors duration-300"
              >
                <h3 className="text-base font-medium text-anthracite mb-6 tracking-tight">
                  {service.category}
                </h3>
                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-bordeaux rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-anthracite/65 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 md:py-32 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <p className="section-subheading">Vorgehen</p>
            <h2 className="section-heading">Wie wir arbeiten</h2>
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

      {/* CTA */}
      <section className="py-24 md:py-32 bg-bordeaux text-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm tracking-widest uppercase text-white/60 mb-4">
                Studio Next
              </p>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
                Ihr Gastrokonzept verdient die beste Begleitung.
              </h2>
              <p className="text-base text-white/70 leading-relaxed">
                Vereinbaren Sie ein unverbindliches Erstgespräch. Wir hören zu.
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
