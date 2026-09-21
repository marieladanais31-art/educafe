import React from 'react';
import Image from 'next/image';
import { Users, BookOpen } from 'lucide-react';

export const metadata = {
  title: 'Qui Som | Associació Cristiana EducaFe',
  description: 'Identitat, fins estatutaris, valors, governança i equip de l\'Associació Cristiana EducaFe a Catalunya.',
};

export default function QuiSomPage() {
  return (
    <div className="space-y-16 py-12">
      
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-bold uppercase tracking-wider border border-sky-200">
            <Users className="w-3.5 h-3.5" />
            <span>Identitat i Governança</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Qui Som: Identitat, Missió i Valors
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Som una entitat sense ànim de lucre inscrita al Registre d&apos;Entitats Jurídiques de la Generalitat de Catalunya (núm. 75881), compromesa amb el desenvolupament comunitari i l&apos;equitat educativa.
          </p>
        </div>
      </section>

      {/* Foto Destacada d'Equip i Comunitat */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 aspect-[21/9]">
          <Image
            src="/images/family-javea.jpg"
            alt="Equip i comunitat de l'Associació EducaFe"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent flex items-end p-6 sm:p-8">
            <div className="text-white space-y-1">
              <div className="text-xs font-bold uppercase tracking-wider text-teal-400">Equip i Famílies</div>
              <div className="text-lg sm:text-xl font-bold">Comunitat EducaFe: Treball proper amb famílies i joventut</div>
            </div>
          </div>
        </div>
      </section>

      {/* Fins Estatutaris */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-sky-50/80 border border-sky-200 space-y-4">
          <div className="flex items-center gap-2 text-sky-800 font-bold text-sm uppercase tracking-wider">
            <BookOpen className="w-4 h-4 text-sky-600" />
            <span>Fins de l&apos;Entitat (Art. 2 dels Estatuts)</span>
          </div>
          <blockquote className="text-lg sm:text-xl font-medium text-slate-800 italic leading-relaxed border-l-4 border-sky-500 pl-4">
            &ldquo;Promoure el desenvolupament educatiu, personal i comunitari d&apos;infants, adolescents i famílies, amb atenció preferent a qui es troba en situació de vulnerabilitat social i econòmica, inspirats en valors de servei, dignitat i solidaritat.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* Inspiració i Aconfessionalitat */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Inspiració i Compromís Social Aconfessional
            </h2>
            <p className="text-slate-600 leading-relaxed">
              L&apos;<strong>Associació Cristiana EducaFe</strong> és una entitat d&apos;inspiració cristiana. Aquesta inspiració explica per què fem aquesta tasca, però no constitueix cap requisit ni condició per rebre-la.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Tots els nostres programes d&apos;acció social són de <strong>lliure accés, gratuïts i el seu contingut és totalment aconfessional</strong>. La participació no està condicionada per la creença, l&apos;origen, la llengua, el gènere, l&apos;orientació sexual, la discapacitat ni la situació administrativa de les persones beneficiàries.
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-xs font-semibold">
              <span className="px-3 py-1 bg-slate-100 rounded-lg text-slate-700">✓ Accés lliure i obert</span>
              <span className="px-3 py-1 bg-slate-100 rounded-lg text-slate-700">✓ Gratuïtat 100%</span>
              <span className="px-3 py-1 bg-slate-100 rounded-lg text-slate-700">✓ No discriminació</span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-lg aspect-[4/3]">
              <Image
                src="/images/hero-educafe-sea.jpg"
                alt="Equip de l'Associació EducaFe"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Òrgan de Governança / Junta Directiva */}
      <section id="gobernança" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Junta Directiva
          </h2>
          <p className="text-slate-600 text-sm">
            Òrgan col·legiat de govern i representació de l&apos;Associació Cristiana EducaFe.
          </p>
          <p className="text-xs text-slate-500">Composició aprovada per l’Assemblea General del 3 de juliol de 2026. L’actualització registral es troba en tramitació.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-sky-600">Presidència</div>
            <div className="text-lg font-bold text-slate-900">Elías Vidal Campalans</div>
            <p className="text-xs text-slate-500">Representació institucional i direcció estratègica de projectes.</p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-teal-600">Secretaria</div>
            <div className="text-lg font-bold text-slate-900">Patricia Campalans</div>
            <p className="text-xs text-slate-500">Gestió documental, actes i coordinació administrativa.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
