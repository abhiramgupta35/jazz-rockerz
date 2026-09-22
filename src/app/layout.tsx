import type { Metadata, Viewport } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import { FreeTrialModal } from "@/components/forms/FreeTrialModal";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { ModalProvider } from "@/context/ModalContext";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#17002F",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://jazzrockers.ae"),
  title: "JazzRockers | Dance, Music, Gymnastics & Fine Arts Academy in Dubai",
  description:
    "The UAE's Leading Academy for Dance, Music, Gymnastics & Fine Arts. 20+ professional programs for ages 2.5+. Book your FREE trial class across 5 Dubai studios today!",
  keywords: [
    "JazzRockers Dubai",
    "dance classes dubai",
    "music classes dubai",
    "gymnastics for kids dubai",
    "fine arts classes dubai",
    "ballet classes dubai",
    "hip hop dance dubai",
    "piano lessons dubai",
    "free trial dance class dubai",
  ],
  authors: [{ name: "JazzRockers Academy" }],
  openGraph: {
    title: "JazzRockers | Dance, Music, Gymnastics & Fine Arts Academy in Dubai",
    description:
      "Discover your child's hidden talent with JazzRockers. 20+ programs, certified coaches, and international performance opportunities in Dubai.",
    url: "https://jazzrockers.ae",
    siteName: "JazzRockers Academy",
    images: [
      {
        url: "/images/dance-stage.webp",
        width: 1200,
        height: 630,
        alt: "JazzRockers Performing Arts Academy",
      },
    ],
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JazzRockers | Dance, Music, Gymnastics & Fine Arts Academy",
    description:
      "20+ professional programs, certified coaches, and state-of-the-art studios across Dubai. Book a free trial today!",
    images: ["/images/dance-stage.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${plusJakartaSans.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased min-h-screen flex flex-col justify-between bg-white selection:bg-brand-pink selection:text-white" suppressHydrationWarning>
        <ModalProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <StickyMobileCTA />
          <FloatingWhatsApp />
          <FreeTrialModal />
        </ModalProvider>
      </body>
    </html>
  );
}
