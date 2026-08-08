"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, MapPin, Bookmark } from "lucide-react";

export const PalmLeafInvitation: React.FC = () => {
  return (
    <section id="invitation" className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-[#0B0912] via-[#1A0B10] to-[#0B0912]">
      {/* Background Subtle Red Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/15 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full maroon-glass text-amber-300 border border-amber-500/40 mb-3">
            <Bookmark className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-semibold">பாரம்பரிய திருமுக அழைப்பு</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold gold-text-shimmer">
            புதுமனை புகுவிழா அழைப்பிதழ்
          </h2>
        </div>

        {/* Palm Leaf Parchment Card */}
        <div className="relative rounded-3xl overflow-hidden p-6 md:p-14 border-4 border-amber-600/50 shadow-[0_0_60px_rgba(212,175,55,0.25)] bg-[#180B0F]">
          {/* Background Texture Image */}
          <div className="absolute inset-0 opacity-25">
            <Image
              src="/images/gsv_palm_leaf_bg.png"
              alt="Palm Leaf Scroll Texture"
              fill
              className="object-cover"
            />
          </div>

          {/* Decorative Corner Filigrees */}
          <div className="absolute top-4 left-4 text-amber-400 text-3xl font-serif">🪷</div>
          <div className="absolute top-4 right-4 text-amber-400 text-3xl font-serif">🪷</div>
          <div className="absolute bottom-4 left-4 text-amber-400 text-3xl font-serif">🪷</div>
          <div className="absolute bottom-4 right-4 text-amber-400 text-3xl font-serif">🪷</div>

          <div className="relative z-10 text-center space-y-6">
            {/* Top Deity Blessing */}
            <div className="flex items-center justify-center gap-3">
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <h3 className="text-xl md:text-3xl font-extrabold text-amber-300 tracking-wide border-b-2 border-amber-500/40 pb-2">
                ஸ்ரீ அங்காளம்மன் துணை
              </h3>
              <Sparkles className="w-5 h-5 text-yellow-400" />
            </div>

            {/* Salutation */}
            <p className="text-xl md:text-2xl font-extrabold gold-text-shimmer">
              அன்புடையீர்! வணக்கம்.
            </p>

            {/* Main Tamil Content */}
            <div className="p-6 md:p-8 rounded-2xl bg-black/40 border border-amber-500/30 text-amber-100 text-base md:text-xl leading-relaxed md:leading-loose text-justify md:text-center font-medium shadow-inner">
              நிகழும் பராபவ வருடம், ஆவணி மாதம் 6-ஆம் தேதி (23.08.2026), ஞாயிற்றுக்கிழமை, மூல நட்சத்திரம், சித்தயோகம் கூடிய சுபயோக சுபதினத்தில், அதிகாலை 3.00 மணி முதல் 4.30 மணி வரை, சிம்ம லக்னத்தில் நடைபெறவுள்ள எங்களது புதுமனை புகுவிழா நிகழ்வில் தாங்களும் தங்கள் குடும்பத்தினருடன் கலந்து கொண்டு, தங்களது அன்பான வருகையாலும் நல்லாசியாலும் விழாவைச் சிறப்பிக்க அன்புடன் அழைக்கின்றோம்.
            </div>

            {/* Location Details Box */}
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-amber-950/60 via-maroon-900/80 to-amber-950/60 border-2 border-amber-500/40 text-left max-w-xl mx-auto shadow-xl">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-amber-500/30">
                <MapPin className="w-7 h-7 text-red-400 shrink-0" />
                <h4 className="text-xl font-extrabold text-amber-300">
                  📍 விழா நடைபெறும் இடம்
                </h4>
              </div>

              <div className="space-y-2 text-amber-100 font-medium text-base md:text-lg pl-2">
                <p className="text-xl md:text-2xl font-black text-yellow-300">
                  G.S.V. இல்லம்
                </p>
                <p>விநாயகர் கோவில் தெரு</p>
                <p>பழையபாளையம்</p>
                <p>சீர்காழி தாலுக்கா</p>
                <p className="text-amber-300 font-bold">மயிலாடுதுறை மாவட்டம்</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
