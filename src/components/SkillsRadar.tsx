'use client';

import { useTranslations } from 'next-intl';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function SkillsRadar() {
  const t = useTranslations('Skills');
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const data = [
    { subject: t('epc'), score: 95, fullMark: 100 },
    { subject: t('pmo'), score: 90, fullMark: 100 },
    { subject: t('risk'), score: 85, fullMark: 100 },
    { subject: t('energy'), score: 98, fullMark: 100 },
    { subject: t('operations'), score: 92, fullMark: 100 },
    { subject: t('stakeholders'), score: 88, fullMark: 100 },
  ];

  const isDark = mounted && resolvedTheme === 'dark';

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100 dark:bg-slate-900 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-2 relative inline-block left-1/2 -translate-x-1/2">
          {t('title')}
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-emerald-600 rounded-full"></span>
        </h2>
        <p className="text-center text-slate-500 dark:text-slate-400 mt-6 mb-12 max-w-2xl mx-auto">
          Representación analítica de mis competencias principales en la dirección de proyectos de ingeniería.
        </p>
        
        <div className="w-full max-w-4xl mx-auto h-[450px] md:h-[550px] bg-white dark:bg-slate-800/50 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700/50 p-6 transition-colors duration-300">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
              <PolarGrid stroke={isDark ? "#334155" : "#cbd5e1"} />
              <PolarAngleAxis 
                dataKey="subject" 
                tick={{ fill: isDark ? '#cbd5e1' : '#475569', fontSize: 13, fontWeight: 600 }} 
              />
              <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
              <Tooltip 
                formatter={(value: any) => [`${value}%`, 'Nivel de Experiencia']}
                contentStyle={{ 
                  borderRadius: '12px', 
                  border: isDark ? '1px solid #334155' : 'none', 
                  backgroundColor: isDark ? '#1e293b' : '#ffffff',
                  color: isDark ? '#f8fafc' : '#0f172a',
                  boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' 
                }}
              />
              <Radar 
                name="Anxo Ferreirós" 
                dataKey="score" 
                stroke="#059669" 
                fill="#10b981" 
                fillOpacity={0.4} 
                className="hover:fillOpacity-0.6 transition-all duration-300"
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}
