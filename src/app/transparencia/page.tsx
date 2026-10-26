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
  title: 'Portal de Transparència | Associació Cristiana EducaFe',
  description: 'Missió, òrgans de govern, activitats, polítiques de protecció de la infància, voluntariat i comptes anuals.',
};

export default function TransparenciaPage() {
  return (
    <div className="space-y-16 py-12">
      
      {/* Header Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-sky-700">
            <Scale className="h-4 w-4" />
            <span>Rendició de Comptes i Bon Govern</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Portal de Transparència
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-slate-600">
            Compartim de manera clara i accessible la identitat jurídica, la governança, les activitats, les polítiques de protecció i els comptes anuals de l&apos;Associació Cristiana EducaFe.
          </p>
        </div>
      </section>

      {/* 1. Identitat Jurídica i Dades Registrals */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <ShieldCheck className="h-6 w-6 text-sky-700" />
            <div className="mt-4 text-xs font-bold uppercase text-slate-500">Personalitat Jurídica</div>
            <div className="mt-1 font-bold text-slate-900">Associació Cristiana EducaFe</div>
            <p className="mt-2 text-xs text-slate-500">Entitat sense ànim de lucre constituïda a Catalunya.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <FileText className="h-6 w-6 text-teal-700" />
            <div className="mt-4 text-xs font-bold uppercase text-slate-500">Identificació Fiscal</div>
            <div className="mt-1 font-mono font-bold text-slate-900">NIF: G19357789</div>
            <p className="mt-2 text-xs text-slate-500">Subjecta al règim fiscal d&apos;entitats sense afany de lucre.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <Scale className="h-6 w-6 text-amber-700" />
            <div className="mt-4 text-xs font-bold uppercase text-slate-500">Registre Oficial</div>
            <div className="mt-1 font-bold text-slate-900">Generalitat de Catalunya núm. 75881</div>
            <p className="mt-2 text-xs text-slate-500">Inscrita al Registre d&apos;Entitats Jurídiques.</p>
          </div>
        </div>
      </section>

      {/* 2. Missió Institucional */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-sky-100 bg-sky-50/70 p-8 sm:p-10 space-y-4">
          <div className="flex items-center gap-2 text-sky-800 font-bold text-xs uppercase tracking-wider">
            <Building2 className="w-4 h-4 text-sky-600" />
            <span>Missió i Fins Estatutaris (Art. 2)</span>
          </div>
          <blockquote className="text-base sm:text-lg text-slate-800 font-medium italic border-l-4 border-sky-500 pl-4 leading-relaxed">
            &ldquo;Promoure el desenvolupament educatiu, personal i comunitari d&apos;infants, adolescents i famílies, amb atenció preferent a qui es troba en situació de vulnerabilitat social i econòmica, inspirats en valors de servei, dignitat i solidaritat.&rdquo;
          </blockquote>
          <p className="text-sm text-slate-600 leading-relaxed pt-2">
            L&apos;Associació Cristiana EducaFe treballa sota el principi d&apos;accés universal i obert: els nostres programes socials i de formació estan oberts a totes les famílies, sense condicionar la participació a creences, origen ni capacitat econòmica.
          </p>
        </div>
      </section>

      {/* 3. Òrgans de Govern */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-slate-900">Òrgans de Govern i Representació</h2>
          <p className="text-sm text-slate-600">
            Composició vigent aprovada per l&apos;Assemblea General de l&apos;entitat.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-sky-600">Presidència</div>
            <div className="text-lg font-bold text-slate-900">Elías Vidal Campalans</div>
            <p className="text-xs text-slate-500">Direcció estratègica, coordinació institucional i compliment dels fins associatius.</p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-teal-600">Secretaria</div>
            <div className="text-lg font-bold text-slate-900">Mary Claudia Jiménez</div>
            <p className="text-xs text-slate-500">Gestió documental, custòdia d&apos;actes, administració registral i comunicació interna.</p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed">
          <strong>Règim de gratuïtat:</strong> D&apos;acord amb els Estatuts i la legislació vigent per a associacions a Catalunya, cap membre de la Junta Directiva percep retribució salarial ni remuneració per l&apos;exercici de les seves funcions de govern.
        </div>
      </section>

      {/* 4. Activitats i Programes Socioeducatius */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-slate-900">Activitats i Línies d&apos;Actuació</h2>
          <p className="text-sm text-slate-600">Projectes i iniciatives socioeducatives impulsades per l&apos;entitat.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-sky-700">Projecte Brúixola</div>
            <h3 className="font-bold text-slate-900">Acompanyament Juvenil (13-18 anys)</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Iniciativa socioeducativa gratuïta a Mont-roig del Camp amb els itineraris Rumbo (13-15) i Timón (16-18), actualment en preparació tècnica.
            </p>
            <Link href="/bruixola" className="inline-flex items-center gap-1 text-xs font-bold text-sky-600 hover:text-sky-800">
              <span>Veure detalls</span> <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-teal-700">Orientació Familiar</div>
            <h3 className="font-bold text-slate-900">Escola de Famílies</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Tallers i espais de trobada per a mares, pares i tutors legals entorn de la parentalitat positiva, comunicació intrafamiliar i hàbits saludables.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-700">Voluntariat Social</div>
            <h3 className="font-bold text-slate-900">Acció Comunitària</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Promoció del voluntariat, formació contínua i projectes d&apos;aprenentatge servei arrelats al Baix Camp i Terres de l&apos;Ebre.
            </p>
            <Link href="/voluntariat" className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 hover:text-amber-900">
              <span>Veure voluntariat</span> <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Polítiques Institucionals */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-slate-900">Polítiques i Normativa Interna</h2>
          <p className="text-sm text-slate-600">Marc de protecció i funcionament intern de l&apos;entitat.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Política de Protecció a la Infància */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-rose-700 font-bold text-xs uppercase tracking-wider">
              <Lock className="w-4 h-4" />
              <span>Protecció a la Infància (LOPIVI)</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Política de Protecció a la Infància i Bon Tracte
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Protocol institucional de prevenció, detecció precoç i actuació davant qualsevol situació de violència o risc envers menors, d&apos;acord amb la Llei Orgànica 8/2021 (LOPIVI). Disposa de delegat de protecció i canal confidencial segur.
            </p>
            <div className="pt-2">
              <Link href="/proteccio-infancia" className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-600 hover:text-rose-800">
                <span>Consultar Protocol LOPIVI complet</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Política de Voluntariat */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-teal-700 font-bold text-xs uppercase tracking-wider">
              <HeartHandshake className="w-4 h-4" />
              <span>Participació Social</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Pla i Política de Voluntariat
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Regula els drets i deures de les persones voluntàries, el procés d&apos;acollida, la signatura de l&apos;acord de voluntariat, l&apos;assegurança de responsabilitat civil i l&apos;exigència estricta del Certificat Negatiu del Registre Central de Delictes Sexuals per a tot el personal en contacte amb menors.
            </p>
            <div className="pt-2">
              <Link href="/voluntariat" className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-600 hover:text-teal-800">
                <span>Consultar Pla de Voluntariat</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 6. Comptes Anuals i Gestió Econòmica */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-10 space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-slate-900">Comptes Anuals i Informació Econòmica</h2>
            <p className="max-w-3xl text-sm leading-relaxed text-slate-600">
              L&apos;Associació Cristiana EducaFe finança les seves activitats mitjançant aportacions voluntàries, quotes de persones associades i col·laboracions institucionals. El 100% dels recursos es destina a sufragar els costos operatius, d&apos;assegurances i el desenvolupament dels programes educatius i comunitaris.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs space-y-1">
              <div className="font-bold text-slate-900">Darrer Exercici Econòmic Tancat</div>
              <p className="text-slate-600">Informació comptable aprovada per l&apos;Assemblea General de socis.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs space-y-1">
              <div className="font-bold text-slate-900">Auditoria i Destinació de Fons</div>
              <p className="text-slate-600">Sense ànim de lucre. Fons afectes íntegrament als fins socials de l&apos;entitat.</p>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href="mailto:info@asociacioneducafe.org?subject=Sol·licitud%20de%20comptes%20anuals%20i%20documentació%20de%20transparència"
              className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-5 py-3 text-sm font-bold text-white hover:bg-sky-700 transition-colors shadow-sm"
            >
              <Mail className="h-4 w-4" />
              <span>Sol·licitar comptes anuals i memòria econòmica</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}