import React, { useState, useEffect } from 'react';
import { Shield, PhoneCall, Menu, X, Calendar, ChevronRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Especialidades', href: '#especialidades' },
    { label: 'Sobre a Clínica', href: '#sobre' },
    { label: 'Metodologia', href: '#metodologia' },
    { label: 'Casos Clínicos', href: '#depoimentos' },
    { label: 'Contato & Agendamento', href: '#contato' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-sky-100/80 py-3.5' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Autoral */}
          <a 
            href="#inicio" 
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-sky-700 flex items-center justify-center text-white shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform duration-200">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M2 12h20" />
                <circle cx="12" cy="12" r="3" fill="currentColor" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl tracking-tight text-slate-900 flex items-center gap-1.5">
                Orto<span className="text-sky-600">Físio</span>
              </span>
              <span className="text-[10px] font-medium uppercase tracking-widest text-slate-500">
                Fisioterapia & Pilates
              </span>
            </div>
          </a>

          {/* Navegação Desktop */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="hover:text-sky-600 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-sky-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Principal & Registro Clínico */}
          <div className="hidden sm:flex items-center gap-4">
            <div className="hidden xl:flex items-center gap-1.5 text-xs text-slate-500 bg-sky-50/80 border border-sky-100 px-3 py-1.5 rounded-full">
              <Shield className="w-3.5 h-3.5 text-sky-600" />
              <span>Registro CREFITO Certificado</span>
            </div>

            <button
              onClick={() => handleNavClick('#contato')}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-sm shadow-sky-500/20 hover:shadow-md hover:shadow-sky-500/30 active:scale-[0.98] transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Entrar em contato</span>
            </button>
          </div>

          {/* Botão Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Drawer Mobile */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-white/98 backdrop-blur-xl border-b border-slate-200 shadow-xl px-6 py-6 transition-all animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-700 bg-sky-50 px-3 py-1.5 rounded-lg w-fit">
              <Shield className="w-4 h-4 text-sky-600" />
              <span>Atendimento Clínico Especializado</span>
            </div>

            <nav className="flex flex-col divide-y divide-slate-100">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="py-3 text-base font-medium text-slate-700 hover:text-sky-600 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </nav>

            <div className="pt-2">
              <button
                onClick={() => handleNavClick('#contato')}
                className="w-full flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3.5 px-4 rounded-xl shadow-md shadow-sky-500/25 active:scale-[0.98] transition-all text-sm cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Entrar em contato</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
