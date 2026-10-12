"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface StatItem {
  icon: React.ReactNode;
  value: string;
  label: string;
  desktopLabel?: React.ReactNode;
  isSpecial?: boolean;
}

const stats: StatItem[] = [
  {
    icon: (
      <svg className="w-6 h-6 md:w-12 md:h-12 text-[#E31E24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    value: "20+",
    label: "Programs",
  },
  {
    icon: (
      <svg className="w-6 h-6 md:w-12 md:h-12 text-[#E31E24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    value: "5000+",
    label: "Students",
  },
  {
    icon: (
      <svg className="w-6 h-6 md:w-12 md:h-12 text-[#E31E24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    value: "100+",
    label: "Expert Coaches",
  },
  {
    icon: (
      <svg className="w-6 h-6 md:w-12 md:h-12 text-[#E31E24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 11l1.5 3 3 .5-2.5 2 .5 3-2.5-1.5-2.5 1.5.5-3-2.5-2 3-.5z" />
      </svg>
    ),
    value: "100+",
    label: "Events & Stage Shows",
    desktopLabel: (
      <>
        Events &<br />Stage Shows
      </>
    ),
  },

];

export const Achievements: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  return (
    <section className="py-10 sm:py-14 md:py-20 lg:py-24 relative" id="achievements">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative rounded-2xl sm:rounded-3xl lg:rounded-[2rem] overflow-hidden bg-[#1a083a] text-white flex flex-col md:flex-row min-h-0 md:min-h-[420px] shadow-xl"
        >
          {/* Right Background Image with responsive blending */}
          <div className="absolute inset-y-0 right-0 w-full md:w-[65%] z-0">
            <Image
              src="/images/achievements-inspire.webp"
              alt="Achievements"
              fill
              className="object-cover object-right lg:object-center opacity-30 md:opacity-100"
            />
            {/* Gradient to blend with background on the left and provide high text contrast on mobile */}
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#1a083a] via-[#1a083a]/95 md:via-[#1a083a]/80 to-[#1a083a]/70 md:to-transparent w-full md:w-3/4" />
          </div>

          {/* Content */}
          <div className="relative z-10 w-full lg:w-3/4 p-5 sm:p-8 md:p-14 flex flex-col justify-center">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight mb-5 sm:mb-8 md:mb-12 uppercase text-center sm:text-left"
            >
              ACHIEVEMENTS THAT <span className="text-[#E31E24]">INSPIRE</span>
            </motion.h2>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-2 gap-y-4 gap-x-2 sm:gap-x-4 md:flex md:flex-nowrap md:gap-0"
            >
              {stats.map((stat, idx) => {
                const isOddColMobile = idx % 2 === 0; // col 1 on mobile
                const isSpecial = stat.isSpecial;

                return (
                  <motion.div
                    key={idx}
                    variants={statVariants}
                    className={`
                      flex flex-col items-center text-center justify-center
                      ${isSpecial ? "col-span-2 border-t border-white/10 pt-3.5 mt-1 sm:pt-4 sm:mt-2" : ""}
                      ${!isSpecial && isOddColMobile ? "border-r border-white/10 pr-2 sm:pr-4" : ""}
                      ${!isSpecial && !isOddColMobile ? "pl-2 sm:pl-4" : ""}
                      md:border-t-0 md:pt-0 md:mt-0 md:pr-0 md:flex-1 md:border-l md:border-white/20 md:first:border-l-0 md:pl-4 md:first:pl-0
                    `}
                  >
                    {isSpecial ? (
                      /* Special row for mobile (International Competitions) - sleek horizontal lockup on mobile, columnar on desktop */
                      <div className="flex items-center justify-center gap-2.5 md:flex-col md:gap-0">
                        <div className="mb-0 md:mb-4 flex items-center justify-center">
                          {stat.icon}
                        </div>
                        <div className="text-sm sm:text-base md:text-[1.35rem] font-bold leading-tight md:mb-1 md:flex md:items-center md:h-[36px]">
                          International{" "}
                          <span className="md:hidden font-medium text-gray-300 ml-1">
                            Competitions
                          </span>
                        </div>
                        <div className="hidden md:block text-sm text-gray-300 font-medium">
                          Competitions
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="mb-1.5 sm:mb-2 md:mb-4 flex items-center justify-center">
                          {stat.icon}
                        </div>
                        <div className="text-2xl sm:text-3xl md:text-3xl font-extrabold text-white mb-0.5 md:mb-1 leading-tight">
                          {stat.value}
                        </div>
                        <div className="text-xs sm:text-sm text-gray-300 font-medium leading-tight">
                          <span className="md:hidden">{stat.label}</span>
                          <span className="hidden md:inline">{stat.desktopLabel || stat.label}</span>
                        </div>
                      </>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
