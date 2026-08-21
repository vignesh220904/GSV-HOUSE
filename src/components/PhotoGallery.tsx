"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { soundEngine } from "@/utils/audioEngine";
import {
  Image as ImageIcon,
  ZoomIn,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Film,
  Video as VideoIcon
} from "lucide-react";

interface GalleryItem {
  id: number;
  type: "image" | "video";
  src: string;
  poster?: string;
  title: string;
  category: "final" | "video" | "exterior" | "interior" | "construction";
  categoryLabel: string;
  badge?: string;
}

export const PhotoGallery: React.FC = () => {
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      type: "image",
      src: "/images/final_pic.jpeg",
      title: "G.S.V. இல்லம் - நிறைவு பெற்ற கம்பீரத் தோற்றம்",
      category: "final",
      categoryLabel: "நிறைவுப் படம் ⭐",
      badge: "முக்கிய புகைப்படம்",
    },
    {
      id: 2,
      type: "video",
      src: "/images/final_output.mp4",
      poster: "/images/final_pic.jpeg",
      title: "G.S.V. இல்லம் - பிரம்மாண்ட வீடியோ காட்சி (House Tour)",
      category: "video",
      categoryLabel: "வீடியோ 🎬",
      badge: "சிறப்பு வீடியோ",
    },
    {
      id: 3,
      type: "image",
      src: "/images/backround.jpeg",
      title: "G.S.V. இல்லம் இரவு நேரப் பொலிவு",
      category: "exterior",
      categoryLabel: "முகப்பு",
    },
    {
      id: 4,
      type: "image",
      src: "/images/photo_6320856529069871917_y.jpg",
      title: "G.S.V. இல்லம் முகப்பு தோற்றம்",
      category: "exterior",
      categoryLabel: "முகப்பு",
    },
    {
      id: 5,
      type: "image",
      src: "/images/photo_6320856529069871923_y.jpg",
      title: "G.S.V. இல்லம் முன் தளம் & முகப்பு",
      category: "exterior",
      categoryLabel: "முகப்பு",
    },
    {
      id: 6,
      type: "image",
      src: "/images/photo_6320856529069871919_y.jpg",
      title: "உள் தளம் & நவீன சமையலறை",
      category: "interior",
      categoryLabel: "உள் அலங்காரம்",
    },
    {
      id: 7,
      type: "image",
      src: "/images/photo_6320856529069871918_y.jpg",
      title: "கட்டடத்தின் பக்கவாட்டுத் தோற்றம்",
      category: "exterior",
      categoryLabel: "முகப்பு",
    },
    {
      id: 8,
      type: "image",
      src: "/images/photo_6320856529069871922_y.jpg",
      title: "வண்ணப்பூச்சு & நிறைவுப் பணிகள்",
      category: "exterior",
      categoryLabel: "முகப்பு",
    },
    {
      id: 9,
      type: "image",
      src: "/images/photo_6320856529069871924_y.jpg",
      title: "அஸ்திவாரம் & தூண்கள் அமைப்பு",
      category: "construction",
      categoryLabel: "கட்டுமானம்",
    },
    {
      id: 10,
      type: "image",
      src: "/images/photo_6320856529069871920_y.jpg",
      title: "செங்கல் சுவர்கள் எழுப்புதல்",
      category: "construction",
      categoryLabel: "கட்டுமானம்",
    },
    {
      id: 11,
      type: "image",
      src: "/images/photo_6320856529069871921_y.jpg",
      title: "மேற்கூரை காங்கிரீட் தளம்",
      category: "construction",
      categoryLabel: "கட்டுமானம்",
    },
  ];

  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  // Featured inline video player state
  const inlineVideoRef = useRef<HTMLVideoElement | null>(null);
  const [isInlinePlaying, setIsInlinePlaying] = useState(false);
  const [isInlineMuted, setIsInlineMuted] = useState(true);

  // Lightbox video ref
  const lightboxVideoRef = useRef<HTMLVideoElement | null>(null);

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : activeCategory === "final"
      ? galleryItems.filter((item) => item.category === "final" || item.category === "video")
      : galleryItems.filter((item) => item.category === activeCategory);

  const categories = [
    { id: "all", label: "அனைத்தும்" },
    { id: "final", label: "நிறைவுப் படம் & வீடியோ ⭐" },
    { id: "video", label: "வீடியோ காட்சி 🎬" },
    { id: "exterior", label: "முகப்பு தோற்றம்" },
    { id: "interior", label: "உள் அலங்காரம்" },
    { id: "construction", label: "கட்டுமானப் பயணம்" },
  ];

  const toggleInlinePlay = () => {
    soundEngine.playClickSound();
    if (inlineVideoRef.current) {
      if (isInlinePlaying) {
        inlineVideoRef.current.pause();
        setIsInlinePlaying(false);
      } else {
        inlineVideoRef.current.play().catch(() => {});
        setIsInlinePlaying(true);
      }
    }
  };

  const toggleInlineMute = () => {
    soundEngine.playClickSound();
    if (inlineVideoRef.current) {
      inlineVideoRef.current.muted = !isInlineMuted;
      setIsInlineMuted(!isInlineMuted);
    }
  };

  const handleOpenLightbox = (index: number) => {
    soundEngine.playClickSound();
    setSelectedItemIndex(index);
  };

  const handleCloseLightbox = () => {
    soundEngine.playClickSound();
    setSelectedItemIndex(null);
  };

  const handleLightboxPrev = () => {
    soundEngine.playClickSound();
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((prev) =>
        prev === 0 ? filteredItems.length - 1 : (prev as number) - 1
      );
    }
  };

  const handleLightboxNext = () => {
    soundEngine.playClickSound();
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((prev) => ((prev as number) + 1) % filteredItems.length);
    }
  };

  // Keyboard Navigation & Body Scroll Lock
  useEffect(() => {
    if (selectedItemIndex === null) return;

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
  }, [selectedItemIndex, filteredItems.length]);

  return (
    <section id="gallery" className="py-20 sm:py-24 px-3 sm:px-6 relative overflow-hidden bg-gradient-to-b from-[#0B0912] via-[#140D20] to-[#0B0912]">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full maroon-glass text-amber-300 border border-amber-500/40 mb-3 shadow-lg">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-xs sm:text-sm font-semibold">நினைவுத் தொகுப்பு</span>
            <Sparkles className="w-4 h-4 text-yellow-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold gold-text-shimmer mb-3">
            📸 புகைப்படங்கள் & வீடியோ காட்சி
          </h2>
          <p className="text-amber-200/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            எங்கள் G.S.V. இல்லத்தின் நிறைவு பெற்ற கம்பீரத் தோற்றம் மற்றும் அழகான வீடியோ தொகுப்பு
          </p>
        </div>

        {/* 🌟 FEATURED HIGHLIGHT DUO: Final Video & Final Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* 1. Final Output Video Box */}
          <div className="dark-glass rounded-3xl p-4 sm:p-6 border-2 border-amber-500/50 shadow-[0_0_35px_rgba(255,215,0,0.25)] relative overflow-hidden flex flex-col justify-between group">
            <div className="flex items-center justify-between mb-3 px-2">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-red-600/30 border border-red-500/50 text-red-400">
                  <Film className="w-4 h-4" />
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-bold gold-text-shimmer">
                    🎬 சிறப்பு வீடியோ காட்சி
                  </h3>
                  <p className="text-xs text-amber-300/70">G.S.V. House Video Tour</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full maroon-glass text-[11px] sm:text-xs font-bold text-yellow-400 border border-amber-500/40">
                1080p Full HD
              </span>
            </div>

            {/* Video Player Box */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-amber-500/40 bg-black/90 shadow-2xl flex items-center justify-center">
              <video
                ref={inlineVideoRef}
                src="/images/final_output.mp4"
                poster="/images/final_pic.jpeg"
                playsInline
                loop
                muted={isInlineMuted}
                onPlay={() => setIsInlinePlaying(true)}
                onPause={() => setIsInlinePlaying(false)}
                className="w-full h-full object-cover sm:object-contain bg-black cursor-pointer"
                onClick={toggleInlinePlay}
              />

              {/* Center Play Button Overlay when paused */}
              {!isInlinePlaying && (
                <div
                  onClick={toggleInlinePlay}
                  className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center cursor-pointer transition-opacity group-hover:bg-black/30"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-amber-600 via-yellow-400 to-amber-500 p-[3px] shadow-[0_0_30px_rgba(255,215,0,0.6)] animate-pulse">
                    <div className="w-full h-full rounded-full bg-black/80 flex items-center justify-center text-amber-300 hover:text-white transition-colors">
                      <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current translate-x-0.5" />
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Custom Overlay Controls */}
              <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center justify-between text-white z-10">
                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleInlinePlay();
                    }}
                    className="p-2 rounded-full bg-amber-500/30 hover:bg-amber-500/50 border border-amber-400/50 text-yellow-300 transition-transform active:scale-95"
                    title={isInlinePlaying ? "நிறுத்து (Pause)" : "இயக்கு (Play)"}
                  >
                    {isInlinePlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleInlineMute();
                    }}
                    className="p-2 rounded-full bg-amber-500/30 hover:bg-amber-500/50 border border-amber-400/50 text-yellow-300 transition-transform active:scale-95"
                    title={isInlineMuted ? "ஒலி இயக்கு (Unmute)" : "ஒலி நிறுத்து (Mute)"}
                  >
                    {isInlineMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>

                  <span className="text-xs text-amber-200/90 font-medium hidden sm:inline">
                    {isInlinePlaying ? "வீடியோ ஓடுகிறது" : "வீடியோவைக் காண கிளிக் செய்யவும்"}
                  </span>
                </div>

                {/* Open in Fullscreen Modal */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const videoIdx = galleryItems.findIndex((item) => item.type === "video");
                    if (videoIdx !== -1) handleOpenLightbox(videoIdx);
                  }}
                  className="px-3 py-1.5 rounded-full maroon-glass text-yellow-300 border border-amber-400/50 text-xs font-bold flex items-center gap-1.5 hover:bg-amber-500/30 transition-all cursor-pointer"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">முழுத் திரை</span>
                </button>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-amber-200/80 mt-3 px-1 leading-relaxed">
              ✨ எங்களின் கனவு இல்லமான <strong className="text-amber-300">G.S.V. இல்லத்தின்</strong> முழுமையான தோற்றத்தை வீடியோவில் கண்டு மகிழுங்கள்.
            </p>
          </div>

          {/* 2. Final Output Photo Box */}
          <div className="dark-glass rounded-3xl p-4 sm:p-6 border-2 border-amber-500/50 shadow-[0_0_35px_rgba(255,215,0,0.25)] relative overflow-hidden flex flex-col justify-between group">
            <div className="flex items-center justify-between mb-3 px-2">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-amber-500/30 border border-amber-400/50 text-amber-300">
                  <ImageIcon className="w-4 h-4" />
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-bold gold-text-shimmer">
                    🏛 நிறைவு பெற்ற கம்பீரத் தோற்றம்
                  </h3>
                  <p className="text-xs text-amber-300/70">Final Completed House</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full maroon-glass text-[11px] sm:text-xs font-bold text-yellow-400 border border-amber-500/40 animate-pulse">
                ⭐ நிறைவுப் படம்
              </span>
            </div>

            {/* Photo Box */}
            <div
              onClick={() => {
                const finalPicIdx = galleryItems.findIndex((item) => item.src === "/images/final_pic.jpeg");
                handleOpenLightbox(finalPicIdx !== -1 ? finalPicIdx : 0);
              }}
              className="relative w-full aspect-video rounded-2xl overflow-hidden border border-amber-500/40 bg-black/60 shadow-2xl cursor-pointer"
            >
              <Image
                src="/images/final_pic.jpeg"
                alt="G.S.V. இல்லம் நிறைவுப் படம்"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-70 group-hover:opacity-90 transition-opacity" />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="p-3 rounded-full bg-amber-500/80 text-amber-950 shadow-[0_0_20px_rgba(255,215,0,0.8)] scale-90 group-hover:scale-100 transition-transform">
                  <ZoomIn className="w-7 h-7" />
                </div>
              </div>

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white z-10">
                <span className="text-xs sm:text-sm font-bold text-amber-100 drop-shadow-md">
                  G.S.V. இல்லம் - முழுமையான தோற்றம்
                </span>
                <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-semibold text-yellow-300 border border-amber-500/40">
                  பெரிதாக்கு 🔍
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-amber-200/80 mt-3 px-1 leading-relaxed">
              🏡 இயற்கை எழில் கொஞ்சும் சூழலில், தலைமுறை போற்றும் வகையில் அழகுற கட்டப்பட்டுள்ள எங்களின் நல் இல்லம்.
            </p>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                soundEngine.playClickSound();
                setActiveCategory(cat.id);
              }}
              className={`px-4 sm:px-5 py-2 rounded-full font-bold text-xs md:text-sm transition-all duration-300 cursor-pointer border ${
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(index)}
              className={`group relative h-64 sm:h-72 rounded-3xl overflow-hidden border-2 dark-glass shadow-xl cursor-pointer transition-all duration-300 ${
                item.category === "final" || item.category === "video"
                  ? "border-amber-400 shadow-[0_0_20px_rgba(255,215,0,0.2)] hover:border-yellow-300 hover:scale-[1.03]"
                  : "border-amber-500/30 hover:border-amber-400 hover:scale-[1.03]"
              }`}
            >
              {/* Media Preview */}
              {item.type === "video" ? (
                <div className="relative w-full h-full bg-black flex items-center justify-center">
                  {item.poster ? (
                    <Image
                      src={item.poster}
                      alt={item.title}
                      fill
                      loading="lazy"
                      className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-75"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-purple-950 to-black" />
                  )}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-600 to-amber-600 flex items-center justify-center text-white shadow-[0_0_15px_rgba(255,0,0,0.6)] group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-current translate-x-0.5" />
                    </div>
                  </div>
                </div>
              ) : (
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              )}

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Top Tag Badges */}
              <div className="absolute top-3 left-3 flex items-center gap-1.5">
                <span className="px-3 py-0.5 rounded-full maroon-glass text-amber-300 text-xs font-semibold border border-amber-500/30">
                  {item.categoryLabel}
                </span>
                {item.badge && (
                  <span className="px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 text-amber-950 text-[10px] font-extrabold shadow-sm">
                    {item.badge}
                  </span>
                )}
              </div>

              {/* Bottom Card Title & Icon */}
              <div className="absolute inset-x-0 bottom-0 p-4 flex items-end justify-between">
                <div>
                  <h3 className="text-amber-100 font-bold text-sm md:text-base group-hover:text-yellow-300 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                </div>
                <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center text-amber-300 group-hover:bg-amber-500 group-hover:text-amber-950 transition-all shrink-0 ml-2">
                  {item.type === "video" ? <Film className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 🎬 & 📸 Fullscreen Lightbox Modal (z-[100]) */}
        {selectedItemIndex !== null && filteredItems[selectedItemIndex] && (
          <div
            onClick={handleCloseLightbox}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6 md:p-8 cursor-pointer select-none"
          >
            {/* Close Button Top Right */}
            <div className="fixed top-4 right-4 md:top-6 md:right-6 z-[110] flex items-center gap-3">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleCloseLightbox();
                }}
                className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-red-600/90 hover:bg-red-500 text-white font-extrabold text-xs sm:text-base border border-red-400 shadow-2xl flex items-center gap-2 transition-transform active:scale-95 cursor-pointer"
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
              className="fixed left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 md:p-4 rounded-full maroon-glass border-2 border-amber-400 text-yellow-300 hover:bg-amber-500/30 transition-transform active:scale-90 z-[110] shadow-2xl cursor-pointer"
              title="முந்தைய படம்"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleLightboxNext();
              }}
              className="fixed right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 md:p-4 rounded-full maroon-glass border-2 border-amber-400 text-yellow-300 hover:bg-amber-500/30 transition-transform active:scale-90 z-[110] shadow-2xl cursor-pointer"
              title="அடுத்த படம்"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
            </button>

            {/* Media Box */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[85vh] rounded-3xl overflow-hidden border-2 border-amber-400 shadow-[0_0_50px_rgba(255,215,0,0.3)] bg-black flex flex-col justify-between cursor-default"
            >
              <div className="relative w-full flex-1 flex items-center justify-center min-h-[50vh] sm:min-h-[60vh] max-h-[70vh] bg-black">
                {filteredItems[selectedItemIndex].type === "video" ? (
                  <video
                    ref={lightboxVideoRef}
                    src={filteredItems[selectedItemIndex].src}
                    poster={filteredItems[selectedItemIndex].poster}
                    controls
                    autoPlay
                    playsInline
                    className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg"
                  />
                ) : (
                  <div className="relative w-full h-[55vh] sm:h-[65vh]">
                    <Image
                      src={filteredItems[selectedItemIndex].src}
                      alt={filteredItems[selectedItemIndex].title}
                      fill
                      priority
                      className="object-contain p-2"
                    />
                  </div>
                )}
              </div>

              {/* Caption Banner */}
              <div className="relative z-10 p-3 sm:p-5 bg-gradient-to-t from-black via-black/95 to-transparent text-center border-t border-amber-500/30">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="px-3 py-0.5 rounded-full maroon-glass text-xs font-bold text-amber-300 uppercase tracking-wider border border-amber-500/30">
                    {filteredItems[selectedItemIndex].categoryLabel} ({selectedItemIndex + 1} / {filteredItems.length})
                  </span>
                </div>
                <h3 className="text-lg sm:text-2xl font-extrabold gold-text-shimmer">
                  {filteredItems[selectedItemIndex].title}
                </h3>
                <p className="text-[11px] sm:text-xs text-amber-300/70 font-semibold mt-1">
                  (வெளியேற திரை அல்லது ✕ மூடு பொத்தானை அழுத்தவும் / Press ESC to close)
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
