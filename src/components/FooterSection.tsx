"use client";

import React from "react";
import { soundEngine } from "@/utils/audioEngine";
import { ArrowUp, Flame, Heart, Sparkles } from "lucide-react";

export const FooterSection: React.FC = () => {
  const scrollToTop = () => {
    soundEngine.playClickSound();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#07050D] text-amber-100 py-16 px-4 border-t-2 border-amber-600/30 overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-amber-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center space-y-8">
        {/* Kolam / Lamp Emblem */}
        <div className="flex items-center justify-center gap-3">
          <Flame className="w-6 h-6 text-amber-400 animate-pulse" />
          <span className="text-3xl">🪷</span>
          <Flame className="w-6 h-6 text-amber-400 animate-pulse" />
        </div>

        {/* House Name */}
        <div>
          <h2 className="text-3xl md:text-5xl font-black gold-text-shimmer tracking-wider">
            G.S.V. இல்லம்
          </h2>
          <p className="text-amber-300 font-bold text-base md:text-lg mt-1">
            புதுமனை புகுவிழா | 23 ஆகஸ்ட் 2026
          </p>
        </div>

        {/* Emotional Traditional Footer Verses */}
        <div className="p-6 rounded-3xl dark-glass border border-amber-500/30 max-w-2xl mx-auto space-y-3">
          <p className="text-xl md:text-2xl font-bold text-yellow-300 gold-text-shimmer">
            "என்றும் உறவை அன்புடன் நேசிப்போம்..."
          </p>
          <div className="h-[1px] w-24 bg-amber-500/40 mx-auto" />
          <p className="text-lg md:text-xl font-bold text-amber-200">
            "இனிய உறவும்... இனிய நட்பும்..."
          </p>
        </div>

        <p className="text-xs text-amber-400/80 font-medium pt-4">
          பழையபாளையம், சீர்காழி தாலுக்கா, மயிலாடுதுறை மாவட்டம்.
        </p>

        {/* Scroll To Top Button */}
        <div>
          <button
            onClick={scrollToTop}
            className="px-6 py-2.5 rounded-full maroon-glass border border-amber-500/40 text-amber-300 hover:text-yellow-300 hover:border-amber-400 text-xs md:text-sm font-bold transition-all duration-300 inline-flex items-center gap-2 cursor-pointer shadow-lg"
          >
            <span>மேலே செல்க</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="pt-6 border-t border-amber-500/20 text-xs text-amber-400/60 font-medium">
          © 2026 G.S.V. இல்லம் புதுமனை புகுவிழா டிஜிட்டல் அழைப்பிதழ். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.
        </div>
      </div>
    </footer>
  );
};
