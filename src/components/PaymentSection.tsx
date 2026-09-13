import React, { useState } from 'react';
import { Language, PaymentAccount } from '../types';
import { UI_STRINGS } from '../data/translations';
import { PAYMENT_ACCOUNTS } from '../data/payments';
import {
  Icon3DTelebirr,
  Icon3DCBE,
  Icon3DAbyssinia,
  Icon3DAwash,
  Icon3DHibret,
} from './ThreeDIcons';
import {
  Copy,
  Check,
  CreditCard,
  Phone,
  ShieldCheck,
  Send,
  HelpCircle,
  ExternalLink,
} from 'lucide-react';

interface PaymentSectionProps {
  lang: Language;
  onOpenBooking: () => void;
  darkMode: boolean;
}

export const PaymentSection: React.FC<PaymentSectionProps> = ({
  lang,
  onOpenBooking,
  darkMode,
}) => {
  const t = UI_STRINGS[lang];
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2500);
  };

  const getBank3DIcon = (id: string) => {
    switch (id) {
      case 'telebirr':
        return <Icon3DTelebirr size={58} />;
      case 'cbe':
        return <Icon3DCBE size={58} />;
      case 'abyssinia':
        return <Icon3DAbyssinia size={58} />;
      case 'awash':
        return <Icon3DAwash size={58} />;
      case 'hibret':
        return <Icon3DHibret size={58} />;
      default:
        return <Icon3DCBE size={58} />;
    }
  };

  return (
    <section id="payment" className="py-14 sm:py-20 scroll-mt-20 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">
            <CreditCard className="w-4 h-4" />
            <span>{lang === 'en' ? 'Official Payment Channels' : 'ኦፊሴላዊ የክፍያ አማራጮች'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
            {t.paymentTitle}
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {t.paymentSubtitle}
          </p>
        </div>

        {/* 3-Step Verification Guide Ribbon */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl border bg-gradient-to-br from-blue-50/70 via-indigo-50/50 to-emerald-50/60 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900 border-blue-200/80 dark:border-slate-800">
          <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <span>{t.paymentStepsTitle}</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded-2xl bg-white/80 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 space-y-1.5 shadow-xs">
              <span className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center mb-2">
                1
              </span>
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                {t.step1Title}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {t.step1Desc}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/80 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 space-y-1.5 shadow-xs">
              <span className="w-7 h-7 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center justify-center mb-2">
                2
              </span>
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                {t.step2Title}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {t.step2Desc}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/80 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 space-y-1.5 shadow-xs">
              <span className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center mb-2">
                3
              </span>
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                {t.step3Title}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {t.step3Desc}
              </p>
            </div>
          </div>
        </div>

        {/* Payment Accounts Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-10">
          {PAYMENT_ACCOUNTS.map((account: PaymentAccount) => {
            const isCopied = copiedId === account.id;
            return (
              <div
                key={account.id}
                id={`payment-card-${account.id}`}
                className={`relative flex flex-col justify-between rounded-3xl p-6 sm:p-7 border transition-all duration-200 hover:-translate-y-1 shadow-sm hover:shadow-lg ${
                  account.id === 'telebirr'
                    ? 'border-blue-500/60 ring-2 ring-blue-500/20'
                    : 'border-slate-200 dark:border-slate-800'
                } ${
                  darkMode
                    ? 'bg-slate-900/90 text-white'
                    : 'bg-white text-slate-900'
                }`}
              >
                <div>
                  {/* Top Bar with 3D Icon and Bank Name */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-1 rounded-2xl bg-slate-50 dark:bg-slate-800/80 shrink-0">
                      {getBank3DIcon(account.id)}
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold border ${account.badgeBg}`}>
                      {account.type === 'mobile_money'
                        ? lang === 'en' ? 'Mobile Money' : 'ሞባይል ገንዘብ'
                        : lang === 'en' ? 'Commercial Bank' : 'ንግድ ባንክ'}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold tracking-tight mb-1 text-slate-900 dark:text-white">
                    {lang === 'en' ? account.name : account.nameAm}
                  </h3>

                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                    {account.instructions[lang]}
                  </p>

                  {/* Account Number Box with 1-Click Copy */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200/90 dark:border-slate-800 mb-4">
                    <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 mb-1">
                      <span>
                        {account.id === 'telebirr'
                          ? t.telebirrMobileNumber
                          : t.accountNumberLabel}
                      </span>
                      <span className="font-medium text-[10px] text-emerald-600 dark:text-emerald-400">
                        {lang === 'en' ? 'Verified Account' : 'የተረጋገጠ ሂሳብ'}
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-base sm:text-lg font-black tracking-wider text-slate-900 dark:text-white select-all">
                        {account.accountNumber}
                      </span>

                      <button
                        id={`copy-btn-${account.id}`}
                        onClick={() => handleCopy(account.id, account.accountNumber)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-2xs ${
                          isCopied
                            ? 'bg-emerald-600 text-white'
                            : 'bg-blue-600 hover:bg-blue-700 text-white'
                        }`}
                        aria-label="Copy account number"
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>{t.accountCopied}</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>{t.copyAccountBtn}</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Account Name */}
                  <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                    <span className="font-semibold text-slate-500 block text-[10px] uppercase">
                      {t.accountHolderLabel}:
                    </span>
                    <span className="font-medium text-slate-800 dark:text-slate-200">
                      {account.accountHolder}
                    </span>
                  </div>
                </div>

                {/* Card footer verification */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-medium">
                    {account.id === 'telebirr' ? 'Instant SMS confirmation' : 'Online / App / Counter'}
                  </span>
                  <button
                    onClick={() => handleCopy(account.id, account.accountNumber)}
                    className="text-xs text-blue-600 dark:text-blue-400 hover:underline font-semibold cursor-pointer"
                  >
                    {isCopied ? 'Copied' : 'Copy Number'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Fast Action Prompt */}
        <div className="text-center p-8 rounded-3xl bg-slate-900 text-white dark:bg-slate-900/60 dark:border dark:border-slate-800 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
            <Phone className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Telegram & Call Confirmation Hotline: 0937450712' : 'የቴሌግራም እና ስልክ ማረጋገጫ መስመር፡ 0937450712'}</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold">
            {lang === 'en'
              ? 'Ready to Begin Your SPSS Training or Thesis Assistance?'
              : 'የSPSS ስልጠናዎን ወይም የቴሲስ ድጋፍዎን ለመጀመር ዝግጁ ነዎት?'}
          </h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            {lang === 'en'
              ? 'Transfer to any of our verified accounts above and submit your reference code to reserve your seat in the upcoming cohort.'
              : 'ከላይ ከተዘረዘሩት የባንክ ወይም የቴሌብር ሂሳቦች በአንዱ ክፍያ ፈጽመው የማረጋገጫ ቁጥሩን በማስገባት ቦታዎን አሁኑኑ ያስይዙ።'}
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              id="payment-confirm-register-btn"
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>{t.quickEnrollBtn}</span>
            </button>

            <a
              href="https://t.me/ethiopiahulu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-colors"
            >
              <ExternalLink className="w-4 h-4 text-blue-400" />
              <span>{lang === 'en' ? 'Send Receipt on Telegram' : 'ደረሰኙን በቴሌግራም ይላኩ'}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
