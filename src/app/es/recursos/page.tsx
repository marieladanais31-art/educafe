import React from 'react';
import Link from 'next/link';
import {
  BookOpen,
  Users,
  Compass,
  GraduationCap,
  Church,
  BarChart3,
  Calendar,
  AlertCircle,
  ArrowRight,
  Heart
} from 'lucide-react';

export const metadata = {
  title: 'Recursos y Artículos Socioeducativos | Asociación Cristiana EducaFe',
  description: 'Guías prácticas, consejos y datos verificados para familias, adolescentes, maestros, pastores y comunidades.',
};

export default function EsRecursosPage() {
  return (
    <div className="space-y-16 py-12">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-sky-700 text-xs font-bold uppercase tracking-wider border border-sky-200">
            <BookOpen className="w-4 h-4 text-sky-600" />
            <span>Formación, Herramientas y Orientación</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Recursos y Artículos Socioeducativos
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Herramientas prácticas, pautas educativas y reflexiones basadas en valores para acompañar a niños y adolescentes en su desarrollo académico, emocional y comunitario.
          </p>
        </div>
      </section>

      {/* 1. SECCIÓN PARA FAMILIAS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
            <Users className="w-5 h-5 text-rose-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Para Familias</h2>
            <p className="text-xs text-slate-500 font-medium">Orientación parental, convivencia en el hogar y hábitos educativos</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-rose-600">#ConsejoEnFamilia</span>
              <span>30 de octubre</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">Hábitos de estudio en el hogar</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Consejos prácticos para establecer rutinas estables de estudio, acondicionar espacios tranquilos y acompañar el esfuerzo cotidiano sin generar tensiones ni dependencia.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-teal-600">#PalabraYVida</span>
              <span>1 de noviembre</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">Gratitud en casa</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Cómo fomentar una cultura de agradecimiento cotidiano en la mesa familiar, basada en el valor de apreciar las cosas sencillas, el respeto mutuo y el cuidado de las relaciones.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-rose-600">#ConsejoEnFamilia</span>
              <span>2 de noviembre</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">Cómo hablar con un adolescente</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Estrategias de comunicación asertiva: elegir el momento oportuno, practicar la escucha activa, validar sus emociones y evitar juicios precipitados.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-rose-600">#ConsejoEnFamilia</span>
              <span>9 de noviembre</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">Límites con cariño y firmeza</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              El establecimiento de normas claras como expresión de protección y cuidado, construyendo acuerdos previsibles y respetuosos desde la parentalidad positiva.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 md:col-span-2 lg:col-span-2">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-rose-600">#ConsejoEnFamilia</span>
              <span>20 de noviembre</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">Día Universal de la Infancia</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Reflexión y compromiso sobre el derecho de cada niño y adolescente a una educación de calidad, protección integral frente a la violencia y apoyo comunitario para crecer en dignidad y paz.
            </p>
          </div>

        </div>
      </section>

      {/* 2. SECCIÓN PARA ADOLESCENTES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
            <Compass className="w-5 h-5 text-sky-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Para Adolescentes</h2>
            <p className="text-xs text-slate-500 font-medium">Itinerarios Rumbo (13-15) y Timón (16-18) · Orientación y autonomía</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Dato Escolar Verificado con Fuente Oficial */}
          <div className="p-6 rounded-2xl bg-sky-900 text-white shadow-md space-y-3">
            <div className="flex items-center justify-between text-xs text-sky-300">
              <span className="font-bold uppercase tracking-wider">#DatoEscolar · Verificado</span>
              <span>28 de octubre</span>
            </div>
            <div className="text-3xl font-extrabold text-teal-300">12,8 %</div>
            <h3 className="text-base font-bold text-white">Tasa de abandono escolar temprano en España (2025)</h3>
            <p className="text-xs text-slate-200 leading-relaxed">
              La tasa de abandono educativo temprano se situó en el 12,8 % en 2025. Conocer la importancia de completar la educación secundaria es clave para abrir puertas a la formación profesional y a un empleo digno.
            </p>
            <div className="pt-2 text-[11px] text-sky-300 font-mono border-t border-sky-800">
              Fuente: Encuesta de Población Activa (EPA), vía Ministerio de Educación, Formación Profesional y Deportes (2025).
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-sky-600">#Rumbo (13-15 años)</span>
              <span>6 de noviembre</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">Tres preguntas antes de decidir</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              ¿Qué me gusta hacer realmente? ¿Qué habilidades se me dan mejor? ¿Qué opciones tengo al terminar la ESO? Guía de autoconocimiento para elegir tu itinerario educativo con seguridad.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-teal-600">#Timón (16-18 años)</span>
              <span>13 de noviembre</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">Tu primer presupuesto personal</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Herramientas de autonomía para la vida adulta: cómo planificar ingresos, distinguir necesidades reales de deseos fugaces y establecer un objetivo de ahorro responsable.
            </p>
          </div>

        </div>
      </section>

      {/* 3. SECCIÓN PARA MAESTROS Y EDUCADORES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold">
            <GraduationCap className="w-5 h-5 text-teal-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Para Maestros y Educadores</h2>
            <p className="text-xs text-slate-500 font-medium">Acompañamiento en el aula, vínculo familia-escuela y prevención del fracaso</p>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 max-w-3xl">
          <div className="text-xs font-semibold text-teal-600">#EducaciónEnValores</div>
          <h3 className="text-lg font-bold text-slate-900">Acompañamiento socioeducativo frente a la desmotivación en el aula</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Estrategias de mediación pedagógica para reconectar a adolescentes en riesgo de desenganche escolar. La colaboración entre centros docentes, entidades sociales y familias como red protectora del éxito educativo.
          </p>
        </div>
      </section>

      {/* 4. SECCIÓN PARA PASTORES E IGLESIAS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
            <Church className="w-5 h-5 text-amber-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Para Pastores e Iglesias</h2>
            <p className="text-xs text-slate-500 font-medium">Servicio a la comunidad, acompañamiento familiar y entornos seguros</p>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 max-w-3xl">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span className="font-semibold text-amber-600">#ParaPastores</span>
            <span>16 de noviembre</span>
          </div>
          <h3 className="text-lg font-bold text-slate-900">La iglesia y las familias: vocación de servicio comunitario</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Cómo las comunidades de fe pueden constituirse en espacios de acogida incondicional y apoyo a las familias de su entorno, ofreciendo acompañamiento intergeneracional, entornos educativos seguros y respaldo a los menores más vulnerables.
          </p>
        </div>
      </section>

      {/* Aviso Editorial de Estadísticas Pendientes de Verificación */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs text-slate-600">
          <div className="flex items-center gap-2 font-bold text-slate-800">
            <AlertCircle className="w-4 h-4 text-amber-600" />
            <span>Piezas en proceso de verificación de datos estadísticos</span>
          </div>
          <p className="leading-relaxed">
            Por rigor metodológico, la Asociación Cristiana EducaFe solo publica artículos con cifras que cuenten con fuente oficial y año verificado. Los siguientes contenidos del calendario quedan pendientes de validación antes de su difusión:
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-500 pt-1">
            <li><em>4 de noviembre:</em> Repetición de curso escolar (pendiente de verificación de fuente y serie temporal).</li>
            <li><em>11 de noviembre:</em> Uso del móvil y calidad del descanso (pendiente de verificación de fuente sanitaria).</li>
            <li><em>18 de noviembre:</em> Brecha digital doméstica (pendiente de verificación de indicador estadístico oficial).</li>
          </ul>
        </div>
      </section>

    </div>
  );
}