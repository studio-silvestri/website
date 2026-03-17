import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Über uns – Studio Silvestri',
  description:
    'Lernen Sie Studio Silvestri und Gründer Severin Silvestri kennen. Gastrokonzeptentwickler, Eventstratege und Sommelier mit über zehn Jahren Erfahrung in der Schweizer Hospitality-Branche.',
  openGraph: {
    title: 'Über uns – Studio Silvestri',
    description:
      'Lernen Sie Studio Silvestri und Gründer Severin Silvestri kennen.',
    url: 'https://www.studio-silvestri.ch/ueber-uns',
  },
}

const values = [
  {
    name: 'Exzellenz',
    description:
      'Wir liefern keine halben Lösungen. Jeder Auftrag wird mit dem Anspruch angegangen, das Bestmögliche zu erreichen — für unsere Kunden und für die Gäste dahinter.',
  },
  {
    name: 'Regionalität',
    description:
      'Wir glauben an den Wert von lokalen Produkten, regionalen Netzwerken und verwurzelten Konzepten. Die Schweizer Gastronomielandschaft ist unser Heimspiel.',
  },
  {
    name: 'Gastfreundschaft',
    description:
      'Gastfreundschaft ist kein Berufsbild — es ist eine Haltung. Wir tragen sie in jede Beratung, jede Zusammenarbeit und jede Begegnung.',
  },
  {
    name: 'Verbindlichkeit',
    description:
      'Was wir versprechen, halten wir. Pünktlichkeit, Transparenz und Verlässlichkeit sind keine Extras, sondern Grundvoraussetzungen unserer Arbeit.',
  },
  {
    name: 'Mitgefühl',
    description:
      'Wir verstehen, dass hinter jedem Betrieb ein Mensch steht — mit Träumen, Druck und Verantwortung. Wir hören zu, bevor wir handeln.',
  },
  {
    name: 'Ruhe & Klarheit',
    description:
      'In einer schnellen Branche sind Ruhe und Klarheit echte Stärken. Wir schaffen Orientierung, auch wenn es komplex wird.',
  },
  {
    name: 'Weiterentwicklung',
    description:
      'Stillstand ist kein Konzept für uns. Wir lernen, hinterfragen, und passen uns an — damit unsere Kunden immer einen Schritt voraus sind.',
  },
]

export default function UeberUnsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="py-24 md:py-32 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <p className="section-subheading">Wer wir sind</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-anthracite max-w-3xl leading-tight">
            Studio Silvestri
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="section-heading mb-8">
                Eine Beratungsplattform mit Charakter
              </h2>
              <p className="text-base md:text-lg text-anthracite/70 leading-relaxed mb-6">
                Studio Silvestri ist eine kreative und operative Beratungsplattform
                mit Sitz in Zürich. Wir unterstützen Unternehmen und Einzelpersonen
                in der Gastronomie, im Eventbereich und in der Markenentwicklung —
                mit Fachkenntnis, Bodenhaftung und echter Leidenschaft.
              </p>
              <p className="text-base text-anthracite/60 leading-relaxed mb-6">
                Unser Ansatz ist ganzheitlich: Wir denken Konzepte zu Ende, begleiten
                ihre Umsetzung und bleiben auch dann ansprechbar, wenn es schwierig
                wird. Denn gute Beratung hört nicht mit dem Konzeptpapier auf.
              </p>
              <p className="text-base text-anthracite/60 leading-relaxed">
                Wir wissen, was wir tun — und wir machen es mit Leidenschaft.
              </p>
            </div>
            <div className="space-y-0">
              <div className="border border-gray-200 p-8">
                <p className="text-xs tracking-widest uppercase text-bordeaux mb-3">Vision</p>
                <p className="text-base text-anthracite/70 leading-relaxed">
                  Ein netzwerkbasiertes Kompetenzzentrum für Hospitality-Innovation —
                  in dem Kreativität, Strategie und operative Exzellenz Hand in Hand gehen.
                </p>
              </div>
              <div className="border border-gray-200 border-t-0 p-8">
                <p className="text-xs tracking-widest uppercase text-bordeaux mb-3">Mission</p>
                <p className="text-base text-anthracite/70 leading-relaxed">
                  Wir geben Gastronomiebetrieben, Veranstaltern und Marken das Handwerkszeug
                  und die Begleitung, die sie brauchen, um nachhaltig erfolgreich zu sein —
                  ohne den menschlichen Faktor aus den Augen zu verlieren.
                </p>
              </div>
              <div className="border border-gray-200 border-t-0 p-8">
                <p className="text-xs tracking-widest uppercase text-bordeaux mb-3">Philosophie</p>
                <p className="text-base text-anthracite/70 leading-relaxed">
                  Weniger Buzzwords, mehr Substanz. Weniger Versprechen, mehr Ergebnisse.
                  Wir bauen auf Vertrauen, Netzwerk und gelebte Erfahrung — nicht auf
                  Hochglanzpräsentationen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-24 md:py-32 border-t border-gray-200 bg-anthracite/[0.02]">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="md:col-span-1">
              <p className="section-subheading">Gründer</p>
              {/* Portrait placeholder */}
              <div className="w-full aspect-[3/4] border border-gray-200 bg-anthracite/5 flex items-center justify-center mb-6">
                <div className="text-center">
                  <div className="w-16 h-16 border border-bordeaux flex items-center justify-center text-bordeaux text-xl font-light tracking-widest mx-auto mb-3">
                    SS
                  </div>
                  <p className="text-xs tracking-widest uppercase text-anthracite/40">
                    Portrait
                  </p>
                </div>
              </div>
              <h2 className="text-2xl font-medium text-anthracite tracking-tight mb-1">
                Severin Silvestri
              </h2>
              <p className="text-sm text-bordeaux tracking-wide mb-4">
                Gründer & Geschäftsführer
              </p>
              <div className="space-y-1">
                {[
                  'Gastrokonzeptentwickler',
                  'Eventstratege',
                  'Sommelier',
                ].map((role) => (
                  <p key={role} className="text-xs text-anthracite/50 tracking-wide">
                    — {role}
                  </p>
                ))}
              </div>
            </div>

            <div className="md:col-span-2 space-y-8">
              <div>
                <h3 className="text-xl font-medium text-anthracite mb-4 tracking-tight">
                  Profil
                </h3>
                <p className="text-base text-anthracite/70 leading-relaxed mb-4">
                  Severin Silvestri bringt über zehn Jahre Erfahrung in der Schweizer
                  Hospitality-Branche mit. Seine Laufbahn ist geprägt von der Arbeit
                  in einem Michelin-Stern-Restaurant, wo er Exzellenz als täglichen
                  Standard verinnerlicht hat.
                </p>
                <p className="text-base text-anthracite/70 leading-relaxed mb-4">
                  Als F&B Manager hat er operative Verantwortung übernommen, Konzepte
                  entwickelt und Teams geführt. Mit dem Zürich Openair hat er eines der
                  bekanntesten Musikfestivals der Schweiz mitgestaltet und weiss, was es
                  heisst, unter Druck zu performen.
                </p>
                <p className="text-base text-anthracite/70 leading-relaxed">
                  Diese Vielseitigkeit — von der Spitzengastronomie über das
                  Eventmanagement bis zur strategischen Markenentwicklung — ist das
                  Herzstück von Studio Silvestri.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: 'Erfahrung', value: '10+ Jahre' },
                  { label: 'Spitzengastronomie', value: 'Michelin-Stern-Restaurant' },
                  { label: 'Eventexpertise', value: 'Zürich Openair' },
                  { label: 'Rolle', value: 'F&B Manager' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="border border-gray-200 p-5"
                  >
                    <p className="text-xs tracking-widest uppercase text-bordeaux mb-1">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium text-anthracite">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <p className="section-subheading">Was uns leitet</p>
            <h2 className="section-heading max-w-2xl">
              Sieben Werte. Ein Versprechen.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            {values.map((value, index) => (
              <div
                key={value.name}
                className="border border-gray-200 p-8 hover:border-bordeaux transition-colors duration-300 group"
                style={{
                  marginTop: index > 0 ? '-1px' : '0',
                  marginLeft: index % 3 > 0 ? '-1px' : '0',
                }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-xs text-bordeaux/50 font-mono mt-1">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-base font-medium text-anthracite mb-3 group-hover:text-bordeaux transition-colors duration-300">
                      {value.name}
                    </h3>
                    <p className="text-sm text-anthracite/60 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
          <p className="section-subheading">Bereit für ein Gespräch?</p>
          <h2 className="section-heading mb-8 max-w-2xl mx-auto">
            Lernen wir uns kennen.
          </h2>
          <Link href="/kontakt" className="btn-primary">
            Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </>
  )
}
