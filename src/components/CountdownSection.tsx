"use client";

import React, { useState, useEffect } from "react";
import { Clock, Flame, Sparkles } from "lucide-react";

export const CountdownSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Target: August 23, 2026 at 03:00:00 AM IST
    const targetDate = new Date("2026-08-23T03:00:00+05:30").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: "நாட்கள்", value: timeLeft.days },
    { label: "மணிநேரம்", value: timeLeft.hours },
    { label: "நிமிடங்கள்", value: timeLeft.minutes },
    { label: "விநாடிகள்", value: timeLeft.seconds },
  ];

  return (
    <section id="countdown" className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-[#0B0912] via-[#140D20] to-[#0B0912]">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        {/* Section Header */}
        <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full maroon-glass text-amber-300 border border-amber-500/30 mb-4">
          <Clock className="w-4 h-4 text-amber-400" />
          <span className="text-sm font-semibold">நிகழ்வு நேரக்கணிப்பு</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-extrabold gold-text-shimmer mb-4">
          புதுமனை புகுவிழா நேரக்கணிப்பு
        </h2>
        <p className="text-amber-200/80 text-base md:text-lg max-w-xl mx-auto mb-12">
          23 ஆகஸ்ட் 2026 அதிகாலை 3.00 மணி சுப முஹூர்த்த நிகழ்விற்கான நேரக்கணிப்பு
        </p>

        {/* Live Countdown Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          {timeUnits.map((unit, idx) => (
            <div
              key={idx}
              className="relative group p-6 rounded-3xl dark-glass border-2 border-amber-500/40 shadow-[0_0_30px_rgba(212,175,55,0.15)] hover:border-amber-400 hover:shadow-[0_0_40px_rgba(255,215,0,0.3)] transition-all duration-300 flex flex-col items-center justify-center overflow-hidden"
            >
              {/* Lamp Icon Accent */}
              <div className="absolute top-3 right-3 text-amber-400/40 group-hover:text-amber-400 transition-colors">
                <Flame className="w-4 h-4 animate-pulse" />
              </div>

              {/* Number Counter */}
              <span className="text-4xl md:text-6xl font-black gold-text-shimmer tracking-tight font-mono">
                {String(unit.value).padStart(2, "0")}
              </span>

              {/* Tamil Unit Label */}
              <span className="text-sm md:text-base font-bold text-amber-200 mt-2 tracking-wider">
                {unit.label}
              </span>
            </div>
          ))}
        </div>

        {/* Auspicious Muhurtham Note */}
        <div className="mt-12 inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-sm md:text-base font-medium">
          <Sparkles className="w-5 h-5 text-yellow-400 shrink-0" />
          <span>சுபயோக சுபதினத்தில் அதிகாலை 3.00 மணி முதல் 4.30 மணி வரை சிம்ம லக்னத்தில்</span>
        </div>
      </div>
    </section>
  );
};
