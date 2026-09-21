import React from 'react';
import Link from 'next/link';
import { CheckCircle2, FileText, Mail, Scale, ShieldCheck } from 'lucide-react';

export const metadata = { title: 'Transparencia | Asociación Cristiana EducaFe', description: 'Información institucional, registral y de buen gobierno de la Asociación Cristiana EducaFe.' };

const documents = ['Estatutos inscritos', 'Resolución de inscripción registral', 'Tarjeta de identificación fiscal', 'Información económica del último ejercicio cerrado', 'Plan de voluntariado y documentos de entorno seguro'];

export default function EsTransparenciaPage() {
  return (
    <div className="space-y-16 py-12">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl space-y-4"><div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-sky-700"><Scale className="h-4 w-4" /> Rendición de cuentas</div><h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">Transparencia institucional</h1><p className="text-base sm:text-lg leading-relaxed text-slate-600">Compartimos de forma clara la identidad jurídica, la gobernanza y los compromisos de la Asociación Cristiana EducaFe.</p></div></section>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="rounded-2xl border border-slate-200 bg-white p-6"><ShieldCheck className="h-6 w-6 text-sky-700" /><div className="mt-4 text-xs font-bold uppercase text-slate-500">Entidad</div><div className="mt-1 font-bold text-slate-900">Asociación Cristiana EducaFe</div></div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6"><FileText className="h-6 w-6 text-teal-700" /><div className="mt-4 text-xs font-bold uppercase text-slate-500">NIF</div><div className="mt-1 font-mono font-bold text-slate-900">G19357789</div></div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6"><Scale className="h-6 w-6 text-amber-700" /><div className="mt-4 text-xs font-bold uppercase text-slate-500">Registro</div><div className="mt-1 font-bold text-slate-900">Generalitat de Catalunya nº 75881</div></div>
      </div></section>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"><div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-10"><h2 className="text-2xl font-bold text-slate-900">Documentación institucional</h2><p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">La entidad está revisando y ordenando su repositorio público para garantizar que cada descarga corresponda al documento completo y vigente. Mientras finaliza ese proceso, la documentación puede solicitarse directamente.</p><ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">{documents.map((item) => <li key={item} className="flex gap-2 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700"><CheckCircle2 className="h-4 w-4 shrink-0 text-teal-600" />{item}</li>)}</ul><a href="mailto:info@asociacioneducafe.org?subject=Solicitud%20de%20documentación%20institucional" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-sky-600 px-5 py-3 text-sm font-bold text-white hover:bg-sky-700"><Mail className="h-4 w-4" /> Solicitar documentación</a></div></section>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"><div className="rounded-3xl bg-slate-900 p-8 text-white"><h2 className="text-xl font-bold">Gobernanza y participación</h2><p className="mt-3 text-sm leading-relaxed text-slate-300">La información sobre la Junta Directiva, la misión y la naturaleza de la acción social está disponible en la sección Quiénes Somos.</p><Link href="/es/quienes-somos#junta" className="mt-5 inline-block text-sm font-bold text-sky-300 underline">Ver quiénes somos y Junta Directiva</Link></div></section>
    </div>
  );
}
