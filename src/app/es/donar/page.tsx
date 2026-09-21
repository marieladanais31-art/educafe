import React from 'react';
import {
  Heart,
  Building,
  Mail,
  Users
} from 'lucide-react';

export const metadata = {
  title: 'Donar y Colaborar | Asociación Cristiana EducaFe',
  description: 'Apoya la misión educativa y social de la Asociación Cristiana EducaFe mediante una aportación voluntaria.',
};

export default function EsDonarPage() {
  return (
    <div className="space-y-16 py-12">
      
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 text-rose-800 text-xs font-bold uppercase tracking-wider border border-rose-200">
            <Heart className="w-4 h-4 text-rose-600 fill-rose-600" />
            <span>Apoyo Solidario y Filantropía</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Colabora y Realiza una Donación
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Tu aportación voluntaria ayuda a sostener la misión educativa y social de EducaFe: actividades con familias, materiales, formación del voluntariado y desarrollo de nuevas iniciativas socioeducativas.
          </p>
        </div>
      </section>

      {/* Destino de los Fondos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-950 to-sky-950 text-white border border-slate-800 space-y-6 shadow-xl">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400">Compromiso Social y Destino de Fondos</span>
            <h2 className="text-2xl sm:text-3xl font-bold">Apoyo directo a la misión de EducaFe</h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Las aportaciones se destinan a fortalecer la estructura de la asociación y preparar programas que amplíen las oportunidades educativas de niños, adolescentes y familias.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1.5 text-xs text-slate-300">
              <div className="text-base font-bold text-white flex items-center gap-1.5">
                <span>📚 Material educativo</span>
              </div>
              <p>Recursos didácticos y materiales para talleres, encuentros y acciones formativas.</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1.5 text-xs text-slate-300">
              <div className="text-base font-bold text-white flex items-center gap-1.5">
                <span>👨‍👩‍👧 Apoyo a familias</span>
              </div>
              <p>Espacios de orientación, formación familiar y acompañamiento comunitario.</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1.5 text-xs text-slate-300">
              <div className="text-base font-bold text-white flex items-center gap-1.5">
                <span>🤝 Voluntariado</span>
              </div>
              <p>Formación, seguros y recursos necesarios para una participación segura y responsable.</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1.5 text-xs text-slate-300">
              <div className="text-base font-bold text-white flex items-center gap-1.5">
                <span>🧭 Nuevos proyectos</span>
              </div>
              <p>Diseño y preparación de iniciativas como el Projecte Brúixola.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vías de Donación */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Formas de apoyar a EducaFe
          </h2>
          <p className="text-slate-600 text-sm">
            Puedes realizar una donación puntual o solicitar información para colaborar de manera continuada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Información y apoyo continuado */}
          <div className="p-8 rounded-3xl bg-white border-2 border-sky-100 shadow-md space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Colaboración continuada</h3>
                  <p className="text-xs text-slate-500">Personas socias y colaboradoras</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-sky-50/60 border border-sky-200 space-y-3 text-xs text-slate-800">
                <div className="text-sm font-bold text-sky-950 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-sky-600" />
                  <span>Elige cómo quieres participar</span>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  Si deseas hacer una aportación periódica, colaborar con materiales o apoyar una actividad concreta, escríbenos. Te explicaremos las opciones disponibles y el destino de la aportación antes de formalizarla.
                </p>
                <div className="pt-2">
                  <a
                    href="mailto:info@asociacioneducafe.org?subject=Quiero%20colaborar%20con%20EducaFe"
                    className="inline-flex items-center justify-center gap-2 w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-md transition-all text-sm group"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Solicitar información</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1 text-xs text-slate-600">
              <p><strong className="text-slate-900">Transparencia:</strong> no se anuncia ninguna deducción fiscal automática. Si necesitas un justificante de tu aportación, solicítalo por correo.</p>
            </div>
          </div>

          {/* Transferencia Bancaria */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-md space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Transferencia Bancaria Institucional</h3>
                  <p className="text-xs text-slate-500">Cuenta oficial de la Asociación Cristiana EducaFe</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-xs text-slate-800">
                <div>
                  <span className="font-bold text-slate-500 uppercase block">Titular de la Cuenta:</span>
                  <span className="font-semibold text-sm text-slate-900">ASOCIACIÓN CRISTIANA EDUCAFE</span>
                </div>
                <div>
                  <span className="font-bold text-slate-500 uppercase block">NIF de la Entidad:</span>
                  <span className="font-mono font-bold text-sm text-sky-700">G19357789</span>
                </div>
                <div>
                  <span className="font-bold text-slate-500 uppercase block">Concepto Recomendado:</span>
                  <span className="font-semibold text-slate-900">Donación EducaFe + Nombre Donante</span>
                </div>
                <div>
                  <span className="font-bold text-slate-500 uppercase block">IBAN Bancario:</span>
                  <span className="font-mono font-bold text-xs sm:text-sm text-slate-900 bg-white px-2.5 py-1 rounded border border-slate-300 block select-all">
                    ES84 0182 4315 7002 0158 8175
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed">
              Puedes solicitar un justificante de la aportación enviando el comprobante a <a href="mailto:info@asociacioneducafe.org" className="text-sky-600 font-bold underline">info@asociacioneducafe.org</a>.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
