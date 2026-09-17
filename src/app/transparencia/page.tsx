import React from 'react';
import { ShieldCheck, FileText, Info, CheckCircle2, Building, Scale } from 'lucide-react';
import DocumentDownloadTable from '@/components/DocumentDownloadTable';

export const metadata = {
  title: 'Portal de Transparència | Associació Cristiana EducaFe',
  description: 'Informació institucional, jurídica i econòmica de l\'Associació Cristiana EducaFe. Comptes anuals, estatuts i registre oficial.',
};

export default function TransparenciaPage() {
  const documents = [
    {
      id: 'estatuts',
      title: 'Estatuts de l’Associació Cristiana EducaFe',
      description: 'Estatuts diligenciats oficialment conforme a la Llei d’Associacions de Catalunya.',
      officialRef: 'Generalitat de Catalunya · Reg. núm. 75881',
      filename: 'estatuts-educafe-75881.pdf',
      date: '2024 / Vigent'
    },
    {
      id: 'resolucio',
      title: 'Resolució d’Inscripció Registral',
      description: 'Inscripció formal al Registre d’Entitats Jurídiques de la Direcció General de Dret, Entitats Jurídiques i Mediació.',
      officialRef: 'Departament de Justícia i Qualitat Democràtica',
      filename: 'resolucio-registre-justicia.pdf',
      date: 'Registre Oficial'
    },
    {
      id: 'cif',
      title: 'Targeta d’Identificació Fiscal (NIF)',
      description: 'Document acreditatiu del Número d’Identificació Fiscal emès per l’Agència Estatal d’Administració Tributària (AEAT).',
      officialRef: 'NIF G19357789',
      filename: 'targeta-cif-g19357789.pdf',
      date: 'Definitiu'
    },
    {
      id: 'comptes2025',
      title: 'Comptes Anuals de l’Exercici Tancat 2025',
      description: 'Balanç econòmic i compte de resultats de l’exercici 2025 (Ingressos: 2.879,64 € | Despeses: 3.019,12 €).',
      officialRef: 'Aprovat per l’Assemblea General',
      filename: 'comptes-anuals-2025.pdf',
      date: 'Tancament 31/12/2025'
    },
    {
      id: 'voluntariat',
      title: 'Pla de Voluntariat de l’Entitat',
      description: 'Marc regulador dels drets, deures i formació de les persones voluntàries (Llei 45/2015 del Voluntariat).',
      officialRef: 'Marc Normatiu d’Entorn Segur',
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
            <span>Retiment de Comptes i Legalitat</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Portal de Transparència
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            En compliment de la Llei 19/2014 de transparència, accés a la informació pública i bon govern, i dels criteris ètics de la Fundació &ldquo;la Caixa&rdquo; i convocatòries públiques, posem a disposició de la ciutadania la documentació institucional, registral i econòmica de l&apos;entitat.
          </p>
        </div>
      </section>

      {/* Taula de Descàrrega Documental */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900">Documentació Oficial Diligenciada</h2>
          <span className="text-xs text-slate-500 font-medium hidden sm:inline">Format PDF descargable</span>
        </div>

        <DocumentDownloadTable documents={documents} lang="ca" />
      </section>

      {/* Nota de Transparència Econòmica */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-4">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
            <Info className="w-5 h-5 text-sky-600 shrink-0" />
            <span>Nota aclaratòria sobre l&apos;exercici econòmic 2025</span>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed">
            Durant l&apos;exercici 2025, l&apos;Associació Cristiana EducaFe va desenvolupar la seva activitat mitjançant <strong>espais cedits gratuïtament per entitats col·laboradores i treball voluntari</strong> de l&apos;equip humà, generant un flux econòmic mínim en els seus comptes bancaris (2.879,64 € d&apos;ingressos i 3.019,12 € de despeses).
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            La concurrència a convocatòries públiques i de fundacions socials respon precisament a la voluntat de <strong>professionalitzar la intervenció, consolidar l&apos;equip tècnic i donar continuïtat estructural al Projecte Brúixola</strong> a les comarques de Tarragona.
          </p>
        </div>
      </section>

    </div>
  );
}
