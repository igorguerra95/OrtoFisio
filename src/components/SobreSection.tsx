import React from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  Award, 
  Stethoscope, 
  CheckCircle, 
  HeartHandshake, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { METODOLOGIA_FASES } from '../data/clinicaData';

interface SobreSectionProps {
  onAgendarClick: () => void;
}

export const SobreSection: React.FC<SobreSectionProps> = ({ onAgendarClick }) => {
  return (
    <section id="sobre" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      
      {/* Detalhes de iluminação e grid */}
      <div className="absolute inset-0 bg-grid-medical opacity-40 pointer-events-none" />
      <div className="absolute -top-32 right-10 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Bloco 1: História, Rigor Acadêmico & Filosofia 1:1 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-28">
          
          {/* Coluna Visual: Imagens de consultório de excelência e certificações */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden border-2 border-slate-100 shadow-xl bg-slate-50">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80"
                  alt="Instalações clínicas e atendimento da Clínica OrtoFísio"
                  className="w-full h-[480px] object-cover"
                  loading="lazy"
                />
              </div>

              {/* Card sobreposto de credencial acadêmica */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="absolute -bottom-6 -right-4 sm:-right-8 bg-slate-900 text-white rounded-2xl p-5 shadow-2xl max-w-[270px] border border-slate-700"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0 border border-sky-400/30">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">
                      Formação de Elite
                    </span>
                    <span className="text-[11px] text-slate-300">
                      Pós-Graduação & Mestrado
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Profissionais certificados pelo Instituto Souchard e escolas internacionais de Pilates Clínico.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Coluna Textual: Filosofia de Atendimento e Compromisso */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-50 border border-sky-200/90 text-sky-700 text-xs font-semibold uppercase tracking-wider mb-4">
              <Award className="w-3.5 h-3.5 text-sky-600" />
              <span>Sobre a Clínica OrtoFísio</span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 mb-6">
              Mais de uma década redefinindo o padrão da fisioterapia clínica.
            </h2>

            <div className="space-y-4 text-slate-600 text-base leading-relaxed mb-8">
              <p>
                A <strong>Clínica OrtoFísio</strong> foi fundada com um princípio inegociável: <em>a saúde da sua coluna e das suas articulações não pode ser tratada de forma genérica</em>. Recusamos o modelo tradicional de clínicas superlotadas, onde um profissional atende múltiplos pacientes simultaneamente.
              </p>
              <p>
                Aqui, cada paciente conta com <strong>atenção exclusiva 1:1</strong> durante 100% da sessão. Nossos fisioterapeutas possuem sólida formação acadêmica — com pós-graduações e mestrados nas áreas de Fisioterapia Traumato-Ortopédica, Reeducação Postural Global (RPG), Biomecânica da Coluna e Pilates Clínico Avançado.
              </p>
              <p>
                Investimos continuamente em recursos de diagnóstico funcional e equipamentos de padrão internacional para entregar resolutividade rápida, evitando cirurgias desnecessárias e devolvendo a sua liberdade de viver sem dor.
              </p>
            </div>

            {/* Destaques de Credenciais */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-slate-100 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Stethoscope className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Rigor Ético CREFITO</h4>
                  <p className="text-xs text-slate-500">Prática clínica pautada estritamente pelas diretrizes do Conselho de Fisioterapia.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Atendimento 100% Humano</h4>
                  <p className="text-xs text-slate-500">Escuta atenta do seu histórico, conforto térmico e privacidade absoluta em consultório.</p>
                </div>
              </div>
            </div>

            <button
              onClick={onAgendarClick}
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <span>Entrar em contato</span>
              <ArrowRight className="w-4 h-4 text-sky-400" />
            </button>
          </div>

        </div>

        {/* Bloco 2: Metodologia Proprietária OrtoFísio em 4 Fases Lineares */}
        <div id="metodologia" className="pt-16 border-t border-slate-200">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-100 text-sky-800 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Protocolo Clínico Exclusivo</span>
            </div>
            
            <h3 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-slate-900 mb-4">
              O Método OrtoFísio em 4 Fases de Recuperação
            </h3>
            
            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Um caminho estruturado, progressivo e cientificamente validado para transformar a dor aguda em estabilidade articular e longevidade física.
            </p>
          </div>

          {/* Cards das 4 Fases */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {METODOLOGIA_FASES.map((fase, idx) => (
              <motion.div
                key={fase.numero}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200 flex flex-col justify-between hover:bg-white hover:shadow-lg hover:shadow-sky-500/10 hover:border-sky-300 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display font-bold text-3xl text-sky-600">
                      {fase.numero}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider bg-white px-2.5 py-1 rounded-md border border-slate-200 text-slate-700">
                      {fase.fase}
                    </span>
                  </div>

                  <h4 className="font-display font-bold text-lg text-slate-900 mb-2 leading-snug">
                    {fase.titulo}
                  </h4>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {fase.descricao}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80 space-y-2">
                  {fase.itens.map((item, iIdx) => (
                    <div key={iIdx} className="flex items-start gap-2 text-[11px] text-slate-700">
                      <CheckCircle className="w-3.5 h-3.5 text-sky-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
