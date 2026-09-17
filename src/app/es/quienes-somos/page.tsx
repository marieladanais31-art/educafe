import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
        <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 aspect-[21/9]">
          <Image
            src="/images/family-javea.jpg"
            alt="Comunidad, familias y equipo de la Asociación EducaFe"
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

      {/* Inspiración y Aconfesionalidad */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Inspiración y Naturaleza de la Acción Social
            </h2>
            <p className="text-slate-600 leading-relaxed">
              La <strong>Asociación Cristiana EducaFe</strong> es una entidad de inspiración cristiana. Esa inspiración explica por qué hacemos este trabajo, pero no constituye ningún requisito ni condición para recibirlo.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Nuestros programas de acción social son de <strong>acceso abierto, gratuitos y su contenido es aconfesional</strong>. La participación no está condicionada por la creencia, el origen, la lengua, el género, la orientación sexual, la discapacidad ni la situación administrativa.
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-xs font-semibold">
              <span className="px-3 py-1 bg-slate-100 rounded-lg text-slate-700">✓ Acceso abierto</span>
              <span className="px-3 py-1 bg-slate-100 rounded-lg text-slate-700">✓ 100% Gratuito</span>
              <span className="px-3 py-1 bg-slate-100 rounded-lg text-slate-700">✓ No discriminación</span>
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
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-sky-600">Presidente</div>
            <div className="text-lg font-bold text-slate-900">Elías Vidal Campalans</div>
            <p className="text-xs text-slate-500">Representación institucional y dirección estratégica de programas.</p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-teal-600">Secretaria</div>
            <div className="text-lg font-bold text-slate-900">Mary Claudia García Jiménez</div>
            <p className="text-xs text-slate-500">Gestión documental, actas y coordinación administrativa.</p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-600">Tesorera / Vocal</div>
            <div className="text-lg font-bold text-slate-900">Mariela Andrade Aparicio</div>
            <p className="text-xs text-slate-500">Supervisión económica, rendición de cuentas y apoyo metodológico.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
