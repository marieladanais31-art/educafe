import React from 'react';
import Image from 'next/image';
import {
  HeartHandshake,
  ShieldCheck,
} from 'lucide-react';
import VolunteerForm from '@/components/VolunteerForm';

export const metadata = {
  title: 'Voluntariat i Uneix-te | Associació Cristiana EducaFe',
  description: 'Suma\'t a l\'equip de voluntariat de l\'Associació Cristiana EducaFe a Mont-roig del Camp i comarques de Tarragona.',
};

export default function VoluntariatPage() {
  return (
    <div className="space-y-16 py-12">
      
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 text-teal-800 text-xs font-bold uppercase tracking-wider border border-teal-200">
            <HeartHandshake className="w-4 h-4 text-teal-600" />
            <span>Participació Ciutadana i Acció Comunitària</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Voluntariat i Uneix-te a EducaFe
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            El voluntariat és el cor de la nostra entitat. Si comparteixes la vocació de servei, la solidaritat i el compromís amb la igualtat d&apos;oportunitats per a la infància i joventut, hi ha un espai per a tu a EducaFe.
          </p>
        </div>
      </section>

      {/* Foto de l'Equip d'Educadors i Voluntaris */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-white aspect-[16/9]">
          <Image
            src="/images/team-educafe-lineup.jpg"
            alt="Equip de voluntaris i professionals de l'Associació EducaFe"
            fill
            className="object-contain object-center"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6 sm:p-8">
            <div className="text-white space-y-1">
              <div className="text-xs font-bold uppercase tracking-wider text-teal-400">Equip Humà</div>
              <div className="text-lg sm:text-xl font-bold">Un equip compromès amb el desenvolupament socioeducatiu a Catalunya</div>
            </div>
          </div>
        </div>
      </section>

      {/* Perfils de Voluntariat */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Àmbits de Participació Voluntària
          </h2>
          <p className="text-slate-600 text-sm">
            Modalitats d&apos;acció adaptades al teu perfil, disponibilitat i competències.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
              🧭
            </div>
            <h3 className="text-lg font-bold text-slate-900">Mentoria i Reforç Escolar</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Possibles tasques de suport a l&apos;estudi, motivació acadèmica i foment de l&apos;autonomia personal en les iniciatives que s&apos;activin.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold">
              💻
            </div>
            <h3 className="text-lg font-bold text-slate-900">Dinamització Digital i IA</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Possible suport en activitats de competència digital, pensament crític i ús responsable d&apos;eines tecnològiques.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              🤝
            </div>
            <h3 className="text-lg font-bold text-slate-900">Suport Comunitari i Famílies</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Ajuda en trobades de famílies, activitats comunitàries a l&apos;aire lliure, aprenentatge-servei (ApS) i logística d&apos;esdeveniments.
            </p>
          </div>

        </div>
      </section>

      {/* Marc Legal i Entorn Segur */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-4">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
            <ShieldCheck className="w-5 h-5 text-teal-600 shrink-0" />
            <span>Garanties del Voluntariat i Entorn Segur (Llei 25/2015 i LOPIVI)</span>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed">
            Abans de qualsevol incorporació es formalitzaran les condicions corresponents, inclosos l&apos;acord de voluntariat, les cobertures exigibles, la formació inicial i l&apos;acompanyament.
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            En compliment de la LOPIVI, és requisit indispensable aportar la <strong>certificació negativa del Registre Central de Delinqüents Sexuals i de Tracta</strong> abans d&apos;iniciar qualsevol activitat en contacte amb menors.
          </p>
        </div>
      </section>

      {/* Formulari d'Inscripció Interactiu */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <VolunteerForm lang="ca" />
      </section>

    </div>
  );
}
