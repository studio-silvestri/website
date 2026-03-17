import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Vitis Sylvestris – Weinberatung für Bars & Restaurants',
  description:
    'Vitis Sylvestris verbindet regionale Winzer mit der urbanen Gastronomie. Weinkarten, Schulungen, Logistik und Weinkultur für Bars und Restaurants.',
  openGraph: {
    title: 'Vitis Sylvestris – Weinberatung für Bars & Restaurants',
    description:
      'Vitis Sylvestris verbindet regionale Winzer mit der urbanen Gastronomie.',
    url: 'https://www.studio-silvestri.ch/vitis-sylvestris',
  },
}

const services = [
  {
    title: 'Weinkarten',
    description:
      'Wir entwickeln Weinkarten, die zur Identität Ihres Betriebs passen — übersichtlich, profitabel und mit echtem Charakter. Von der kompakten Selektion bis zur umfassenden Kollektion.',
    details: [
      'Analyse bestehender Weinkarten',
      'Entwicklung neuer Weinkarten-Konzepte',
      'Preisgestaltung und Margenkalkulation',
      'Saisonale Anpassungen und Rotationen',
      'Weinbeschreibungen und Kommunikation',
      'Kompatibilität mit dem Speisenangebot',
    ],
  },
  {
    title: 'Team-Schulungen',
    description:
      'Weinwissen, das im Servicealltag nützt. Wir schulen Ihre Mitarbeitenden praxisnah, damit sie Gäste kompetent beraten und Wein mit Begeisterung empfehlen können.',
    details: [
      'Grundlagen der Weinproduktion',
      'Wichtigste Rebsorten und Anbaugebiete',
      'Sensorik und Weinbeschreibung',
      'Weinempfehlung zu Speisen',
      'Servicestandards und Präsentation',
      'Individualschulungen und Weinevents',
    ],
  },
  {
    title: 'Winzer-Netzwerk',
    description:
      'Wir haben ein etabliertes Netzwerk zu regionalen Winzern in der Schweiz und im benachbarten Ausland. Wir bringen Gastrobetriebe und Produzenten direkt zusammen — für echte Partnerschaften.',
    details: [
      'Direktkontakte zu Schweizer Winzern',
      'Produzenten aus Österreich, Deutschland, Frankreich, Italien',
      'Vorauswahl und Degustation',
      'Verhandlungsunterstützung',
      'Exklusive und limitierte Positionen',
      'Story-Telling rund um die Produzenten',
    ],
  },
  {
    title: 'Logistik & Einkauf',
    description:
      'Von der Bestellung bis zur Kellerverwaltung: Wir unterstützen Sie beim Aufbau effizienter Einkaufs- und Lagerstrukturen, die zu Ihrer Betriebsgrösse passen.',
    details: [
      'Einkaufsplanung und Bestellprozesse',
      'Lagerkonzepte und Inventarisierung',
      'Lieferantenmanagement',
      'Saisonale Weinkauf-Strategien',
      'Budgetplanung und Kostenkontrolle',
      'Kellerbuch und Bestandsführung',
    ],
  },
]

export default function VitisSylvestrisPage() {
  return (
    <>
      {/* Page Header */}
      <section className="py-24 md:py-32 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 border border-bordeaux flex items-center justify-center text-bordeaux text-xs font-medium tracking-wider">
              VS
            </div>
            <p className="section-subheading mb-0">Ein Bereich von Studio Silvestri</p>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-anthracite max-w-3xl leading-tight mb-6">
            Vitis Sylvestris
          </h1>
          <p className="text-lg md:text-xl text-anthracite/60 max-w-2xl leading-relaxed">
            Weinberatung für Bars und Restaurants. Vom Keller bis zum Glas.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="section-heading mb-6">
                Wein mit Bedeutung
              </h2>
              <p className="text-base md:text-lg text-anthracite/70 leading-relaxed mb-6">
                Vitis Sylvestris — die Wildweinrebe — steht für Ursprünglichkeit,
                Authentizität und den Wert von echtem Terroir. Diese Philosophie
                tragen wir in unsere Weinberatung.
              </p>
              <p className="text-base text-anthracite/60 leading-relaxed mb-6">
                Wein ist mehr als ein Produkt auf der Karte. Er ist Gesprächsstoff,
                Identitätsmerkmal und Umsatztreiber zugleich. Mit Vitis Sylvestris
                holen Sie sich eine Sommelier-Erfahrung, die nicht im Elfenbeinturm
                lebt, sondern im Alltag Ihres Betriebs ankommt.
              </p>
              <p className="text-base text-anthracite/60 leading-relaxed">
                Wir verbinden regionale Winzer mit der urbanen Gastronomie —
                kurze Wege, echte Beziehungen, grossartige Weine.
              </p>
            </div>
            <div className="space-y-6">
              <div className="border border-gray-200 p-8 border-l-2 border-l-bordeaux">
                <p className="text-xl font-light text-anthracite italic leading-relaxed">
                  "Ein guter Wein auf der Karte ist kein Zufall.
                  Er ist das Ergebnis von Wissen, Netzwerk und dem Willen,
                  Gäste wirklich zu begeistern."
                </p>
                <p className="text-sm text-bordeaux mt-4 tracking-wide">
                  — Severin Silvestri, Sommelier
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: 'CH', label: 'Fokus Schweiz' },
                  { value: '+', label: 'Direktimport' },
                  { value: '360°', label: 'Vollberatung' },
                ].map((item) => (
                  <div key={item.value} className="border border-gray-200 p-4 text-center">
                    <p className="text-xl font-light text-bordeaux mb-1">{item.value}</p>
                    <p className="text-xs text-anthracite/50 tracking-wide">{item.label}</p>
                  </div>
                ))}
              </div>
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
              Unser Angebot
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="border border-gray-200 p-8 hover:border-bordeaux transition-colors duration-300 group"
              >
                <h3 className="text-lg font-medium text-anthracite mb-3 group-hover:text-bordeaux transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-anthracite/60 leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-bordeaux rounded-full mt-2 flex-shrink-0" />
                      <span className="text-xs text-anthracite/55 leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regions */}
      <section className="py-24 md:py-32 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <p className="section-subheading">Netzwerk</p>
            <h2 className="section-heading max-w-2xl">
              Regionale Verwurzelung, internationaler Blick
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-base text-anthracite/70 leading-relaxed mb-6">
                Unser Herz schlägt für die Schweizer Weinlandschaft — von der
                Waadt über das Wallis bis zum Graubünden. Gleichzeitig pflegen
                wir enge Verbindungen zu Produzenten in den klassischen
                europäischen Weinregionen.
              </p>
              <p className="text-base text-anthracite/60 leading-relaxed">
                Wir arbeiten mit Winzern zusammen, die handwerklich arbeiten,
                Terroir respektieren und Qualität über Quantität stellen. Diese
                Sorgfalt spiegelt sich in jedem Wein wider, den wir empfehlen.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-0">
              {[
                { region: 'Schweiz', focus: 'Primärer Fokus' },
                { region: 'Österreich', focus: 'Nachbarland & Qualität' },
                { region: 'Frankreich', focus: 'Klassische Lagen' },
                { region: 'Italien', focus: 'Regionale Vielfalt' },
                { region: 'Deutschland', focus: 'Riesling & Spätburgunder' },
                { region: 'Spanien', focus: 'Neue Entdeckungen' },
              ].map((item, index) => (
                <div
                  key={item.region}
                  className="border border-gray-200 p-5 hover:border-bordeaux transition-colors duration-300"
                  style={{ marginTop: index >= 2 ? '-1px' : '0', marginLeft: index % 2 === 1 ? '-1px' : '0' }}
                >
                  <p className="text-sm font-medium text-anthracite mb-1">{item.region}</p>
                  <p className="text-xs text-anthracite/50">{item.focus}</p>
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
                Vitis Sylvestris
              </p>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
                Bringen wir Ihre Weinkarte auf das nächste Niveau.
              </h2>
              <p className="text-base text-white/70 leading-relaxed">
                Für ein erstes Gespräch über Ihre aktuelle Situation und Ihre Ziele.
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
