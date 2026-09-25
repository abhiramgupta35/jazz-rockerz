"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Phone,
  MessageCircle,
  Sparkles,
  CheckCircle2,
  Star,
  Clock,
  ShieldCheck,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import { Logo } from "../ui/Logo";
import { FreeTrialForm } from "../forms/FreeTrialForm";
import { Testimonials } from "../sections/Testimonials";
import { GallerySection } from "../sections/GallerySection";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { useModal } from "@/context/ModalContext";
import { trackEvent } from "@/lib/analytics";

interface LandingPageViewProps {
  title: string;
  highlightWord: string;
  subheadline: string;
  programCategory: string;
  heroImage: string;
  benefits: string[];
  features: string[];
  faqs: { q: string; a: string }[];
}

export const LandingPageView: React.FC<LandingPageViewProps> = ({
  title,
  highlightWord,
  subheadline,
  programCategory,
  heroImage,
  benefits,
  features,
  faqs,
}) => {
  const { openModal } = useModal();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Minimal Conversion Header */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Logo variant="dark" showTagline={false} />

          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="tel:+97143445990"
              onClick={() => trackEvent("phone_click", { location: "landing_nav" })}
              className="flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-brand-secondary hover:text-brand-primary transition-colors"
            >
              <Phone className="w-4 h-4 text-brand-primary" />
              <span className="hidden sm:inline">Call Us: 04 344 5990</span>
              <span className="sm:hidden">04 344 5990</span>
            </a>

            <a
              href="https://wa.me/971501234567"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("whatsapp_click", { location: "landing_nav" })}
              className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center hover:bg-emerald-100 transition-colors border border-emerald-200/60"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <Button
              variant="primary"
              size="sm"
              onClick={() => openModal(programCategory)}
              className="text-xs px-3.5 py-2"
            >
              BOOK FREE TRIAL
            </Button>
          </div>
        </div>
      </nav>

      {/* 2. Hero with Integrated Form */}
      <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-[#120024] via-[#1D0037] to-[#2B0050] text-white py-14 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 mix-blend-luminosity">
          <Image
            src={heroImage}
            alt={title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        <div className="absolute top-0 right-10 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-red- text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-brand-primary" />
                <span>Special 2026 Admissions Open</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
                {title.includes(highlightWord) ? (
                  <>
                    {title.split(highlightWord)[0]}
                    <span className="text-brand-primary underline decoration-red- decoration-wavy decoration-2 underline-offset-8">
                      {highlightWord}
                    </span>
                    {title.split(highlightWord)[1]}
                  </>
                ) : (
                  title
                )}
              </h1>

              <p className="text-base sm:text-xl text-red- font-medium leading-relaxed max-w-xl">
                {subheadline}
              </p>

              {/* Benefits Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {benefits.map((b) => (
                  <div
                    key={b}
                    className="flex items-center gap-2.5 bg-white/5 backdrop-blur-sm rounded-xl px-3.5 py-2 border border-white/10 text-xs sm:text-sm font-semibold text-gray-100"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              {/* Social Proof */}
              <div className="pt-3 flex items-center gap-4 text-xs font-bold text-gray-200">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                  <span className="text-white ml-1">4.9 / 5.0 Google Rating</span>
                </div>
                <span>•</span>
                <span className="text-red-">1000+ Students Trained</span>
              </div>
            </div>

            {/* Right Column: FreeTrialForm (5 cols) */}
            <div className="lg:col-span-5">
              <FreeTrialForm
                defaultProgram={programCategory}
                className="shadow-2xl border-2 border-white/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Program Specific Features */}
      <section className="py-20 bg-gray-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Exclusive Training"
            title="WHY CHOOSE OUR PROGRAM"
            highlightWord="CHOOSE"
            subtitle="Built from the ground up for children aged 2.5 to teens."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat, idx) => (
              <div
                key={feat}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-primary-50 text-brand-primary flex items-center justify-center font-bold mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-extrabold text-brand-secondary mb-2">
                    {feat}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Designed to inspire technique, confidence, physical health, and teamwork in a joyful setting.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] font-bold text-brand-primary uppercase tracking-wider">
                  Verified Curriculum
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Social Proof & Reviews */}
      <Testimonials />

      {/* 5. Gallery */}
      <GallerySection />

      {/* 6. FAQ Accordion */}
      <section className="py-20 bg-gray-50/60">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Frequently Asked"
            title="QUESTIONS & ANSWERS"
            highlightWord="QUESTIONS"
            subtitle="Have questions before booking? We are here to help."
          />

          <div className="mt-10 space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 flex items-center justify-between font-bold text-brand-secondary hover:text-brand-primary transition-colors"
                  >
                    <span className="text-sm sm:text-base">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 transition-transform ${
                        isOpen ? "rotate-180 text-brand-primary" : "text-gray-400"
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

      {/* 7. Final Conversion Section */}
      <section className="py-20 bg-brand-secondary text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-3xl sm:text-5xl font-black uppercase text-white">
                Start Your Child&apos;s Journey <br />
                <span className="text-brand-primary">Book a Free Trial Today</span>
              </h2>
              <p className="text-base text-gray-300 max-w-lg leading-relaxed">
                Join 1,000+ satisfied families across Dubai. Zero risk, 100% free experience at any of our 5 premier branches.
              </p>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-red-">
                <ShieldCheck className="w-5 h-5 text-brand-primary shrink-0" />
                <span>No registration fee · Experienced certified coaches · Safe studios</span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <FreeTrialForm
                defaultProgram={programCategory}
                className="shadow-2xl border-2 border-white/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-8 bg-brand-secondary text-gray-400 text-xs border-t border-white/10 text-center">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <p>© {new Date().getFullYear()} JazzRockers Academy UAE. All rights reserved.</p>
          <p>Dubai Branches: Al Nahda · Karama · Mirdif · JLT · International City</p>
          <div className="flex items-center justify-center gap-4 text-gray-300 pt-2">
            <a href="tel:+97143445990" className="hover:text-brand-primary transition-colors">
              Tel: 04 344 5990
            </a>
            <span>•</span>
            <a href="https://wa.me/971501234567" className="hover:text-emerald-400 transition-colors">
              WhatsApp: +971 50 123 4567
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
