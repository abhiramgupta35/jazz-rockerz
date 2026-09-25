"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FreeTrialForm } from "../forms/FreeTrialForm";

export const Hero: React.FC = () => {
  const benefits = [
    "20+ Professional Programs",
    "Certified & Experienced Coaches",
    "State-of-the-art Studios",
    "International Performances",
    "Ages 4 Years & Above",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-16 lg:py-40">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Hero-Dance.webp"
          alt="Hero Dance"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Dark gradient overlay on the left for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4 text-left"
          >
            <motion.h1 variants={itemVariants} className="text-5xl md:text-[5.5rem] font-extrabold text-white tracking-tight leading-[1]">
              DISCOVER <br />
              YOUR CHILD&apos;S <br />
              <span className="text-[#E31E24]">HIDDEN TALENT</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-xl md:text-[1.35rem] text-white font-medium max-w-[500px] leading-tight pb-2">
              The UAE&apos;s Leading Academy for Dance, Music, Gymnastics & Fine Arts
            </motion.p>

            <motion.ul variants={itemVariants} className="space-y-3 pt-2 text-white text-[15px] font-bold tracking-wide">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#E31E24] flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>{benefit}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div variants={itemVariants} className="pt-8 flex items-center gap-4">
              <div className="flex -space-x-3">
                <Image src="/images/i (1).webp" alt="Student" width={44} height={44} className="rounded-full border-2 border-white object-cover w-11 h-11" />
                <Image src="/images/i (2).webp" alt="Student" width={44} height={44} className="rounded-full border-2 border-white object-cover w-11 h-11" />
                <Image src="/images/i (3).webp" alt="Student" width={44} height={44} className="rounded-full border-2 border-white object-cover w-11 h-11" />
                <Image src="/images/i (4).webp" alt="Student" width={44} height={44} className="rounded-full border-2 border-white object-cover w-11 h-11" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-sm tracking-wide">1000+ Happy Students</span>
                <div className="flex items-center gap-2 text-gray-300 text-[13px]">
                  <span>Rated 4.9 Stars on Google</span>
                  <div className="flex -space-x-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="flex justify-end lg:pr-6"
          >
            <FreeTrialForm className="w-full max-w-[440px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
