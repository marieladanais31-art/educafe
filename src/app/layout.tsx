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
    'Associació Cristiana EducaFe (NIF G19357789 · Registre Generalitat núm. 75881). Entitat sense ànim de lucre compromesa amb l\'equitat, l\'orientació juvenil (Projecte Brúixola), suport familiar i inclusió a les comarques de Tarragona.',
  keywords: [
    'Associació Cristiana EducaFe',
    'NIF G19357789',
    'Projecte Brúixola',
    'Acció socioeducativa Tarragona',
    'Mont-roig del Camp',
    'Suport familiar i parentalitat positiva',
    'Orientació juvenil Baix Camp',
    'Protecció a la infància LOPIVI',
    'Transparència associacions Catalunya',
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
      'Impulsem oportunitats educatives per a la infància, l\'adolescència i les famílies a les comarques de Tarragona. Programes gratuïts, d\'accés obert i aconfessionals.',
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
