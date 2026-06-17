import React from "react";
import { ArrowRight } from "lucide-react";

export default function ServicesSplitCard({ service }) {
  if (!service) return null;

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-steel-50 border-t border-slate-200/40">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Card: White Summary Card */}
          <div className="bg-white border border-slate-200/60 rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-between shadow-sm relative overflow-hidden text-left">
            <div>
              <span className="text-steel-600 font-sans font-bold text-xs uppercase tracking-widest mb-2 block">
                Davem Integrated Systems
              </span>
              
              <h3 className="text-navy-900 font-display font-semibold text-2xl md:text-3xl lg:text-4xl mt-2 leading-tight">
                Safe operations at site scale.
              </h3>
              
              <p className="text-slate-600 text-sm mt-6 leading-relaxed font-sans max-w-xl">
                Deploying high-efficiency, multi-discipline engineering methods and logistics networks designed for long-term safety, asset protection, and high-yield operational performance.
              </p>
            </div>

            <div className="mt-12">
              <a 
                href="mailto:info@davemenergy.com"
                className="inline-flex items-center gap-2 text-navy-500 hover:text-navy-700 font-sans font-bold text-sm transition-colors cursor-pointer group"
              >
                Discuss the Project <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Card: Dark Navy Specs Grid */}
          <div className="bg-navy-900 text-white rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-between shadow-lg relative overflow-hidden text-left">
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/5 -translate-x-1/3 translate-y-1/3 pointer-events-none" />
            
            <div>
              <span className="text-steel-300 font-sans font-bold text-xs uppercase tracking-widest mb-4 block">
                Capacity & Metrics
              </span>
              
              {/* 2-column specifications listing */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mt-6">
                {service.specs?.map((spec, idx) => (
                  <div key={idx} className="border-b border-white/10 pb-3 flex flex-col justify-between gap-1">
                    <span className="text-slate-400 font-sans text-[11px] font-medium uppercase tracking-wider">{spec.label}</span>
                    <span className="text-white font-sans font-bold text-sm">{spec.value}</span>
                  </div>
                ))}
                
                {service.stats.metrics.slice(0, 2).map((metric, idx) => (
                  <div key={idx} className="border-b border-white/10 pb-3 flex flex-col justify-between gap-1">
                    <span className="text-slate-400 font-sans text-[11px] font-medium uppercase tracking-wider">{metric.label}</span>
                    <span className="text-white font-sans font-bold text-sm">{metric.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 text-slate-400 text-xs font-sans">
              * Operational records audited in accordance with EGASPIN standard procedures.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
