"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const Achievements: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 lg:py-24 bg-white relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative rounded-[2rem] overflow-hidden bg-[#1a083a] text-white flex flex-col md:flex-row min-h-[420px]"
        >
          
          {/* Right Background Image */}
          <div className="absolute inset-y-0 right-0 w-full md:w-[65%] z-0">
            <Image
              src="/images/ACHIEVEMENTS THAT INSPIRE.webp"
              alt="Achievements"
              fill
              className="object-cover object-right lg:object-center"
            />
            {/* Gradient to blend with background on the left side of the image */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a083a] via-[#1a083a]/80 to-transparent w-full md:w-3/4" />
          </div>

          {/* Content */}
          <div className="relative z-10 w-full lg:w-3/4 p-10 md:p-14 flex flex-col justify-center">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-3xl md:text-5xl font-black tracking-tight mb-12 uppercase"
            >
              ACHIEVEMENTS THAT <span className="text-[#E91E73]">INSPIRE</span>
            </motion.h2>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="flex flex-wrap md:flex-nowrap gap-6 md:gap-0"
            >
              {/* Stat 1 */}
              <motion.div variants={statVariants} className="flex-1 border-l border-white/20 first:border-l-0 pl-0 md:pl-4 first:pl-0 flex flex-col items-center text-center">
                <svg className="w-12 h-12 text-[#E91E73] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                <div className="text-3xl font-bold mb-1">20+</div>
                <div className="text-sm text-gray-300 font-medium">Programs</div>
              </motion.div>

              {/* Stat 2 */}
              <motion.div variants={statVariants} className="flex-1 border-l border-white/20 pl-0 md:pl-4 flex flex-col items-center text-center">
                <svg className="w-12 h-12 text-[#E91E73] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                <div className="text-3xl font-bold mb-1">5000+</div>
                <div className="text-sm text-gray-300 font-medium">Students</div>
              </motion.div>

              {/* Stat 3 */}
              <motion.div variants={statVariants} className="flex-1 border-l border-white/20 pl-0 md:pl-4 flex flex-col items-center text-center">
                <svg className="w-12 h-12 text-[#E91E73] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                <div className="text-3xl font-bold mb-1">100+</div>
                <div className="text-sm text-gray-300 font-medium whitespace-nowrap">Expert Coaches</div>
              </motion.div>

              {/* Stat 4 */}
              <motion.div variants={statVariants} className="flex-1 border-l border-white/20 pl-0 md:pl-4 flex flex-col items-center text-center">
                <svg className="w-12 h-12 text-[#E91E73] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 11l1.5 3 3 .5-2.5 2 .5 3-2.5-1.5-2.5 1.5.5-3-2.5-2 3-.5z" /></svg>
                <div className="text-3xl font-bold mb-1">100+</div>
                <div className="text-sm text-gray-300 font-medium whitespace-nowrap">Events &<br/>Stage Shows</div>
              </motion.div>

              {/* Stat 5 */}
              <motion.div variants={statVariants} className="flex-1 border-l border-white/20 pl-0 md:pl-4 flex flex-col items-center text-center">
                <svg className="w-12 h-12 text-[#E91E73] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <div className="text-[1.35rem] font-bold mb-1 leading-tight flex items-center h-[36px]">International</div>
                <div className="text-sm text-gray-300 font-medium">Competitions</div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
