import { useTranslations } from 'next-intl';
import { Briefcase, Activity, ShieldCheck, Zap, Users, MessageSquare } from 'lucide-react';

export default function Skills() {
  const t = useTranslations('Skills');

  const skillsList = [
    {
      id: 'epc',
      title: t('epc'),
      desc: t('epcDesc'),
      icon: <Briefcase className="w-6 h-6 text-emerald-600" />
    },
    {
      id: 'pmo',
      title: t('pmo'),
      desc: t('pmoDesc'),
      icon: <Activity className="w-6 h-6 text-blue-600" />
    },
    {
      id: 'risk',
      title: t('risk'),
      desc: t('riskDesc'),
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />
    },
    {
      id: 'energy',
      title: t('energy'),
      desc: t('energyDesc'),
      icon: <Zap className="w-6 h-6 text-blue-600" />
    },
    {
      id: 'operations',
      title: t('operations'),
      desc: t('operationsDesc'),
      icon: <Users className="w-6 h-6 text-emerald-600" />
    },
    {
      id: 'stakeholders',
      title: t('stakeholders'),
      desc: t('stakeholdersDesc'),
      icon: <MessageSquare className="w-6 h-6 text-blue-600" />
    }
  ];

  return (
    <section id="leadership" className="py-24 bg-slate-50 dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-16 relative">
          {t('title')}
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-emerald-600 rounded-full"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsList.map((skill) => (
            <div 
              key={skill.id} 
              className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md hover:border-emerald-200 dark:hover:border-emerald-500/50 transition-all group overflow-hidden relative"
            >
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 dark:bg-slate-700/50 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110 opacity-50 z-0"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center mb-6 group-hover:bg-emerald-50 dark:group-hover:bg-emerald-900/30 transition-colors">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{skill.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{skill.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
