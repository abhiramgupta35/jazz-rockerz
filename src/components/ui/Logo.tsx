import React from "react";
import Link from "next/link";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = "dark",
  className = "",
  showTagline = true,
}) => {
  const isLight = variant === "light";
  const textColor = isLight ? "text-white" : "text-black";
  const iconFill = isLight ? "white" : "black";

  return (
    <Link
      href="/"
      className={`group inline-flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3 select-none focus:outline-none ${className}`}
      aria-label="JazzRockers Academy Home"
    >
      <div className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 shrink-0 bg-brand-primary rounded-xl p-2">
        {/* Placeholder for the Kangaroo logo */}
        <svg viewBox="0 0 100 100" className="w-full h-full text-white">
           <path d="M50 20 Q 55 35 65 40 Q 55 50 55 70 Q 45 50 45 40 Q 35 35 50 20 Z" fill="currentColor"/>
        </svg>
      </div>

      <div className="flex flex-col leading-none items-center sm:items-start justify-center pt-1">
        <div className={`tracking-tight font-bold text-2xl sm:text-3xl text-brand-secondary`}>
          jazzrockers
        </div>
        {showTagline && (
          <span className={`text-[8px] sm:text-[9px] font-bold tracking-[0.15em] sm:tracking-[0.2em] text-brand-primary mt-1.5 uppercase`}>
            Dance | Music | Finearts | Fitness
          </span>
        )}
      </div>
    </Link>
  );
};
