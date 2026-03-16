import { useTranslations } from 'next-intl';
import { ArrowRight, Download, ChevronDown } from 'lucide-react';

export default function Hero() {
  const t = useTranslations('Hero');

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-slate-50">
      {/* Background Decorators */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-emerald-100/50 mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 left-0 -ml-32 mt-32 w-96 h-96 rounded-full bg-blue-100/50 mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-1/2 min-w-96 min-h-96 w-[500px] h-[500px] -ml-[250px] rounded-full bg-slate-200/50 mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 grid md:grid-cols-1 gap-12 text-center max-w-5xl">
        <div className="flex flex-col items-center justify-center space-y-8">
          
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold tracking-wide uppercase border border-emerald-100/50 shadow-sm">
            {t('pretitle')}
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {t('title').split(' ').map((word, i) => (
              word.toLowerCase().includes('transición') || word.toLowerCase().includes('transition') || word.toLowerCase().includes('energy') || word.toLowerCase().includes('enerxética') ? 
                <span key={i} className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600"> {word} </span> : ` ${word}`
            ))}
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 font-medium max-w-3xl leading-relaxed">
            {t('subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8 w-full">
            <a 
              href="#portfolio" 
              className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-medium transition-all flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>{t('ctaExplore')}</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 rounded-lg font-medium transition-all flex items-center justify-center space-x-2 shadow-sm hover:shadow-md"
            >
              <span>{t('ctaContact')}</span>
            </a>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center text-slate-400 opacity-60">
        <span className="text-xs uppercase tracking-widest mb-2 font-medium">Scroll</span>
        <ChevronDown className="w-5 h-5" />
      </div>
    </section>
  );
}
