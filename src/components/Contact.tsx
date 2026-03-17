'use client';

import { useTranslations, useMessages } from 'next-intl';
import { useState } from 'react';
import { Mail, Linkedin, FileText, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { DownloadSummaryButton } from './pdf/DownloadSummaryButton';

export default function Contact() {
  const t = useTranslations('Contact');
  const messages = useMessages();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    
    // Replace YOUR_ACCESS_KEY_HERE with an actual Web3Forms access key
    // registered with anxo.x.ferreiros@gmail.com
    formData.append("access_key", "9014e17c-e0cc-47c8-b8e8-b9ca55ea1076");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 relative inline-block">
              {t('title')}
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-emerald-600 rounded-full"></span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-10 text-lg">
              {t('message')}
            </p>

            <div className="space-y-6">
              <a 
                href="https://www.linkedin.com/in/anxo-xos%C3%A9-ferreir%C3%B3s-otero-83a0425b/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-4 group"
              >
                <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-sm border border-slate-100 dark:border-slate-700 group-hover:bg-[#0A66C2] dark:group-hover:bg-[#0A66C2] transition-colors">
                  <Linkedin className="w-5 h-5 text-slate-600 dark:text-slate-300 group-hover:text-white transition-colors" />
                </div>
                <span className="text-slate-700 dark:text-slate-200 font-medium group-hover:text-[#0A66C2] dark:group-hover:text-[#0A66C2] transition-colors">
                  {t('linkedin')}
                </span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-slate-800 p-8 md:p-10 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{t('name')}</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  required 
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-600 dark:text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 focus:outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{t('email')}</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  required 
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-600 dark:text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 focus:outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{t('message')}</label>
                <textarea 
                  name="message" 
                  id="message" 
                  rows={4} 
                  required 
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-600 dark:text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 focus:outline-none transition-all resize-none"
                ></textarea>
              </div>

              {/* Honeypot to prevent spam */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full py-4 bg-slate-900 dark:bg-emerald-600 hover:bg-slate-800 dark:hover:bg-emerald-700 disabled:bg-slate-400 dark:disabled:bg-slate-600 text-white rounded-lg font-medium transition-all flex items-center justify-center space-x-2"
              >
                {status === 'loading' ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    <span>{t('send')}</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="p-4 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-lg flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <p className="text-sm font-medium">{t('successMessage')}</p>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <p className="text-sm font-medium">{t('errorMessage')}</p>
                </div>
              )}

            </form>
          </div>

        </div>
      </div>

      {/* Floating Lead Magnet (Executive Summary) */}
      <div className="fixed bottom-6 left-6 sm:bottom-10 sm:left-10 z-50 animate-fade-in-up">
        <DownloadSummaryButton 
          dict={messages} 
          variant="secondary" 
          className="shadow-2xl shadow-emerald-900/20 rounded-full px-6 py-4 flex items-center justify-center space-x-2" 
        />
      </div>
    </section>
  );
}
