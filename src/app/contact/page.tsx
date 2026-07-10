"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleChange = (
    field: "name" | "email" | "message",
    value: string
  ) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    window.setTimeout(() => {
      setStatus("sent");
      setFormState({ name: "", email: "", message: "" });
    }, 700);
  };

  const infoCards = [
    { label: t("contactAddressLabel"), value: t("contactAddressValue"), icon: "📍" },
    { label: t("contactPhoneLabel"), value: t("contactPhoneValue"), icon: "📞", dir: "ltr" },
    { label: t("contactEmailLabel"), value: t("contactEmailValue"), icon: "✉️", dir: "ltr" },
    { label: t("contactHoursLabel"), value: t("contactHoursValue"), icon: "🕒" },
  ];

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-b from-emerald-950 to-emerald-800 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold sm:text-4xl">
            {t("contactPageTitle")}
          </h1>
          <p className="mt-4 text-emerald-100/90">
            {t("contactPageSubtitle")}
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold text-emerald-950">
            {t("contactInfoTitle")}
          </h2>
          <div className="mt-6 flex flex-col gap-4">
            {infoCards.map((card) => (
              <div
                key={card.label}
                className="flex items-start gap-4 rounded-2xl border border-emerald-100 bg-emerald-50 p-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-lg text-white">
                  {card.icon}
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase text-emerald-600">
                    {card.label}
                  </p>
                  <p
                    dir={card.dir ?? undefined}
                    className="mt-1 text-sm font-bold text-emerald-950"
                  >
                    {card.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-emerald-100">
            <iframe
              title="Al Mazraa location map - Eltarf, Algeria"
              src="https://maps.google.com/maps?q=El%20Tarf%2C%20Algeria&t=&z=10&ie=UTF8&iwloc=&output=embed"
              className="h-64 w-full"
              loading="lazy"
            />
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-lg sm:p-8">
            <h2 className="text-xl font-bold text-emerald-950">
              {t("contactFormTitle")}
            </h2>

            {status === "sent" ? (
              <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center text-emerald-800">
                <span className="text-3xl">✅</span>
                <p className="mt-3 font-semibold">
                  {t("contactFormSuccess")}
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-4 rounded-full bg-emerald-700 px-6 py-2 text-sm font-semibold text-white hover:bg-emerald-800"
                >
                  {t("contactFormSubmit")}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-emerald-900">
                    {t("contactFormName")}
                  </label>
                  <input
                    required
                    type="text"
                    value={formState.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder={t("contactFormNamePlaceholder")}
                    className="w-full rounded-xl border border-emerald-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-emerald-900">
                    {t("contactFormEmail")}
                  </label>
                  <input
                    required
                    type="email"
                    dir="ltr"
                    value={formState.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder={t("contactFormEmailPlaceholder")}
                    className="w-full rounded-xl border border-emerald-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-emerald-900">
                    {t("contactFormMessage")}
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder={t("contactFormMessagePlaceholder")}
                    className="w-full resize-none rounded-xl border border-emerald-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-2 w-full rounded-full bg-emerald-700 px-6 py-3 text-sm font-bold text-white shadow-md transition-colors hover:bg-emerald-800 disabled:opacity-60 sm:w-fit"
                >
                  {status === "sending" ? "..." : t("contactFormSubmit")}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
