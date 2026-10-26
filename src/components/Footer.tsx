'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Mail, MapPin, ShieldCheck, ExternalLink, ShieldAlert, Heart, Scale } from 'lucide-react';

export default function Footer() {
  const pathname = usePathname();
  const isEs = pathname?.startsWith('/es');

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          
          {/* Col 1: Institutional Legal Identity */}
          <div className="space-y-4">
            <div className="bg-white p-3 rounded-2xl inline-block border border-slate-800 shadow-md">
              <Image
                src="/images/logo-educafe-official.png"
                alt="Associació Cristiana EducaFe Logo"
                width={200}
                height={55}
                className="h-10 w-auto object-contain"
              />
            </div>
            
            <div className="space-y-1">
              <p className="text-xs font-bold uppercase tracking-wider text-teal-400">
                {isEs ? 'Dejando huella' : 'Deixant petjada'}
              </p>
              <p className="text-sm font-semibold text-white">
                {isEs ? 'Asociación Cristiana EducaFe' : 'Associació Cristiana EducaFe'}
              </p>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isEs
                  ? 'Asociación cristiana. Educación en valores para familias, iglesias y escuelas.'
                  : 'Associació cristiana. Educació en valors per a famílies, esglésies i escoles.'}
              </p>
            </div>

            {/* Cita Bíblica Institucional */}
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-300 italic">
              {isEs
                ? '«Instruye al niño en su camino, y aun cuando fuere viejo no se apartará de él.» — Pr. 22:6'
                : '«Instrueix l’infant en el camí que ha de seguir, i ni de gran no se’n desviarà.» — Pr. 22:6'}
            </div>

            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1 text-xs text-slate-300">
              <div className="flex items-center gap-1.5 text-sky-400 font-bold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>NIF: G19357789</span>
              </div>
              <p className="text-slate-400">
                {isEs
                  ? 'Inscrita en el Registro de Entidades Jurídicas de la Generalitat de Catalunya nº 75881.'
                  : 'Inscrita al Registre d’Entitats Jurídiques de la Generalitat de Catalunya núm. 75881.'}
              </p>
            </div>

            {/* Social Media Links (Instagram & Facebook oficiales) */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="https://www.instagram.com/asociacioneducafe/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors shadow-sm"
                aria-label="Instagram @asociacioneducafe"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=289759114222339"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors shadow-sm"
                aria-label="Facebook EducaFe"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Áreas de Actuación & Programas */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-base tracking-wide">
              {isEs ? 'Programas y Participación' : 'Programes i Participació'}
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link
                  href={isEs ? '/es/donar' : '/donar'}
                  className="hover:text-rose-400 transition-colors flex items-center gap-2 font-semibold text-rose-300"
                >
                  <Heart className="w-3.5 h-3.5 fill-rose-400 text-rose-400" />
                  <span>{isEs ? 'Donar / Colaborar' : 'Donar / Col·laborar'}</span>
                </Link>
              </li>
              <li>
                <Link
                  href={isEs ? '/es/proyecto-bruixola' : '/bruixola'}
                  className="hover:text-sky-400 transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                  <span>{isEs ? 'Proyecto Brúixola (13-18 años)' : 'Projecte Brúixola (13-18 anys)'}</span>
                </Link>
              </li>
              <li>
                <Link
                  href={isEs ? '/es/recursos' : '/recursos'}
                  className="hover:text-sky-400 transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                  <span>{isEs ? 'Recursos Socioeducativos' : 'Recursos Socioeducatius'}</span>
                </Link>
              </li>
              <li>
                <Link
                  href={isEs ? '/es/transparencia' : '/transparencia'}
                  className="hover:text-teal-400 transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                  <span>{isEs ? 'Portal de Transparencia' : 'Portal de Transparència'}</span>
                </Link>
              </li>
              <li>
                <Link
                  href={isEs ? '/es/quienes-somos' : '/qui-som'}
                  className="hover:text-teal-400 transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                  <span>{isEs ? 'Quiénes Somos y Misión' : 'Qui Som i Missió'}</span>
                </Link>
              </li>
              <li>
                <Link
                  href={isEs ? '/es/voluntariado' : '/voluntariat'}
                  className="hover:text-emerald-400 transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>{isEs ? 'Voluntariado y Únete' : 'Voluntariat i Uneix-te'}</span>
                </Link>
              </li>
              <li>
                <Link
                  href={isEs ? '/es/proteccion-infancia' : '/proteccio-infancia'}
                  className="hover:text-amber-400 transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  <span>{isEs ? 'Protección a la Infancia (LOPIVI)' : 'Protecció a la Infància (LOPIVI)'}</span>
                </Link>
              </li>
              <li>
                <Link
                  href={isEs ? '/es/alianzas-y-recursos' : '/aliances-i-recursos'}
                  className="hover:text-sky-400 transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                  <span>{isEs ? 'Alianzas y recursos' : 'Aliances i recursos'}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Sede & Contacto */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-base tracking-wide">
              {isEs ? 'Sede y Contacto' : 'Seu i Contacte'}
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-1" />
                <span>
                  <strong className="text-white">Provincia de Tarragona</strong><br />
                  {isEs ? 'Camp de Tarragona y Terres de l’Ebre' : 'Camp de Tarragona i Terres de l’Ebre'}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="mailto:info@asociacioneducafe.org" className="hover:text-sky-300 transition-colors">
                  info@asociacioneducafe.org
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <ShieldAlert className="w-4 h-4 text-teal-400 shrink-0" />
                <a href="mailto:info@asociacioneducafe.org?subject=Canal%20confidencial%20de%20protección" className="hover:text-teal-300 transition-colors text-xs">
                  {isEs ? 'Canal confidencial de protección' : 'Canal confidencial de protecció'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Enlace discreto a la Xarxa Educativa / Campus */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-base tracking-wide">
              {isEs ? 'Entorno Formativo' : 'Entorn Formatiu'}
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              {isEs
                ? 'Plataforma de recursos pedagógicos e información educativa.'
                : 'Plataforma de recursos pedagògics i informació educativa.'}
            </p>
            <a
              href="https://red.asociacioneducafe.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold px-3.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-sky-300 hover:text-white transition-all shadow-sm group"
            >
              <span>Xarxa EducaFe</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

        </div>

        {/* Bottom Bar con Aviso de privacidad y Política de Cookies */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            © {new Date().getFullYear()} {isEs ? 'Asociación Cristiana EducaFe' : 'Associació Cristiana EducaFe'}.{' '}
            {isEs
              ? 'Entidad sin ánimo de lucro registrada en Cataluña.'
              : 'Entitat sense ànim de lucre registrada a Catalunya.'}
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <Link
              href={isEs ? '/es/politica-de-privacidad' : '/politica-de-privacidad'}
              className="hover:text-sky-300 transition-colors"
            >
              {isEs ? 'Aviso de Privacidad (RGPD)' : 'Avís de Privacitat (RGPD)'}
            </Link>
            <span>·</span>
            <Link
              href={isEs ? '/es/politica-de-cookies' : '/politica-de-cookies'}
              className="hover:text-sky-300 transition-colors font-medium text-sky-400"
            >
              {isEs ? 'Política de Cookies' : 'Política de Cookies'}
            </Link>
            <span>·</span>
            <Link
              href={isEs ? '/es/transparencia' : '/transparencia'}
              className="hover:text-sky-300 transition-colors"
            >
              {isEs ? 'Transparencia' : 'Transparència'}
            </Link>
            <span>·</span>
            <Link
              href={isEs ? '/es/proteccion-infancia' : '/proteccio-infancia'}
              className="hover:text-sky-300 transition-colors"
            >
              {isEs ? 'Protocolo LOPIVI' : 'Protocol LOPIVI'}
            </Link>
            <span>·</span>
            <Link
              href={isEs ? '/es/donar' : '/donar'}
              className="hover:text-rose-400 transition-colors text-rose-300 font-medium"
            >
              {isEs ? 'Donación' : 'Donació'}
            </Link>
            <span>·</span>
            <Link
              href={isEs ? '/es/alianzas-y-recursos' : '/aliances-i-recursos'}
              className="hover:text-sky-300 transition-colors"
            >
              {isEs ? 'Alianzas y recursos' : 'Aliances i recursos'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}