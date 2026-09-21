import React from 'react';
import { Building, Heart, Mail, Users } from 'lucide-react';

export const metadata = {
  title: 'Donar i Col·laborar | Associació Cristiana EducaFe',
  description: 'Dona suport a la missió educativa i social de l’Associació Cristiana EducaFe mitjançant una aportació voluntària.',
};

export default function DonarPage() {
  return (
    <div className="space-y-16 py-12">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 text-rose-800 text-xs font-bold uppercase tracking-wider border border-rose-200">
            <Heart className="w-4 h-4 text-rose-600 fill-rose-600" /><span>Suport solidari</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">Col·labora amb EducaFe</h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">La teva aportació voluntària ajuda a sostenir activitats amb famílies, materials, formació del voluntariat i el desenvolupament de noves iniciatives socioeducatives.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-950 to-sky-950 text-white border border-slate-800 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-bold">Suport directe a la missió d’EducaFe</h2>
          <p className="mt-3 max-w-3xl text-sm sm:text-base text-slate-300 leading-relaxed">Les aportacions es destinen a activitats d’accés gratuït, al funcionament responsable de l’associació i a preparar programes que ampliïn les oportunitats educatives d’infants, adolescents i famílies.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-7 text-sm">
            {['📚 Material educatiu', '👨‍👩‍👧 Suport a famílies', '🤝 Formació del voluntariat', '🧭 Nous projectes'].map((item) => <div key={item} className="rounded-2xl border border-slate-800 bg-slate-900/90 p-4 font-bold">{item}</div>)}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div><h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Formes de donar suport</h2><p className="mt-2 text-sm text-slate-600">Pots fer una donació puntual o demanar informació per col·laborar de manera continuada.</p></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-white border-2 border-sky-100 shadow-md space-y-5">
            <Users className="w-8 h-8 text-sky-600" /><h3 className="text-xl font-bold text-slate-900">Col·laboració continuada</h3>
            <p className="text-sm text-slate-600 leading-relaxed">Si vols fer una aportació periòdica, col·laborar amb materials o donar suport a una activitat concreta, t’explicarem les opcions disponibles abans de formalitzar-la.</p>
            <a href="mailto:info@asociacioneducafe.org?subject=Vull%20col·laborar%20amb%20EducaFe" className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-5 py-3 text-sm font-bold text-white hover:bg-sky-700"><Mail className="w-4 h-4" /> Demanar informació</a>
            <p className="text-xs text-slate-500"><strong>Transparència:</strong> no s’anuncia cap deducció fiscal automàtica. Pots demanar un justificant de la teva aportació.</p>
          </div>
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-md space-y-5">
            <Building className="w-8 h-8 text-teal-600" /><h3 className="text-xl font-bold text-slate-900">Transferència bancària</h3>
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5 space-y-3 text-sm">
              <p><strong>Titular:</strong><br />ASOCIACIÓN CRISTIANA EDUCAFE</p><p><strong>NIF:</strong><br /><span className="font-mono">G19357789</span></p><p><strong>Concepte:</strong><br />Donació EducaFe + Nom del donant</p><p><strong>IBAN:</strong><br /><span className="font-mono font-bold select-all">ES84 0182 4315 7002 0158 8175</span></p>
            </div>
            <p className="text-xs text-slate-500">Per demanar un justificant, envia el comprovant a <a href="mailto:info@asociacioneducafe.org" className="font-bold text-sky-700 underline">info@asociacioneducafe.org</a>.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
