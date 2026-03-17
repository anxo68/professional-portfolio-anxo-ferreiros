'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { X, MessageSquare, ChevronDown, Download, ExternalLink } from 'lucide-react';
import Link from 'next/link';

// Custom Wind Turbine SVG icon (only blades spin!)
const WindTurbineIcon = ({ className = '' }: { className?: string }) => (
  <div className={`relative w-14 h-14 flex flex-col items-center justify-center ${className}`}>
    {/* Rotor (Spins smoothly over 4 seconds) */}
    <div className="absolute top-[-2px] z-10 animate-spin" style={{ animationDuration: '4s', animationTimingFunction: 'linear' }}>
      <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="1.5" fill="#10b981" />
        <path d="M12 10.5C11.5 7 11.2 3 12 1C12.8 3 12.5 7 12 10.5Z" fill="#10b981" />
        <path d="M12 10.5C11.5 7 11.2 3 12 1C12.8 3 12.5 7 12 10.5Z" fill="#10b981" transform="rotate(120 12 12)" />
        <path d="M12 10.5C11.5 7 11.2 3 12 1C12.8 3 12.5 7 12 10.5Z" fill="#10b981" transform="rotate(240 12 12)" />
      </svg>
    </div>
    {/* Tower (Static base) */}
    <div className="w-[5px] h-[40px] bg-slate-400 rounded-t-full z-0 mt-[24px]"></div>
  </div>
);

export default function AeroBot() {
  const t = useTranslations('AeroBot');
  const tNav = useTranslations('Nav');
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'bot'|'user', content: string|React.ReactNode}[]>([
    { role: 'bot', content: t('greeting') }
  ]);

  const faqs = [
    { key: 'q1', text: t('q1'), answer: t('a1') },
    { key: 'q2', text: t('q2'), answer: t('a2'), isDownload: true },
    { key: 'q3', text: t('q3'), answer: t('a3') },
    { key: 'q4', text: t('q4'), answer: t('a4'), isContact: true }
  ];

  const handleQuestionClick = (q: typeof faqs[0]) => {
    // Add user question
    setMessages(prev => [...prev, { role: 'user', content: q.text }]);
    
    // Add bot response with optional action buttons
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'bot', 
        content: (
          <div className="space-y-3">
            <p>{q.answer}</p>
            {q.isDownload && (
              <a 
                href="/api/generate-summary" 
                target="_blank" 
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-2 rounded-lg transition-colors mt-2"
              >
                <Download className="w-3 h-3" />
                {t('downloadPdf')}
              </a>
            )}
            {q.isContact && (
              <Link 
                href="#contact" 
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs px-3 py-2 rounded-lg transition-colors mt-2"
              >
                <ExternalLink className="w-3 h-3" />
                {t('contactBtn')}
              </Link>
            )}
          </div>
        )
      }]);
    }, 600); // Small delay to simulate "thinking"
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Expanded Chat Window */}
      <div 
        className={`bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden transition-all duration-300 origin-bottom-right flex flex-col mb-4 ${
          isOpen ? 'opacity-100 scale-100 w-[340px] md:w-[380px] h-[500px]' : 'opacity-0 scale-0 w-0 h-0 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white p-4 flex items-center justify-between shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm shadow-inner relative overflow-hidden">
                <WindTurbineIcon className="scale-75 translate-y-[2px]" />
            </div>
            <div>
              <h3 className="font-bold leading-tight">AeroBot</h3>
              <p className="text-xs text-blue-200 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse block"></span>
                Online
              </p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Close chat"
          >
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>

        {/* Messages Auto-Scroll Area */}
        <div className="flex-1 overflow-y-auto p-4 bg-slate-50 space-y-4">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`max-w-[85%] rounded-2xl p-3 text-sm shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-sm' 
                    : 'bg-white border border-slate-100 text-slate-700 rounded-tl-sm'
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
        </div>

        {/* Interaction Area (FAQs) */}
        <div className="p-4 bg-white border-t border-slate-100">
          <p className="text-xs font-semibold text-slate-400 mb-3 uppercase tracking-wider">{tNav('about')} / FAQ</p>
          <div className="flex flex-wrap gap-2">
            {faqs.map(q => (
              <button
                key={q.key}
                onClick={() => handleQuestionClick(q)}
                className="text-left text-xs bg-slate-50 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 border border-slate-200 hover:border-emerald-200 px-3 py-2 rounded-xl transition-all shadow-sm active:scale-95"
              >
                {q.text}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-24 h-24 bg-white text-emerald-600 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100 flex items-center justify-center hover:scale-105 transition-all hover:shadow-[0_8px_30px_rgba(16,185,129,0.2)] active:scale-95 relative group"
        aria-label="Open chat"
      >
        <span className="absolute top-0 right-0 flex h-6 w-6">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-6 w-6 bg-emerald-500 border-2 border-white"></span>
        </span>
        
        {isOpen ? (
            <X className="w-10 h-10 text-slate-600" />
        ) : (
            <div className="relative flex items-center justify-center w-full h-full">
                <MessageSquare className="w-10 h-10 text-blue-500 absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-50 group-hover:scale-100" />
                <div className="group-hover:opacity-0 transition-opacity duration-300">
                    <WindTurbineIcon />
                </div>
            </div>
        )}
      </button>

    </div>
  );
}
