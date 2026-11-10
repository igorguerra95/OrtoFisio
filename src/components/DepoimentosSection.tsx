import React from 'react';
import { motion } from 'motion/react';
import { Star, ShieldCheck, Quote, CheckCircle2 } from 'lucide-react';
import { DEPOIMENTOS_RECUPERACAO } from '../data/clinicaData';

export const DepoimentosSection: React.FC = () => {
  return (
    <section id="depoimentos" className="py-24 sm:py-32 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Elementos de profundidade e iluminação de fundo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-radial-dark pointer-events-none opacity-80" />
      <div className="absolute -bottom-40 left-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Seção de Depoimentos */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
            <span>Evidências Clínicas & Histórias Reais</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white mb-6">
            Casos de recuperação que transformaram vidas e devolveram a mobilidade.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Conheça relatos de pacientes que enfrentavam quadros álgicos graves, hérnias de disco e pós-operatórios complexos antes de ingressar no protocolo OrtoFísio.
          </p>
        </div>

        {/* Grid de Depoimentos em 2 Colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {DEPOIMENTOS_RECUPERACAO.map((dep, idx) => (
            <motion.div
              key={dep.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-slate-800/80 backdrop-blur-md rounded-2xl p-7 sm:p-8 border border-slate-700/80 flex flex-col justify-between hover:border-sky-500/50 hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-300 relative group"
            >
              {/* Ícone de Aspas Sutis */}
              <div className="absolute top-6 right-6 text-slate-700 group-hover:text-sky-500/30 transition-colors">
                <Quote className="w-10 h-10" />
              </div>

              <div>
                {/* Estrelas de Avaliação & Diagnóstico Clínico */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(dep.avaliacao)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                  <span className="text-xs text-slate-400 ml-2 font-medium">Avaliação Máxima</span>
                </div>

                {/* Badge do Diagnóstico Tratado */}
                <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-sky-950/70 border border-sky-800/60 text-sky-300 text-xs font-medium">
                  <span>Diagnóstico:</span>
                  <strong className="text-white font-semibold">{dep.diagnostico}</strong>
                </div>

                {/* Relato do Paciente */}
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-6 italic">
                  "{dep.depoimento}"
                </p>
              </div>

              {/* Resultado Chave Conquistado & Identificação do Paciente */}
              <div className="pt-6 border-t border-slate-700/80">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-4 bg-emerald-950/40 border border-emerald-900/50 px-3 py-2 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                  <span>{dep.resultadoChave}</span>
                </div>

                <div className="flex items-center gap-3">
                  <img
                    src={dep.avatarUrl}
                    alt={dep.paciente}
                    className="w-12 h-12 rounded-full object-cover border-2 border-sky-400/40"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="font-display font-bold text-sm text-white">
                      {dep.paciente}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {dep.idadeProfissao}
                    </p>
                    <p className="text-[11px] text-sky-400 font-medium">
                      Tempo de tratamento: {dep.tempoRecuperacao}
                    </p>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Garantia Ética no Rodapé da Seção */}
        <div className="mt-12 text-center text-xs text-slate-400">
          <p>
            * Relatos reais autorizados pelos pacientes em conformidade com o código de ética profissional COFFITO. Os resultados podem variar conforme as particularidades fisiológicas de cada caso.
          </p>
        </div>

      </div>
    </section>
  );
};
