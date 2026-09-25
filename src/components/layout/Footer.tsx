"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  ArrowRight,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";
import { Logo } from "../ui/Logo";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="bg-[#111111] text-white pt-16 pb-8 border-t border-gray-900"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          
          {/* Col 1: Logo & Info */}
          <div className="lg:col-span-3 space-y-6">
            <Logo variant="light" />
            <p className="text-gray-300 text-[15px] leading-relaxed max-w-[280px]">
              Nurturing talent, building confidence and creating tomorrow's performers since 2012.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-[#E31E24] hover:border-[#E31E24] transition-colors">
                <Facebook className="w-[18px] h-[18px] text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-[#E31E24] hover:border-[#E31E24] transition-colors">
                <Instagram className="w-[18px] h-[18px] text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-[#E31E24] hover:border-[#E31E24] transition-colors">
                <Youtube className="w-[18px] h-[18px] text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-[#E31E24] hover:border-[#E31E24] transition-colors">
                {/* TikTok SVG */}
                <svg className="w-[18px] h-[18px] text-white fill-current" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 15.68a6.34 6.34 0 0 0 6.27 6.36 6.34 6.34 0 0 0 6.25-6.36V8.05a8.36 8.36 0 0 0 4.39 1.44V6.15a5.22 5.22 0 0 1-2.32-.46z"/></svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-[15px] font-bold uppercase tracking-wide text-white">
              QUICK LINKS
            </h4>
            <ul className="space-y-3.5 text-[15px]">
              {[
                { name: "Programs", href: "/#programs" },
                { name: "Gallery", href: "/#gallery" },
                { name: "Admissions", href: "/#admissions" },
                { name: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span className="text-[#E31E24] text-[18px] leading-none font-bold">›</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Our Branches */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-[15px] font-bold uppercase tracking-wide text-white">
              OUR BRANCHES
            </h4>
            <ul className="space-y-3.5 text-[15px] text-gray-300">
              {[
                "Al Nahda, Dubai",
                "Karama, Dubai",
                "Mirdif, Dubai",
                "JLT, Dubai",
                "International City, Dubai",
              ].map((branch) => (
                <li key={branch} className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#E31E24] flex-shrink-0" />
                  <span>{branch}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Us */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-[15px] font-bold uppercase tracking-wide text-white">
              CONTACT US
            </h4>
            <div className="space-y-4 text-[15px] text-gray-300">
              <a href="tel:+971800509" className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-[#E31E24] fill-[#E31E24] shrink-0" />
                <span>+971 800509</span>
              </a>
              <a href="https://wa.me/971800509" className="flex items-center gap-3 hover:text-white transition-colors">
                <svg className="w-4 h-4 text-green-500 fill-current shrink-0" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                <span>+971 800509</span>
              </a>
              <a href="mailto:contact@jazzrockers.com" className="flex items-center gap-3 hover:text-white transition-colors pb-5 border-b border-gray-800">
                <Mail className="w-4 h-4 text-[#E31E24] shrink-0" />
                <span>contact@jazzrockers.com</span>
              </a>

              <div className="flex gap-3 pt-3">
                <Clock className="w-[18px] h-[18px] text-[#E31E24] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white mb-2 text-[14px]">Opening Hours</div>
                  <div className="text-[13.5px]">Mon - Fri : 8:45 AM - 8:45 PM</div>
                  <div className="text-[13.5px] mt-1">Sat - Sun : 8:45 AM TO 8PM</div>
                </div>
              </div>
            </div>
          </div>

          {/* Col 5: Map Iframe */}
          <div className="lg:col-span-3 h-[250px] lg:h-full min-h-[250px] rounded-2xl overflow-hidden mt-4 lg:mt-0 flex flex-col items-center">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29581230.299563926!2d16.384959099999985!3d25.1698146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f61b90587e5a3%3A0xcacb4b3f2a3dd431!2sjazzrockers%20-%20International%20City%20Branch%20(Music%2FDance%2FFitness%2FFine%20Arts%20Classes)!5e0!3m2!1sen!2sin!4v1789897738501!5m2!1sen!2sin" 
              className="w-full h-full border-0 min-h-[250px]" 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between text-[13.5px] text-gray-300 gap-4">
          <p>© {currentYear} JazzRockers. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-gray-700">|</span>
            <Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <span className="text-gray-700">|</span>
            <Link href="#" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
