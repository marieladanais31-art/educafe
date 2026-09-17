import React from 'react';
import Image from 'next/image';
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
  Building2
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
                <span className="text-xs font-semibold">Programa anual (12 meses)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-bold text-emerald-300">100% Gratuito</span>
              </div>
            </div>
          </div>
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

      {/* Acceso Coordinado */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-4">
          <div className="flex items-center gap-2 text-teal-400 font-bold text-xs uppercase tracking-wider">
            <Building2 className="w-4 h-4" />
            <span>Vías de Acceso y Derivación Institucional</span>
          </div>
          <h2 className="text-2xl font-bold">¿Cómo acceder al programa?</h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
            El acceso al Proyecto Brúixola se canaliza mediante <strong>derivación coordinada con los Servicios Sociales municipales y los departamentos de orientación de centros educativos públicos</strong> del territorio.
          </p>
          <div className="pt-2 text-xs text-slate-400">
            Para información y coordinación técnica: <a href="mailto:info@asociacioneducafe.org" className="text-sky-300 underline font-semibold">info@asociacioneducafe.org</a>
          </div>
        </div>
      </section>

    </div>
  );
}
