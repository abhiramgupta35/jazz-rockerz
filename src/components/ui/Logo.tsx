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
      className={`group inline-flex items-center gap-2 select-none focus:outline-none ${className}`}
      aria-label="JazzRockers Academy Home"
    >
      <div className="relative flex items-center justify-center w-12 h-12 shrink-0">
        <svg viewBox="0 0 100 100" className="w-full h-full text-[#E91E73]">
           <polygon points="50,5 61,39 97,39 68,59 79,93 50,72 21,93 32,59 3,39 39,39" fill="none" stroke="currentColor" strokeWidth="4"/>
           <path d="M50 20 Q 55 35 65 40 Q 55 50 55 70 Q 45 50 45 40 Q 35 35 50 20 Z" fill={iconFill}/>
        </svg>
      </div>

      <div className="flex flex-col leading-none">
        <div className={`flex items-baseline tracking-tighter font-extrabold text-3xl ${textColor}`}>
          <span className={`font-light ${isLight ? "text-[#E91E73]" : ""}`}>JAZZ</span>
          <span>ROCKERS</span>
        </div>
        {showTagline && (
          <span className={`text-[10px] font-medium tracking-wide ${isLight ? "text-gray-300" : "text-gray-600"} mt-1`}>
            Dance · Music · Gymnastics · Fine Arts
          </span>
        )}
      </div>
    </Link>
  );
};
