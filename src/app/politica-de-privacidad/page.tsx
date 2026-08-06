import React from 'react';
import { Metadata } from 'next';
import { ShieldCheck, FileText, Building, Mail, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Aviso Legal y Política de Privacidad | ASOCIACIÓN CRISTIANA EDUCAFE (NIF G19357789)',
  description:
    'Información legal, NIF G19357789, Registro de Asociaciones de la Generalitat de Catalunya nº 75881, protección de datos RGPD y política de cookies de la ASOCIACIÓN CRISTIANA EDUCAFE.',
};

export default function PoliticaPrivacidadPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10 text-slate-800">
      
      {/* Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-sky-700 text-xs font-semibold uppercase tracking-wider border border-sky-200">
          <ShieldCheck className="w-4 h-4 text-sky-600" />
          <span>Información Legal Registrada & RGPD</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Aviso Legal, Política de Privacidad y Cookies
        </h1>
        <p className="text-sm text-slate-500">
          Documentación adaptada a la legislación vigente (Reglamento UE 2016/679 RGPD y Ley Orgánica 3/2018 LOPDGDD).
        </p>
      </div>

      {/* Ficha Oficial Identificativa */}
      <div className="p-6 rounded-3xl bg-slate-900 text-white space-y-4 shadow-xl border border-slate-800">
        <div className="flex items-center gap-3 text-sky-400 font-bold text-lg">
          <Building className="w-6 h-6" />
          <span>Ficha de Identificación Fiscal y Registral</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300 pt-2 border-t border-slate-800">
          <div>
            <strong className="text-slate-100">Razó Social / Denominación:</strong><br />
            ASOCIACIÓN CRISTIANA EDUCAFE
          </div>
          <div>
            <strong className="text-slate-100">NIF Definitivo:</strong><br />
            <span className="text-sky-400 font-mono font-bold text-sm">G19357789</span> (AEAT 43157 Tortosa)
          </div>
          <div>
            <strong className="text-slate-100">Sede Social y Ámbito:</strong><br />
            Mont-Roig del Camp, Tarragona, Cataluña, España
          </div>
          <div>
            <strong className="text-slate-100">Registro de Asociaciones:</strong><br />
            Generalitat de Catalunya · Secció 1a Terres de l&apos;Ebre<br />
            Núm. d&apos;inscripció: <span className="text-teal-400 font-bold">75881</span>
          </div>
          <div>
            <strong className="text-slate-100">Correo Electrónico Oficial:</strong><br />
            <a href="mailto:info@asociacioneducafe.org" className="text-sky-400 underline font-medium">
              info@asociacioneducafe.org
            </a>
          </div>
          <div>
            <strong className="text-slate-100">Representación Legal:</strong><br />
            Elías Vidal Campalans (Presidente)<br />
            Mariela Andrade Aparicio de Vidal (Representante)
          </div>
        </div>
      </div>

      {/* Legal Text Body */}
      <div className="space-y-8 text-sm leading-relaxed border-t border-slate-200 pt-6">
        
        <section id="aviso-legal" className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <FileText className="w-5 h-5 text-sky-600" />
            <span>1. Aviso Legal e Identificación de la Entidad</span>
          </h2>
          <p>
            En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE), se hace constar que el dominio <strong>www.asociacioneducafe.org</strong> y sus subdominios son propiedad exclusiva de la <strong>ASOCIACIÓN CRISTIANA EDUCAFE</strong>, entidad de acción social e innovación educativa constituida al amparo de la Ley 4/2008 de la Generalitat de Catalunya e inscrita con el número de registro 75881.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-teal-600" />
            <span>2. Protección de Datos de Carácter Personal (RGPD)</span>
          </h2>
          <p>
            De conformidad con el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD), se informa a los usuarios de que los datos personales recabados mediante formularios de contacto, inscripciones a programas de estudio, voluntariado o comunicaciones electrónicas serán tratados bajo la responsabilidad de la ASOCIACIÓN CRISTIANA EDUCAFE.
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
            <li><strong>Finalidad del Tratamiento:</strong> Gestión de consultas, tramitación de solicitudes de colaboración, coordinación de programas de capacitación juvenil (Tech Lab, Green Hub, Life Skills), alianzas locales y envío de información institucional.</li>
            <li><strong>Base Jurídica:</strong> El consentimiento expreso del usuario manifestado al cumplimentar y enviar los formularios correspondientes.</li>
            <li><strong>Destinatarios:</strong> No se cederán datos a terceros salvo obligación legal expresa o requerimiento de la administración competente.</li>
            <li><strong>Ejercicio de Derechos (ARCO):</strong> El usuario puede ejercitar en cualquier momento sus derechos de acceso, rectificación, supresión, limitación y oposición enviando un correo electrónico a <code>info@asociacioneducafe.org</code> adjuntando copia de su documento de identidad.</li>
          </ul>
        </section>

        <section id="cookies" className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <FileText className="w-5 h-5 text-amber-600" />
            <span>3. Política de Cookies</span>
          </h2>
          <p>
            Este sitio web utiliza cookies técnicas estrictamente necesarias para garantizar la correcta navegación y visualización de contenidos. No se emplean cookies publicitarias ni de perfilado comercial.
          </p>
        </section>

      </div>
    </div>
  );
}
