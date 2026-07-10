"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

type GalleryCategory = "greenhouse" | "produce" | "system";

type GalleryItem = {
  id: number;
  src: string;
  category: GalleryCategory;
  titleEn: string;
  titleAr: string;
};

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1000",
    category: "greenhouse",
    titleEn: "Our Aquaponics Greenhouse",
    titleAr: "بيتنا المحمي للأكوابونيك",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/37113938/pexels-photo-37113938.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1000",
    category: "greenhouse",
    titleEn: "Indoor Growing Beds",
    titleAr: "أحواض الزراعة الداخلية",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/9098814/pexels-photo-9098814.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1000",
    category: "greenhouse",
    titleEn: "Lush Greenhouse Rows",
    titleAr: "صفوف خضراء وارفة",
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/4199758/pexels-photo-4199758.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1000",
    category: "produce",
    titleEn: "Fresh Hydroponic Lettuce",
    titleAr: "خس طازج من الزراعة المائية",
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/4199761/pexels-photo-4199761.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1000",
    category: "produce",
    titleEn: "Premium Leafy Greens",
    titleAr: "خضروات ورقية فاخرة",
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/5496030/pexels-photo-5496030.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1000",
    category: "produce",
    titleEn: "Protected Leafy Crops",
    titleAr: "محاصيل ورقية محمية",
  },
  {
    id: 7,
    src: "https://images.pexels.com/photos/20131541/pexels-photo-20131541.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1000",
    category: "produce",
    titleEn: "Vibrant, Chemical-Free Growth",
    titleAr: "نمو نابض بالحياة وخالٍ من المواد الكيميائية",
  },
  {
    id: 8,
    src: "https://images.pexels.com/photos/2749165/pexels-photo-2749165.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1000",
    category: "produce",
    titleEn: "Close-Up on Fresh Leaves",
    titleAr: "لقطة مقربة لأوراق طازجة",
  },
  {
    id: 9,
    src: "https://images.pexels.com/photos/14024725/pexels-photo-14024725.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1000",
    category: "system",
    titleEn: "Aquaculture Water System",
    titleAr: "نظام تدوير المياه المائي",
  },
  {
    id: 10,
    src: "https://images.pexels.com/photos/15059730/pexels-photo-15059730.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1000",
    category: "system",
    titleEn: "Fish Tanks at the Heart of the Cycle",
    titleAr: "أحواض الأسماك في قلب الدورة",
  },
  {
    id: 11,
    src: "https://images.pexels.com/photos/4750271/pexels-photo-4750271.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1000",
    category: "greenhouse",
    titleEn: "Thriving Sustainable Ecosystem",
    titleAr: "نظام بيئي مستدام مزدهر",
  },
  {
    id: 12,
    src: "https://images.pexels.com/photos/2518861/pexels-photo-2518861.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1000",
    category: "produce",
    titleEn: "Seedlings Ready to Grow",
    titleAr: "شتلات جاهزة للنمو",
  },
];

export default function GalleryPage() {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<
    GalleryCategory | "all"
  >("all");

  const categories: { key: GalleryCategory | "all"; label: string }[] = [
    { key: "all", label: t("galleryCategoryAll") },
    { key: "greenhouse", label: t("galleryCategoryGreenhouse") },
    { key: "produce", label: t("galleryCategoryProduce") },
    { key: "system", label: t("galleryCategorySystem") },
  ];

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") return galleryItems;
    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-b from-emerald-950 to-emerald-800 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold sm:text-4xl">
            {t("galleryPageTitle")}
          </h1>
          <p className="mt-4 text-emerald-100/90">
            {t("galleryPageSubtitle")}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setActiveCategory(cat.key)}
              className={`rounded-full border px-5 py-2 text-sm font-semibold transition-colors ${
                activeCategory === cat.key
                  ? "border-emerald-700 bg-emerald-700 text-white"
                  : "border-emerald-200 bg-white text-emerald-800 hover:bg-emerald-50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <figure
              key={item.id}
              className="group overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm transition-shadow hover:shadow-xl"
            >
              <div className="h-64 w-full overflow-hidden">
                <img
                  src={item.src}
                  alt={language === "ar" ? item.titleAr : item.titleEn}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <figcaption className="p-4">
                <p className="text-sm font-bold text-emerald-950">
                  {language === "ar" ? item.titleAr : item.titleEn}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
