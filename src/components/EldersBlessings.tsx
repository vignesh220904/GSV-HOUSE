"use client";

import React from "react";
import { Flame, HeartHandshake, Sparkles } from "lucide-react";

export const EldersBlessings: React.FC = () => {
  const elders = [
    {
      husband: "திரு. சுப்புடு செட்டியார்",
      wife: "திருமதி. ஆயிரவள்ளி",
    },
    {
      husband: "திரு. சுப்பிரமணியன் செட்டியார்",
      wife: "திருமதி. கனகவள்ளி",
    },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-[#0B0912] via-[#150E22] to-[#0B0912]">
      <div className="max-w-5xl mx-auto relative z-10 text-center">
        {/* Header Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full maroon-glass text-amber-300 border border-amber-500/40 mb-4">
          <HeartHandshake className="w-4 h-4 text-amber-400" />
          <span className="text-sm font-semibold">முன்னோர்களின் நல்வாழ்த்துக்கள்</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-extrabold gold-text-shimmer mb-4">
          🙏 தெய்வத்திருவாளர்கள்
        </h2>
        <p className="text-amber-200/80 text-base md:text-lg max-w-2xl mx-auto mb-12">
          பெரியோர்களின் வழிகாட்டுதலுடனும் இறைவனின் பேரருளாலும்
        </p>

        {/* Elders Memorial Gold Frame Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {elders.map((item, idx) => (
            <div
              key={idx}
              className="relative p-8 rounded-3xl dark-glass border-2 border-amber-500/40 shadow-[0_0_35px_rgba(212,175,55,0.2)] hover:border-amber-400 hover:scale-[1.02] transition-all duration-300 flex flex-col items-center justify-center text-center gold-card-shine"
            >
              {/* Lamp Icon Header */}
              <div className="w-14 h-14 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center mb-4 shadow-lg">
                <Flame className="w-8 h-8 text-amber-400 animate-pulse" />
              </div>

              <h3 className="text-2xl md:text-3xl font-extrabold text-yellow-300 mb-2">
                {item.husband}
              </h3>
              <div className="text-amber-400 font-bold text-lg my-1">— & —</div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-yellow-300 mt-1">
                {item.wife}
              </h3>

              <div className="mt-4 pt-3 border-t border-amber-500/25 text-xs text-amber-300 font-semibold tracking-widest uppercase">
                தெய்வத்திருவாளர்களின் நல்லாசி
              </div>
            </div>
          ))}
        </div>

        {/* Blessings Message Box */}
        <div className="max-w-3xl mx-auto p-6 md:p-8 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-100 text-base md:text-xl font-medium leading-relaxed shadow-lg">
          <div className="flex justify-center mb-3">
            <Sparkles className="w-6 h-6 text-yellow-400" />
          </div>
          இவர்களின் நல்லாசியுடனும், பெரியோர்களின் ஆசியுடனும், இறைவனின் திருவருளாலும், எங்களால் புதிதாக கட்டப்பட்டுள்ள G.S.V. இல்லத்தின் புதுமனை புகுவிழா இனிதே நடைபெற உள்ளது.
        </div>
      </div>
    </section>
  );
};

