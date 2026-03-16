import { useTranslations } from 'next-intl';

export default function Experience() {
  const t = useTranslations('Experience');

  const experiences = [
    { id: '1', key: 'exp1' },
    { id: '2', key: 'exp2' },
    { id: '3', key: 'exp3' }
  ];

  return (
    <section id="experience" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative background lines */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 L100,100 M100,0 L0,100" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-4xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 relative inline-block text-white">
          {t('title')}
          <span className="absolute -bottom-2 left-0 w-12 h-1 bg-emerald-500 rounded-full"></span>
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => {
            const date = t(`${exp.key}.date`);
            const role = t(`${exp.key}.role`);
            const description = t(`${exp.key}.description`);

            return (
              <div key={exp.id} className="relative pl-8 md:pl-0">
                {/* Timeline vertical line (mobile) */}
                <div className="md:hidden absolute top-0 left-0 w-px h-full bg-slate-800 -ml-1"></div>
                {/* Timeline dot (mobile) */}
                <div className="md:hidden absolute top-2 left-0 w-3 h-3 rounded-full bg-emerald-500 -ml-[7px]"></div>

                <div className="md:grid md:grid-cols-5 gap-8 items-start">
                  
                  {/* Date Column */}
                  <div className="md:col-span-1 md:text-right pt-1 mb-4 md:mb-0">
                    <span className="text-emerald-400 font-mono text-sm tracking-wider uppercase font-bold bg-emerald-900/30 px-3 py-1 rounded inline-block">
                      {date}
                    </span>
                  </div>
                  
                  {/* Content Column */}
                  <div className="md:col-span-4 relative">
                    {/* Timeline vertical line (desktop) */}
                    {index !== experiences.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-[-2rem] ml-[3px] w-px h-[calc(100%+3rem)] bg-slate-800"></div>
                    )}
                    {/* Timeline dot (desktop) */}
                    <div className="hidden md:block absolute top-2 left-[-2rem] w-3 h-3 rounded-full bg-emerald-500 z-10"></div>
                    
                    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 md:p-8 rounded-2xl hover:bg-slate-800 transition-colors">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{role}</h3>
                      <p className="text-slate-300 leading-relaxed text-lg">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
