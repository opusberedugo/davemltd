import React from "react";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export default function ServicesStats({ service }) {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left side: Straight/Square Image Container that spans from the top label to the bottom */}
          <div className="lg:col-span-5 flex min-h-[380px] lg:min-h-full">
            <div className="relative w-full h-full overflow-hidden rounded-3xl shadow-lg border border-slate-100 bg-slate-50 group">
              <img
                src={service.stats.image}
                alt="Performance Stats Graphics"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Float mask design */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent pointer-events-none" />
              
              {/* Little Icon Overlay */}
              <div className="absolute bottom-6 left-6 bg-navy-900/90 backdrop-blur-md text-white p-3.5 rounded-2xl shadow-xl flex items-center justify-center">
                <Zap size={20} className="text-steel-300 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Right side: Header & metrics grid */}
          <div className="lg:col-span-7 flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center gap-2 text-navy-500 font-sans font-bold text-xs tracking-widest uppercase mb-3">
                <span className="w-2 h-2 rounded-full bg-navy-500" />
                <span>Performance data by the numbers.</span>
              </div>
              
              <h2 className="text-navy-950 font-display font-semibold text-2xl md:text-3xl lg:text-4xl leading-tight">
                {service.stats.heading}
              </h2>
            </div>

            {/* Grid of Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {service.stats.metrics.map((metric, index) => {
                if (metric.highlight) {
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ y: -4, shadow: "0 10px 20px rgba(0,0,0,0.05)" }}
                      className="bg-navy-100 text-navy-950 rounded-3xl p-6 flex flex-col justify-between border border-navy-200 shadow-sm relative overflow-hidden group min-h-[160px]"
                    >
                      <div className="absolute right-0 top-0 translate-x-1/4 -translate-y-1/4 w-24 h-24 rounded-full bg-navy-200/30 group-hover:scale-125 transition-transform duration-500" />
                      <span className="text-xs font-sans font-semibold text-navy-900 leading-snug max-w-[80%] uppercase tracking-wider">
                        {metric.label}
                      </span>
                      <span className="text-4xl md:text-5xl font-sans font-bold text-navy-950 tracking-tight mt-4 block">
                        {metric.value}
                      </span>
                    </motion.div>
                  );
                }

                return (
                  <div
                    key={index}
                    className="bg-slate-50 border border-slate-200/50 rounded-3xl p-6 flex flex-col justify-between min-h-[160px] hover:bg-slate-100/50 transition-colors"
                  >
                    <span className="text-xs font-sans font-semibold text-slate-500 uppercase tracking-wider">
                      {metric.label}
                    </span>
                    <span className="text-4xl md:text-5xl font-sans font-bold text-navy-900 tracking-tight mt-4 block">
                      {metric.value}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
