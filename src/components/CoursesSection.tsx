import React, { useState } from 'react';
import { Language, TrainingCourse } from '../types';
import { UI_STRINGS } from '../data/translations';
import { TRAINING_COURSES } from '../data/servicesAndCourses';
import {
  Icon3DSPSS,
  Icon3DStata,
  Icon3DPythonR,
  Icon3DNVivo,
  Icon3DQuestionnaire,
  Icon3DDocument,
} from './ThreeDIcons';
import {
  Clock,
  Award,
  ChevronDown,
  ChevronUp,
  Check,
  GraduationCap,
  Sparkles,
  Layers,
} from 'lucide-react';

interface CoursesSectionProps {
  lang: Language;
  onOpenBooking: (itemTitle: string, amount: number) => void;
  darkMode: boolean;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({
  lang,
  onOpenBooking,
  darkMode,
}) => {
  const t = UI_STRINGS[lang];
  const [expandedSyllabus, setExpandedSyllabus] = useState<Record<string, boolean>>({
    'spss-mastery': true, // Open SPSS syllabus by default
  });

  const toggleSyllabus = (id: string) => {
    setExpandedSyllabus((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const getCourse3DIcon = (icon3D: string) => {
    switch (icon3D) {
      case 'spss':
        return <Icon3DSPSS size={54} />;
      case 'stata':
        return <Icon3DStata size={54} />;
      case 'python':
        return <Icon3DPythonR size={54} />;
      case 'nvivo':
        return <Icon3DNVivo size={54} />;
      case 'sem':
        return <Icon3DDocument size={54} />;
      default:
        return <Icon3DQuestionnaire size={54} />;
    }
  };

  return (
    <section id="courses" className="py-14 sm:py-20 scroll-mt-20 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
            <GraduationCap className="w-4 h-4" />
            <span>{lang === 'en' ? 'Statistical Software Curriculum' : 'የስታትስቲክስ ሶፍትዌር ስልጠናዎች'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
            {t.coursesTitle}
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {t.coursesSubtitle}
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {TRAINING_COURSES.map((course: TrainingCourse) => {
            const isExpanded = !!expandedSyllabus[course.id];
            return (
              <div
                key={course.id}
                id={`course-card-${course.id}`}
                className={`relative flex flex-col justify-between rounded-3xl p-6 sm:p-8 border transition-all duration-200 hover:-translate-y-1 ${
                  course.popular
                    ? 'border-blue-500/50 shadow-lg ring-1 ring-blue-500/20'
                    : 'border-slate-200 dark:border-slate-800 shadow-sm'
                } ${
                  darkMode
                    ? 'bg-slate-900/90 text-white'
                    : 'bg-white text-slate-900'
                }`}
              >
                {/* Popular Badge */}
                {course.popular && (
                  <div className="absolute -top-3 right-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-sm">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{t.popularBadge}</span>
                  </div>
                )}

                <div>
                  {/* Top Header inside course card */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-1 rounded-2xl bg-slate-50 dark:bg-slate-800/80 shrink-0">
                      {getCourse3DIcon(course.icon3D)}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300">
                          {course.software}
                        </span>
                        <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                          {course.level[lang]}
                        </span>
                      </div>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight leading-snug">
                        {course.title[lang]}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-5 leading-relaxed">
                    {course.subtitle[lang]}
                  </p>

                  {/* Quick stats: Duration, Hours, Price */}
                  <div className="grid grid-cols-3 gap-2 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80 mb-5">
                    <div>
                      <span className="text-[10px] text-slate-400 font-semibold uppercase block">
                        {t.courseDuration}
                      </span>
                      <span className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate block">
                        {course.duration[lang]}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 font-semibold uppercase block">
                        {t.courseHours}
                      </span>
                      <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                        {course.hours} hrs live
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 font-semibold uppercase block">
                        Tuition Fee
                      </span>
                      <span className="text-xs font-extrabold text-blue-600 dark:text-blue-400 block">
                        {course.priceETB.toLocaleString()} ETB
                      </span>
                    </div>
                  </div>

                  {/* Features / Benefits List */}
                  <div className="space-y-2 mb-5">
                    {course.features[lang].map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Collapsible Detailed Syllabus Accordion */}
                  <div className="border-t border-slate-100 dark:border-slate-800/80 pt-3 mb-5">
                    <button
                      onClick={() => toggleSyllabus(course.id)}
                      className="w-full flex items-center justify-between text-xs font-bold text-blue-700 dark:text-blue-400 hover:underline cursor-pointer py-1"
                    >
                      <span className="flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5" />
                        <span>{t.syllabusTitle} ({course.syllabus[lang].length} modules)</span>
                      </span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>

                    {isExpanded && (
                      <div className="mt-3 p-3.5 rounded-xl bg-slate-50/70 dark:bg-slate-950/40 border border-slate-200/60 dark:border-slate-800/60 space-y-2 text-xs text-slate-600 dark:text-slate-300">
                        {course.syllabus[lang].map((item, sIdx) => (
                          <div key={sIdx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-1.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Action footer */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">
                      {lang === 'en' ? 'Payable via Telebirr or Banks' : 'በቴሌብር ወይም በባንክ የሚከፈል'}
                    </span>
                    <span className="font-serif text-lg font-extrabold text-slate-900 dark:text-white">
                      {course.priceETB.toLocaleString()} ETB
                    </span>
                  </div>

                  <button
                    id={`enroll-course-btn-${course.id}`}
                    onClick={() => onOpenBooking(course.title[lang], course.priceETB)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white transition-all cursor-pointer shadow-sm hover:shadow active:scale-98"
                  >
                    <GraduationCap className="w-4 h-4" />
                    <span>{t.enrollCourseBtn}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
