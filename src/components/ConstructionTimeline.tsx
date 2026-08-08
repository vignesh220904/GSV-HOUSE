"use client";

import React, { useState } from "react";
import Image from "next/image";
import { soundEngine } from "@/utils/audioEngine";
import { Hammer, Play, Pause, ChevronLeft, ChevronRight, CheckCircle2, Sparkles } from "lucide-react";

interface TimelineStep {
  title: string;
  subtitle: string;
  image: string;
  description: string;
  tag: string;
}

export const ConstructionTimeline: React.FC = () => {
  const steps: TimelineStep[] = [
    {
      title: "🏞 காலி நிலம்",
      subtitle: "பூமி பூஜை & துவக்கம்",
      image: "/images/gsv_construction_land.png",
      description: "இறைவனின் திருவருளுடன் மற்றும் பெரியோர்களின் ஆசியுடன் பழையபாளையத்தில் பூமி பூஜை செய்யப்பட்டு சுபயோக நாளில் காலி நிலத்தில் கட்டுமானப் பணி தொடங்கியது.",
      tag: "படி 1",
    },
    {
      title: "🏗 அஸ்திவாரம்",
      subtitle: "ஆழமான அஸ்திவார அமைப்பு",
      image: "/images/gsv_construction_foundation.png",
      description: "இல்லம் தலைமுறை தலைமுறையாக உறுதியோடு நிற்க வேண்டும் என்பதற்காக மிக ஆழமான, வலிமையான காங்கிரீட் அஸ்திவாரம் அமைத்தல் பணி நிறைவு பெற்றது.",
      tag: "படி 2",
    },
    {
      title: "🏛 தூண்கள்",
      subtitle: "வலிமையான தூண்கள் உருவாக்கம்",
      image: "/images/gsv_construction_pillars.png",
      description: "உயர்தர இரும்பு கம்பிகள் மற்றும் சிமெண்ட் காங்கிரீட் கலவையால் கட்டடத்தை தாங்கும் வலுவான தூண்கள் எழுப்பப்பட்டன.",
      tag: "படி 3",
    },
    {
      title: "🧱 சுவர்கள்",
      subtitle: "செங்கல் சுவர்கள் எழுப்புதல்",
      image: "/images/gsv_hero_bg.png",
      description: "செங்கற்களால் ஒவ்வொரு அறையின் வடிவமும் நேர்த்தியாக செதுக்கப்பட்டு, இயற்கை காற்றோட்டத்துடன் சுவர்கள் அமைக்கப்பட்டன.",
      tag: "படி 4",
    },
    {
      title: "🏠 கூரை",
      subtitle: "மேற்கூரை காங்கிரீட் தளம்",
      image: "/images/gsv_construction_foundation.png",
      description: "அனைத்து குடும்ப உறுப்பினர்களின் கனவுகளை தாங்கும் பிரம்மாண்ட காங்கிரீட் மேற்கூரை தளமிடப்பட்டது.",
      tag: "படி 5",
    },
    {
      title: "🎨 வண்ணப்பூச்சு",
      subtitle: "அழகான வண்ணப்பூச்சு பணி",
      image: "/images/gsv_construction_paint.png",
      description: "வீட்டின் வெளிப்புறம் மற்றும் உட்புற சுவர்களுக்கு ராயல் தோற்றமளிக்கும் தங்க நிற ஒளி மற்றும் மென்மையான வண்ணப்பூச்சுகள் பூசப்பட்டன.",
      tag: "படி 6",
    },
    {
      title: "🛋 உள் அலங்காரம்",
      subtitle: "பூஜை அறை & உள்தள அலங்காரம்",
      image: "/images/gsv_interior_living.png",
      description: "பாரம்பரிய மரச் செதுக்கல் கதவுகள், பிரம்மாண்ட விளக்குகள் மற்றும் வசதியான உள் அலங்காரப் பணிகள் நிறைவு பெற்றன.",
      tag: "படி 7",
    },
    {
      title: "🏠 G.S.V. இல்லம்",
      subtitle: "கனவு இல்லம் தயார்!",
      image: "/images/gsv_hero_bg.png",
      description: "எங்களின் எண்ணத்திலும் கனவிலும் மலர்ந்த G.S.V. இல்லம் முழுமையாக நிறைவடைந்து உங்கள் வருகைக்காக காத்திருக்கிறது!",
      tag: "நிறைவு",
    },
  ];

  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  React.useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
      }, 4000);
    }
    return () => clearInterval(timer);
  }, [isPlaying, steps.length]);

  const handleNext = () => {
    soundEngine.playClickSound();
    setActiveStep((prev) => (prev + 1) % steps.length);
  };

  const handlePrev = () => {
    soundEngine.playClickSound();
    setActiveStep((prev) => (prev === 0 ? steps.length - 1 : prev - 1));
  };

  return (
    <section id="timeline" className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-[#0B0912] via-[#120B1D] to-[#0B0912]">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full maroon-glass text-amber-300 border border-amber-500/40 mb-3">
            <Hammer className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-semibold">கட்டுமானக் கதையம்சம்</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold gold-text-shimmer mb-3">
            🏡 எங்கள் இல்லத்தின் பயணம்
          </h2>
          <p className="text-amber-200/80 text-base md:text-lg max-w-2xl mx-auto">
            காலி நிலத்தில் இருந்து எங்களின் பிரம்மாண்டமான G.S.V. இல்லம் உருவான வரலாற்றுப் பாதை
          </p>
        </div>

        {/* Horizontal Interactive Step Selector */}
        <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {steps.map((step, idx) => (
            <button
              key={idx}
              onClick={() => {
                soundEngine.playClickSound();
                setActiveStep(idx);
              }}
              className={`shrink-0 px-4 py-2 rounded-full font-bold text-xs md:text-sm transition-all duration-300 flex items-center gap-2 cursor-pointer border ${
                activeStep === idx
                  ? "bg-gradient-to-r from-amber-500 to-amber-700 text-amber-950 border-amber-300 shadow-[0_0_15px_rgba(255,215,0,0.4)] scale-105"
                  : "dark-glass text-amber-200/70 border-amber-500/20 hover:text-amber-100 hover:border-amber-400"
              }`}
            >
              <span>{step.title.split(" ")[0]}</span>
              <span className="hidden md:inline">{step.title.substring(step.title.indexOf(" "))}</span>
            </button>
          ))}
        </div>

        {/* Featured Step Display Card */}
        <div className="dark-glass rounded-3xl p-6 md:p-10 border-2 border-amber-500/40 shadow-2xl relative overflow-hidden gold-card-shine">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Image Box */}
            <div className="relative h-[280px] md:h-[400px] w-full rounded-2xl overflow-hidden border-2 border-amber-500/30 group shadow-inner">
              <Image
                src={steps[activeStep].image}
                alt={steps[activeStep].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute top-4 left-4 px-3.5 py-1 rounded-full maroon-glass text-amber-300 text-xs font-bold border border-amber-500/40 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                <span>{steps[activeStep].tag}</span>
              </div>
            </div>

            {/* Content Info */}
            <div className="space-y-6 text-left">
              <div>
                <span className="text-amber-400 font-bold text-sm tracking-widest uppercase">
                  {steps[activeStep].subtitle}
                </span>
                <h3 className="text-3xl md:text-4xl font-extrabold gold-text-shimmer mt-1">
                  {steps[activeStep].title}
                </h3>
              </div>

              <p className="text-amber-100 text-base md:text-lg leading-relaxed font-medium p-5 rounded-2xl bg-black/40 border border-amber-500/20">
                {steps[activeStep].description}
              </p>

              {/* Progress Indicator */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-amber-300 font-semibold">
                  <span>முன்னேற்றம் ({activeStep + 1} / {steps.length})</span>
                  <span>{Math.round(((activeStep + 1) / steps.length) * 100)}%</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-black/60 border border-amber-500/30 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-amber-500 to-yellow-400 transition-all duration-500"
                    style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="p-3 rounded-full dark-glass border border-amber-500/40 text-amber-300 hover:bg-amber-500/20 transition-all"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-3 rounded-full dark-glass border border-amber-500/40 text-amber-300 hover:bg-amber-500/20 transition-all"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                <button
                  onClick={() => {
                    soundEngine.playClickSound();
                    setIsPlaying(!isPlaying);
                  }}
                  className="px-5 py-2.5 rounded-full bg-amber-500/20 border border-amber-400 text-yellow-300 font-bold text-xs md:text-sm flex items-center gap-2 hover:bg-amber-500/30 transition-all"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-4 h-4" />
                      <span>நிறுத்து</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4" />
                      <span>தானாக இயக்கு</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
