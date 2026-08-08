"use client";

import React, { useState } from "react";
import { WelcomeEntrance } from "@/components/WelcomeEntrance";
import { HeaderNav } from "@/components/HeaderNav";
import { HeroSection } from "@/components/HeroSection";
import { CountdownSection } from "@/components/CountdownSection";
import { PalmLeafInvitation } from "@/components/PalmLeafInvitation";
import { EldersBlessings } from "@/components/EldersBlessings";
import { HostsAndRelatives } from "@/components/HostsAndRelatives";
import { PhotoGallery } from "@/components/PhotoGallery";
import { EventSchedule } from "@/components/EventSchedule";
import { NavigationMapSection } from "@/components/NavigationMapSection";
import { FooterSection } from "@/components/FooterSection";
import { GoldenParticlesCanvas } from "@/components/canvas/GoldenParticlesCanvas";
import { FallingFlowersCanvas } from "@/components/canvas/FallingFlowersCanvas";
import { MouseGlowCursor } from "@/components/canvas/MouseGlowCursor";

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <main className="relative min-h-screen bg-[#0B0912] text-amber-50 selection:bg-amber-500 selection:text-black font-sans">
      {/* 🌺 Entrance Screen Door Opening */}
      {!hasEntered && (
        <WelcomeEntrance onEnter={() => setHasEntered(true)} />
      )}

      {/* Main Website Experience */}
      {hasEntered && (
        <>
          {/* Background Canvas FX */}
          <GoldenParticlesCanvas />
          <FallingFlowersCanvas />
          <MouseGlowCursor />

          {/* Sticky Tamil Navigation & Music Controls */}
          <HeaderNav />

          {/* Page Sections */}
          <HeroSection />
          <CountdownSection />
          <PalmLeafInvitation />
          <EldersBlessings />
          <HostsAndRelatives />
          <PhotoGallery />
          <EventSchedule />
          <NavigationMapSection />
          <FooterSection />
        </>
      )}
    </main>
  );
}

