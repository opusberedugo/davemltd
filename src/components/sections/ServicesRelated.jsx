import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ServicesRelated({ relatedServices, handleRelatedClick, onBack }) {
  if (!relatedServices || relatedServices.length === 0) return null;

  return (
    <section id="related" className="py-24 px-6 md:px-12 lg:px-24 bg-steel-50 border-t border-slate-200/40">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 text-left">
          <div>
            <div className="flex items-center gap-2 text-slate-500 font-sans font-bold text-xs tracking-widest uppercase mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
              <span>Capabilities</span>
            </div>
            <h2 className="text-navy-950 font-display font-semibold text-3xl md:text-4xl lg:text-5xl leading-tight">
              Related Services
            </h2>
          </div>
          
          <button
            onClick={onBack}
            className="mt-4 md:mt-0 px-5 py-2.5 border border-steel-200 hover:border-navy-500 hover:text-navy-500 text-slate-600 font-sans text-xs font-semibold rounded-full transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
          >
            All Services <ArrowRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedServices.map((relatedService) => (
            <motion.div
              key={relatedService.id}
              whileHover={{ y: -8, shadow: "0 20px 25px -5px rgba(0,0,0,0.05)" }}
              transition={{ duration: 0.3 }}
              onClick={() => handleRelatedClick(relatedService.id)}
              className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200/55 shadow-sm flex flex-col group cursor-pointer text-left"
            >
              {/* Card Image */}
              <div className="h-48 overflow-hidden relative bg-slate-100 shrink-0">
                <img
                  src={relatedService.image}
                  alt={relatedService.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy-950/10 group-hover:bg-navy-950/5 transition-colors" />
              </div>
              
              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-lg font-sans font-bold text-navy-950 group-hover:text-navy-600 transition-colors line-clamp-1 mb-2">
                    {relatedService.shortTitle}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed font-sans line-clamp-3">
                    {relatedService.description}
                  </p>
                </div>
                
                <div className="mt-6 flex items-center gap-1.5 text-xs font-sans font-bold text-navy-500 group-hover:text-navy-700 transition-colors">
                  Explore Details <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
