import React from "react";
import { User, Phone, Calendar, ChevronDown, MapPin } from "lucide-react";

interface FreeTrialFormProps {
  className?: string;
  defaultProgram?: string;
  defaultBranch?: string;
  compact?: boolean;
  onSuccess?: () => void;
}

export const FreeTrialForm: React.FC<FreeTrialFormProps> = ({ className = "" }) => {
  return (
    <div className={`bg-white rounded-[1.5rem] overflow-hidden shadow-2xl ${className}`}>
      {/* Pink Header */}
      <div className="bg-[#E91E73] px-6 py-8 text-center text-white">
        <h3 className="text-[1.75rem] font-bold mb-1">Book a FREE Trial Class</h3>
        <p className="text-[15px] font-medium tracking-wide">Limited Seats – Enroll Today!</p>
      </div>

      {/* Form Body */}
      <div className="p-6 md:p-8 space-y-4">
        {/* Parent Name */}
        <div className="relative">
          <input
            type="text"
            placeholder="Parent Name"
            className="w-full pl-5 pr-12 py-3.5 rounded-xl border border-gray-200 text-[15px] focus:outline-none focus:border-[#E91E73] text-gray-700 font-medium placeholder-gray-500"
          />
          <User className="absolute right-4 top-1/2 -translate-y-1/2 w-[22px] h-[22px] text-gray-800" />
        </div>

        {/* Phone Number */}
        <div className="relative">
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full pl-5 pr-12 py-3.5 rounded-xl border border-gray-200 text-[15px] focus:outline-none focus:border-[#E91E73] text-gray-700 font-medium placeholder-gray-500"
          />
          <Phone className="absolute right-4 top-1/2 -translate-y-1/2 w-[22px] h-[22px] text-gray-800" />
        </div>

        {/* Child's Age */}
        <div className="relative">
          <input
            type="text"
            placeholder="Child's Age"
            className="w-full pl-5 pr-12 py-3.5 rounded-xl border border-gray-200 text-[15px] focus:outline-none focus:border-[#E91E73] text-gray-700 font-medium placeholder-gray-500"
          />
          <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-[22px] h-[22px] text-gray-800" />
        </div>

        {/* Interested In */}
        <div className="relative">
          <select
            defaultValue=""
            className="w-full pl-5 pr-12 py-3.5 rounded-xl border border-gray-200 text-[15px] appearance-none bg-white focus:outline-none focus:border-[#E91E73] text-gray-500 font-medium"
          >
            <option value="" disabled>Interested In</option>
            <option value="dance">Dance</option>
            <option value="music">Music</option>
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-[22px] h-[22px] text-gray-800" />
        </div>

        {/* Preferred Branch */}
        <div className="relative">
          <select
            defaultValue=""
            className="w-full pl-5 pr-12 py-3.5 rounded-xl border border-gray-200 text-[15px] appearance-none bg-white focus:outline-none focus:border-[#E91E73] text-gray-500 font-medium"
          >
            <option value="" disabled>Preferred Branch</option>
            <option value="branch1">Branch 1</option>
            <option value="branch2">Branch 2</option>
          </select>
          <MapPin className="absolute right-4 top-1/2 -translate-y-1/2 w-[22px] h-[22px] text-gray-800" />
        </div>

        {/* Button */}
        <div className="pt-2">
          <button className="w-full bg-[#E91E73] text-white py-[1.125rem] rounded-xl font-bold text-[15px] tracking-wide hover:bg-pink-600 transition-colors">
            BOOK FREE TRIAL
          </button>
        </div>

        {/* Trust badge */}
        <div className="flex items-center justify-center gap-2.5 pt-3">
          <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
             <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
             </svg>
          </div>
          <span className="text-[13px] font-semibold text-gray-800">We will contact you within 30 minutes</span>
        </div>
      </div>
    </div>
  );
};
