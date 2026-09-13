import React, { useState } from 'react';
import { Language } from '../types';
import { UI_STRINGS } from '../data/translations';
import {
  Icon3DSPSS,
  Icon3DStata,
  Icon3DPythonR,
  Icon3DNVivo,
  Icon3DDocument,
  Icon3DGraduation,
  Icon3DTelebirr,
} from './ThreeDIcons';
import { ArrowRight, CheckCircle2, Sparkles, Play, Shield, BarChart3 } from 'lucide-react';

interface HeroProps {
  lang: Language;
  onOpenBooking: (itemTitle?: string, amount?: number) => void;
  onExploreSection: (sectionId: string) => void;
  darkMode: boolean;
}

export const Hero: React.FC<HeroProps> = ({
  lang,
  onOpenBooking,
  onExploreSection,
  darkMode,
}) => {
  const t = UI_STRINGS[lang];
  const [activeModelDemo, setActiveModelDemo] = useState<'regression' | 'anova' | 'reliability'>('regression');

  return (
    <section id="hero" className="relative pt-6 pb-16 sm:pt-10 sm:pb-24 overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-500/15 via-indigo-500/10 to-amber-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Trust Badge with 3D Sparkle */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-amber-500/10 border border-blue-500/20 text-blue-800 dark:text-blue-300">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-spin" />
              <span>{t.heroBadge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.18] text-slate-900 dark:text-white">
              {t.heroTitlePrefix}{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-amber-600 bg-clip-text text-transparent">
                {t.heroTitleHighlight}
              </span>{' '}
              {t.heroTitleSuffix}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
              {t.heroSubtitle}
            </p>

            {/* Key Assurance Badges */}
            <div className="flex flex-wrap gap-y-2 gap-x-4 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                {lang === 'en' ? 'IBM SPSS v29 & STATA 18 Certified' : 'በSPSS v29 እና STATA 18 ሰርተፊኬት'}
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                {lang === 'en' ? 'Turnitin Anti-Plagiarism Check' : 'የተርኒቲን ፕላጃሪዝም ፍተሻ'}
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                {lang === 'en' ? 'Direct Telebirr & CBE Payment' : 'በቴሌብርና ንግድ ባንክ ፈጣን ክፍያ'}
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                id="hero-enroll-course-cta"
                onClick={() => onOpenBooking('IBM SPSS Statistics Practical Mastery', 3500)}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-md hover:shadow-lg transition-all cursor-pointer group"
              >
                <Icon3DSPSS size={22} className="group-hover:rotate-12 transition-transform" />
                <span>{t.ctaEnrollNow}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-request-assistance-cta"
                onClick={() => onExploreSection('services')}
                className={`inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm border transition-all cursor-pointer ${
                  darkMode
                    ? 'border-slate-800 bg-slate-900/80 hover:bg-slate-800 text-slate-200'
                    : 'border-slate-300 bg-white hover:bg-slate-50 text-slate-800 shadow-xs'
                }`}
              >
                <Icon3DDocument size={20} />
                <span>{t.ctaGetAssistance}</span>
              </button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800">
                <p className="font-serif text-xl font-bold text-blue-600 dark:text-blue-400">
                  {t.statsGraduates}
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                  {lang === 'en' ? 'Completed Courses' : 'ተመርቀው የወጡ'}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800">
                <p className="font-serif text-xl font-bold text-indigo-600 dark:text-indigo-400">
                  {t.statsTheses}
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                  {lang === 'en' ? 'Masters & PhDs' : 'ማስተርስና ዶክትሬት'}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800">
                <p className="font-serif text-xl font-bold text-emerald-600 dark:text-emerald-400">
                  {t.statsRating}
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                  {lang === 'en' ? 'Verified Reviews' : 'ከፍተኛ እርካታ'}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800">
                <p className="font-serif text-xl font-bold text-amber-600 dark:text-amber-400">
                  {t.statsDelivery}
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                  {lang === 'en' ? 'Real Datasets' : 'በእውነተኛ ዳታዎች'}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Interactive Software Station */}
          <div className="lg:col-span-5 relative">
            {/* Decorative 3D floating icons around the card */}
            <div className="absolute -top-6 -left-6 z-20 animate-bounce duration-1000 hidden sm:block">
              <Icon3DTelebirr size={56} className="rotate-12 hover:scale-110 transition-transform" />
            </div>
            <div className="absolute -bottom-6 -right-4 z-20 hidden sm:block">
              <Icon3DGraduation size={58} className="-rotate-6 hover:scale-110 transition-transform" />
            </div>

            {/* 3D Glass/Elevation Card Container */}
            <div
              id="hero-interactive-card"
              className={`relative rounded-3xl p-6 sm:p-7 border transition-all shadow-2xl backdrop-blur-md ${
                darkMode
                  ? 'bg-slate-900/90 border-slate-800 text-white'
                  : 'bg-white/95 border-slate-200/80 text-slate-900'
              }`}
            >
              {/* Header Bar inside card */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <Icon3DSPSS size={42} />
                  <div>
                    <h3 className="font-serif font-bold text-base leading-tight">
                      IBM SPSS Statistics v29
                    </h3>
                    <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                      {lang === 'en' ? 'Live Interactive Analysis Console' : 'የቀጥታ ስታትስቲክስ መተንተኛ'}
                    </p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  Live Output
                </span>
              </div>

              {/* Interactive Statistical Model Tab Selectors */}
              <div className="pt-4 pb-3">
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                  {lang === 'en' ? 'Preview Analyzed Statistical Output:' : 'የተተነተነ የውጤት ቴብል ቅኝት፡'}
                </p>
                <div className="grid grid-cols-3 gap-1.5">
                  <button
                    onClick={() => setActiveModelDemo('regression')}
                    className={`py-1.5 px-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      activeModelDemo === 'regression'
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                    }`}
                  >
                    Regression
                  </button>
                  <button
                    onClick={() => setActiveModelDemo('anova')}
                    className={`py-1.5 px-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      activeModelDemo === 'anova'
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                    }`}
                  >
                    ANOVA
                  </button>
                  <button
                    onClick={() => setActiveModelDemo('reliability')}
                    className={`py-1.5 px-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      activeModelDemo === 'reliability'
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                    }`}
                  >
                    Cronbach α
                  </button>
                </div>
              </div>

              {/* Dynamic Interactive SPSS Table Representation */}
              <div className="p-3.5 rounded-xl border bg-slate-50/80 dark:bg-slate-950/60 border-slate-200 dark:border-slate-800 font-mono text-xs overflow-x-auto">
                {activeModelDemo === 'regression' && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-slate-500 text-[10px] uppercase font-bold border-b pb-1">
                      <span>Model</span>
                      <span>Beta (β)</span>
                      <span>t-stat</span>
                      <span>Sig. (p)</span>
                    </div>
                    <div className="flex justify-between font-medium">
                      <span>(Constant)</span>
                      <span>1.428</span>
                      <span>3.812</span>
                      <span className="text-emerald-600 font-bold">.000***</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-600 dark:text-blue-400">Leadership Style</span>
                      <span>0.412</span>
                      <span>4.672</span>
                      <span className="text-emerald-600 font-bold">.001***</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-600 dark:text-blue-400">Org Culture</span>
                      <span>0.318</span>
                      <span>3.245</span>
                      <span className="text-emerald-600 font-bold">.003***</span>
                    </div>
                    <div className="pt-2 border-t text-[11px] text-slate-500 font-sans flex justify-between">
                      <span>R² = 0.584 | Adj. R² = 0.571</span>
                      <span className="text-emerald-600 font-semibold">F(2,198) = 48.2 (p&lt;.001)</span>
                    </div>
                  </div>
                )}

                {activeModelDemo === 'anova' && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-slate-500 text-[10px] uppercase font-bold border-b pb-1">
                      <span>Source of Variation</span>
                      <span>df</span>
                      <span>F</span>
                      <span>Sig. (p)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-600 dark:text-blue-400">Between Groups</span>
                      <span>3</span>
                      <span>14.821</span>
                      <span className="text-emerald-600 font-bold">.000***</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Within Groups</span>
                      <span>196</span>
                      <span>—</span>
                      <span>—</span>
                    </div>
                    <div className="pt-2 border-t text-[11px] text-slate-500 font-sans">
                      Interpretation: Statistically significant mean differences between demographic strata.
                    </div>
                  </div>
                )}

                {activeModelDemo === 'reliability' && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-slate-500 text-[10px] uppercase font-bold border-b pb-1">
                      <span>Construct Scale</span>
                      <span>Items (N)</span>
                      <span>Cronbach’s α</span>
                      <span>Verdict</span>
                    </div>
                    <div className="flex justify-between font-medium">
                      <span>Customer Loyalty</span>
                      <span>7</span>
                      <span className="text-emerald-600 font-bold">0.892</span>
                      <span className="text-emerald-600">High Reliability</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Service Quality</span>
                      <span>10</span>
                      <span className="text-emerald-600 font-bold">0.864</span>
                      <span className="text-emerald-600">High Reliability</span>
                    </div>
                    <div className="pt-2 border-t text-[11px] text-slate-500 font-sans">
                      Standard: α &gt; 0.70 confirms internal consistency for thesis instruments.
                    </div>
                  </div>
                )}
              </div>

              {/* Tools row below preview */}
              <div className="pt-4 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">
                  {lang === 'en' ? 'Supported Software Suite:' : 'የሚሰለጥኑ ሶፍትዌሮች፡'}
                </span>
                <div className="flex items-center gap-2 font-bold text-slate-700 dark:text-slate-300">
                  <span className="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                    SPSS
                  </span>
                  <span className="px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                    STATA
                  </span>
                  <span className="px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300">
                    NVivo
                  </span>
                  <span className="px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300">
                    Python
                  </span>
                </div>
              </div>

              {/* Action Button inside card */}
              <div className="pt-4">
                <button
                  id="hero-card-spss-enroll"
                  onClick={() => onOpenBooking('IBM SPSS Statistics Practical Mastery', 3500)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-xs bg-slate-900 hover:bg-slate-800 text-white dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors cursor-pointer"
                >
                  <BarChart3 className="w-3.5 h-3.5" />
                  <span>
                    {lang === 'en'
                      ? 'Register for Next SPSS Batch (3,500 ETB)'
                      : 'ለቀጣዩ የSPSS ስልጠና ይመዝገቡ (3,500 ብር)'}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
