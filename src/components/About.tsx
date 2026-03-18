import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('About');

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <div className="flex flex-col md:flex-row md:items-start gap-12">
          
          <div className="md:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 relative inline-block">
              {t('title')}
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-emerald-600 rounded-full"></span>
            </h2>
          </div>
          
          <div className="md:w-2/3 space-y-6 text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
            <p className="font-medium text-slate-800 dark:text-slate-200">
              {t('paragraph1')}
            </p>
            <p>
              {t('paragraph2')}
            </p>

            <div className="mt-8 p-6 bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-wider text-sm">{t('quickProfile.title')}</h3>
              <ul className="space-y-3 text-base">
                <li className="flex items-start"><span className="font-semibold text-emerald-700 dark:text-emerald-400 w-32">{t('quickProfile.roleLabel')}:</span> <span className="flex-1">{t('quickProfile.roleValue')}</span></li>
                <li className="flex items-start"><span className="font-semibold text-emerald-700 dark:text-emerald-400 w-32">{t('quickProfile.sectorsLabel')}:</span> <span className="flex-1">{t('quickProfile.sectorsValue')}</span></li>
                <li className="flex items-start"><span className="font-semibold text-emerald-700 dark:text-emerald-400 w-32">{t('quickProfile.expLabel')}:</span> <span className="flex-1">{t('quickProfile.expValue')}</span></li>
                <li className="flex items-start"><span className="font-semibold text-emerald-700 dark:text-emerald-400 w-32">{t('quickProfile.regionsLabel')}:</span> <span className="flex-1">{t('quickProfile.regionsValue')}</span></li>
                <li className="flex items-start"><span className="font-semibold text-emerald-700 dark:text-emerald-400 w-32">{t('quickProfile.availLabel')}:</span> <span className="flex-1">{t('quickProfile.availValue')}</span></li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
