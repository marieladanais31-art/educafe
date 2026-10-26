import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.asociacioneducafe.org'),
  title: {
    default: 'Associació Cristiana EducaFe | Acció Socioeducativa i Equitat Juvenil',
    template: '%s | Associació Cristiana EducaFe',
  },
  description:
    'Associació cristiana. Educació en valors per a famílies, esglésies i escoles. Acció socioeducativa, Projecte Brúixola i suport familiar a Catalunya.',
  keywords: [
    'Associació Cristiana EducaFe',
    'NIF G19357789',
    'Projecte Brúixola',
    'Acció socioeducativa Tarragona',
    'Mont-roig del Camp',
    'Suport familiar',
    'Parentalitat positiva',
    'Orientació juvenil',
    'Protecció infància LOPIVI',
    'Transparència associacions',
  ],
  authors: [{ name: 'Associació Cristiana EducaFe' }],
  creator: 'Associació Cristiana EducaFe',
  publisher: 'Associació Cristiana EducaFe',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Associació Cristiana EducaFe | Acció Socioeducativa i Equitat Juvenil',
    description:
      'Impulsem oportunitats educatives per a la infància, adolescència i famílies a Tarragona amb vocació de servei i inclusió.',
    url: 'https://www.asociacioneducafe.org',
    siteName: 'Associació Cristiana EducaFe',
    locale: 'ca_ES',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    name: 'Associació Cristiana EducaFe',
    legalName: 'ASOCIACIÓN CRISTIANA EDUCAFE',
    taxID: 'G19357789',
    identifier: '75881',
    url: 'https://www.asociacioneducafe.org',
    logo: 'https://www.asociacioneducafe.org/images/logo-educafe-official.png',
    email: 'info@asociacioneducafe.org',
    description:
      'Entitat sense ànim de lucre dedicada a l\'acompanyament socioeducatiu, suport a les famílies i inclusió comunitària.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mont-roig del Camp',
      addressRegion: 'Tarragona',
      addressCountry: 'ES',
    },
  };

  return (
    <html lang="ca" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased bg-slate-950 text-slate-100 selection:bg-sky-500 selection:text-white font-sans">
        <Header />
        <main className="flex-grow bg-white text-slate-900">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
