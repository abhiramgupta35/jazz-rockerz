"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlightWord?: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  highlightWord,
  subtitle,
  centered = true,
  light = false,
  className = "",
}) => {
  // If a highlight word is provided, replace it with pink text
  const renderTitle = () => {
    if (!highlightWord || !title.includes(highlightWord)) {
      return title;
    }

    const parts = title.split(highlightWord);
    return (
      <>
        {parts[0]}
        <span className="text-brand-primary underline decoration-red- decoration-wavy decoration-2 underline-offset-8">
          {highlightWord}
        </span>
        {parts[1]}
      </>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} ${className}`}
    >
      {badge && (
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-red-/80 text-brand-primary mb-3 border border-red-/60 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-ping" />
          {badge}
        </span>
      )}

      <h2
        className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight uppercase ${
          light ? "text-white" : "text-brand-secondary"
        }`}
      >
        {renderTitle()}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 text-sm sm:text-base md:text-lg leading-relaxed ${
            light ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
