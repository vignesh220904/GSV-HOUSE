"use client";

import React from "react";
import Image from "next/image";
import { soundEngine } from "@/utils/audioEngine";
import { Calendar, Clock, MapPin, Sparkles, ScrollText, ArrowDown } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/backround.jpeg"
          alt="G.S.V. இல்லம்"
          fill
          priority
          className="object-cover object-center transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0912] via-black/40 to-black/60" />
        <div className="absolute inset-0 bg-radial from-transparent via-black/20 to-[#0B0912]/80" />
      </div>

      {/* Main Hero Card Content */}
      <div className="relative z-20 max-w-4xl w-full text-center">
        {/* Divine Tag */}
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full maroon-glass text-amber-300 border border-amber-500/40 mb-6 shadow-2xl animate-float">
          <Sparkles className="w-5 h-5 text-yellow-400 animate-spin" />
          <span className="text-base md:text-lg font-bold tracking-wide">ஸ்ரீ அங்காளம்மன் துணை</span>
          <Sparkles className="w-5 h-5 text-yellow-400 animate-spin" />
        </div>

        {/* House Title Card */}
        <div className="dark-glass rounded-3xl p-6 md:p-12 border-2 border-amber-500/40 shadow-[0_0_50px_rgba(255,215,0,0.2)] gold-card-shine">
          {/* Main House Name Header */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold gold-text-shimmer mb-4 tracking-wide drop-shadow-2xl whitespace-nowrap flex items-center justify-center gap-2 md:gap-4 py-2 pr-3 overflow-visible">
            <span className="text-3xl md:text-6xl shrink-0">🏠</span>
            <span className="inline-block py-1 pr-2">G.S.V. இல்லம்</span>
          </h1>



          <div className="flex items-center justify-center gap-3 my-4">
            <div className="h-[2px] w-12 md:w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
            <h2 className="text-2xl md:text-4xl font-bold text-amber-200 tracking-wider flex items-center gap-2">
              <span>🌸</span> புதுமனை புகுவிழா <span>🌸</span>
            </h2>
            <div className="h-[2px] w-12 md:w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
          </div>

          {/* Date & Time Badges */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 max-w-2xl mx-auto">
            {/* Date Box */}
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center gap-3">
              <Calendar className="w-8 h-8 text-amber-400 shrink-0" />
              <div className="text-left">
                <p className="text-xs text-amber-300/80 font-medium">நிகழ்ச்சி நாள்</p>
                <p className="text-lg md:text-xl font-extrabold text-amber-100">
                  23 ஆகஸ்ட் 2026
                </p>
                <p className="text-xs text-amber-400 font-semibold">(🗓 ஞாயிற்றுக்கிழமை)</p>
              </div>
            </div>

            {/* Time Box */}
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center gap-3">
              <Clock className="w-8 h-8 text-amber-400 shrink-0" />
              <div className="text-left">
                <p className="text-xs text-amber-300/80 font-medium">சுப முஹூர்த்த நேரம்</p>
                <p className="text-lg md:text-xl font-extrabold text-amber-100">
                  அதிகாலை 3.00 - 4.30 மணி
                </p>
                <p className="text-xs text-amber-400 font-semibold">(சிம்ம லக்னம், மூல நட்சத்திரம்)</p>
              </div>
            </div>
          </div>

          {/* Location Quick Summary */}
          <div className="mt-6 pt-4 border-t border-amber-500/20 text-amber-200/90 text-sm md:text-base flex items-center justify-center gap-2">
            <MapPin className="w-5 h-5 text-red-400 shrink-0" />
            <span>பழையபாளையம், சீர்காழி தாலுக்கா, மயிலாடுதுறை மாவட்டம்</span>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a
              href="#invitation"
              onClick={() => soundEngine.playClickSound()}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-amber-950 font-extrabold text-base md:text-lg shadow-[0_0_20px_rgba(255,215,0,0.4)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2"
            >
              <ScrollText className="w-5 h-5" />
              <span>அழைப்பிதழ் பார்க்க</span>
            </a>

            <a
              href="#map"
              onClick={() => soundEngine.playClickSound()}
              className="px-8 py-3.5 rounded-full maroon-glass text-amber-200 font-extrabold text-base md:text-lg border border-amber-500/50 hover:bg-amber-500/20 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2"
            >
              <MapPin className="w-5 h-5 text-amber-400" />
              <span>வழிகாட்டுதல்</span>
            </a>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="mt-8 flex justify-center">
          <a
            href="#countdown"
            onClick={() => soundEngine.playClickSound()}
            className="text-amber-400/80 hover:text-amber-300 transition-colors flex flex-col items-center gap-1 animate-bounce text-xs font-semibold"
          >
            <span>கீழே நகர்த்தவும்</span>
            <ArrowDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
