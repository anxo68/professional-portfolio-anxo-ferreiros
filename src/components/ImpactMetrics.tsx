import { useTranslations } from 'next-intl';

export default function ImpactMetrics() {
  const t = useTranslations('Impact');

  const metrics = [
    { value: t('exp'), label: t('expLabel') },
    { value: t('power'), label: t('powerLabel') },
    { value: t('budget'), label: t('budgetLabel') },
    { value: t('team'), label: t('teamLabel') }
  ];

  return (
    <section className="py-12 bg-blue-900 border-y border-blue-950">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-blue-800 text-center">
          {metrics.map((metric, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-4">
              <span className="text-4xl md:text-5xl font-extrabold text-white mb-2 drop-shadow-md">
                {metric.value}
              </span>
              <span className="text-sm md:text-base font-semibold text-emerald-400 uppercase tracking-widest">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
