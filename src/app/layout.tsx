import type { Metadata } from 'next';
import { Outfit, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.asociacioneducafe.org'),
  title: {
    default: 'Asociación EducaFe | Hub de Innovación Social, Empleabilidad y Life Skills',
    template: '%s | Asociación EducaFe',
  },
  description:
    'ASOCIACIÓN CRISTIANA EDUCAFE (NIF G19357789). Hub de Innovación Social en Cataluña enfocado en capacitación tecnológica (IA), sostenibilidad (Green Hub), bienestar (Life Skills) y alianza con Chanak International Academy.',
  keywords: [
    'Asociación EducaFe',
    'NIF G19357789',
    'Innovación Social Cataluña',
    'Life Skills jóvenes',
    'Empleabilidad juvenil',
    'Capacitación Inteligencia Artificial',
    'Chanak International Academy',
    'Dual Diploma España',
    'Prevención fracaso escolar',
    'El Perelló Tarragona',
  ],
  authors: [{ name: 'ASOCIACIÓN CRISTIANA EDUCAFE' }],
  creator: 'ASOCIACIÓN CRISTIANA EDUCAFE',
  publisher: 'ASOCIACIÓN CRISTIANA EDUCAFE',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Asociación EducaFe | Hub de Innovación Social y Desarrollo Juvenil',
    description:
      'Impulsamos el talento juvenil, la empleabilidad y el bienestar integral a través de la tecnología, la sostenibilidad y las competencias emocionales en Cataluña.',
    url: 'https://www.asociacioneducafe.org',
    siteName: 'Asociación EducaFe',
    locale: 'es_ES',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'YOUR_GOOGLE_SEARCH_CONSOLE_CODE_HERE',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'ASOCIACIÓN CRISTIANA EDUCAFE',
    taxID: 'G19357789',
    url: 'https://www.asociacioneducafe.org',
    logo: 'https://www.asociacioneducafe.org/images/logo-educafe-official.png',
    email: 'info@asociacioneducafe.org',
    description:
      'Hub de Innovación Social, Empleabilidad, Sostenibilidad y Habilidades para la Vida (Life Skills) impulsando el talento juvenil y la prevención del fracaso escolar en Cataluña.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mont-Roig del Camp',
      addressRegion: 'Tarragona',
      addressCountry: 'ES',
    },
    sameAs: ['https://www.asociacioneducafe.org'],
    knowsAbout: [
      'Innovación Social',
      'Life Skills',
      'Inteligencia Artificial',
      'Sostenibilidad',
      'Chanak International Academy',
      'Dual Diploma',
    ],
  };

  return (
    <html lang="es" className={`${outfit.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased bg-slate-950 text-slate-100 selection:bg-sky-500 selection:text-white">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
