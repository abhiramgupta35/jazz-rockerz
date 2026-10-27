"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { PROGRAMS } from "@/lib/data/programs";
import { trackEvent } from "@/lib/analytics";
import { useModal } from "@/context/ModalContext";

export const ProgramsSection: React.FC = () => {
  const { openBrochureModal } = useModal();

  const handleLearnMore = (program: typeof PROGRAMS[0]) => {
    trackEvent("brochure_open", { source: "programs_section", program: program.slug });
    openBrochureModal();
  };

  return (
    <section className="pt-4 sm:pt-6 lg:pt-8 pb-6 sm:pb-8 lg:pb-10 relative overflow-hidden" id="programs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="World-Class Curriculum"
          title="OUR PROGRAMS"
          highlightWord="PROGRAMS"
          subtitle="Comprehensive, age-tailored artistic disciplines taught by passionate master educators."
        />

        {/* 4 Large Interactive Program Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {PROGRAMS.map((prog, index) => (
            <motion.div
              key={prog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container with Zoom on Hover */}
              <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-brand-secondary">
                <Image
                  src={prog.heroImage}
                  alt={`${prog.name} classes at Jazzrockers`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-out"
                />

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Tag / Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-white/95 text-brand-secondary shadow-md">
                    {prog.name}
                  </span>
                </div>

                {/* Title overlay on bottom of image */}
                <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white flex items-center gap-1.5">
                    {prog.name}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                {/* Sub programs checklist */}
                <div className="space-y-2">
                  <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                    Featured Disciplines
                  </div>
                  <ul className="space-y-1.5 text-sm text-gray-700">
                    {prog.subPrograms.map((sub) => (
                      <li key={sub} className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-primary-50 text-brand-primary flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className="font-medium text-gray-800">{sub}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="pt-2">
                  <button
                    onClick={() => handleLearnMore(prog)}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-primary-50 hover:bg-brand-primary text-brand-primary hover:text-white font-extrabold text-sm transition-all duration-200 group-hover:bg-brand-primary group-hover:text-white group-hover:shadow-primary"
                  >
                    <span>LEARN MORE</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
