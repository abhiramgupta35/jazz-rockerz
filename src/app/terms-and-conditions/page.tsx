import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageLayout, TocItem } from "@/components/legal/LegalPageLayout";
import { 
  FileText, 
  CheckCircle, 
  AlertTriangle, 
  ShieldAlert, 
  HeartPulse, 
  Building2, 
  Phone, 
  Mail, 
  Clock, 
  Sparkles,
  Award,
  Users
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms and Conditions | JazzRockers Academy Dubai & UAE",
  description:
    "Official Terms and Conditions for student admissions, tuition fees, make-up classes, health disclaimers, and studio policies at JazzRockers Performing Arts Academy in Dubai & Sharjah.",
  openGraph: {
    title: "Terms & Conditions | JazzRockers Academy UAE",
    description:
      "Comprehensive enrolment terms, payment schedules, refund policies, and safety rules for dance, music, gymnastics, and fine arts classes at JazzRockers.",
  },
};

const TOC_ITEMS: TocItem[] = [
  { id: "agreement-identity", number: "1.0", title: "Agreement & Academy Identity" },
  { id: "admissions-trials", number: "2.0", title: "Admissions & Free Trial Classes" },
  { id: "fees-payment-vat", number: "3.0", title: "Tuition Fees, Payment Terms & UAE VAT" },
  { id: "attendance-punctuality", number: "4.0", title: "Attendance, Punctuality & Child Safety" },
  { id: "missed-classes-makeups", number: "5.0", title: "Missed Classes & Make-up Sessions Policy" },
  { id: "refunds-cancellations", number: "6.0", title: "Refunds, Cancellations & Membership Freeze" },
  { id: "health-medical-waiver", number: "7.0", title: "Health, Physical Exertion & Medical Waiver" },
  { id: "studio-etiquette-attire", number: "8.0", title: "Studio Code of Conduct & Mandatory Attire" },
  { id: "examinations-certifications", number: "9.0", title: "Examinations & International Certifications" },
  { id: "recitals-costumes", number: "10.0", title: "Annual Recitals, Showcases & Costumes" },
  { id: "intellectual-property", number: "11.0", title: "Intellectual Property & Media Release" },
  { id: "liability-belongings", number: "12.0", title: "Limitation of Liability & Personal Belongings" },
  { id: "termination-enrolment", number: "13.0", title: "Termination of Enrolment & Expulsion" },
  { id: "governing-law-jurisdiction", number: "14.0", title: "Governing Law & UAE Jurisdiction" },
  { id: "amendments-contact", number: "15.0", title: "Amendments & Academy Support" },
];

export default function TermsAndConditionsPage() {
  return (
    <LegalPageLayout
      title="Terms & Conditions"
      subtitle="These terms and conditions govern student admissions, tuition fees, make-up class scheduling, safety protocols, and studio policies across all JazzRockers Performing Arts Academy branches in the United Arab Emirates."
      lastUpdated="October 2024 (Version 2.4)"
      activeSlug="terms-and-conditions"
      tocItems={TOC_ITEMS}
    >
      {/* 1.0 Agreement & Academy Identity */}
      <section id="agreement-identity" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
          <span className="text-xs font-mono font-bold text-[#E31E24] bg-red-50 px-2 py-0.5 rounded">
            SECTION 1.0
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-gray-950">
            Agreement & Academy Identity
          </h2>
        </div>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          These Terms and Conditions (&ldquo;Terms&rdquo;, &ldquo;Agreement&rdquo;) constitute a legally binding agreement between <strong>JazzRockers Performing Arts Academy LLC</strong> (&ldquo;JazzRockers&rdquo;, &ldquo;Academy&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) and the parent, legal guardian, or adult student (&ldquo;Parent&rdquo;, &ldquo;Student&rdquo;, &ldquo;you&rdquo;, or &ldquo;your&rdquo;) enrolling in any of our Dance, Music, Gymnastics, Fine Arts, or Holiday Camp programs.
        </p>

        <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200/80 space-y-2 text-sm text-gray-800">
          <p className="font-bold text-gray-950 flex items-center gap-2">
            <Building2 className="w-4 h-4 text-[#E31E24]" />
            <span>JazzRockers Performing Arts Academy LLC</span>
          </p>
          <p><strong>Corporate Head Office:</strong> Office No. 205, Emirates N Tower, Al Nahda 1, Sharjah, UAE</p>
          <p><strong>Operating Dubai Studios:</strong> Al Nahda 2 (Sandos Building), Al Karama (Al Kifaf Oasis), International City (CBD B04), Muhaisnah 4 (Ibrahim Luta Building)</p>
          <p><strong>Admissions Toll-Free:</strong> +971 800 509</p>
          <p><strong>Official Contact:</strong> contact@jazzrockers.com</p>
        </div>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          By enrolling a child, paying any registration or tuition fees, booking a free trial, or attending classes at any JazzRockers studio, you confirm that you have read, understood, and unreservedly accepted these Terms.
        </p>
      </section>

      {/* 2.0 Admissions & Free Trial Classes */}
      <section id="admissions-trials" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
          <span className="text-xs font-mono font-bold text-[#E31E24] bg-red-50 px-2 py-0.5 rounded">
            SECTION 2.0
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-gray-950">
            Admissions & Free Trial Classes
          </h2>
        </div>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          Admission to JazzRockers Academy is open to students regardless of nationality or background, subject to age readiness and studio class capacity:
        </p>

        <ul className="space-y-3 text-xs sm:text-sm text-gray-700">
          <li className="flex items-start gap-3">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
            <span><strong>Age Eligibility:</strong> Classes are structured for ages starting from 2.5 years (toddler dance & movement) through adults. Instructors assess developmental readiness during the initial session.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
            <span><strong>Complimentary Trial Policy:</strong> Prospective new students are entitled to <strong>one (1) complimentary free trial class</strong> per subject area (e.g. one for Dance, one for Piano). Free trials require confirmed pre-booking via our website, telephone (+971 800 509), or official WhatsApp. Walk-ins cannot be guaranteed a place due to strict coach-to-student ratios.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
            <span><strong>Accuracy of Enrolment Information:</strong> Parents must supply accurate legal names, dates of birth, emergency contact phone numbers, and complete health disclosures during enrolment.</span>
          </li>
        </ul>
      </section>

      {/* 3.0 Tuition Fees, Payment Terms & UAE VAT */}
      <section id="fees-payment-vat" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
          <span className="text-xs font-mono font-bold text-[#E31E24] bg-red-50 px-2 py-0.5 rounded">
            SECTION 3.0
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-gray-950">
            Tuition Fees, Payment Terms & UAE VAT
          </h2>
        </div>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          All courses and packages at JazzRockers are subject to the following standard fee and billing guidelines:
        </p>

        <div className="space-y-3 text-xs sm:text-sm text-gray-700">
          <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/50 space-y-1">
            <strong className="text-gray-950 font-bold block text-sm">1. Advance Payment Mandatory</strong>
            <p className="text-gray-600">
              Tuition fees for monthly, quarterly, or termly packages must be settled <strong>in full in advance</strong> prior to the student participating in their first scheduled class of the billing period.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/50 space-y-1">
            <strong className="text-gray-950 font-bold block text-sm">2. Value Added Tax (UAE 5% VAT)</strong>
            <p className="text-gray-600">
              In accordance with Federal Decree-Law No. 8 of 2017 on Value Added Tax issued by the UAE Federal Tax Authority (FTA), all tuition fees, uniform purchases, and admission materials are subject to standard 5% UAE VAT, which will be itemized on your official tax invoice.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/50 space-y-1">
            <strong className="text-gray-950 font-bold block text-sm">3. Registration & Material Fees</strong>
            <p className="text-gray-600">
              A one-time non-refundable Academy Registration Fee is charged upon initial enrolment. Course books, fine arts kits, dance shoes, and uniforms are billed separately as applicable.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/50 space-y-1">
            <strong className="text-gray-950 font-bold block text-sm">4. Late Payments & Studio Suspension</strong>
            <p className="text-gray-600">
              If renewal fees remain unpaid after the due date, JazzRockers reserves the right to release the reserved slot to waitlisted students and suspend studio access until the outstanding balance is cleared.
            </p>
          </div>
        </div>
      </section>

      {/* 4.0 Attendance, Punctuality & Child Safety */}
      <section id="attendance-punctuality" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
          <span className="text-xs font-mono font-bold text-[#E31E24] bg-red-50 px-2 py-0.5 rounded">
            SECTION 4.0
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-gray-950">
            Attendance, Punctuality & Child Safety
          </h2>
        </div>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          Student safety, discipline, and studio decorum are foundational to our training environment:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-gray-700">
          <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-xs space-y-2">
            <Clock className="w-5 h-5 text-[#E31E24]" />
            <strong className="block text-gray-950 font-bold">Punctuality & Warm-ups</strong>
            <p className="text-gray-600 leading-relaxed">
              Students should arrive 5–10 minutes prior to class. In Dance and Gymnastics, warm-up is mandatory to prevent muscle strain. Students arriving more than 15 minutes late may be asked to observe for safety reasons.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-xs space-y-2">
            <Users className="w-5 h-5 text-[#E31E24]" />
            <strong className="block text-gray-950 font-bold">Pick-up & Drop-off Rules</strong>
            <p className="text-gray-600 leading-relaxed">
              Parents of minors under 12 years must drop off and pick up their child directly from the studio reception. JazzRockers coaches cannot supervise minors left unattended in reception corridors beyond class times.
            </p>
          </div>
        </div>
      </section>

      {/* 5.0 Missed Classes & Make-up Sessions Policy */}
      <section id="missed-classes-makeups" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
          <span className="text-xs font-mono font-bold text-[#E31E24] bg-red-50 px-2 py-0.5 rounded">
            SECTION 5.0
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-gray-950">
            Missed Classes & Make-up Sessions Policy
          </h2>
        </div>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          Because studio capacity, instructor assignments, and room air conditioning are pre-allocated, we operate under a fair and structured make-up policy:
        </p>

        <div className="border border-gray-200 rounded-2xl overflow-hidden">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-gray-50 border-b border-gray-200 text-gray-900 font-bold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="py-3 px-4 sm:px-6">Condition</th>
                <th className="py-3 px-4 sm:px-6">Policy Provision</th>
                <th className="py-3 px-4 sm:px-6">Operational Limit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-700">
              <tr>
                <td className="py-3 px-4 sm:px-6 font-bold text-gray-900">Advance Notice</td>
                <td className="py-3 px-4 sm:px-6">Parents must notify studio reception at least <strong>24 hours prior</strong> via phone or WhatsApp.</td>
                <td className="py-3 px-4 sm:px-6">Unnotified absences (&ldquo;no-shows&rdquo;) are forfeited.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 sm:px-6 font-bold text-gray-900">Make-up Allowance</td>
                <td className="py-3 px-4 sm:px-6">Maximum of <strong>two (2) make-up sessions per term</strong>, subject to availability in parallel batches.</td>
                <td className="py-3 px-4 sm:px-6">Non-accumulative; cannot be carried into subsequent terms.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 sm:px-6 font-bold text-gray-900">Transferability</td>
                <td className="py-3 px-4 sm:px-6">Make-up classes have no cash equivalent and cannot be transferred to siblings or friends.</td>
                <td className="py-3 px-4 sm:px-6">Strictly personal to the enrolled student.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 sm:px-6 font-bold text-gray-900">Academy Closures</td>
                <td className="py-3 px-4 sm:px-6">If the Academy cancels a class due to UAE statutory holidays or severe weather directives, a makeup session will be scheduled.</td>
                <td className="py-3 px-4 sm:px-6">Guaranteed reschedule by Academy.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 6.0 Refunds, Cancellations & Membership Freeze */}
      <section id="refunds-cancellations" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
          <span className="text-xs font-mono font-bold text-[#E31E24] bg-red-50 px-2 py-0.5 rounded">
            SECTION 6.0
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-gray-950">
            Refunds, Cancellations & Membership Freeze
          </h2>
        </div>

        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-900 text-xs sm:text-sm font-semibold flex items-start gap-2.5">
          <AlertTriangle className="w-5 h-5 text-[#E31E24] shrink-0 mt-0.5" />
          <span><strong>Registration & Material Fees:</strong> Initial registration fees, purchased uniforms, books, and external examination board fees are strictly <strong>non-refundable</strong> under any circumstances.</span>
        </div>

        <div className="space-y-3 text-xs sm:text-sm text-gray-700">
          <p>
            <strong>Term Tuition Refunds:</strong> If a student must withdraw prior to the term commencing, a written refund request submitted at least 14 days before the first class will receive a refund minus a 15% administrative processing fee. Once a term has commenced and classes have begun, fees are non-refundable.
          </p>

          <p>
            <strong>Medical Emergency Freezes:</strong> In the event of prolonged illness or surgery verified by an official UAE Ministry of Health and Prevention (MOHAP) or Dubai Health Authority (DHA) doctor&apos;s medical certificate prohibiting physical activity for 3 or more consecutive weeks, the Academy will freeze the remaining classes and issue an Academy Credit Note valid for 6 months.
          </p>

          <p>
            <strong>Annual Package Holiday Freeze:</strong> Students enrolled in 12-month annual packages are eligible for one (1) complimentary holiday freeze of up to 30 continuous calendar days (e.g. during summer school break), provided written notice is submitted at least 10 business days in advance.
          </p>
        </div>
      </section>

      {/* 7.0 Health, Physical Exertion & Medical Waiver */}
      <section id="health-medical-waiver" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
          <span className="text-xs font-mono font-bold text-[#E31E24] bg-red-50 px-2 py-0.5 rounded">
            SECTION 7.0
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-gray-950">
            Health, Physical Exertion & Medical Waiver
          </h2>
        </div>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          Participation in dance, acrobatics, gymnastics, and energetic stage movement entails physical exertion and movement:
        </p>

        <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-4 sm:p-5 space-y-3 text-xs sm:text-sm text-amber-950">
          <div className="flex items-center gap-2 font-bold text-sm">
            <HeartPulse className="w-5 h-5 text-amber-700" />
            <span>Health Warranty & Disclosure Obligation</span>
          </div>
          <p className="leading-relaxed">
            Parents and adult students explicitly warrant that the student is in sound health and physically fit to undertake performing arts and gymnastics classes. You must notify JazzRockers administration in writing of any asthma, epilepsy, heart ailments, bone injuries, or special physical conditions prior to the first session.
          </p>
          <p className="leading-relaxed">
            <strong>Emergency First Aid Consent:</strong> In the event of a medical emergency during class where the parent or emergency contact cannot be immediately reached, you authorize certified JazzRockers coaches and studio managers to administer basic first aid and contact UAE Emergency Services (Ambulance 998 / Police 999) or transfer the student to the nearest licensed medical hospital.
          </p>
        </div>
      </section>

      {/* 8.0 Studio Code of Conduct & Mandatory Attire */}
      <section id="studio-etiquette-attire" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
          <span className="text-xs font-mono font-bold text-[#E31E24] bg-red-50 px-2 py-0.5 rounded">
            SECTION 8.0
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-gray-950">
            Studio Code of Conduct & Mandatory Attire
          </h2>
        </div>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          To preserve a professional, disciplined, and hygienic learning environment across our branches:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-gray-700">
          <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/50 space-y-1.5">
            <strong className="block text-gray-950 font-bold">Studio Dress Code:</strong>
            <ul className="space-y-1 list-disc list-inside text-gray-600">
              <li><strong>Ballet & Contemporary:</strong> Leotards, tights, and authorized ballet shoes. Hair neatly tied in a bun.</li>
              <li><strong>Hip-Hop & Street:</strong> Clean studio sneakers (non-marking soles), comfortable jazz joggers.</li>
              <li><strong>Gymnastics:</strong> Fitted gymnastics leotards or Academy t-shirts; bare feet or grip socks.</li>
              <li><strong>No Outdoor Footwear:</strong> Street shoes are strictly forbidden on studio sprung dance floors.</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/50 space-y-1.5">
            <strong className="block text-gray-950 font-bold">Studio Cleanliness & Food:</strong>
            <ul className="space-y-1 list-disc list-inside text-gray-600">
              <li>No food, candy, chewing gum, or sugary beverages inside dance and music studios.</li>
              <li>Only sealed water bottles are permitted in designated studio cubbies.</li>
              <li>Mobile phones must be on silent mode during all music and dance classes.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 9.0 Examinations & International Certifications */}
      <section id="examinations-certifications" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
          <span className="text-xs font-mono font-bold text-[#E31E24] bg-red-50 px-2 py-0.5 rounded">
            SECTION 9.0
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-gray-950">
            Examinations & International Certifications
          </h2>
        </div>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          JazzRockers prepares students for formal assessments through globally accredited boards (including Trinity College London, Rockschool, and equivalent international dance and music syllabus authorities):
        </p>

        <ul className="space-y-2.5 text-xs sm:text-sm text-gray-700 list-disc list-inside">
          <li><strong>Entry Eligibility:</strong> Enrollment in an examination cycle is contingent on teacher evaluation of student proficiency and syllabus mastery.</li>
          <li><strong>Separate Examination Fees:</strong> Official fees levied by external examining boards are determined directly by those boards and billed separately from Academy tuition.</li>
          <li><strong>Examination Dates:</strong> Examination boards establish strict assessment schedules that cannot be altered or rescheduled once submitted.</li>
        </ul>
      </section>

      {/* 10.0 Annual Recitals, Showcases & Costumes */}
      <section id="recitals-costumes" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
          <span className="text-xs font-mono font-bold text-[#E31E24] bg-red-50 px-2 py-0.5 rounded">
            SECTION 10.0
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-gray-950">
            Annual Recitals, Showcases & Costumes
          </h2>
        </div>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          Our annual theater showcase is the crowning moment of our academic year, offering students the transformative experience of performing on professional theater stages before an audience:
        </p>

        <div className="space-y-2.5 text-xs sm:text-sm text-gray-700">
          <p>
            <strong>Costumes & Staging:</strong> Participation in the annual recital entails separate costume manufacturing fees and stage rehearsal commitments. Recital costume fees must be settled by the announced deadline to ensure bespoke tailoring.
          </p>
          <p>
            <strong>Mandatory Technical Rehearsals:</strong> For student safety, lighting cues, and ensemble synchronization, attendance at technical theater and dress rehearsals is compulsory for recital participants.
          </p>
        </div>
      </section>

      {/* 11.0 Intellectual Property & Media Release */}
      <section id="intellectual-property" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
          <span className="text-xs font-mono font-bold text-[#E31E24] bg-red-50 px-2 py-0.5 rounded">
            SECTION 11.0
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-gray-950">
            Intellectual Property & Media Release
          </h2>
        </div>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          All choreographies, musical arrangements, lesson curricula, syllabi, training manuals, and proprietary course designs created by JazzRockers instructors remain the exclusive intellectual property of JazzRockers Performing Arts Academy LLC.
        </p>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          <strong>Media Release:</strong> By enrolling, you grant the Academy permission to use photographs and recordings captured during public performances and studio showcases in academy brochures, websites, and official social media in accordance with our <Link href="/privacy-policy" className="text-[#E31E24] hover:underline font-bold">Privacy Policy</Link>, subject to your right to opt out in writing upon enrolment.
        </p>
      </section>

      {/* 12.0 Limitation of Liability & Personal Belongings */}
      <section id="liability-belongings" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
          <span className="text-xs font-mono font-bold text-[#E31E24] bg-red-50 px-2 py-0.5 rounded">
            SECTION 12.0
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-gray-950">
            Limitation of Liability & Personal Belongings
          </h2>
        </div>

        <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-xs sm:text-sm text-gray-700 space-y-2">
          <p>
            <strong>Personal Valuables Disclaimer:</strong> While cubbies and storage shelves are provided in each studio, JazzRockers accepts no liability or responsibility for loss, theft, or damage to personal items, watches, mobile devices, cash, jewelry, or personal musical instruments brought onto academy premises. Students are strongly advised to keep valuables at home.
          </p>
          <p>
            <strong>Liability Limitation:</strong> To the maximum extent permitted by UAE law, JazzRockers, its managers, coaches, and staff shall not be liable for incidental, indirect, or consequential damages resulting from participation, except in verified instances of gross negligence or willful misconduct.
          </p>
        </div>
      </section>

      {/* 13.0 Termination of Enrolment & Expulsion */}
      <section id="termination-enrolment" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
          <span className="text-xs font-mono font-bold text-[#E31E24] bg-red-50 px-2 py-0.5 rounded">
            SECTION 13.0
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-gray-950">
            Termination of Enrolment & Expulsion
          </h2>
        </div>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          We maintain a zero-tolerance policy towards bullying, physical aggression, verbal abuse, harassment, or persistent disruption of classes. JazzRockers reserves the absolute right to suspend or immediately terminate the enrolment of any student or parent who:
        </p>

        <ul className="space-y-2 text-xs sm:text-sm text-gray-700 list-disc list-inside">
          <li>Engages in bullying or derogatory behavior directed at fellow students, coaches, or reception staff.</li>
          <li>Causes willful damage to academy studio mirrors, sprung dance floors, musical instruments, or acoustic wall treatments.</li>
          <li>Refuses to adhere to fee payment schedules or repeatedly breaches studio safety regulations.</li>
        </ul>
        <p className="text-xs sm:text-sm text-gray-600">
          In cases of termination for severe misconduct or abusive behavior, remaining tuition fees will be forfeited without refund.
        </p>
      </section>

      {/* 14.0 Governing Law & UAE Jurisdiction */}
      <section id="governing-law-jurisdiction" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
          <span className="text-xs font-mono font-bold text-[#E31E24] bg-red-50 px-2 py-0.5 rounded">
            SECTION 14.0
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-gray-950">
            Governing Law & UAE Jurisdiction
          </h2>
        </div>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          These Terms and Conditions, admissions agreements, and any non-contractual disputes arising in connection with our services shall be governed exclusively by and construed in accordance with the <strong>Federal Laws of the United Arab Emirates</strong> and the local laws applicable in the <strong>Emirate of Dubai</strong>.
        </p>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          Any legal proceedings, claims, or controversies shall be subject to the exclusive jurisdiction of the <strong>Courts of Dubai, United Arab Emirates</strong>.
        </p>
      </section>

      {/* 15.0 Amendments & Academy Support */}
      <section id="amendments-contact" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
          <span className="text-xs font-mono font-bold text-[#E31E24] bg-red-50 px-2 py-0.5 rounded">
            SECTION 15.0
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-gray-950">
            Amendments & Academy Support
          </h2>
        </div>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          JazzRockers reserves the right to amend, update, or revise these Terms periodically. Substantive updates will be published on our website and communicated via our student notice boards or official WhatsApp channel.
        </p>

        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 space-y-4 text-xs sm:text-sm text-gray-800">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <span className="text-gray-500 font-bold uppercase text-[11px] block">Admissions Desk Email</span>
              <a href="mailto:contact@jazzrockers.com" className="text-base font-bold text-[#E31E24] hover:underline flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>contact@jazzrockers.com</span>
              </a>
            </div>

            <div className="space-y-1">
              <span className="text-gray-500 font-bold uppercase text-[11px] block">UAE Toll-Free Hotline</span>
              <a href="tel:+971800509" className="text-base font-bold text-gray-900 hover:text-[#E31E24] flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E31E24]" />
                <span>+971 800 509</span>
              </a>
            </div>
          </div>

          <div className="pt-3 border-t border-gray-200 text-xs text-gray-600">
            <p>Our studio coordinators across Al Nahda, Karama, International City, and Muhaisnah are always available during operational hours (8:45 AM – 8:45 PM) to address any questions regarding fees, term schedules, or student progress.</p>
          </div>
        </div>
      </section>
    </LegalPageLayout>
  );
}
