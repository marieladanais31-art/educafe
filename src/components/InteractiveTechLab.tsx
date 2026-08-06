'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Cpu, Sprout, Heart, Terminal, Sparkles, CheckCircle, Code2, Zap, Sliders, ArrowRight } from 'lucide-react';
import TiltCard from './3DTiltCard';

export default function InteractiveTechLab() {
  const [activeTab, setActiveTab] = useState<'tech' | 'green' | 'life'>('tech');
  
  // Interactive Simulator States
  const [promptText, setPromptText] = useState('Crear app para huertos sostenibles en Cataluña');
  const [isGenerating, setIsGenerating] = useState(false);
  const [codeOutput, setCodeOutput] = useState(`// Generado por Tech & IA Lab EducaFe
export function App() {
  return (
    <HubSocial>
      <IAAssistant prompt="${promptText}" />
    </HubSocial>
  );
}`);

  // Green Hub Slider
  const [gardens, setGardens] = useState(12);

  // Life Skills Score Slider
  const [emotionsScore, setEmotionsScore] = useState(85);

  const handleSimulateAI = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setCodeOutput(`// Generado por Tech & IA Lab EducaFe
import { AIEmprendimiento } from '@educafe/ia-lab';

export async function DeployApp() {
  const app = await AIEmprendimiento.create({
    idea: "${promptText}",
    socioLocal: "Cataluña",
    impactoSocial: "Alto (ODS 8 & 13)"
  });
  return app.launch();
}`);
      setIsGenerating(false);
    }, 600);
  };

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden border-y border-slate-800">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950 text-sky-400 text-xs font-semibold uppercase tracking-wider border border-sky-800">
            <Zap className="w-4 h-4 text-sky-400 animate-bounce" />
            <span>Laboratorio Interactivo de Innovación</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Experimenta el ecosistema <span className="text-gradient-cyan">EducaFe</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Interactúa en tiempo real con la tecnología, la sostenibilidad y las competencias que adquieren nuestros jóvenes.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 max-w-2xl mx-auto p-1.5 rounded-2xl bg-slate-950 border border-slate-800">
          <button
            onClick={() => setActiveTab('tech')}
            className={`flex-1 min-w-[160px] inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'tech'
                ? 'bg-sky-600 text-white shadow-lg shadow-sky-500/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            <Cpu className="w-4 h-4" />
            <span>1. Tech & IA Lab</span>
          </button>

          <button
            onClick={() => setActiveTab('green')}
            className={`flex-1 min-w-[160px] inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'green'
                ? 'bg-teal-600 text-white shadow-lg shadow-teal-500/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            <Sprout className="w-4 h-4" />
            <span>2. Green & Agri Hub</span>
          </button>

          <button
            onClick={() => setActiveTab('life')}
            className={`flex-1 min-w-[160px] inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'life'
                ? 'bg-amber-600 text-white shadow-lg shadow-amber-500/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            <Heart className="w-4 h-4" />
            <span>3. Life Skills</span>
          </button>
        </div>

        {/* TAB CONTENT 1: TECH & IA LAB SIMULATOR */}
        {activeTab === 'tech' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono text-sky-400 uppercase tracking-widest">
                  Simulador de Desarrollo con IA
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  De la idea al prototipo en minutos
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  En el Tech & IA Lab de EducaFe los adolescentes aprenden a utilizar la Inteligencia Artificial como un copiloto de creación. Generan código limpio, maquetan interfaces y lanzan micro-proyectos digitales.
                </p>
              </div>

              <div className="space-y-3">
                <label className="block text-xs font-semibold text-slate-400 uppercase">
                  Prueba una idea de app juvenil:
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={promptText}
                    onChange={(e) => setPromptText(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-sky-300 focus:outline-none focus:border-sky-500"
                  />
                  <button
                    onClick={handleSimulateAI}
                    disabled={isGenerating}
                    className="px-5 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold shrink-0 transition-colors flex items-center gap-1.5"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>{isGenerating ? 'Generando...' : 'Generar'}</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
                  <div className="font-bold text-sky-400">Desarrollo Web & Apps</div>
                  <div className="text-slate-400">HTML5, Next.js, React, Tailwind CSS</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
                  <div className="font-bold text-teal-400">Ética en IA</div>
                  <div className="text-slate-400">Pensamiento crítico y uso responsable</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <TiltCard className="p-1" glowColor="rgba(56, 189, 248, 0.5)">
                <div className="bg-slate-950 p-6 rounded-3xl border border-sky-500/30 space-y-4 font-mono">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-sky-400" />
                      <span className="text-xs text-slate-300">Terminal TechLab v2026</span>
                    </div>
                    <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded">ONLINE</span>
                  </div>

                  <pre className="text-xs text-sky-300 overflow-x-auto p-4 rounded-xl bg-slate-900 border border-slate-800 leading-relaxed">
                    <code>{codeOutput}</code>
                  </pre>

                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1 text-teal-400">
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>Compilado sin errores</span>
                    </span>
                    <span>Alineado con ODS 4 & 8</span>
                  </div>
                </div>
              </TiltCard>
            </div>
          </div>
        )}

        {/* TAB CONTENT 2: GREEN & AGRI HUB */}
        {activeTab === 'green' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono text-teal-400 uppercase tracking-widest">
                  Calculador de Impacto Ambiental
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Huertos comunitarios y economía circular
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  El Green & Agri Hub empodera a los jóvenes para liderar la transición ecológica mediante la agricultura urbana regenerativa y el aprovechamiento de recursos.
                </p>
              </div>

              <div className="space-y-4 bg-slate-950 p-6 rounded-2xl border border-teal-800">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-teal-300 uppercase">
                    Número de bancales / Huertos activos en Cataluña:
                  </label>
                  <span className="text-lg font-extrabold text-teal-400">{gardens} huertos</span>
                </div>
                <input
                  type="range"
                  min={2}
                  max={50}
                  value={gardens}
                  onChange={(e) => setGardens(Number(e.target.value))}
                  className="w-full accent-teal-500 cursor-pointer"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-teal-950/40 border border-teal-800 text-center space-y-1">
                  <div className="text-2xl font-extrabold text-teal-300">{(gardens * 140).toLocaleString()} kg</div>
                  <div className="text-xs text-slate-400">Alimentos agroecológicos/año</div>
                </div>
                <div className="p-4 rounded-xl bg-teal-950/40 border border-teal-800 text-center space-y-1">
                  <div className="text-2xl font-extrabold text-emerald-300">{(gardens * 0.45).toFixed(1)} T</div>
                  <div className="text-xs text-slate-400">CO2 reducido / año (ODS 13)</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <TiltCard className="p-1" glowColor="rgba(45, 212, 191, 0.5)">
                <div className="bg-slate-950 p-8 rounded-3xl border border-teal-500/30 text-center space-y-6">
                  <Sprout className="w-16 h-16 text-teal-400 mx-auto animate-pulse" />
                  <h4 className="text-xl font-bold text-white">Competencias Verdes Europeas</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Formación práctica en compostaje comunitario, conservación del agua y soberanía alimentaria adaptada al ámbito local.
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-900/60 text-teal-300 text-xs font-bold border border-teal-700">
                    <span>Alineado con la Transición Ecológica de Cataluña</span>
                  </div>
                </div>
              </TiltCard>
            </div>
          </div>
        )}

        {/* TAB CONTENT 3: LIFE SKILLS & WELLBEING */}
        {activeTab === 'life' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                  Evaluador de Bienestar & Habilidades
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Gestión emocional y proyecto de vida
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Ofrecemos mentoría personal y actividades en grupo para reducir la ansiedad, fomentar la autoestima y proyectar una vocación sólida y con propósito.
                </p>
              </div>

              <div className="space-y-4 bg-slate-950 p-6 rounded-2xl border border-amber-800">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-amber-300 uppercase">
                    Índice de Resiliencia & Autocuidado:
                  </label>
                  <span className="text-lg font-extrabold text-amber-400">{emotionsScore}%</span>
                </div>
                <input
                  type="range"
                  min={50}
                  max={100}
                  value={emotionsScore}
                  onChange={(e) => setEmotionsScore(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>

              <div className="grid grid-cols-3 gap-3 text-center text-xs">
                <div className="p-3 rounded-xl bg-slate-950 border border-amber-900/60">
                  <div className="font-bold text-amber-400">Escucha Activa</div>
                  <div className="text-[11px] text-slate-400">Diálogo empático</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-amber-900/60">
                  <div className="font-bold text-amber-400">Resolución</div>
                  <div className="text-[11px] text-slate-400">Gestión conflictos</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-amber-900/60">
                  <div className="font-bold text-amber-400">Vocación</div>
                  <div className="text-[11px] text-slate-400">Sentido de logro</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <TiltCard className="p-1" glowColor="rgba(245, 158, 11, 0.5)">
                <div className="bg-slate-950 p-8 rounded-3xl border border-amber-500/30 text-center space-y-6">
                  <Heart className="w-16 h-16 text-amber-400 mx-auto animate-pulse" />
                  <h4 className="text-xl font-bold text-white">Mentoría Social de Acompañamiento</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Un modelo humano que coloca la salud mental y el crecimiento personal en el centro de la experiencia formativa.
                  </p>
                  <div className="p-3 rounded-xl bg-amber-950/60 text-amber-300 text-xs font-semibold border border-amber-800">
                    <span>En asociación metodológica con Chanak International Academy</span>
                  </div>
                </div>
              </TiltCard>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
