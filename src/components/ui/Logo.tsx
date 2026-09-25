import React from "react";
import Link from "next/link";

import Image from "next/image";

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
      className={`group inline-flex flex-row items-center gap-2 sm:gap-3 select-none focus:outline-none ${className}`}
      aria-label="JazzRockers Academy Home"
    >
      <div className="relative flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 shrink-0 bg-transparent rounded-xl p-1 overflow-hidden">
        <Image 
          src="/images/jazz-logo.webp"
          alt="JazzRockers Logo"
          fill
          className="object-contain"
          sizes="(max-width: 640px) 40px, 56px"
        />
      </div>

      <div className="flex flex-col leading-none items-start justify-center pt-1">
        <div className={`tracking-tight font-bold text-xl sm:text-3xl text-brand-secondary`}>
          jazzrockers
        </div>
        {showTagline && (
          <span className={`text-[7px] sm:text-[9px] font-bold tracking-[0.15em] sm:tracking-[0.2em] text-brand-primary mt-1.5 uppercase`}>
            Dance | Music | Finearts | Fitness
          </span>
        )}
      </div>
    </Link>
  );
};
