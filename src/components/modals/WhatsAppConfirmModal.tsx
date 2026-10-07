"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, ShieldCheck, CheckCircle2 } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

export const WhatsAppConfirmModal: React.FC = () => {
  const { isWhatsAppOpen, closeWhatsAppModal, whatsAppData } = useModal();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeWhatsAppModal();
    };

    if (isWhatsAppOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isWhatsAppOpen, closeWhatsAppModal]);

  if (!isWhatsAppOpen) return null;

  const handleContinue = () => {
    const url = getWhatsAppUrl(whatsAppData.phone, whatsAppData.message || "");
    
    trackEvent("whatsapp_click", {
      location: whatsAppData.isFormSubmission ? "form_submission_modal" : "confirm_modal",
    });

    if (whatsAppData.onConfirm) {
      whatsAppData.onConfirm();
    }

    closeWhatsAppModal();

    // Open WhatsApp in new tab, fall back to current tab if popup blocked
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (!newWindow || newWindow.closed || typeof newWindow.closed === "undefined") {
      window.location.href = url;
    }
  };

  const handleCopyMessage = () => {
    if (whatsAppData.message && navigator.clipboard) {
      navigator.clipboard.writeText(whatsAppData.message);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <AnimatePresence>
      {isWhatsAppOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeWhatsAppModal}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 z-10 my-8"
          >
            {/* Close Button */}
            <button
              onClick={closeWhatsAppModal}
              aria-label="Close WhatsApp dialog"
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/10 hover:bg-black/20 text-white flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#128C7E] via-[#25D366] to-[#20bd5a] px-6 pt-7 pb-6 text-white relative overflow-hidden">
              <div className="flex items-center gap-3 mb-2">
                {/* WhatsApp Logo Pod */}
                <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center shrink-0">
                  <svg className="w-7 h-7 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                  </svg>
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs uppercase tracking-wider font-extrabold bg-white/20 backdrop-blur-sm px-2.5 py-0.5 rounded-full">
                      {whatsAppData.badge || "JazzRockers Support"}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-100">
                      <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                      Live Support
                    </span>
                  </div>
                  <h3 className="text-xl font-black mt-1 leading-tight">
                    {whatsAppData.title || "Connect on WhatsApp"}
                  </h3>
                </div>
              </div>

              <p className="text-emerald-50 text-xs sm:text-sm mt-2 leading-relaxed">
                {whatsAppData.subtitle ||
                  "You will be redirected to WhatsApp to chat with JazzRockers admissions."}
              </p>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-7 space-y-5">
              {/* Target Phone Line */}
              <div className="flex items-center justify-between p-3.5 bg-gray-50 rounded-2xl border border-gray-100 text-xs sm:text-sm">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100/70 text-[#128C7E] flex items-center justify-center font-bold">
                    WA
                  </div>
                  <div>
                    <span className="text-gray-500 text-[11px] block font-medium">WhatsApp Number</span>
                    <span className="font-extrabold text-gray-900 tracking-wide text-[14px]">
                      {whatsAppData.displayPhone || "+971 800 509"}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full text-[11px] font-bold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verified
                </div>
              </div>

              {/* Enquiry Message Preview */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-gray-700 uppercase tracking-wider flex items-center gap-1.5">
                    <Send className="w-3 h-3 text-[#25D366]" />
                    Prefilled Enquiry Message
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyMessage}
                    className="text-[11px] font-semibold text-gray-500 hover:text-emerald-700 transition-colors"
                  >
                    {copied ? "Copied!" : "Copy Text"}
                  </button>
                </div>

                <div className="relative rounded-2xl bg-[#EFEAE2]/60 p-4 border border-gray-200/80 shadow-inner max-h-48 overflow-y-auto">
                  {/* WhatsApp Speech Bubble Style */}
                  <div className="bg-white rounded-xl p-3.5 shadow-sm border border-emerald-100/60 text-xs sm:text-sm text-gray-800 whitespace-pre-line font-normal leading-relaxed">
                    {whatsAppData.message}
                    <div className="flex items-center justify-end gap-1 mt-2 text-[10px] text-gray-400 font-mono">
                      <span>Ready to send</span>
                      <CheckCircle2 className="w-3 h-3 text-[#25D366]" />
                    </div>
                  </div>
                </div>
                <p className="text-[11px] text-gray-500 mt-2 text-center">
                  This enquiry message will automatically open in your WhatsApp chat so you can send it in one tap.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={closeWhatsAppModal}
                  className="flex-1 py-3.5 px-4 rounded-xl font-bold text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 active:scale-95 transition-all text-center"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={handleContinue}
                  className="flex-[1.8] py-3.5 px-5 rounded-xl font-black text-sm text-white bg-[#25D366] hover:bg-[#20bd5a] active:scale-95 shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 transition-all"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                  </svg>
                  <span>Continue to WhatsApp</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
