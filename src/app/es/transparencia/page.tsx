import React from 'react';
import Link from 'next/link';
import {
  Scale,
  ShieldCheck,
  FileText,
  Users,
  HeartHandshake,
  CheckCircle2,
  Mail,
  Building2,
  Lock,
  ArrowRight
} from 'lucide-react';

export const metadata = {
  title: 'Portal de Transparencia | Asociación Cristiana EducaFe',
  description: 'Misión, órganos de gobierno, actividades, políticas de protección de la infancia, voluntariado y cuentas anuales.',
};

export default function EsTransparenciaPage() {
  return (
    <div className="space-y-16 py-12">
      
      {/* Header Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-sky-700">
            <Scale className="h-4 w-4" />
            <span>Rendición de Cuentas y Buen Gobierno</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Portal de Transparencia
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-slate-600">
            Compartimos de forma clara y accesible la identidad jurídica, la gobernanza, las actividades, las políticas de protección y las cuentas anuales de la Asociación Cristiana EducaFe.
          </p>
        </div>
      </section>

      {/* 1. Identidad Jurídica y Datos Registrales */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <ShieldCheck className="h-6 w-6 text-sky-700" />
            <div className="mt-4 text-xs font-bold uppercase text-slate-500">Personalidad Jurídica</div>
            <div className="mt-1 font-bold text-slate-900">Asociación Cristiana EducaFe</div>
            <p className="mt-2 text-xs text-slate-500">Entidad sin ánimo de lucro constituida en Cataluña.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <FileText className="h-6 w-6 text-teal-700" />
            <div className="mt-4 text-xs font-bold uppercase text-slate-500">Identificación Fiscal</div>
            <div className="mt-1 font-mono font-bold text-slate-900">NIF: G19357789</div>
            <p className="mt-2 text-xs text-slate-500">Sujeta al régimen fiscal de entidades sin fines lucrativos.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <Scale className="h-6 w-6 text-amber-700" />
            <div className="mt-4 text-xs font-bold uppercase text-slate-500">Registro Oficial</div>
            <div className="mt-1 font-bold text-slate-900">Generalitat de Catalunya nº 75881</div>
            <p className="mt-2 text-xs text-slate-500">Inscrita en el Registro de Entidades Jurídicas.</p>
          </div>
        </div>
      </section>

      {/* 2. Misión Institucional */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-sky-100 bg-sky-50/70 p-8 sm:p-10 space-y-4">
          <div className="flex items-center gap-2 text-sky-800 font-bold text-xs uppercase tracking-wider">
            <Building2 className="w-4 h-4 text-sky-600" />
            <span>Misión y Fines Estatutarios (Art. 2)</span>
          </div>
          <blockquote className="text-base sm:text-lg text-slate-800 font-medium italic border-l-4 border-sky-500 pl-4 leading-relaxed">
            &ldquo;Promover el desarrollo educativo, personal y comunitario de niños, adolescentes y familias, con atención preferente a quienes se encuentran en situación de vulnerabilidad social y económica, inspirados en valores de servicio, dignidad y solidaridad.&rdquo;
          </blockquote>
          <p className="text-sm text-slate-600 leading-relaxed pt-2">
            La Asociación Cristiana EducaFe trabaja bajo el principio de acceso universal y abierto: nuestros programas sociales y de formación están abiertos a todas las familias, sin condicionar la participación a creencias, origen ni capacidad económica.
          </p>
        </div>
      </section>

      {/* 3. Órganos de Gobierno */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-slate-900">Órganos de Gobierno y Representación</h2>
          <p className="text-sm text-slate-600">
            Composición vigente aprobada por la Asamblea General de la entidad.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-sky-600">Presidencia</div>
            <div className="text-lg font-bold text-slate-900">Elías Vidal Campalans</div>
            <p className="text-xs text-slate-500">Dirección estratégica, coordinación institucional y cumplimiento de los fines asociativos.</p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-teal-600">Secretaría</div>
            <div className="text-lg font-bold text-slate-900">Mary Claudia Jiménez</div>
            <p className="text-xs text-slate-500">Gestión documental, custodia de actas, administración registral y comunicación interna.</p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed">
          <strong>Régimen de gratuidad:</strong> Conforme a los Estatutos y a la legislación vigente de asociaciones en Cataluña, ningún miembro de la Junta Directiva percibe retribución salarial ni remuneración por el ejercicio de sus funciones de gobierno.
        </div>
      </section>

      {/* 4. Actividades y Programas Socioeducativos */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-slate-900">Actividades y Líneas de Actuación</h2>
          <p className="text-sm text-slate-600">Proyectos e iniciativas socioeducativas impulsadas por la entidad.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-sky-700">Proyecto Brúixola</div>
            <h3 className="font-bold text-slate-900">Acompañamiento Juvenil (13-18 años)</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Iniciativa socioeducativa gratuita en Mont-roig del Camp con los itinerarios Rumbo (13-15) y Timón (16-18), actualmente en preparación técnica.
            </p>
            <Link href="/es/proyecto-bruixola" className="inline-flex items-center gap-1 text-xs font-bold text-sky-600 hover:text-sky-800">
              <span>Ver detalles</span> <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-teal-700">Orientación Familiar</div>
            <h3 className="font-bold text-slate-900">Escuela de Familias</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Talleres y espacios de encuentro para madres, padres y tutores legales en torno a la parentalidad positiva, comunicación intrafamiliar y hábitos saludables.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-700">Voluntariado Social</div>
            <h3 className="font-bold text-slate-900">Acción Comunitaria</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Promoción del voluntariado, formación continua y proyectos de aprendizaje servicio arraigados en el Baix Camp y Terres de l&apos;Ebre.
            </p>
            <Link href="/es/voluntariado" className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 hover:text-amber-900">
              <span>Ver voluntariado</span> <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Políticas Institucionales */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-slate-900">Políticas y Normativa Interna</h2>
          <p className="text-sm text-slate-600">Marco de protección y funcionamiento interno de la entidad.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Política de Protección a la Infancia */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-rose-700 font-bold text-xs uppercase tracking-wider">
              <Lock className="w-4 h-4" />
              <span>Protección a la Infancia (LOPIVI)</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Política de Protección a la Infancia y Buen Trato
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Protocolo institucional de prevención, detección temprana y actuación ante cualquier situación de violencia o riesgo hacia menores, conforme a la Ley Orgánica 8/2021 (LOPIVI). Dispone de delegado de protección y canal confidencial seguro.
            </p>
            <div className="pt-2">
              <Link href="/es/proteccion-infancia" className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-600 hover:text-rose-800">
                <span>Consultar Protocolo LOPIVI completo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Política de Voluntariado */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-teal-700 font-bold text-xs uppercase tracking-wider">
              <HeartHandshake className="w-4 h-4" />
              <span>Participación Social</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Plan y Política de Voluntariado
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Regula los derechos y deberes de las personas voluntarias, el proceso de acogida, la firma del acuerdo de voluntariado, el seguro de responsabilidad civil y la exigencia estricta del Certificado Negativo del Registro Central de Delincuentes Sexuales para todo el personal en contacto con menores.
            </p>
            <div className="pt-2">
              <Link href="/es/voluntariado" className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-600 hover:text-teal-800">
                <span>Consultar Plan de Voluntariado</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 6. Cuentas Anuales y Gestión Económica */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-10 space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-slate-900">Cuentas Anuales e Información Económica</h2>
            <p className="max-w-3xl text-sm leading-relaxed text-slate-600">
              La Asociación Cristiana EducaFe financia sus actividades mediante aportaciones voluntarias, cuotas de personas asociadas y colaboraciones institucionales. El 100% de los recursos se destina a sufragar los costes operativos, seguros y el desarrollo de los programas educativos y comunitarios.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs space-y-1">
              <div className="font-bold text-slate-900">Último Ejercicio Económico Cerrado</div>
              <p className="text-slate-600">Información contable aprobada por la Asamblea General de socios.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs space-y-1">
              <div className="font-bold text-slate-900">Auditoría y Destino de Fondos</div>
              <p className="text-slate-600">Sin ánimo de lucro. Fondos afectos íntegramente a los fines sociales de la entidad.</p>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href="mailto:info@asociacioneducafe.org?subject=Solicitud%20de%20cuentas%20anuales%20y%20documentación%20de%20transparencia"
              className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-5 py-3 text-sm font-bold text-white hover:bg-sky-700 transition-colors shadow-sm"
            >
              <Mail className="h-4 w-4" />
              <span>Solicitar cuentas anuales y memoria económica</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}