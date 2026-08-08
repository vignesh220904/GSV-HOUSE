"use client";

import React from "react";
import { Flower2, Heart, MapPin, Building2, HardHat, GraduationCap, Compass } from "lucide-react";

export const HostsAndRelatives: React.FC = () => {
  const hosts = [
    { name: "M. தன்ராஜ்", spouse: "ஜெயந்தி தன்ராஜ்" },
    { name: "M.S. செந்தில்குமார்", spouse: "புனிதா செந்தில்குமார்" },
    { name: "M.S. நந்தகுமார்", spouse: "கலைவாணி நந்தகுமார்" },
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-[#0B0912] via-[#170E1A] to-[#0B0912]">
      <div className="max-w-6xl mx-auto relative z-10 space-y-20">
        
        {/* Section 1: 💐 அழைப்பில் மகிழ்வோர் */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full maroon-glass text-amber-300 border border-amber-500/40 mb-3">
            <Flower2 className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-semibold">நிகழ்வு வரவேற்பாளர்கள்</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold gold-text-shimmer mb-8">
            💐 அழைப்பில் மகிழ்வோர்
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {hosts.map((host, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl dark-glass border border-amber-500/30 hover:border-amber-400 hover:scale-[1.03] transition-all duration-300 text-center shadow-lg gold-card-shine"
              >
                <div className="w-12 h-12 rounded-full bg-amber-500/20 border border-amber-400 mx-auto mb-3 flex items-center justify-center text-amber-400 text-xl font-serif">
                  🌸
                </div>
                <h3 className="text-xl md:text-2xl font-extrabold text-yellow-300">
                  {host.name}
                </h3>
                <p className="text-amber-200/90 text-sm font-semibold mt-1">
                  – {host.spouse}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 inline-flex items-center gap-2 text-amber-300 font-bold text-base md:text-lg bg-amber-500/10 px-5 py-2 rounded-full border border-amber-500/30">
            <MapPin className="w-5 h-5 text-red-400" />
            <span>📍 வில்லியநல்லூர்</span>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 max-w-xl mx-auto">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-amber-500/40" />
          <Heart className="w-6 h-6 text-red-400 animate-pulse" />
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-amber-500/40" />
        </div>

        {/* Section 2: ❤️ தங்கள் அன்புள்ள */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full maroon-glass text-amber-300 border border-amber-500/40 mb-3">
            <Heart className="w-4 h-4 text-red-400" />
            <span className="text-sm font-semibold">குடும்ப உறுப்பினர்கள்</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold gold-text-shimmer mb-10">
            ❤️ தங்கள் அன்புள்ள
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
            {/* P. Govindharajan */}
            <div className="p-6 rounded-3xl dark-glass border border-amber-500/30 hover:border-amber-400 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center text-amber-300 font-bold">
                  P
                </div>
                <div>
                  <h3 className="text-lg font-bold text-yellow-300">P. கோவிந்தராஜன்</h3>
                  <p className="text-xs text-amber-200/90 font-medium">– மகேஸ்வரி கோவிந்தராஜன்</p>
                </div>
              </div>
              <p className="text-xs text-amber-400 font-semibold flex items-center gap-1 mt-2">
                <Building2 className="w-3.5 h-3.5" /> (சென்னை)
              </p>
            </div>

            {/* S. Govindan */}
            <div className="p-6 rounded-3xl dark-glass border border-amber-500/30 hover:border-amber-400 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center text-amber-300 font-bold">
                  S
                </div>
                <div>
                  <h3 className="text-lg font-bold text-yellow-300">S. கோவிந்தன் (Driver)</h3>
                  <p className="text-xs text-amber-200/90 font-medium">– சுதா கோவிந்தன்</p>
                </div>
              </div>
            </div>

            {/* G. Sudharsan */}
            <div className="p-6 rounded-3xl dark-glass border border-amber-500/30 hover:border-amber-400 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center text-amber-300 font-bold">
                  G
                </div>
                <div>
                  <h3 className="text-lg font-bold text-yellow-300">G. சுதர்சன்</h3>
                  <p className="text-xs text-amber-400 font-semibold flex items-center gap-1 mt-1">
                    <Compass className="w-3.5 h-3.5" /> (Camp Dubai)
                  </p>
                </div>
              </div>
            </div>

            {/* G. Surya - Site Engineer */}
            <div className="p-6 rounded-3xl maroon-glass border-2 border-amber-500/50 hover:border-amber-400 transition-all duration-300 md:col-span-2 lg:col-span-2 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-700 flex items-center justify-center text-amber-950 font-black text-xl shrink-0">
                  <HardHat className="w-6 h-6 text-amber-950" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-yellow-300">
                    G. சூர்யா, D.C.E.
                  </h3>
                  <p className="text-sm font-bold text-amber-200 mt-1">Site Engineer</p>
                  <p className="text-xs text-amber-300/90 font-medium mt-1">
                    Space Designers & Construction
                  </p>
                  <p className="text-xs text-amber-400 font-semibold mt-0.5">
                    East Tambaram
                  </p>
                </div>
              </div>
            </div>

            {/* G. Vignesh */}
            <div className="p-6 rounded-3xl dark-glass border border-amber-500/30 hover:border-amber-400 transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center text-amber-300 font-bold">
                  G
                </div>
                <div>
                  <h3 className="text-lg font-bold text-yellow-300">G. விக்னேஷ், B.Tech.</h3>
                </div>
              </div>
            </div>
          </div>


          {/* Address Card */}
          <div className="mt-10 max-w-xl mx-auto p-6 rounded-2xl dark-glass border border-amber-500/40 text-amber-200 text-center font-medium">
            <p className="text-amber-400 font-bold text-lg mb-1">📍 முகவரி</p>
            <p className="text-xl font-extrabold text-yellow-300">பழையபாளையம்</p>
            <p className="text-base text-amber-100">விநாயகர் கோவில் தெரு</p>
          </div>
        </div>

      </div>
    </section>
  );
};
