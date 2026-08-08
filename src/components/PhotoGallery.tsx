"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { soundEngine } from "@/utils/audioEngine";
import { Image as ImageIcon, ZoomIn, X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: "exterior" | "interior" | "construction";
  categoryLabel: string;
}

export const PhotoGallery: React.FC = () => {
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      src: "/images/backround.jpeg",
      title: "G.S.V. இல்லம் இரவு தோற்றம்",
      category: "exterior",
      categoryLabel: "முகப்பு",
    },
    {
      id: 2,
      src: "/images/photo_6320856529069871917_y.jpg",
      title: "G.S.V. இல்லம் முகப்பு தோற்றம்",
      category: "exterior",
      categoryLabel: "முகப்பு",
    },
    {
      id: 3,
      src: "/images/photo_6320856529069871923_y.jpg",
      title: "G.S.V. இல்லம் முன் தளம்",
      category: "exterior",
      categoryLabel: "முகப்பு",
    },
    {
      id: 4,
      src: "/images/photo_6320856529069871919_y.jpg",
      title: "உள் தளம் & சமையலறை",
      category: "interior",
      categoryLabel: "உள் அலங்காரம்",
    },
    {
      id: 5,
      src: "/images/photo_6320856529069871924_y.jpg",
      title: "அஸ்திவாரம் & தூண்கள்",
      category: "construction",
      categoryLabel: "கட்டுமானம்",
    },
    {
      id: 6,
      src: "/images/photo_6320856529069871920_y.jpg",
      title: "செங்கல் சுவர்கள் அமைப்பு",
      category: "construction",
      categoryLabel: "கட்டுமானம்",
    },
    {
      id: 7,
      src: "/images/photo_6320856529069871921_y.jpg",
      title: "மேற்கூரை காங்கிரீட் தளம்",
      category: "construction",
      categoryLabel: "கட்டுமானம்",
    },
    {
      id: 8,
      src: "/images/photo_6320856529069871922_y.jpg",
      title: "வண்ணப்பூச்சு & நிறைவுப் பணி",
      category: "exterior",
      categoryLabel: "முகப்பு",
    },
  ];

  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const categories = [
    { id: "all", label: "அனைத்தும்" },
    { id: "exterior", label: "முகப்பு தோற்றம்" },
    { id: "interior", label: "உள் அலங்காரம்" },
    { id: "construction", label: "கட்டுமானம்" },
  ];

  const handleOpenLightbox = (index: number) => {
    soundEngine.playClickSound();
    setSelectedImageIndex(index);
  };

  const handleCloseLightbox = () => {
    soundEngine.playClickSound();
    setSelectedImageIndex(null);
  };

  const handleLightboxPrev = () => {
    soundEngine.playClickSound();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) =>
        prev === 0 ? filteredItems.length - 1 : (prev as number) - 1
      );
    }
  };

  const handleLightboxNext = () => {
    soundEngine.playClickSound();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => ((prev as number) + 1) % filteredItems.length);
    }
  };

  // Keyboard Navigation & Body Scroll Lock
  useEffect(() => {
    if (selectedImageIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleCloseLightbox();
      if (e.key === "ArrowLeft") handleLightboxPrev();
      if (e.key === "ArrowRight") handleLightboxNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImageIndex, filteredItems.length]);

  return (
    <section id="gallery" className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-[#0B0912] via-[#140D20] to-[#0B0912]">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full maroon-glass text-amber-300 border border-amber-500/40 mb-3">
            <ImageIcon className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-semibold">நினைவுப் புகைப்படங்கள்</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold gold-text-shimmer mb-3">
            📸 புகைப்படங்கள்
          </h2>
          <p className="text-amber-200/80 text-base md:text-lg max-w-xl mx-auto">
            G.S.V. இல்லத்தின் அழகுமிக்க தருணங்கள் மற்றும் புகைப்படத்தொகுப்பு
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                soundEngine.playClickSound();
                setActiveCategory(cat.id);
              }}
              className={`px-5 py-2 rounded-full font-bold text-xs md:text-sm transition-all duration-300 cursor-pointer border ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-amber-500 to-amber-700 text-amber-950 border-amber-300 shadow-[0_0_15px_rgba(255,215,0,0.4)] scale-105"
                  : "dark-glass text-amber-200/80 border-amber-500/30 hover:border-amber-400 hover:text-amber-100"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(index)}
              className="group relative h-64 rounded-3xl overflow-hidden border-2 border-amber-500/30 dark-glass shadow-xl cursor-pointer hover:border-amber-400 hover:scale-[1.03] transition-all duration-300"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute top-3 left-3 px-3 py-0.5 rounded-full maroon-glass text-amber-300 text-xs font-semibold border border-amber-500/30">
                {item.categoryLabel}
              </div>

              <div className="absolute inset-x-0 bottom-0 p-4 flex items-end justify-between">
                <div>
                  <h3 className="text-amber-100 font-bold text-sm md:text-base group-hover:text-yellow-300 transition-colors">
                    {item.title}
                  </h3>
                </div>
                <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center text-amber-300 group-hover:bg-amber-500 group-hover:text-amber-950 transition-all">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fullscreen Lightbox Modal (z-[100]) */}
        {selectedImageIndex !== null && (
          <div
            onClick={handleCloseLightbox}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-8 cursor-pointer select-none"
          >
            {/* Prominent Close Button Top Right */}
            <div className="fixed top-4 right-4 md:top-6 md:right-6 z-[110] flex items-center gap-3">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleCloseLightbox();
                }}
                className="px-5 py-2.5 rounded-full bg-red-600/90 hover:bg-red-500 text-white font-extrabold text-sm md:text-base border border-red-400 shadow-2xl flex items-center gap-2 transition-transform active:scale-95 cursor-pointer"
              >
                <span>மூடு ✕</span>
              </button>
            </div>

            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleLightboxPrev();
              }}
              className="fixed left-3 md:left-8 top-1/2 -translate-y-1/2 p-3 md:p-4 rounded-full maroon-glass border-2 border-amber-400 text-yellow-300 hover:bg-amber-500/30 transition-transform active:scale-90 z-[110] shadow-2xl cursor-pointer"
              title="முந்தைய படம்"
            >
              <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleLightboxNext();
              }}
              className="fixed right-3 md:right-8 top-1/2 -translate-y-1/2 p-3 md:p-4 rounded-full maroon-glass border-2 border-amber-400 text-yellow-300 hover:bg-amber-500/30 transition-transform active:scale-90 z-[110] shadow-2xl cursor-pointer"
              title="அடுத்த படம்"
            >
              <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
            </button>

            {/* Image Box */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full h-[70vh] md:h-[80vh] rounded-3xl overflow-hidden border-2 border-amber-400 shadow-[0_0_50px_rgba(255,215,0,0.3)] bg-black/80 flex flex-col justify-between cursor-default"
            >
              <div className="relative w-full flex-1">
                <Image
                  src={filteredItems[selectedImageIndex].src}
                  alt={filteredItems[selectedImageIndex].title}
                  fill
                  priority
                  className="object-contain p-2"
                />
              </div>

              {/* Caption Banner */}
              <div className="relative z-10 p-4 md:p-6 bg-gradient-to-t from-black via-black/90 to-transparent text-center border-t border-amber-500/30">
                <span className="inline-block px-3 py-0.5 rounded-full maroon-glass text-xs font-bold text-amber-300 uppercase tracking-wider mb-1 border border-amber-500/30">
                  {filteredItems[selectedImageIndex].categoryLabel} ({selectedImageIndex + 1} / {filteredItems.length})
                </span>
                <h3 className="text-xl md:text-3xl font-extrabold gold-text-shimmer">
                  {filteredItems[selectedImageIndex].title}
                </h3>
                <p className="text-xs text-amber-300/70 font-semibold mt-1">
                  (வெளியேற திரை அல்லது ✕ பொத்தானை அழுத்தவும் / Press ESC to close)
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
