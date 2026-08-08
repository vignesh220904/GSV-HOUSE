"use client";

import React, { useState, useEffect } from "react";
import { soundEngine } from "@/utils/audioEngine";
import { Volume2, VolumeX, Menu, X, Home, MapPin, HeartHandshake, Image as ImageIcon, Calendar, Clock, Sparkles } from "lucide-react";

export const HeaderNav: React.FC = () => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMusic = () => {
    soundEngine.playClickSound();
    const newState = !isPlayingAudio;
    soundEngine.toggleAmbientMusic(newState, (playing) => {
      setIsPlayingAudio(playing);
    });
  };

  const navItems = [
    { label: "முகப்பு", href: "#hero", icon: Home },
    { label: "நேரக்கணிப்பு", href: "#countdown", icon: Clock },
    { label: "அழைப்பிதழ்", href: "#invitation", icon: Sparkles },
    { label: "புகைப்படங்கள்", href: "#gallery", icon: ImageIcon },
    { label: "நிகழ்ச்சி நிரல்", href: "#agenda", icon: Clock },
    { label: "வழிகாட்டுதல்", href: "#map", icon: MapPin },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
          ? "bg-[#0C0914]/95 backdrop-blur-md border-b border-amber-500/25 py-2.5 shadow-2xl"
          : "bg-gradient-to-b from-black/90 via-black/40 to-transparent py-3.5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 md:px-8 flex items-center justify-between">
        {/* Brand Logo in Tamil */}
        <a
          href="#hero"
          className="flex items-center gap-2 group shrink-0"
          onClick={() => soundEngine.playClickSound()}
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-700 flex items-center justify-center text-amber-950 font-black text-lg sm:text-xl shadow-lg group-hover:scale-105 transition-transform shrink-0">
            G
          </div>
          <div className="whitespace-nowrap flex flex-col justify-center">
            <span className="text-lg sm:text-2xl font-black gold-text-shimmer tracking-wide block leading-tight py-0.5 pr-1">
              G.S.V. இல்லம்
            </span>
            <span className="text-[10px] sm:text-xs text-amber-400/90 font-semibold block">புதுமனை புகுவிழா</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 maroon-glass px-5 py-2 rounded-full border border-amber-500/30 shadow-lg">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => soundEngine.playClickSound()}
              className="px-3.5 py-1.5 rounded-full text-sm font-semibold text-amber-100 hover:text-yellow-300 hover:bg-amber-500/20 transition-all duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Audio Toggle & Mobile Menu Trigger */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={toggleMusic}
            className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-bold text-xs md:text-sm flex items-center gap-1.5 border transition-all duration-300 shadow-md ${isPlayingAudio
                ? "bg-amber-500/20 text-yellow-300 border-amber-400 shadow-[0_0_12px_rgba(255,215,0,0.3)] animate-pulse"
                : "bg-black/70 text-amber-200/80 border-amber-600/40 hover:border-amber-400"
              }`}
            title="பின்னணி இசை"
          >
            {isPlayingAudio ? (
              <>
                <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400 shrink-0" />
                <span className="hidden sm:inline">இசை ஒலிக்கிறது</span>
                <span className="sm:hidden">இசை 🎵</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
                <span className="hidden sm:inline">இசை நிறுத்தப்பட்டது</span>
                <span className="sm:hidden">இசை 🔇</span>
              </>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-full maroon-glass text-amber-300 border border-amber-500/40 shrink-0"
            aria-label="பட்டி"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-[#0E0B18]/95 backdrop-blur-2xl border-b border-amber-500/30 shadow-2xl p-4 transition-all">
          <div className="grid grid-cols-2 gap-2.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    soundEngine.playClickSound();
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200 font-semibold hover:bg-amber-500/25 transition-all text-xs sm:text-sm"
                >
                  <Icon className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
