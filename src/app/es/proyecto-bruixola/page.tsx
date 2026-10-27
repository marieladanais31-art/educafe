import React from 'react';
import Link from 'next/link';
import {
  Compass,
  MapPin,
  CheckCircle2,
  Users,
  Cpu,
  Globe2,
  Building2,
  HeartHandshake,
  Target,
  Sparkles,
  BookOpen,
  GraduationCap,
  Layers,
  ShieldCheck,
  Mail
} from 'lucide-react';

export const metadata = {
  title: 'Proyecto Brúixola | Asociación Cristiana EducaFe',
  description: 'Proyecto socioeducativo gratuito en Mont-roig del Camp para adolescentes de 13 a 18 años y sus familias. Proyecto en preparación.',
};

export default function EsProyectoBruixolaPage() {
  return (
    <div className="space-y-16 py-12">
      
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-sky-700 text-xs font-bold uppercase tracking-wider border border-sky-200">
            <Compass className="w-4 h-4 text-sky-600" />
            <span>Acción Socioeducativa Juvenil</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Proyecto Brúixola
          </h1>

          <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-medium">
            Proyecto socioeducativo gratuito en Mont-roig del Camp para adolescentes de 13 a 18 años y sus familias, con itinerarios Rumbo (13 a 15) y Timón (16 a 18).
          </p>

          {/* Estado del Proyecto */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-sm font-semibold">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse"></span>
            <span>Estado: Proyecto en preparación</span>
          </div>

          {/* Tarjeta de Localización y Gratuidad */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-sky-900 to-slate-900 text-white flex flex-wrap items-center justify-between gap-4 shadow-md">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-sky-400 shrink-0" />
              <div>
                <div className="text-xs text-sky-300 font-semibold uppercase">Ámbito de Actuación</div>
                <div className="text-sm font-bold">Mont-roig del Camp (Baix Camp, Tarragona)</div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-semibold">
              <span className="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                ✓ Gratuito para participantes
              </span>
              <span className="px-3 py-1 rounded-lg bg-sky-500/20 text-sky-300 border border-sky-500/40">
                ✓ Adolescentes de 13 a 18 años y familias
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Cláusula de Acceso Abierto Obligatoria (Punto 2) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-3xl bg-emerald-50 border-2 border-emerald-200/90 shadow-sm space-y-3">
          <div className="flex items-center gap-2 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Compromiso de Acceso Abierto</span>
          </div>
          <p className="text-base sm:text-lg text-emerald-950 font-bold leading-relaxed">
            &ldquo;Nuestros programas sociales y de formación están abiertos a todas las familias, sin condicionar la participación a creencias, origen ni capacidad económica.&rdquo;
          </p>
        </div>
      </section>

      {/* Itinerarios por Franjas de Edad */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Itinerarios Formativos por Edades
          </h2>
          <p className="text-slate-600 text-sm">
            Estructurado en dos etapas de acompañamiento según la etapa madurativa y educativa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
              <span>Franja de 13 a 15 años</span>
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900">
              Itinerario Rumbo
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Acompañamiento socioeducativo enfocado a adolescentes de 13 a 15 años, centrado en el desarrollo de hábitos de estudio, gestión emocional, refuerzo competencial y convivencia positiva.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider">
              <span>Franja de 16 a 18 años</span>
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900">
              Itinerario Timón
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Orientación personal y vocacional dirigida a jóvenes de 16 a 18 años para promover la autonomía hacia la vida adulta, la continuidad formativa, la toma responsable de decisiones y el proyecto de vida.
            </p>
          </div>
        </div>
      </section>

      {/* Actividades del Proyecto (Las 8 actividades requeridas) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Actividades del Proyecto
          </h2>
          <p className="text-slate-600 text-sm">
            Ámbitos de intervención que componen el programa integral de Brúixola.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* 1. Valoración y plan individual */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
              <Target className="w-5 h-5 text-sky-600" />
            </div>
            <h3 className="text-base font-bold text-slate-900">1. Valoración y plan individual</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Diagnóstico inicial personalizado y diseño de un plan de acompañamiento adaptado a las necesidades y metas de cada participante.
            </p>
          </div>

          {/* 2. Life Skills */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5 text-teal-600" />
            </div>
            <h3 className="text-base font-bold text-slate-900">2. Life Skills</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Desarrollo de habilidades para la vida: comunicación interpersonal, resolución de conflictos, gestión del estrés y trabajo en equipo.
            </p>
          </div>

          {/* 3. Autonomía para la vida adulta */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <Layers className="w-5 h-5 text-amber-600" />
            </div>
            <h3 className="text-base font-bold text-slate-900">3. Autonomía para la vida adulta</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Herramientas prácticas para la organización cotidiana, gestión responsable de recursos, hábitos saludables y pensamiento crítico.
            </p>
          </div>

          {/* 4. Competencias digitales y uso responsable de la IA */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
              <Cpu className="w-5 h-5 text-indigo-600" />
            </div>
            <h3 className="text-base font-bold text-slate-900">4. Competencias digitales y uso responsable de la IA</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Capacitación digital consciente, seguridad en la red, criterio informacional y uso ético y productivo de la inteligencia artificial.
            </p>
          </div>

          {/* 5. Orientación educativa y vocacional */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
              <GraduationCap className="w-5 h-5 text-sky-600" />
            </div>
            <h3 className="text-base font-bold text-slate-900">5. Orientación educativa y vocacional</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Descubrimiento de intereses académicos y profesionales, exploración de itinerarios formativos y apoyo en la toma de decisiones.
            </p>
          </div>

          {/* 6. Inglés funcional */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <Globe2 className="w-5 h-5 text-emerald-600" />
            </div>
            <h3 className="text-base font-bold text-slate-900">6. Inglés funcional</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Capacitación comunicativa práctica en lengua inglesa para ampliar oportunidades educativas y reducir la brecha formativa.
            </p>
          </div>

          {/* 7. Escuela de Familias */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
              <Users className="w-5 h-5 text-rose-600" />
            </div>
            <h3 className="text-base font-bold text-slate-900">7. Escuela de Familias</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Espacios de encuentro, acompañamiento a la parentalidad positiva, comunicación intrafamiliar y apoyo en la etapa adolescente.
            </p>
          </div>

          {/* 8. Aprendizaje servicio */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold">
              <HeartHandshake className="w-5 h-5 text-teal-600" />
            </div>
            <h3 className="text-base font-bold text-slate-900">8. Aprendizaje servicio</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Proyectos prácticos de participación comunitaria donde los adolescentes aplican aprendizajes dando servicio a su entorno local.
            </p>
          </div>

        </div>
      </section>

      {/* Aliados que se pueden citar (Punto 4) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Aliados y Cooperación Institucional
          </h2>
          <p className="text-slate-600 text-sm">
            Entidades e instituciones colaboradoras en el ámbito territorial:
          </p>
        </div>

        <div className="max-w-2xl">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-teal-600 font-bold text-xs uppercase tracking-wider">
              <Building2 className="w-4 h-4" />
              <span>Espacio Comunitario y Municipal · Mont-roig del Camp</span>
            </div>
            <div className="text-lg font-bold text-slate-900">
              EcoSpai (Mont-roig del Camp)
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Espacio comunitario y municipal para el desarrollo de actividades prácticas, sostenibilidad y aprendizaje-servicio en coordinación con el Ajuntament de Mont-roig del Camp para el acompañamiento y dinamización de adolescentes y familias del municipio.
            </p>
          </div>
        </div>
      </section>

      {/* Sección Final de Contacto Informativo */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-4">
          <div className="flex items-center gap-2 text-teal-400 font-bold text-xs uppercase tracking-wider">
            <Compass className="w-4 h-4" />
            <span>Información General</span>
          </div>
          <h2 className="text-2xl font-bold">
            Proyecto en Preparación
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
            El Proyecto Brúixola se encuentra actualmente en fase de preparación técnica y metodológica. Para cualquier consulta institucional, colaboración o información general, puedes contactar directamente con la Asociación Cristiana EducaFe.
          </p>
          <div className="pt-2 flex flex-wrap gap-4 items-center">
            <a
              href="mailto:info@asociacioneducafe.org?subject=Consulta%20Proyecto%20Brúixola"
              className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-sky-600"
            >
              <Mail className="w-4 h-4" />
              <span>Contactar por correo electrónico</span>
            </a>
            <Link
              href="/es/transparencia"
              className="inline-flex items-center rounded-xl border border-slate-700 px-5 py-3 text-sm font-bold text-slate-200 transition-colors hover:bg-slate-800"
            >
              <span>Consultar transparencia institucional</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}