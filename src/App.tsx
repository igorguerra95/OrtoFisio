import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EspecialidadesSection } from './components/EspecialidadesSection';
import { SobreSection } from './components/SobreSection';
import { DepoimentosSection } from './components/DepoimentosSection';
import { ContatoAgendamento } from './components/ContatoAgendamento';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ModalDetalhesEspecialidade } from './components/ModalDetalhesEspecialidade';
import { Especialidade } from './types';

export default function App() {
  const [especialidadeSelecionada, setEspecialidadeSelecionada] = useState<string>('Avaliação Biomecânica Geral');
  const [modalEspecialidade, setModalEspecialidade] = useState<Especialidade | null>(null);

  const handleSelectEspecialidadeParaAgendamento = (titulo: string) => {
    setEspecialidadeSelecionada(titulo);
    const contatoElement = document.querySelector('#contato');
    if (contatoElement) {
      contatoElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAgendarGeral = () => {
    const contatoElement = document.querySelector('#contato');
    if (contatoElement) {
      contatoElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-sky-500/20 selection:text-sky-900 relative">
      
      {/* Barra de Navegação Institucional */}
      <Navbar />

      {/* 1. Início (Hero Section) */}
      <main id="conteudo-principal">
        <Hero />

        {/* 2. Especialidades (RPG, Pilates Clínico, Ortopedia, Coluna, Esporte) */}
        <EspecialidadesSection
          onSelectEspecialidadeParaAgendamento={handleSelectEspecialidadeParaAgendamento}
          onOpenDetalhesModal={(esp) => setModalEspecialidade(esp)}
        />

        {/* 3. Sobre a Clínica & Metodologia em 4 Fases */}
        <SobreSection onAgendarClick={handleAgendarGeral} />

        {/* Depoimentos de Recuperação & Evidências Clínicas */}
        <DepoimentosSection />

        {/* 4. Contato & Agendamento Online com Triagem Interativa e FAQ */}
        <ContatoAgendamento especialidadePreSelecionada={especialidadeSelecionada} />
      </main>

      {/* Rodapé Institucional */}
      <Footer />

      {/* Botão de WhatsApp Flutuante com Micro-Interações */}
      <FloatingWhatsApp />

      {/* Modal de Detalhes Clínicos da Especialidade */}
      <ModalDetalhesEspecialidade
        especialidade={modalEspecialidade}
        onClose={() => setModalEspecialidade(null)}
        onAgendar={handleSelectEspecialidadeParaAgendamento}
      />

    </div>
  );
}
