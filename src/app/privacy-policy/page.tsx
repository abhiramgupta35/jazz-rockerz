import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageLayout, TocItem } from "@/components/legal/LegalPageLayout";
import { 
  ShieldAlert, 
  CheckCircle, 
  Lock, 
  UserCheck, 
  Phone, 
  Mail, 
  Camera, 
  HeartPulse, 
  Building2,
  FileCheck2,
  AlertTriangle,
  HelpCircle
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | JazzRockers Academy Dubai & UAE",
  description:
    "Official Privacy Policy of JazzRockers Performing Arts Academy. Learn how we collect, safeguard, and process personal data in compliance with UAE Federal Decree-Law No. 45 of 2021.",
  openGraph: {
    title: "Privacy Policy | JazzRockers Academy UAE",
    description:
      "Comprehensive data protection terms, student privacy standards, and parental consent details for JazzRockers Performing Arts Academy.",
  },
};

const TOC_ITEMS: TocItem[] = [
  { id: "intro-controller", number: "1.0", title: "Introduction & Data Controller" },
  { id: "legal-framework", number: "2.0", title: "UAE PDPL Legal Framework" },
  { id: "data-we-collect", number: "3.0", title: "Personal Data We Collect" },
  { id: "lawful-bases", number: "4.0", title: "Lawful Bases for Processing" },
  { id: "how-we-use-data", number: "5.0", title: "How We Use Your Information" },
  { id: "messaging-whatsapp", number: "6.0", title: "WhatsApp & Direct Communications" },
  { id: "media-photography", number: "7.0", title: "Media, Recitals & Studio Photography" },
  { id: "data-sharing", number: "8.0", title: "Data Sharing & Third-Party Service Providers" },
  { id: "data-retention", number: "9.0", title: "Data Retention & Storage Schedule" },
  { id: "security-measures", number: "10.0", title: "Data Security & Physical Safeguards" },
  { id: "individual-rights", number: "11.0", title: "Your Rights Under UAE Data Protection Law" },
  { id: "minors-protection", number: "12.0", title: "Children's Privacy Protection (Minors)" },
  { id: "cookies-tracking", number: "13.0", title: "Cookies & Digital Analytics" },
  { id: "contact-dpo", number: "14.0", title: "Data Protection Officer & Contact Channels" },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      subtitle="This document outlines how JazzRockers Performing Arts Academy collects, protects, uses, and retains personal data belonging to parents, students, and website visitors across our studios in Dubai and Sharjah, United Arab Emirates."
      lastUpdated="October 2024 (Version 2.4)"
      activeSlug="privacy-policy"
      tocItems={TOC_ITEMS}
    >
      {/* 1.0 Introduction & Data Controller */}
      <section id="intro-controller" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
          <span className="text-xs font-mono font-bold text-[#E31E24] bg-red-50 px-2 py-0.5 rounded">
            SECTION 1.0
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-gray-950">
            Introduction & Identity of Data Controller
          </h2>
        </div>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          Welcome to <strong>JazzRockers Performing Arts Academy</strong> (&ldquo;JazzRockers&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). We operate premier performing arts centers specializing in Dance, Music, Gymnastics, and Fine Arts for students aged 2.5 years to adults across Dubai and Sharjah, United Arab Emirates.
        </p>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          For the purposes of applicable data protection legislation in the United Arab Emirates, the designated Data Controller responsible for your personal data is:
        </p>

        <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200/80 space-y-2 text-sm text-gray-800">
          <p className="font-bold text-gray-950 flex items-center gap-2">
            <Building2 className="w-4 h-4 text-[#E31E24]" />
            <span>JazzRockers Performing Arts Academy LLC</span>
          </p>
          <p><strong>Corporate Headquarters:</strong> Office No. 205, Emirates N Tower, Al Nahda 1, Sharjah, United Arab Emirates</p>
          <p><strong>Dubai Studios:</strong> Al Nahda 2, Al Karama, International City (CBD B04), Muhaisnah 4</p>
          <p><strong>Central Admissions Hotline:</strong> +971 800 509</p>
          <p><strong>Privacy Inquiries:</strong> contact@jazzrockers.com</p>
        </div>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          By enrolling a student, submitting a free trial booking, interacting with our customer service desks, or browsing <Link href="/" className="text-[#E31E24] hover:underline font-semibold">jazzrockers.ae</Link>, you acknowledge that your personal information will be handled strictly in accordance with this Privacy Policy.
        </p>
      </section>

      {/* 2.0 UAE PDPL Legal Framework */}
      <section id="legal-framework" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
          <span className="text-xs font-mono font-bold text-[#E31E24] bg-red-50 px-2 py-0.5 rounded">
            SECTION 2.0
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-gray-950">
            UAE PDPL Legal Framework
          </h2>
        </div>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          Our data collection, storage, and processing practices are governed by <strong>UAE Federal Decree-Law No. 45 of 2021 regarding the Protection of Personal Data (&ldquo;UAE PDPL&rdquo;)</strong>, as well as local regulatory guidelines established by the Knowledge and Human Development Authority (KHDA), the Dubai Department of Economy and Tourism (DET), and the UAE Federal Tax Authority (FTA).
        </p>

        <div className="bg-blue-50/70 border border-blue-200/80 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5">
          <FileCheck2 className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-blue-900 leading-relaxed space-y-1">
            <strong className="block font-bold">Commitment to Principles:</strong>
            We abide by core data integrity principles: fairness, lawfulness, purpose limitation, data minimization, accuracy, storage limitation, and robust security safeguards.
          </div>
        </div>
      </section>

      {/* 3.0 Personal Data We Collect */}
      <section id="data-we-collect" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
          <span className="text-xs font-mono font-bold text-[#E31E24] bg-red-50 px-2 py-0.5 rounded">
            SECTION 3.0
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-gray-950">
            Personal Data We Collect
          </h2>
        </div>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          Depending on how you interact with JazzRockers, we collect personal data categorized below:
        </p>

        <div className="overflow-x-auto border border-gray-200 rounded-2xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-gray-50 border-b border-gray-200 text-gray-900 font-bold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="py-3.5 px-4 sm:px-6">Category</th>
                <th className="py-3.5 px-4 sm:px-6">Specific Data Elements</th>
                <th className="py-3.5 px-4 sm:px-6">Collection Method</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-700">
              <tr>
                <td className="py-3.5 px-4 sm:px-6 font-bold text-gray-900">Parent / Guardian Data</td>
                <td className="py-3.5 px-4 sm:px-6">Full legal name, Emirates ID (where required for official exam registration), phone number, WhatsApp handle, email address, physical residence area.</td>
                <td className="py-3.5 px-4 sm:px-6">Enrolment forms, Free Trial bookings, Reception desk sign-up.</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 sm:px-6 font-bold text-gray-900">Student Profile (Minors & Adults)</td>
                <td className="py-3.5 px-4 sm:px-6">First and last name, date of birth, age, gender, school attended, prior arts experience, enrolled discipline (Dance, Music, Gymnastics, Fine Arts).</td>
                <td className="py-3.5 px-4 sm:px-6">Registration portal, trial evaluation forms.</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 sm:px-6 font-bold text-gray-900">Health & Medical Needs</td>
                <td className="py-3.5 px-4 sm:px-6">Allergies, chronic conditions (e.g. asthma, joint issues), physical mobility limitations, emergency medical contact numbers.</td>
                <td className="py-3.5 px-4 sm:px-6">Medical disclosure section of the enrolment contract.</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 sm:px-6 font-bold text-gray-900">Billing & Payment Records</td>
                <td className="py-3.5 px-4 sm:px-6">VAT tax invoices, payment receipt vouchers, bank transfer confirmations, gateway transaction IDs. (We do <em>not</em> store full card CVVs or raw bank credentials).</td>
                <td className="py-3.5 px-4 sm:px-6">Studio POS terminals, bank transfer slips, authorized online gateways.</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 sm:px-6 font-bold text-gray-900">Digital & Technical Data</td>
                <td className="py-3.5 px-4 sm:px-6">IP address, device hardware model, operating system, browser type, referral URLs, time stamps, UTM parameters.</td>
                <td className="py-3.5 px-4 sm:px-6">Automated web server logs & Google Analytics.</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 sm:px-6 font-bold text-gray-900">Visual & Media Records</td>
                <td className="py-3.5 px-4 sm:px-6">Studio recital photographs, showcase video recordings, student performance footage, reception CCTV security footage.</td>
                <td className="py-3.5 px-4 sm:px-6">Live stage recitals, annual shows, in-branch security cameras.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 4.0 Lawful Bases for Processing */}
      <section id="lawful-bases" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
          <span className="text-xs font-mono font-bold text-[#E31E24] bg-red-50 px-2 py-0.5 rounded">
            SECTION 4.0
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-gray-950">
            Lawful Bases for Processing
          </h2>
        </div>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          Under the UAE PDPL, JazzRockers processes personal data strictly under valid lawful grounds:
        </p>

        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex items-start gap-3">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
            <span><strong>Contractual Performance:</strong> Necessary to fulfill tuition agreements, reserve studio time, deliver dance/music coaching, and issue student attendance sheets.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
            <span><strong>Parental / Guardian Consent:</strong> Provided when booking trial classes, agreeing to WhatsApp updates, or signing media release waivers for public recitals.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
            <span><strong>Vital Interests & Health Safeguards:</strong> Required to protect the life or physical safety of a student during gymnastics or dance activities where immediate first aid or emergency hospital transfer is required.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
            <span><strong>Statutory Legal Compliance:</strong> Compliance with UAE commercial laws, VAT invoicing retention under UAE FTA rules, and mandatory public safety ordinances.</span>
          </li>
        </ul>
      </section>

      {/* 5.0 How We Use Your Information */}
      <section id="how-we-use-data" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
          <span className="text-xs font-mono font-bold text-[#E31E24] bg-red-50 px-2 py-0.5 rounded">
            SECTION 5.0
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-gray-950">
            How We Use Your Information
          </h2>
        </div>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          We use your data solely for legitimate, clearly stated educational and administrative operations:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/50 space-y-1.5">
            <h4 className="font-bold text-gray-900 text-sm flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-[#E31E24]" />
              <span>Academic & Studio Operations</span>
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Allocating classes, assigning instructors, tracking progress milestones, managing studio capacity, and arranging level gradings.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/50 space-y-1.5">
            <h4 className="font-bold text-gray-900 text-sm flex items-center gap-2">
              <HeartPulse className="w-4 h-4 text-[#E31E24]" />
              <span>Health & Studio Safety</span>
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Informing coaches of student allergies or physical constraints during acrobatic/dance routines, maintaining clean attendance registers.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/50 space-y-1.5">
            <h4 className="font-bold text-gray-900 text-sm flex items-center gap-2">
              <FileCheck2 className="w-4 h-4 text-[#E31E24]" />
              <span>International Exam Registrations</span>
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Submitting student details to internationally accredited examination boards (e.g. Trinity College London, Rockschool) for certified diplomas.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/50 space-y-1.5">
            <h4 className="font-bold text-gray-900 text-sm flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#E31E24]" />
              <span>Financial & Tax Compliance</span>
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Issuing UAE Tax Invoices (TRN: 5% VAT), processing tuition fee receipts, handling refund credit notes, and statutory audits.
            </p>
          </div>
        </div>
      </section>

      {/* 6.0 WhatsApp & Direct Communications */}
      <section id="messaging-whatsapp" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
          <span className="text-xs font-mono font-bold text-[#E31E24] bg-red-50 px-2 py-0.5 rounded">
            SECTION 6.0
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-gray-950">
            WhatsApp & Direct Communications
          </h2>
        </div>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          Because WhatsApp is the standard operational communication medium in the United Arab Emirates, JazzRockers utilizes official WhatsApp Business channels to communicate critical updates directly to parents and adult students.
        </p>

        <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-4 sm:p-5 space-y-3">
          <h4 className="font-bold text-emerald-950 text-sm flex items-center gap-2">
            <span>What We Send via WhatsApp:</span>
          </h4>
          <ul className="text-xs sm:text-sm text-emerald-900 space-y-2 list-disc list-inside">
            <li>Free Trial class booking confirmations and studio location maps.</li>
            <li>Class schedule alterations, emergency studio weather closures, and holiday notices.</li>
            <li>Annual recital rehearsal schedules, costume fittings, and stage call times.</li>
            <li>Termly fee reminders and invoice dispatch.</li>
          </ul>
          <p className="text-xs text-emerald-800 pt-1">
            <strong>Opt-Out Policy:</strong> You may opt out of non-essential promotional messages at any time by replying &ldquo;STOP&rdquo; on WhatsApp or emailing us at <a href="mailto:contact@jazzrockers.com" className="underline font-bold">contact@jazzrockers.com</a>. Essential schedule and child-safety alerts cannot be disabled while a student is actively enrolled.
          </p>
        </div>
      </section>

      {/* 7.0 Media, Recitals & Studio Photography */}
      <section id="media-photography" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
          <span className="text-xs font-mono font-bold text-[#E31E24] bg-red-50 px-2 py-0.5 rounded">
            SECTION 7.0
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-gray-950">
            Media, Recitals & Studio Photography
          </h2>
        </div>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          Performing arts education inherently involves public presentation, stage confidence, and recitals. As part of our academy community:
        </p>

        <div className="space-y-3 text-sm text-gray-700">
          <p>
            <strong>Public Showcase & Recitals:</strong> Annual galas, theater productions, and public recitals are public community events. Group photographs and stage video recordings captured during these events are utilized for academy archives, celebration yearbooks, and promotional highlights.
          </p>
          <p>
            <strong>In-Studio Class Media:</strong> Coaches occasionally capture short demonstration clips or photos to document technical student progress and celebrate achievements on official JazzRockers social media pages.
          </p>
          <p>
            <strong>Parental Opt-Out Right:</strong> If you prefer that your child does not appear in marketing publications or social media feeds, you may submit a written opt-out notice upon enrolment or email <span className="font-mono text-xs bg-gray-100 px-2 py-1 rounded">contact@jazzrockers.com</span> with your child&apos;s full name and enrolled branch. Our production team will respect your preference and exclude your child from promotional close-up media.
          </p>
        </div>
      </section>

      {/* 8.0 Data Sharing & Third-Party Service Providers */}
      <section id="data-sharing" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
          <span className="text-xs font-mono font-bold text-[#E31E24] bg-red-50 px-2 py-0.5 rounded">
            SECTION 8.0
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-gray-950">
            Data Sharing & Third-Party Service Providers
          </h2>
        </div>

        <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-amber-900 text-xs sm:text-sm font-semibold flex items-center gap-2.5">
          <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0" />
          <span><strong>Zero Commercial Sale Guarantee:</strong> JazzRockers has never sold, leased, or traded parent or student personal data to third-party telemarketers or advertisers, and will never do so.</span>
        </div>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          We share data only with authorized service providers subject to strict confidentiality agreements:
        </p>

        <ul className="space-y-2.5 text-xs sm:text-sm text-gray-700">
          <li><strong>Accredited Examination Boards:</strong> Organizations such as Trinity College London or Rockschool solely for formal grading, examiner schedules, and certificates.</li>
          <li><strong>Cloud Infrastructure & CRM:</strong> Secure cloud servers hosting student schedules, attendance logs, and invoice generation.</li>
          <li><strong>Payment Gateway Processors:</strong> PCI-DSS certified UAE banking and payment partners processing encrypted credit/debit card transactions.</li>
          <li><strong>Government & Legal Authorities:</strong> Disclosed only where strictly mandated by UAE Federal Law, KHDA guidelines, court subpoenas, or public health directives.</li>
        </ul>
      </section>

      {/* 9.0 Data Retention & Storage Schedule */}
      <section id="data-retention" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
          <span className="text-xs font-mono font-bold text-[#E31E24] bg-red-50 px-2 py-0.5 rounded">
            SECTION 9.0
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-gray-950">
            Data Retention & Storage Schedule
          </h2>
        </div>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          We retain personal data only for as long as required to achieve the educational, operational, and legal purposes outlined herein:
        </p>

        <div className="border border-gray-200 rounded-2xl overflow-hidden">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-gray-50 border-b border-gray-200 text-gray-900 font-bold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="py-3 px-4 sm:px-6">Record Type</th>
                <th className="py-3 px-4 sm:px-6">Retention Duration</th>
                <th className="py-3 px-4 sm:px-6">Statutory Rationale</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-700">
              <tr>
                <td className="py-3 px-4 sm:px-6 font-bold">Enrolled Student Records</td>
                <td className="py-3 px-4 sm:px-6">Duration of enrolment + 5 years</td>
                <td className="py-3 px-4 sm:px-6">UAE Federal commercial and civil dispute statute of limitations.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 sm:px-6 font-bold">Tax Invoices & Financial Slips</td>
                <td className="py-3 px-4 sm:px-6">5 full tax years</td>
                <td className="py-3 px-4 sm:px-6">Mandatory compliance with UAE Federal Tax Authority (FTA) regulations.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 sm:px-6 font-bold">Free Trial Inquiries</td>
                <td className="py-3 px-4 sm:px-6">12 months from submission</td>
                <td className="py-3 px-4 sm:px-6">Follow-up enquiries, after which non-converting leads are purged.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 sm:px-6 font-bold">CCTV Security Footage</td>
                <td className="py-3 px-4 sm:px-6">30 to 90 days rolling overwrite</td>
                <td className="py-3 px-4 sm:px-6">Studio premises physical safety and Dubai Police security standards.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 10.0 Data Security & Physical Safeguards */}
      <section id="security-measures" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
          <span className="text-xs font-mono font-bold text-[#E31E24] bg-red-50 px-2 py-0.5 rounded">
            SECTION 10.0
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-gray-950">
            Data Security & Physical Safeguards
          </h2>
        </div>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          We maintain rigorous technical, administrative, and physical security measures to safeguard all personal records:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-gray-700">
          <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/50 space-y-2">
            <Lock className="w-5 h-5 text-[#E31E24]" />
            <strong className="block text-gray-900 font-bold">Digital Encryption</strong>
            <p className="text-gray-600 text-xs leading-relaxed">
              Website forms, SSL/TLS encrypted connections, protected databases, and multi-factor staff authentication.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/50 space-y-2">
            <ShieldAlert className="w-5 h-5 text-[#E31E24]" />
            <strong className="block text-gray-900 font-bold">Access Controls</strong>
            <p className="text-gray-600 text-xs leading-relaxed">
              Role-based permission limits ensure instructors only access emergency contact and attendance data relevant to their assigned class.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/50 space-y-2">
            <Building2 className="w-5 h-5 text-[#E31E24]" />
            <strong className="block text-gray-900 font-bold">Physical Security</strong>
            <p className="text-gray-600 text-xs leading-relaxed">
              Locked physical records at front-desk administration offices, biometric / controlled access for staff, and CCTV in all public reception areas.
            </p>
          </div>
        </div>
      </section>

      {/* 11.0 Your Rights Under UAE Data Protection Law */}
      <section id="individual-rights" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
          <span className="text-xs font-mono font-bold text-[#E31E24] bg-red-50 px-2 py-0.5 rounded">
            SECTION 11.0
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-gray-950">
            Your Rights Under UAE Data Protection Law
          </h2>
        </div>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          In accordance with Chapter 2 of UAE Federal Decree-Law No. 45 of 2021, parents and eligible adult students possess the following statutory rights:
        </p>

        <div className="space-y-3 text-xs sm:text-sm text-gray-700">
          <div className="p-3.5 rounded-xl border border-gray-100 bg-white shadow-xs space-y-1">
            <strong className="text-gray-950 font-bold">1. Right of Access:</strong> You may request a summary of the personal data we hold about you and your enrolled children.
          </div>
          <div className="p-3.5 rounded-xl border border-gray-100 bg-white shadow-xs space-y-1">
            <strong className="text-gray-950 font-bold">2. Right to Rectification:</strong> You have the right to promptly correct outdated telephone numbers, addresses, emergency contacts, or medical notes.
          </div>
          <div className="p-3.5 rounded-xl border border-gray-100 bg-white shadow-xs space-y-1">
            <strong className="text-gray-950 font-bold">3. Right to Erasure (&ldquo;Right to be Forgotten&rdquo;):</strong> You may request the deletion of non-essential records where there is no ongoing legal or tax obligation for retention.
          </div>
          <div className="p-3.5 rounded-xl border border-gray-100 bg-white shadow-xs space-y-1">
            <strong className="text-gray-950 font-bold">4. Right to Restriction / Objection:</strong> You may object to the processing of personal data for direct marketing or promotional publications.
          </div>
          <div className="p-3.5 rounded-xl border border-gray-100 bg-white shadow-xs space-y-1">
            <strong className="text-gray-950 font-bold">5. Right to Withdraw Consent:</strong> Where processing is predicated on consent, you may revoke that consent at any time without impacting prior lawful processing.
          </div>
        </div>

        <p className="text-xs sm:text-sm text-gray-600 italic">
          To exercise any of these rights, submit your written request to <a href="mailto:contact@jazzrockers.com" className="text-[#E31E24] font-bold underline">contact@jazzrockers.com</a>. We will verify your identity as the legal parent/guardian and respond within thirty (30) calendar days as stipulated under UAE regulations.
        </p>
      </section>

      {/* 12.0 Children's Privacy Protection */}
      <section id="minors-protection" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
          <span className="text-xs font-mono font-bold text-[#E31E24] bg-red-50 px-2 py-0.5 rounded">
            SECTION 12.0
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-gray-950">
            Children&apos;s Privacy Protection (Minors Under 18)
          </h2>
        </div>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          Because a substantial portion of our academy students are minors aged 2.5 to 17 years old, we take safeguarding of children&apos;s data with utmost seriousness:
        </p>

        <ul className="space-y-2.5 text-xs sm:text-sm text-gray-700 list-disc list-inside">
          <li>We <strong>never knowingly collect</strong> personal contact details directly from minors without explicit parent or legal guardian authorization.</li>
          <li>All online inquiries and registration forms must be initiated and submitted by an adult parent or verified guardian.</li>
          <li>In class registers, children are listed by first name or assigned student ID numbers to safeguard identity during open rehearsals.</li>
          <li>Parents retain full authority to inspect or request modification of any stored records pertaining to their minor child.</li>
        </ul>
      </section>

      {/* 13.0 Cookies & Digital Analytics */}
      <section id="cookies-tracking" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
          <span className="text-xs font-mono font-bold text-[#E31E24] bg-red-50 px-2 py-0.5 rounded">
            SECTION 13.0
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-gray-950">
            Cookies & Digital Analytics
          </h2>
        </div>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          Our website utilizes standard HTTP cookies and browser storage tokens to guarantee smooth site navigation:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-gray-700">
          <div className="p-3.5 rounded-xl border border-gray-200 bg-gray-50/50 space-y-1">
            <strong className="text-gray-950 font-bold block">Essential Cookies</strong>
            <p className="text-gray-600 text-xs">Required for fundamental website navigation, trial modal states, and security session integrity.</p>
          </div>
          <div className="p-3.5 rounded-xl border border-gray-200 bg-gray-50/50 space-y-1">
            <strong className="text-gray-950 font-bold block">Analytical Cookies</strong>
            <p className="text-gray-600 text-xs">Anonymous aggregate metrics via Google Analytics to evaluate popular studio program pages and optimize mobile speed.</p>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-gray-600">
          You may modify your browser settings to refuse or delete cookies. Note that disabling cookies will not impede your ability to browse programs or submit enquiry forms.
        </p>
      </section>

      {/* 14.0 Data Protection Officer & Contact Channels */}
      <section id="contact-dpo" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
          <span className="text-xs font-mono font-bold text-[#E31E24] bg-red-50 px-2 py-0.5 rounded">
            SECTION 14.0
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-gray-950">
            Data Protection Officer & Contact Channels
          </h2>
        </div>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          If you have questions regarding this Privacy Policy, wish to exercise your data subject rights, or have a grievance regarding your personal information, please reach out to our administration desk:
        </p>

        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 space-y-4 text-xs sm:text-sm text-gray-800">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <span className="text-gray-500 font-bold uppercase text-[11px] block">Primary Email</span>
              <a href="mailto:contact@jazzrockers.com" className="text-base font-bold text-[#E31E24] hover:underline flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>contact@jazzrockers.com</span>
              </a>
            </div>

            <div className="space-y-1">
              <span className="text-gray-500 font-bold uppercase text-[11px] block">Toll-Free Phone (UAE)</span>
              <a href="tel:+971800509" className="text-base font-bold text-gray-900 hover:text-[#E31E24] flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E31E24]" />
                <span>+971 800 509</span>
              </a>
            </div>
          </div>

          <div className="pt-3 border-t border-gray-200 text-xs text-gray-600 space-y-1">
            <p><strong>Attention:</strong> Privacy Compliance Officer</p>
            <p><strong>Physical Address:</strong> Office 205, Emirates N Tower, Al Nahda 1, Sharjah, United Arab Emirates</p>
            <p><strong>Branch Assistance:</strong> Reception teams at Al Nahda 2, Al Karama, International City, and Muhaisnah are also trained to accept sealed written data requests.</p>
          </div>
        </div>
      </section>
    </LegalPageLayout>
  );
}
