import React from "react";
import type { Metadata } from "next";
import { Phone, MessageCircle, Mail, Clock, MapPin, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FreeTrialForm } from "@/components/forms/FreeTrialForm";
import { BRANCHES } from "@/lib/data/branches";

export const metadata: Metadata = {
  title: "Contact Us | JazzRockers Academy Dubai",
  description:
    "Get in touch with JazzRockers. Call 04 344 5990 or WhatsApp +971 50 123 4567. Studios across Al Nahda, Karama, Mirdif, JLT, and International City.",
};

export default function ContactPage() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="We're Here For You"
          title="CONTACT JAZZROCKERS"
          highlightWord="JAZZROCKERS"
          subtitle="Reach out directly to speak with our admissions advisors or book a trial class at your nearest studio."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Details & Branches (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone Card */}
              <a
                href="tel:+97143445990"
                className="bg-white rounded-2xl p-5 border border-gray-100 shadow-card hover:border-brand-pink transition-colors flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-pink-50 text-brand-pink flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 font-semibold block">Telephone</span>
                  <strong className="text-base font-extrabold text-brand-purple">04 344 5990</strong>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a
                href="https://wa.me/971501234567"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-50/50 rounded-2xl p-5 border border-emerald-100 shadow-card hover:border-emerald-400 transition-colors flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-emerald-700 font-semibold block">WhatsApp</span>
                  <strong className="text-base font-extrabold text-emerald-950">+971 50 123 4567</strong>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:info@jazzrockers.ae"
                className="bg-white rounded-2xl p-5 border border-gray-100 shadow-card hover:border-brand-pink transition-colors flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-pink-50 text-brand-pink flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 font-semibold block">Email</span>
                  <strong className="text-sm font-extrabold text-brand-purple">info@jazzrockers.ae</strong>
                </div>
              </a>

              {/* Hours Card */}
              <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-card flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-brand-purple flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-brand-pink" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 font-semibold block">Opening Hours</span>
                  <strong className="text-xs sm:text-sm font-extrabold text-brand-purple">Mon - Sat: 8 AM - 9 PM</strong>
                </div>
              </div>
            </div>

            {/* Dubai Branches Listing */}
            <div className="bg-gray-50/70 rounded-3xl p-6 sm:p-8 border border-gray-200/80">
              <h3 className="text-xl font-extrabold text-brand-purple mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-brand-pink" />
                <span>Our Dubai Branch Locations</span>
              </h3>
              <div className="space-y-3">
                {BRANCHES.map((b) => (
                  <div
                    key={b.id}
                    className="p-3.5 rounded-xl bg-white border border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div>
                      <h4 className="font-extrabold text-sm text-brand-purple">
                        {b.name}
                      </h4>
                      <p className="text-xs text-gray-500">
                        {b.addressPlaceholder}
                      </p>
                    </div>
                    <a
                      href={`tel:${b.phone.replace(/\s+/g, "")}`}
                      className="text-xs font-bold text-brand-pink hover:underline shrink-0"
                    >
                      {b.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Free Trial Form (5 cols) */}
          <div className="lg:col-span-5">
            <FreeTrialForm className="shadow-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
