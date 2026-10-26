import React from 'react';
import Link from 'next/link';
import { Cookie, ShieldCheck, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Política de Cookies | Associació Cristiana EducaFe',
  description: 'Informació sobre l’ús de cookies i tecnologies d’emmagatzematge a la web de l’Associació Cristiana EducaFe.',
};

export default function PoliticaCookiesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
      <div>
        <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-800 transition-colors mb-4">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Tornar a l&apos;inici</span>
        </Link>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
            <Cookie className="w-5 h-5 text-sky-600" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Política de Cookies
          </h1>
        </div>
      </div>

      <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6 text-sm text-slate-700 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">1. Què són les cookies?</h2>
          <p>
            Una cookie és un petit fitxer de text que un lloc web emmagatzema al navegador de l&apos;usuari per garantir el funcionament tècnic de la pàgina, recordar preferències de navegació (com ara l&apos;idioma seleccionat) i millorar l&apos;experiència d&apos;ús.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">2. Cookies utilitzades en aquest lloc web</h2>
          <p>
            L&apos;<strong>Associació Cristiana EducaFe</strong> utilitza exclusivament cookies de caràcter tècnic i necessari:
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-600 pl-2">
            <li><strong>Cookies tècniques estrictament necessàries:</strong> Permeten la navegació a través del lloc web, l&apos;elecció lingüística (català / castellà) i la gestió de sessions segures. Aquestes cookies no recopilen informació amb finalitats comercials ni publicitàries.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">3. Cookies de tercers</h2>
          <p>
            Aquest lloc web no utilitza xarxes d&apos;anuncis ni cookies de seguiment de tercers destinades a l&apos;elaboració de perfils d&apos;usuaris.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">4. Com gestionar o desactivar les cookies</h2>
          <p>
            Pots permetre, bloquejar o eliminar les cookies instal·lades al teu equip mitjançant la configuració de les opcions del teu navegador web (Chrome, Firefox, Safari, Edge). En cas de bloquejar les cookies tècniques, és possible que algunes funcionalitats bàsiques no responguin correctament.
          </p>
        </section>

        <section className="space-y-2 pt-4 border-t border-slate-100">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <ShieldCheck className="w-4 h-4 text-teal-600" />
            <span>Associació Cristiana EducaFe · NIF G19357789 · info@asociacioneducafe.org</span>
          </div>
        </section>
      </div>
    </div>
  );
}