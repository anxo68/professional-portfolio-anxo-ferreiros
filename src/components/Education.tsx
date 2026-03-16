import { useTranslations } from 'next-intl';
import { GraduationCap, Award, Cpu } from 'lucide-react';

export default function Education() {
  const t = useTranslations('Education');

  const eduItems = [
    {
      id: 'eng',
      title: t('eng.title'),
      desc: t('eng.desc'),
      icon: <GraduationCap className="w-6 h-6 text-blue-600" />
    },
    {
      id: 'management',
      title: t('management.title'),
      desc: t('management.desc'),
      icon: <Award className="w-6 h-6 text-emerald-600" />
    },
    {
      id: 'energy',
      title: t('energy.title'),
      desc: t('energy.desc'),
      icon: <Cpu className="w-6 h-6 text-purple-600" />
    }
  ];

  return (
    <section className="py-24 bg-white border-b border-slate-100">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16 relative">
          {t('title')}
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-blue-600 rounded-full"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {eduItems.map((item) => (
            <div 
              key={item.id} 
              className="group bg-slate-50 p-8 rounded-2xl hover:bg-white border border-transparent hover:border-slate-200 transition-all hover:shadow-lg flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-6 border border-slate-100 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed max-w-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
