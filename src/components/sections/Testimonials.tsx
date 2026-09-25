"use client";

import React from "react";
import Image from "next/image";
import { Star, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "JazzRockers has transformed my daughter. She is more confident and passionate about dance now!",
      name: "Priya Sharma",
      location: "Al Nahda, Dubai",
      avatar: "/images/i (1).webp"
    },
    {
      quote: "The teachers are amazing and the environment is very positive. Highly recommended!",
      name: "Ramesh Nair",
      location: "Karama, Dubai",
      avatar: "/images/i (2).webp"
    },
    {
      quote: "My son loves gymnastics classes here. Great training and excellent facilities.",
      name: "Sneha Iyer",
      location: "Mirdif, Dubai",
      avatar: "/images/i (3).webp"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-16 bg-white overflow-hidden" id="testimonials">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary-50 text-[#E31E24] text-[13px] font-bold tracking-wide mb-5">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            Verified Parent Reviews
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-black uppercase mb-3 text-[#1f2937] tracking-tight">
            WHAT <span className="text-[#E31E24]">PARENTS & STUDENTS</span> SAY
          </h2>
          <p className="text-gray-500 text-[17px] font-medium">
            Real stories. Real progress. Real confidence.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {/* Review Cards */}
          {testimonials.map((review, idx) => (
            <motion.div variants={cardVariants} key={idx} className="bg-white rounded-[1.25rem] p-6 border border-gray-100 shadow-sm flex flex-col justify-between h-full hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center gap-1 text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-[18px] h-[18px] fill-current" />
                  ))}
                </div>
                <p className="text-[#1f2937] text-[15px] font-medium leading-[1.6]">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-3 mt-6">
                <Image src={review.avatar} alt={review.name} width={44} height={44} className="rounded-full w-11 h-11 object-cover" />
                <div>
                  <div className="font-bold text-gray-900 text-[15px] leading-tight mb-0.5">{review.name}</div>
                  <div className="text-gray-500 text-[13px]">{review.location}</div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Google CTA Card */}
          <motion.div variants={cardVariants} className="bg-white rounded-[1.25rem] p-6 border border-gray-100 shadow-sm flex flex-col items-center text-center justify-center space-y-4 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 w-full justify-center">
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                 <Image src="/images/logo-google.avif" alt="Google" width={48} height={48} className="w-10 h-10 object-contain" />
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-900 leading-tight text-[15px]">Rated 4.9 Stars<br/>on Google</div>
                <div className="flex items-center gap-1 text-yellow-400 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-[14px] h-[14px] fill-current" />
                  ))}
                </div>
              </div>
            </div>
            <div className="font-bold text-gray-900 text-[15px] pt-1">
              1000+ Happy Families
            </div>
            <button className="w-full bg-[#E31E24] text-white py-3.5 rounded-[10px] font-bold text-[13px] tracking-wide flex items-center justify-center gap-1 hover:bg-red- transition-colors mt-2">
              READ REVIEWS <ChevronRight className="w-[18px] h-[18px]" strokeWidth={3} />
            </button>
          </motion.div>
        </motion.div>

        {/* Pagination Dots */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex items-center justify-center gap-2 mt-8"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-[#E31E24]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
        </motion.div>
        
      </div>
    </section>
  );
};
