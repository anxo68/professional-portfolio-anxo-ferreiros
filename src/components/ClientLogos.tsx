import { useTranslations } from 'next-intl';

export default function ClientLogos() {
  const t = useTranslations('Clients');

  const clients = [
    { name: 'Enel Green Power', customImg: '/enelgreen-logo.png?v=2', hideName: true },
    { name: 'BayWa r.e.', domain: 'baywa-re.com' },
    { name: 'ISAGEN', domain: 'isagen.com.co' },
    { name: 'Pan American Energy', domain: 'pan-energy.com' },
    { name: 'OHLA', domain: 'ohla-group.com' },
    { name: 'Grupo Cobra', domain: 'grupocobra.com' },
    { name: 'SENER', domain: 'group.sener' },
    { name: 'Gransolar', domain: 'gransolar.com' },
    { name: 'Negratin', domain: 'negratin.com' },
    { name: 'Prodiel', customImg: '/prodiel-logo.png?v=2', hideName: true },
  ];

  return (
    <section className="py-16 bg-white overflow-hidden border-b border-slate-100">
      <div className="container mx-auto px-6 md:px-12 pb-10 text-center">
        <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-widest">
          {t('title')}
        </h3>
      </div>
      
      {/* Endless Horizontal Scroll Effect */}
      <div className="relative w-full flex overflow-x-hidden group">
        <div className="absolute top-0 bottom-0 left-0 w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div className="flex animate-marquee group-hover:pause whitespace-nowrap items-center w-max">
            {[...clients, ...clients].map((client, idx) => (
                <div key={idx} className="flex-none flex items-center gap-4 px-8 md:px-16 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                    <img 
                      src={client.customImg 
                        ? client.customImg 
                        : `https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.${client.domain}&size=128`
                      }
                      alt={client.name} 
                      className="h-8 md:h-12 w-auto object-contain bg-white rounded-md p-1"
                    />
                    {!client.hideName && (
                        <span className="text-2xl md:text-3xl font-bold tracking-tight text-slate-800">
                            {client.name}
                        </span>
                    )}
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
