import React from 'react';
import Link from 'next/link';
import {
  Heart,
  ShieldCheck,
  Building,
  CreditCard,
  FileCheck,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Lock
} from 'lucide-react';

export const metadata = {
  title: 'Donar i Col·laborar | Associació Cristiana EducaFe',
  description: 'Fes una donació filantròpica per donar suport al Projecte Brúixola i a les famílies vulnerables de Tarragona.',
};

export default function DonarPage() {
  return (
    <div className="space-y-16 py-12">
      
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 text-rose-800 text-xs font-bold uppercase tracking-wider border border-rose-200">
            <Heart className="w-4 h-4 text-rose-600 fill-rose-600" />
            <span>Suport Solidari i Filantropia</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Col·labora i Fes una Donació
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            La teva aportació és una <strong>donació filantròpica sense contraprestació</strong> destinada exclusivament a finançar beques de transport, material educatiu i suport a la infància i joventut vulnerable atesa pel <strong>Projecte Brúixola</strong>.
          </p>
        </div>
      </section>

      {/* Garantia de Gratuïtat i Destí dels Fons */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-950 to-sky-950 text-white border border-slate-800 space-y-6 shadow-xl">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400">Compromís Social i Destí d’Aportacions</span>
            <h2 className="text-2xl sm:text-3xl font-bold">100% Gratuït per a les Persones Beneficiàries</h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Tots els programes d&apos;acció socioeducativa d&apos;EducaFe són <strong>completament gratuïts per als menors i les seves famílies</strong>. Les donacions fan possible cobrir directament:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1.5 text-xs text-slate-300">
              <div className="text-base font-bold text-white flex items-center gap-1.5">
                <span>🚌 Beques de Transport</span>
              </div>
              <p>Desplaçament d&apos;adolescents de zones disseminades de Mont-roig i municipis veïns als tallers.</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1.5 text-xs text-slate-300">
              <div className="text-base font-bold text-white flex items-center gap-1.5">
                <span>🍎 Alimentació Saludable</span>
              </div>
              <p>Berenars nutritius durant les sessions d&apos;estudi i dinamització de la tarda.</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1.5 text-xs text-slate-300">
              <div className="text-base font-bold text-white flex items-center gap-1.5">
                <span>💻 Eines i Kits Digitals</span>
              </div>
              <p>Materials escolars, llicències i dispositius per al Laboratori de Tecnologia i IA.</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1.5 text-xs text-slate-300">
              <div className="text-base font-bold text-white flex items-center gap-1.5">
                <span>🤝 Sortides Comunitàries</span>
              </div>
              <p>Activitats de natura, convivència familiar i aprenentatge-servei totalment cobertes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Canals de Donació Oficials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Vies Oficials de Donació Directa
          </h2>
          <p className="text-slate-600 text-sm">
            Canals segurs i directes de l&apos;Associació Cristiana EducaFe (sense intermediaris comercials).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Caixa 1: Donació Online amb Targeta / Stripe */}
          <div className="p-8 rounded-3xl bg-white border-2 border-sky-100 shadow-md space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                  <CreditCard className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Donació Segura Online (Stripe)</h3>
                  <p className="text-xs text-slate-500">Targeta de crèdit/dèbit, Apple Pay i Google Pay</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-sky-50/60 border border-sky-200 space-y-3 text-xs text-slate-800">
                <div className="text-sm font-bold text-sky-950 flex items-center gap-2">
                  <Lock className="w-4 h-4 text-sky-600" />
                  <span>Passarel·la Segura d’Aportacions Solidàries</span>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  Pots fer la teva donació puntual o periòdica directament a través del portal segur de Stripe de l’Associació Cristiana EducaFe.
                </p>
                <div className="pt-2">
                  <a
                    href="https://donate.stripe.com/test_educafe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-md transition-all text-sm group"
                  >
                    <Heart className="w-4 h-4 fill-white" />
                    <span>Fer Donació Online Segura</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
                <p className="text-[11px] text-slate-500 text-center">
                  Processat de forma encriptada i directa a través de Stripe Payments Europe.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1 text-xs text-slate-600">
              <div className="font-bold text-slate-900 flex items-center gap-1.5">
                <FileCheck className="w-4 h-4 text-sky-600" />
                <span>Desgravació Fiscal en IRPF i IS</span>
              </div>
              <p>Rebràs automàticament el rebut per a la deducció fiscal del Model 182 de l&apos;AEAT.</p>
            </div>
          </div>

          {/* Caixa 2: Transferència Bancària */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-md space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Transferència Bancària Institucional</h3>
                  <p className="text-xs text-slate-500">Compte oficial de l&apos;Associació Cristiana EducaFe</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-xs text-slate-800">
                <div>
                  <span className="font-bold text-slate-500 uppercase block">Titular del Compte:</span>
                  <span className="font-semibold text-sm text-slate-900">ASOCIACIÓN CRISTIANA EDUCAFE</span>
                </div>
                <div>
                  <span className="font-bold text-slate-500 uppercase block">NIF de l&apos;Entitat:</span>
                  <span className="font-mono font-bold text-sm text-sky-700">G19357789</span>
                </div>
                <div>
                  <span className="font-bold text-slate-500 uppercase block">Concepte Recomanat:</span>
                  <span className="font-semibold text-slate-900">Donació Projecte Brúixola + Nom Donant</span>
                </div>
                <div>
                  <span className="font-bold text-slate-500 uppercase block">IBAN Bancari:</span>
                  <span className="font-mono font-bold text-xs sm:text-sm text-slate-900 bg-white px-2.5 py-1 rounded border border-slate-300 block select-all">
                    ES84 0182 4315 7002 0158 8175
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed">
              Pots sol·licitar el teu certificat fiscal enviant el justificant de transferència a <a href="mailto:info@asociacioneducafe.org" className="text-sky-600 font-bold underline">info@asociacioneducafe.org</a>.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
