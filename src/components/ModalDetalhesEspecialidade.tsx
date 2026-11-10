import React from 'react';
import { X, CheckCircle2, Clock, ShieldCheck, ArrowRight, Activity } from 'lucide-react';
import { Especialidade } from '../types';

interface ModalDetalhesEspecialidadeProps {
  especialidade: Especialidade | null;
  onClose: () => void;
  onAgendar: (titulo: string) => void;
}

export const ModalDetalhesEspecialidade: React.FC<ModalDetalhesEspecialidadeProps> = ({
  especialidade,
  onClose,
  onAgendar
}) => {
  if (!especialidade) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Container do Modal */}
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200 flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Imagem de Capa e Header */}
        <div className="relative h-56 w-full shrink-0 overflow-hidden bg-slate-900">
          <img
            src={especialidade.imagemUrl}
            alt={especialidade.titulo}
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

          {/* Botão de Fechar */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/70 backdrop-blur-md text-white hover:bg-slate-900 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Título sobre a Imagem */}
          <div className="absolute bottom-5 left-6 right-6 text-white">
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-300 bg-sky-950/80 px-2.5 py-1 rounded-md mb-2 inline-block border border-sky-800/60">
              {especialidade.tag}
            </span>
            <h3 className="font-display font-bold text-2xl text-white">
              {especialidade.titulo}
            </h3>
          </div>
        </div>

        {/* Corpo com Informações Clínicas */}
        <div className="p-6 sm:p-8 space-y-6 flex-1">
          
          {/* Subtítulo & Descrição Detalhada */}
          <div>
            <h4 className="font-semibold text-sky-800 text-sm mb-2">
              {especialidade.subtitulo}
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              {especialidade.descricao}
            </p>
          </div>

          {/* Metadados: Duração e Foco */}
          <div className="flex items-center gap-4 p-3.5 bg-sky-50/70 rounded-xl border border-sky-100 text-xs text-sky-900 font-medium">
            <Clock className="w-4 h-4 text-sky-600" />
            <span><strong>Duração:</strong> {especialidade.duracaoSessao}</span>
          </div>

          {/* Grid: Benefícios Comprovados + Indicações */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            
            {/* Benefícios */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-3 flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-sky-600" />
                <span>Benefícios Fisioterapêuticos</span>
              </span>
              <ul className="space-y-2">
                {especialidade.beneficios.map((ben, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{ben}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Indicações Clínicas */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-3 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
                <span>Indicações Principais</span>
              </span>
              <ul className="space-y-2">
                {especialidade.indicacoes.map((ind, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0 mt-1.5" />
                    <span>{ind}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Ação de Agendamento */}
          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-end gap-3">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-3 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
            >
              Fechar
            </button>
            <button
              onClick={() => {
                onClose();
                onAgendar(especialidade.titulo);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white text-xs font-semibold px-6 py-3 rounded-xl shadow-md shadow-sky-500/20 active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>Entrar em contato</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
