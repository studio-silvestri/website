import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kontakt – Studio Silvestri',
  description:
    'Nehmen Sie Kontakt mit Studio Silvestri auf. Wir freuen uns auf Ihre Anfrage. Zürich, Schweiz.',
  openGraph: {
    title: 'Kontakt – Studio Silvestri',
    description:
      'Nehmen Sie Kontakt mit Studio Silvestri auf. Wir freuen uns auf Ihre Anfrage.',
    url: 'https://www.studio-silvestri.ch/kontakt',
  },
}

const topics = [
  { value: 'studio-next', label: 'Studio Next – Gastronomieberatung' },
  { value: 'vitis-sylvestris', label: 'Vitis Sylvestris – Weinberatung' },
  { value: 'foodtruck-connect', label: 'Foodtruck Connect' },
  { value: 'allgemein', label: 'Allgemeine Anfrage' },
  { value: 'zusammenarbeit', label: 'Zusammenarbeit / Partnerschaft' },
]

export default function KontaktPage() {
  return (
    <>
      {/* Page Header */}
      <section className="py-24 md:py-32 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <p className="section-subheading">Schreiben Sie uns</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-anthracite max-w-3xl leading-tight">
            Kontakt
          </h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {/* Contact Info */}
            <div className="md:col-span-1 space-y-8">
              <div>
                <h2 className="text-xl font-medium text-anthracite mb-6 tracking-tight">
                  Studio Silvestri
                </h2>
                <div className="space-y-6">
                  <div>
                    <p className="text-xs tracking-widest uppercase text-bordeaux mb-2">
                      E-Mail
                    </p>
                    <a
                      href="mailto:info@studio-silvestri.ch"
                      className="text-sm text-anthracite hover:text-bordeaux transition-colors duration-200"
                    >
                      info@studio-silvestri.ch
                    </a>
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-bordeaux mb-2">
                      Standort
                    </p>
                    <p className="text-sm text-anthracite/70">
                      Zürich, Schweiz
                    </p>
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-bordeaux mb-2">
                      Sprachen
                    </p>
                    <p className="text-sm text-anthracite/70">
                      Deutsch, Englisch, Französisch
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <p className="text-xs tracking-widest uppercase text-bordeaux mb-4">
                  Unsere Bereiche
                </p>
                <div className="space-y-3">
                  {[
                    { name: 'Studio Next', href: '/studio-next' },
                    { name: 'Vitis Sylvestris', href: '/vitis-sylvestris' },
                    { name: 'Foodtruck Connect', href: '/foodtruck-connect' },
                  ].map((area) => (
                    <a
                      key={area.name}
                      href={area.href}
                      className="flex items-center gap-2 text-sm text-anthracite/60 hover:text-bordeaux transition-colors duration-200 group"
                    >
                      <span className="w-4 h-px bg-anthracite/30 group-hover:bg-bordeaux transition-colors duration-200" />
                      {area.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <p className="text-sm text-anthracite/60 leading-relaxed italic">
                  &ldquo;Wir nehmen uns Zeit für jede Anfrage.
                  Wir melden uns innerhalb von 48 Stunden.&rdquo;
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <form
                action="mailto:info@studio-silvestri.ch"
                method="post"
                encType="text/plain"
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs tracking-widest uppercase text-anthracite/60 mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Ihr Name"
                      className="w-full border border-gray-200 bg-transparent px-4 py-3 text-sm text-anthracite placeholder-anthracite/30 focus:outline-none focus:border-bordeaux transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs tracking-widest uppercase text-anthracite/60 mb-2"
                    >
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="ihre@email.ch"
                      className="w-full border border-gray-200 bg-transparent px-4 py-3 text-sm text-anthracite placeholder-anthracite/30 focus:outline-none focus:border-bordeaux transition-colors duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-xs tracking-widest uppercase text-anthracite/60 mb-2"
                  >
                    Unternehmen / Betrieb
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Optional"
                    className="w-full border border-gray-200 bg-transparent px-4 py-3 text-sm text-anthracite placeholder-anthracite/30 focus:outline-none focus:border-bordeaux transition-colors duration-200"
                  />
                </div>

                <div>
                  <label
                    htmlFor="topic"
                    className="block text-xs tracking-widest uppercase text-anthracite/60 mb-2"
                  >
                    Betreff
                  </label>
                  <select
                    id="topic"
                    name="topic"
                    className="w-full border border-gray-200 bg-cream px-4 py-3 text-sm text-anthracite focus:outline-none focus:border-bordeaux transition-colors duration-200 appearance-none cursor-pointer"
                  >
                    <option value="" disabled>
                      Bitte wählen...
                    </option>
                    {topics.map((topic) => (
                      <option key={topic.value} value={topic.value}>
                        {topic.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs tracking-widest uppercase text-anthracite/60 mb-2"
                  >
                    Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={7}
                    placeholder="Schildern Sie uns Ihr Anliegen, Ihren Betrieb oder Ihr Projekt..."
                    className="w-full border border-gray-200 bg-transparent px-4 py-3 text-sm text-anthracite placeholder-anthracite/30 focus:outline-none focus:border-bordeaux transition-colors duration-200 resize-none"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="datenschutz"
                    name="datenschutz"
                    required
                    className="mt-1 w-4 h-4 border border-gray-300 accent-bordeaux cursor-pointer"
                  />
                  <label
                    htmlFor="datenschutz"
                    className="text-xs text-anthracite/55 leading-relaxed cursor-pointer"
                  >
                    Ich habe die Datenschutzhinweise gelesen und bin damit einverstanden,
                    dass Studio Silvestri meine Angaben zur Bearbeitung meiner Anfrage
                    verwendet. *
                  </label>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="btn-primary w-full sm:w-auto text-center"
                  >
                    Nachricht senden
                  </button>
                  <p className="text-xs text-anthracite/40 mt-4">
                    * Pflichtfelder. Alternativ können Sie uns direkt an{' '}
                    <a
                      href="mailto:info@studio-silvestri.ch"
                      className="underline hover:text-bordeaux transition-colors"
                    >
                      info@studio-silvestri.ch
                    </a>{' '}
                    schreiben.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map/Location placeholder */}
      <section className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-32">
          <div className="border border-gray-200 p-12 text-center">
            <p className="text-xs tracking-widest uppercase text-anthracite/40 mb-4">
              Standort
            </p>
            <p className="text-2xl font-light text-anthracite mb-2">Zürich</p>
            <p className="text-sm text-anthracite/50">Schweiz</p>
            <div className="mt-8 flex items-center justify-center gap-8">
              <div className="h-px flex-1 bg-gray-200 max-w-[100px]" />
              <span className="text-bordeaux text-xl">◎</span>
              <div className="h-px flex-1 bg-gray-200 max-w-[100px]" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
