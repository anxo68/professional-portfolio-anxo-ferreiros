import { useTranslations } from 'next-intl';
import { ArrowUpRight } from 'lucide-react';

export default function Portfolio() {
  const t = useTranslations('Portfolio');

  const projects = [
    { id: '1', key: 'project1' },
    { id: '2', key: 'project2' },
    { id: '3', key: 'project3' },
    { id: '4', key: 'project4' },
    { id: '5', key: 'project5' }
  ];

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 relative inline-block">
              {t('title')}
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-600 rounded-full"></span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj) => {
            const name = t(`${proj.key}.name`);
            const client = t(`${proj.key}.client`);
            const magnitude = t(`${proj.key}.magnitude`);
            const budget = t(`${proj.key}.budget`);
            const description = t(`${proj.key}.description`);

            return (
              <div 
                key={proj.id} 
                className="group relative bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-blue-200 transition-all shadow-sm hover:shadow-xl hover:-translate-y-1 overflow-hidden"
              >
                {/* Decorative subtle background */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500 opacity-50"></div>
                
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 pr-8">{name}</h3>
                  <p className="text-emerald-700 font-medium mb-6 flex items-center gap-2">
                    {t('client')} <span className="text-slate-700">{client}</span>
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-sm font-semibold text-slate-700">
                      {magnitude}
                    </span>
                    <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-sm font-semibold text-slate-700">
                      {budget}
                    </span>
                  </div>
                  
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {description}
                  </p>
                  
                  <div className="flex justify-end mt-auto pt-4 border-t border-slate-200/60">
                    <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white text-slate-600 transition-colors">
                      <ArrowUpRight className="w-5 h-5" />
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
