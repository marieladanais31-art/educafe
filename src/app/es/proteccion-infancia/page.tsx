import React from 'react';
import { ShieldCheck, Lock, Mail, HeartHandshake, FileText, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Protección a la Infancia (LOPIVI) | Asociación Cristiana EducaFe',
  description: 'Protocolo de entorno seguro, cumplimiento de la Ley Orgánica 8/2021 (LOPIVI) y canal confidencial de protección.',
};

export default function EsProteccionInfanciaPage() {
  return (
    <div className="space-y-16 py-12">
      
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-200">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Entorno Seguro y Protección Integral</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Compromiso con la Protección a la Infancia y la Adolescencia
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            La Asociación Cristiana EducaFe ha elaborado su política de entorno seguro y prevención frente a cualquier forma de violencia. El documento se encuentra pendiente de aprobación formal por el órgano de gobierno antes del inicio del Projecte Brúixola, conforme a la <strong>Ley Orgánica 8/2021 (LOPIVI)</strong>.
          </p>
        </div>
      </section>

      {/* Pilares del Protocolo */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Medidas y Protocolo de Actuación
          </h2>
          <p className="text-slate-600 text-sm">
            Garantías preventivas para el bienestar y la dignidad de cada participante.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Marco LOPIVI */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Marco Normativo LOPIVI</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Marco de actuación preparado conforme a la Ley Orgánica 8/2021, de 4 de junio, pendiente de aprobación formal y publicación.
            </p>
          </div>

          {/* Card 2: Delegada de Protección */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Delegada de Protección</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Se designará como Delegada de Protección a la persona responsable del perfil de <strong>Trabajo Social</strong> del proyecto antes de iniciar la atención directa.
            </p>
          </div>

          {/* Card 3: Selección Segura */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Contratación y Voluntariado Seguro</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Certificación negativa preceptiva del <strong>Registro Central de Delincuentes Sexuales y de Trata</strong> para todo el personal y voluntariado.
            </p>
          </div>

        </div>
      </section>

      {/* Canal Confidencial */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-6">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-400">
              <Lock className="w-4 h-4" />
              <span>Canal Confidencial y Seguro</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">Canal Confidencial de Comunicación</h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Para cualquier comunicación, consulta, aviso o incidencia relacionada con la seguridad de menores y familias, puedes escribir directamente a nuestra Delegada de Protección:
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="mailto:info@asociacioneducafe.org?subject=Canal%20confidencial%20de%20protección"
              className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-slate-950 font-bold px-6 py-3.5 rounded-xl shadow-lg transition-colors text-sm"
            >
              <Mail className="w-4 h-4" />
              <span>Escribir al canal de protección</span>
            </a>
            <span className="text-xs text-slate-400">
              La comunicación se tratará de forma confidencial y se derivará a la persona responsable de protección.
            </span>
          </div>
        </div>
      </section>

    </div>
  );
}
