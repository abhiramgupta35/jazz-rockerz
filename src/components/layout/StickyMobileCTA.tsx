"use client";

import React, { useState, useEffect } from "react";
import { Phone, MessageCircle, Sparkles } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import { trackEvent } from "@/lib/analytics";

export const StickyMobileCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { openModal } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      // Show after user scrolls down 120px
      if (window.scrollY > 120) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden p-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] bg-white/95 backdrop-blur-lg border-t border-gray-200/80 shadow-[0_-8px_30px_rgba(0,0,0,0.12)] transition-all duration-300">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* CALL */}
        <a
          href="tel:+97143445990"
          onClick={() => trackEvent("phone_click", { location: "sticky_bottom_bar" })}
          className="flex-1 flex items-center justify-center gap-1.5 py-3 px-2 rounded-2xl bg-gray-100 hover:bg-gray-200 text-brand-secondary font-extrabold text-xs transition-colors shadow-sm active:scale-95"
          aria-label="Call JazzRockers"
        >
          <Phone className="w-4 h-4 text-brand-primary shrink-0" />
          <span>CALL</span>
        </a>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/971501234567"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("whatsapp_click", { location: "sticky_bottom_bar" })}
          className="flex-1 flex items-center justify-center gap-1.5 py-3 px-2 rounded-2xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-extrabold text-xs transition-colors shadow-sm active:scale-95 border border-emerald-200/60"
          aria-label="WhatsApp JazzRockers"
        >
          <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>WHATSAPP</span>
        </a>

        {/* BOOK FREE TRIAL */}
        <button
          onClick={() => {
            trackEvent("free_trial_cta_click", { location: "sticky_bottom_bar" });
            openModal();
          }}
          className="flex-[1.8] flex items-center justify-center gap-1.5 py-3 px-3 rounded-2xl bg-brand-primary hover:bg-brand-primary-hover text-white font-extrabold text-xs transition-all shadow-md shadow-brand-primary/30 active:scale-95"
          aria-label="Book Free Trial Class"
        >
          <Sparkles className="w-3.5 h-3.5 shrink-0 animate-pulse" />
          <span className="truncate">BOOK FREE TRIAL</span>
        </button>
      </div>
    </div>
  );
};
