'use client';

import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';

export default function Navbar() {
  const t = useTranslations('Nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLocale = (nextLocale: string) => {
    router.replace(pathname, { locale: nextLocale });
  };

  const navLinks = [
    { href: '#about', label: t('about') },
    { href: '#portfolio', label: t('portfolio') },
    { href: '#experience', label: t('experience') },
    { href: '#contact', label: t('contact') },
  ];

  const langs = ['es', 'en', 'gl'];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* LOGO */}
        <a href="#" className="text-xl font-bold tracking-tighter text-slate-900 transition-colors hover:text-emerald-600">
          A<span className="text-emerald-600">.</span>X<span className="text-emerald-600">.</span>F
        </a>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-slate-600 hover:text-emerald-700 transition-colors">
              {link.label}
            </a>
          ))}

          {/* LANG SWITCHER */}
          <div className="flex items-center space-x-2 border-l border-slate-300 pl-6">
            <Globe className="w-4 h-4 text-slate-400" />
            <select
              title="Change Language"
              value={locale}
              onChange={(e) => changeLocale(e.target.value)}
              className="bg-transparent text-sm font-medium text-slate-600 outline-none cursor-pointer hover:text-emerald-700 transition-colors"
            >
              {langs.map((l) => (
                <option key={l} value={l}>
                  {l.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button 
          title="Toggle Mobile Menu"
          className="md:hidden text-slate-900" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE NAV */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 flex flex-col space-y-4 border-t border-slate-100">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-600"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center space-x-2 pt-4 border-t border-slate-100">
            <Globe className="w-5 h-5 text-slate-400" />
            <select
              title="Change Language"
              value={locale}
              onChange={(e) => {
                changeLocale(e.target.value);
                setMobileMenuOpen(false);
              }}
              className="bg-transparent text-base font-medium text-slate-600 outline-none w-full"
            >
              <option value="es">Español (ES)</option>
              <option value="en">English (EN)</option>
              <option value="gl">Galego (GL)</option>
            </select>
          </div>
        </div>
      )}
    </nav>
  );
}
