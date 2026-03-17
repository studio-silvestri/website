import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'Studio Silvestri – Beratung & Konzepte',
    template: '%s | Studio Silvestri',
  },
  description:
    'Studio Silvestri ist eine kreative und operative Beratungsplattform mit Sitz in Zürich. Wir begleiten Gastronomiebetriebe, Events und Marken mit Leidenschaft und Expertise.',
  keywords: [
    'Gastronomiebetrieb',
    'Beratung',
    'Gastronomiekonzept',
    'Weinberatung',
    'Foodtruck',
    'Zürich',
    'Eventstrategie',
    'Markenentwicklung',
  ],
  authors: [{ name: 'Severin Silvestri' }],
  creator: 'Studio Silvestri',
  openGraph: {
    type: 'website',
    locale: 'de_CH',
    url: 'https://www.studio-silvestri.ch',
    siteName: 'Studio Silvestri',
    title: 'Studio Silvestri – Beratung & Konzepte',
    description:
      'Studio Silvestri ist eine kreative und operative Beratungsplattform mit Sitz in Zürich.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Studio Silvestri – Beratung & Konzepte',
    description:
      'Studio Silvestri ist eine kreative und operative Beratungsplattform mit Sitz in Zürich.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de-CH" className={inter.variable}>
      <body className="font-sans antialiased bg-cream text-anthracite min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
