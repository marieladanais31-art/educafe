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

export const metadata = {
  title: 'Asociación Cristiana EducaFe | Acción Socioeducativa e Inclusión Juvenil',
  description: 'Asociación cristiana. Educación en valores para familias, iglesias y escuelas. Programas socioeducativos en Cataluña.',
};

export default function EsHomePage() {
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
                <span>Asociación cristiana. Educación en valores para familias, iglesias y escuelas.</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Impulsamos oportunidades educativas para la infancia, la adolescencia y las familias
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Entidad sin ánimo de lucro comprometida con la equidad, la orientación juvenil y la inclusión comunitaria en el Baix Camp y Terres de l&apos;Ebre.
              </p>

              {/* Proverbios 22:6 Cita Bíblica Institucional */}
              <div className="p-3.5 rounded-xl bg-slate-800/70 border-l-4 border-teal-400 text-xs text-slate-200 italic leading-relaxed">
                &ldquo;Instruye al niño en su camino, y aun cuando fuere viejo no se apartará de él.&rdquo; — <span className="not-italic font-semibold text-teal-300">Proverbios 22:6</span>
              </div>

              {/* Botones de Acción */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
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
              <div className="pt-2 flex flex-wrap items-center gap-2.5 text-xs font-semibold">
                <Link
                  href="/es/proyecto-bruixola"
                  className="px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  ✓ Proyecto Brúixola · Proyecto en preparación
                </Link>
                <span className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-teal-300">✓ Dejando huella</span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-amber-300">✓ Red educativa</span>
              </div>
            </div>

            {/* Columna Foto de Equipo */}
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
                  <span className="text-teal-400 font-medium">Dejando huella en Cataluña</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 2. DATOS Y ESTADÍSTICAS VERIFICADAS (Fuente y Año Oficial) */}
      {/* ==================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm space-y-6">
          <div className="flex items-center gap-2 text-sky-800 font-bold text-xs uppercase tracking-wider">
            <BarChart3 className="w-4 h-4 text-sky-600" />
            <span>Contexto Social y Datos Verificados</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2">
              <div className="text-2xl font-extrabold text-sky-700">12,8 %</div>
              <div className="text-sm font-bold text-slate-900">Abandono escolar temprano</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tasa estatal registrada en 2025. Fundamenta la necesidad de acompañamiento educativo y continuidad en los 13-18 años.
              </p>
              <div className="text-[11px] text-slate-400 font-mono pt-1 border-t border-slate-100">
                Fuente: EPA / Ministerio de Educación (2025).
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2">
              <div className="text-2xl font-extrabold text-teal-700">1 de cada 7</div>
              <div className="text-sm font-bold text-slate-900">Salud mental juvenil</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Adolescentes de 10 a 19 años conviven con algún problema de salud mental diagnosticado a escala global y comunitaria.
              </p>
              <div className="text-[11px] text-slate-400 font-mono pt-1 border-t border-slate-100">
                Fuente: OMS / UNICEF (2021, actualizado 2023).
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2">
              <div className="text-2xl font-extrabold text-amber-700">+800 lugares</div>
              <div className="text-sm font-bold text-slate-900">Comunidad evangélica en Cataluña</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Segunda confesión religiosa en arraigo territorial en Cataluña, con vocación de servicio comunitario y apoyo a familias.
              </p>
              <div className="text-[11px] text-slate-400 font-mono pt-1 border-t border-slate-100">
                Fuente: Direcció General d&apos;Afers Religiosos (2023/2024).
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 3. SECCIÓN 3 COLUMNAS DE ACCIÓN SOCIAL */}
      {/* ==================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-200">Ámbitos de Intervención</span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Pilares de nuestra labor socioeducativa
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Desarrollamos líneas educativas, de orientación familiar y apoyo comunitario para impulsar el bienestar de los menores, jóvenes y familias.
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
                Atención personalizada, refuerzo competencial y orientación integral a adolescentes de 13 a 18 años en situación de vulnerabilidad para prevenir el abandono escolar temprano.
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
                Espacios de Escuela de Familias, apoyo a la parentalidad positiva, mediación digital y herramientas prácticas para favorecer el bienestar y la convivencia en el hogar.
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
                Cohesión social, actividades de aprendizaje servicio (ApS) y participación de familias, personas voluntarias y agentes de la comunidad.
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
      {/* 4. BANNER DESTACADO DE COMPROMISO INSTITUCIONAL Y ACCESO ABIERTO */}
      {/* ==================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-950 to-sky-950 text-white border border-slate-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-900/60 text-teal-300 text-xs font-bold uppercase tracking-wider border border-teal-700">
                <span>Compromiso Institucional · Acceso Abierto</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold leading-snug">
                Acción educativa responsable, inclusiva y abierta a todos
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                &ldquo;Nuestros programas sociales y de formación están abiertos a todas las familias, sin condicionar la participación a creencias, origen ni capacidad económica.&rdquo;
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
                href="/es/transparencia"
                className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold px-5 py-3 rounded-xl transition-colors text-sm border border-slate-700"
              >
                <span>Portal de Transparencia</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}