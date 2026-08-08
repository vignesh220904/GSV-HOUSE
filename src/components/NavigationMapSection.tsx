"use client";

import React from "react";
import Image from "next/image";
import { soundEngine } from "@/utils/audioEngine";
import { MapPin, Navigation, QrCode, ExternalLink } from "lucide-react";

export const NavigationMapSection: React.FC = () => {
  const mapUrl = "https://maps.app.goo.gl/t9DPuE2nxFmh3Z15A?g_st=ac";

  return (
    <section id="map" className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-[#0B0912] via-[#140C1A] to-[#0B0912]">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full maroon-glass text-amber-300 border border-amber-500/40 mb-3">
            <MapPin className="w-4 h-4 text-red-400" />
            <span className="text-sm font-semibold">இருப்பிட வழிகாட்டி</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold gold-text-shimmer mb-3">
            📍 வழிகாட்டுதல்
          </h2>
          <p className="text-amber-200/80 text-base md:text-lg max-w-xl mx-auto">
            G.S.V. இல்லத்திற்கு எளிதாக வந்து சேர கூகுள் மேப்ஸ் வழிகாட்டி
          </p>
        </div>

        {/* Map & QR Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Address & QR Code Column */}
          <div className="dark-glass rounded-3xl p-6 md:p-8 border-2 border-amber-500/40 shadow-2xl flex flex-col justify-between space-y-6 gold-card-shine">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-red-500/20 border border-red-400 flex items-center justify-center text-red-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-yellow-300">
                    G.S.V. இல்லம்
                  </h3>
                  <p className="text-xs text-amber-300 font-semibold">புதுமனை புகுவிழா</p>
                </div>
              </div>

              <div className="space-y-2 text-amber-100 font-medium text-base p-4 rounded-2xl bg-black/40 border border-amber-500/20">
                <p className="font-bold text-yellow-300 text-lg">விநாயகர் கோவில் தெரு</p>
                <p>பழையபாளையம்</p>
                <p>சீர்காழி தாலுக்கா</p>
                <p className="text-amber-400 font-bold">மயிலாடுதுறை மாவட்டம்</p>
              </div>
            </div>

            {/* Styled Gold QR Code Box */}
            <div className="text-center p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30">
              <div className="flex items-center justify-center gap-2 text-amber-300 font-bold text-xs mb-3">
                <QrCode className="w-4 h-4 text-yellow-400" />
                <span>ஸ்கேன் செய்து வழியை அறியவும்</span>
              </div>
              <div className="relative w-36 h-36 mx-auto rounded-xl overflow-hidden border-2 border-amber-400 shadow-lg">
                <Image
                  src="/images/gsv_qr_code.png"
                  alt="Google Maps QR Code"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Main Navigation Button */}
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundEngine.playClickSound()}
              className="w-full py-4 rounded-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-amber-950 font-extrabold text-lg md:text-xl shadow-[0_0_25px_rgba(255,215,0,0.5)] border-2 border-yellow-200 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Navigation className="w-6 h-6 text-amber-950 animate-bounce" />
              <span>வழிகாட்டுதலை தொடங்கு</span>
              <ExternalLink className="w-5 h-5 text-amber-950" />
            </a>
          </div>

          {/* Interactive Google Map Embed Frame */}
          <div className="lg:col-span-2 rounded-3xl overflow-hidden border-2 border-amber-500/40 shadow-2xl min-h-[400px] relative">
            <iframe
              title="G.S.V. இல்லம் Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.502787834544!2d79.7345!3d11.2378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5518b012345679%3A0x123456789abcdef!2sPazhayapalayam%2C%20Sirkali!5e0!3m2!1sta!2sin!4v1700000000000!5m2!1sta!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "420px" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter saturate-[1.2] brightness-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
