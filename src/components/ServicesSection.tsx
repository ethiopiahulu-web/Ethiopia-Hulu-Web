import React, { useState } from 'react';
import { Language, ResearchService, ServiceCategory } from '../types';
import { UI_STRINGS } from '../data/translations';
import { RESEARCH_SERVICES } from '../data/servicesAndCourses';
import {
  Icon3DDocument,
  Icon3DSPSS,
  Icon3DGraduation,
  Icon3DQuestionnaire,
  Icon3DStata,
} from './ThreeDIcons';
import { BookOpen, Check, Clock, Sparkles, Wrench, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  lang: Language;
  onOpenBooking: (itemTitle: string, amount: number) => void;
  darkMode: boolean;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  lang,
  onOpenBooking,
  darkMode,
}) => {
  const t = UI_STRINGS[lang];
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: t.categoryAll },
    { id: 'thesis', label: t.categoryThesis },
    { id: 'data-analysis', label: t.categoryDataAnalysis },
    { id: 'proposal', label: t.categoryProposal },
    { id: 'questionnaire', label: t.categoryQuestionnaire },
    { id: 'publication', label: t.categoryPublication },
  ];

  const filteredServices = activeCategory === 'all'
    ? RESEARCH_SERVICES
    : RESEARCH_SERVICES.filter((s) => s.category === activeCategory);

  const getService3DIcon = (icon3D: string) => {
    switch (icon3D) {
      case 'graduation':
        return <Icon3DGraduation size={50} />;
      case 'chart':
        return <Icon3DSPSS size={50} />;
      case 'document':
        return <Icon3DDocument size={50} />;
      case 'questionnaire':
        return <Icon3DQuestionnaire size={50} />;
      default:
        return <Icon3DStata size={50} />;
    }
  };

  return (
    <section id="services" className="py-14 sm:py-20 scroll-mt-20 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-xs uppercase tracking-wider mb-2">
            <BookOpen className="w-4 h-4" />
            <span>{lang === 'en' ? 'Expert Research Consultation' : 'የምርምርና ጥናት ማማከር'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
            {t.servicesTitle}
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {t.servicesSubtitle}
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-thin">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`service-cat-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                    : darkMode
                    ? 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100 shadow-xs'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service: ResearchService) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className={`flex flex-col justify-between rounded-3xl p-6 sm:p-7 border transition-all duration-200 hover:-translate-y-1 shadow-sm hover:shadow-md ${
                darkMode
                  ? 'bg-slate-900/90 border-slate-800 text-white'
                  : 'bg-white border-slate-200 text-slate-900'
              }`}
            >
              <div>
                {/* 3D Icon & Title */}
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="p-1 rounded-2xl bg-slate-50 dark:bg-slate-800/80 shrink-0">
                    {getService3DIcon(service.icon3D)}
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold tracking-tight leading-snug">
                      {service.title[lang]}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {service.shortDesc[lang]}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-2 mb-5">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    {lang === 'en' ? 'Core Deliverables:' : 'የሚቀርቡ ውጤቶች፡'}
                  </span>
                  {service.deliverables[lang].slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <Check className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tools badge list */}
                <div className="flex flex-wrap items-center gap-1.5 mb-5">
                  <span className="text-[10px] text-slate-400 font-semibold mr-1">Tools:</span>
                  {service.toolsUsed.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Turnaround & Action CTA */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1 text-slate-500">
                    <Clock className="w-3.5 h-3.5" />
                    {service.turnaroundTime[lang]}
                  </span>
                  <span className="font-bold text-indigo-600 dark:text-indigo-400">
                    {t.priceStarting} {service.estimatedPriceETB.toLocaleString()} ETB
                  </span>
                </div>

                <button
                  id={`request-service-btn-${service.id}`}
                  onClick={() => onOpenBooking(service.title[lang], service.estimatedPriceETB)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-indigo-50 text-indigo-900 hover:text-indigo-700 dark:bg-slate-800 dark:hover:bg-indigo-950/70 dark:text-indigo-300 transition-colors cursor-pointer border border-indigo-200/60 dark:border-indigo-800/60"
                >
                  <span>{t.requestServiceBtn}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
