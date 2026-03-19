import { useTranslations } from 'next-intl';
import { Briefcase, Globe2, Building2, TrendingUp, Cpu } from 'lucide-react';

export default function KeyFacts() {
  const t = useTranslations('KeyFacts');

  const facts = [
    { icon: <TrendingUp className="w-5 h-5" />, text: t('experience') },
    { icon: <Briefcase className="w-5 h-5" />, text: t('role') },
    { icon: <Building2 className="w-5 h-5" />, text: t('sectors') },
    { icon: <Globe2 className="w-5 h-5" />, text: t('regions') },
    { icon: <Cpu className="w-5 h-5" />, text: t('scale') }
  ];

  return (
    <section className="py-8 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 relative z-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
          {facts.map((fact, index) => (
            <div 
              key={index} 
              className="flex items-center space-x-2 px-4 py-2 bg-slate-50 dark:bg-slate-800 rounded-full border border-slate-100 dark:border-slate-700 shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="text-emerald-600 dark:text-emerald-400">
                {fact.icon}
              </div>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                {fact.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
