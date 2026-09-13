import { useState, useEffect } from 'react';
import { Language } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CoursesSection } from './components/CoursesSection';
import { ServicesSection } from './components/ServicesSection';
import { PaymentSection } from './components/PaymentSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BookingModal } from './components/BookingModal';
import { Footer } from './components/Footer';
import { Phone, Send, MessageCircle } from 'lucide-react';
import { Icon3DTelebirr } from './components/ThreeDIcons';

export default function App() {
  // Bilingual Language State ('en' | 'am')
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('ethiopia_hulu_lang');
      if (savedLang === 'en' || savedLang === 'am') return savedLang;
    }
    return 'en';
  });

  // Dark/Light Mode
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('ethiopia_hulu_theme');
      if (saved) return saved === 'dark';
      return false; // Default to clean light layout
    }
    return false;
  });

  // Active section for navigation highlighting
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Booking Modal State
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingProgramTitle, setBookingProgramTitle] = useState('');
  const [bookingAmount, setBookingAmount] = useState<number>(3500);

  // Sync language attribute on <html> element
  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem('ethiopia_hulu_lang', lang);
  }, [lang]);

  // Sync dark mode class on HTML document
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('ethiopia_hulu_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('ethiopia_hulu_theme', 'light');
    }
  }, [darkMode]);

  const handleToggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'am' : 'en'));
  };

  const handleToggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  const handleOpenBooking = (itemTitle?: string, amount?: number) => {
    if (itemTitle) setBookingProgramTitle(itemTitle);
    if (amount) setBookingAmount(amount);
    setIsBookingOpen(true);
  };

  const handleNavigateToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`min-h-screen flex flex-col font-sans transition-colors duration-200 selection:bg-blue-600 selection:text-white ${
        darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* Top Header with Language & Theme Switches */}
      <Header
        lang={lang}
        onToggleLang={handleToggleLang}
        darkMode={darkMode}
        onToggleTheme={handleToggleTheme}
        onOpenBooking={() => handleOpenBooking()}
        onNavigateToSection={handleNavigateToSection}
        activeSection={activeSection}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section with 3D Icons & Statistical Console */}
        <Hero
          lang={lang}
          onOpenBooking={handleOpenBooking}
          onExploreSection={handleNavigateToSection}
          darkMode={darkMode}
        />

        {/* Statistical Software Training (SPSS, STATA, R, NVivo) */}
        <CoursesSection
          lang={lang}
          onOpenBooking={handleOpenBooking}
          darkMode={darkMode}
        />

        {/* Research Assistance Services (Thesis, Data analysis, Proposal, Questionnaire, Publication) */}
        <ServicesSection
          lang={lang}
          onOpenBooking={handleOpenBooking}
          darkMode={darkMode}
        />

        {/* Payment Options (Telebirr 0937450712, CBE, Abyssinia, Awash, Hibret) */}
        <PaymentSection
          lang={lang}
          onOpenBooking={() => handleOpenBooking()}
          darkMode={darkMode}
        />

        {/* Testimonials & 4-Stage Research Methodology */}
        <TestimonialsSection
          lang={lang}
          darkMode={darkMode}
        />
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        onNavigateToSection={handleNavigateToSection}
        darkMode={darkMode}
      />

      {/* Floating Action Buttons: Quick Register & Telebirr/Telegram Contact */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
        <a
          href="tel:0937450712"
          id="floating-call-btn"
          className="flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-xl hover:scale-105 transition-transform"
          title="Call or Telegram: 0937450712"
        >
          <Phone className="w-3.5 h-3.5 text-blue-500" />
          <span>0937450712</span>
        </a>

        <button
          id="floating-enroll-btn"
          onClick={() => handleOpenBooking()}
          className="flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-amber-600 text-white shadow-2xl hover:scale-105 transition-transform cursor-pointer"
        >
          <Send className="w-4 h-4" />
          <span>{lang === 'en' ? 'Enroll / Pay via Telebirr' : 'ይመዝገቡ / በቴሌብር ይክፈሉ'}</span>
        </button>
      </div>

      {/* Interactive Registration & Bank Verification Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        lang={lang}
        initialProgramTitle={bookingProgramTitle}
        initialAmount={bookingAmount}
        darkMode={darkMode}
      />
    </div>
  );
}
