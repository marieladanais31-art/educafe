import React from 'react';
import { Metadata } from 'next';
import { ShieldCheck, FileText, Building } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Avís Legal i Política de Privacitat | ASOCIACIÓN CRISTIANA EDUCAFE (NIF G19357789)',
  description:
    'Informació legal, NIF G19357789, Registre d\'Associacions de la Generalitat de Catalunya núm. 75881, protecció de dades RGPD i protocol LOPIVI de l\'ASOCIACIÓN CRISTIANA EDUCAFE.',
};

export default function PoliticaPrivacitatPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10 text-slate-800">
      
      {/* Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-sky-700 text-xs font-semibold uppercase tracking-wider border border-sky-200">
          <ShieldCheck className="w-4 h-4 text-sky-600" />
          <span>Informació Legal Registrada & RGPD</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Avís Legal, Política de Privacitat i Cookies
        </h1>
        <p className="text-sm text-slate-500">
          Documentació adaptada a la legislació vigent (Reglament UE 2016/679 RGPD i Llei Orgànica 3/2018 LOPDGDD).
        </p>
      </div>

      {/* Ficha Oficial Identificativa */}
      <div className="p-6 rounded-3xl bg-slate-900 text-white space-y-4 shadow-xl border border-slate-800">
        <div className="flex items-center gap-3 text-sky-400 font-bold text-lg">
          <Building className="w-6 h-6" />
          <span>Fitxa d’Identificació Fiscal i Registral</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300 pt-2 border-t border-slate-800">
          <div>
            <strong className="text-slate-100">Raó Social / Denominació:</strong><br />
            ASOCIACIÓN CRISTIANA EDUCAFE
          </div>
          <div>
            <strong className="text-slate-100">NIF Definitiu:</strong><br />
            <span className="text-sky-400 font-mono font-bold text-sm">G19357789</span> (AEAT 43157 Tortosa)
          </div>
          <div>
            <strong className="text-slate-100">Seu Social i Àmbit:</strong><br />
            Mont-roig del Camp, Tarragona (Catalunya)
          </div>
          <div>
            <strong className="text-slate-100">Registre d’Associacions:</strong><br />
            Generalitat de Catalunya · Secció 1a Terres de l&apos;Ebre<br />
            Núm. d&apos;inscripció: <span className="text-teal-400 font-bold">75881</span>
          </div>
          <div>
            <strong className="text-slate-100">Correu Electrònic Oficial:</strong><br />
            <a href="mailto:info@asociacioneducafe.org" className="text-sky-400 underline font-medium">
              info@asociacioneducafe.org
            </a>
          </div>
          <div>
            <strong className="text-slate-100">Representació Legal:</strong><br />
            Elías Vidal Campalans (President)<br />
            Mary Claudia Jiménez (Secretària)
          </div>
        </div>
      </div>

      {/* Legal Text Body */}
      <div className="space-y-8 text-sm leading-relaxed border-t border-slate-200 pt-6">
        
        <section id="aviso-legal" className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <FileText className="w-5 h-5 text-sky-600" />
            <span>1. Avís Legal i Identificació de l’Entitat</span>
          </h2>
          <p>
            En compliment de l’article 10 de la Llei 34/2002, d’11 de juliol, de Serveis de la Societat de la Informació i Comerç Electrònic (LSSI-CE), es fa constar que el domini <strong>www.asociacioneducafe.org</strong> i els seus subdominis són propietat exclusiva de l’<strong>ASOCIACIÓN CRISTIANA EDUCAFE</strong>, entitat d’acció social constituïda a l’empara de la Llei 4/2008 de la Generalitat de Catalunya i inscrita amb el número de registre 75881.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-teal-600" />
            <span>2. Protecció de Dades de Caràcter Personal (RGPD)</span>
          </h2>
          <p>
            De conformitat amb el Reglament (UE) 2016/679 del Parlament Europeu i del Consell (RGPD) i la Llei Orgànica 3/2018 (LOPDGDD), s’informa a les persones usuàries que les dades personals recollides mitjançant canals de contacte, inscripcions a programes socioeducatius o voluntariat seran tractades sota la responsabilitat de l’ASOCIACIÓN CRISTIANA EDUCAFE.
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
            <li><strong>Finalitat del Tractament:</strong> Gestió de consultes, sol·licituds de col·laboració, voluntariat, participació associativa i enviament d’informació institucional sol·licitada.</li>
            <li><strong>Base Jurídica:</strong> El consentiment exprés de la persona usuària o representant legal.</li>
            <li><strong>Destinataris:</strong> No se cediran dades a tercers excepte obligació legal o requeriment de l’administració pública competent.</li>
            <li><strong>Exercici de Drets (ARCO):</strong> Podeu exercir en qualsevol moment els drets d’accés, rectificació, supressió, limitació i oposició adreçant-vos a <code>info@asociacioneducafe.org</code>.</li>
          </ul>
        </section>

        <section id="cookies" className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <FileText className="w-5 h-5 text-amber-600" />
            <span>3. Política de Cookies</span>
          </h2>
          <p>
            Aquest lloc web utilitza exclusivament cookies tècniques indispensables per a la correcta navegació i visualització dels continguts. No s’utilitzen cookies de seguiment comercial ni publicitari.
          </p>
        </section>

      </div>
    </div>
  );
}
