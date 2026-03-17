import { useTranslations } from 'next-intl';
import { ArrowUpRight } from 'lucide-react';
import ProjectMap from './ProjectMap';

export default function Portfolio() {
  const t = useTranslations('Portfolio');

  const projects = [
    { id: '1', key: 'project1' },
    { id: '2', key: 'project2' },
    { id: '6', key: 'project6' }, // Added Bosques Solares here specifically as third to keep it prominent
    { id: '3', key: 'project3' },
    { id: '4', key: 'project4' },
    { id: '5', key: 'project5' }
  ];

  return (
    <section id="portfolio" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 relative inline-block">
              {t('title')}
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-600 rounded-full"></span>
            </h2>
          </div>
        </div>

        <ProjectMap />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj) => {
            const name = t(`${proj.key}.name`);
            const client = t(`${proj.key}.client`);
            const magnitude = t(`${proj.key}.magnitude`);
            const budget = t(`${proj.key}.budget`);
            const description = t(`${proj.key}.description`);
            
            // Explicitly handling images array if it exists in the translation JSON
            // We need a fallback since not all might have it, and TS might complain if we aren't careful extracting arrays from next-intl
            let images: string[] = [];
            try {
                // We use raw to get the raw array instead of a translated string
                images = t.raw(`${proj.key}.images`) || [];
            } catch (e) {
                // If it fails (key doesn't exist), we just use empty array
                images = [];
            }

            return (
              <div 
                key={proj.id} 
                className="group relative bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-100 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-500/50 transition-all shadow-sm hover:shadow-xl hover:-translate-y-1 overflow-hidden"
              >
                {/* Decorative subtle background */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 dark:bg-slate-700/50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500 opacity-50"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2 pr-8">{name}</h3>
                  <p className="text-emerald-700 dark:text-emerald-400 font-medium mb-6 flex items-center gap-2">
                    {t('client')} <span className="text-slate-700 dark:text-slate-300">{client}</span>
                  </p>
                  
                  {/* Image Gallery Row if images exist */}
                  {images && images.length > 0 && (
                    <div className="flex gap-2 overflow-x-auto pb-4 mb-4 scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-600 scrollbar-track-transparent snap-x">
                        {images.map((img, idx) => (
                            <div key={idx} className="flex-none w-48 h-32 rounded-lg overflow-hidden snap-start relative border border-slate-200 dark:border-slate-700 bg-slate-200 dark:bg-slate-800">
                                <img 
                                    src={`/projects/${img}`} 
                                    alt={`${name} foto ${idx + 1}`}
                                    className="w-full h-full object-cover hover:scale-110 transition duration-500"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="px-3 py-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-full text-sm font-semibold text-slate-700 dark:text-slate-300">
                      {magnitude}
                    </span>
                    <span className="px-3 py-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-full text-sm font-semibold text-slate-700 dark:text-slate-300">
                      {budget}
                    </span>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {description}
                  </p>
                  
                  <div className="flex justify-end mt-auto pt-4 border-t border-slate-200/60 dark:border-slate-700/60">
                    <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white text-slate-600 dark:text-slate-300 transition-colors">
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
