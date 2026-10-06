"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { Logo } from "../ui/Logo";
import { useModal } from "@/context/ModalContext";

export const Header: React.FC = () => {
  const { openModal } = useModal();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="absolute top-0 z-40 w-full bg-white rounded-b-[2.5rem] shadow-sm px-6 py-4 flex items-center justify-between">
      <div className="shrink-0 pl-4">
        <Logo variant="dark" />
      </div>

      <nav className="hidden lg:flex items-center gap-6">
        {navLinks.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center gap-1 text-[15px] font-bold text-black hover:text-[#E31E24] transition-colors"
          >
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="hidden lg:flex items-center gap-6 pr-4">
        <div className="flex items-center gap-2">
          <Phone className="w-5 h-5 text-[#E31E24]" fill="currentColor" />
          <div className="flex flex-col text-left leading-tight">
            <span className="text-[11px] text-gray-500 font-semibold">Call Us</span>
            <span className="text-[15px] font-extrabold text-black">+971 800509</span>
          </div>
        </div>

        <a
          href="https://wa.me/971800509"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:bg-[#1ebe57] shadow-sm hover:shadow-md transition-all"
        >
          <svg viewBox="0 0 448 512" className="w-5 h-5 fill-current">
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157.1zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
          </svg>
        </a>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#E31E24] to-[#9b59b6] rounded-[2rem] blur opacity-50 group-hover:opacity-80 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
          <button 
            onClick={() => openModal()}
            className="relative bg-[#E31E24] text-white px-8 py-3 rounded-[2rem] font-bold text-sm tracking-wide hover:bg-red- transition-colors shadow-lg"
          >
            BOOK FREE TRIAL
          </button>
        </div>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button 
        className="lg:hidden p-2 text-black"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-b-[1.5rem] py-4 px-6 flex flex-col gap-4 lg:hidden z-50 border-t border-gray-100">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[15px] font-bold text-black hover:text-[#E31E24] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-gray-100 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-[#E31E24]" fill="currentColor" />
              <div className="flex flex-col text-left leading-tight">
                <span className="text-[11px] text-gray-500 font-semibold">Call Us</span>
                <span className="text-[15px] font-extrabold text-black">+971 800509</span>
              </div>
            </div>
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                openModal();
              }}
              className="w-full bg-[#E31E24] text-white px-8 py-3 rounded-[2rem] font-bold text-sm tracking-wide shadow-lg"
            >
              BOOK FREE TRIAL
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
