import React from 'react';
import Link from 'next/link';
import {
  BookOpen,
  Users,
  Compass,
  GraduationCap,
  Church,
  BarChart3,
  Calendar,
  AlertCircle,
  ArrowRight,
  Heart
} from 'lucide-react';

export const metadata = {
  title: 'Recursos i Articles Socioeducatius | Associació Cristiana EducaFe',
  description: 'Guies pràctiques, consells i dades verificades per a famílies, adolescents, mestres, pastors i comunitats.',
};

export default function RecursosPage() {
  return (
    <div className="space-y-16 py-12">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-sky-700 text-xs font-bold uppercase tracking-wider border border-sky-200">
            <BookOpen className="w-4 h-4 text-sky-600" />
            <span>Formació, Eines i Orientació</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Recursos i Articles Socioeducatius
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Eines pràctiques, pautes educatives i reflexions basades en valors per acompanyar infants i adolescents en el seu desenvolupament acadèmic, emocional i comunitari.
          </p>
        </div>
      </section>

      {/* 1. SECCIÓ PER A FAMÍLIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
            <Users className="w-5 h-5 text-rose-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Per a Famílies</h2>
            <p className="text-xs text-slate-500 font-medium">Orientació parental, convivència a la llar i hàbits educatius</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-rose-600">#ConsellEnFamília</span>
              <span>30 d&apos;octubre</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">Hàbits d&apos;estudi a la llar</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Consells pràctics per establir rutines estables d&apos;estudi, condicionar espais tranquils i acompanyar l&apos;esforç quotidià sense generar tensions ni dependència.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-teal-600">#ParaulaIVida</span>
              <span>1 de novembre</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">Gratitud a casa</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Com fomentar una cultura d&apos;agraïment quotidià a la taula familiar, basada en el valor de valorar les coses senzilles, el respecte mutu i la cura de les relacions.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-rose-600">#ConsellEnFamília</span>
              <span>2 de novembre</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">Parlar amb un adolescent</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Estratègies de comunicació assertiva: triar el moment adequat, practicar l&apos;escolta activa, validar les seves emocions i evitar els judicis precipitats.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-rose-600">#ConsellEnFamília</span>
              <span>9 de novembre</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">Límits amb afecte i fermesa</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              L&apos;establiment de normes clares com a expressió de protecció i cura, construint acords previsibles i respectuosos des de la parentalitat positiva.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 md:col-span-2 lg:col-span-2">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-rose-600">#ConsellEnFamília</span>
              <span>20 de novembre</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">Dia Universal de la Infància</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Reflexió i compromís sobre el dret de cada infant a una educació de qualitat, protecció integral davant la violència i suport comunitari per créixer en dignitat i pau.
            </p>
          </div>

        </div>
      </section>

      {/* 2. SECCIÓ PER A ADOLESCENTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
            <Compass className="w-5 h-5 text-sky-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Per a Adolescents</h2>
            <p className="text-xs text-slate-500 font-medium">Itineraris Rumbo (13-15) i Timón (16-18) · Orientació i autonomia</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Dato Escolar Verificado con Fuente Oficial */}
          <div className="p-6 rounded-2xl bg-sky-900 text-white shadow-md space-y-3">
            <div className="flex items-center justify-between text-xs text-sky-300">
              <span className="font-bold uppercase tracking-wider">#DatoEscolar · Verificat</span>
              <span>28 d&apos;octubre</span>
            </div>
            <div className="text-3xl font-extrabold text-teal-300">12,8 %</div>
            <h3 className="text-base font-bold text-white">Taxa d&apos;abandonament escolar prematur a Espanya (2025)</h3>
            <p className="text-xs text-slate-200 leading-relaxed">
              La taxa d&apos;abandonament educatiu primerenc es va situar en el 12,8 % el 2025. Conèixer la importància de completar els estudis secundaris és clau per obrir portes a la formació professional i a una ocupabilitat digna.
            </p>
            <div className="pt-2 text-[11px] text-sky-300 font-mono border-t border-sky-800">
              Font: Encuesta de Población Activa (EPA), via Ministerio de Educación, Formación Profesional y Deportes (2025).
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-sky-600">#Rumbo (13-15 anys)</span>
              <span>6 de novembre</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">Tres preguntes abans de decidir</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Què m&apos;agrada fer realment? Quines habilitats se&apos;m donen millor? Quines opcions tinc a l&apos;acabar l&apos;ESO? Guia d&apos;autoconeixement per triar el teu itinerari educatiu amb seguretat.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-teal-600">#Timón (16-18 anys)</span>
              <span>13 de novembre</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">El teu primer pressupost personal</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Eines d&apos;autonomia per a la vida adulta: com planificar ingressos, distingir necessitats reals de desitjos fugaços i establir un objectiu d&apos;estalvi responsable.
            </p>
          </div>

        </div>
      </section>

      {/* 3. SECCIÓ PER A MESTRES I EDUCADORS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold">
            <GraduationCap className="w-5 h-5 text-teal-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Per a Mestres i Educadors</h2>
            <p className="text-xs text-slate-500 font-medium">Acompanyament a l&apos;aula, vincle família-escola i prevenció del fracàs</p>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 max-w-3xl">
          <div className="text-xs font-semibold text-teal-600">#EducacióEnValors</div>
          <h3 className="text-lg font-bold text-slate-900">Acompanyament socioeducatiu davant la desmotivació a l&apos;aula</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Estratègies de mediació pedagògica per reconectar adolescents en risc de desenganxament escolar. La col·laboració entre els centres docents, les entitats socials i les famílies com a xarxa protectora de l&apos;èxit educatiu.
          </p>
        </div>
      </section>

      {/* 4. SECCIÓ PER A PASTORS I ESGLÉSIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
            <Church className="w-5 h-5 text-amber-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Per a Pastors i Esglésies</h2>
            <p className="text-xs text-slate-500 font-medium">Servei a la comunitat, acompanyament familiar i entorns segurs</p>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 max-w-3xl">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span className="font-semibold text-amber-600">#PerAPastors</span>
            <span>16 de novembre</span>
          </div>
          <h3 className="text-lg font-bold text-slate-900">L&apos;església i les famílies: vocació de servei comunitari</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Com les comunitats de fe poden esdevenir espais d&apos;acollida incondicional i suport a les famílies del seu barri o municipi, oferint acompanyament intergeneracional, espais educatius segurs i suport als infants més vulnerables.
          </p>
        </div>
      </section>

      {/* Avís Editorial d'Estadístiques Pendents de Verificació */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs text-slate-600">
          <div className="flex items-center gap-2 font-bold text-slate-800">
            <AlertCircle className="w-4 h-4 text-amber-600" />
            <span>Peces en procés de verificació de dades estadístiques</span>
          </div>
          <p className="leading-relaxed">
            Per rigor metodològic, l&apos;Associació Cristiana EducaFe només publica articles amb xifres que disposin de font oficial i any verificat. Els següents continguts del calendari estan pendents de validació abans de la seva difusió:
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-500 pt-1">
            <li><em>4 de novembre:</em> Repetició de curs escolar (pendent de verificació de font i sèrie temporal).</li>
            <li><em>11 de novembre:</em> Ús del telèfon mòbil i qualitat del son (pendent de verificació de font sanitària).</li>
            <li><em>18 de novembre:</em> Bretxa digital domèstica (pendent de verificació d&apos;indicador estadístic oficial).</li>
          </ul>
        </div>
      </section>

    </div>
  );
}