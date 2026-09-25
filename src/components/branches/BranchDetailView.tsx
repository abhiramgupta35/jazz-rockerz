"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Star,
} from "lucide-react";
import { BranchItem } from "@/lib/types";
import { SectionHeading } from "../ui/SectionHeading";
import { FreeTrialForm } from "../forms/FreeTrialForm";
import { Button } from "../ui/Button";
import { useModal } from "@/context/ModalContext";
import { trackEvent } from "@/lib/analytics";

interface BranchDetailViewProps {
  branch: BranchItem;
}

export const BranchDetailView: React.FC<BranchDetailViewProps> = ({ branch }) => {
  const { openModal } = useModal();

  return (
    <div className="bg-white">
      {/* 1. Branch Hero */}
      <section className="relative min-h-[480px] flex items-center bg-gradient-to-br from-[#120024] via-[#1C0035] to-[#2B0050] text-white py-16 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 mix-blend-luminosity">
          <Image
            src="/images/dance-stage.webp"
            alt={branch.name}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="absolute -top-20 -right-20 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-red- text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 text-brand-primary" />
                <span>Dubai Studio Location</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
                {branch.name}
              </h1>

              <p className="text-lg sm:text-xl text-red- font-semibold">
                {branch.tagline}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3 text-sm text-gray-200">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/15">
                  <Clock className="w-4 h-4 text-brand-primary" />
                  <span>{branch.openingHours}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/15">
                  <MapPin className="w-4 h-4 text-brand-primary" />
                  <span>{branch.location}</span>
                </div>
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-3">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => openModal()}
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  BOOK FREE TRIAL HERE
                </Button>
                <a
                  href={`tel:${branch.phone.replace(/\s+/g, "")}`}
                  onClick={() => trackEvent("phone_click", { branch: branch.slug })}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors border border-white/20"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-primary" />
                  <span>Call {branch.phone}</span>
                </a>
              </div>
            </div>

            {/* Quick Details Box */}
            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 space-y-4">
              <h3 className="text-lg font-black uppercase text-white tracking-wide border-b border-white/15 pb-2">
                Studio Facilities &amp; Amenities
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-gray-200">
                {branch.amenities.map((amenity) => (
                  <li key={amenity} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0" />
                    <span>{amenity}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2 border-t border-white/10 text-xs text-gray-300">
                <span className="font-bold text-white block mb-1">Programs at this branch:</span>
                {branch.programsOffered.join(" · ")}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Map / Address Area */}
      <section className="py-16 bg-gray-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Find Us"
            title="STUDIO LOCATION & ACCESS"
            highlightWord="LOCATION"
            subtitle={`Conveniently accessible in ${branch.name} with ample parking and easy transit.`}
          />

          <div className="mt-10 bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary-50 text-brand-primary flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-brand-secondary">
                    Studio Address
                  </h4>
                  <p className="text-sm text-gray-600 mt-0.5">
                    {branch.addressPlaceholder}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary-50 text-brand-primary flex items-center justify-center shrink-0 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-brand-secondary">
                    Direct Contact
                  </h4>
                  <p className="text-sm text-gray-600 mt-0.5">
                    Phone: {branch.phone} <br />
                    WhatsApp: {branch.whatsapp} <br />
                    Email: {branch.email}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary-50 text-brand-primary flex items-center justify-center shrink-0 mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-brand-secondary">
                    Hours of Operation
                  </h4>
                  <p className="text-sm text-gray-600 mt-0.5">
                    {branch.openingHours}
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder Card */}
            <div className="lg:col-span-6 h-64 sm:h-72 rounded-2xl bg-gradient-to-br from-primary-50 via-blue- to-white border border-dashed border-red- flex flex-col items-center justify-center p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-3">
                <MapPin className="w-6 h-6 text-brand-primary animate-bounce" />
              </div>
              <h4 className="text-base font-extrabold text-brand-secondary">
                {branch.name} Studio
              </h4>
              <p className="text-xs text-gray-500 max-w-sm mt-1">
                {branch.addressPlaceholder}
              </p>
              <a
                href={`https://maps.google.com/?q=JazzRockers+${encodeURIComponent(branch.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-brand-primary text-white text-xs font-bold hover:bg-brand-primary-hover transition-colors shadow-sm"
              >
                <span>Open in Google Maps</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Free Trial Form Section */}
      <section className="py-20 bg-brand-secondary text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-3xl sm:text-5xl font-black uppercase text-white">
                Book a FREE Trial at <br />
                <span className="text-brand-primary">{branch.name}</span>
              </h2>
              <p className="text-base text-gray-300 max-w-lg">
                Experience our professional faculty, certified floors, and friendly environment. Seats are limited each week.
              </p>
            </div>

            <div className="lg:col-span-5">
              <FreeTrialForm
                defaultBranch={branch.name}
                className="shadow-2xl border-2 border-white/20"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
