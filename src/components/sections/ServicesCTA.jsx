import React from "react";
import ServicesContact from "./ServicesContact";

export default function ServicesCTA({ service }) {
  if (!service) return null;

  return (
    <>
      {/* Dark Glassmorphism Service Contact Form */}
      <ServicesContact service={service} />

      {/* Quote Banner (Seamlessly blended between Contact section and Footer) */}
      <section id="services-cta" className="relative py-20 bg-gradient-to-b from-navy-950 via-navy-950 to-navy-950 text-center text-white w-full overflow-hidden">
        {/* Soft Ambient Blend Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-32 bg-navy-600/15 blur-[90px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-slate-200 font-display font-medium text-xl md:text-3xl lg:text-4xl leading-relaxed tracking-tight">
            "{service.ctaText}"
          </h2>
        </div>
      </section>
    </>
  );
}
