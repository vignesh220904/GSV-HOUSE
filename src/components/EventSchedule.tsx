"use client";

import React from "react";
import { Clock, Flame, Utensils, HeartHandshake, Sparkles, Home } from "lucide-react";

export const EventSchedule: React.FC = () => {
  const events = [
    {
      time: "🕒 அதிகாலை 03.00 மணி",
      title: "கிரகப்பிரவேசம்",
      subtitle: "சுப முஹூர்த்த கிரகப்பிரவேசம்",
      description: "மங்கல வாத்தியம் முழங்க, பசு மாடு மற்றும் மங்கலப் பொருட்களுடன் G.S.V. இல்லத்தில் முதன்முதலில் நுழையும் சுப தருணம்.",
      icon: Home,
    },
    {
      time: "🕒 அதிகாலை 03.30 மணி",
      title: "ஹோமம்",
      subtitle: "கணபதி & லக்ஷ்மி நவதானிய ஹோமம்",
      description: "இல்லத்தில் செல்வம், அமைதி மற்றும் ஆரோக்கியம் பெருக வேத விற்பன்னர்களால் நடத்தப்படும் புனித ஹோம வேள்வி.",
      icon: Flame,
    },
    {
      time: "🕒 அதிகாலை 04.30 மணி",
      title: "ஆசீர்வாதம்",
      subtitle: "பெரியோர்களின் ஆசிகள்",
      description: "தெய்வத்திருவாளர்கள் மற்றும் வந்திருக்கும் பெரியோர்கள், உறவினர்களின் பொன்னான நல்லாசிகளையும் அக்ஷதையும் பெறுதல்.",
      icon: HeartHandshake,
    },
    {
      time: "🕒 காலை 06.00 மணி",
      title: "காலை உணவு",
      subtitle: "பாரம்பரிய விருந்து உபசரிப்பு",
      description: "சுவையான தென்னக பாரம்பரிய அறுசுவை காலை உணவு மற்றும் விருந்தோம்பல் உபசரிப்பு.",
      icon: Utensils,
    },
    {
      time: "🕒 காலை 08.00 மணி",
      title: "உறவினர்களுடன் சந்திப்பு",
      subtitle: "இனிய சந்திப்பு & கலந்துரையாடல்",
      description: "நண்பர்கள் மற்றும் உற்றார் உறவினர்களுடன் மகிழ்ச்சியாக உரையாடி இல்லத்தை சுற்றிப் பார்க்கும் நேரம்.",
      icon: Sparkles,
    },
  ];


  return (
    <section id="agenda" className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-[#0B0912] via-[#1A0D1F] to-[#0B0912]">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full maroon-glass text-amber-300 border border-amber-500/40 mb-3">
            <Clock className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-semibold">நிகழ்ச்சி அட்டவணை</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold gold-text-shimmer mb-3">
            🪔 நிகழ்ச்சி நிரல்
          </h2>
          <p className="text-amber-200/80 text-base md:text-lg max-w-xl mx-auto">
            23 ஆகஸ்ட் 2026 ஞாயிற்றுக்கிழமை நடைபெறும் மங்கல நிகழ்வுகளின் அட்டவணை
          </p>
        </div>

        {/* Timeline Path Container */}
        <div className="relative pl-6 md:pl-10 border-l-2 border-amber-500/40 space-y-12">
          {events.map((event, idx) => {
            const Icon = event.icon;
            return (
              <div key={idx} className="relative group">
                {/* Glowing Node Dot */}
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-700 border-2 border-yellow-200 flex items-center justify-center text-amber-950 shadow-[0_0_20px_rgba(255,215,0,0.4)] group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-amber-950" />
                </div>

                {/* Event Detail Card */}
                <div className="dark-glass rounded-3xl p-6 md:p-8 border border-amber-500/30 hover:border-amber-400 hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] transition-all duration-300 gold-card-shine">
                  <span className="inline-block px-4 py-1 rounded-full maroon-glass text-yellow-300 font-extrabold text-sm mb-3 border border-amber-500/40">
                    {event.time}
                  </span>

                  <h3 className="text-2xl md:text-3xl font-extrabold text-yellow-300 mb-1">
                    {event.title}
                  </h3>
                  <p className="text-amber-400 font-semibold text-sm mb-3">
                    {event.subtitle}
                  </p>
                  <p className="text-amber-100 text-sm md:text-base leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
