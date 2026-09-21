import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Compass,
  HeartHandshake,
  ArrowRight,
  ShieldCheck,
  Heart
} from 'lucide-react';

export const metadata = {
  title: 'Asociación Cristiana EducaFe | Acción Socioeducativa e Inclusión Juvenil',
  description: 'Entidad sin ánimo de lucro en Cataluña. Oportunidades educativas para la infancia, la adolescencia y las familias.',
};

export default function EsHomePage() {
  return (
    <div className="space-y-16 sm:space-y-20 pb-20">
      
      {/* ==================================================================== */}
      {/* 1. HERO INSTITUCIONAL CLARO, LUMINOSO Y CON FOTO DE EQUIPO VISIBLE */}
      {/* ==================================================================== */}
      <section className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-10 pb-16 sm:pt-14 sm:pb-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Columna Textos */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/90 text-sky-400 text-xs font-bold uppercase tracking-wider border border-sky-700/60 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                <span>Entidad Sin Ánimo de Lucro · Comarcas de Tarragona</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Impulsamos oportunidades educativas para la infancia, la adolescencia y las familias
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Entidad sin ánimo de lucro comprometida con la equidad, la orientación juvenil y la inclusión comunitaria en el Baix Camp y Terres de l&apos;Ebre.
              </p>

              {/* Botones de Acción */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/es/proyecto-bruixola"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-600 hover:to-teal-600 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-sky-500/25 transition-all text-sm group"
                >
                  <Compass className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                  <span>Proyecto Brúixola</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <Link
                  href="/es/donar"
                  className="inline-flex items-center gap-1.5 bg-rose-600 hover:bg-rose-700 text-white font-bold px-5 py-3.5 rounded-xl transition-all text-sm shadow-md"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  <span>Donar y Colaborar</span>
                </Link>

                <Link
                  href="/es/hazte-socio"
                  className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold px-5 py-3.5 rounded-xl border border-slate-700 transition-all text-sm"
                >
                  <HeartHandshake className="w-4 h-4 text-teal-400" />
                  <span>Hazte socio</span>
                </Link>
              </div>

              {/* Badges de Garantía Social */}
              <div className="pt-4 flex flex-wrap items-center gap-2.5 text-xs font-semibold">
                <span className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-emerald-400">✓ 100% Gratuito</span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-sky-300">✓ Acceso Abierto y Universal</span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-amber-300">✓ Aconfesional e Inclusivo</span>
              </div>
            </div>

            {/* Columna Foto de Equipo Luminosa y 100% Visible */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden border-2 border-slate-700/80 shadow-2xl bg-slate-900 group">
                <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full">
                  <Image
                    src="/images/hero-educafe-sea.jpg"
                    alt="Equipo de la Asociación Cristiana EducaFe"
                    fill
                    priority
                    className="object-cover object-center group-hover:scale-102 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="p-3.5 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-xs text-slate-300">
                  <span className="font-bold text-white flex items-center gap-1.5">
                    <span>👥 Equipo EducaFe</span>
                  </span>
                  <span className="text-teal-400 font-medium">Acción Socioeducativa en Cataluña</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 2. SECCIÓN 3 COLUMNAS: ÁMBITOS DE ACCIÓN SOCIAL (ES) */}
      {/* ==================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-200">Ámbitos de Acción Social</span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Pilares de nuestra labor socioeducativa
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Desarrollamos programas integrales para responder a las necesidades de apoyo, orientación y cohesión en nuestra comunidad.
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
                Acompañamiento Socioeducativo
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Atención personalizada, refuerzo competencial y orientación integral a adolescentes de 12 a 18 años en situación de vulnerabilidad para prevenir el abandono escolar temprano.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100">
              <Link
                href="/es/proyecto-bruixola"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-800 transition-colors"
              >
                <span>Conocer el Proyecto Brúixola</span>
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
                Orientación y Apoyo Familiar
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Espacios de Escuela de Familias, apoyo a la parentalidad positiva, mediación digital y herramientas prácticas para favorecer el bienestar y la convivencia en los hogares.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100">
              <Link
                href="/es/quienes-somos"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-600 hover:text-teal-800 transition-colors"
              >
                <span>Saber más</span>
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
                Red Comunitaria y Voluntariado
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Cohesión social, actividades de aprendizaje-servicio (ApS) y participación de familias, personas voluntarias y agentes de la comunidad.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100">
              <Link
                href="/es/voluntariado"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-900 transition-colors"
              >
                <span>Súmate al Voluntariado</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* 3. BANNER DESTACADO DE COMPROMISO SOCIAL Y GRATUIDAD */}
      {/* ==================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-950 to-sky-950 text-white border border-slate-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-bold tracking-wider uppercase text-teal-400">
                Compromiso Institucional
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold leading-snug">
                Acción social de acceso gratuito, abierto y con contenidos aconfesionales
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                La participación no está condicionada por creencias, origen ni capacidad económica. Cada actividad se comunicará con claridad cuando cuente con organización, recursos y plazas confirmadas.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <Link
                href="/es/proyecto-bruixola"
                className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-bold px-5 py-3 rounded-xl transition-colors text-sm shadow"
              >
                <span>Ver el Proyecto Brúixola</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/es/voluntariado"
                className="inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-slate-950 font-bold px-5 py-3 rounded-xl transition-colors text-sm shadow"
              >
                <span>Hazte Voluntario</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
