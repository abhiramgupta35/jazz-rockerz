"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryItem } from "@/lib/types";

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  items,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}) => {
  const currentItem = currentIndex !== null ? items[currentIndex] : null;

  useEffect(() => {
    if (currentIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex, onClose, onNext, onPrev]);

  if (currentIndex === null || !currentItem) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 select-none">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-md"
        />

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Lightbox"
          className="absolute top-4 right-4 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-brand-primary text-white flex items-center justify-center backdrop-blur-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Previous Button */}
        <button
          onClick={onPrev}
          aria-label="Previous Image"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-brand-primary text-white flex items-center justify-center backdrop-blur-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary"
        >
          <ChevronLeft className="w-7 h-7" />
        </button>

        {/* Next Button */}
        <button
          onClick={onNext}
          aria-label="Next Image"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-brand-primary text-white flex items-center justify-center backdrop-blur-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary"
        >
          <ChevronRight className="w-7 h-7" />
        </button>

        {/* Main Lightbox Card */}
        <motion.div
          key={currentItem.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="relative max-w-4xl w-full z-10 flex flex-col items-center"
        >
          <div className="relative w-full max-h-[75vh] h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-black border border-white/10">
            <Image
              src={currentItem.src}
              alt={currentItem.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-contain"
              priority
            />
          </div>

          {/* Caption */}
          <div className="mt-4 text-center text-white max-w-xl">
            <h4 className="text-lg font-bold text-white tracking-wide">
              {currentItem.title}
            </h4>
            <p className="text-sm text-gray-300 mt-1">
              {currentItem.caption}
            </p>
            <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-brand-primary">
              {currentIndex + 1} / {items.length}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
