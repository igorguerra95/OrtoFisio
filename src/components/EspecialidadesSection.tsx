import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Activity, 
  ShieldCheck, 
  Crosshair, 
  Compass, 
  Zap, 
  Sparkles, 
  ArrowUpRight, 
  Check, 
  Clock, 
  FileText 
} from 'lucide-react';
import { ESPECIALIDADES } from '../data/clinicaData';
import { Especialidade } from '../types';

interface EspecialidadesSectionProps {
  onSelectEspecialidadeParaAgendamento: (especialidadeTitulo: string) => void;
  onOpenDetalhesModal: (especialidade: Especialidade) => void;
}

export const EspecialidadesSection: React.FC<EspecialidadesSectionProps> = ({
  onSelectEspecialidadeParaAgendamento,
  onOpenDetalhesModal
}) => {
  const [filtroAtivo, setFiltroAtivo] = useState<string>('todas');

  const categorias = [
    { id: 'todas', label: 'Todas as Áreas' },
    { id: 'coluna', label: 'Coluna & Postura' },
    { id: 'pilates', label: 'Pilates Clínico' },
    { id: 'ortopedia', label: 'Ortopedia & Esporte' },
  ];

  const especialidadesFiltradas = ESPECIALIDADES.filter((esp) => {
    if (filtroAtivo === 'todas') return true;
    if (filtroAtivo === 'coluna') return esp.id.includes('rpg') || esp.id.includes('coluna');
    if (filtroAtivo === 'pilates') return esp.id.includes('pilates');
    if (filtroAtivo === 'ortopedia') return esp.id.includes('ortopedia') || esp.id.includes('esportiva') || esp.id.includes('miofascial');
    return true;
  });

  const renderIcone = (tipo: string) => {
    switch (tipo) {
      case 'Activity': return <Activity className="w-5 h-5" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      case 'Bone': return <Crosshair className="w-5 h-5" />;
      case 'Compass': return <Compass className="w-5 h-5" />;
      case 'Zap': return <Zap className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      default: return <Activity className="w-5 h-5" />;
    }
  };

  return (
    <section id="especialidades" className="py-24 sm:py-32 bg-slate-50/60 relative border-t border-slate-200/80">
      
      {/* Luz ambiente de fundo */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-sky-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Seção com Tipografia Técnica */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-100/80 border border-sky-200 text-sky-800 text-xs font-semibold uppercase tracking-wider mb-4">
              <Crosshair className="w-3.5 h-3.5" />
              <span>Abordagem Terapêutica de Alta Precisão</span>
            </div>
            
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 mb-4">
              Especialidades clínicas dedicadas à sua recuperação funcional.
            </h2>
            
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Cada plano de tratamento é individualizado a partir da biomecânica do seu corpo. Combinamos métodos consagrados mundialmente com equipamentos de grau médico.
            </p>
          </div>

          {/* Filtros em Chips */}
          <div className="flex flex-wrap items-center gap-2 self-start md:self-end">
            {categorias.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFiltroAtivo(cat.id)}
                className={`text-xs sm:text-sm font-medium px-4 py-2 rounded-xl transition-all cursor-pointer ${
                  filtroAtivo === cat.id
                    ? 'bg-sky-500 text-white shadow-sm shadow-sky-500/25 font-semibold'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Especialidades (3 colunas responsivas) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {especialidadesFiltradas.map((esp, idx) => (
            <motion.div
              key={esp.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: 'easeOut' }}
              className="group bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:shadow-sky-500/10 hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Imagem do Procedimento */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                <img
                  src={esp.imagemUrl}
                  alt={esp.titulo}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />
                
                {/* Chip de Categoria sobre a Imagem */}
                <div className="absolute top-4 left-4">
                  <span className="text-[11px] font-semibold uppercase tracking-wider bg-white/95 backdrop-blur-md text-sky-800 px-3 py-1 rounded-full shadow-sm">
                    {esp.tag}
                  </span>
                </div>

                {/* Ícone no topo direito */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-slate-900/60 backdrop-blur-md text-white flex items-center justify-center">
                  {renderIcone(esp.icone)}
                </div>

                {/* Duração da Sessão no rodapé da foto */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center gap-1.5 text-xs text-white font-medium">
                  <Clock className="w-3.5 h-3.5 text-sky-300" />
                  <span>{esp.duracaoSessao}</span>
                </div>
              </div>

              {/* Conteúdo do Card */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-xl text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">
                    {esp.titulo}
                  </h3>
                  
                  <p className="text-sm font-medium text-sky-700/90 mb-3">
                    {esp.subtitulo}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {esp.descricao}
                  </p>

                  {/* Benefícios Chave com Check */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-slate-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Resultados Comprovados
                    </span>
                    {esp.beneficios.slice(0, 3).map((ben, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{ben}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ações do Card */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onOpenDetalhesModal(esp)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-sky-600 transition-colors cursor-pointer py-1"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Ver protocolo</span>
                  </button>

                  <button
                    onClick={() => onSelectEspecialidadeParaAgendamento(esp.titulo)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-sky-600 hover:text-sky-700 group-hover:translate-x-0.5 transition-all cursor-pointer"
                  >
                    <span>Entrar em contato</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rodapé da Seção com Chamada Complementar */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white px-6 py-4 rounded-2xl border border-slate-200/90 shadow-sm max-w-2xl mx-auto">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <p className="text-xs sm:text-sm text-slate-600 text-left">
              <strong>Não sabe qual a modalidade recomendada para o seu quadro?</strong> Nossa avaliação inicial mapeia as causas primárias da dor para indicar a conduta ideal.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
