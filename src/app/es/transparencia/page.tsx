import React from 'react';
import { Scale, Info } from 'lucide-react';
import DocumentDownloadTable from '@/components/DocumentDownloadTable';

export const metadata = {
  title: 'Portal de Transparencia | Asociación Cristiana EducaFe',
  description: 'Información institucional, jurídica y económica de la Asociación Cristiana EducaFe. Cuentas anuales, estatutos y registro oficial.',
};

export default function EsTransparenciaPage() {
  const documents = [
    {
      id: 'estatuts',
      title: 'Estatutos de la Asociación Cristiana EducaFe',
      description: 'Estatutos diligenciados oficialmente conforme a la Ley de Asociaciones de Cataluña.',
      officialRef: 'Generalitat de Catalunya · Reg. nº 75881',
      filename: 'estatuts-educafe-75881.pdf',
      date: '2024 / Vigente'
    },
    {
      id: 'resolucio',
      title: 'Resolución de Inscripción Registral',
      description: 'Inscripción formal en el Registro de Entidades Jurídicas de la Dirección General de Derecho, Entidades Jurídicas y Mediación.',
      officialRef: 'Departament de Justícia i Qualitat Democràtica',
      filename: 'resolucio-registre-justicia.pdf',
      date: 'Registro Oficial'
    },
    {
      id: 'cif',
      title: 'Tarjeta de Identificación Fiscal (NIF)',
      description: 'Documento acreditativo del Número de Identificación Fiscal emitido por la Agencia Estatal de Administración Tributaria (AEAT).',
      officialRef: 'NIF G19357789',
      filename: 'targeta-cif-g19357789.pdf',
      date: 'Definitivo'
    },
    {
      id: 'comptes2025',
      title: 'Cuentas Anuales del Ejercicio Cerrado 2025',
      description: 'Balance económico y cuenta de resultados del ejercicio 2025 (Ingresos: 2.879,64 € | Gastos: 3.019,12 €).',
      officialRef: 'Aprobado en Asamblea General',
      filename: 'comptes-anuals-2025.pdf',
      date: 'Cierre 31/12/2025'
    },
    {
      id: 'voluntariat',
      title: 'Plan de Voluntariado de la Entidad',
      description: 'Marco normativo regulador de los derechos, deberes y formación del voluntariado (Ley 45/2015 de Voluntariado).',
      officialRef: 'Marco Normativo de Entorno Seguro',
      filename: 'pla-voluntariat-educafe.pdf',
      date: '2025 - 2027'
    }
  ];

  return (
    <div className="space-y-16 py-12">
      
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-sky-700 text-xs font-bold uppercase tracking-wider border border-sky-200">
            <Scale className="w-3.5 h-3.5 text-sky-600" />
            <span>Rendición de Cuentas y Legalidad</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Portal de Transparencia
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            En cumplimiento de la Ley 19/2014 de transparencia y buen gobierno, y de los estándares exigidos en convocatorias sociales y fondos europeos, ponemos a disposición pública la documentación jurídica, económica y estatutaria de la entidad.
          </p>
        </div>
      </section>

      {/* Tabla de Descarga Documental */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900">Documentación Oficial Diligenciada</h2>
          <span className="text-xs text-slate-500 font-medium hidden sm:inline">Formato PDF descargable</span>
        </div>

        <DocumentDownloadTable documents={documents} lang="es" />
      </section>

      {/* Nota de Transparencia Económica */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-4">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
            <Info className="w-5 h-5 text-sky-600 shrink-0" />
            <span>Nota de transparencia económica sobre el ejercicio 2025</span>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed">
            En el ejercicio 2025 la entidad desarrolló su actividad mediante <strong>espacios cedidos por entidades colaboradoras y trabajo voluntario</strong>, con un flujo económico mínimo en sus cuentas (2.879,64 € de ingresos y 3.019,12 € de gastos).
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            La presentación a convocatorias públicas y fundaciones sociales responde a la necesidad de <strong>profesionalizar la intervención, dotar de estructura técnica y dar continuidad al Proyecto Brúixola</strong> en las comarcas de Tarragona.
          </p>
        </div>
      </section>

    </div>
  );
}
