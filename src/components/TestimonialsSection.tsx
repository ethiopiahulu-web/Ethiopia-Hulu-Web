import React from 'react';
import { Language } from '../types';
import { UI_STRINGS } from '../data/translations';
import { TESTIMONIALS } from '../data/servicesAndCourses';
import { Star, Quote, CheckCircle2, ShieldAlert, Award, FileSpreadsheet, Binary, Presentation } from 'lucide-react';

interface TestimonialsSectionProps {
  lang: Language;
  darkMode: boolean;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  lang,
  darkMode,
}) => {
  const t = UI_STRINGS[lang];

  const workflowSteps = [
    {
      step: '01',
      title: lang === 'en' ? 'Proposal & Design' : 'ፕሮፖዛልና የጥናት ቀረጻ',
      desc:
        lang === 'en'
          ? 'Formulate precise research questions, empirical hypotheses, and sample sizing equations.'
          : 'ትክክለኛ የጥናት ጥያቄዎችን፣ ሃይፖቴሲሶችን እና የናሙና ስሌት ቀመሮችን ማዘጋጀት።',
      icon: FileSpreadsheet,
    },
    {
      step: '02',
      title: lang === 'en' ? 'Data Collection & Tools' : 'የመረጃ አሰባሰብና መጠይቅ',
      desc:
        lang === 'en'
          ? 'Digitize questionnaires in KoboToolbox, train field enumerators, and validate scale reliability.'
          : 'መጠይቆችን በKoboToolbox ዲጂታላይዝ ማድረግ እና አስተማማኝነታቸውን መፈተሽ።',
      icon: Binary,
    },
    {
      step: '03',
      title: lang === 'en' ? 'SPSS / STATA Modeling' : 'የSPSS / STATA ትንተና',
      desc:
        lang === 'en'
          ? 'Run regression, ANOVA, SEM path models, factor analysis, and diagnostic econometric tests.'
          : 'ሪግሬሽን፣ አኖቫ፣ ፋክተር አናሊሲስ እና የላቁ ስታትስቲካል ፍተሻዎችን ማካሄድ።',
      icon: Award,
    },
    {
      step: '04',
      title: lang === 'en' ? 'Thesis Defense & Publication' : 'የዲፌንስ ዝግጅትና ህትመት',
      desc:
        lang === 'en'
          ? 'Format APA tables, complete Chapter 4 & 5 interpretations, and reduce Turnitin similarity.'
          : 'የ4ኛ እና 5ኛ ምዕራፍ ማብራሪያ፣ የAPA ቴብሎችን ማዘጋጀት እና የተርኒቲን ውጤት መቀነስ።',
      icon: Presentation,
    },
  ];

  return (
    <section id="testimonials" className="py-14 sm:py-20 scroll-mt-20 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 1: Methodology Flow */}
        <div className="mb-20">
          <div className="max-w-3xl mb-10">
            <span className="text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-wider block mb-2">
              {lang === 'en' ? 'Methodological Rigor' : 'ሳይንሳዊ አሰራራችን'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {lang === 'en' ? 'The 4-Stage Research Excellence Pipeline' : 'የ4 ደረጃዎች የምርምር ሂደት'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((ws, i) => {
              const Icon = ws.icon;
              return (
                <div
                  key={i}
                  className={`p-6 rounded-3xl border transition-all ${
                    darkMode
                      ? 'bg-slate-900/60 border-slate-800 text-white'
                      : 'bg-white border-slate-200 text-slate-900 shadow-xs'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-black text-blue-600/40 dark:text-blue-400/40">
                      {ws.step}
                    </span>
                    <div className="p-2.5 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="font-serif font-bold text-base mb-2">
                    {ws.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {ws.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 2: Testimonials */}
        <div className="max-w-3xl mb-12">
          <span className="text-amber-600 dark:text-amber-400 font-bold text-xs uppercase tracking-wider block mb-2">
            {lang === 'en' ? 'Verified Researcher Reviews' : 'የተጠቃሚዎች አስተያየት'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
            {t.testimonialsTitle}
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {t.testimonialsSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className={`flex flex-col justify-between rounded-3xl p-6 sm:p-7 border transition-all shadow-sm ${
                darkMode
                  ? 'bg-slate-900/80 border-slate-800 text-white'
                  : 'bg-white border-slate-200 text-slate-900'
              }`}
            >
              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-2 text-xs font-semibold text-slate-500">5.0</span>
                </div>

                <Quote className="w-8 h-8 text-blue-600/20 mb-2" />

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 italic">
                  "{review.quote[lang]}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <h4 className="font-serif font-bold text-sm text-slate-900 dark:text-white">
                  {lang === 'en' ? review.name : review.nameAm}
                </h4>
                <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                  {lang === 'en' ? review.title : review.titleAm}
                </p>
                <p className="text-[11px] text-slate-400">
                  {lang === 'en' ? review.institution : review.institutionAm}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
