import React from 'react';
import Link from 'next/link';
import {
  Compass,
  MapPin,
  Calendar,
  CheckCircle2,
  Users,
  Cpu,
  Globe2,
  ArrowRight,
  Building2,
  HeartHandshake,
  Target,
  Clock3,
  FileCheck2
} from 'lucide-react';

export const metadata = {
  title: 'Proyecto Brúixola | Asociación Cristiana EducaFe',
  description: 'Acompañamiento socioeducativo, habilidades para la vida y competencia digital para la equidad juvenil en Mont-roig del Camp.',
};

export default function EsProyectoBruixolaPage() {
  return (
    <div className="space-y-16 py-12">
      
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-sky-700 text-xs font-bold uppercase tracking-wider border border-sky-200">
            <Compass className="w-4 h-4 text-sky-600" />
            <span>Programa Socioeducativo Integral</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Projecte Brúixola: Acompañamiento socioeducativo, habilidades para la vida y competencia digital para la equidad juvenil
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Iniciativa comunitaria diseñada para reforzar la trayectoria académica, el bienestar emocional y la orientación vocacional de adolescentes en riesgo de exclusión o desenganche formativo.
          </p>

          <div className="rounded-2xl border border-sky-200 bg-sky-50 px-5 py-4 text-sm leading-relaxed text-sky-950">
            <strong>Nueva línea socioeducativa en desarrollo.</strong> Brúixola está diseñado para ofrecer un acompañamiento continuado a adolescentes y familias. La apertura de plazas se comunicará cuando la organización y los recursos necesarios estén confirmados.
          </div>

          {/* Tarjeta Resumen Piloto */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-sky-900 to-slate-900 text-white flex flex-wrap items-center justify-between gap-4 shadow-md">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-sky-400 shrink-0" />
              <div>
                <div className="text-xs text-sky-300 font-semibold uppercase">Ámbito Territorial</div>
                <div className="text-sm font-bold">Implantación piloto en Mont-roig del Camp (Baix Camp)</div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-teal-400" />
                <span className="text-xs font-semibold">Itinerario diseñado · 12 meses</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-bold text-emerald-300">100% Gratuito</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resumen verificable */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { value: '30', label: 'plazas previstas para adolescentes' },
            { value: '25', label: 'familias previstas en el itinerario' },
            { value: '12', label: 'meses de intervención' },
            { value: '100%', label: 'acceso gratuito' },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-3xl font-extrabold text-sky-700">{item.value}</div>
              <div className="mt-1 text-xs sm:text-sm font-medium text-slate-600">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Ejes del Itinerario Socioeducativo */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Ejes de Intervención del Proyecto
          </h2>
          <p className="text-slate-600 text-sm">
            Estructura modular adaptada a cada etapa madurativa de los jóvenes y a las necesidades de sus familias.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Eje 1 */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
              🧭
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-sky-600">Franja 12-14 años</div>
            <h3 className="text-lg font-bold text-slate-900">Itinerario RUMBO</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Autoconocimiento, gestión emocional, hábitos de vida saludables, refuerzo al estudio y desarrollo de habilidades interpersonales para la convivencia positiva.
            </p>
          </div>

          {/* Eje 2 */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold">
              🎯
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-teal-600">Franja 15-18 años</div>
            <h3 className="text-lg font-bold text-slate-900">Itinerario TIMÓN</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Orientación vocacional, toma de decisiones, mentoría personalizada y prevención del desenganche formativo en el paso a Bachillerato o Formación Profesional (FP).
            </p>
          </div>

          {/* Eje 3 */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
              <Cpu className="w-6 h-6 text-indigo-700" />
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-indigo-600">Competencia Digital</div>
            <h3 className="text-lg font-bold text-slate-900">Laboratorio Digital e IA Responsable</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Alfabetización informacional crítica, seguridad y privacidad digital, programación básica y uso ético de la inteligencia artificial como herramienta de apoyo escolar.
            </p>
          </div>

          {/* Eje 4 */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
              <Globe2 className="w-6 h-6 text-amber-700" />
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-amber-600">Competencia Comunicativa</div>
            <h3 className="text-lg font-bold text-slate-900">Inglés Funcional para la Equidad</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Enfoque práctico y comunicativo del idioma inglés para reducir la brecha curricular y facilitar futuras oportunidades de inserción sociolaboral.
            </p>
          </div>

          {/* Eje 5 */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-3 md:col-span-2 lg:col-span-2">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
              <Users className="w-6 h-6 text-emerald-700" />
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-600">Comunidad y Entorno</div>
            <h3 className="text-lg font-bold text-slate-900">Escuela de Familias y Aprendizaje-Servicio (ApS)</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Encuentros periódicos con madres y padres para fortalecer el vínculo familiar, complementados con proyectos de retorno comunitario en Mont-roig del Camp.
            </p>
          </div>

        </div>
      </section>

      {/* Metodología y resultados */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Un itinerario continuo, no actividades aisladas</h2>
          <p className="max-w-3xl text-sm sm:text-base text-slate-600 leading-relaxed">
            Cada participante contará con un Plan de Acompañamiento Individualizado, seguimiento familiar y evidencias de progreso. La propuesta combina intervención grupal, mentoría y participación juvenil.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: Clock3, title: 'Ritmo continuado', text: '38 sesiones de habilidades para la vida, 19 de laboratorio digital y 20 de competencia comunicativa.' },
            { icon: HeartHandshake, title: 'Acompañamiento', text: '10 tutorías individuales y seguimiento con cada familia durante el itinerario.' },
            { icon: Target, title: 'Orientación y comunidad', text: 'Cuatro salidas de descubrimiento vocacional y aprendizaje-servicio.' },
            { icon: FileCheck2, title: 'Evaluación', text: 'Indicadores iniciales, seguimiento intermedio y evaluación final con evidencias disociadas.' },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <Icon className="h-6 w-6 text-teal-700" />
              <h3 className="mt-4 font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Acceso Coordinado */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-4">
          <div className="flex items-center gap-2 text-teal-400 font-bold text-xs uppercase tracking-wider">
            <Building2 className="w-4 h-4" />
            <span>Vías de Acceso y Derivación Institucional</span>
          </div>
          <h2 className="text-2xl font-bold">¿Quieres recibir información?</h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
            El proyecto se encuentra en fase de desarrollo y todavía no hay una convocatoria de plazas abierta. Las familias, profesionales y entidades interesadas pueden solicitar información sin que ello implique admisión, derivación ni compromiso de colaboración.
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <a href="mailto:info@asociacioneducafe.org?subject=Información%20Proyecto%20Brúixola" className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-sky-600">
              Solicitar información <ArrowRight className="h-4 w-4" />
            </a>
            <Link href="/es/transparencia" className="inline-flex items-center rounded-xl border border-slate-700 px-5 py-3 text-sm font-bold text-slate-200 transition-colors hover:bg-slate-800">
              Consultar transparencia
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
