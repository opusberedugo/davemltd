import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ServicesHero({ service }) {
  return (
    <section id="services-hero" className="relative pt-32 lg:pt-40 min-h-[80vh] lg:min-h-[90vh] flex items-center bg-navy-950 overflow-hidden">
      {/* Full-width image background with linear-radial mask overlay */}
      <div className="absolute inset-0">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-transparent lg:bg-gradient-to-r lg:from-navy-950/90 lg:to-navy-950/20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left: Copy & CTA */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <span className="text-steel-300 font-sans font-bold text-xs uppercase tracking-widest bg-navy-900/40 border border-steel-500/20 px-4 py-1.5 rounded-full mb-6">
            Services / {service.shortTitle}
          </span>
          
          <h1 className="text-white font-display font-semibold text-3xl md:text-5xl lg:text-6xl leading-tight tracking-tight">
            {service.title}
          </h1>
          
          <p className="text-white/80 text-base md:text-lg mt-6 leading-relaxed font-sans max-w-2xl">
            {service.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a 
              href="mailto:info@davemenergy.com"
              className="px-8 py-3.5 border-2 border-white text-white hover:bg-white hover:text-navy-950 rounded-full font-sans font-bold transition-all shadow-lg active:scale-95 flex items-center gap-2 cursor-pointer text-sm"
            >
              Discuss the Project <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Right: Floating Specifications Card */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full max-w-md bg-navy-900/40 backdrop-blur-md border border-white/10 rounded-3xl p-6 shadow-2xl text-left text-white"
          >
            <span className="text-slate-300 font-sans text-[11px] font-bold tracking-wider uppercase mb-1 block">
              Service Overview
            </span>
            
            <h4 className="text-white font-display font-bold text-xl md:text-2xl mt-1 leading-snug">
              {service.tagline}
            </h4>

            {/* Dashed Spec Grid */}
            <div className="border border-dashed border-white/25 rounded-2xl p-4 mt-5 space-y-4 bg-black/10">
              <span className="text-steel-300 font-sans font-bold text-[10px] uppercase tracking-widest mb-1 block">
                Specifications
              </span>
              {service.specs?.map((spec, idx) => (
                <div key={idx} className="flex justify-between items-center gap-4 text-xs border-b border-white/5 pb-2.5 last:border-0 last:pb-0">
                  <span className="text-slate-300 font-sans font-medium">{spec.label}</span>
                  <span className="text-white font-sans font-bold text-right">{spec.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
