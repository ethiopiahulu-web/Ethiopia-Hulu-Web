import React from 'react';
import { Language } from '../types';
import { UI_STRINGS } from '../data/translations';
import { Icon3DSPSS } from './ThreeDIcons';
import { Phone, Mail, MapPin, Send, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  lang: Language;
  onNavigateToSection: (sectionId: string) => void;
  darkMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  onNavigateToSection,
  darkMode,
}) => {
  const t = UI_STRINGS[lang];

  return (
    <footer
      id="site-footer"
      className={`border-t transition-colors ${
        darkMode
          ? 'bg-slate-950 border-slate-800 text-slate-400'
          : 'bg-slate-50 border-slate-200 text-slate-600'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Icon3DSPSS size={36} />
              <div>
                <span className="font-serif text-lg font-bold text-slate-900 dark:text-white block">
                  {t.brandName}
                </span>
                <span className="text-[11px] text-amber-600 dark:text-amber-400 font-semibold block">
                  {lang === 'en' ? 'Research & Training' : 'የምርምርና ስልጠና ማዕከል'}
                </span>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
              {t.footerAbout}
            </p>
            <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Strict Academic Integrity Guarantee' : 'ጥብቅ የአካዳሚክ ስነ-ምግባር ዋስትና'}</span>
            </div>
          </div>

          {/* Col 2: Software Training */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-slate-900 dark:text-white">
              {lang === 'en' ? 'Software Modules' : 'የሶፍትዌር ስልጠናዎች'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigateToSection('courses')}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                >
                  IBM SPSS Statistics v29
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSection('courses')}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                >
                  STATA 18 Econometrics
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSection('courses')}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                >
                  NVivo Qualitative Analysis
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSection('courses')}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                >
                  SmartPLS 4 SEM Modeling
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSection('courses')}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                >
                  KoboToolbox & Mobile Survey
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Research Consultation */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-slate-900 dark:text-white">
              {lang === 'en' ? 'Research Services' : 'የምርምር ድጋፍ'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigateToSection('services')}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Thesis & Dissertation Advisory
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSection('services')}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Hypothesis Testing & Regression
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSection('services')}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Turnitin Similarity Reduction
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSection('services')}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Likert Questionnaire Validation
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSection('payment')}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Telebirr & Bank Accounts
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Hotline */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-slate-900 dark:text-white">
              {t.footerContact}
            </h4>
            <div className="space-y-2.5 text-xs">
              <a
                href="tel:0937450712"
                className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="font-semibold">0937450712 (Telebirr / Calls)</span>
              </a>

              <a
                href="https://t.me/ethiopiahulu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Send className="w-4 h-4 text-blue-500 shrink-0" />
                <span>Telegram: @ethiopiahulu</span>
              </a>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <span>ethiopiahulu@gmail.com</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Addis Ababa, Ethiopia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} {t.footerRights}</p>
          <div className="flex items-center gap-3">
            <span>Bilingual (English & አማርኛ)</span>
            <span>•</span>
            <span>Telebirr: 0937450712</span>
            <span>•</span>
            <span>CBE: 1000077882123</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
