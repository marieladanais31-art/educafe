import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Lock, Mail, HeartHandshake, AlertCircle, FileText, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Protecció a la Infància (LOPIVI) | Associació Cristiana EducaFe',
  description: 'Protocol de protecció integral a la infància i l\'adolescència (LOPIVI), entorn segur i canal de comunicació confidencial.',
};

export default function ProteccioInfanciaPage() {
  return (
    <div className="space-y-16 py-12">
      
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-200">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Entorn Segur i Protecció Integral</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Compromís amb la Protecció a la Infància i l&apos;Adolescència
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            L&apos;Associació Cristiana EducaFe manté una política de tolerància zero davant qualsevol forma de violència, abús o negligència, aplicant de manera estricta el marc de la <strong>Llei Orgànica 8/2021 (LOPIVI)</strong>.
          </p>
        </div>
      </section>

      {/* Pilars del Protocol d'Entorn Segur */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Mesures i Protocols d&apos;Actuació
          </h2>
          <p className="text-slate-600 text-sm">
            Eines preventives per garantir espais protegits, respectuosos i afavoridors del desenvolupament integral.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Marc LOPIVI */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Marc Normatiu LOPIVI</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Compliment rigorós de la Llei Orgànica 8/2021, de 4 de juny, de protecció integral a la infància i l&apos;adolescència davant la violència en tots els nostres espais i activitats.
            </p>
          </div>

          {/* Card 2: Delegada de Protecció */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Delegada de Protecció</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              L&apos;entitat compta amb una professional responsable de l&apos;àmbit del <strong>Treball Social</strong> com a Delegada de Protecció, encarregada de vetllar pel protocol i atendre qualsevol situació.
            </p>
          </div>

          {/* Card 3: Selecció Segura */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Contractació i Voluntariat Segur</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Requeriment preceptiu del <strong>Certificat Negatiu del Registre Central de Delinqüents Sexuals i de Tracta</strong> per a tot el personal tècnic, col·laboradors i voluntariat de l&apos;entitat.
            </p>
          </div>

        </div>
      </section>

      {/* Caixa de Contacte Confidencial */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-6">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-400">
              <Lock className="w-4 h-4" />
              <span>Canal Confidencial i Segur</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">Canal de Comunicació de Protecció</h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Si ets un infant, jove, mare, pare, professional o voluntari i vols comunicar qualsevol situació de risc, dubte o incidència, pots contactar directament amb la nostra Delegada de Protecció amb total confidencialitat i protecció de dades.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="mailto:proteccio@asociacioneducafe.org"
              className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-slate-950 font-bold px-6 py-3.5 rounded-xl shadow-lg transition-colors text-sm"
            >
              <Mail className="w-4 h-4" />
              <span>proteccio@asociacioneducafe.org</span>
            </a>
            <span className="text-xs text-slate-400">
              Canal gestionat directament pel departament de Treball Social.
            </span>
          </div>
        </div>
      </section>

    </div>
  );
}
