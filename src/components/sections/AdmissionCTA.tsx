"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FreeTrialForm } from "../forms/FreeTrialForm";

export const AdmissionCTA: React.FC = () => {
  return (
    <section className="bg-[#260e44] text-white relative overflow-hidden mt-10" id="admissions">
      {/* Background Stars (simple SVGs to mimic pattern) */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <svg className="absolute top-8 left-1/4 w-32 h-32 text-[#E31E24]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
        <svg className="absolute bottom-4 left-10 w-48 h-48 text-[#E31E24]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
        <svg className="absolute top-1/3 right-[30%] w-40 h-40 text-[#9b59b6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full min-h-[550px] flex flex-col lg:flex-row items-center justify-between pt-16 pb-0 lg:py-0">
        
        {/* Left Column: Text and Icons */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full lg:w-[50%] flex flex-col justify-center py-6 lg:py-24 z-30"
        >
          <h2 className="text-3xl md:text-5xl lg:text-[4rem] font-black uppercase tracking-tight leading-[1.05] mb-2">
            ADMISSIONS <span className="text-[#E31E24]">OPEN!</span>
          </h2>
          <p className="text-[#fbbd08] text-lg lg:text-[1.35rem] font-bold mb-8 lg:mb-10 tracking-wide">
            Book Your FREE Trial Class Today!
          </p>

          <div className="flex flex-wrap md:flex-nowrap justify-between gap-y-6 lg:gap-y-0 items-start w-full max-w-[500px]">
            {/* Icon 1 */}
            <div className="flex flex-col items-center text-center px-1 w-1/2 md:w-auto">
              <svg className="w-8 h-8 lg:w-10 lg:h-10 text-[#E31E24] mb-2 lg:mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
              <span className="text-[13px] lg:text-[15px] font-bold leading-[1.3]">Free Trial<br/>Class</span>
            </div>
            
            <div className="hidden md:block w-px h-16 bg-white/25 mt-2"></div>

            {/* Icon 2 */}
            <div className="flex flex-col items-center text-center px-1 w-1/2 md:w-auto">
              <svg className="w-8 h-8 lg:w-10 lg:h-10 text-[#E31E24] mb-2 lg:mb-3 relative" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                <circle cx="15" cy="15" r="4" fill="#260e44" stroke="#E31E24" strokeWidth="2" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13v2l1.5 1.5" />
              </svg>
              <span className="text-[13px] lg:text-[15px] font-bold leading-[1.3]">Limited<br/>Seats</span>
            </div>

            <div className="hidden md:block w-px h-16 bg-white/25 mt-2"></div>

            {/* Icon 3 */}
            <div className="flex flex-col items-center text-center px-1 w-1/2 md:w-auto">
              <svg className="w-8 h-8 lg:w-10 lg:h-10 text-[#E31E24] mb-2 lg:mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 3v5h5" />
              </svg>
              <span className="text-[13px] lg:text-[15px] font-bold leading-[1.3]">Easy<br/>Registration</span>
            </div>

            <div className="hidden md:block w-px h-16 bg-white/25 mt-2"></div>

            {/* Icon 4 */}
            <div className="flex flex-col items-center text-center px-1 w-1/2 md:w-auto">
              <svg className="w-8 h-8 lg:w-10 lg:h-10 text-[#E31E24] mb-2 lg:mb-3 relative" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="text-[13px] lg:text-[15px] font-bold leading-[1.3]">All Ages<br/>Welcome</span>
            </div>
          </div>

          <div className="mt-12">
            <span className="text-[#E31E24] font-serif italic font-bold text-3xl transform -rotate-3 inline-block">
              Small Steps<br/>
              <span className="pl-6">Big Futures</span>
            </span>
            <div className="h-0.5 w-40 bg-[#E31E24] transform -rotate-3 mt-1 rounded-full"></div>
          </div>
        </motion.div>

        {/* Center Image (Absolutely Positioned) */}
        <div className="hidden lg:block absolute bottom-0 left-[55%] -translate-x-1/2 w-[800px] h-[850px] z-20 pointer-events-none">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full h-full relative"
          >
            <Image
              src="/images/Admission-Open.webp"
              alt="Student Pointing"
              fill
              className="object-contain object-bottom"
              priority
            />
          </motion.div>
        </div>

        {/* Mobile only image */}
        <div className="block lg:hidden w-full h-[250px] relative mt-6 mb-2 z-20 pointer-events-none">
          <Image
            src="/images/Admission-Open.webp"
            alt="Student Pointing"
            fill
            className="object-contain object-bottom"
          />
        </div>

        {/* Right Column: Form */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          className="w-full lg:w-[40%] flex items-center justify-center lg:justify-end py-10 lg:py-24 z-30"
        >
          <FreeTrialForm className="w-full max-w-[420px] shadow-2xl relative z-30" />
        </motion.div>

      </div>
    </section>
  );
};
