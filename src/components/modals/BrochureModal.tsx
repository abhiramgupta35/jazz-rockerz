"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  User,
  Phone,
  Calendar,
  Download,
  CheckCircle2,
  ChevronLeft,
  Loader2,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { useModal } from "@/context/ModalContext";

export const BrochureModal: React.FC = () => {
  const { isBrochureOpen, closeBrochureModal, openModal } = useModal();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [errors, setErrors] = useState<{
    name?: string;
    age?: string;
    phone?: string;
  }>({});

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Handle ESC key and scroll locking
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeBrochureModal();
    };

    if (isBrochureOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
      // Reset state on close after animation
      setTimeout(() => {
        setIsSuccess(false);
        setErrors({});
      }, 300);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isBrochureOpen, closeBrochureModal]);

  const triggerDownload = () => {
    const link = document.createElement("a");
    link.href = "/JazzRockers_Brochure.pdf";
    link.download = "JazzRockers_Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const validate = () => {
    const newErrors: { name?: string; age?: string; phone?: string } = {};

    if (!name.trim()) {
      newErrors.name = "Please enter your name";
    }

    if (!age.trim()) {
      newErrors.age = "Please specify age";
    }

    const cleanPhone = phoneNumber.replace(/[\s-]/g, "");
    if (!cleanPhone) {
      newErrors.phone = "Please enter your phone number";
    } else if (cleanPhone.length < 7) {
      newErrors.phone = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // Send lead to server API (ready to connect to client email service)
      await fetch("/api/brochure-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          age: age.trim(),
          phone: `+971 ${phoneNumber.trim()}`,
        }),
      });
    } catch (err) {
      console.warn("Failed to log lead, proceeding with download:", err);
    } finally {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Trigger instant brochure download
      triggerDownload();
    }
  };

  return (
    <AnimatePresence>
      {isBrochureOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeBrochureModal}
            className="fixed inset-0 bg-[#0d122e]/80 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Card Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl z-10 my-4 sm:my-8 bg-gradient-to-br from-[#1c2357] via-[#242c6f] to-[#171c47] rounded-3xl sm:rounded-[2.5rem] shadow-2xl border border-white/15 overflow-hidden text-white"
          >
            {/* Close Button */}
            <button
              onClick={closeBrochureModal}
              aria-label="Close brochure modal"
              className="absolute top-4 right-4 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center border border-white/20 transition-transform duration-150 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-primary"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Ambient Backlight */}
            <div className="absolute -left-20 -top-20 w-72 h-72 bg-brand-primary/25 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -right-20 -bottom-20 w-72 h-72 bg-brand-secondary-light/30 rounded-full blur-3xl pointer-events-none" />

            {/* Split Layout: Left Brand Hero + Right Form Card */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 min-h-[520px]">
              {/* Left Column: Brand Context */}
              <div className="lg:col-span-5 p-6 sm:p-8 md:p-10 flex flex-col justify-between">
                <div>
                  {/* Logo Brand Lockup */}
                  <div className="flex items-center gap-2.5 mb-6">
                    <div className="relative w-10 h-10 rounded-xl bg-white p-1 shrink-0 shadow-md">
                      <Image
                        src="/images/jazz-logo.webp"
                        alt="Jazzrockers Logo"
                        fill
                        className="object-contain"
                        sizes="40px"
                      />
                    </div>
                    <div className="flex flex-col leading-none">
                      <span className="text-xl font-black tracking-tight text-white uppercase">
                        JazzRockers
                      </span>
                      <span className="text-[8px] font-bold tracking-widest text-brand-primary-light uppercase mt-1">
                        Performing Arts Academy
                      </span>
                    </div>
                  </div>

                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-brand-primary-light border border-white/15 mb-4">
                    <span className="relative flex h-2 w-2" aria-hidden="true">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span>Download Brochure</span>
                  </div>

                  {/* Big Headline */}
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
                    Provide your details to{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-200 via-rose-300 to-white">
                      explore the program
                    </span>
                  </h2>

                  {/* Key Highlights */}
                  <div className="mt-6 space-y-3 text-xs sm:text-sm text-gray-200/90">
                    <div className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                        <Sparkles className="w-3 h-3" />
                      </div>
                      <span>20+ Programs in Dance, Music & Fine Arts</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                        <Sparkles className="w-3 h-3" />
                      </div>
                      <span>Course levels, age batches & schedules</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                        <Sparkles className="w-3 h-3" />
                      </div>
                      <span>Fee structure & studio locations across Dubai</span>
                    </div>
                  </div>
                </div>

                {/* Back to Home Link */}
                <div className="pt-6 mt-6 border-t border-white/10 hidden lg:block">
                  <button
                    onClick={closeBrochureModal}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-300 hover:text-white transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Back to site</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Form Card */}
              <div className="lg:col-span-7 p-4 sm:p-6 md:p-8 flex items-center">
                <div className="w-full bg-white text-gray-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-100">
                  {!isSuccess ? (
                    <>
                      <div className="mb-6 text-center sm:text-left">
                        <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-[#1F265E] leading-tight">
                          Get Your Program{" "}
                          <span className="text-brand-primary">Brochure</span>
                        </h3>
                        <p className="mt-1 text-xs sm:text-sm text-gray-500">
                          Instant PDF access sent directly to your screen.
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Field 1: Name */}
                        <div>
                          <label
                            htmlFor="brochure-name"
                            className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5"
                          >
                            Your name <span className="text-brand-primary">*</span>
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                              <User className="w-4 h-4" />
                            </div>
                            <input
                              id="brochure-name"
                              type="text"
                              value={name}
                              onChange={(e) => {
                                setName(e.target.value);
                                if (errors.name) {
                                  setErrors((prev) => ({ ...prev, name: undefined }));
                                }
                              }}
                              placeholder="Name"
                              className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-gray-900 placeholder-gray-400 transition-all focus:outline-none focus:ring-2 ${errors.name
                                  ? "border-red-400 bg-red-50/30 focus:ring-red-400"
                                  : "border-gray-200 bg-gray-50/50 hover:border-gray-300 focus:bg-white focus:border-brand-primary focus:ring-brand-primary/20"
                                }`}
                            />
                          </div>
                          {errors.name && (
                            <p className="mt-1 text-xs text-red-600 font-medium">
                              {errors.name}
                            </p>
                          )}
                        </div>

                        {/* Field 2: Student Age */}
                        <div>
                          <label
                            htmlFor="brochure-age"
                            className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5"
                          >
                            Student&apos;s Age <span className="text-brand-primary">*</span>
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                              <Calendar className="w-4 h-4" />
                            </div>
                            <input
                              id="brochure-age"
                              type="text"
                              value={age}
                              onChange={(e) => {
                                setAge(e.target.value);
                                if (errors.age) {
                                  setErrors((prev) => ({ ...prev, age: undefined }));
                                }
                              }}
                              placeholder="e.g. 5–7 yrs, 8–12 yrs, Adult"
                              className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-gray-900 placeholder-gray-400 transition-all focus:outline-none focus:ring-2 ${errors.age
                                  ? "border-red-400 bg-red-50/30 focus:ring-red-400"
                                  : "border-gray-200 bg-gray-50/50 hover:border-gray-300 focus:bg-white focus:border-brand-primary focus:ring-brand-primary/20"
                                }`}
                            />
                          </div>
                          {errors.age && (
                            <p className="mt-1 text-xs text-red-600 font-medium">
                              {errors.age}
                            </p>
                          )}
                        </div>

                        {/* Field 3: Phone Number */}
                        <div>
                          <label
                            htmlFor="brochure-phone"
                            className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5"
                          >
                            Your number <span className="text-brand-primary">*</span>
                          </label>
                          <div className="flex rounded-xl border border-gray-200 overflow-hidden focus-within:border-brand-primary focus-within:ring-2 focus-within:ring-brand-primary/20 transition-all bg-gray-50/50">
                            {/* UAE Country Tag */}
                            <div className="px-3.5 py-3 bg-gray-100/80 border-r border-gray-200 flex items-center gap-1.5 shrink-0 select-none">
                              <span className="text-base leading-none">🇦🇪</span>
                              <span className="text-xs font-bold text-gray-700">
                                +971
                              </span>
                            </div>
                            <div className="relative flex-1">
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                <Phone className="w-4 h-4" />
                              </div>
                              <input
                                id="brochure-phone"
                                type="tel"
                                value={phoneNumber}
                                onChange={(e) => {
                                  setPhoneNumber(e.target.value);
                                  if (errors.phone) {
                                    setErrors((prev) => ({ ...prev, phone: undefined }));
                                  }
                                }}
                                placeholder="Phone Number (e.g. 50 123 4567)"
                                className="w-full pl-9 pr-4 py-3 bg-transparent text-sm text-gray-900 placeholder-gray-400 focus:outline-none"
                              />
                            </div>
                          </div>
                          {errors.phone && (
                            <p className="mt-1 text-xs text-red-600 font-medium">
                              {errors.phone}
                            </p>
                          )}
                        </div>

                        {/* Submit Button */}
                        <div className="pt-2">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full bg-brand-primary hover:bg-brand-primary-hover text-white font-bold text-sm sm:text-base shadow-primary hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed group cursor-pointer"
                          >
                            {isSubmitting ? (
                              <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                <span>Preparing Your Download...</span>
                              </>
                            ) : (
                              <>
                                <Download className="w-5 h-5 transition-transform group-hover:translate-y-0.5" />
                                <span>Download Now</span>
                              </>
                            )}
                          </button>
                        </div>

                        {/* Social Proof Text */}
                        <p className="text-center text-[11px] font-medium text-gray-500 pt-1">
                          Chosen by <span className="font-bold text-brand-secondary">10,000+ Students</span> to Learn Performing Arts
                        </p>
                      </form>
                    </>
                  ) : (
                    /* Success Confirmation State */
                    <div className="py-6 sm:py-8 text-center space-y-4">
                      <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                        <CheckCircle2 className="w-9 h-9" />
                      </div>

                      <div>
                        <h3 className="text-2xl font-black text-[#1F265E] tracking-tight">
                          Thank You, {name}!
                        </h3>
                        <p className="mt-2 text-sm text-gray-600 max-w-sm mx-auto leading-relaxed">
                          Your official JazzRockers Academy Brochure download has started.
                        </p>
                      </div>

                      <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 text-xs text-gray-600 max-w-sm mx-auto space-y-2">
                        <p className="font-medium">
                          Did the download not trigger automatically?
                        </p>
                        <button
                          type="button"
                          onClick={triggerDownload}
                          className="inline-flex items-center gap-1.5 text-brand-primary hover:underline font-bold"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Click here to download directly (PDF)</span>
                        </button>
                      </div>

                      <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                        <button
                          type="button"
                          onClick={() => {
                            closeBrochureModal();
                            openModal();
                          }}
                          className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-brand-secondary hover:bg-brand-secondary-light text-white text-xs sm:text-sm font-bold transition-all shadow-md"
                        >
                          Book Free Trial Class
                        </button>
                        <button
                          type="button"
                          onClick={closeBrochureModal}
                          className="w-full sm:w-auto px-6 py-2.5 rounded-full border border-gray-200 hover:bg-gray-50 text-gray-700 text-xs sm:text-sm font-semibold transition-all"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
