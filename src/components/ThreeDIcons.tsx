import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

// 1. 3D SPSS / Statistical Analytics Cube
export const Icon3DSPSS: React.FC<IconProps> = ({ className = '', size = 64 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`drop-shadow-lg filter transition-transform duration-300 hover:scale-105 ${className}`}
  >
    <defs>
      {/* Gradients for Isometric Cube */}
      <linearGradient id="spssTop" x1="50" y1="12" x2="88" y2="34" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#38BDF8" />
        <stop offset="100%" stopColor="#0284C7" />
      </linearGradient>
      <linearGradient id="spssLeft" x1="12" y1="34" x2="50" y2="90" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0369A1" />
        <stop offset="100%" stopColor="#075985" />
      </linearGradient>
      <linearGradient id="spssRight" x1="50" y1="34" x2="88" y2="90" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0284C7" />
        <stop offset="100%" stopColor="#0C4A6E" />
      </linearGradient>
      <linearGradient id="spssGoldBar" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FCD34D" />
        <stop offset="100%" stopColor="#F59E0B" />
      </linearGradient>
      <linearGradient id="spssEmeraldBar" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#34D399" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
      <linearGradient id="spssRoseBar" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FB7185" />
        <stop offset="100%" stopColor="#E11D48" />
      </linearGradient>
      <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#0284C7" floodOpacity="0.35" />
      </filter>
    </defs>

    <g filter="url(#softGlow)">
      {/* Isometric Base Cube */}
      {/* Top Face */}
      <polygon points="50,14 86,33 50,52 14,33" fill="url(#spssTop)" />
      {/* Left Face */}
      <polygon points="14,33 50,52 50,86 14,67" fill="url(#spssLeft)" />
      {/* Right Face */}
      <polygon points="50,52 86,33 86,67 50,86" fill="url(#spssRight)" />

      {/* 3D Floating Analytical Columns Rising from Top */}
      {/* Column 1 (Rose) */}
      <polygon points="32,24 40,20 40,32 32,36" fill="#F43F5E" />
      <polygon points="40,20 46,23 46,35 40,32" fill="#BE123C" />
      <polygon points="32,24 40,20 46,23 38,27" fill="#FDA4AF" />

      {/* Column 2 (Gold) */}
      <polygon points="44,17 54,12 54,32 44,37" fill="#FBBF24" />
      <polygon points="54,12 62,16 62,36 54,32" fill="#D97706" />
      <polygon points="44,17 54,12 62,16 52,21" fill="#FDE68A" />

      {/* Column 3 (Emerald) */}
      <polygon points="58,23 68,18 68,36 58,41" fill="#34D399" />
      <polygon points="68,18 74,21 74,39 68,36" fill="#047857" />
      <polygon points="58,23 68,18 74,21 64,26" fill="#A7F3D0" />

      {/* Front Face Text / Indicator */}
      <text x="32" y="72" fill="#BAE6FD" fontSize="11" fontWeight="bold" fontFamily="monospace">
        Σy
      </text>
      <text x="60" y="72" fill="#7DD3FC" fontSize="11" fontWeight="bold" fontFamily="monospace">
        R²
      </text>

      {/* Gloss Highlight Line */}
      <line x1="50" y1="14" x2="50" y2="86" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
    </g>
  </svg>
);

// 2. 3D STATA / Econometrics Cylinder
export const Icon3DStata: React.FC<IconProps> = ({ className = '', size = 64 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`drop-shadow-lg filter transition-transform duration-300 hover:scale-105 ${className}`}
  >
    <defs>
      <linearGradient id="stataTop" x1="20" y1="15" x2="80" y2="35">
        <stop offset="0%" stopColor="#1E40AF" />
        <stop offset="100%" stopColor="#3B82F6" />
      </linearGradient>
      <linearGradient id="stataBody" x1="20" y1="30" x2="80" y2="85">
        <stop offset="0%" stopColor="#1E3A8A" />
        <stop offset="50%" stopColor="#2563EB" />
        <stop offset="100%" stopColor="#172554" />
      </linearGradient>
      <linearGradient id="stataLine" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#EF4444" />
      </linearGradient>
    </defs>
    <g>
      {/* 3D Cylinder Lower Disk */}
      <path d="M20,60 C20,70 80,70 80,60 L80,75 C80,85 20,85 20,75 Z" fill="#1E3A8A" opacity="0.9" />
      {/* 3D Cylinder Main Body */}
      <path d="M20,30 L80,30 L80,65 C80,75 20,75 20,65 Z" fill="url(#stataBody)" />
      {/* 3D Top Oval */}
      <ellipse cx="50" cy="30" rx="30" ry="12" fill="url(#stataTop)" />
      <ellipse cx="50" cy="30" rx="26" ry="9" fill="#1D4ED8" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />

      {/* Econometric Trend Line in 3D */}
      <path
        d="M26,58 Q38,42 50,54 T74,40"
        stroke="url(#stataLine)"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Scatter Points */}
      <circle cx="34" cy="50" r="3" fill="#FDE68A" />
      <circle cx="48" cy="56" r="3" fill="#FDE68A" />
      <circle cx="62" cy="46" r="3" fill="#FDE68A" />
      <circle cx="74" cy="40" r="4" fill="#EF4444" />
    </g>
  </svg>
);

// 3. 3D Qualitative NVivo / Research Node
export const Icon3DNVivo: React.FC<IconProps> = ({ className = '', size = 64 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`drop-shadow-lg filter transition-transform duration-300 hover:scale-105 ${className}`}
  >
    <defs>
      <linearGradient id="nvivoPurple" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#A855F7" />
        <stop offset="100%" stopColor="#6B21A8" />
      </linearGradient>
      <linearGradient id="nvivoCyan" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#06B6D4" />
        <stop offset="100%" stopColor="#0E7490" />
      </linearGradient>
    </defs>
    {/* 3D Open Book / Qualitative Nodes */}
    <g>
      {/* Left Page (3D tilted) */}
      <polygon points="50,22 18,32 18,72 50,62" fill="url(#nvivoPurple)" />
      {/* Right Page */}
      <polygon points="50,22 82,32 82,72 50,62" fill="#7E22CE" />
      {/* Spine depth */}
      <polygon points="47,63 53,63 53,75 47,75" fill="#581C87" />

      {/* Floating 3D Thematic Nodes */}
      <circle cx="34" cy="44" r="7" fill="url(#nvivoCyan)" />
      <circle cx="66" cy="42" r="8" fill="#F59E0B" />
      <circle cx="50" cy="36" r="6" fill="#10B981" />

      {/* Interconnecting Links */}
      <line x1="34" y1="44" x2="50" y2="36" stroke="white" strokeWidth="2" opacity="0.8" />
      <line x1="50" y1="36" x2="66" y2="42" stroke="white" strokeWidth="2" opacity="0.8" />
      <line x1="34" y1="44" x2="66" y2="42" stroke="white" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.6" />
    </g>
  </svg>
);

// 4. 3D Python & R Data Science Hexagon
export const Icon3DPythonR: React.FC<IconProps> = ({ className = '', size = 64 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`drop-shadow-lg filter transition-transform duration-300 hover:scale-105 ${className}`}
  >
    <defs>
      <linearGradient id="pyBlue" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#38BDF8" />
        <stop offset="100%" stopColor="#0284C7" />
      </linearGradient>
      <linearGradient id="pyYellow" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FDE047" />
        <stop offset="100%" stopColor="#EAB308" />
      </linearGradient>
    </defs>
    {/* 3D Isometric Hexagon Prism */}
    <polygon points="50,14 82,32 82,68 50,86 18,68 18,32" fill="#0F172A" />
    <polygon points="50,14 82,32 50,50 18,32" fill="url(#pyBlue)" />
    <polygon points="18,32 50,50 50,86 18,68" fill="#0369A1" />
    <polygon points="50,50 82,32 82,68 50,86" fill="url(#pyYellow)" />

    {/* Center Code Symbol in 3D */}
    <text x="50" y="55" fill="#0F172A" fontSize="18" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
      &lt;/&gt;
    </text>
  </svg>
);

// 5. 3D Thesis / Dissertation Academic Document
export const Icon3DDocument: React.FC<IconProps> = ({ className = '', size = 64 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`drop-shadow-lg filter transition-transform duration-300 hover:scale-105 ${className}`}
  >
    <defs>
      <linearGradient id="docGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#E2E8F0" />
      </linearGradient>
      <linearGradient id="ribbonGold" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#B45309" />
      </linearGradient>
    </defs>
    {/* 3D Stack of Research Chapters */}
    <polygon points="28,82 78,82 78,88 28,88" fill="#94A3B8" />
    <polygon points="25,76 75,76 75,82 25,82" fill="#CBD5E1" />

    {/* Top Hardcover Thesis */}
    <rect x="22" y="16" width="56" height="60" rx="4" fill="url(#docGrad)" stroke="#CBD5E1" strokeWidth="2" />
    {/* Navy Spine */}
    <rect x="22" y="16" width="10" height="60" rx="2" fill="#0F172A" />

    {/* Document Text Lines */}
    <line x1="38" y1="28" x2="68" y2="28" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
    <line x1="38" y1="36" x2="64" y2="36" stroke="#64748B" strokeWidth="2" strokeLinecap="round" />
    <line x1="38" y1="44" x2="68" y2="44" stroke="#64748B" strokeWidth="2" strokeLinecap="round" />
    <line x1="38" y1="52" x2="56" y2="52" stroke="#64748B" strokeWidth="2" strokeLinecap="round" />

    {/* Gold Academic Wax Seal */}
    <circle cx="62" cy="62" r="10" fill="url(#ribbonGold)" />
    <polygon points="58,68 62,78 66,68" fill="#B45309" />
  </svg>
);

// 6. 3D Graduation Cap
export const Icon3DGraduation: React.FC<IconProps> = ({ className = '', size = 64 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`drop-shadow-lg filter transition-transform duration-300 hover:scale-105 ${className}`}
  >
    <defs>
      <linearGradient id="capGrad" x1="50" y1="18" x2="50" y2="52">
        <stop offset="0%" stopColor="#1E293B" />
        <stop offset="100%" stopColor="#0F172A" />
      </linearGradient>
    </defs>
    {/* Mortarboard Diamond Top in 3D */}
    <polygon points="50,18 88,34 50,50 12,34" fill="url(#capGrad)" />
    {/* Cap Depth edge */}
    <polygon points="12,34 50,50 50,54 12,38" fill="#020617" />
    <polygon points="50,50 88,34 88,38 50,54" fill="#334155" />

    {/* Skull cap beneath */}
    <path d="M30,44 C30,62 70,62 70,44" fill="#0F172A" stroke="#1E293B" strokeWidth="2" />

    {/* Gold Tassel */}
    <circle cx="50" cy="34" r="3.5" fill="#F59E0B" />
    <path d="M50,34 Q70,42 72,56" stroke="#F59E0B" strokeWidth="2.5" fill="none" />
    <rect x="70" y="56" width="4" height="10" rx="2" fill="#D97706" />
  </svg>
);

// 7. 3D Telebirr Mobile Phone & Floating Birr Coin
export const Icon3DTelebirr: React.FC<IconProps> = ({ className = '', size = 64 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`drop-shadow-lg filter transition-transform duration-300 hover:scale-105 ${className}`}
  >
    <defs>
      <linearGradient id="telePhone" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#005CB9" />
        <stop offset="100%" stopColor="#0284C7" />
      </linearGradient>
      <linearGradient id="birrCoin" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FCD34D" />
        <stop offset="100%" stopColor="#D97706" />
      </linearGradient>
    </defs>
    {/* 3D Angled Smartphone */}
    <polygon points="26,18 64,12 74,74 36,80" fill="#0284C7" />
    <polygon points="28,20 62,14 70,72 36,78" fill="#003D7A" />
    {/* Screen Display */}
    <polygon points="32,24 58,20 66,66 40,70" fill="url(#telePhone)" />

    {/* Telebirr 'T' / Mobile Pay Icon */}
    <text x="50" y="48" fill="white" fontSize="16" fontWeight="bold" textAnchor="middle" transform="rotate(6 50 48)">
      ETB
    </text>

    {/* 3D Floating Golden Coin */}
    <g transform="translate(16, 20)">
      <circle cx="56" cy="36" r="14" fill="url(#birrCoin)" stroke="#B45309" strokeWidth="1.5" />
      <ellipse cx="56" cy="36" rx="10" ry="10" fill="#FBBF24" />
      <text x="56" y="41" fill="#78350F" fontSize="13" fontWeight="bold" textAnchor="middle">
        ብር
      </text>
    </g>
  </svg>
);

// 8. 3D Commercial Bank of Ethiopia (CBE) Bank Card
export const Icon3DCBE: React.FC<IconProps> = ({ className = '', size = 64 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`drop-shadow-lg filter transition-transform duration-300 hover:scale-105 ${className}`}
  >
    <defs>
      <linearGradient id="cbeGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#84206B" />
        <stop offset="100%" stopColor="#4A0E4E" />
      </linearGradient>
      <linearGradient id="cbeGold" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#FDE68A" />
      </linearGradient>
    </defs>
    {/* 3D Floating Smart Payment Card */}
    <g transform="rotate(-6 50 50)">
      <rect x="14" y="24" width="72" height="48" rx="8" fill="url(#cbeGrad)" stroke="#A21CAF" strokeWidth="1.5" />
      {/* Gold Stripe Accent */}
      <rect x="14" y="36" width="72" height="7" fill="url(#cbeGold)" />
      {/* EMV Gold Chip in 3D */}
      <rect x="22" y="48" width="12" height="10" rx="2" fill="#FBBF24" stroke="#D97706" strokeWidth="1" />
      <text x="76" y="64" fill="#F59E0B" fontSize="9" fontWeight="bold" textAnchor="end" fontFamily="sans-serif">
        CBE
      </text>
      <circle cx="26" cy="30" r="3" fill="#F59E0B" />
    </g>
  </svg>
);

// 9. 3D Bank of Abyssinia Gold Vault
export const Icon3DAbyssinia: React.FC<IconProps> = ({ className = '', size = 64 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`drop-shadow-lg filter transition-transform duration-300 hover:scale-105 ${className}`}
  >
    <defs>
      <linearGradient id="boaGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#B45309" />
      </linearGradient>
    </defs>
    {/* 3D Bank Pillar Temple */}
    <polygon points="50,16 84,32 16,32" fill="url(#boaGrad)" />
    <rect x="22" y="32" width="8" height="34" rx="2" fill="#D97706" />
    <rect x="38" y="32" width="8" height="34" rx="2" fill="#F59E0B" />
    <rect x="54" y="32" width="8" height="34" rx="2" fill="#F59E0B" />
    <rect x="70" y="32" width="8" height="34" rx="2" fill="#D97706" />
    <polygon points="14,66 86,66 82,78 18,78" fill="#92400E" />
    <text x="50" y="54" fill="#78350F" fontSize="10" fontWeight="bold" textAnchor="middle">
      BoA
    </text>
  </svg>
);

// 10. 3D Awash Bank Emerald Shield
export const Icon3DAwash: React.FC<IconProps> = ({ className = '', size = 64 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`drop-shadow-lg filter transition-transform duration-300 hover:scale-105 ${className}`}
  >
    <defs>
      <linearGradient id="awashGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#10B981" />
        <stop offset="100%" stopColor="#047857" />
      </linearGradient>
    </defs>
    {/* 3D Emerald Shield */}
    <path d="M50,16 L80,28 C80,60 50,78 50,82 C50,78 20,60 20,28 Z" fill="url(#awashGrad)" />
    <path d="M50,22 L74,32 C74,58 50,72 50,74 C50,72 26,58 26,32 Z" fill="#065F46" />
    <path d="M38,48 L46,56 L64,38" stroke="#FDE68A" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

// 11. 3D Hibret Bank Card
export const Icon3DHibret: React.FC<IconProps> = ({ className = '', size = 64 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`drop-shadow-lg filter transition-transform duration-300 hover:scale-105 ${className}`}
  >
    <defs>
      <linearGradient id="hibretGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#EF4444" />
        <stop offset="100%" stopColor="#991B1B" />
      </linearGradient>
    </defs>
    {/* 3D Card with Intersecting Unity Circles */}
    <rect x="16" y="24" width="68" height="46" rx="7" fill="url(#hibretGrad)" stroke="#B91C1C" strokeWidth="1.5" />
    {/* Intersecting rings */}
    <circle cx="44" cy="46" r="14" stroke="#FBBF24" strokeWidth="3" fill="none" />
    <circle cx="56" cy="46" r="14" stroke="#F59E0B" strokeWidth="3" fill="none" />
    <text x="50" y="49" fill="white" fontSize="9" fontWeight="bold" textAnchor="middle">
      ህብረት
    </text>
  </svg>
);

// 12. 3D Questionnaire & Survey Tablet
export const Icon3DQuestionnaire: React.FC<IconProps> = ({ className = '', size = 64 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`drop-shadow-lg filter transition-transform duration-300 hover:scale-105 ${className}`}
  >
    <defs>
      <linearGradient id="tabGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#1E40AF" />
      </linearGradient>
    </defs>
    <rect x="22" y="16" width="56" height="68" rx="6" fill="url(#tabGrad)" stroke="#60A5FA" strokeWidth="2" />
    <rect x="28" y="22" width="44" height="52" rx="3" fill="#FFFFFF" />

    {/* Form Checkboxes and rating scale */}
    <rect x="32" y="30" width="6" height="6" rx="1.5" fill="#10B981" />
    <line x1="42" y1="33" x2="66" y2="33" stroke="#64748B" strokeWidth="2" />

    <rect x="32" y="42" width="6" height="6" rx="1.5" fill="#10B981" />
    <line x1="42" y1="45" x2="62" y2="45" stroke="#64748B" strokeWidth="2" />

    <rect x="32" y="54" width="6" height="6" rx="1.5" fill="#3B82F6" />
    <line x1="42" y1="57" x2="64" y2="57" stroke="#64748B" strokeWidth="2" />

    <circle cx="50" cy="79" r="2.5" fill="white" />
  </svg>
);
