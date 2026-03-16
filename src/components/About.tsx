import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('About');

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <div className="flex flex-col md:flex-row md:items-start gap-12">
          
          <div className="md:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 relative inline-block">
              {t('title')}
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-emerald-600 rounded-full"></span>
            </h2>
          </div>
          
          <div className="md:w-2/3 space-y-6 text-slate-600 text-lg leading-relaxed">
            <p className="font-medium text-slate-800">
              {t('paragraph1')}
            </p>
            <p>
              {t('paragraph2')}
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
