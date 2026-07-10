"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Language = "ar" | "en";

type TranslationDictionary = {
  [key: string]: string;
};

const translations: Record<Language, TranslationDictionary> = {
  en: {
    brandName: "Al Mazraa",
    tagline: "We sow hope, we harvest the future.",
    navHome: "Home",
    navGallery: "Gallery",
    navContact: "Contact",
    navCta: "Get in Touch",

    heroTitle: "Al Mazraa",
    heroTagline: "We sow hope, we harvest the future.",
    heroSubtitle:
      "A modern aquaponics farm in Eltarf, Algeria, growing premium, chemical-free produce in a closed-loop sustainable ecosystem.",
    heroPrimaryCta: "Explore Our Farm",
    heroSecondaryCta: "Contact Us",
    heroStat1Value: "0%",
    heroStat1Label: "Chemical Pesticides",
    heroStat2Value: "100%",
    heroStat2Label: "Locally Grown",
    heroStat3Value: "24/7",
    heroStat3Label: "Sustainable Cycle",

    aboutEyebrow: "Who We Are",
    aboutTitle: "About Al Mazraa",
    aboutBody:
      "Al Mazraa is an innovative leader in modern agriculture based in the heart of Eltarf, Algeria. We believe that the future of farming lies in the perfect balance between nature and technology. By utilizing advanced aquaponics systems, we are transforming how food is grown. Al Mazraa is more than just a farm; it is a closed-loop, sustainable ecosystem where fish and plants thrive together, creating premium produce without the need for harmful chemicals or excessive water consumption.",
    aboutLocationLabel: "Location",
    aboutLocationValue: "Eltarf, Algeria",
    aboutMethodLabel: "Method",
    aboutMethodValue: "Aquaponics",
    aboutMissionLabel: "Mission",
    aboutMissionValue: "Sustainable Food",

    differenceEyebrow: "Why Choose Us",
    differenceTitle: "The Al Mazraa Difference",
    differenceSubtitle:
      "Three pillars define everything we grow and everything we believe in.",
    diff1Title: "Sustainable Synergy",
    diff1Body:
      "Our aquaponics system uses fish waste as natural fertilizer for our plants, while the plants purify the water for the fish.",
    diff2Title: "Chemical-Free",
    diff2Body:
      "We do not use pesticides or artificial fertilizers. Our crops are grown in a controlled, clean environment.",
    diff3Title: "Locally Grown, Locally Served",
    diff3Body:
      "Farming in Annaba/Eltarf to provide fresh produce to our local community.",

    servicesEyebrow: "What We Offer",
    servicesTitle: "Our Services",
    service1Title: "Fresh Aquaponic Produce",
    service1Body:
      "Leafy greens, herbs and vegetables grown pesticide-free and delivered fresh from our greenhouse.",
    service2Title: "Farm Consultation",
    service2Body:
      "We share our expertise in aquaponics design and sustainable farming with new growers.",
    service3Title: "Local Distribution",
    service3Body:
      "Reliable supply of premium produce to markets, restaurants and families across Annaba and Eltarf.",

    galleryPageTitle: "Our Gallery",
    galleryPageSubtitle:
      "A glimpse into our aquaponics greenhouses, fresh produce, and the sustainable systems that bring them to life.",
    galleryCategoryAll: "All",
    galleryCategoryGreenhouse: "Greenhouse",
    galleryCategoryProduce: "Produce",
    galleryCategorySystem: "System",

    contactPageTitle: "Contact Us",
    contactPageSubtitle:
      "Have a question about our produce, our systems, or partnership opportunities? Reach out, we would love to hear from you.",
    contactInfoTitle: "Get in Touch",
    contactAddressLabel: "Address",
    contactAddressValue: "Eltarf, Annaba Region, Algeria",
    contactPhoneLabel: "Phone",
    contactPhoneValue: "+213 555 123 456",
    contactEmailLabel: "Email",
    contactEmailValue: "contact@almazraa.dz",
    contactHoursLabel: "Working Hours",
    contactHoursValue: "Sat - Thu: 8:00 AM - 6:00 PM",
    contactFormTitle: "Send Us a Message",
    contactFormName: "Full Name",
    contactFormEmail: "Email Address",
    contactFormMessage: "Your Message",
    contactFormSubmit: "Send Message",
    contactFormSuccess:
      "Thank you! Your message has been received. Our team will get back to you soon.",
    contactFormNamePlaceholder: "Enter your full name",
    contactFormEmailPlaceholder: "you@example.com",
    contactFormMessagePlaceholder: "Tell us how we can help...",

    footerAbout:
      "A closed-loop aquaponics farm in Eltarf, Algeria, growing clean, sustainable produce for our community.",
    footerLinksTitle: "Quick Links",
    footerContactTitle: "Contact",
    footerRights: "All rights reserved.",
  },
  ar: {
    brandName: "المزرعة",
    tagline: "نزرع الأمل، ونحصد المستقبل",
    navHome: "الرئيسية",
    navGallery: "المعرض",
    navContact: "اتصل بنا",
    navCta: "تواصل معنا",

    heroTitle: "المزرعة",
    heroTagline: "نزرع الأمل، ونحصد المستقبل",
    heroSubtitle:
      "مزرعة أكوابونيك حديثة في الطارف، الجزائر، تُنتج محاصيل خالية من المواد الكيميائية ضمن نظام بيئي مستدام مغلق الحلقة.",
    heroPrimaryCta: "اكتشف مزرعتنا",
    heroSecondaryCta: "اتصل بنا",
    heroStat1Value: "0٪",
    heroStat1Label: "مبيدات كيميائية",
    heroStat2Value: "100٪",
    heroStat2Label: "منتج محلي",
    heroStat3Value: "24/7",
    heroStat3Label: "دورة مستدامة",

    aboutEyebrow: "من نحن",
    aboutTitle: "عن المزرعة",
    aboutBody:
      "المزرعة هي رائدة مبتكرة في الزراعة الحديثة، ومقرها في قلب الطارف، الجزائر. نؤمن بأن مستقبل الزراعة يكمن في التوازن المثالي بين الطبيعة والتكنولوجيا. من خلال استخدام أنظمة الأكوابونيك المتقدمة، نعمل على تغيير طريقة زراعة الغذاء. المزرعة ليست مجرد مزرعة، بل هي نظام بيئي مستدام ومغلق الحلقة، حيث تزدهر الأسماك والنباتات معًا، لإنتاج محاصيل عالية الجودة دون الحاجة إلى مواد كيميائية ضارة أو استهلاك مفرط للمياه.",
    aboutLocationLabel: "الموقع",
    aboutLocationValue: "الطارف، الجزائر",
    aboutMethodLabel: "الطريقة",
    aboutMethodValue: "الأكوابونيك",
    aboutMissionLabel: "الرسالة",
    aboutMissionValue: "غذاء مستدام",

    differenceEyebrow: "لماذا نحن",
    differenceTitle: "تميز المزرعة",
    differenceSubtitle: "ثلاث ركائز تحدد كل ما نزرعه وكل ما نؤمن به.",
    diff1Title: "تكامل مستدام",
    diff1Body:
      "يستخدم نظام الأكوابونيك لدينا فضلات الأسماك كسماد طبيعي لنباتاتنا، بينما تقوم النباتات بتنقية المياه للأسماك.",
    diff2Title: "خالٍ من المواد الكيميائية",
    diff2Body:
      "لا نستخدم المبيدات الحشرية ولا الأسمدة الاصطناعية. تُزرع محاصيلنا في بيئة نظيفة ومُتحكم بها بالكامل.",
    diff3Title: "زراعة محلية، وخدمة محلية",
    diff3Body:
      "نزرع في منطقة عنابة/الطارف لتوفير منتجات طازجة لمجتمعنا المحلي.",

    servicesEyebrow: "ماذا نقدم",
    servicesTitle: "خدماتنا",
    service1Title: "منتجات أكوابونيك طازجة",
    service1Body:
      "خضروات ورقية وأعشاب وخضروات تُزرع دون مبيدات وتُسلّم طازجة مباشرة من بيوتنا المحمية.",
    service2Title: "استشارات زراعية",
    service2Body:
      "نشارك خبرتنا في تصميم أنظمة الأكوابونيك والزراعة المستدامة مع المزارعين الجدد.",
    service3Title: "توزيع محلي",
    service3Body:
      "إمداد موثوق بمنتجات عالية الجودة للأسواق والمطاعم والعائلات في عنابة والطارف.",

    galleryPageTitle: "معرض الصور",
    galleryPageSubtitle:
      "لمحة عن بيوتنا المحمية للأكوابونيك، ومنتجاتنا الطازجة، والأنظمة المستدامة التي تحييها.",
    galleryCategoryAll: "الكل",
    galleryCategoryGreenhouse: "البيوت المحمية",
    galleryCategoryProduce: "المحاصيل",
    galleryCategorySystem: "النظام",

    contactPageTitle: "اتصل بنا",
    contactPageSubtitle:
      "هل لديك سؤال حول منتجاتنا أو أنظمتنا أو فرص الشراكة؟ تواصل معنا، يسعدنا سماعك.",
    contactInfoTitle: "ابقَ على تواصل",
    contactAddressLabel: "العنوان",
    contactAddressValue: "الطارف، منطقة عنابة، الجزائر",
    contactPhoneLabel: "الهاتف",
    contactPhoneValue: "555 123 456 213+",
    contactEmailLabel: "البريد الإلكتروني",
    contactEmailValue: "contact@almazraa.dz",
    contactHoursLabel: "ساعات العمل",
    contactHoursValue: "السبت - الخميس: 8:00 صباحًا - 6:00 مساءً",
    contactFormTitle: "أرسل لنا رسالة",
    contactFormName: "الاسم الكامل",
    contactFormEmail: "البريد الإلكتروني",
    contactFormMessage: "رسالتك",
    contactFormSubmit: "إرسال الرسالة",
    contactFormSuccess:
      "شكرًا لك! تم استلام رسالتك بنجاح. سيتواصل معك فريقنا قريبًا.",
    contactFormNamePlaceholder: "أدخل اسمك الكامل",
    contactFormEmailPlaceholder: "you@example.com",
    contactFormMessagePlaceholder: "أخبرنا كيف يمكننا مساعدتك...",

    footerAbout:
      "مزرعة أكوابونيك مغلقة الحلقة في الطارف، الجزائر، تنتج محاصيل نظيفة ومستدامة لمجتمعنا.",
    footerLinksTitle: "روابط سريعة",
    footerContactTitle: "تواصل معنا",
    footerRights: "جميع الحقوق محفوظة.",
  },
};

type LanguageContextValue = {
  language: Language;
  direction: "rtl" | "ltr";
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

const STORAGE_KEY = "al-mazraa-language";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("ar");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "ar" || stored === "en") {
      setLanguageState(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  const setLanguage = (lang: Language) => setLanguageState(lang);
  const toggleLanguage = () =>
    setLanguageState((prev) => (prev === "ar" ? "en" : "ar"));

  const t = useMemo(() => {
    return (key: string) => translations[language][key] ?? key;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      direction: (language === "ar" ? "rtl" : "ltr") as "rtl" | "ltr",
      setLanguage,
      toggleLanguage,
      t,
    }),
    [language, t]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
