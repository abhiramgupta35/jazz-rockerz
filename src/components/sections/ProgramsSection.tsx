"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, X, Calendar, Users, Star, Target } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { PROGRAMS } from "@/lib/data/programs";
import { trackEvent } from "@/lib/analytics";
import { useModal } from "@/context/ModalContext";

export const ProgramsSection: React.FC = () => {
  const [selectedProgram, setSelectedProgram] = useState<typeof PROGRAMS[0] | null>(null);
  const { openModal } = useModal();

  useEffect(() => {
    if (selectedProgram) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProgram]);

  const handleLearnMore = (program: typeof PROGRAMS[0]) => {
    trackEvent("program_view_modal", { program: program.slug });
    setSelectedProgram(program);
  };

  const handleBookTrial = () => {
    setSelectedProgram(null);
    openModal();
  };

  return (
    <section className="py-20 lg:py-24 bg-white relative overflow-hidden" id="programs">
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
              <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-brand-purple">
                <Image
                  src={prog.heroImage}
                  alt={`${prog.name} classes at JazzRockers`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-out"
                />

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Tag / Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-white/95 text-brand-purple shadow-md">
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
                        <div className="w-4 h-4 rounded-full bg-pink-50 text-brand-pink flex items-center justify-center shrink-0">
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
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-pink-50 hover:bg-brand-pink text-brand-pink hover:text-white font-extrabold text-sm transition-all duration-200 group-hover:bg-brand-pink group-hover:text-white group-hover:shadow-pink"
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

      {/* Program Detailed Modal */}
      <AnimatePresence>
        {selectedProgram && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative scrollbar-hide"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProgram(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header Image */}
              <div className="relative h-64 sm:h-80 w-full bg-gray-900 overflow-hidden">
                <Image
                  src={selectedProgram.heroImage}
                  alt={selectedProgram.name}
                  fill
                  className="object-cover object-center opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mb-2" style={{ color: selectedProgram.accentColor || '#E91E73' }}>
                    {selectedProgram.name}
                  </h2>
                  <p className="text-lg sm:text-xl font-medium text-gray-200">
                    {selectedProgram.tagline}
                  </p>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-10">
                <p className="text-gray-600 text-lg leading-relaxed mb-10">
                  {selectedProgram.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                  {/* Highlights/Features */}
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <div className="flex items-center gap-3 mb-4">
                      <Star className="w-6 h-6 text-[#E91E73]" />
                      <h4 className="text-lg font-bold text-gray-900">Program Highlights</h4>
                    </div>
                    <ul className="space-y-3">
                      {selectedProgram.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-[#E91E73] shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <div className="flex items-center gap-3 mb-4">
                      <Target className="w-6 h-6 text-[#E91E73]" />
                      <h4 className="text-lg font-bold text-gray-900">Key Benefits</h4>
                    </div>
                    <ul className="space-y-3">
                      {selectedProgram.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-[#E91E73] shrink-0 mt-0.5" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                  {/* Age Groups */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Users className="w-6 h-6 text-[#E91E73]" />
                      <h4 className="text-lg font-bold text-gray-900">Age Groups</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedProgram.ageGroups.map((age, i) => (
                        <span key={i} className="px-4 py-2 bg-pink-50 text-[#E91E73] rounded-full text-sm font-semibold border border-pink-100">
                          {age}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Schedule */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Calendar className="w-6 h-6 text-[#E91E73]" />
                      <h4 className="text-lg font-bold text-gray-900">Schedule</h4>
                    </div>
                    <p className="text-gray-700 font-medium">
                      {selectedProgram.schedule}
                    </p>
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">Ready to get started?</h4>
                    <p className="text-sm text-gray-500">Secure your spot in our upcoming batches today.</p>
                  </div>
                  <button
                    onClick={handleBookTrial}
                    className="w-full sm:w-auto bg-[#E91E73] hover:bg-pink-600 text-white px-8 py-4 rounded-full font-bold tracking-wide transition-all duration-300 shadow-lg shadow-pink-200 transform hover:-translate-y-1"
                  >
                    BOOK A FREE TRIAL
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
