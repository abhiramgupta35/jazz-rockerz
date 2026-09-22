"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Sparkles,
  Clock,
  Users,
  Award,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  Star,
} from "lucide-react";
import { ProgramItem } from "@/lib/types";
import { SectionHeading } from "../ui/SectionHeading";
import { FreeTrialForm } from "../forms/FreeTrialForm";
import { Button } from "../ui/Button";
import { useModal } from "@/context/ModalContext";

interface ProgramDetailViewProps {
  program: ProgramItem;
}

const FAQS = [
  {
    q: "At what age can my child join this program?",
    a: "We welcome children starting from 2.5 years of age up to teenagers and advanced young adults. Batches are strictly segregated by age and skill level.",
  },
  {
    q: "Is the Free Trial class really 100% free?",
    a: "Yes! There is absolutely no registration fee or commitment for the trial. You and your child can experience the coach, the studio, and the curriculum firsthand.",
  },
  {
    q: "Are the coaches certified?",
    a: "All JazzRockers instructors hold accredited certifications and have extensive experience both in youth education and competitive/stage performance.",
  },
  {
    q: "Can I choose my preferred branch and timing?",
    a: "Yes, we have branches across Al Nahda, Karama, Mirdif, JLT, and International City offering weekday afternoon, evening, and weekend slots.",
  },
];

export const ProgramDetailView: React.FC<ProgramDetailViewProps> = ({ program }) => {
  const { openModal } = useModal();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-white">
      {/* 1. Program Hero */}
      <section className="relative min-h-[500px] lg:min-h-[550px] flex items-center bg-gradient-to-br from-[#120024] via-[#1E0038] to-[#2B0050] text-white overflow-hidden py-16">
        <div className="absolute inset-0 z-0 opacity-25 mix-blend-luminosity">
          <Image
            src={program.heroImage}
            alt={program.name}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-pink/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-pink-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-brand-pink" />
                <span>JazzRockers Academy Program</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-none">
                {program.name}{" "}
                <span className="text-brand-pink block mt-2 text-2xl sm:text-4xl font-extrabold normal-case">
                  {program.tagline}
                </span>
              </h1>

              <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-xl">
                {program.description}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => openModal(program.name)}
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  BOOK FREE TRIAL
                </Button>
                <a
                  href="#curriculum"
                  className="px-6 py-3 rounded-full border-2 border-white/30 hover:border-white text-white text-sm font-bold transition-colors"
                >
                  View Disciplines
                </a>
              </div>
            </div>

            {/* Right Card: Quick Overview Box */}
            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl space-y-4">
              <h3 className="text-xl font-black uppercase text-white tracking-wide border-b border-white/15 pb-3">
                Program Highlights
              </h3>
              <ul className="space-y-3 text-sm text-gray-200">
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-brand-pink shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Schedule:</strong>
                    {program.schedule}
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-brand-pink shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Age Divisions:</strong>
                    {program.ageGroups.join(" · ")}
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-brand-pink shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Certification:</strong>
                    International examinations &amp; annual stage performances
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Disciplines & Curriculum */}
      <section className="py-20 bg-gray-50/60" id="curriculum">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Course Options"
            title={`${program.name} DISCIPLINES`}
            highlightWord="DISCIPLINES"
            subtitle="Specialized modules designed to build technical mastery from day one."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {program.subPrograms.map((sub, idx) => (
              <div
                key={sub}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-pink-50 text-brand-pink flex items-center justify-center font-black mb-3">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-extrabold text-brand-purple mb-2">
                  {sub}
                </h3>
                <p className="text-sm text-gray-600">
                  Comprehensive training in fundamentals, style techniques, rhythmic musicality, and solo &amp; ensemble performance.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Features & Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                badge="Why Choose Us"
                title={`BENEFITS OF ${program.name}`}
                highlightWord="BENEFITS"
                centered={false}
              />
              <ul className="mt-8 space-y-4">
                {program.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-pink shrink-0 mt-1" />
                    <span className="text-base font-semibold text-gray-800">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-extrabold text-brand-purple">
                Key Studio Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {program.features.map((feat) => (
                  <div
                    key={feat}
                    className="p-5 rounded-2xl bg-pink-50/50 border border-pink-100 flex items-start gap-3"
                  >
                    <ShieldCheck className="w-5 h-5 text-brand-pink shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-bold text-gray-800">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Frequently Asked Questions */}
      <section className="py-20 bg-gray-50/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Got Questions?"
            title="FREQUENTLY ASKED QUESTIONS"
            highlightWord="QUESTIONS"
            subtitle="Everything parents need to know before attending their first trial class."
          />

          <div className="mt-12 space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 flex items-center justify-between font-bold text-brand-purple hover:text-brand-pink transition-colors"
                  >
                    <span className="text-sm sm:text-base">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 transition-transform ${
                        isOpen ? "rotate-180 text-brand-pink" : "text-gray-400"
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-50 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Free Trial CTA Banner */}
      <section className="py-20 bg-brand-purple text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
                Book Your {program.name} <br />
                <span className="text-brand-pink">FREE Trial Class</span>
              </h2>
              <p className="text-base text-gray-300 max-w-lg">
                Limited slots available this week across our 5 Dubai studios. Book now to reserve your child&apos;s spot.
              </p>
              <div className="flex items-center gap-3 text-sm text-pink-200">
                <CheckCircle2 className="w-5 h-5 text-brand-pink shrink-0" />
                <span>No commitment · Experienced coaches · World-class equipment</span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <FreeTrialForm
                defaultProgram={program.name}
                className="shadow-2xl border-2 border-white/20"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
