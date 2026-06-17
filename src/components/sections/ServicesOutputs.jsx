import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function ServicesOutputs({ service, openAccordion: externalOpenAccordion, toggleAccordion: externalToggleAccordion }) {
  const [internalOpenAccordion, setInternalOpenAccordion] = useState(0);
  
  const openAccordion = externalOpenAccordion !== undefined ? externalOpenAccordion : internalOpenAccordion;
  
  const toggleAccordion = (index) => {
    if (externalToggleAccordion) {
      externalToggleAccordion(index);
    } else {
      setInternalOpenAccordion(internalOpenAccordion === index ? null : index);
    }
  };

  if (!service || !service.outputs) return null;

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-white border-t border-slate-200/40">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left side: Tall image card */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 flex flex-col items-start text-left">
            <div className="flex items-center gap-2 text-slate-500 font-sans font-bold text-xs tracking-widest uppercase mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
              <span>What You Receive</span>
            </div>
            
            <h2 className="text-navy-950 font-display font-semibold text-3xl md:text-4xl lg:text-5xl leading-tight">
              Tangible Outputs
            </h2>
            
            <p className="text-slate-500 text-sm mt-3 leading-relaxed font-sans max-w-sm mb-8">
              Every engagement produces a baseline set of deliverables. Here is what you receive.
            </p>

            {/* Narrow vertical image */}
            <div className="w-full aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] rounded-3xl overflow-hidden shadow-lg border border-steel-200/30">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop"
                alt="Deliverables Report Meeting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right side: Accordion of deliverables */}
          <div className="lg:col-span-8 flex flex-col space-y-4">
            {service.outputs.map((output, idx) => {
              const isOpen = openAccordion === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200/60 rounded-2xl shadow-sm overflow-hidden transition-all duration-300"
                >
                  {/* Header bar */}
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left select-none cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-mono transition-colors ${
                        isOpen ? "bg-navy-100 text-navy-950" : "bg-slate-100 text-slate-500"
                      }`}>
                        0{idx + 1}
                      </span>
                      <span className={`font-sans font-semibold text-sm md:text-base transition-colors ${
                        isOpen ? "text-navy-600 font-bold" : "text-slate-800"
                      }`}>
                        {output.title}
                      </span>
                    </div>
                    
                    <div className="text-slate-400 shrink-0">
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </button>

                  {/* Collapsible Panel */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pt-1 border-t border-slate-100 text-slate-600 text-xs md:text-sm leading-relaxed font-sans max-w-3xl">
                          {output.description}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
