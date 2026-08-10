import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ServicesProcess({ service, activeStep: externalActiveStep, setActiveStep: externalSetActiveStep }) {
  const [internalActiveStep, setInternalActiveStep] = useState(0);
  
  const activeStep = externalActiveStep !== undefined ? externalActiveStep : internalActiveStep;
  const setActiveStep = externalSetActiveStep !== undefined ? externalSetActiveStep : setInternalActiveStep;

  if (!service || !service.process) return null;

  return (
    <section id="process" className="py-24 px-6 md:px-12 lg:px-24 bg-white border-t border-slate-200/40">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-start text-left mb-12">
          <span className="text-steel-600 font-sans font-bold text-xs uppercase tracking-widest mb-2">
            How We Work
          </span>
          <h2 className="text-navy-950 font-display font-semibold text-3xl md:text-4xl lg:text-5xl leading-tight">
            Our Delivery Process
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Left Column: Interactive Timeline List */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            {service.process.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`border border-slate-200/70 rounded-3xl p-6 transition-all duration-300 cursor-pointer select-none text-left ${
                    isActive 
                      ? "bg-navy-50/50 border-navy-300/60 shadow-sm" 
                      : "bg-white hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span className={`font-mono text-sm font-bold ${
                        isActive ? "text-navy-500" : "text-slate-400"
                      }`}>
                        0{idx + 1}
                      </span>
                      <h4 className={`font-sans font-bold text-sm md:text-base ${
                        isActive ? "text-navy-900" : "text-slate-700"
                      }`}>
                        {step.title}
                      </h4>
                    </div>
                    <span className={`text-sm font-bold transition-transform duration-300 ${
                      isActive ? "text-navy-500 rotate-90" : "text-slate-400"
                    }`}>
                      →
                    </span>
                  </div>

                  {/* Collapsible expanded content */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-slate-600 text-xs md:text-sm mt-4 leading-relaxed font-sans">
                          {step.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {step.badges?.map((badge, bIdx) => (
                            <span
                              key={bIdx}
                              className="px-3 py-1 bg-navy-500 text-white font-sans font-medium text-[10px] uppercase tracking-wider rounded-full shadow-sm"
                            >
                              {badge}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Column: dynamic illustration card */}
          <div className="lg:col-span-5 flex items-stretch">
            <div className="w-full bg-steel-100/30 border border-steel-200/50 rounded-[2.5rem] p-6 shadow-sm flex items-center justify-center min-h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full relative overflow-hidden rounded-[2rem] shadow-md bg-navy-900/10 border border-steel-200/30"
                >
                  <img
                    src={service.process?.[activeStep]?.image}
                    alt={service.process?.[activeStep]?.title}
                    className="w-full h-full object-cover aspect-[4/3] lg:aspect-auto min-h-[280px]"
                  />
                  <div className="absolute inset-0 bg-navy-950/15 pointer-events-none" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
