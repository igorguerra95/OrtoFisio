import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  HelpCircle, 
  ChevronDown, 
  MessageSquare, 
  User, 
  Phone, 
  Mail, 
  Activity, 
  Clock,
  Sparkles
} from 'lucide-react';
import { REGIOES_DOR, PERIODOS_PREFERENCIA, PERGUNTAS_FREQUENTES, ESPECIALIDADES } from '../data/clinicaData';
import { AgendamentoDados } from '../types';

interface ContatoAgendamentoProps {
  especialidadePreSelecionada?: string;
}

export const ContatoAgendamento: React.FC<ContatoAgendamentoProps> = ({
  especialidadePreSelecionada
}) => {
  const [formData, setFormData] = useState<AgendamentoDados>({
    nome: '',
    telefone: '',
    email: '',
    especialidade: especialidadePreSelecionada || 'Avaliação Biomecânica Geral',
    regiaoDor: 'lombar',
    periodoPreferencia: 'manha',
    descricaoSintomas: '',
    comoNosConheceu: 'Indicação'
  });

  const [formEnviado, setFormEnviado] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const [faqAberto, setFaqAberto] = useState<number | null>(0);

  useEffect(() => {
    if (especialidadePreSelecionada) {
      setFormData((prev) => ({
        ...prev,
        especialidade: especialidadePreSelecionada
      }));
    }
  }, [especialidadePreSelecionada]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectRegiao = (id: string) => {
    setFormData((prev) => ({ ...prev, regiaoDor: id }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCarregando(true);

    // Simulação de processamento ágil de triagem clínica
    setTimeout(() => {
      setCarregando(false);
      setFormEnviado(true);
    }, 800);
  };

  const gerarLinkWhatsApp = () => {
    const regiaoNome = REGIOES_DOR.find((r) => r.id === formData.regiaoDor)?.nome || formData.regiaoDor;
    const periodoLabel = PERIODOS_PREFERENCIA.find((p) => p.id === formData.periodoPreferencia)?.label || formData.periodoPreferencia;

    const mensagem = `Olá, equipe da Clínica OrtoFísio! Gostaria de agendar uma consulta de avaliação.\n\n*Nome:* ${formData.nome}\n*Telefone:* ${formData.telefone}\n*E-mail:* ${formData.email}\n*Especialidade:* ${formData.especialidade}\n*Região/Queixa:* ${regiaoNome}\n*Período preferido:* ${periodoLabel}\n*Sintomas:* ${formData.descricaoSintomas || 'Avaliação clínica inicial'}`;

    return `https://wa.me/5511999990000?text=${encodeURIComponent(mensagem)}`;
  };

  return (
    <section id="contato" className="py-24 sm:py-32 bg-slate-50 relative border-t border-slate-200">
      
      {/* Luz ambiente de fundo */}
      <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-sky-200/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Seção de Contato */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100/90 border border-sky-200 text-sky-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <Calendar className="w-3.5 h-3.5 text-sky-600" />
            <span>Agendamento & Triagem Clínica</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 mb-6">
            Dê o primeiro passo para o seu corpo sem dor.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Preencha os dados abaixo com sua principal queixa. Nossa equipe clínica retornará para confirmar o melhor horário e tirar suas dúvidas.
          </p>
        </div>

        {/* Card Principal de Agendamento */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Lado Esquerdo: Benefícios da Avaliação 1:1 e Orientações (4 colunas) */}
            <div className="lg:col-span-4 bg-slate-900 p-8 sm:p-10 text-white flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400 bg-sky-950/80 border border-sky-800/80 px-3 py-1.5 rounded-lg mb-6">
                  <Activity className="w-4 h-4" />
                  <span>Protocolo de Consulta</span>
                </div>

                <h3 className="font-display font-bold text-2xl text-white mb-4">
                  O que acontece na sua 1ª sessão:
                </h3>

                <ul className="space-y-4 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-sky-500/20 text-sky-400 font-bold flex items-center justify-center shrink-0 text-xs border border-sky-500/30">
                      1
                    </span>
                    <span><strong>Anamnese Completa:</strong> Estudo minucioso do seu histórico clínico e exames de imagem prévios.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-sky-500/20 text-sky-400 font-bold flex items-center justify-center shrink-0 text-xs border border-sky-500/30">
                      2
                    </span>
                    <span><strong>Testes Biomecânicos:</strong> Mapeamento cinético, amplitude de movimento e testes ortopédicos específicos.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-sky-500/20 text-sky-400 font-bold flex items-center justify-center shrink-0 text-xs border border-sky-500/30">
                      3
                    </span>
                    <span><strong>Conduta de Alívio Imediato:</strong> Aplicação das primeiras intervenções manuais descompressivas.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-sky-500/20 text-sky-400 font-bold flex items-center justify-center shrink-0 text-xs border border-sky-500/30">
                      4
                    </span>
                    <span><strong>Plano Terapêutico Claro:</strong> Estimativa realista de sessões necessárias para o seu objetivo.</span>
                  </li>
                </ul>
              </div>

              {/* Box de Confidencialidade */}
              <div className="mt-8 pt-6 border-t border-slate-800 text-xs text-slate-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Sigilo médico absoluto e privacidade assegurada pela LGPD e COFFITO.</span>
              </div>
            </div>

            {/* Lado Direito: Formulário Interativo de Triagem (8 colunas) */}
            <div className="lg:col-span-8 p-8 sm:p-12">
              <AnimatePresence mode="wait">
                {formEnviado ? (
                  <motion.div
                    key="sucesso"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-8 text-center flex flex-col items-center max-w-lg mx-auto"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6 shadow-inner">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>

                    <h4 className="font-display font-bold text-2xl text-slate-900 mb-2">
                      Solicitação Recebida com Sucesso!
                    </h4>

                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      Agradecemos pelo contato, <strong>{formData.nome}</strong>. Seus dados clínicos preliminares foram registrados com segurança pela equipe da Clínica OrtoFísio.
                    </p>

                    <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-5 text-left mb-6 text-xs text-slate-700 space-y-2">
                      <div className="flex justify-between border-b border-slate-200/80 pb-2">
                        <span className="text-slate-500">Especialidade selecionada:</span>
                        <span className="font-semibold">{formData.especialidade}</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-200/80 pb-2">
                        <span className="text-slate-500">Região anatômica da dor:</span>
                        <span className="font-semibold">
                          {REGIOES_DOR.find((r) => r.id === formData.regiaoDor)?.nome}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Preferência de horário:</span>
                        <span className="font-semibold">
                          {PERIODOS_PREFERENCIA.find((p) => p.id === formData.periodoPreferencia)?.label}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 w-full">
                      <a
                        href={gerarLinkWhatsApp()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm py-3.5 px-6 rounded-xl shadow-md transition-all"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Confirmar no WhatsApp Agora</span>
                      </a>

                      <button
                        onClick={() => {
                          setFormEnviado(false);
                          setFormData({
                            nome: '',
                            telefone: '',
                            email: '',
                            especialidade: 'Avaliação Biomecânica Geral',
                            regiaoDor: 'lombar',
                            periodoPreferencia: 'manha',
                            descricaoSintomas: '',
                            comoNosConheceu: 'Indicação'
                          });
                        }}
                        className="inline-flex items-center justify-center bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium py-3.5 px-6 rounded-xl transition-all cursor-pointer"
                      >
                        Nova Solicitação
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form key="form" onSubmit={handleSubmit} className="space-y-8">
                    
                    {/* Seletor de Região Corporal da Dor */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-3">
                        1. Qual a região principal do corpo com desconforto ou dor?
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        {REGIOES_DOR.map((reg) => (
                          <button
                            type="button"
                            key={reg.id}
                            onClick={() => handleSelectRegiao(reg.id)}
                            className={`p-3 text-left rounded-xl text-xs transition-all border cursor-pointer ${
                              formData.regiaoDor === reg.id
                                ? 'bg-sky-50/80 border-sky-500 text-sky-900 font-semibold shadow-sm ring-1 ring-sky-500'
                                : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                            }`}
                          >
                            <span className="block truncate font-medium">{reg.nome}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Dados Pessoais do Paciente */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-3">
                        2. Seus dados para contato e reserva
                      </label>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Nome */}
                        <div>
                          <div className="relative">
                            <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                            <input
                              type="text"
                              name="nome"
                              required
                              value={formData.nome}
                              onChange={handleChange}
                              placeholder="Nome completo do paciente"
                              className="w-full pl-10 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all text-slate-800 placeholder:text-slate-400"
                            />
                          </div>
                        </div>

                        {/* WhatsApp / Telefone */}
                        <div>
                          <div className="relative">
                            <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                            <input
                              type="tel"
                              name="telefone"
                              required
                              value={formData.telefone}
                              onChange={handleChange}
                              placeholder="WhatsApp (com DDD)"
                              className="w-full pl-10 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all text-slate-800 placeholder:text-slate-400"
                            />
                          </div>
                        </div>

                        {/* E-mail */}
                        <div>
                          <div className="relative">
                            <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                            <input
                              type="email"
                              name="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="Seu melhor e-mail"
                              className="w-full pl-10 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all text-slate-800 placeholder:text-slate-400"
                            />
                          </div>
                        </div>

                        {/* Especialidade de Interesse */}
                        <div>
                          <div className="relative">
                            <select
                              name="especialidade"
                              value={formData.especialidade}
                              onChange={handleChange}
                              className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all text-slate-800"
                            >
                              <option value="Avaliação Biomecânica Geral">Avaliação Biomecânica Geral</option>
                              {ESPECIALIDADES.map((esp) => (
                                <option key={esp.id} value={esp.titulo}>
                                  {esp.titulo}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Período de Preferência e Detalhes da Queixa */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="sm:col-span-1">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                          Período preferido
                        </label>
                        <div className="space-y-2">
                          {PERIODOS_PREFERENCIA.map((p) => (
                            <label
                              key={p.id}
                              className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs cursor-pointer transition-all ${
                                formData.periodoPreferencia === p.id
                                  ? 'bg-sky-50/80 border-sky-500 text-sky-900 font-semibold'
                                  : 'bg-slate-50 border-slate-200 text-slate-600'
                              }`}
                            >
                              <input
                                type="radio"
                                name="periodoPreferencia"
                                value={p.id}
                                checked={formData.periodoPreferencia === p.id}
                                onChange={handleChange}
                                className="text-sky-600 focus:ring-sky-500"
                              />
                              <Clock className="w-3.5 h-3.5 text-slate-400" />
                              <span>{p.label}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                          Descreva brevemente como a dor afeta seu dia a dia (opcional)
                        </label>
                        <textarea
                          name="descricaoSintomas"
                          rows={4}
                          value={formData.descricaoSintomas}
                          onChange={handleChange}
                          placeholder="Ex.: Sinto dor ao ficar muito tempo sentado, travamento ao levantar pela manhã, queimação na coluna lombar..."
                          className="w-full p-3.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all text-slate-800 placeholder:text-slate-400 resize-none"
                        />
                      </div>
                    </div>

                    {/* Botão de Envio de Alta Conversão */}
                    <div>
                      <button
                        type="submit"
                        disabled={carregando}
                        className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 hover:from-sky-600 hover:to-sky-800 text-white font-semibold text-base py-4 px-8 rounded-xl shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/35 active:scale-[0.99] transition-all cursor-pointer disabled:opacity-75"
                      >
                        {carregando ? (
                          <div className="flex items-center gap-2">
                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Processando triagem preliminar...</span>
                          </div>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            <span>Entrar em contato</span>
                          </>
                        )}
                      </button>
                      <p className="text-center text-xs text-slate-400 mt-3">
                        Respondemos rapidamente no WhatsApp informado em horário de atendimento.
                      </p>
                    </div>

                  </form>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>

        {/* Seção Integrada de Perguntas Frequentes (FAQ Clínico) */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-700 bg-sky-50 border border-sky-200 px-3 py-1 rounded-full mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-sky-600" />
              <span>Dúvidas Frequentes</span>
            </div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
              Esclarecimentos sobre o atendimento e tratamento
            </h3>
          </div>

          <div className="space-y-4">
            {PERGUNTAS_FREQUENTES.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setFaqAberto(faqAberto === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-display font-bold text-base sm:text-lg text-slate-900 hover:text-sky-600 transition-colors cursor-pointer"
                >
                  <span>{faq.pergunta}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      faqAberto === idx ? 'rotate-180 text-sky-600' : ''
                    }`}
                  />
                </button>

                {faqAberto === idx && (
                  <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                    <p>{faq.resposta}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
