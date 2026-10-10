"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  FileText, 
  Printer, 
  Share2, 
  Check, 
  ChevronRight, 
  Phone, 
  Mail, 
  Clock, 
  ChevronDown,
  Building,
  HelpCircle
} from "lucide-react";

export interface TocItem {
  id: string;
  number: string;
  title: string;
}

interface LegalPageLayoutProps {
  title: string;
  subtitle: string;
  lastUpdated: string;
  activeSlug: "privacy-policy" | "terms-and-conditions";
  tocItems: TocItem[];
  children: React.ReactNode;
}

export const LegalPageLayout: React.FC<LegalPageLayoutProps> = ({
  title,
  subtitle,
  lastUpdated,
  activeSlug,
  tocItems,
  children,
}) => {
  const [activeSection, setActiveSection] = useState<string>(tocItems[0]?.id || "");
  const [copied, setCopied] = useState(false);
  const [mobileTocOpen, setMobileTocOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = tocItems.length - 1; i >= 0; i--) {
        const item = tocItems[i];
        const element = document.getElementById(item.id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [tocItems]);

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const handleShare = async () => {
    if (typeof window !== "undefined") {
      try {
        if (navigator.clipboard) {
          await navigator.clipboard.writeText(window.location.href);
          setCopied(true);
          setTimeout(() => setCopied(false), 2500);
        }
      } catch {
        // Fallback or ignore
      }
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 110;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
      setMobileTocOpen(false);
    }
  };

  return (
    <div className="min-h-screen pt-32 sm:pt-36 pb-24 relative bg-[#FBFBFE]">
      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          header, footer, .no-print, aside, nav {
            display: none !important;
          }
          main, article {
            width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          body {
            background: white !important;
            color: black !important;
            font-size: 11pt !important;
            line-height: 1.5 !important;
          }
          h1, h2, h3, h4 {
            page-break-after: avoid;
            color: black !important;
          }
          section {
            page-break-inside: avoid;
            padding-bottom: 1.5rem !important;
            border-bottom: 1px solid #ddd !important;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 no-print">
          <ol className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-500">
            <li>
              <Link href="/" className="hover:text-[#E31E24] transition-colors">
                Home
              </Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <li>
              <span className="text-gray-400">Legal</span>
            </li>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <li aria-current="page" className="text-gray-900 font-bold">
              {title}
            </li>
          </ol>
        </nav>

        {/* Page Header Banner */}
        <header className="bg-white rounded-3xl border border-gray-200/90 p-6 sm:p-10 mb-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-gray-100">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 text-[#E31E24] text-xs font-bold uppercase tracking-wider border border-red-100">
                {activeSlug === "privacy-policy" ? (
                  <ShieldCheck className="w-3.5 h-3.5" />
                ) : (
                  <FileText className="w-3.5 h-3.5" />
                )}
                <span>Official Academy Policy • UAE Jurisdiction</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight">
                {title}
              </h1>
              <p className="text-gray-600 text-base sm:text-lg max-w-3xl leading-relaxed">
                {subtitle}
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex items-center gap-2.5 shrink-0 no-print">
              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 text-gray-700 font-bold text-xs hover:bg-gray-50 hover:border-gray-300 transition-colors shadow-sm"
                title="Print or Save as PDF"
              >
                <Printer className="w-4 h-4 text-gray-500" />
                <span>Print / PDF</span>
              </button>

              <button
                type="button"
                onClick={handleShare}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 text-gray-700 font-bold text-xs hover:bg-gray-50 hover:border-gray-300 transition-colors shadow-sm"
                title="Copy Link to Clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700">Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-4 h-4 text-gray-500" />
                    <span>Copy Link</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Sub-bar: Document Metadata & Navigation Switcher */}
          <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-xs font-semibold text-gray-500">
              <span className="inline-flex items-center gap-1.5 text-gray-700">
                <Clock className="w-3.5 h-3.5 text-gray-400" />
                <span>Last Updated: <strong>{lastUpdated}</strong></span>
              </span>
              <span className="text-gray-300">•</span>
              <span>JazzRockers Performing Arts Academy LLC</span>
            </div>

            {/* Document Switcher Tab */}
            <div className="inline-flex p-1 bg-gray-100 rounded-xl border border-gray-200 text-xs font-bold no-print self-start sm:self-auto">
              <Link
                href="/privacy-policy"
                className={`px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                  activeSlug === "privacy-policy"
                    ? "bg-white text-gray-950 shadow-sm"
                    : "text-gray-600 hover:text-gray-950"
                }`}
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Privacy Policy</span>
              </Link>
              <Link
                href="/terms-and-conditions"
                className={`px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                  activeSlug === "terms-and-conditions"
                    ? "bg-white text-gray-950 shadow-sm"
                    : "text-gray-600 hover:text-gray-950"
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Terms & Conditions</span>
              </Link>
            </div>
          </div>
        </header>

        {/* Mobile Quick Table of Contents Toggle */}
        <div className="lg:hidden mb-6 no-print">
          <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm">
            <button
              type="button"
              onClick={() => setMobileTocOpen(!mobileTocOpen)}
              className="w-full flex items-center justify-between text-left font-bold text-gray-900 text-sm"
            >
              <span className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#E31E24]" />
                <span>Table of Contents ({tocItems.length} Sections)</span>
              </span>
              <ChevronDown
                className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                  mobileTocOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {mobileTocOpen && (
              <div className="mt-4 pt-3 border-t border-gray-100 space-y-1.5 max-h-80 overflow-y-auto">
                {tocItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left py-2 px-3 rounded-lg text-xs font-semibold flex items-start gap-2 transition-colors ${
                      activeSection === item.id
                        ? "bg-red-50 text-[#E31E24] font-bold"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <span className="text-gray-400 font-mono shrink-0">{item.number}</span>
                    <span>{item.title}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* 2-Column Grid: Left Sticky TOC & Right Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Desktop Sticky Table of Contents & Quick Contact */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-28 space-y-6 no-print">
            
            {/* Table of Contents Box */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm max-h-[calc(100vh-160px)] flex flex-col">
              <div className="pb-3 border-b border-gray-100 flex items-center justify-between">
                <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Document Contents
                </h2>
                <span className="text-[11px] font-mono text-gray-400">
                  {tocItems.length} Sections
                </span>
              </div>

              <nav className="mt-3 overflow-y-auto pr-1 space-y-1 scrollbar-thin">
                {tocItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left py-2 px-2.5 rounded-xl text-xs font-medium transition-all flex items-start gap-2 group ${
                        isActive
                          ? "bg-red-50 text-[#E31E24] font-bold shadow-sm"
                          : "text-gray-600 hover:text-gray-950 hover:bg-gray-50"
                      }`}
                    >
                      <span
                        className={`font-mono text-[11px] shrink-0 ${
                          isActive
                            ? "text-[#E31E24] font-bold"
                            : "text-gray-400 group-hover:text-gray-600"
                        }`}
                      >
                        {item.number}
                      </span>
                      <span className="leading-snug line-clamp-2">{item.title}</span>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Quick Contact & Inquiries Card */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-5 shadow-sm border border-gray-700/50 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#E31E24] flex items-center justify-center">
                  <HelpCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-white">Legal Questions?</h3>
                  <p className="text-[11px] text-gray-400">Our administration desk is here to help</p>
                </div>
              </div>

              <p className="text-xs text-gray-300 leading-relaxed">
                If you require clarification on admissions, fee refunds, medical waivers, or personal data rights:
              </p>

              <div className="space-y-2 pt-1 text-xs">
                <a
                  href="tel:+971800509"
                  className="flex items-center gap-2.5 text-gray-200 hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#E31E24] shrink-0" />
                  <span className="font-semibold">+971 800 509 (Toll-Free)</span>
                </a>
                <a
                  href="mailto:contact@jazzrockers.com"
                  className="flex items-center gap-2.5 text-gray-200 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#E31E24] shrink-0" />
                  <span className="font-semibold">contact@jazzrockers.com</span>
                </a>
                <div className="flex items-start gap-2.5 text-gray-300 pt-1">
                  <Building className="w-3.5 h-3.5 text-[#E31E24] shrink-0 mt-0.5" />
                  <span className="text-[11px] text-gray-400 leading-tight">
                    Head Office: Emirates N Tower, Al Nahda 1, Sharjah & 4 Studios across Dubai
                  </span>
                </div>
              </div>
            </div>

          </aside>

          {/* Right Column: Full Document Body */}
          <main className="lg:col-span-8">
            <article className="bg-white rounded-3xl border border-gray-200/90 p-6 sm:p-10 lg:p-12 shadow-sm space-y-12">
              {children}
            </article>

            {/* Footer Support Banner inside Main Layout */}
            <div className="mt-8 bg-white rounded-2xl border border-gray-200 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 no-print shadow-sm">
              <div className="space-y-1 text-center sm:text-left">
                <h3 className="font-bold text-gray-900 text-sm">
                  Need this document in another format?
                </h3>
                <p className="text-xs text-gray-500">
                  Printed copies, certified admissions waivers, and Arabic language summaries are available upon request at our studio reception desks.
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl text-xs font-bold transition-colors"
                >
                  Print Document
                </button>
                <Link
                  href="/contact"
                  className="px-4 py-2 bg-[#E31E24] hover:bg-[#C91A1F] text-white rounded-xl text-xs font-bold transition-colors"
                >
                  Contact Reception
                </Link>
              </div>
            </div>
          </main>

        </div>

      </div>
    </div>
  );
};
