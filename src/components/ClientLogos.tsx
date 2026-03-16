import { useTranslations } from 'next-intl';

export default function ClientLogos() {
  const t = useTranslations('Clients');

  // We are simulating logos with branded typography/text styling to keep it clean and fast
  const clients = [
    { name: 'Enel Green Power', color: 'text-green-700', font: 'font-bold tracking-tight' },
    { name: 'BayWa r.e.', color: 'text-emerald-800', font: 'font-black tracking-tighter italic' },
    { name: 'ISAGEN', color: 'text-blue-700', font: 'font-extrabold tracking-widest uppercase' },
    { name: 'PAE', color: 'text-slate-800', font: 'font-black tracking-widest' },
    { name: 'OHL', color: 'text-sky-800', font: 'font-black tracking-tighter' },
    { name: 'COBRA', color: 'text-red-700', font: 'font-bold tracking-widest uppercase' },
    { name: 'SENER', color: 'text-blue-900', font: 'font-bold tracking-widest uppercase' },
    { name: 'GRS', color: 'text-emerald-600', font: 'font-black tracking-widest uppercase' },
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
        {/* Gradient Masks for smooth fade out at edges */}
        <div className="absolute top-0 bottom-0 left-0 w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div className="flex animate-marquee group-hover:pause whitespace-nowrap items-center min-w-full">
            {/* Map twice to create the infinite scroll illusion smoothly without gaps */}
            {[...clients, ...clients, ...clients].map((client, idx) => (
                <div key={idx} className="flex-none mx-8 md:mx-16 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                    <span className={`text-2xl md:text-3xl ${client.font} ${client.color}`}>
                        {client.name}
                    </span>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
