import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  HeartHandshake,
  Users,
  ShieldCheck,
  CheckCircle2,
  Mail,
  Compass,
  ArrowRight
} from 'lucide-react';
import VolunteerForm from '@/components/VolunteerForm';

export const metadata = {
  title: 'Voluntariado y Únete | Asociación Cristiana EducaFe',
  description: 'Súmate al equipo de voluntariado de la Asociación Cristiana EducaFe en Mont-roig del Camp y comarcas de Tarragona.',
};

export default function EsVoluntariadoPage() {
  return (
    <div className="space-y-16 py-12">
      
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 text-teal-800 text-xs font-bold uppercase tracking-wider border border-teal-200">
            <HeartHandshake className="w-4 h-4 text-teal-600" />
            <span>Participación Ciudadana y Acción Comunitaria</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Voluntariado y Únete a EducaFe
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            El voluntariado es el motor de nuestra acción social. Si compartes la vocación de servicio, la solidaridad y el compromiso con la igualdad de oportunidades para la infancia y la juventud, tienes un lugar en EducaFe.
          </p>
        </div>
      </section>

      {/* Foto del Equipo */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 aspect-[21/9]">
          <Image
            src="/images/team-educafe-lineup.jpg"
            alt="Equipo de voluntariado y profesionales de la Asociación EducaFe"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6 sm:p-8">
            <div className="text-white space-y-1">
              <div className="text-xs font-bold uppercase tracking-wider text-teal-400">Equipo Humano</div>
              <div className="text-lg sm:text-xl font-bold">Personas comprometidas con la acción socioeducativa en Cataluña</div>
            </div>
          </div>
        </div>
      </section>

      {/* Ámbitos de Voluntariado */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Ámbitos de Participación
          </h2>
          <p className="text-slate-600 text-sm">
            Modalidades de acción según tu perfil, disponibilidad e intereses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
              🧭
            </div>
            <h3 className="text-lg font-bold text-slate-900">Mentoría y Apoyo al Estudio</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Acompañamiento personalizado a jóvenes del Proyecto Brúixola, refuerzo escolar, motivación formativa y desarrollo de autonomía personal.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold">
              💻
            </div>
            <h3 className="text-lg font-bold text-slate-900">Dinamización Digital e IA</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Colaboración en talleres de competencia digital, pensamiento crítico y uso ético de tecnologías para reducir la brecha digital.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              🤝
            </div>
            <h3 className="text-lg font-bold text-slate-900">Apoyo Comunitario y Familiar</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Participación en encuentros de familias, salidas y actividades comunitarias de aprendizaje-servicio (ApS) en el municipio.
            </p>
          </div>

        </div>
      </section>

      {/* Garantías y Entorno Seguro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-4">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
            <ShieldCheck className="w-5 h-5 text-teal-600 shrink-0" />
            <span>Garantías del Voluntariado y Entorno Seguro (Ley 45/2015 y LOPIVI)</span>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed">
            La entidad cuenta con un <strong>Plan de Voluntariado estructurado</strong> que contempla acuerdo de voluntariado, cobertura de seguro de accidentes y responsabilidad civil, formación inicial y acompañamiento.
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            En cumplimiento estricto de la LOPIVI, es requisito preceptivo presentar el <strong>Certificado Negativo del Registro Central de Delincuentes Sexuales y de Trata</strong> antes de incorporarse a actividades con menores.
          </p>
        </div>
      </section>

      {/* Formulario de Inscripción */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <VolunteerForm lang="es" />
      </section>

    </div>
  );
}
