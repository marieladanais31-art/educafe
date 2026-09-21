import React from 'react';
import Link from 'next/link';
import {
  Compass,
  MapPin,
  Calendar,
  CheckCircle2,
  Users,
  Cpu,
  Globe2,
  ArrowRight,
  Building2,
  HeartHandshake,
  Target,
  Clock3,
  FileCheck2
} from 'lucide-react';

export const metadata = {
  title: 'Projecte Brúixola | Associació Cristiana EducaFe',
  description: 'Acompanyament socioeducatiu, habilitats per a la vida i competència digital per a l\'equitat juvenil a Mont-roig del Camp.',
};

export default function BruixolaPage() {
  return (
    <div className="space-y-16 py-12">
      
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-sky-700 text-xs font-bold uppercase tracking-wider border border-sky-200">
            <Compass className="w-4 h-4 text-sky-600" />
            <span>Programa Socioeducatiu Integral</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Projecte Brúixola: Acompanyament socioeducatiu, habilitats per a la vida i competència digital per a l&apos;equitat juvenil
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Iniciativa comunitària dissenyada per reforçar la trajectòria acadèmica, el benestar emocional i l&apos;orientació vital d&apos;adolescents en risc d&apos;exclusió social o abandonament escolar prematur.
          </p>

          <div className="rounded-2xl border border-sky-200 bg-sky-50 px-5 py-4 text-sm leading-relaxed text-sky-950">
            <strong>Nova línia socioeducativa en desenvolupament.</strong> Brúixola està dissenyat per oferir un acompanyament continuat a adolescents i famílies. L&apos;obertura de places es comunicarà quan l&apos;organització i els recursos necessaris estiguin confirmats.
          </div>

          {/* Targeta Resum Piloto */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-sky-900 to-slate-900 text-white flex flex-wrap items-center justify-between gap-4 shadow-md">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-sky-400 shrink-0" />
              <div>
                <div className="text-xs text-sky-300 font-semibold uppercase">Àmbit Territorial</div>
                <div className="text-sm font-bold">Implantació pilot a Mont-roig del Camp (Baix Camp)</div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-teal-400" />
                <span className="text-xs font-semibold">Itinerari dissenyat · 12 mesos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-bold text-emerald-300">En desenvolupament</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { value: '30', label: 'places previstes per a adolescents' },
            { value: '25', label: 'famílies previstes a l’itinerari' },
            { value: '12', label: 'mesos d’intervenció' },
            { value: 'PAI', label: 'pla d’acompanyament individualitzat' },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-3xl font-extrabold text-sky-700">{item.value}</div>
              <div className="mt-1 text-xs sm:text-sm font-medium text-slate-600">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Eixos d'Intervenció Pedagògica */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Eixos d&apos;Intervenció del Projecte
          </h2>
          <p className="text-slate-600 text-sm">
            Estructura modular adaptada a cada etapa madurativa dels joves i a les necessitats de les seves famílies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Eix 1 */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
              🧭
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-sky-600">Franja 12-14 anys</div>
            <h3 className="text-lg font-bold text-slate-900">Itinerari RUMBO</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Autoconeixement, gestió emocional, hàbits de vida saludables, reforç a l&apos;estudi i desenvolupament d&apos;habilitats socials per a la convivència positiva.
            </p>
          </div>

          {/* Eix 2 */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold">
              🎯
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-teal-600">Franja 15-18 anys</div>
            <h3 className="text-lg font-bold text-slate-900">Itinerari TIMÓN</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Orientació vocacional i professional, presa de decisions, mentoria personalitzada i prevenció del desenganche cap a Batxillerat o Cicles Formatius (FP).
            </p>
          </div>

          {/* Eix 3 */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
              <Cpu className="w-6 h-6 text-indigo-700" />
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-indigo-600">Competència Digital</div>
            <h3 className="text-lg font-bold text-slate-900">Laboratori Digital i IA Ètica</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Alfabetització informacional crítica, seguretat i privacitat a internet, programació bàsica i ús ètic de la intel·ligència artificial com a recurs d&apos;aprenentatge.
            </p>
          </div>

          {/* Eix 4 */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
              <Globe2 className="w-6 h-6 text-amber-700" />
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-amber-600">Capacitació Comunicativa</div>
            <h3 className="text-lg font-bold text-slate-900">Anglès Funcional per a l&apos;Equitat</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Enfocament pràctic i comunicatiu de la llengua anglesa per reduir la bretxa curricular i obrir noves oportunitats formatives i d&apos;ocupabilitat futura.
            </p>
          </div>

          {/* Eix 5 */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-3 md:col-span-2 lg:col-span-2">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
              <Users className="w-6 h-6 text-emerald-700" />
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-600">Famílies i Participació</div>
            <h3 className="text-lg font-bold text-slate-900">Orientació Familiar i Projectes Pràctics</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Proposta de trobades d&apos;orientació parental i activitats pràctiques perquè els joves apliquin el que han après, reforcin l&apos;autonomia i desenvolupin responsabilitat personal.
            </p>
          </div>

        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Un itinerari continu, no activitats aïllades</h2>
          <p className="max-w-3xl text-sm sm:text-base text-slate-600 leading-relaxed">Cada participant disposarà d&apos;un Pla d&apos;Acompanyament Individualitzat, seguiment familiar i evidències de progrés.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: Clock3, title: 'Ritme continuat', text: '38 sessions d’habilitats per a la vida, 19 de laboratori digital i 20 de competència comunicativa.' },
            { icon: HeartHandshake, title: 'Acompanyament', text: '10 tutories individuals i seguiment amb cada família durant l’itinerari.' },
            { icon: Target, title: 'Orientació', text: 'Activitats de descoberta vocacional i aplicació pràctica dels aprenentatges.' },
            { icon: FileCheck2, title: 'Avaluació', text: 'Indicadors inicials, seguiment intermedi i avaluació final amb evidències dissociades.' },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <Icon className="h-6 w-6 text-teal-700" />
              <h3 className="mt-4 font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Informació general del projecte */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-4">
          <div className="flex items-center gap-2 text-teal-400 font-bold text-xs uppercase tracking-wider">
            <Building2 className="w-4 h-4" />
            <span>Informació del Projecte Brúixola</span>
          </div>
          <h2 className="text-2xl font-bold">Vols rebre informació?</h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
            El projecte es troba en fase de desenvolupament i encara no hi ha una convocatòria de places oberta. Les persones interessades poden sol·licitar informació general. Les condicions definitives es publicaran quan el projecte estigui aprovat i disposi dels recursos necessaris.
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <a href="mailto:info@asociacioneducafe.org?subject=Informació%20Projecte%20Brúixola" className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-sky-600">Sol·licitar informació <ArrowRight className="h-4 w-4" /></a>
            <Link href="/transparencia" className="inline-flex items-center rounded-xl border border-slate-700 px-5 py-3 text-sm font-bold text-slate-200 transition-colors hover:bg-slate-800">Consultar transparència</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
