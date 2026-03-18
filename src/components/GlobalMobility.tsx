import { useTranslations } from 'next-intl';
import { Plane, Map, Earth, UsersRound } from 'lucide-react';

export default function GlobalMobility() {
  const t = useTranslations('GlobalMobility');

  const items = [
    { icon: <Earth className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />, title: t('availability'), desc: t('availabilityDesc') },
    { icon: <Map className="w-8 h-8 text-blue-600 dark:text-blue-400" />, title: t('experience'), desc: t('experienceDesc') },
    { icon: <Plane className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />, title: t('relocation'), desc: t('relocationDesc') },
    { icon: <UsersRound className="w-8 h-8 text-blue-600 dark:text-blue-400" />, title: t('multicultural'), desc: t('multiculturalDesc') }
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 relative inline-block">
            {t('title')}
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-emerald-600 rounded-full"></span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="flex items-start p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 mr-6">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
