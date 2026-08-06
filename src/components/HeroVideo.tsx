'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, ArrowRight, ShieldCheck, Cpu, Sprout, Heart, Play, Activity } from 'lucide-react';
import TechParticles from '@/app/components/TechParticles';
import TiltCard from './3DTiltCard';

export default function HeroVideo() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white pt-24 pb-20 border-b border-slate-800">
      
      {/* Background Video Loop with Shader Mask */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105 filter brightness-[0.35] contrast-125 saturate-150"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-futuristic-digital-network-technology-background-41544-large.mp4"
            type="video/mp4"
          />
          <source
            src="https://videos.pexels.com/video-files/6929085/6929085-hd_1080_1920_30fps.mp4"
            type="video/mp4"
          />
        </video>
        
        {/* Radial Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/70 to-slate-950" />
        <div className="scanline" />
      </div>

      {/* Interactive Particle Network */}
      <TechParticles />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Column Left */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Dual Logos & Badge Bar */}
            <div className="flex flex-wrap items-center gap-4">
              
              {/* Bigger EducaFe Logo Container */}
              <div className="bg-white/95 backdrop-blur-md p-3 rounded-2xl border border-sky-400/40 shadow-lg shadow-sky-500/10">
                <Image
                  src="/images/logo-educafe-official.png"
                  alt="Asociación EducaFe Logo"
                  width={240}
                  height={65}
                  className="h-12 sm:h-14 w-auto object-contain"
                  priority
                />
              </div>

              {/* Chanak Partner Badge */}
              <div className="bg-slate-900/90 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-amber-500/40 flex items-center gap-3 shadow-lg shadow-amber-500/10">
                <Image
                  src="/images/logo-chanak-official.jpg"
                  alt="Chanak International Academy Logo"
                  width={45}
                  height={45}
                  className="h-9 w-9 object-contain rounded-lg border border-amber-400/30"
                />
                <div className="flex flex-col text-left">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-amber-400">
                    Alianza Internacional
                  </span>
                  <span className="text-xs font-semibold text-slate-200">
                    Chanak Academy · Dual Diploma
                  </span>
                </div>
              </div>

            </div>

            {/* Kicker Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-sky-950/80 border border-sky-400/40 text-sky-300 text-xs sm:text-sm font-semibold uppercase tracking-wider">
              <Activity className="w-4 h-4 text-sky-400 animate-pulse" />
              <span>Hub de Innovación Social, Empleabilidad & Life Skills</span>
            </div>

            {/* Main Title H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Impulsamos el talento juvenil, la empleabilidad y el bienestar para{' '}
              <span className="text-gradient-cyan">transformar el futuro.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              En la <strong>Asociación EducaFe</strong> capacitamos a la nueva generación a través de metodologías avanzadas en <strong>Inteligencia Artificial (Tech Lab)</strong>, <strong>Sostenibilidad (Green Hub)</strong> y <strong>Habilidades para la Vida (Life Skills)</strong>. Prevenimos el fracaso escolar y mejoramos la salud mental en Cataluña.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <Link
                href="#programas"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-sky-500 via-teal-500 to-sky-600 hover:from-sky-600 hover:to-teal-600 text-white font-bold px-8 py-4 rounded-2xl shadow-xl shadow-sky-500/25 hover:shadow-sky-500/40 transition-all text-base group"
              >
                <span>Explorar Hub de Programas</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/unete"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-semibold px-7 py-4 rounded-2xl border border-slate-700 hover:border-slate-500 transition-all text-base"
              >
                <ShieldCheck className="w-5 h-5 text-teal-400" />
                <span>Alianzas e Inversión Social</span>
              </Link>
            </div>

          </div>

          {/* Futuristic Interactive 3D Card HUD Right */}
          <div className="lg:col-span-5 relative">
            <TiltCard glowColor="rgba(56, 189, 248, 0.4)" className="p-1">
              <div className="glass-cyber p-7 space-y-6 rounded-3xl relative overflow-hidden">
                
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-xs font-mono text-slate-300 uppercase tracking-widest">
                      TELEMETRÍA DE IMPACTO SOCIAL
                    </span>
                  </div>
                  <span className="text-xs font-bold text-sky-400 bg-sky-950/80 px-2.5 py-1 rounded-md border border-sky-800">
                    2026 ACTIVE
                  </span>
                </div>

                {/* Interactive Metric Cards */}
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold">
                        <Cpu className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-200">Tech & IA Lab</div>
                        <div className="text-[11px] text-slate-400">Creación de Apps & Micro-emprendimientos</div>
                      </div>
                    </div>
                    <span className="text-sm font-extrabold text-sky-400">+100% IA</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold">
                        <Sprout className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-200">Green & Agri Hub</div>
                        <div className="text-[11px] text-slate-400">Economía Circular & Transición Ecológica</div>
                      </div>
                    </div>
                    <span className="text-sm font-extrabold text-teal-400">ODS 13</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                        <Heart className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-200">Life Skills & Wellbeing</div>
                        <div className="text-[11px] text-slate-400">Salud Mental & Gestión Emocional</div>
                      </div>
                    </div>
                    <span className="text-sm font-extrabold text-amber-400">+85% Salud</span>
                  </div>
                </div>

                {/* Dual Diploma Badge Inside HUD */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-950/60 to-slate-900 border border-amber-500/30 flex items-center gap-4">
                  <Image
                    src="/images/logo-chanak-official.jpg"
                    alt="Chanak Academy Logo"
                    width={40}
                    height={40}
                    className="h-10 w-10 object-contain rounded-lg shrink-0 border border-amber-400/40"
                  />
                  <div>
                    <div className="text-xs font-bold text-amber-300">Ruta Dual Diploma Internacional</div>
                    <div className="text-[11px] text-slate-300">Acreditación de competencias & Refuerzo de excelencia</div>
                  </div>
                </div>

              </div>
            </TiltCard>
          </div>

        </div>
      </div>
    </section>
  );
}
