import React from 'react';
import Link from 'next/link';
import { Cookie, ShieldCheck, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Política de Cookies | Asociación Cristiana EducaFe',
  description: 'Información sobre el uso de cookies y tecnologías de almacenamiento en la web de la Asociación Cristiana EducaFe.',
};

export default function EsPoliticaCookiesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
      <div>
        <Link href="/es" className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-800 transition-colors mb-4">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Volver al inicio</span>
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
          <h2 className="text-base font-bold text-slate-900">1. ¿Qué son las cookies?</h2>
          <p>
            Una cookie es un pequeño archivo de texto que un sitio web almacena en el navegador del usuario para garantizar el funcionamiento técnico de la página, recordar preferencias de navegación (como el idioma seleccionado) y mejorar la experiencia de uso.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">2. Cookies utilizadas en este sitio web</h2>
          <p>
            La <strong>Asociación Cristiana EducaFe</strong> utiliza exclusivamente cookies de carácter técnico y estrictamente necesario:
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-600 pl-2">
            <li><strong>Cookies técnicas estrictamente necesarias:</strong> Permiten la navegación a través del sitio web, la selección idiomática (catalán / castellano) y la gestión de sesiones seguras. Estas cookies no recopilan información con fines comerciales ni publicitarios.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">3. Cookies de terceros</h2>
          <p>
            Este sitio web no emplea redes publicitarias ni cookies de seguimiento de terceros destinadas a la elaboración de perfiles de usuario.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">4. Cómo gestionar o desactivar las cookies</h2>
          <p>
            Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de las opciones de tu navegador web (Chrome, Firefox, Safari, Edge). En caso de bloquear las cookies técnicas, es posible que algunas funcionalidades básicas no respondan correctamente.
          </p>
        </section>

        <section className="space-y-2 pt-4 border-t border-slate-100">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <ShieldCheck className="w-4 h-4 text-teal-600" />
            <span>Asociación Cristiana EducaFe · NIF G19357789 · info@asociacioneducafe.org</span>
          </div>
        </section>
      </div>
    </div>
  );
}