import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [tooltipVisivel, setTooltipVisivel] = useState(true);

  const mensagemPadrao = encodeURIComponent(
    'Olá! Gostaria de informações para agendar uma avaliação com o fisioterapeuta na Clínica OrtoFísio.'
  );
  // Número comercial de WhatsApp clínico
  const linkWhatsApp = `https://wa.me/5511999990000?text=${mensagemPadrao}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end flex-col gap-2 pointer-events-none">
      
      {/* Tooltip de Recepção com Fechamento */}
      {tooltipVisivel && (
        <div className="pointer-events-auto bg-white rounded-2xl p-3.5 shadow-xl border border-slate-200/90 text-xs text-slate-700 max-w-[240px] flex items-start gap-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0 animate-ping" />
          <div className="flex-1">
            <span className="font-bold text-slate-900 block text-[11px] mb-0.5">
              Fisioterapia de Plantão
            </span>
            <p className="text-[11px] text-slate-500 leading-snug">
              Dúvidas sobre dores ou horários? Fale direto no WhatsApp.
            </p>
          </div>
          <button
            onClick={() => setTooltipVisivel(false)}
            className="text-slate-400 hover:text-slate-600 p-0.5 cursor-pointer"
            aria-label="Fechar mensagem"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Botão Flutuante com Pulso Discreto */}
      <div className="relative pointer-events-auto">
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-pulse-ring pointer-events-none" />
        
        <a
          href={linkWhatsApp}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-14 h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-lg shadow-emerald-600/30 hover:shadow-xl hover:shadow-emerald-600/40 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
          aria-label="Falar no WhatsApp com a Clínica OrtoFísio"
        >
          {/* Ícone SVG oficial de WhatsApp */}
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M12.031 2c-5.508 0-9.984 4.477-9.984 9.984 0 1.766.46 3.488 1.336 5.016L2 22l5.127-1.344a9.92 9.92 0 0 0 4.904 1.288h.004c5.508 0 9.984-4.477 9.984-9.984 0-2.666-1.039-5.172-2.926-7.059A9.928 9.928 0 0 0 12.031 2zm0 18.25c-1.504 0-2.984-.406-4.281-1.176l-.307-.183-3.18.834.848-3.1-.2-.318A8.204 8.204 0 0 1 3.797 11.984c0-4.54 3.695-8.234 8.234-8.234 2.199 0 4.266.857 5.82 2.414a8.208 8.208 0 0 1 2.414 5.82c0 4.54-3.695 8.234-8.234 8.234zm4.512-6.172c-.246-.125-1.465-.723-1.691-.805-.227-.082-.391-.125-.555.125-.164.246-.637.805-.781.969-.145.164-.289.184-.535.063-.246-.125-1.043-.383-1.984-1.223-.734-.656-1.23-1.465-1.375-1.711-.145-.246-.016-.379.109-.504.109-.109.246-.289.367-.434.125-.145.164-.246.246-.41.082-.164.041-.309-.02-.434-.063-.125-.555-1.34-0.762-1.836-.2-.48-.406-.414-.555-.422h-.473c-.164 0-.43.063-.656.309-.227.246-.863.844-.863 2.059 0 1.215.883 2.391 1.008 2.555.125.164 1.738 2.656 4.215 3.727.589.254 1.051.406 1.41.52.594.188 1.137.16 1.566.098.477-.07 1.465-.6 1.672-1.18.207-.582.207-1.082.145-1.18-.063-.098-.227-.164-.473-.289z" />
          </svg>
        </a>
      </div>

    </div>
  );
};
