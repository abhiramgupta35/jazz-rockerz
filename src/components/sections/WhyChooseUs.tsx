"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Sparkles,
  Trophy,
  Globe2,
  ShieldCheck,
  CalendarCheck,
  FileText,
  Download,
} from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";

export const WhyChooseUs: React.FC = () => {
  const cards = [
    {
      icon: <GraduationCap className="w-6 h-6 text-brand-primary" />,
      title: "Expert Coaches",
      desc: "Trained & certified instructors",
      badge: "Certified",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-brand-secondary" />,
      title: "Holistic Development",
      desc: "Builds confidence, discipline & creativity",
      badge: "Core Values",
    },
    {
      icon: <Trophy className="w-6 h-6 text-amber-500" />,
      title: "Performance",
      desc: "Stage exposure & annual mega events",
      badge: "Stage Ready",
    },
    {
      icon: <Globe2 className="w-6 h-6 text-blue-500" />,
      title: "International Opportunities",
      desc: "Competitions & global exposure",
      badge: "Global",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
      title: "Safe & Supportive Environment",
      desc: "Where every child feels at home",
      badge: "Child First",
    },
    {
      icon: <CalendarCheck className="w-6 h-6 text-rose-500" />,
      title: "Flexible Schedules",
      desc: "Weekday, weekend & evening batches",
      badge: "Convenient",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 relative overflow-hidden" id="why-choose-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Why JazzRockers"
          title="WHY PARENTS CHOOSE JAZZROCKERS"
          highlightWord="JAZZROCKERS"
          subtitle="Empowering the next generation with world-class performing arts instruction, confidence, and limitless imagination."
        />

        {/* 6 Cards Grid (Responsive: 1 col on xs, 2 on sm, 3 on md/lg, 6 on 2xl) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-5"
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl p-6 sm:p-5 border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-200">
                  <span className="group-hover:text-white transition-colors">
                    {card.icon}
                  </span>
                </div>
                <h3 className="text-base font-extrabold text-brand-secondary tracking-tight mb-1.5 leading-snug">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {card.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-primary">
                  {card.badge}
                </span>
                <span className="text-xs text-gray-300 group-hover:text-brand-primary transition-colors">
                  ★
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Live Brochure Download Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-10 sm:mt-12 bg-gradient-to-br from-[#1F265E] via-[#2B3582] to-[#1a2052] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 shadow-float relative overflow-hidden"
        >
          {/* Subtle ambient lighting */}
          <div
            className="absolute -right-16 -bottom-16 w-60 h-60 bg-brand-primary/20 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -left-16 -top-16 w-60 h-60 bg-brand-secondary-light/25 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
            {/* Left Content */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-5 max-w-2xl">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm flex items-center justify-center shrink-0 shadow-inner">
                <FileText className="w-7 h-7 sm:w-8 sm:h-8 text-brand-primary-light" />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-brand-primary-light border border-white/15 mb-2.5">
                  <span className="relative flex h-2 w-2" aria-hidden="true">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span>Official Academy Prospectus • 2025–26</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white leading-tight">
                  Want Full Curriculum, Schedules & Fee Details?
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-gray-200/90 leading-relaxed max-w-xl">
                  Download our complete school brochure for detailed course levels, age groups, batch timings, and campus locations across Dubai.
                </p>
              </div>
            </div>

            {/* Right Download Button */}
            <div className="shrink-0 w-full sm:w-auto">
              <a
                href="/JazzRockers_Brochure.pdf"
                download="JazzRockers_Brochure.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-brand-primary hover:bg-brand-primary-hover text-white font-bold text-sm sm:text-base shadow-primary hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-primary group cursor-pointer select-none"
                aria-label="Download JazzRockers Academy Brochure (PDF)"
              >
                <Download className="w-5 h-5 transition-transform duration-200 group-hover:translate-y-0.5 shrink-0" />
                <span>Download Brochure</span>
                <span className="text-[11px] font-semibold bg-black/20 px-2.5 py-0.5 rounded-full shrink-0">
                  PDF • 630 KB
                </span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
