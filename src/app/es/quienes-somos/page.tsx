import React from 'react';
import Image from 'next/image';
import { Users, BookOpen } from 'lucide-react';

export const metadata = {
  title: 'Quiénes Somos | Asociación Cristiana EducaFe',
  description: 'Identidad, fines estatutarios, inspiración, gobernanza y equipo de la Asociación Cristiana EducaFe en Cataluña.',
};

export default function EsQuienesSomosPage() {
  return (
    <div className="space-y-16 py-12">
      
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-bold uppercase tracking-wider border border-sky-200">
            <Users className="w-3.5 h-3.5" />
            <span>Identidad y Gobernanza</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Quiénes Somos: Identidad, Misión y Valores
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Somos una entidad sin ánimo de lucro inscrita en el Registro de Entidades Jurídicas de la Generalitat de Catalunya (nº 75881), comprometida con el desarrollo comunitario y la equidad educativa.
          </p>
        </div>
      </section>

      {/* Foto Destacada de Comunidad */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 aspect-[16/9]">
          <Image
            src="/images/comunitat-joves-taller.jpg"
            alt="Acción socioeducativa, talleres y acompañamiento a jóvenes y familias"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent flex items-end p-6 sm:p-8">
            <div className="text-white space-y-1">
              <div className="text-xs font-bold uppercase tracking-wider text-teal-400">Equipo y Familias</div>
              <div className="text-lg sm:text-xl font-bold">Comunidad EducaFe: Cercanía con familias y jóvenes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Fines Estatutarios */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-sky-50/80 border border-sky-200 space-y-4">
          <div className="flex items-center gap-2 text-sky-800 font-bold text-sm uppercase tracking-wider">
            <BookOpen className="w-4 h-4 text-sky-600" />
            <span>Fines Estatutarios (Art. 2 de los Estatutos)</span>
          </div>
          <blockquote className="text-lg sm:text-xl font-medium text-slate-800 italic leading-relaxed border-l-4 border-sky-500 pl-4">
            &ldquo;Promover el desarrollo educativo, personal y comunitario de niños, adolescentes y familias, con atención preferente a quienes se encuentran en situación de vulnerabilidad social y económica, inspirados en valores de servicio, dignidad y solidaridad.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* Inspiración y Compromiso Social */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-bold uppercase tracking-wider border border-teal-200">
              <span>Asociación Cristiana · Dejando huella</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Inspiración, Identidad y Acceso Abierto
            </h2>
            <p className="text-slate-600 leading-relaxed font-medium">
              Asociación cristiana. Educación en valores para familias, iglesias y escuelas.
            </p>
            <p className="text-slate-600 leading-relaxed">
              La <strong>Asociación Cristiana EducaFe</strong> es una entidad de inspiración cristiana comprometida con la dignidad de cada persona, el cuidado de la infancia y el acompañamiento integral a las familias.
            </p>

            {/* Recuadro de Acceso Abierto Requerido */}
            <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                Compromiso de Acceso Abierto y Universal
              </div>
              <p className="text-sm sm:text-base font-semibold leading-relaxed">
                &ldquo;Nuestros programas sociales y de formación están abiertos a todas las familias, sin condicionar la participación a creencias, origen ni capacidad económica.&rdquo;
              </p>
            </div>

            {/* Cita Bíblica Institucional Proverbios 22:6 */}
            <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-sky-600 text-slate-700 text-sm italic">
              &ldquo;Instruye al niño en su camino, y aun cuando fuere viejo no se apartará de él.&rdquo; — <strong className="not-italic text-slate-900 font-semibold">Proverbios 22:6</strong>
            </div>

            <div className="pt-2 flex flex-wrap gap-2 text-xs font-semibold">
              <span className="px-3 py-1 bg-slate-100 rounded-lg text-slate-700">✓ Vocación de servicio</span>
              <span className="px-3 py-1 bg-slate-100 rounded-lg text-slate-700">✓ Acceso sin discriminación</span>
              <span className="px-3 py-1 bg-slate-100 rounded-lg text-slate-700">✓ Transparencia institucional</span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-lg aspect-[4/3]">
              <Image
                src="/images/hero-educafe-sea.jpg"
                alt="Equipo de la Asociación EducaFe"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Junta Directiva */}
      <section id="junta" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Junta Directiva
          </h2>
          <p className="text-slate-600 text-sm">
            Órgano colegiado de gobierno y representación de la Asociación Cristiana EducaFe.
          </p>
          <p className="text-xs text-slate-500">Composición aprobada por la Asamblea General de 3 de julio de 2026. La actualización registral se encuentra en tramitación.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-sky-600">Presidente</div>
            <div className="text-lg font-bold text-slate-900">Elías Vidal Campalans</div>
            <p className="text-xs text-slate-500">Representación institucional y dirección estratégica de programas.</p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-teal-600">Secretaria</div>
            <div className="text-lg font-bold text-slate-900">Mary Claudia Jiménez</div>
            <p className="text-xs text-slate-500">Gestión documental, actas y coordinación administrativa.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
