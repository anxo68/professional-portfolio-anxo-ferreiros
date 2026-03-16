import { useTranslations } from 'next-intl';
import { Target, Scale, CheckCircle2, TrendingDown, ShieldAlert } from 'lucide-react';

export default function ConsultingServices() {
  const t = useTranslations('Consulting');

  const services = [
    {
      id: 's1',
      title: t('s1Title'),
      desc: t('s1Desc'),
      icon: <Target className="w-8 h-8 text-blue-100" />
    },
    {
      id: 's2',
      title: t('s2Title'),
      desc: t('s2Desc'),
      icon: <Scale className="w-8 h-8 text-blue-100" />
    },
    {
      id: 's3',
      title: t('s3Title'),
      desc: t('s3Desc'),
      icon: <CheckCircle2 className="w-8 h-8 text-blue-100" />
    },
    {
      id: 's4',
      title: t('s4Title'),
      desc: t('s4Desc'),
      icon: <TrendingDown className="w-8 h-8 text-blue-100" />
    },
    {
      id: 's5',
      title: t('s5Title'),
      desc: t('s5Desc'),
      icon: <ShieldAlert className="w-8 h-8 text-blue-100" />
    }
  ];

  return (
    <section id="consulting" className="py-24 bg-slate-900 border-y border-slate-800 text-white relative overflow-hidden">
        {/* Subtle decorative background gradient */}
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-emerald-600/10 blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white tracking-tight">
            {t('title')}
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {services.map((srv) => (
            <div 
              key={srv.id} 
              className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 hover:bg-slate-800/80 transition-all group"
            >
              <div className="w-16 h-16 rounded-xl bg-blue-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {srv.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 leading-snug">{srv.title}</h3>
              <p className="text-slate-400 leading-relaxed">{srv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
