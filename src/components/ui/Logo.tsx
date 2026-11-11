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
}) => {
  const isLight = variant === "light";

  return (
    <Link
      href="/"
      className={`group inline-flex items-center select-none focus:outline-none focus:ring-2 focus:ring-brand-primary rounded-xl transition-opacity hover:opacity-95 ${className}`}
      aria-label="Jazzrockers Academy Home"
    >
      {isLight ? (
        // Footer Logo: JAZZROCKERS-LOGO
        <div className="relative">
          <Image
            src="/images/JAZZROCKERS-LOGO.png"
            alt="Jazzrockers Performing Arts Academy"
            width={190}
            height={141}
            className="w-36 sm:w-44 h-auto object-contain"
            sizes="(max-width: 640px) 144px, 176px"
          />
        </div>
      ) : (
        // Navbar Logo: JazzRockerzWeb
        <div className="relative">
          <Image
            src="/images/JazzRockerzWeb.png"
            alt="Jazzrockers Performing Arts Academy"
            width={210}
            height={51}
            priority
            className="h-8 sm:h-10 md:h-12 w-auto object-contain"
            sizes="(max-width: 640px) 150px, 210px"
          />
        </div>
      )}
    </Link>
  );
};
