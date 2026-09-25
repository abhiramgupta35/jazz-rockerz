"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import { FreeTrialForm } from "./FreeTrialForm";

export const FreeTrialModal: React.FC = () => {
  const { isOpen, closeModal, defaultProgram } = useModal();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeModal]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-brand-secondary/80 backdrop-blur-sm"
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg z-10 my-8"
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              aria-label="Close trial dialog"
              className="absolute -top-3 -right-3 z-20 w-9 h-9 rounded-full bg-white text-gray-700 hover:text-brand-primary shadow-lg flex items-center justify-center border border-gray-100 transition-transform duration-150 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-brand-primary"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Form */}
            <FreeTrialForm
              defaultProgram={defaultProgram}
              compact
              className="shadow-2xl border-2 border-brand-primary/20"
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
