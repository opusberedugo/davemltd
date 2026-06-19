import React from "react";
import { ArrowRight } from "lucide-react";

export default function ServicesCTA({ service }) {
  if (!service) return null;

  return (
    <section id="services-cta" className="relative py-28 bg-navy-950 overflow-hidden text-center text-white w-full">
      {/* Simplified abstract coordinates map background */}
      <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" viewBox="0 0 1000 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 50 0 L 50 500 M 150 0 L 150 500 M 250 0 L 250 500 M 350 0 L 350 500 M 450 0 L 450 500 M 550 0 L 550 500 M 650 0 L 650 500 M 750 0 L 750 500 M 850 0 L 850 500 M 950 0 L 950 500" stroke="white" strokeWidth="0.5" strokeDasharray="5 5" />
        <path d="M 0 50 L 1000 50 M 0 150 L 1000 150 M 0 250 L 1000 250 M 0 350 L 1000 350 M 0 450 L 1000 450" stroke="white" strokeWidth="0.5" strokeDasharray="5 5" />
        {/* Abstract land shapes representing dynamic operations */}
        <path d="M150,150 Q220,130 300,180 T400,150 T500,200 T420,300 T280,350 Z M600,100 Q700,120 800,80 T900,150 T850,300 T700,350 T620,250 Z M200,380 Q250,420 300,450 T380,410 Z" fill="white" fillOpacity="0.08" />
      </svg>

      {/* Pulsing Map Pins for Operations */}
      <div className="absolute top-[32%] left-[24%] z-10 flex items-center justify-center">
        <span className="w-3.5 h-3.5 bg-steel-400/50 rounded-full animate-ping absolute" />
        <span className="w-2 h-2 bg-steel-300 rounded-full" />
      </div>
      <div className="absolute top-[48%] left-[47%] z-10 flex items-center justify-center">
        <span className="w-5 h-5 bg-steel-400/60 rounded-full animate-ping absolute" />
        <span className="w-3 h-3 bg-white rounded-full shadow-lg" />
      </div>
      <div className="absolute top-[65%] left-[72%] z-10 flex items-center justify-center">
        <span className="w-3.5 h-3.5 bg-steel-400/50 rounded-full animate-ping absolute" />
        <span className="w-2 h-2 bg-steel-300 rounded-full" />
      </div>
      <div className="absolute top-[38%] left-[84%] z-10 flex items-center justify-center">
        <span className="w-3.5 h-3.5 bg-steel-400/50 rounded-full animate-ping absolute" />
        <span className="w-2 h-2 bg-steel-300 rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <h2 className="text-white font-display font-medium text-2xl md:text-3xl lg:text-4xl leading-relaxed tracking-tight">
          "{service.ctaText}"
        </h2>

        <div className="mt-10 flex justify-center">
          <a
            href="mailto:info@davemenergy.com"
            className="px-8 py-4 bg-white hover:bg-steel-100 text-navy-950 text-base font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
          >
            Discuss the Project <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
