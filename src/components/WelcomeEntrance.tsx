"use client";

import React, { useState } from "react";
import Image from "next/image";
import { soundEngine } from "@/utils/audioEngine";
import { Sparkles, BellRing, DoorOpen } from "lucide-react";

interface WelcomeEntranceProps {
  onEnter: () => void;
}

export const WelcomeEntrance: React.FC<WelcomeEntranceProps> = ({ onEnter }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLightingUp, setIsLightingUp] = useState(false);

  const handleDoorOpen = () => {
    if (isOpen) return;

    // Play Temple Bell Sound
    soundEngine.playTempleBell();

    setIsLightingUp(true);
    setIsOpen(true);

    // After door animation finishes, notify parent
    setTimeout(() => {
      onEnter();
    }, 1800);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#07050B] overflow-hidden transition-opacity duration-1000 ${
        isLightingUp ? "brightness-125" : ""
      }`}
    >
      {/* Background Divine Golden Rays */}
      <div className="absolute inset-0 bg-radial from-amber-500/20 via-red-950/40 to-[#07050B] pointer-events-none" />

      {/* Divine Goddess Blessing Header */}
      <div className="relative z-20 text-center mb-6 px-4 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full maroon-glass text-amber-300 border border-amber-500/40 mb-3 shadow-lg">
          <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
          <span className="text-sm font-semibold tracking-wider">இறைவனின் திருவருளுடன்</span>
          <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold gold-text-shimmer drop-shadow-md tracking-wide">
          ஸ்ரீ அங்காளம்மன் துணை
        </h1>
      </div>

      {/* 3D Carved Wooden Door Container */}
      <div
        className={`relative w-[92%] max-w-xl h-[420px] md:h-[500px] door-perspective my-2 rounded-2xl shadow-2xl overflow-hidden border-2 border-amber-600/40 ${
          isOpen ? "door-open" : ""
        }`}
      >
        {/* Golden Light Burst Behind Doors */}
        <div className="absolute inset-0 bg-gradient-to-t from-amber-600 via-yellow-400 to-amber-100 flex flex-col items-center justify-center text-center p-6 shadow-inner z-0">
          <div className="w-32 h-32 rounded-full bg-white/40 blur-xl animate-ping" />
          <h2 className="text-3xl font-extrabold text-amber-950 mt-4 tracking-wide drop-shadow whitespace-nowrap">
            G.S.V. இல்லம்
          </h2>

          <p className="text-lg font-bold text-red-900 mt-1">புதுமனை புகுவிழா</p>
        </div>

        {/* Left Carved Door */}
        <div className="absolute top-0 left-0 w-1/2 h-full left-door z-10 bg-[#1D0C0E] border-r-2 border-amber-700/60 shadow-2xl flex flex-col justify-between p-4 overflow-hidden">
          <Image
            src="/images/gsv_wooden_door.png"
            alt="Carved Wooden Door Left"
            fill
            priority
            className="object-cover opacity-90 object-left"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40 pointer-events-none" />
          {/* Brass Fittings & Handles */}
          <div className="relative z-10 self-end my-auto w-10 h-24 rounded-full bg-gradient-to-b from-yellow-300 via-amber-600 to-yellow-700 shadow-2xl border border-yellow-200 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-yellow-100 shadow-inner" />
          </div>
        </div>

        {/* Right Carved Door */}
        <div className="absolute top-0 right-0 w-1/2 h-full right-door z-10 bg-[#1D0C0E] border-l-2 border-amber-700/60 shadow-2xl flex flex-col justify-between p-4 overflow-hidden">
          <Image
            src="/images/gsv_wooden_door.png"
            alt="Carved Wooden Door Right"
            fill
            priority
            className="object-cover opacity-90 object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-transparent to-black/40 pointer-events-none" />
          {/* Brass Fittings & Handles */}
          <div className="relative z-10 self-start my-auto w-10 h-24 rounded-full bg-gradient-to-b from-yellow-300 via-amber-600 to-yellow-700 shadow-2xl border border-yellow-200 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-yellow-100 shadow-inner" />
          </div>
        </div>
      </div>

      {/* Entrance Button */}
      <div className="relative z-30 mt-8">
        <button
          onClick={handleDoorOpen}
          disabled={isOpen}
          className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-700 text-amber-950 font-extrabold text-xl md:text-2xl shadow-[0_0_25px_rgba(255,215,0,0.5)] border-2 border-yellow-200 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3 cursor-pointer"
        >
          <BellRing className="w-7 h-7 text-amber-950 animate-bounce" />
          <span>எங்கள் இல்லத்திற்கு வரவேற்கிறோம்</span>
          <DoorOpen className="w-7 h-7 text-amber-950 group-hover:translate-x-1 transition-transform" />
        </button>
        <p className="text-center text-amber-300/80 text-sm mt-3 font-medium">
          (கதவை திறக்க பட்டனை அழுத்தவும் 🔔)
        </p>
      </div>
    </div>
  );
};
