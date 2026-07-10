"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const differenceIcons = ["🔄", "🌿", "📍"];
const serviceIcons = ["🥬", "🧑‍🌾", "🚚"];

export default function HomePage() {
  const { t } = useLanguage();

  const differenceItems = [
    { icon: differenceIcons[0], title: t("diff1Title"), body: t("diff1Body") },
    { icon: differenceIcons[1], title: t("diff2Title"), body: t("diff2Body") },
    { icon: differenceIcons[2], title: t("diff3Title"), body: t("diff3Body") },
  ];

  const serviceItems = [
    { icon: serviceIcons[0], title: t("service1Title"), body: t("service1Body") },
    { icon: serviceIcons[1], title: t("service2Title"), body: t("service2Body") },
    { icon: serviceIcons[2], title: t("service3Title"), body: t("service3Body") },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-800 text-white">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/70 via-emerald-950/60 to-emerald-950/90" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-24 text-center sm:px-6 lg:px-8 lg:py-32">
          <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-1.5 text-sm font-semibold text-emerald-200">
            🌱 Eltarf, Algeria — الطارف، الجزائر
          </span>
          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {t("heroTitle")}
          </h1>
          <p className="max-w-2xl text-xl font-semibold text-emerald-200 sm:text-2xl">
            {t("heroTagline")}
          </p>
          <p className="max-w-2xl text-base leading-relaxed text-emerald-100/90 sm:text-lg">
            {t("heroSubtitle")}
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/gallery"
              className="rounded-full bg-emerald-500 px-8 py-3 text-sm font-bold text-emerald-950 shadow-lg shadow-emerald-900/40 transition-transform hover:scale-105 hover:bg-emerald-400"
            >
              {t("heroPrimaryCta")}
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/30 bg-white/10 px-8 py-3 text-sm font-bold text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              {t("heroSecondaryCta")}
            </Link>
          </div>

          <div className="mt-8 grid w-full max-w-2xl grid-cols-3 gap-4 border-t border-white/10 pt-8">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-extrabold text-emerald-300 sm:text-3xl">
                {t("heroStat1Value")}
              </span>
              <span className="mt-1 text-xs text-emerald-100/80 sm:text-sm">
                {t("heroStat1Label")}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-extrabold text-emerald-300 sm:text-3xl">
                {t("heroStat2Value")}
              </span>
              <span className="mt-1 text-xs text-emerald-100/80 sm:text-sm">
                {t("heroStat2Label")}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-extrabold text-emerald-300 sm:text-3xl">
                {t("heroStat3Value")}
              </span>
              <span className="mt-1 text-xs text-emerald-100/80 sm:text-sm">
                {t("heroStat3Label")}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="order-2 lg:order-none">
            <span className="text-sm font-bold uppercase tracking-widest text-emerald-600">
              {t("aboutEyebrow")}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-emerald-950 sm:text-4xl">
              {t("aboutTitle")}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
              {t("aboutBody")}
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-4">
                <p className="text-xs font-semibold uppercase text-emerald-600">
                  {t("aboutLocationLabel")}
                </p>
                <p className="mt-1 text-sm font-bold text-emerald-950">
                  {t("aboutLocationValue")}
                </p>
              </div>
              <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-4">
                <p className="text-xs font-semibold uppercase text-emerald-600">
                  {t("aboutMethodLabel")}
                </p>
                <p className="mt-1 text-sm font-bold text-emerald-950">
                  {t("aboutMethodValue")}
                </p>
              </div>
              <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-4">
                <p className="text-xs font-semibold uppercase text-emerald-600">
                  {t("aboutMissionLabel")}
                </p>
                <p className="mt-1 text-sm font-bold text-emerald-950">
                  {t("aboutMissionValue")}
                </p>
              </div>
            </div>
          </div>

          <div className="relative order-1 grid grid-cols-2 gap-4 lg:order-none">
            <img
              src="https://images.pexels.com/photos/37113938/pexels-photo-37113938.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=700"
              alt="Al Mazraa aquaponics greenhouse"
              className="h-64 w-full rounded-2xl object-cover shadow-lg sm:h-72"
            />
            <img
              src="https://images.pexels.com/photos/4199758/pexels-photo-4199758.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=700"
              alt="Fresh lettuce grown with aquaponics"
              className="mt-8 h-64 w-full rounded-2xl object-cover shadow-lg sm:h-72"
            />
          </div>
        </div>
      </section>

      {/* Difference Section */}
      <section className="bg-emerald-50 py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-sm font-bold uppercase tracking-widest text-emerald-600">
            {t("differenceEyebrow")}
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-emerald-950 sm:text-4xl">
            {t("differenceTitle")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
            {t("differenceSubtitle")}
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {differenceItems.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center rounded-2xl border border-emerald-100 bg-white p-8 text-center shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl">
                  {item.icon}
                </span>
                <h3 className="mt-6 text-lg font-bold text-emerald-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-sm font-bold uppercase tracking-widest text-emerald-600">
            {t("servicesEyebrow")}
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-emerald-950 sm:text-4xl">
            {t("servicesTitle")}
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {serviceItems.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center rounded-2xl bg-gradient-to-b from-emerald-900 to-emerald-950 p-8 text-center text-white shadow-lg"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-400/20 text-3xl">
                  {item.icon}
                </span>
                <h3 className="mt-6 text-lg font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-emerald-100/80">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-900 py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold sm:text-3xl">
            {t("heroTagline")}
          </h2>
          <p className="mt-4 text-emerald-100/90">{t("heroSubtitle")}</p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-emerald-400 px-8 py-3 text-sm font-bold text-emerald-950 shadow-lg transition-transform hover:scale-105"
          >
            {t("navCta")}
          </Link>
        </div>
      </section>
    </div>
  );
}
