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
      icon: <Sparkles className="w-6 h-6 text-blue-" />,
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
    <section className="py-20 bg-gray-50/70 relative overflow-hidden">
      {/* Decorative subtle ambient circle */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-red-/40 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

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
      </div>
    </section>
  );
};
