import React from "react";
import { Hero } from "@/components/sections/Hero";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ProgramsSection } from "@/components/sections/ProgramsSection";
import { Achievements } from "@/components/sections/Achievements";
import { Testimonials } from "@/components/sections/Testimonials";
import { GallerySection } from "@/components/sections/GallerySection";
import { AdmissionCTA } from "@/components/sections/AdmissionCTA";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Why Parents Choose JazzRockers */}
      <WhyChooseUs />

      {/* 3. Our Programs */}
      <ProgramsSection />

      {/* 4. Achievements That Inspire */}
      <Achievements />

      {/* 5. What Parents & Students Say */}
      <Testimonials />

      {/* 6. Life at JazzRockers */}
      <GallerySection />

      {/* 7. Admissions Open! */}
      <AdmissionCTA />
    </>
  );
}
