import React from 'react';
import Link from 'next/link';
import {
  Compass,
  MapPin,
  CheckCircle2,
  Users,
  Cpu,
  Globe2,
  Building2,
  HeartHandshake,
  Target,
  Sparkles,
  BookOpen,
  GraduationCap,
  Layers,
  ShieldCheck,
  Mail
} from 'lucide-react';

export const metadata = {
  title: 'Projecte Brúixola | Associació Cristiana EducaFe',
  description: 'Projecte socioeducatiu gratuït a Mont-roig del Camp per a adolescents de 13 a 18 anys i les seves famílies. Projecte en preparació.',
};

export default function BruixolaPage() {
  return (
    <div className="space-y-16 py-12">
      
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-sky-700 text-xs font-bold uppercase tracking-wider border border-sky-200">
            <Compass className="w-4 h-4 text-sky-600" />
            <span>Acció Socioeducativa Juvenil</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Projecte Brúixola
          </h1>

          <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-medium">
            Projecte socioeducatiu gratuït a Mont-roig del Camp per a adolescents de 13 a 18 anys i les seves famílies, amb itineraris Rumbo (13 a 15) i Timón (16 a 18).
          </p>

          {/* Estat del Projecte */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-sm font-semibold">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse"></span>
            <span>Estat: Projecte en preparació</span>
          </div>

          {/* Tarjeta de Localización y Carácter Gratuito */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-sky-900 to-slate-900 text-white flex flex-wrap items-center justify-between gap-4 shadow-md">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-sky-400 shrink-0" />
              <div>
                <div className="text-xs text-sky-300 font-semibold uppercase">Àmbit d&apos;Actuació</div>
                <div className="text-sm font-bold">Mont-roig del Camp (Baix Camp, Tarragona)</div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-semibold">
              <span className="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                ✓ Gratuït per a participants
              </span>
              <span className="px-3 py-1 rounded-lg bg-sky-500/20 text-sky-300 border border-sky-500/40">
                ✓ Adolescents de 13 a 18 anys i famílies
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Clàusula d'Accés Obert Obligatòria (Punt 2) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-3xl bg-emerald-50 border-2 border-emerald-200/90 shadow-sm space-y-3">
          <div className="flex items-center gap-2 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Compromís d&apos;Accés Obert</span>
          </div>
          <p className="text-base sm:text-lg text-emerald-950 font-bold leading-relaxed">
            &ldquo;Els nostres programes socials i de formació estan oberts a totes les famílies, sense condicionar la participació a creences, origen ni capacitat econòmica.&rdquo;
          </p>
        </div>
      </section>

      {/* Itineraris per Franges d'Edat */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Itineraris Formatius per Edats
          </h2>
          <p className="text-slate-600 text-sm">
            Estructurat en dues etapes d&apos;acompanyament segons l&apos;etapa madurativa i educativa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
              <span>Franja de 13 a 15 anys</span>
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900">
              Itinerari Rumbo
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Acompanyament socioeducatiu enfocat a adolescents de 13 a 15 anys, centrat en el desenvolupament d&apos;hàbits d&apos;estudi, gestió emocional, reforç competencial i convivència positiva.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider">
              <span>Franja de 16 a 18 anys</span>
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900">
              Itinerari Timón
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Orientació personal i vocacional adreçada a joves de 16 a 18 anys per promoure l&apos;autonomia cap a la vida adulta, la continuïtat formativa, la presa responsable de decisions i el projecte de vida.
            </p>
          </div>
        </div>
      </section>

      {/* Activitats del Projecte (Les 8 activitats requerides) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Activitats del Projecte
          </h2>
          <p className="text-slate-600 text-sm">
            Àmbits d&apos;intervenció que componen el programa integral de Brúixola.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* 1. Valoració i pla individual */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
              <Target className="w-5 h-5 text-sky-600" />
            </div>
            <h3 className="text-base font-bold text-slate-900">1. Valoració i pla individual</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Diagnòstic inicial personalitzat i disseny d&apos;un pla d&apos;acompanyament adaptat a les necessitats i metes de cada participant.
            </p>
          </div>

          {/* 2. Life Skills */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5 text-teal-600" />
            </div>
            <h3 className="text-base font-bold text-slate-900">2. Life Skills</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Desenvolupament d&apos;habilitats per a la vida: comunicació interpersonal, resolució de conflictes, gestió de l&apos;estrès i treball en equip.
            </p>
          </div>

          {/* 3. Autonomia per a la vida adulta */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <Layers className="w-5 h-5 text-amber-600" />
            </div>
            <h3 className="text-base font-bold text-slate-900">3. Autonomia per a la vida adulta</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Eines pràctiques per a l&apos;organització quotidiana, gestió responsable de recursos, hàbits saludables i pensament crític.
            </p>
          </div>

          {/* 4. Competències digitals i ús responsable de la IA */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
              <Cpu className="w-5 h-5 text-indigo-600" />
            </div>
            <h3 className="text-base font-bold text-slate-900">4. Competències digitals i ús responsable de la IA</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Capacitació digital conscient, seguretat a la xarxa, criteri informacional i ús ètic i productiu de la intel·ligència artificial.
            </p>
          </div>

          {/* 5. Orientació educativa i vocacional */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
              <GraduationCap className="w-5 h-5 text-sky-600" />
            </div>
            <h3 className="text-base font-bold text-slate-900">5. Orientació educativa i vocacional</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Descoberta d&apos;interessos acadèmics i professionals, exploració d&apos;itineraris formatius i suport davant la presa de decisions.
            </p>
          </div>

          {/* 6. Anglès funcional */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <Globe2 className="w-5 h-5 text-emerald-600" />
            </div>
            <h3 className="text-base font-bold text-slate-900">6. Anglès funcional</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Capacitació comunicativa pràctica en llengua anglesa per ampliar oportunitats educatives i reduir la bretxa formativa.
            </p>
          </div>

          {/* 7. Escola de Famílies */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
              <Users className="w-5 h-5 text-rose-600" />
            </div>
            <h3 className="text-base font-bold text-slate-900">7. Escola de Famílies</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Espais de trobada, acompanyament a la parentalitat positiva, comunicació intrafamiliar i suport a l&apos;etapa adolescent.
            </p>
          </div>

          {/* 8. Aprenentatge servei */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold">
              <HeartHandshake className="w-5 h-5 text-teal-600" />
            </div>
            <h3 className="text-base font-bold text-slate-900">8. Aprenentatge servei</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Projectes pràctics de participació comunitària on els adolescents apliquen aprenentatges donant servei al seu entorn local.
            </p>
          </div>

        </div>
      </section>

      {/* Aliats que es poden citar (Punt 4) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Aliats i Cooperació Institucional
          </h2>
          <p className="text-slate-600 text-sm">
            Entitats i institucions col·laboradores en l&apos;àmbit territorial:
          </p>
        </div>

        <div className="max-w-2xl">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-teal-600 font-bold text-xs uppercase tracking-wider">
              <Building2 className="w-4 h-4" />
              <span>Espai Comunitari i Municipal · Mont-roig del Camp</span>
            </div>
            <div className="text-lg font-bold text-slate-900">
              EcoSpai (Mont-roig del Camp)
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Espai comunitari i municipal per al desenvolupament d&apos;activitats pràctiques, sostenibilitat i aprenentatge-servei en coordinació amb l&apos;Ajuntament de Mont-roig del Camp per a l&apos;acompanyament i dinamització d&apos;adolescents i famílies del municipi.
            </p>
          </div>
        </div>
      </section>

      {/* Secció Final de Contacte Informatiu */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-4">
          <div className="flex items-center gap-2 text-teal-400 font-bold text-xs uppercase tracking-wider">
            <Compass className="w-4 h-4" />
            <span>Informació General</span>
          </div>
          <h2 className="text-2xl font-bold">
            Projecte en Preparació
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
            El Projecte Brúixola es troba actualment en fase de preparació tècnica i metodològica. Per a qualsevol consulta institucional, col·laboració o informació general, pots contactar directament amb l&apos;Associació Cristiana EducaFe.
          </p>
          <div className="pt-2 flex flex-wrap gap-4 items-center">
            <a
              href="mailto:info@asociacioneducafe.org?subject=Consulta%20Projecte%20Brúixola"
              className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-sky-600"
            >
              <Mail className="w-4 h-4" />
              <span>Contactar per correu electrònic</span>
            </a>
            <Link
              href="/transparencia"
              className="inline-flex items-center rounded-xl border border-slate-700 px-5 py-3 text-sm font-bold text-slate-200 transition-colors hover:bg-slate-800"
            >
              <span>Consultar transparència institucional</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}