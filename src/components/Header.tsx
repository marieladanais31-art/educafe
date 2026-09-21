'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ShieldCheck, MapPin, HeartHandshake, Heart } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isEs = pathname?.startsWith('/es');

  // Navigation items including Voluntariado & Donar
  const navItems = isEs
    ? [
        { label: 'Inicio', href: '/es' },
        { label: 'Quiénes Somos', href: '/es/quienes-somos' },
        { label: 'Proyecto Brúixola', href: '/es/proyecto-bruixola' },
        { label: 'Voluntariado', href: '/es/voluntariado' },
        { label: 'Donar / Colabora', href: '/es/donar' },
        { label: 'Protección a la Infancia', href: '/es/proteccion-infancia' },
      ]
    : [
        { label: 'Inici', href: '/' },
        { label: 'Qui Som', href: '/qui-som' },
        { label: 'Projecte Brúixola', href: '/bruixola' },
        { label: 'Voluntariat', href: '/voluntariat' },
        { label: 'Donar / Col·labora', href: '/donar' },
        { label: 'Protecció a la Infància', href: '/proteccio-infancia' },
      ];

  const memberText = isEs ? 'Hazte socio' : 'Fes-te soci';
  const memberHref = isEs ? '/es/hazte-socio' : '/fes-te-soci';
  const donateText = isEs ? 'Donar' : 'Donar';
  const donateHref = isEs ? '/es/donar' : '/donar';

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-sm transition-all">
      
      {/* Top Bar for Institutional Credibility */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-4 sm:px-6 lg:px-8 border-b border-slate-800 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-sky-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
              <span>NIF: G19357789 · Registre Generalitat nº 75881</span>
            </span>
            <span className="text-slate-300 font-medium flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              <span>Àmbit d&apos;actuació: Camp de Tarragona i Terres de l&apos;Ebre</span>
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="mailto:info@asociacioneducafe.org"
              className="hover:text-white transition-colors text-slate-300 hover:underline"
            >
              info@asociacioneducafe.org
            </a>
            <span className="text-slate-600">|</span>
            <span className="text-teal-400 font-medium text-xs">
              {isEs ? 'Programas sociales de acceso gratuito' : 'Programes socials d’accés gratuït'}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href={isEs ? '/es' : '/'} className="flex items-center gap-3 group">
            <div className="relative h-14 w-auto flex items-center">
              <Image
                src="/images/logo-educafe-official.png"
                alt="Associació Cristiana EducaFe Logo"
                width={220}
                height={60}
                className="h-11 sm:h-13 w-auto object-contain group-hover:scale-102 transition-transform"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-semibold transition-colors ${
                    isActive
                      ? 'text-sky-600 font-bold border-b-2 border-sky-600 pb-0.5'
                      : 'text-slate-700 hover:text-sky-600'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons & Language Switcher */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />

            <Link
              href={donateHref}
              className="inline-flex items-center gap-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 text-xs font-bold px-3.5 py-2.5 rounded-xl transition-all"
            >
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
              <span>{donateText}</span>
            </Link>

            <Link
              href={memberHref}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-700 hover:to-teal-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-sm hover:shadow transition-all group"
            >
              <HeartHandshake className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>{memberText}</span>
            </Link>
          </div>

          {/* Mobile Menu Button & Lang Switcher */}
          <div className="flex items-center gap-2 xl:hidden">
            <LanguageSwitcher />
            <Link
              href={donateHref}
              className="inline-flex items-center gap-1 bg-rose-50 text-rose-700 border border-rose-200 text-xs font-bold px-2.5 py-1.5 rounded-lg"
            >
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
              <span>{donateText}</span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-xl">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2.5 rounded-xl text-base font-semibold transition-colors ${
                pathname === item.href
                  ? 'bg-sky-50 text-sky-700 font-bold'
                  : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-3 grid grid-cols-2 gap-2">
            <Link
              href={donateHref}
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex justify-center items-center gap-1.5 bg-rose-50 text-rose-700 border border-rose-300 font-bold px-3 py-2.5 rounded-xl text-sm text-center"
            >
              <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
              <span>{donateText}</span>
            </Link>
            <Link
              href={memberHref}
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex justify-center items-center gap-1.5 bg-gradient-to-r from-sky-600 to-teal-600 text-white font-bold px-3 py-2.5 rounded-xl text-sm text-center shadow"
            >
              <HeartHandshake className="w-4 h-4" />
              <span>{memberText}</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
