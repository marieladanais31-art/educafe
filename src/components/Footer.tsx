'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Mail, MapPin, ShieldCheck, ExternalLink, ShieldAlert } from 'lucide-react';

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
            
            <p className="text-sm text-slate-300 leading-relaxed">
              <strong className="text-white font-semibold">
                {isEs ? 'Asociación Cristiana EducaFe' : 'Associació Cristiana EducaFe'}
              </strong>
              <br />
              {isEs
                ? 'Entidad sin ánimo de lucro dedicada a la acción socioeducativa, el acompañamiento integral a la juventud y familias en situación de vulnerabilidad.'
                : 'Entitat sense ànim de lucre dedicada a l’acció socioeducativa, l’acompanyament integral a la joventut i famílies en situació de vulnerabilitat.'}
            </p>

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
          </div>

          {/* Col 2: Áreas de Actuación */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-base tracking-wide">
              {isEs ? 'Programas y Participación' : 'Programes i Participació'}
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link
                  href={isEs ? '/es/hazte-socio' : '/fes-te-soci'}
                  className="hover:text-sky-400 transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                  <span>{isEs ? 'Hazte socio o colaborador' : 'Fes-te soci o col·laborador'}</span>
                </Link>
              </li>
              <li>
                <Link
                  href={isEs ? '/es/proyecto-bruixola' : '/bruixola'}
                  className="hover:text-sky-400 transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                  <span>{isEs ? 'Proyecto Brúixola (12-18 años)' : 'Projecte Brúixola (12-18 anys)'}</span>
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
              <span>{isEs ? 'Acceso a la Red Educativa / Campus' : 'Accés a la Xarxa Educativa / Campus'}</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
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
              {isEs ? 'Aviso Legal y Privacidad (RGPD)' : 'Avís Legal i Privacitat (RGPD)'}
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
              href={isEs ? '/es/voluntariado' : '/voluntariat'}
              className="hover:text-sky-300 transition-colors"
            >
              {isEs ? 'Voluntariado' : 'Voluntariat'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
