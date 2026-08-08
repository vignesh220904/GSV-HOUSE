import type { Metadata } from "next";
import { Noto_Sans_Tamil, Mukta_Malar } from "next/font/google";
import "./globals.css";

const notoTamil = Noto_Sans_Tamil({
  variable: "--font-noto-tamil",
  subsets: ["tamil"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const muktaMalar = Mukta_Malar({
  variable: "--font-mukta-malar",
  subsets: ["tamil"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "G.S.V. இல்லம் - புதுமனை புகுவிழா அழைப்பிதழ் | 23 ஆகஸ்ட் 2026",
  description: "ஸ்ரீ அங்காளம்மன் துணையுடன் நடைபெறும் G.S.V. இல்ல புதுமனை புகுவிழாவிற்கு அன்புடன் அழைக்கின்றோம். நாள்: 23.08.2026, இடம்: பழையபாளையம், சீர்காழி தாலுக்கா, மயிலாடுதுறை மாவட்டம்.",
  keywords: ["GSV இல்லம்", "புதுமனை புகுவிழா", "அழைப்பிதழ்", "பழையபாளையம்", "சீர்காழி", "மயிலாடுதுறை"],
  openGraph: {
    title: "G.S.V. இல்லம் - புதுமனை புகுவிழா அழைப்பிதழ்",
    description: "23 ஆகஸ்ட் 2026 அதிகாலை 3.00 மணி முதல் 4.30 மணி வரை நடைபெறும் எங்களது புதுமனை புகுவிழாவிற்கு வருகை தந்து ஆசீர்வதிக்குமாறு கேட்டுக்கொள்கிறோம்.",
    images: ["/images/gsv_hero_bg.png"],
    locale: "ta_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ta" className={`${notoTamil.variable} ${muktaMalar.variable} scroll-smooth dark`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#2A080C" />
      </head>
      <body className="font-sans bg-[#0B0912] text-amber-50 selection:bg-amber-500 selection:text-black min-h-screen overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}

