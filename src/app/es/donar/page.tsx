import React from 'react';
import Link from 'next/link';
import {
  Heart,
  ShieldCheck,
  Building,
  CreditCard,
  FileCheck,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Lock
} from 'lucide-react';

export const metadata = {
  title: 'Donar y Colaborar | Asociación Cristiana EducaFe',
  description: 'Realiza una donación filantrópica para apoyar el Proyecto Brúixola y a las familias vulnerables de Tarragona.',
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
            Tu aportación es una <strong>donación filantrópica sin contraprestación</strong> destinada exclusivamente a financiar becas de transporte, material educativo y apoyo a la infancia y juventud vulnerable del <strong>Proyecto Brúixola</strong>.
          </p>
        </div>
      </section>

      {/* Gratuidad y Destino de los Fondos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-950 to-sky-950 text-white border border-slate-800 space-y-6 shadow-xl">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400">Compromiso Social y Destino de Fondos</span>
            <h2 className="text-2xl sm:text-3xl font-bold">100% Gratuito para los Beneficiarios</h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Todos los programas de acción socioeducativa de EducaFe son <strong>completamente gratuitos para los menores y sus familias</strong>. Las donaciones hacen posible cubrir directamente:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1.5 text-xs text-slate-300">
              <div className="text-base font-bold text-white flex items-center gap-1.5">
                <span>🚌 Becas de Transporte</span>
              </div>
              <p>Desplazamiento de adolescentes de núcleos rurales de Mont-roig y alrededores a las actividades.</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1.5 text-xs text-slate-300">
              <div className="text-base font-bold text-white flex items-center gap-1.5">
                <span>🍎 Alimentación Saludable</span>
              </div>
              <p>Meriendas nutritivas durante las sesiones de estudio y talleres socioeducativos.</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1.5 text-xs text-slate-300">
              <div className="text-base font-bold text-white flex items-center gap-1.5">
                <span>💻 Herramientas Digitales</span>
              </div>
              <p>Materiales didácticos, licencias y dispositivos para el Laboratorio Digital e IA.</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1.5 text-xs text-slate-300">
              <div className="text-base font-bold text-white flex items-center gap-1.5">
                <span>🤝 Salidas Comunitarias</span>
              </div>
              <p>Actividades en la naturaleza, convivencia familiar y proyectos de aprendizaje-servicio cubiertos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vías de Donación */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Vías Oficiales de Donación Directa
          </h2>
          <p className="text-slate-600 text-sm">
            Canales directos y seguros de la Asociación Cristiana EducaFe (sin intermediarios comerciales).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Tarjeta / Stripe */}
          <div className="p-8 rounded-3xl bg-white border-2 border-sky-100 shadow-md space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                  <CreditCard className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Donación Segura Online (Stripe)</h3>
                  <p className="text-xs text-slate-500">Tarjeta de crédito/débito, Apple Pay y Google Pay</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-sky-50/60 border border-sky-200 space-y-3 text-xs text-slate-800">
                <div className="text-sm font-bold text-sky-950 flex items-center gap-2">
                  <Lock className="w-4 h-4 text-sky-600" />
                  <span>Pasarela Segura de Aportaciones Solidarias</span>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  Puedes realizar tu donación puntual o periódica directamente a través del portal seguro de Stripe de la Asociación Cristiana EducaFe.
                </p>
                <div className="pt-2">
                  <a
                    href="https://donate.stripe.com/test_educafe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-md transition-all text-sm group"
                  >
                    <Heart className="w-4 h-4 fill-white" />
                    <span>Realizar Donación Online Segura</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
                <p className="text-[11px] text-slate-500 text-center">
                  Procesado de forma encriptada y directa a través de Stripe Payments Europe.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1 text-xs text-slate-600">
              <div className="font-bold text-slate-900 flex items-center gap-1.5">
                <FileCheck className="w-4 h-4 text-sky-600" />
                <span>Desgravación Fiscal en IRPF e IS</span>
              </div>
              <p>Recibirás automáticamente el justificante para la deducción fiscal del Modelo 182 de la AEAT.</p>
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
                  <span className="font-semibold text-slate-900">Donación Proyecto Brúixola + Nombre Donante</span>
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
              Puedes solicitar tu certificado fiscal enviando el justificante a <a href="mailto:info@asociacioneducafe.org" className="text-sky-600 font-bold underline">info@asociacioneducafe.org</a>.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
