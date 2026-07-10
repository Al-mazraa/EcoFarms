[10/07/2026 7:26 PM] 2050_fh: import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cairo } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Al Mazraa | نزرع الأمل، ونحصد المستقبل",
  description:
    "Al Mazraa is a modern aquaponics farm in Eltarf, Algeria, growing premium, chemical-free produce in a closed-loop sustainable ecosystem.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className="flex min-h-screen flex-col bg-white font-sans text-slate-900 antialiased">
        <LanguageProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
[10/07/2026 7:27 PM] 2050_fh: "use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const { t, language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: t("navHome") },
    { href: "/gallery", label: t("navGallery") },
    { href: "/contact", label: t("navContact") },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-emerald-900/10 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Al Mazraa logo"
            width={44}
            height={44}
            className="h-11 w-11 shrink-0 rounded-full object-cover shadow-md shadow-emerald-900/20"
          />
          <span className="flex flex-col leading-tight">
            <span className="text-lg font-extrabold tracking-tight text-emerald-900">
              {t("brandName")}
            </span>
            <span className="text-[11px] font-medium text-emerald-700/80">
              {t("tagline")}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-700 transition-colors hover:text-emerald-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={toggleLanguage}
            className="flex items-center gap-2 rounded-full border border-emerald-600/30 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-800 transition-colors hover:bg-emerald-100"
          >
            <span aria-hidden>🌐</span>
            {language === "ar" ? "English" : "العربية"}
          </button>
          <Link
            href="/contact"
            className="rounded-full bg-emerald-700 px-5 py-2 text-sm font-semibold text-white shadow-md shadow-emerald-900/20 transition-colors hover:bg-emerald-800"
          >
            {t("navCta")}
          </Link>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-900/10 text-emerald-900 md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className="text-xl">{isMenuOpen ? "✕" : "☰"}</span>
        </button>
      </div>
