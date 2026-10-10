"use client";

import React, { useState, useEffect } from "react";
import { User, Phone, Baby, ChevronDown, MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import { BRANCHES } from "@/lib/data/branches";
import { useModal } from "@/context/ModalContext";
import { formatTrialBookingMessage } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

interface FreeTrialFormProps {
  className?: string;
  defaultProgram?: string;
  defaultBranch?: string;
  compact?: boolean;
  onSuccess?: () => void;
}

export const FreeTrialForm: React.FC<FreeTrialFormProps> = ({
  className = "",
  defaultProgram = "",
  defaultBranch = "",
  onSuccess,
}) => {
  const { openWhatsAppModal } = useModal();

  const [parentName, setParentName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [childAge, setChildAge] = useState("");
  const [interestedIn, setInterestedIn] = useState(defaultProgram || "");
  const [preferredBranch, setPreferredBranch] = useState(defaultBranch || "");

  const [errors, setErrors] = useState<{
    parentName?: string;
    phoneNumber?: string;
    interestedIn?: string;
    preferredBranch?: string;
  }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lastSubmittedMessage, setLastSubmittedMessage] = useState("");

  // Sync defaultProgram if prop updates
  useEffect(() => {
    if (defaultProgram) {
      setInterestedIn(defaultProgram);
    }
  }, [defaultProgram]);

  useEffect(() => {
    if (defaultBranch) {
      setPreferredBranch(defaultBranch);
    }
  }, [defaultBranch]);

  const validate = () => {
    const newErrors: {
      parentName?: string;
      phoneNumber?: string;
      interestedIn?: string;
      preferredBranch?: string;
    } = {};

    if (!parentName.trim() || parentName.trim().length < 2) {
      newErrors.parentName = "Please enter parent or guardian name";
    }

    const digitsOnly = phoneNumber.replace(/\D/g, "");
    if (!digitsOnly || digitsOnly.length < 7) {
      newErrors.phoneNumber = "Please enter a valid phone or WhatsApp number";
    }

    if (!interestedIn) {
      newErrors.interestedIn = "Please select a program";
    }

    if (!preferredBranch) {
      newErrors.preferredBranch = "Please select a branch location";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const branchObj = BRANCHES.find((b) => b.id === preferredBranch);
    const branchName = branchObj ? branchObj.name : preferredBranch;

    const formattedMessage = formatTrialBookingMessage({
      parentName,
      phoneNumber,
      childAge,
      interestedIn,
      preferredBranch,
      branchName,
    });

    setLastSubmittedMessage(formattedMessage);
    setIsSubmitted(true);

    trackEvent("form_submission", {
      form_name: "free_trial",
      program: interestedIn,
      branch: preferredBranch,
    });

    // Open WhatsApp Confirmation Modal with formatted details
    openWhatsAppModal({
      isFormSubmission: true,
      title: "Booking Received! Confirm on WhatsApp",
      subtitle:
        "Your free trial details are ready. Continue to WhatsApp to send them to our admissions team instantly.",
      badge: "Trial Booking",
      message: formattedMessage,
    });

    if (onSuccess) {
      onSuccess();
    }
  };

  const handleReopenWhatsApp = () => {
    if (lastSubmittedMessage) {
      openWhatsAppModal({
        isFormSubmission: true,
        title: "Booking Received! Confirm on WhatsApp",
        subtitle:
          "Your free trial details are ready. Continue to WhatsApp to send them to our admissions team instantly.",
        badge: "Trial Booking",
        message: lastSubmittedMessage,
      });
    }
  };

  return (
    <div className={`bg-white rounded-[1.5rem] overflow-hidden shadow-2xl ${className}`}>
      {/* Brand Header */}
      <div className="bg-[#E31E24] px-6 py-7 sm:py-8 text-center text-white relative">
        <h3 className="text-2xl sm:text-[1.75rem] font-black tracking-tight mb-1">
          Book a FREE Trial Class
        </h3>
        <p className="text-xs sm:text-[14px] font-semibold text-white/90 tracking-wide uppercase">
          Limited Seats • Instant WhatsApp Confirmation
        </p>
      </div>

      {/* Form Body or Success State */}
      {isSubmitted ? (
        <div className="p-6 md:p-8 text-center space-y-4">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <h4 className="text-xl font-black text-gray-900">
            Booking Request Received!
          </h4>

          <p className="text-sm text-gray-600 leading-relaxed">
            Thank you, <span className="font-bold text-gray-900">{parentName}</span>! Your details have been captured and formatted for our WhatsApp admissions desk.
          </p>

          <div className="pt-2">
            <button
              type="button"
              onClick={handleReopenWhatsApp}
              className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-3.5 px-4 rounded-xl font-black text-sm tracking-wide shadow-lg shadow-green-600/20 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <span>Send Details via WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <button
            type="button"
            onClick={() => {
              setIsSubmitted(false);
              setParentName("");
              setPhoneNumber("");
              setChildAge("");
              setInterestedIn("");
              setPreferredBranch("");
            }}
            className="text-xs text-gray-500 hover:text-[#E31E24] font-semibold underline transition-colors pt-2"
          >
            Submit another enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="p-6 md:p-8 space-y-4">
          {/* Parent Name */}
          <div>
            <div className="relative">
              <input
                type="text"
                name="parentName"
                id="parentName"
                value={parentName}
                onChange={(e) => {
                  setParentName(e.target.value);
                  if (errors.parentName) setErrors((prev) => ({ ...prev, parentName: undefined }));
                }}
                placeholder="Parent Name *"
                aria-label="Parent Name"
                required
                className={`w-full pl-5 pr-12 py-3.5 rounded-xl border text-[15px] focus:outline-none text-gray-800 font-medium placeholder-gray-400 transition-colors ${
                  errors.parentName
                    ? "border-red-500 focus:border-red-600 bg-red-50/20"
                    : "border-gray-200 focus:border-[#E31E24]"
                }`}
              />
              <User className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
            {errors.parentName && (
              <p className="text-red-500 text-xs mt-1 font-semibold pl-1">{errors.parentName}</p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <div className="relative">
              <input
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                  if (errors.phoneNumber) setErrors((prev) => ({ ...prev, phoneNumber: undefined }));
                }}
                placeholder="Phone / WhatsApp Number *"
                aria-label="Phone or WhatsApp Number"
                required
                className={`w-full pl-5 pr-12 py-3.5 rounded-xl border text-[15px] focus:outline-none text-gray-800 font-medium placeholder-gray-400 transition-colors ${
                  errors.phoneNumber
                    ? "border-red-500 focus:border-red-600 bg-red-50/20"
                    : "border-gray-200 focus:border-[#E31E24]"
                }`}
              />
              <Phone className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
            {errors.phoneNumber && (
              <p className="text-red-500 text-xs mt-1 font-semibold pl-1">{errors.phoneNumber}</p>
            )}
          </div>

          {/* Child's Age */}
          <div className="relative">
            <input
              type="text"
              name="childAge"
              id="childAge"
              value={childAge}
              onChange={(e) => setChildAge(e.target.value)}
              placeholder="Child's Age (e.g. 5 years)"
              aria-label="Child's Age"
              className="w-full pl-5 pr-12 py-3.5 rounded-xl border border-gray-200 text-[15px] focus:outline-none focus:border-[#E31E24] text-gray-800 font-medium placeholder-gray-400"
            />
            <Baby className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>

          {/* Interested In */}
          <div>
            <div className="relative">
              <select
                value={interestedIn}
                onChange={(e) => {
                  setInterestedIn(e.target.value);
                  if (errors.interestedIn) setErrors((prev) => ({ ...prev, interestedIn: undefined }));
                }}
                aria-label="Interested In Program"
                className={`w-full pl-5 pr-12 py-3.5 rounded-xl border text-[15px] appearance-none bg-white focus:outline-none transition-colors cursor-pointer ${
                  !interestedIn ? "text-gray-400 font-normal" : "text-gray-800 font-medium"
                } ${
                  errors.interestedIn
                    ? "border-red-500 focus:border-red-600 bg-red-50/20"
                    : "border-gray-200 focus:border-[#E31E24]"
                }`}
              >
                <option value="" className="text-gray-400">
                  Select Program *
                </option>
                <option value="Dance" className="text-gray-800">
                  Dance (Ballet, Hip Hop, Bollywood, Classical)
                </option>
                <option value="Music" className="text-gray-800">
                  Music (Piano, Guitar, Drums, Vocal, Violin)
                </option>
                <option value="Gymnastics" className="text-gray-800">
                  Gymnastics & Acro
                </option>
                <option value="Fine Arts" className="text-gray-800">
                  Fine Arts & Painting
                </option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
            {errors.interestedIn && (
              <p className="text-red-500 text-xs mt-1 font-semibold pl-1">{errors.interestedIn}</p>
            )}
          </div>

          {/* Preferred Branch */}
          <div>
            <div className="relative">
              <select
                value={preferredBranch}
                onChange={(e) => {
                  setPreferredBranch(e.target.value);
                  if (errors.preferredBranch) setErrors((prev) => ({ ...prev, preferredBranch: undefined }));
                }}
                aria-label="Preferred Branch"
                className={`w-full pl-5 pr-12 py-3.5 rounded-xl border text-[15px] appearance-none bg-white focus:outline-none transition-colors cursor-pointer ${
                  !preferredBranch ? "text-gray-400 font-normal" : "text-gray-800 font-medium"
                } ${
                  errors.preferredBranch
                    ? "border-red-500 focus:border-red-600 bg-red-50/20"
                    : "border-gray-200 focus:border-[#E31E24]"
                }`}
              >
                <option value="" className="text-gray-400">
                  Select Preferred Branch *
                </option>
                {BRANCHES.map((branch) => (
                  <option key={branch.id} value={branch.id} className="text-gray-800">
                    {branch.name}
                  </option>
                ))}
              </select>
              <MapPin className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
            {errors.preferredBranch && (
              <p className="text-red-500 text-xs mt-1 font-semibold pl-1">{errors.preferredBranch}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-[#E31E24] hover:bg-[#C91A1F] active:scale-[0.98] text-white py-4 rounded-xl font-black text-[15px] tracking-wider uppercase transition-all shadow-lg shadow-red-500/25 flex items-center justify-center gap-2"
            >
              <span>BOOK FREE TRIAL</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Trust Badge */}
          <div className="flex items-center justify-center gap-2 pt-2 text-center">
            <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center shrink-0">
              <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-xs font-bold text-gray-700">
              Details forwarded to WhatsApp admissions instantly
            </span>
          </div>
        </form>
      )}
    </div>
  );
};
