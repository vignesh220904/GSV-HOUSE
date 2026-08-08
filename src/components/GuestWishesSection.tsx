"use client";

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { soundEngine } from "@/utils/audioEngine";
import { HeartHandshake, Send, Sparkles, User, MapPin, MessageSquareQuote } from "lucide-react";

interface Wish {
  id: string;
  name: string;
  relation: string;
  message: string;
  date: string;
}

export const GuestWishesSection: React.FC = () => {
  const initialWishes: Wish[] = [
    {
      id: "1",
      name: "செந்தில் நாதன் & குடும்பத்தினர்",
      relation: "சீர்காழி",
      message: "புதிய G.S.V. இல்லத்தில் மகாலக்ஷ்மியின் அருள் என்றும் நிலைத்திருக்க இறைவனைப் பிரார்த்திக்கிறோம். வாழ்த்துகள்!",
      date: "இன்று",
    },
    {
      id: "2",
      name: "முருகேசன் B.E.",
      relation: "நண்பர், சென்னை",
      message: "அழகான கனவு இல்லம்! புதுமனை புகுவிழா சிறக்க எங்கள் மனமார்ந்த வாழ்த்துக்கள்!",
      date: "இன்று",
    },
  ];

  const [wishes, setWishes] = useState<Wish[]>(initialWishes);
  const [name, setName] = useState("");
  const [relation, setRelation] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("gsv_guest_wishes");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setWishes(parsed);
        }
      } catch (e) {
        console.error("Could not parse saved wishes", e);
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    soundEngine.playClickSound();
    setIsSubmitting(true);

    const newWish: Wish = {
      id: Date.now().toString(),
      name: name.trim(),
      relation: relation.trim() || "உறவினர் / நண்பர்",
      message: message.trim(),
      date: "இப்போது",
    };

    const updated = [newWish, ...wishes];
    setWishes(updated);
    localStorage.setItem("gsv_guest_wishes", JSON.stringify(updated));

    // Trigger Golden Flower Confetti Animation
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#FFD700", "#FF9E00", "#FFF8E7", "#FF5E7E"],
    });

    setName("");
    setRelation("");
    setMessage("");
    setIsSubmitting(false);
  };

  return (
    <section id="wishes" className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-[#0B0912] via-[#1A0D22] to-[#0B0912]">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full maroon-glass text-amber-300 border border-amber-500/40 mb-3">
            <HeartHandshake className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-semibold">வருகையாளர்களின் நல்வாழ்த்துக்கள்</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold gold-text-shimmer mb-3">
            💌 வாழ்த்துக்கள்
          </h2>
          <p className="text-amber-200/80 text-base md:text-lg max-w-xl mx-auto">
            G.S.V. இல்ல புதுமனை புகுவிழாவிற்கு உங்கள் அன்பான நல்வாழ்த்துக்களை பதிவு செய்யுங்கள்
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Wish Input Form */}
          <div className="dark-glass rounded-3xl p-6 md:p-8 border-2 border-amber-500/40 shadow-2xl gold-card-shine">
            <h3 className="text-2xl font-extrabold text-yellow-300 mb-6 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-yellow-400" />
              <span>உங்கள் வாழ்த்தை எழுதுங்கள்</span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-amber-300 mb-1.5 flex items-center gap-1.5">
                  <User className="w-4 h-4 text-amber-400" />
                  <span>உங்கள் பெயர் *</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="உதாரணம்: கோவிந்தன்"
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-amber-500/30 text-amber-100 placeholder-amber-300/40 focus:outline-none focus:border-amber-400 text-sm font-medium transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-amber-300 mb-1.5 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span>ஊர் / உறவு (விருப்பப்பட்டால்)</span>
                </label>
                <input
                  type="text"
                  value={relation}
                  onChange={(e) => setRelation(e.target.value)}
                  placeholder="உதாரணம்: சென்னை / நண்பர்"
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-amber-500/30 text-amber-100 placeholder-amber-300/40 focus:outline-none focus:border-amber-400 text-sm font-medium transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-amber-300 mb-1.5 flex items-center gap-1.5">
                  <MessageSquareQuote className="w-4 h-4 text-amber-400" />
                  <span>வாழ்த்து செய்தி *</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="உங்கள் அன்பான ஆசிகளையும் நல்வாழ்த்துக்களையும் இங்கு பதிவு செய்யுங்கள்..."
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-amber-500/30 text-amber-100 placeholder-amber-300/40 focus:outline-none focus:border-amber-400 text-sm font-medium transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-amber-950 font-extrabold text-base md:text-lg shadow-[0_0_20px_rgba(255,215,0,0.4)] hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-5 h-5 text-amber-950" />
                <span>வாழ்த்துக்களை சமர்ப்பிக்க</span>
              </button>
            </form>
          </div>

          {/* Dynamic Wishes Display Stream */}
          <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
            <h3 className="text-xl font-extrabold text-amber-200 mb-2 flex items-center gap-2">
              <span>🌸</span>
              <span>பதிவு செய்யப்பட்ட வாழ்த்துக்கள் ({wishes.length})</span>
            </h3>

            {wishes.map((w) => (
              <div
                key={w.id}
                className="p-5 rounded-2xl dark-glass border border-amber-500/30 hover:border-amber-400 transition-all duration-300 space-y-2 shadow-md"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-extrabold text-yellow-300 text-base">
                    {w.name}
                  </h4>
                  <span className="text-xs font-semibold text-amber-400/80 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                    {w.relation}
                  </span>
                </div>
                <p className="text-amber-100 text-sm font-medium leading-relaxed">
                  "{w.message}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
