import React, { useState } from 'react';
import { Language } from '../types';
import { UI_STRINGS } from '../data/translations';
import { Sun, Moon, Menu, X, Globe, Phone, BookOpen, GraduationCap, CreditCard, ShieldCheck } from 'lucide-react';
import { Icon3DSPSS } from './ThreeDIcons';

interface HeaderProps {
  lang: Language;
  onToggleLang: () => void;
  darkMode: boolean;
  onToggleTheme: () => void;
  onOpenBooking: (itemTitle?: string, amount?: number) => void;
  onNavigateToSection: (sectionId: string) => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onToggleLang,
  darkMode,
  onToggleTheme,
  onOpenBooking,
  onNavigateToSection,
  activeSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = UI_STRINGS[lang];

  const navItems = [
    { id: 'courses', label: t.navCourses, icon: GraduationCap },
    { id: 'services', label: t.navServices, icon: BookOpen },
    { id: 'payment', label: t.navPayment, icon: CreditCard },
    { id: 'testimonials', label: t.navReviews, icon: ShieldCheck },
  ];

  const handleNav = (id: string) => {
    onNavigateToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="site-header"
      className={`sticky top-0 z-40 w-full transition-colors duration-200 border-b backdrop-blur-md ${
        darkMode
          ? 'bg-slate-950/92 border-slate-800 text-slate-100'
          : 'bg-white/92 border-slate-200 text-slate-900'
      }`}
    >
      {/* Top Banner with Direct Contact and Telebirr notice */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-amber-600 text-white text-xs py-1.5 px-4 text-center font-medium flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>
            {lang === 'en'
              ? 'New SPSS & STATA Practical Cohort Registration Open • Telebirr & CBE Payment Accepted'
              : 'አዲስ የSPSS እና STATA የተግባር ስልጠና ምዝገባ ተጀምሯል • በቴሌብር እና በንግድ ባንክ መክፈል ይችላሉ'}
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="tel:+251937450712"
            className="flex items-center gap-1 hover:text-amber-200 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>0937450712</span>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity */}
          <button
            id="brand-logo-btn"
            onClick={() => handleNav('hero')}
            className="flex items-center gap-3 text-left focus:outline-none group cursor-pointer"
          >
            <div className="relative flex items-center justify-center">
              <Icon3DSPSS size={44} className="group-hover:rotate-6 transition-transform" />
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight block leading-tight text-blue-900 dark:text-blue-400">
                {t.brandName}
              </span>
              <span className="text-[11px] uppercase tracking-wider text-amber-700 dark:text-amber-400 font-semibold block truncate max-w-[210px] sm:max-w-xs">
                {lang === 'en' ? 'Research & Software Training' : 'የምርምርና ሶፍትዌር ስልጠና'}
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNav(item.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'bg-blue-50 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300 font-semibold'
                      : darkMode
                      ? 'text-slate-300 hover:text-white hover:bg-slate-900'
                      : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="w-4 h-4 opacity-75" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Action Tools: Language Switcher, Theme Switcher, Quick Register Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Toggle Button (Bilingual Support: Amharic / English) */}
            <button
              id="lang-toggle-btn"
              onClick={onToggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition-all cursor-pointer shadow-xs bg-amber-500/10 border-amber-500/30 text-amber-800 dark:text-amber-300 hover:bg-amber-500/20"
              title={lang === 'en' ? 'ወደ አማርኛ ቀይር (Switch to Amharic)' : 'Switch to English'}
              aria-label="Toggle Language"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'አማርኛ (AM)' : 'English (EN)'}</span>
            </button>

            {/* Dark/Light Theme Toggle */}
            <button
              id="theme-toggle-btn"
              onClick={onToggleTheme}
              className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                darkMode
                  ? 'border-slate-800 text-amber-400 hover:bg-slate-900'
                  : 'border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Direct Enroll Action */}
            <button
              id="header-enroll-btn"
              onClick={() => onOpenBooking()}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white transition-all cursor-pointer shadow-sm hover:shadow-md active:scale-98"
            >
              <GraduationCap className="w-4 h-4" />
              <span>{t.ctaEnrollNow}</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              id="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-xl border transition-colors cursor-pointer ${
                darkMode ? 'border-slate-800 text-slate-200' : 'border-slate-200 text-slate-800'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-menu"
            className={`lg:hidden py-4 border-t space-y-2 ${
              darkMode ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-white'
            }`}
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  id={`mobile-link-${item.id}`}
                  onClick={() => handleNav(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm font-medium transition-colors cursor-pointer ${
                    activeSection === item.id
                      ? 'bg-blue-600 text-white font-semibold'
                      : darkMode
                      ? 'text-slate-200 hover:bg-slate-900'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="w-5 h-5 opacity-80" />
                  <span>{item.label}</span>
                </button>
              );
            })}

            <div className="pt-2 px-4 space-y-2">
              <button
                id="mobile-register-btn"
                onClick={() => {
                  onOpenBooking();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm shadow-sm cursor-pointer"
              >
                <GraduationCap className="w-4 h-4" />
                <span>{t.ctaEnrollNow}</span>
              </button>

              <a
                href="tel:0937450712"
                className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold border ${
                  darkMode
                    ? 'border-slate-800 text-slate-300 hover:bg-slate-900'
                    : 'border-slate-300 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <span>0937450712 (Call / Telegram)</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
