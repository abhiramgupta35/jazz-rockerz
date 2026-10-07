import React from "react";
import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FreeTrialForm } from "@/components/forms/FreeTrialForm";
import { BRANCHES } from "@/lib/data/branches";

export const metadata: Metadata = {
  title: "Contact Us | JazzRockers Academy Dubai",
  description:
    "Get in touch with JazzRockers. Call 800 509 or WhatsApp. Studios across Al Nahda, Karama, Mirdif, JLT, and International City.",
};

// Standard Solid SVGs
const PhoneIcon = () => (
  <svg viewBox="0 0 512 512" className="w-6 h-6 fill-current">
    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 448 512" className="w-7 h-7 fill-current">
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157.1zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
  </svg>
);

const EnvelopeIcon = () => (
  <svg viewBox="0 0 512 512" className="w-6 h-6 fill-current">
    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 512 512" className="w-6 h-6 fill-current">
    <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/>
  </svg>
);

export default function ContactPage() {
  return (
    <div className="min-h-screen pb-20 pt-36 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-14">
          <SectionHeading
            badge="We're Here For You"
            title="CONTACT JAZZROCKERS"
            highlightWord="JAZZROCKERS"
            subtitle="Reach out directly to speak with our admissions advisors or book a trial class at your nearest studio."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Details & Branches */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Contact Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              {/* Phone */}
              <a
                href="tel:+971800509"
                className="group bg-white rounded-[1.5rem] p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:border-red-100 transition-all flex items-start gap-4"
              >
                <div className="w-14 h-14 rounded-2xl bg-red-50 text-[#E31E24] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <PhoneIcon />
                </div>
                <div className="pt-1">
                  <span className="text-[13px] text-gray-500 font-bold uppercase tracking-wider block mb-1">Telephone</span>
                  <strong className="text-xl font-black text-gray-900 group-hover:text-[#E31E24] transition-colors">+971 800 509</strong>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/971800509?text=Hello%20JazzRockers!%20I%20would%20like%20to%20enquire%20about%20your%20dance%2C%20music%2C%20gymnastics%2C%20and%20fine%20arts%20classes."
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-[1.5rem] p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:border-green-100 transition-all flex items-start gap-4"
              >
                <div className="w-14 h-14 rounded-2xl bg-green-50 text-[#25D366] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <WhatsAppIcon />
                </div>
                <div className="pt-1">
                  <span className="text-[13px] text-gray-500 font-bold uppercase tracking-wider block mb-1">WhatsApp</span>
                  <strong className="text-xl font-black text-gray-900 group-hover:text-[#25D366] transition-colors">+971 800 509</strong>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:contact@jazzrockers.com"
                className="group bg-white rounded-[1.5rem] p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all flex items-start gap-4"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <EnvelopeIcon />
                </div>
                <div className="pt-1">
                  <span className="text-[13px] text-gray-500 font-bold uppercase tracking-wider block mb-1">Email Us</span>
                  <strong className="text-[15px] font-black text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1 mt-1">contact@jazzrockers.com</strong>
                </div>
              </a>

              {/* Hours */}
              <div className="bg-white rounded-[1.5rem] p-6 border border-gray-100 shadow-sm flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                  <ClockIcon />
                </div>
                <div className="pt-1 w-full">
                  <span className="text-[13px] text-gray-500 font-bold uppercase tracking-wider block mb-1">Opening Hours</span>
                  <div className="text-[13px] font-bold text-gray-900 leading-tight space-y-1">
                    <p>Mon-Fri: <span className="text-gray-600 font-semibold">8:45 AM - 8:45 PM</span></p>
                    <p>Sat-Sun: <span className="text-gray-600 font-semibold">8:45 AM - 8:00 PM</span></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Locations Section */}
            <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#E31E24]"></div>
              
              <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
                <MapPin className="w-6 h-6 text-[#E31E24]" />
                <span>Our Branch Locations</span>
              </h3>
              
              <div className="space-y-4">
                {BRANCHES.map((b) => (
                  <div
                    key={b.id}
                    className="group p-5 rounded-2xl bg-gray-50/50 border border-gray-100 hover:border-[#E31E24]/20 hover:bg-red-50/10 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4"
                  >
                    <div className="flex-1">
                      <h4 className="font-extrabold text-base text-gray-900 mb-1 group-hover:text-[#E31E24] transition-colors">
                        {b.name}
                      </h4>
                      <p className="text-sm text-gray-500 font-medium leading-relaxed max-w-[90%]">
                        {b.addressPlaceholder}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
          </div>

          {/* Right Column: Free Trial Form */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-24">
              <FreeTrialForm className="shadow-2xl border-4 border-white/50" />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
