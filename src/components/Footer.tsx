"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const links = [
    { href: "/", label: t("navHome") },
    { href: "/gallery", label: t("navGallery") },
    { href: "/contact", label: t("navContact") },
  ];

  return (
    <footer className="bg-emerald-950 text-emerald-50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Al Mazraa logo"
              width={44}
              height={44}
              className="h-11 w-11 shrink-0 rounded-full object-cover"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-extrabold">{t("brandName")}</span>
              <span className="text-xs text-emerald-300">{t("tagline")}</span>
            </div>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-emerald-200/80">
            {t("footerAbout")}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-bold uppercase tracking-wide text-emerald-300">
            {t("footerLinksTitle")}
          </h3>
          <ul className="flex flex-col gap-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-emerald-100/90 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-bold uppercase tracking-wide text-emerald-300">
            {t("footerContactTitle")}
          </h3>
          <ul className="flex flex-col gap-2 text-sm text-emerald-100/90">
            <li>{t("contactAddressValue")}</li>
            <li dir="ltr" className="text-right rtl:text-right ltr:text-left">
              {t("contactPhoneValue")}
            </li>
            <li>{t("contactEmailValue")}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-emerald-800/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-emerald-300/80 sm:flex-row sm:px-6 lg:px-8">
          <span>
            © {new Date().getFullYear()} {t("brandName")} — {t("footerRights")}
          </span>
          <span>Eltarf, Algeria 🌱</span>
        </div>
      </div>
    </footer>
  );
}
