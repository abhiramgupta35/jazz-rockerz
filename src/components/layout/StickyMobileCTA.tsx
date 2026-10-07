"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "@/context/ModalContext";
import { trackEvent } from "@/lib/analytics";

export const StickyMobileCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { openModal, openWhatsAppModal } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          className="fixed bottom-0 inset-x-0 z-40 lg:hidden"
        >
          {/* White premium bar */}
          <div className="mx-3 mb-[max(0.6rem,env(safe-area-inset-bottom))] p-1.5 rounded-full bg-white/95 backdrop-blur-2xl border border-gray-200/90 shadow-[0_12px_40px_rgba(0,0,0,0.14),0_2px_12px_rgba(0,0,0,0.06)]">
            <div className="flex items-center gap-1.5">

              {/* CALL — Premium Inset Pod Pill */}
              <a
                href="tel:+97143445990"
                onClick={() => trackEvent("phone_click", { location: "sticky_bottom_bar" })}
                className="group flex-1 flex items-center justify-between pl-1 pr-2 py-1 rounded-full bg-gradient-to-r from-blue-50/90 via-sky-50 to-indigo-50/80 hover:from-blue-100 hover:to-indigo-100 border border-blue-200/70 shadow-[0_2px_8px_rgba(43,53,130,0.08)] transition-all duration-200 active:scale-[0.95]"
                aria-label="Call JazzRockers"
              >
                {/* Elevated white circle pod with icon */}
                <div className="w-[26px] h-[26px] rounded-full bg-white shadow-[0_2px_5px_rgba(43,53,130,0.18)] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <svg className="w-3.5 h-3.5 text-[#2B3582] group-hover:animate-[wiggle_0.4s_ease-in-out]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <span className="font-extrabold text-[#2B3582] text-[10.5px] tracking-wider uppercase ml-1">CALL</span>
                <svg className="w-2.5 h-2.5 text-[#2B3582]/40 shrink-0 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>

              {/* WHATSAPP — Premium Inset Pod Pill with Confirmation Modal */}
              <button
                type="button"
                onClick={() => {
                  trackEvent("whatsapp_click", { location: "sticky_bottom_bar" });
                  openWhatsAppModal();
                }}
                className="group flex-1 flex items-center justify-between pl-1 pr-2 py-1 rounded-full bg-gradient-to-r from-emerald-50/90 via-teal-50 to-green-50/80 hover:from-emerald-100 hover:to-teal-100 border border-emerald-200/70 shadow-[0_2px_8px_rgba(16,185,129,0.08)] transition-all duration-200 active:scale-[0.95]"
                aria-label="WhatsApp JazzRockers"
              >
                {/* Elevated white circle pod with icon */}
                <div className="w-[26px] h-[26px] rounded-full bg-white shadow-[0_2px_5px_rgba(16,185,129,0.2)] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <svg className="w-3.5 h-3.5 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                  </svg>
                </div>
                <span className="font-extrabold text-emerald-900 text-[10.5px] tracking-wider uppercase ml-1">CHAT</span>
                <svg className="w-2.5 h-2.5 text-emerald-800/40 shrink-0 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* BOOK FREE TRIAL — Premium Pill with Inset Pod & Jump Animation */}
              <button
                onClick={() => {
                  trackEvent("free_trial_cta_click", { location: "sticky_bottom_bar" });
                  openModal();
                }}
                className="group relative flex-[1.6] flex items-center justify-between pl-1 pr-2.5 py-1 rounded-full font-black text-[10.5px] sm:text-[11px] tracking-wider uppercase text-white active:scale-[0.95] transition-transform duration-150 overflow-hidden shadow-[0_4px_18px_rgba(227,30,36,0.45)] animate-jump bg-gradient-to-r from-[#E31E24] via-[#ea242b] to-[#C91A1F]"
                aria-label="Book Free Trial Class"
              >
                {/* Elevated white/frosted circular badge with icon */}
                <div className="w-[26px] h-[26px] rounded-full bg-white/20 backdrop-blur-md border border-white/40 shadow-[0_2px_5px_rgba(0,0,0,0.2)] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <svg className="w-3.5 h-3.5 text-white animate-[sparkle_2s_ease-in-out_infinite]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                  </svg>
                </div>
                
                <span className="truncate mx-1">BOOK FREE TRIAL</span>

                <svg className="w-2.5 h-2.5 text-white/70 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>

            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
