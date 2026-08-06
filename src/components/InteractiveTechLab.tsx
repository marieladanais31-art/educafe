'use client';

import React, { useState } from 'react';
import { Cpu, Sprout, Heart, Terminal, Sparkles, CheckCircle, Zap, Clock, Brain, MessageSquare, Target } from 'lucide-react';
import TiltCard from './3DTiltCard';

export default function InteractiveTechLab() {
  const [activeTab, setActiveTab] = useState<'tech' | 'green' | 'life'>('life');
  
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
  const [gardens, setGardens] = useState(15);

  // Life Skills Active Module
  const [selectedSkillModule, setSelectedSkillModule] = useState(0);

  const lifeSkillsModules = [
    {
      title: '1. Autonomía & Gestión del Tiempo',
      icon: Clock,
      desc: 'Planificación semanal, hábitos de estudio sostenibles, organización de metas y autorregulación académica.',
      outcome: 'Reduce el estrés lectivo y previene el abandono escolar.',
      score: '92%',
    },
    {
      title: '2. Pensamiento Crítico & Criterio',
      icon: Brain,
      desc: 'Análisis objetivo de la información, discernimiento de noticias falsas y toma de decisiones éticas conscientes.',
      outcome: 'Formación de jóvenes libres con visión crítica.',
      score: '88%',
    },
    {
      title: '3. Inteligencia Emocional & Salud Mental',
      icon: Heart,
      desc: 'Gestión de la frustración, reducción de la ansiedad juvenil, fortalecimiento de la autoestima y resiliencia.',
      outcome: 'Mejora del +85% en el bienestar psicoafectivo.',
      score: '95%',
    },
    {
      title: '4. Comunicación Asertiva & Trabajo en Equipo',
      icon: MessageSquare,
      desc: 'Oratoria, empatía intergeneracional, resolución pacífica de conflictos y liderazgo cooperativo.',
      outcome: 'Integración comunitaria e inclusión social.',
      score: '90%',
    },
    {
      title: '5. Proyecto Vocacional & Futuro',
      icon: Target,
      desc: 'Descubrimiento de talentos individuales, orientación académica/profesional y articulación con el Dual Diploma.',
      outcome: 'Claridad de metas para la vida adulta.',
      score: '94%',
    },
  ];

  const handleSimulateAI = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setCodeOutput(`// Generado por Tech & IA Lab EducaFe
import { AIEmprendimiento } from '@educafe/ia-lab';

export async function DeployApp() {
  const app = await AIEmprendimiento.create({
    idea: "${promptText}",
    socioLocal: "Mont-Roig del Camp, Tarragona",
    impactoSocial: "Alto (ODS 8 & 13)"
  });
  return app.launch();
}`);
      setIsGenerating(false);
    }, 600);
  };

  return (
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden border-y border-slate-800">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-950 text-sky-400 text-xs font-bold uppercase tracking-wider border border-sky-800">
            <Zap className="w-4 h-4 text-sky-400 animate-bounce" />
            <span>Laboratorio Interactivo de Innovación Social</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Ecosistema de Formación <span className="text-gradient-cyan">EducaFe</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-200 font-normal">
            Explora de manera interactiva los tres ejes pedagógicos que preparan a los jóvenes para la vida.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 max-w-3xl mx-auto p-2 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl">
          <button
            onClick={() => setActiveTab('life')}
            className={`flex-1 min-w-[170px] inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'life'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/30'
                : 'text-slate-200 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Heart className="w-4 h-4" />
            <span>Programa Life Skills</span>
          </button>

          <button
            onClick={() => setActiveTab('tech')}
            className={`flex-1 min-w-[170px] inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'tech'
                ? 'bg-sky-600 text-white shadow-lg shadow-sky-500/30'
                : 'text-slate-200 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Cpu className="w-4 h-4" />
            <span>Tech & IA Lab</span>
          </button>

          <button
            onClick={() => setActiveTab('green')}
            className={`flex-1 min-w-[170px] inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'green'
                ? 'bg-teal-600 text-white shadow-lg shadow-teal-500/30'
                : 'text-slate-200 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Sprout className="w-4 h-4" />
            <span>Green & Agri Hub</span>
          </button>
        </div>

        {/* TAB CONTENT 1: PROGRAMA LIFE SKILLS (DETALLADO Y COMPLETO) */}
        {activeTab === 'life' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
            
            {/* Columna Izquierda: Los 5 Módulos Interáctivos */}
            <div className="lg:col-span-6 space-y-4">
              <div className="space-y-2">
                <span className="text-xs font-mono text-amber-400 uppercase tracking-widest font-bold">
                  Competencias para la Vida & Bienestar
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Programa Life Skills: 5 Módulos Formativos
                </h3>
                <p className="text-sm text-slate-200 leading-relaxed font-normal">
                  Diseñado para fortalecer la salud mental juvenil, promover la autonomía y preparar a los estudiantes para la universidad y el entorno laboral:
                </p>
              </div>

              <div className="space-y-2.5 pt-2">
                {lifeSkillsModules.map((mod, idx) => {
                  const IconComp = mod.icon;
                  const isSelected = selectedSkillModule === idx;
                  return (
                    <div
                      key={idx}
                      onClick={() => setSelectedSkillModule(idx)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                        isSelected
                          ? 'bg-amber-950/60 border-amber-400 shadow-md shadow-amber-500/10'
                          : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className={`p-2.5 rounded-xl shrink-0 ${isSelected ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-800 text-amber-400'}`}>
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm font-bold text-white flex items-center justify-between">
                          <span>{mod.title}</span>
                          {isSelected && <span className="text-xs text-amber-400 font-mono">ACTIVO</span>}
                        </div>
                        <p className="text-xs text-slate-200 leading-relaxed font-normal">{mod.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Columna Derecha: Tarjeta 3D Interactiva del Módulo Seleccionado */}
            <div className="lg:col-span-6">
              <TiltCard className="p-1" glowColor="rgba(245, 158, 11, 0.5)">
                <div className="bg-slate-900 p-8 rounded-3xl border border-amber-500/40 space-y-6">
                  
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
                        {React.createElement(lifeSkillsModules[selectedSkillModule].icon, { className: 'w-6 h-6' })}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-amber-400">OBJETIVO DEL MÓDULO</div>
                        <div className="text-sm font-bold text-white">
                          {lifeSkillsModules[selectedSkillModule].title}
                        </div>
                      </div>
                    </div>
                    <span className="text-sm font-extrabold text-amber-300 bg-amber-950 px-3 py-1 rounded-lg border border-amber-800">
                      {lifeSkillsModules[selectedSkillModule].score} Eficacia
                    </span>
                  </div>

                  <div className="space-y-3 text-left">
                    <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">Impacto Comprobado:</div>
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-100 font-medium">
                      {lifeSkillsModules[selectedSkillModule].outcome}
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-800/80 space-y-2 text-left">
                    <div className="text-xs font-bold text-amber-300 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-amber-400" />
                      <span>Articulación con Chanak International Academy</span>
                    </div>
                    <p className="text-xs text-slate-200 leading-relaxed font-normal">
                      Contenidos homologados para el acompañamiento en la ruta de Doble Titulación Internacional (Dual Diploma) y preparación vocacional universitaria.
                    </p>
                  </div>

                </div>
              </TiltCard>
            </div>
          </div>
        )}

        {/* TAB CONTENT 2: TECH & IA LAB SIMULATOR */}
        {activeTab === 'tech' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono text-sky-400 uppercase tracking-widest font-bold">
                  Simulador de Desarrollo con IA
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  De la idea al prototipo en minutos
                </h3>
                <p className="text-sm text-slate-200 leading-relaxed font-normal">
                  En el Tech & IA Lab de EducaFe los adolescentes aprenden a utilizar la Inteligencia Artificial como un copiloto de creación. Generan código limpio, maquetan interfaces y lanzan micro-proyectos digitales.
                </p>
              </div>

              <div className="space-y-3">
                <label className="block text-xs font-bold text-slate-300 uppercase">
                  Prueba una idea de app juvenil:
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={promptText}
                    onChange={(e) => setPromptText(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-sm text-sky-300 focus:outline-none focus:border-sky-500 font-medium"
                  />
                  <button
                    onClick={handleSimulateAI}
                    disabled={isGenerating}
                    className="px-5 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold shrink-0 transition-colors flex items-center gap-1.5 shadow-md"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>{isGenerating ? 'Generando...' : 'Generar'}</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                  <div className="font-bold text-sky-400">Desarrollo Web & Apps</div>
                  <div className="text-slate-300 font-normal">HTML5, Next.js, React, Tailwind CSS</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                  <div className="font-bold text-teal-400">Ética en IA</div>
                  <div className="text-slate-300 font-normal">Pensamiento crítico y uso responsable</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <TiltCard className="p-1" glowColor="rgba(56, 189, 248, 0.5)">
                <div className="bg-slate-900 p-6 rounded-3xl border border-sky-500/40 space-y-4 font-mono">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-sky-400" />
                      <span className="text-xs text-slate-200 font-bold">Terminal TechLab v2026</span>
                    </div>
                    <span className="text-[10px] text-emerald-300 font-bold bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">ONLINE</span>
                  </div>

                  <pre className="text-xs text-sky-300 overflow-x-auto p-4 rounded-xl bg-slate-950 border border-slate-800 leading-relaxed font-semibold">
                    <code>{codeOutput}</code>
                  </pre>

                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <span className="flex items-center gap-1.5 text-teal-300 font-medium">
                      <CheckCircle className="w-4 h-4 text-teal-400" />
                      <span>Compilado sin errores</span>
                    </span>
                    <span className="text-slate-300">Alineado con ODS 4 & 8</span>
                  </div>
                </div>
              </TiltCard>
            </div>
          </div>
        )}

        {/* TAB CONTENT 3: GREEN & AGRI HUB */}
        {activeTab === 'green' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono text-teal-400 uppercase tracking-widest font-bold">
                  Calculador de Impacto Ambiental
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Huertos comunitarios y economía circular
                </h3>
                <p className="text-sm text-slate-200 leading-relaxed font-normal">
                  El Green & Agri Hub empodera a los jóvenes para liderar la transición ecológica mediante la agricultura urbana regenerativa y el aprovechamiento de recursos en Mont-Roig del Camp.
                </p>
              </div>

              <div className="space-y-4 bg-slate-900 p-6 rounded-2xl border border-teal-700">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-teal-300 uppercase">
                    Número de bancales / Huertos activos en Cataluña:
                  </label>
                  <span className="text-lg font-extrabold text-teal-300">{gardens} huertos</span>
                </div>
                <input
                  type="range"
                  min={2}
                  max={50}
                  value={gardens}
                  onChange={(e) => setGardens(Number(e.target.value))}
                  className="w-full accent-teal-400 cursor-pointer"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900 border border-teal-800 text-center space-y-1">
                  <div className="text-2xl font-extrabold text-teal-300">{(gardens * 140).toLocaleString()} kg</div>
                  <div className="text-xs text-slate-300">Alimentos agroecológicos/año</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-teal-800 text-center space-y-1">
                  <div className="text-2xl font-extrabold text-emerald-300">{(gardens * 0.45).toFixed(1)} T</div>
                  <div className="text-xs text-slate-300">CO2 reducido / año (ODS 13)</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <TiltCard className="p-1" glowColor="rgba(45, 212, 191, 0.5)">
                <div className="bg-slate-900 p-8 rounded-3xl border border-teal-500/40 text-center space-y-6">
                  <Sprout className="w-16 h-16 text-teal-400 mx-auto animate-pulse" />
                  <h4 className="text-xl font-bold text-white">Competencias Verdes Europeas</h4>
                  <p className="text-xs text-slate-200 leading-relaxed font-normal">
                    Formación práctica en compostaje comunitario, conservación del agua y soberanía alimentaria adaptada al ámbito local de Tarragona.
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-950 text-teal-300 text-xs font-bold border border-teal-700">
                    <span>Alineado con la Transición Ecológica de Cataluña</span>
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
