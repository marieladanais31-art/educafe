'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const isEs = pathname?.startsWith('/es');

  // Mapping between CA and ES routes
  const getEquivalentPath = (targetLang: 'ca' | 'es') => {
    if (!pathname) return targetLang === 'ca' ? '/' : '/es';
    if (targetLang === 'ca') {
      if (!isEs) return pathname;
      if (pathname === '/es' || pathname === '/es/') return '/';
      if (pathname.includes('/es/quienes-somos')) return '/qui-som';
      if (pathname.includes('/es/proyecto-bruixola')) return '/bruixola';
      if (pathname.includes('/es/transparencia')) return '/transparencia';
      if (pathname.includes('/es/proteccion-infancia')) return '/proteccio-infancia';
      if (pathname.includes('/es/politica-de-privacidad')) return '/politica-de-privacidad';
      return pathname.replace(/^\/es/, '') || '/';
    } else {
      if (isEs) return pathname;
      if (pathname === '/' || pathname === '') return '/es';
      if (pathname.includes('/qui-som')) return '/es/quienes-somos';
      if (pathname.includes('/bruixola')) return '/es/proyecto-bruixola';
      if (pathname.includes('/transparencia')) return '/es/transparencia';
      if (pathname.includes('/proteccio-infancia')) return '/es/proteccion-infancia';
      if (pathname.includes('/politica-de-privacidad')) return '/es/politica-de-privacidad';
      return `/es${pathname}`;
    }
  };

  return (
    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-slate-900/90 border border-slate-700/80 shadow-inner">
      <Globe className="w-3.5 h-3.5 text-sky-400" />
      <div className="flex items-center text-xs font-bold tracking-wider">
        <Link
          href={getEquivalentPath('ca')}
          className={`px-2 py-0.5 rounded-md transition-all ${
            !isEs
              ? 'bg-sky-500 text-white shadow-sm'
              : 'text-slate-400 hover:text-slate-200'
          }`}
          aria-label="Versió en Català"
        >
          CAT
        </Link>
        <span className="text-slate-600 px-0.5">|</span>
        <Link
          href={getEquivalentPath('es')}
          className={`px-2 py-0.5 rounded-md transition-all ${
            isEs
              ? 'bg-sky-500 text-white shadow-sm'
              : 'text-slate-400 hover:text-slate-200'
          }`}
          aria-label="Versión en Castellano"
        >
          ES
        </Link>
      </div>
    </div>
  );
}
