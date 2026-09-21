import React from 'react';
import Link from 'next/link';
import { CheckCircle2, HeartHandshake, Mail, ShieldCheck, Users } from 'lucide-react';

export const metadata = {
  title: 'Hazte socio o colaborador | Asociación Cristiana EducaFe',
  description: 'Conoce las formas de vincularte de manera estable con la Asociación Cristiana EducaFe.',
};

export default function HazteSocioPage() {
  return (
    <div className="space-y-16 py-12">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-sky-800"><Users className="h-4 w-4" /> Comunidad EducaFe</div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">Hazte socio o colaborador</h1>
          <p className="text-base sm:text-lg leading-relaxed text-slate-600">EducaFe crece con personas que comparten su vocación educativa, su compromiso con las familias y su deseo de servir a la comunidad de manera responsable.</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="rounded-3xl border border-sky-200 bg-white p-8 shadow-sm">
            <ShieldCheck className="h-8 w-8 text-sky-700" /><h2 className="mt-5 text-2xl font-bold text-slate-900">Persona socia</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">Forma parte de la vida asociativa y participa conforme a los Estatutos, los acuerdos de la Asamblea y los procedimientos internos de admisión.</p>
            <ul className="mt-5 space-y-3 text-sm text-slate-700">{['Conocer y respaldar los fines de la asociación', 'Participar en la vida asociativa según los Estatutos', 'Asumir los compromisos aprobados por la entidad'].map((item) => <li key={item} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-600" />{item}</li>)}</ul>
          </article>
          <article className="rounded-3xl border border-teal-200 bg-white p-8 shadow-sm">
            <HeartHandshake className="h-8 w-8 text-teal-700" /><h2 className="mt-5 text-2xl font-bold text-slate-900">Persona colaboradora</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">Apoya de forma periódica o puntual sin adquirir la condición de socio: con una aportación, materiales, conocimientos profesionales o ayuda en actividades concretas.</p>
            <ul className="mt-5 space-y-3 text-sm text-slate-700">{['Colaboración flexible', 'Información clara sobre el destino del apoyo', 'Sin compromiso de participación en el gobierno de la entidad'].map((item) => <li key={item} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" />{item}</li>)}</ul>
          </article>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 p-8 sm:p-10 text-white">
          <h2 className="text-2xl font-bold">Solicita información antes de decidir</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300">Te enviaremos la información vigente sobre incorporación, derechos, deberes y formas de colaboración. Enviar una consulta no te convierte automáticamente en socio ni genera ninguna obligación económica.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="mailto:info@asociacioneducafe.org?subject=Información%20para%20hacerme%20socio%20o%20colaborador" className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-sm font-bold text-white hover:bg-sky-600"><Mail className="h-4 w-4" /> Solicitar información</a>
            <Link href="/es/transparencia" className="rounded-xl border border-slate-700 px-5 py-3 text-sm font-bold text-slate-200 hover:bg-slate-800">Consultar transparencia</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
