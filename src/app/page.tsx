import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Compass,
  HeartHandshake,
  ArrowRight,
  ShieldCheck,
  Heart,
  BarChart3,
  BookOpen
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="space-y-16 sm:space-y-20 pb-20">
      
      {/* ==================================================================== */}
      {/* 1. HERO INSTITUCIONAL */}
      {/* ==================================================================== */}
      <section className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-10 pb-16 sm:pt-14 sm:pb-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Columna Textos */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/90 text-sky-400 text-xs font-bold uppercase tracking-wider border border-sky-700/60 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Associació cristiana. Educació en valors per a famílies, esglésies i escoles.</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Impulsem oportunitats educatives per a la infància, l&apos;adolescència i les famílies
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Entitat sense ànim de lucre compromesa amb l&apos;equitat, l&apos;orientació juvenil i la inclusió comunitària a les comarques del Baix Camp i Terres de l&apos;Ebre.
              </p>

              {/* Proverbis 22:6 Cita Bíblica Institucional */}
              <div className="p-3.5 rounded-xl bg-slate-800/70 border-l-4 border-teal-400 text-xs text-slate-200 italic leading-relaxed">
                &ldquo;Instrueix l&apos;infant en el camí que ha de seguir, i ni de gran no se&apos;n desviarà.&rdquo; — <span className="not-italic font-semibold text-teal-300">Proverbis 22:6</span>
              </div>

              {/* Botons d'Acció */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link
                  href="/bruixola"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-600 hover:to-teal-600 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-sky-500/25 transition-all text-sm group"
                >
                  <Compass className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                  <span>Projecte Brúixola</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <Link
                  href="/donar"
                  className="inline-flex items-center gap-1.5 bg-rose-600 hover:bg-rose-700 text-white font-bold px-5 py-3.5 rounded-xl transition-all text-sm shadow-md"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  <span>Donar i Col·laborar</span>
                </Link>

                <Link
                  href="/fes-te-soci"
                  className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold px-5 py-3.5 rounded-xl border border-slate-700 transition-all text-sm"
                >
                  <HeartHandshake className="w-4 h-4 text-teal-400" />
                  <span>Fes-te soci</span>
                </Link>
              </div>

              {/* Badges de Garantia Social */}
              <div className="pt-2 flex flex-wrap items-center gap-2.5 text-xs font-semibold">
                <Link
                  href="/bruixola"
                  className="px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  ✓ Projecte Brúixola · Projecte en preparació
                </Link>
                <span className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-teal-300">✓ Deixant petjada</span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-amber-300">✓ Xarxa educativa</span>
              </div>
            </div>

            {/* Columna Foto d'Equip */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden border-2 border-slate-700/80 shadow-2xl bg-slate-900 group">
                <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full">
                  <Image
                    src="/images/hero-educafe-sea.jpg"
                    alt="Equip de l'Associació Cristiana EducaFe"
                    fill
                    priority
                    className="object-cover object-center group-hover:scale-102 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="p-3.5 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-xs text-slate-300">
                  <span className="font-bold text-white flex items-center gap-1.5">
                    <span>👥 Equip EducaFe</span>
                  </span>
                  <span className="text-teal-400 font-medium">Deixant petjada a Catalunya</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 2. DADES I ESTADÍSTIQUES VERIFICADES (Font i Any Oficial) */}
      {/* ==================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm space-y-6">
          <div className="flex items-center gap-2 text-sky-800 font-bold text-xs uppercase tracking-wider">
            <BarChart3 className="w-4 h-4 text-sky-600" />
            <span>Context Social i Dades Verificades</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2">
              <div className="text-2xl font-extrabold text-sky-700">12,8 %</div>
              <div className="text-sm font-bold text-slate-900">Abandonament escolar prematur</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Taxa estatal registrada el 2025. Fonamenta la necessitat d&apos;acompanyament educatiu i continuïtat als 13-18 anys.
              </p>
              <div className="text-[11px] text-slate-400 font-mono pt-1 border-t border-slate-100">
                Font: EPA / Ministeri d&apos;Educació (2025).
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2">
              <div className="text-2xl font-extrabold text-teal-700">1 de cada 7</div>
              <div className="text-sm font-bold text-slate-900">Salud mental juvenil</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Adolescents de 10 a 19 anys conviuen amb algun problema de salut mental diagnosticat a escala global i comunitària.
              </p>
              <div className="text-[11px] text-slate-400 font-mono pt-1 border-t border-slate-100">
                Font: OMS / UNICEF (2021, actualitzat 2023).
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2">
              <div className="text-2xl font-extrabold text-amber-700">+800 llocs</div>
              <div className="text-sm font-bold text-slate-900">Comunitat evangèlica a Catalunya</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Segona confessió religiosa en arrelament territorial a Catalunya, amb vocació de servei comunitari i suport a famílies.
              </p>
              <div className="text-[11px] text-slate-400 font-mono pt-1 border-t border-slate-100">
                Font: Direcció General d&apos;Afers Religiosos (2023/2024).
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 3. SECCIÓ 3 COLUMNES D'ACCIÓ SOCIAL */}
      {/* ==================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-200">Àmbits d&apos;Intervenció</span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Pilars de la nostra tasca socioeducativa
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Desenvolupem línies educatives, d&apos;orientació familiar i suport comunitari per impulsar el benestar dels infants, joves i famílies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Col 1 */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-sky-300 transition-all space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold border border-sky-100 text-2xl">
                🧭
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Acompanyament Socioeducatiu
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Atenció personalitzada, reforç competencial i orientació integral a adolescents de 13 a 18 anys en situació de vulnerabilitat per prevenir l&apos;abandonament escolar prematur.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100">
              <Link
                href="/bruixola"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-800 transition-colors"
              >
                <span>Conèixer el Projecte Brúixola</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Col 2 */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-teal-300 transition-all space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold border border-teal-100 text-2xl">
                👨‍👩‍👧
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Orientació i Suport Familiar
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Espais d&apos;Escola de Famílies, suport a la parentalitat positiva, mediació digital i eines pràctiques per afavorir el benestar i la convivència a les llars.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100">
              <Link
                href="/qui-som"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-600 hover:text-teal-800 transition-colors"
              >
                <span>Saber-ne més</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Col 3 */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-amber-300 transition-all space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold border border-amber-100 text-2xl">
                🤝
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Xarxa Comunitària i Voluntariat
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Cohesió social, activitats d&apos;aprenentatge-servei (ApS) i participació de famílies, persones voluntàries i agents de la comunitat.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100">
              <Link
                href="/voluntariat"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-900 transition-colors"
              >
                <span>Suma&apos;t al Voluntariat</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* 4. BANNER DESTACAT DE COMPROMÍS INSTITUCIONAL I ACCÉS OBERT */}
      {/* ==================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-950 to-sky-950 text-white border border-slate-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-900/60 text-teal-300 text-xs font-bold uppercase tracking-wider border border-teal-700">
                <span>Compromís Institucional · Accés Obert</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold leading-snug">
                Acció educativa responsable, inclusiva i oberta a tothom
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                &ldquo;Els nostres programes socials i de formació estan oberts a totes les famílies, sense condicionar la participació a creences, origen ni capacitat econòmica.&rdquo;
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <Link
                href="/bruixola"
                className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-bold px-5 py-3 rounded-xl transition-colors text-sm shadow"
              >
                <span>Veure el Projecte Brúixola</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/transparencia"
                className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold px-5 py-3 rounded-xl transition-colors text-sm border border-slate-700"
              >
                <span>Portal de Transparència</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}