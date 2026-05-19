import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppSticky from "@/components/WhatsAppSticky";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FinecraftzPlus | Bespoke Interiors & Execution",
  description:
    "Premium bespoke interiors, hospitality environments, commercial execution and custom furniture solutions by FinecraftzPlus.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#F5F1E8] text-[#1E1E1E]">

        {/* Global Navbar */}

        <Navbar />

        {/* Main Content */}

        <>
          <main>{children}</main>

          {/* Global Footer */}

          <Footer />

          {/* Sticky WhatsApp */}

          <WhatsAppSticky />
        </>

      </body>
    </html>
  );
}