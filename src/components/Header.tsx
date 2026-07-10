"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const { t, language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-emerald-900/10 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png" 
            alt="Al Mazraa logo"
            width={44}
            height={44}
            priority={true}
            className="h-11 w-11 shrink-0 rounded-full object-cover shadow-md shadow-emerald-900/20"
          />
          <span className="flex flex-col leading-tight">
            <span className="text-lg font-extrabold tracking-tight text-emerald-900">
              {t("brandName")}
            </span>
          </span>
        </Link>
        {/* أضف هنا بقية الكود الخاص بالـ Navlinks والـ Buttons كما كان سابقاً */}
      </div>
    </header>
  );
}
