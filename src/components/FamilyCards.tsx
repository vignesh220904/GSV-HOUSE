"use client";

import React from "react";
import { Users, Crown, Sparkles, Heart } from "lucide-react";

interface Member {
  name: string;
  role: string;
  location?: string;
  highlight?: boolean;
}

export const FamilyCards: React.FC = () => {
  const familyMembers: Member[] = [
    { name: "P. கோவிந்தராஜன்", role: "மூத்த குடும்ப உறுப்பினர்", location: "சென்னை", highlight: true },
    { name: "மகேஸ்வரி கோவிந்தராஜன்", role: "மூத்த குடும்ப உறுப்பினர்", location: "சென்னை", highlight: true },
    { name: "S. கோவிந்தன்", role: "குடும்ப உறுப்பினர் (Driver)" },
    { name: "சுதா கோவிந்தன்", role: "குடும்ப உறுப்பினர்" },
    { name: "M. தன்ராஜ்", role: "குடும்ப பெரியவர்" },
    { name: "ஜெயந்தி தன்ராஜ்", role: "குடும்ப பெரியவர்" },
    { name: "M.S. செந்தில்குமார்", role: "குடும்ப உறுப்பினர்" },
    { name: "புனிதா செந்தில்குமார்", role: "குடும்ப உறுப்பினர்" },
    { name: "M.S. நந்தகுமார்", role: "குடும்ப உறுப்பினர்" },
    { name: "கலைவாணி நந்தகுமார்", role: "குடும்ப உறுப்பினர்" },
    { name: "G. சுதர்சன்", role: "இளைஞர் அணி", location: "Camp Dubai" },
    { name: "G. சூர்யா, D.C.E.", role: "Site Engineer (Space Designers)", location: "East Tambaram", highlight: true },
    { name: "G. விக்னேஷ், B.Tech.", role: "இளம்பெறியாளர்" },
  ];



  return (
    <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-[#0B0912] via-[#160D20] to-[#0B0912]">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full maroon-glass text-amber-300 border border-amber-500/40 mb-3">
            <Users className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-semibold">அன்பான குடும்பம்</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold gold-text-shimmer mb-3">
            👨‍👩‍👧‍👦 குடும்ப உறுப்பினர்கள்
          </h2>
          <p className="text-amber-200/80 text-base md:text-lg max-w-xl mx-auto">
            G.S.V. இல்லக் குடும்பத்தின் அனைத்து உறுப்பினர்களின் தங்க அட்டைகள்
          </p>
        </div>

        {/* Member Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {familyMembers.map((member, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-3xl transition-all duration-300 relative overflow-hidden shadow-lg ${
                member.highlight
                  ? "maroon-glass border-2 border-amber-400/70 shadow-[0_0_25px_rgba(255,215,0,0.25)] hover:scale-[1.03]"
                  : "dark-glass border border-amber-500/30 hover:border-amber-400 hover:scale-[1.02]"
              } gold-card-shine`}
            >
              {member.highlight && (
                <div className="absolute top-3 right-3 text-amber-400">
                  <Crown className="w-5 h-5 animate-pulse" />
                </div>
              )}

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-400 via-amber-600 to-yellow-700 flex items-center justify-center text-amber-950 font-black text-xl shadow-lg shrink-0">
                  {member.name.charAt(0)}
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg md:text-xl font-extrabold text-yellow-300 leading-snug">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-amber-200/80 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    <span>{member.role}</span>
                  </p>
                  {member.location && (
                    <p className="text-xs font-bold text-amber-400">
                      📍 {member.location}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
