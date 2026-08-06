'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Mail, MapPin, HeartHandshake, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function UnetePage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Launch confetti celebration
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch {
      // fallback
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 text-sky-700 text-xs font-semibold uppercase tracking-wider border border-sky-200">
          <HeartHandshake className="w-4 h-4 text-sky-600" />
          <span>Colaboración Institucional, Alianzas y Voluntariado</span>
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
          Unámonos para impulsar el futuro de la juventud
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          Ya seas una institución, una fundación, una familia o un mentor interesado en aportar tu talento, queremos escucharte.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Info Column */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">Formas de Colaboración</h2>
            
            <div className="space-y-4 text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Proyectos de Responsabilidad Social (RSC):</strong> Financiación o copatrocinio de becas en el Tech & IA Lab, Green Hub o Life Skills.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Alianzas Institucionales y Subvenciones:</strong> Coordinación de proyectos conjuntos Erasmus+, Fondos Europeos y programas de Acción Social.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Socios Locales e Idiomas:</strong> Implementación de programas de estudio innovadores e inmersión lingüística en municipios y escuelas.
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 space-y-4 text-xs text-slate-600">
              <div className="flex items-center gap-2.5 text-sky-600 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>NIF Oficial: G19357789</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700 text-sm">
                <Mail className="w-5 h-5 text-sky-600 shrink-0" />
                <a href="mailto:info@asociacioneducafe.org" className="hover:text-sky-600 font-medium">
                  info@asociacioneducafe.org
                </a>
              </div>
              <div className="flex items-start gap-3 text-slate-700 text-sm">
                <MapPin className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                <span>Mont-Roig del Camp, Tarragona, Cataluña, España</span>
              </div>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="lg:col-span-7">
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">Formulario de Contacto e Inscripción</h2>
            <p className="text-sm text-slate-600">
              Rellena tus datos y nuestro equipo se pondrá en contacto contigo a la mayor brevedad.
            </p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-xl font-bold text-slate-900">¡Mensaje Enviado con Éxito!</h3>
                <p className="text-sm text-slate-600">
                  Hemos recibido tus datos correctamente. Te responderemos en un plazo máximo de 24-48 horas a través del correo <code>info@asociacioneducafe.org</code>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Nombre Completo</label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. María García"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-sm outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Correo Electrónico</label>
                    <input
                      type="email"
                      required
                      placeholder="tu@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-sm outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Tipo de Entidad / Perfil</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-sm outline-none transition-all bg-white">
                    <option value="entidad">Fundación / Empresa / Entidad Pública</option>
                    <option value="escuela">Centro Educativo / Socio Local</option>
                    <option value="familia">Familia / Estudiante</option>
                    <option value="voluntario">Voluntario / Mentor</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Mensaje o Solicitud</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Cuéntanos en qué te gustaría colaborar o qué información necesitas sobre los programas..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-sm outline-none transition-all"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-600 via-teal-600 to-sky-700 hover:from-sky-700 hover:to-teal-700 text-white font-bold px-6 py-4 rounded-xl shadow-lg hover:shadow-sky-500/20 transition-all text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Formulario</span>
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
