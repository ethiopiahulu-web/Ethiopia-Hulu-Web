import React, { useState } from 'react';
import { Language, BookingSubmission } from '../types';
import { UI_STRINGS } from '../data/translations';
import { PAYMENT_ACCOUNTS } from '../data/payments';
import { TRAINING_COURSES, RESEARCH_SERVICES } from '../data/servicesAndCourses';
import { X, CheckCircle2, ShieldCheck, Send, ExternalLink, AlertCircle } from 'lucide-react';
import { Icon3DSPSS, Icon3DTelebirr } from './ThreeDIcons';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  initialProgramTitle?: string;
  initialAmount?: number;
  darkMode: boolean;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  lang,
  initialProgramTitle = '',
  initialAmount = 3500,
  darkMode,
}) => {
  const t = UI_STRINGS[lang];

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedProgram, setSelectedProgram] = useState(
    initialProgramTitle || 'IBM SPSS Statistics: Complete Practical Mastery'
  );
  const [selectedBank, setSelectedBank] = useState('telebirr');
  const [transactionRef, setTransactionRef] = useState('');
  const [amount, setAmount] = useState<number>(initialAmount || 3500);
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  // Combine courses and services for dropdown options
  const programOptions = [
    ...TRAINING_COURSES.map((c) => ({
      id: c.id,
      name: c.title[lang],
      type: 'course' as const,
      price: c.priceETB,
    })),
    ...RESEARCH_SERVICES.map((s) => ({
      id: s.id,
      name: s.title[lang],
      type: 'service' as const,
      price: s.estimatedPriceETB,
    })),
  ];

  const handleProgramChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const title = e.target.value;
    setSelectedProgram(title);
    const found = programOptions.find((p) => p.name === title);
    if (found) {
      setAmount(found.price);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim() || !transactionRef.trim()) {
      setErrorMessage(
        lang === 'en'
          ? 'Please provide your Full Name, Phone Number, and Bank Transaction Reference ID.'
          : 'እባክዎ ሙሉ ስምዎን፣ ስልክ ቁጥርዎን እና የግብይት ማረጋገጫ ቁጥሩን (Transaction Ref) ያስገቡ።'
      );
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);

    const submission: BookingSubmission = {
      id: `reg-${Date.now()}`,
      fullName,
      phone,
      email,
      itemType: 'course',
      itemId: selectedProgram,
      itemTitle: selectedProgram,
      selectedBank,
      transactionRef,
      amountETB: amount,
      additionalNotes: notes,
      createdAt: new Date().toISOString(),
    };

    // Save registration locally for persistence
    try {
      const existing = JSON.parse(localStorage.getItem('ethiopia_hulu_registrations') || '[]');
      existing.unshift(submission);
      localStorage.setItem('ethiopia_hulu_registrations', JSON.stringify(existing));
    } catch {
      // Local storage fallback
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 900);
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  const chosenAccount = PAYMENT_ACCOUNTS.find((a) => a.id === selectedBank) || PAYMENT_ACCOUNTS[0];

  return (
    <div
      id="booking-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm overflow-y-auto"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        id="booking-modal-card"
        className={`relative w-full max-w-xl rounded-3xl border p-6 sm:p-8 shadow-2xl transition-all my-8 ${
          darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        {/* Close Button */}
        <button
          id="close-modal-btn"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          /* Success Screen */
          <div className="py-6 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white">
              {t.successTitle}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
              {t.successDesc}
            </p>

            {/* Verification summary */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 text-left text-xs space-y-1.5 border border-slate-200 dark:border-slate-800 font-mono">
              <div className="flex justify-between">
                <span className="text-slate-500">Applicant:</span>
                <span className="font-bold">{fullName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Program:</span>
                <span className="font-bold truncate max-w-[200px]">{selectedProgram}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Payment Channel:</span>
                <span className="font-bold">{chosenAccount.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Reference:</span>
                <span className="font-bold text-blue-600 dark:text-blue-400">{transactionRef}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Amount:</span>
                <span className="font-bold text-emerald-600">{amount.toLocaleString()} ETB</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <a
                href="https://t.me/ethiopiahulu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-xs bg-blue-600 hover:bg-blue-700 text-white shadow-sm"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>{lang === 'en' ? 'Open Telegram Support (0937450712)' : 'የቴሌግራም ድጋፍ (0937450712)'}</span>
              </a>
              <button
                onClick={handleReset}
                className="px-6 py-3 rounded-xl font-semibold text-xs border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {t.closeBtn}
              </button>
            </div>
          </div>
        ) : (
          /* Registration Form */
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>{lang === 'en' ? 'Instant Verification' : 'ፈጣን የክፍያ ማረጋገጫ'}</span>
              </div>
              <h3 className="font-serif text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                {t.modalTitle}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                {t.modalSubtitle}
              </p>
            </div>

            {errorMessage && (
              <div className="mb-4 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-700 dark:text-rose-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    {t.formFullName}
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder={t.formFullNamePlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-xl border text-xs bg-slate-50 dark:bg-slate-950 border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    {t.formPhone}
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={t.formPhonePlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-xl border text-xs bg-slate-50 dark:bg-slate-950 border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  {t.formEmail}
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.formEmailPlaceholder}
                  className="w-full px-3.5 py-2.5 rounded-xl border text-xs bg-slate-50 dark:bg-slate-950 border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Course or Service Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  {t.formSelectProgram}
                </label>
                <select
                  value={selectedProgram}
                  onChange={handleProgramChange}
                  className="w-full px-3.5 py-2.5 rounded-xl border text-xs bg-slate-50 dark:bg-slate-950 border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <optgroup label={lang === 'en' ? 'Statistical Software Courses' : 'የስታትስቲክስ ሶፍትዌር ስልጠናዎች'}>
                    {TRAINING_COURSES.map((c) => (
                      <option key={c.id} value={c.title[lang]}>
                        {c.title[lang]} ({c.priceETB.toLocaleString()} ETB)
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label={lang === 'en' ? 'Research Consulting Services' : 'የምርምር ማማከር አገልግሎቶች'}>
                    {RESEARCH_SERVICES.map((s) => (
                      <option key={s.id} value={s.title[lang]}>
                        {s.title[lang]} ({s.estimatedPriceETB.toLocaleString()} ETB)
                      </option>
                    ))}
                  </optgroup>
                </select>
              </div>

              {/* Payment Method Selector & Target Account Display */}
              <div className="p-3.5 rounded-2xl bg-blue-50/70 dark:bg-slate-950 border border-blue-200/80 dark:border-slate-800 space-y-2">
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                  {t.formSelectBank}
                </label>
                <select
                  value={selectedBank}
                  onChange={(e) => setSelectedBank(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border text-xs bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 font-medium"
                >
                  {PAYMENT_ACCOUNTS.map((acc) => (
                    <option key={acc.id} value={acc.id}>
                      {lang === 'en' ? acc.name : acc.nameAm} - {acc.accountNumber}
                    </option>
                  ))}
                </select>

                <div className="text-[11px] text-slate-600 dark:text-slate-300 pt-1 flex items-center justify-between">
                  <span>
                    {lang === 'en' ? 'Deposit / Transfer To:' : 'ገቢ የሚደረግበት ቁጥር፡'}{' '}
                    <strong className="font-mono text-blue-700 dark:text-blue-400">
                      {chosenAccount.accountNumber}
                    </strong>
                  </span>
                  <span className="text-slate-400">({chosenAccount.accountHolder})</span>
                </div>
              </div>

              {/* Transaction Reference & Amount */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    {t.formTransactionRef}
                  </label>
                  <input
                    type="text"
                    required
                    value={transactionRef}
                    onChange={(e) => setTransactionRef(e.target.value)}
                    placeholder={t.formTransactionRefPlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-xl border text-xs font-mono bg-slate-50 dark:bg-slate-950 border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    {t.formAmount}
                  </label>
                  <input
                    type="number"
                    required
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-xl border text-xs font-bold bg-slate-50 dark:bg-slate-950 border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  {t.formNotes}
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={t.formNotesPlaceholder}
                  className="w-full px-3.5 py-2 rounded-xl border text-xs bg-slate-50 dark:bg-slate-950 border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Submit CTA */}
              <button
                id="submit-registration-btn"
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-md transition-all cursor-pointer disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? t.formSubmitting : t.formSubmitBtn}</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
