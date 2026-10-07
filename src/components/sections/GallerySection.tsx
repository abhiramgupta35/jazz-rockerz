"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Maximize2, Sparkles } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Lightbox } from "../ui/Lightbox";
import { GALLERY_ITEMS } from "@/lib/data/gallery";

export const GallerySection: React.FC = () => {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const nextImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) =>
        prev === GALLERY_ITEMS.length - 1 ? 0 : (prev as number) + 1
      );
    }
  };

  const prevImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) =>
        prev === 0 ? GALLERY_ITEMS.length - 1 : (prev as number) - 1
      );
    }
  };

  return (
    <section className="py-6 lg:py-16 relative overflow-hidden" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Moments of Magic"
          title="LIFE AT JAZZROCKERS"
          highlightWord="JAZZROCKERS"
          subtitle="A glimpse into the energy, artistry, friendships, and triumphs that unfold in our Dubai studios."
        />

        {/* Gallery Grid Composition */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-[220px] sm:auto-rows-[280px] grid-flow-dense">
          {GALLERY_ITEMS.map((item, idx) => {
            // Create a perfectly fitting bento box layout
            let layoutClass = "col-span-1 row-span-1";
            if (idx === 0 || idx === 5) {
              layoutClass = "row-span-2"; // Tall cards
            } else if (idx === 1 || idx === 6) {
              layoutClass = "sm:col-span-2"; // Wide cards
            }

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: (idx % 4) * 0.1, duration: 0.45 }}
                whileHover={{ y: -6 }}
                onClick={() => openLightbox(idx)}
                className={`relative group rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover cursor-pointer border border-gray-100 w-full h-full ${layoutClass}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary/90 via-black/20 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />

                {/* Hover Maximize Icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-red- block mb-1">
                    {item.title}
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-white line-clamp-2 leading-snug">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        items={GALLERY_ITEMS}
        currentIndex={activeLightboxIndex}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </section>
  );
};
