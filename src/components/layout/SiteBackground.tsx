import React from "react";

export const SiteBackground: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* 1. Base Studio Ambient Canvas */}
      <div className="absolute inset-0 bg-[#FAFAFC]" />

      {/* 2. Minimal Pattern Design with Subtle Brand Red & Blue Accents */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.8]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="minimalPattern"
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            {/* Soft Navy Micro-Dots */}
            <circle cx="24" cy="24" r="1.1" fill="#2B3582" fillOpacity="0.12" />
            <circle cx="0" cy="0" r="1" fill="#2B3582" fillOpacity="0.08" />
            <circle cx="48" cy="0" r="1" fill="#2B3582" fillOpacity="0.08" />
            <circle cx="0" cy="48" r="1" fill="#2B3582" fillOpacity="0.08" />
            <circle cx="48" cy="48" r="1" fill="#2B3582" fillOpacity="0.08" />

            {/* Minimal Brand Red Accent Cross */}
            <path
              d="M 24 6 L 24 10 M 22 8 L 26 8"
              stroke="#E31E24"
              strokeWidth="1"
              strokeOpacity="0.18"
              strokeLinecap="round"
            />

            {/* Minimal Brand Royal Blue Accent Cross */}
            <path
              d="M 48 30 L 48 34 M 46 32 L 50 32"
              stroke="#2B3582"
              strokeWidth="1"
              strokeOpacity="0.14"
              strokeLinecap="round"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#minimalPattern)" />
      </svg>

      {/* 3. Sleek Performing Arts Ribbon Waves (Subtle Accents in Gutters) */}
      <svg
        className="absolute w-full h-full inset-0 opacity-[0.4] preserve-3d animate-ribbon-float"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <defs>
          <linearGradient id="minimalRedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E31E24" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#E31E24" stopOpacity="0.0" />
          </linearGradient>

          <linearGradient id="minimalBlueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2B3582" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#2B3582" stopOpacity="0.0" />
          </linearGradient>
        </defs>

        {/* Left Gutter Waves */}
        <path
          d="M -60 220 C 140 160, 220 420, -30 620 C -200 750, 90 920, -50 1150"
          stroke="url(#minimalRedGradient)"
          strokeWidth="1.6"
          strokeDasharray="6 6"
          className="animate-ribbon-dash"
        />
        <path
          d="M -30 270 C 150 210, 240 460, 10 650"
          stroke="url(#minimalBlueGradient)"
          strokeWidth="1.2"
        />

        {/* Right Gutter Waves */}
        <path
          d="M 1950 160 C 1720 340, 1620 570, 1880 800 C 2060 980, 1750 1200, 1960 1420"
          stroke="url(#minimalBlueGradient)"
          strokeWidth="1.6"
          strokeDasharray="8 6"
          className="animate-ribbon-dash"
        />
        <path
          d="M 1920 200 C 1680 380, 1590 610, 1840 840"
          stroke="url(#minimalRedGradient)"
          strokeWidth="1.2"
        />
      </svg>

      {/* 4. Colorful Glowing Background Stars (Starbursts & Diamond Sparkles) */}

      {/* Golden Amber Star (Top Left) */}
      <div className="absolute top-[10%] left-1.5 sm:left-3 md:left-[3%] text-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.7)] animate-star-glow">
        <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5Z" />
        </svg>
      </div>

      {/* Electric Cyan Star (Top Right) */}
      <div
        className="absolute top-[14%] right-1.5 sm:right-3 md:right-[3.5%] text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.65)] animate-star-glow"
        style={{ animationDelay: "-1.5s" }}
      >
        <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5Z" />
        </svg>
      </div>

      {/* Vivid Coral-Red Star (Mid Left) */}
      <div
        className="absolute top-[36%] left-1.5 sm:left-2.5 md:left-[2.5%] text-[#FF2A54] drop-shadow-[0_0_10px_rgba(255,42,84,0.65)] animate-star-glow"
        style={{ animationDelay: "-2.8s" }}
      >
        <svg className="w-4.5 h-4.5 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5Z" />
        </svg>
      </div>

      {/* Royal Indigo/Blue Star (Mid Right) */}
      <div
        className="absolute top-[42%] right-1.5 sm:right-2.5 md:right-[2.5%] text-[#3B82F6] drop-shadow-[0_0_10px_rgba(59,130,246,0.65)] animate-star-glow"
        style={{ animationDelay: "-0.8s" }}
      >
        <svg className="w-5.5 h-5.5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5Z" />
        </svg>
      </div>

      {/* Radiant Violet Star (Lower Left) */}
      <div
        className="absolute top-[66%] left-1.5 sm:left-3 md:left-[3.5%] text-purple-500 drop-shadow-[0_0_10px_rgba(168,85,247,0.65)] animate-star-glow"
        style={{ animationDelay: "-2.2s" }}
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5Z" />
        </svg>
      </div>

      {/* Hot Pink / Magenta Star (Lower Right) */}
      <div
        className="absolute top-[72%] right-1.5 sm:right-3.5 md:right-[4%] text-pink-500 drop-shadow-[0_0_10px_rgba(236,72,153,0.65)] animate-star-glow"
        style={{ animationDelay: "-1.8s" }}
      >
        <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5Z" />
        </svg>
      </div>

      {/* Emerald Green Star (Bottom Center-Left) */}
      <div
        className="absolute top-[88%] left-1.5 sm:left-4 md:left-[4.5%] text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.65)] animate-star-glow"
        style={{ animationDelay: "-3.2s" }}
      >
        <svg className="w-4.5 h-4.5 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5Z" />
        </svg>
      </div>

      {/* Vivid Tangerine Sparkle Star (Bottom Right) */}
      <div
        className="absolute top-[92%] right-1.5 sm:right-4 md:right-[3.5%] text-orange-400 drop-shadow-[0_0_10px_rgba(251,146,60,0.65)] animate-star-glow"
        style={{ animationDelay: "-1.1s" }}
      >
        <svg className="w-4.5 h-4.5 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5Z" />
        </svg>
      </div>

      {/* 5. Fun Performing Arts Elements (Music Notes & Rhythm Accents) */}

      {/* Floating Beamed Music Notes (♫) in Violet - Near Hero / Why Choose Us */}
      <div className="absolute top-[22%] left-1 sm:left-3 md:left-[4.5%] text-indigo-500/85 drop-shadow-[0_0_8px_rgba(99,102,241,0.55)] animate-float-gentle">
        <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3v9.28a4.39 4.39 0 0 0-1.5-.28C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21c2.31 0 4.2-1.75 4.45-4H15V6h4V3h-7z" />
        </svg>
      </div>

      {/* Floating Single Eighth Music Note (♪) in Amber - Upper Right */}
      <div
        className="absolute top-[26%] right-1 sm:right-3 md:right-[4%] text-amber-500/85 drop-shadow-[0_0_8px_rgba(245,158,11,0.55)] animate-float-reverse"
        style={{ animationDelay: "-2s" }}
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
        </svg>
      </div>

      {/* Fun Geometric Rhythm Ring in Electric Coral - Mid Left */}
      <div
        className="absolute top-[50%] left-1 sm:left-3 md:left-[4%] text-[#FF5722]/75 animate-float-gentle"
        style={{ animationDelay: "-3.5s" }}
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.2" strokeDasharray="3 3" />
          <circle cx="12" cy="12" r="3" fill="currentColor" />
        </svg>
      </div>

      {/* Floating Single Music Note (♪) in Emerald Mint - Mid Right */}
      <div
        className="absolute top-[56%] right-1 sm:right-3 md:right-[3.5%] text-emerald-500/85 drop-shadow-[0_0_8px_rgba(16,185,129,0.55)] animate-float-reverse"
        style={{ animationDelay: "-1.2s" }}
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
        </svg>
      </div>

      {/* Floating Arts Sparkle / Palette Burst in Magenta - Lower Left */}
      <div
        className="absolute top-[80%] left-1 sm:left-2.5 md:left-[3%] text-pink-500/85 drop-shadow-[0_0_8px_rgba(236,72,153,0.55)] animate-float-gentle"
        style={{ animationDelay: "-4s" }}
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="3.5" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2.2 2.2M16.8 16.8l2.2 2.2M5 19l2.2-2.2M16.8 7.2l2.2-2.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      {/* Floating Beamed Music Notes (♫) in Cyan - Lower Right */}
      <div
        className="absolute top-[84%] right-1 sm:right-2.5 md:right-[3%] text-cyan-500/85 drop-shadow-[0_0_8px_rgba(6,182,212,0.55)] animate-float-reverse"
        style={{ animationDelay: "-2.5s" }}
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3v9.28a4.39 4.39 0 0 0-1.5-.28C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21c2.31 0 4.2-1.75 4.45-4H15V6h4V3h-7z" />
        </svg>
      </div>
    </div>
  );
};
