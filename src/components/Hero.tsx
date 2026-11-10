import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Activity, ArrowRight, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { METRICAS_CLINICA } from '../data/clinicaData';

// Componente de Contador Numérico Animado
const AnimatedCounter: React.FC<{ target: number; suffix: string }> = ({ target, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1800; // ms
    const stepTime = 25;
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {count.toLocaleString('pt-BR')}{suffix}
    </span>
  );
};

export const Hero: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-[92vh] pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-radial-hero">
      {/* Grade sutil de fundo estilo precisão médica */}
      <div className="absolute inset-0 bg-grid-medical pointer-events-none opacity-60" />
      
      {/* Gradientes e luzes suaves de atmosfera */}
      <div className="absolute -top-40 right-0 w-[550px] h-[550px] bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-40 w-[450px] h-[450px] bg-sky-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Layout Grid Assimétrico de 12 Colunas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Coluna de Texto (7 colunas) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Pill Badge Superior com Pulso */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 border border-sky-200/90 shadow-sm shadow-sky-500/5 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                Fisioterapia Traumato-Ortopédica & Pilates Clínico
              </span>
            </motion.div>

            {/* Headline Monumental com clamp 48-96px e tracking negativo */}
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08, ease: 'easeOut' }}
              className="font-display font-bold text-[clamp(2.75rem,5.5vw,5.5rem)] leading-[1.02] tracking-[-0.04em] text-slate-900 mb-6 text-balance"
            >
              O movimento <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-sky-500 to-sky-700">sem dor</span> é a sua verdadeira biomecânica.
            </motion.h1>

            {/* Subheadline Formal, Clara e Magnética */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16, ease: 'easeOut' }}
              className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mb-8 text-pretty"
            >
              Reabilitação neuro-ortopédica de alta precisão e Pilates com foco regenerativo. Diagnóstico biomecânico minucioso para descomprimir sua coluna, restaurar articulações e devolver sua liberdade com sessões 100% individualizadas.
            </motion.p>

            {/* CTAs de Alta Conversão */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10"
            >
              <button
                onClick={() => handleScrollTo('#contato')}
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 hover:from-sky-600 hover:to-sky-800 text-white font-semibold text-base px-8 py-4 rounded-xl shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/35 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <span>Entrar em contato</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => handleScrollTo('#especialidades')}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 font-medium text-base px-7 py-4 rounded-xl border border-slate-200 shadow-sm hover:border-sky-300 hover:shadow transition-all duration-200 cursor-pointer"
              >
                <span>Conhecer Especialidades</span>
              </button>
            </motion.div>

            {/* Pilares de Segurança Clínica Rápidos */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.32 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full pt-4 border-t border-slate-200/80 text-xs text-slate-600 font-medium"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Avaliação Biomecânica 1:1</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Equipamentos Clínicos Certificados</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Especialistas Pós-Graduados</span>
              </div>
            </motion.div>
          </div>

          {/* Coluna Visual e Composição (5 colunas) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Moldura da Imagem Principal */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/10 border-2 border-white/80 bg-white">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80"
                  alt="Avaliação e reabilitação na Clínica OrtoFísio"
                  className="w-full h-[460px] sm:h-[520px] object-cover object-center transform hover:scale-102 transition-transform duration-700"
                  loading="eager"
                />

                {/* Gradiente de overlay sutil para legibilidade técnica */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent pointer-events-none" />

                {/* Legenda institucional inferior na foto */}
                <div className="absolute bottom-5 left-5 right-5 text-white pointer-events-none">
                  <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-sky-300 mb-1">
                    <Activity className="w-4 h-4" />
                    <span>Ambiente Clínico Especializado</span>
                  </div>
                  <p className="text-sm font-medium text-slate-100">
                    Tecnologia regenerativa e estúdio completo de Pilates Clínico com Reformer, Cadillac e Barrel.
                  </p>
                </div>
              </div>

              {/* Card Flutuante 1: Índice de Alívio (Superior Direito) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -top-6 -right-4 sm:-right-6 glass-panel rounded-2xl p-4 shadow-xl border border-white/90 max-w-[210px] hidden sm:block animate-subtle-float"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-display font-bold text-xl text-slate-900 block leading-tight">
                      98%
                    </span>
                    <span className="text-[11px] font-medium text-slate-500 leading-tight block">
                      Alívio do quadro álgico nas 4 semanas iniciais
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Card Flutuante 2: Selo Ético CREFITO (Inferior Esquerdo) */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-6 -left-4 sm:-left-6 glass-panel rounded-2xl p-4 shadow-xl border border-white/90 max-w-[230px] hidden sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-800 block">
                      Conduta Científica
                    </span>
                    <span className="text-[11px] text-slate-500 block leading-tight">
                      Fisioterapia baseada em evidências clínicas
                    </span>
                  </div>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>

        {/* Barra de Métricas / Estatísticas Clínicas em Números Grandes */}
        <div className="mt-16 sm:mt-24 pt-10 border-t border-slate-200/90">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {METRICAS_CLINICA.map((metrica, idx) => (
              <motion.div
                key={metrica.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="relative flex flex-col"
              >
                <div className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 mb-1.5 flex items-baseline text-sky-600">
                  <AnimatedCounter target={metrica.valor} suffix={metrica.sufixo} />
                </div>
                <h2 className="text-sm sm:text-base font-semibold text-slate-800 tracking-tight mb-1">
                  {metrica.label}
                </h2>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  {metrica.descricao}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
