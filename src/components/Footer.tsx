import React from 'react';
import { Shield, ArrowUp, Calendar, Heart, Award } from 'lucide-react';
import { ESPECIALIDADES } from '../data/clinicaData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Linha Superior: Logo, Resumo e Acesso Rápido */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-850">
          
          {/* Coluna 1: Marca e Identidade (4 colunas) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-sky-700 flex items-center justify-center text-white shadow-md shadow-sky-500/20">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M2 12h20" />
                  <circle cx="12" cy="12" r="3" fill="currentColor" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl tracking-tight text-white">
                  Orto<span className="text-sky-400">Físio</span>
                </span>
                <span className="text-[10px] font-medium uppercase tracking-widest text-slate-400">
                  Fisioterapia & Pilates
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
              Centro clínico de excelência em fisioterapia neuro-ortopédica, reeducação postural e Pilates Clínico. Cuidado individualizado 1:1 baseado em evidências científicas.
            </p>

            <div className="inline-flex items-center gap-2 text-xs text-sky-400 bg-sky-950/60 border border-sky-800/60 px-3 py-1.5 rounded-lg">
              <Shield className="w-3.5 h-3.5" />
              <span>Responsabilidade Técnica CREFITO/COFFITO</span>
            </div>
          </div>

          {/* Coluna 2: Especialidades (4 colunas) */}
          <div className="lg:col-span-4">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white mb-4">
              Especialidades Clínicas
            </h4>
            <ul className="space-y-2 text-xs">
              {ESPECIALIDADES.map((esp) => (
                <li key={esp.id}>
                  <button
                    onClick={() => handleNavClick('#especialidades')}
                    className="hover:text-sky-400 transition-colors text-left"
                  >
                    {esp.titulo}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Navegação Rápida & Atendimento (4 colunas) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white mb-4">
                Navegação Rápida
              </h4>
              <ul className="space-y-2 text-xs mb-6">
                <li>
                  <button onClick={() => handleNavClick('#inicio')} className="hover:text-sky-400 transition-colors">
                    Início
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavClick('#especialidades')} className="hover:text-sky-400 transition-colors">
                    Especialidades e Procedimentos
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavClick('#sobre')} className="hover:text-sky-400 transition-colors">
                    Sobre a Clínica e Corpo Clínico
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavClick('#metodologia')} className="hover:text-sky-400 transition-colors">
                    Método OrtoFísio em 4 Fases
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavClick('#depoimentos')} className="hover:text-sky-400 transition-colors">
                    Casos de Recuperação
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavClick('#contato')} className="hover:text-sky-400 transition-colors">
                    Agendamento e Triagem Online
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <button
                onClick={() => handleNavClick('#contato')}
                className="w-full inline-flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold py-3 px-4 rounded-xl transition-all cursor-pointer shadow-md shadow-sky-600/20"
              >
                <Calendar className="w-4 h-4" />
                <span>Entrar em contato</span>
              </button>
            </div>
          </div>

        </div>

        {/* Linha Inferior: Direitos Autorais e Aviso Ético */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} Clínica OrtoFísio - Fisioterapia e Pilates. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-[11px] text-slate-400">
              Conformidade com a Resolução COFFITO nº 424/2013 e LGPD.
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-850 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Voltar ao topo da página"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
