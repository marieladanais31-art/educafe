import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Globe, ShieldCheck, Award } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Col 1: Branding & Description */}
          <div className="space-y-5">
            <div className="bg-white p-3.5 rounded-2xl inline-block border border-slate-700 shadow-md">
              <Image
                src="/images/logo-educafe-official.png"
                alt="Asociación EducaFe Logo"
                width={220}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </div>
            
            <p className="text-sm text-slate-100 leading-relaxed font-normal">
              <strong className="text-white font-bold text-base">Asociación EducaFe</strong><br />
              Hub de Innovación Social, Empleabilidad, Sostenibilidad y Habilidades para la Vida (Life Skills) impulsando una educación integral basada en valores.
            </p>

            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-700 space-y-1.5 text-xs text-white">
              <div className="flex items-center gap-2 text-sky-300 font-bold text-sm">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                <span>Entidad de Acción Social e Innovación</span>
              </div>
              <p className="text-xs text-slate-200 font-normal">
                Mont-Roig del Camp, Tarragona, Cataluña, España.
              </p>
            </div>
          </div>

          {/* Col 2: Partner Metodológico Chanak */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg tracking-wide flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400" />
              <span>Partner Internacional</span>
            </h4>
            
            <div className="bg-slate-900 p-4.5 rounded-2xl border border-slate-700 space-y-3 shadow-md">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/logo-chanak-official.jpg"
                  alt="Chanak International Academy Logo"
                  width={50}
                  height={50}
                  className="h-11 w-11 object-contain rounded-lg border border-amber-400/60"
                />
                <div>
                  <div className="text-sm font-bold text-amber-300">Chanak International Academy</div>
                  <div className="text-xs text-slate-100 font-medium">Alianza Metodológica</div>
                </div>
              </div>
              <p className="text-xs text-slate-100 leading-relaxed font-normal">
                Certificación modular de competencias, excelencia pedagógica y acompañamiento en la ruta de <strong>Doble Titulación Internacional (Dual Diploma)</strong>.
              </p>
            </div>
          </div>

          {/* Col 3: Programas Clave */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg tracking-wide">Polos de Actuación</h4>
            <ul className="space-y-3 text-sm text-slate-100 font-medium">
              <li>
                <Link href="/#programas" className="hover:text-sky-300 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                  <span>Tech & IA Lab (Desarrollo Digital)</span>
                </Link>
              </li>
              <li>
                <Link href="/#programas" className="hover:text-teal-300 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                  <span>Green & Agri Hub (Sostenibilidad)</span>
                </Link>
              </li>
              <li>
                <Link href="/#programas" className="hover:text-amber-300 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  <span>Life Skills & Wellbeing (Salud Mental)</span>
                </Link>
              </li>
              <li>
                <Link href="/#comunidad" className="hover:text-sky-300 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                  <span>Espacio Comunitario EducaFe</span>
                </Link>
              </li>
              <li>
                <Link href="/quienes-somos" className="hover:text-sky-300 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                  <span>Filosofía & Misión Institucional</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contacto & Ubicación */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg tracking-wide">Contacto & Sede</h4>
            <ul className="space-y-3.5 text-sm text-slate-100 font-normal">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <span className="text-slate-100 font-medium">
                  <strong className="text-white">Mont-Roig del Camp</strong><br />
                  Tarragona, Cataluña, España
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-sky-400 shrink-0" />
                <a href="mailto:info@asociacioneducafe.org" className="hover:text-sky-300 transition-colors font-bold text-sky-300 text-sm">
                  info@asociacioneducafe.org
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-sky-400 shrink-0" />
                <a href="https://www.asociacioneducafe.org" className="hover:text-white transition-colors text-slate-200">
                  www.asociacioneducafe.org
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar High Contrast Pure White */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between text-sm text-slate-100 gap-4 font-medium">
          <p>© {new Date().getFullYear()} Asociación EducaFe. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <Link href="/politica-de-privacidad" className="hover:text-sky-300 transition-colors text-white">
              Política de Privacidad
            </Link>
            <Link href="/politica-de-privacidad#cookies" className="hover:text-sky-300 transition-colors text-white">
              Política de Cookies
            </Link>
            <Link href="/politica-de-privacidad#aviso-legal" className="hover:text-sky-300 transition-colors text-white">
              Aviso Legal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
