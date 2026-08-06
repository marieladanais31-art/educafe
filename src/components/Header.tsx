'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ArrowRight, HeartHandshake, ShieldCheck, MapPin } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-sm transition-all">
      
      {/* Top Bar for Contact & Institutional Credibility */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-4 sm:px-6 lg:px-8 border-b border-slate-800 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-sky-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
              <span>NIF: G19357789 · Reg. nº 75881</span>
            </span>
            <span className="text-slate-300 font-medium flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              <span>Mont-Roig del Camp, Tarragona</span>
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a href="mailto:info@asociacioneducafe.org" className="hover:text-white transition-colors font-bold text-sky-300">
              info@asociacioneducafe.org
            </a>
            <span className="text-amber-400 font-semibold flex items-center gap-1">
              <span>★ Partner Metodológico:</span>
              <span className="text-slate-200 font-normal">Chanak International Academy</span>
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Branding - Larger EducaFe Logo */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative h-14 w-auto flex items-center">
              <Image
                src="/images/logo-educafe-official.png"
                alt="Asociación EducaFe Logo"
                width={240}
                height={65}
                className="h-12 sm:h-14 w-auto object-contain group-hover:scale-105 transition-transform"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            <Link href="/" className="text-sm font-semibold text-slate-700 hover:text-sky-600 transition-colors">
              Inicio
            </Link>
            <Link href="/quienes-somos" className="text-sm font-semibold text-slate-700 hover:text-sky-600 transition-colors">
              Quiénes Somos
            </Link>
            <Link href="/#mision" className="text-sm font-semibold text-slate-700 hover:text-sky-600 transition-colors">
              Impacto Social
            </Link>
            <Link href="/#programas" className="text-sm font-semibold text-slate-700 hover:text-sky-600 transition-colors">
              Programas
            </Link>
            <Link href="/#comunidad" className="text-sm font-semibold text-slate-700 hover:text-sky-600 transition-colors">
              Espacio Comunitario
            </Link>
            <Link href="/unete" className="text-sm font-semibold text-slate-700 hover:text-sky-600 transition-colors">
              Alianzas
            </Link>
          </nav>

          {/* Chanak Logo Badge + CTA Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200">
              <Image
                src="/images/logo-chanak-official.jpg"
                alt="Chanak Logo"
                width={36}
                height={36}
                className="h-8 w-8 object-contain rounded-md"
              />
              <div className="flex flex-col text-left">
                <span className="text-[9px] font-bold text-amber-700 uppercase tracking-wider">Partner</span>
                <span className="text-xs font-semibold text-slate-800">Chanak Academy</span>
              </div>
            </div>

            <Link
              href="/unete"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-700 hover:to-teal-700 text-white text-xs font-bold px-5 py-3 rounded-xl shadow-md hover:shadow-sky-500/20 transition-all group"
            >
              <span>Colaborar</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-semibold text-slate-800 hover:bg-slate-50"
          >
            Inicio
          </Link>
          <Link
            href="/quienes-somos"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-semibold text-slate-800 hover:bg-slate-50"
          >
            Quiénes Somos
          </Link>
          <Link
            href="/#mision"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-semibold text-slate-800 hover:bg-slate-50"
          >
            Impacto Social
          </Link>
          <Link
            href="/#programas"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-semibold text-slate-800 hover:bg-slate-50"
          >
            Programas
          </Link>
          <Link
            href="/#comunidad"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-semibold text-slate-800 hover:bg-slate-50"
          >
            Espacio Comunitario
          </Link>
          <Link
            href="/unete"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-semibold text-slate-800 hover:bg-slate-50"
          >
            Alianzas y Voluntariado
          </Link>
          <div className="pt-2">
            <Link
              href="/unete"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex justify-center items-center gap-2 bg-sky-600 text-white font-bold px-4 py-3 rounded-xl text-center shadow-md"
            >
              <HeartHandshake className="w-5 h-5" />
              <span>Colabora con Nosotros</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
