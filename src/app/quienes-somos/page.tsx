import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, Compass, ShieldCheck, GraduationCap, Award, Sparkles, Users, ArrowRight, BookOpen, Scale } from 'lucide-react';
import TiltCard from '@/components/3DTiltCard';

export const metadata: Metadata = {
  title: 'Quiénes Somos | Misión, Filosofía y Valores | Asociación EducaFe',
  description:
    'Conoce la visión y valores de la Asociación EducaFe. Educación integral de calidad, formación del carácter, ética, propósito de vida y desarrollo social en Mont-Roig del Camp, Tarragona.',
};

export default function QuienesSomosPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20 bg-slate-950 text-white">
      
      {/* Hero / Header */}
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-950 text-sky-300 text-xs sm:text-sm font-bold uppercase tracking-wider border border-sky-800">
          <Sparkles className="w-4 h-4 text-sky-400" />
          <span>Filosofía Institucional & Formación Integral</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Educación basada en valores, amor, integridad y propósito
        </h1>
        
        <p className="text-lg text-slate-200 leading-relaxed font-normal">
          En la <strong className="text-white">Asociación EducaFe</strong> concebimos la educación como un viaje profundo de formación del carácter, crecimiento del espíritu, descubrimiento vocacional y construcción de una vida con sentido social y moral en Mont-Roig del Camp (Tarragona).
        </p>
      </div>

      {/* Nuestros Pilares y Razón de Ser */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono text-sky-400 uppercase tracking-widest font-bold">
            Nuestra Razón de Ser
          </span>
          <h2 className="text-3xl font-extrabold text-white">
            Los Pilares que Guían Nuestra Labor
          </h2>
          <p className="text-base text-slate-200">
            Principios humanos y comunitarios que orientan cada uno de nuestros programas:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <TiltCard glowColor="rgba(56, 189, 248, 0.4)">
            <div className="p-7 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 h-full flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Educación Integral con Valores</h3>
                <p className="text-sm text-slate-200 leading-relaxed">
                  Creamos e impulsamos iniciativas educativas que ofrecen una enseñanza de calidad integrada con principios éticos, honestidad y trascendencia en cada área del aprendizaje.
                </p>
              </div>
            </div>
          </TiltCard>

          <TiltCard glowColor="rgba(45, 212, 191, 0.4)">
            <div className="p-7 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 h-full flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Desarrollo Moral y Social</h3>
                <p className="text-sm text-slate-200 leading-relaxed">
                  Colaboramos estrechamente con las comunidades para fomentar un entorno de crecimiento humano, moral y social profundamente transformador.
                </p>
              </div>
            </div>
          </TiltCard>

          <TiltCard glowColor="rgba(245, 158, 11, 0.4)">
            <div className="p-7 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 h-full flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                  <Scale className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Amor y Justicia Social</h3>
                <p className="text-sm text-slate-200 leading-relaxed">
                  Reflejamos el amor y el compromiso mediante iniciativas concretas que mejoran la calidad de vida de las familias y colectivos vulnerables.
                </p>
              </div>
            </div>
          </TiltCard>

          <TiltCard glowColor="rgba(56, 189, 248, 0.4)">
            <div className="p-7 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 h-full flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Apoyo Continuo a la Familia</h3>
                <p className="text-sm text-slate-200 leading-relaxed">
                  Brindamos respaldo constante a los padres y tutores para cultivar un ambiente educativo de afecto, diálogo y fortaleza en el hogar.
                </p>
              </div>
            </div>
          </TiltCard>

          <TiltCard glowColor="rgba(45, 212, 191, 0.4)">
            <div className="p-7 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 h-full flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Capacitación de Mentores</h3>
                <p className="text-sm text-slate-200 leading-relaxed">
                  Capacitamos a formadores y referentes comunitarios para transmitir sabiduría, valores transversales y herramientas pedagógicas efectivas.
                </p>
              </div>
            </div>
          </TiltCard>

          <TiltCard glowColor="rgba(245, 158, 11, 0.4)">
            <div className="p-7 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 h-full flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Juventud con Principios Éticos</h3>
                <p className="text-sm text-slate-200 leading-relaxed">
                  Inspiramos a los adolescentes y jóvenes a emprender con principios éticos sólidos y convertirse en agentes de cambio en su entorno.
                </p>
              </div>
            </div>
          </TiltCard>

        </div>
      </div>

      {/* Red de Co-Creación y Alianzas */}
      <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white space-y-6 shadow-xl border border-slate-800">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950 text-sky-300 text-xs font-bold uppercase tracking-wider border border-sky-800">
          <Users className="w-4 h-4 text-sky-400" />
          <span>Red de Co-Creación Comunitaria</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
          Alianzas para programas de estudio innovadores e idiomas
        </h2>

        <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
          En la <strong className="text-white">Asociación EducaFe</strong> trabajamos en la construcción de alianzas estratégicas con escuelas, centros comunitarios y organizaciones sociales en Mont-Roig del Camp (Tarragona) y toda Cataluña para desarrollar **programas de estudio innovadores, capacitación en idiomas y competencias digitales y socioemocionales**.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
            <div className="text-base font-bold text-sky-400">Co-diseño Curricular</div>
            <div className="text-xs text-slate-300">Adaptación de contenidos a las necesidades reales de cada entorno social.</div>
          </div>
          <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
            <div className="text-base font-bold text-teal-400">Idiomas e Inmersión</div>
            <div className="text-xs text-slate-300">Competencias lingüísticas avanzadas para proyección académica internacional.</div>
          </div>
          <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
            <div className="text-base font-bold text-amber-400">Transferencia Metodológica</div>
            <div className="text-xs text-slate-300">Formación a docentes y referentes locales para garantizar la sostenibilidad.</div>
          </div>
        </div>
      </div>

      {/* Alianza con Chanak International Academy */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <Image
              src="/images/logo-chanak-official.jpg"
              alt="Chanak Academy Logo"
              width={60}
              height={60}
              className="h-14 w-14 object-contain rounded-xl border border-amber-400/50 shrink-0"
            />
            <div className="space-y-1">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                Partner Metodológico Internacional
              </span>
              <h3 className="text-2xl font-bold text-white">Chanak International Academy</h3>
            </div>
          </div>

          <Link
            href="/unete"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3.5 rounded-xl text-xs transition-colors shrink-0 shadow-lg"
          >
            <span>Consultar Alianza</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <p className="text-sm text-slate-200 leading-relaxed font-normal border-t border-slate-800 pt-4">
          Esta colaboración internacional permite a nuestros estudiantes acceder a certificaciones modulares de competencias, refuerzo educativo de alto rendimiento y soporte en la ruta de <strong>Doble Titulación Internacional (Dual Diploma)</strong>.
        </p>
      </div>

    </div>
  );
}
