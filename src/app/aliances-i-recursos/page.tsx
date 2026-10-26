import React from 'react';
import { ExternalLink, Handshake, BookOpen, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Aliances i recursos | Associació Cristiana EducaFe',
  description: 'Col·laboracions educatives i metodològiques de l’Associació Cristiana EducaFe.',
};

export default function AliancesIRecursosPage() {
  return (
    <div className="space-y-16 py-12">
      
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-sky-800 text-xs font-bold uppercase tracking-wider border border-sky-200">
            <Handshake className="w-3.5 h-3.5 text-sky-600" />
            <span>Col·laboració Institucional</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Aliances i Recursos
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            EducaFe estableix vincles i aliances de cooperació tècnica i pedagògica per enriquir els programes d&apos;acompanyament juvenil i orientació formativa a Catalunya.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center gap-3 text-sky-600">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center font-bold">
                <BookOpen className="w-6 h-6 text-sky-600" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Chanak International Academy
                </h2>
                <span className="text-xs text-slate-500 font-medium">
                  Cooperació Pedagògica i Currículum d&apos;Habilitats
                </span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 text-slate-800 text-base sm:text-lg leading-relaxed">
              <p>
                <strong>Chanak International Academy</strong>, aliança per al Programa Life Skills, Character &amp; Leadership. Escola privada registrada al Florida Department of Education (#134620), candidata a acreditació MSA-CESS.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-slate-100">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                <span>Col·laboració acadèmica sense ànim de lucre en l&apos;àmbit socioeducatiu</span>
              </div>

              <a
                href="https://www.chanakacademy.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-all shadow-sm group"
              >
                <span>Visitar chanakacademy.org</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
