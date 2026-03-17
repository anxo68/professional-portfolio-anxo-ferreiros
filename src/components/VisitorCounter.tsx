'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

export default function VisitorCounter() {
  const [visits, setVisits] = useState<number | null>(null);
  const t = useTranslations('Footer');

  useEffect(() => {
    // Basic local storage visitor counter simulation
    const INITIAL_COUNT = 911;
    const STORAGE_KEY = 'axf_portfolio_visits';
    
    // Get current stored views or use initial
    const storedVisitsStr = localStorage.getItem(STORAGE_KEY);
    let currentVisits = storedVisitsStr ? parseInt(storedVisitsStr, 10) : INITIAL_COUNT;
    
    // We increment it on component mount (page visit)
    currentVisits += 1;
    
    // Update storage and state
    localStorage.setItem(STORAGE_KEY, currentVisits.toString());
    setVisits(currentVisits);
  }, []);

  // Don't render anything until mounted to avoid hydration mismatch
  if (visits === null) return <div className="h-5 mt-3 mb-4"></div>;

  return (
    <div className="flex items-center justify-center space-x-2 text-slate-500 text-xs mt-3 mb-4 font-mono">
      <div className="flex space-x-1">
        {visits.toString().padStart(5, '0').split('').map((digit, i) => (
          <span 
            key={i} 
            className="bg-slate-800 text-emerald-400 px-1.5 py-1 rounded shadow-inner border border-slate-700"
          >
            {digit}
          </span>
        ))}
      </div>
      <span className="uppercase tracking-wider font-semibold opacity-80">{t('visits')}</span>
    </div>
  );
}
