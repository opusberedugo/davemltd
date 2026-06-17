import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

// High-fidelity Davem Logo Icon Component (graphic D-shape path from davem.svg without text)
export function DavemLogo({ className = "", isDark = false }) {
  const logoColor = isDark ? "fill-navy-600" : "fill-white";
  return (
    <div className={`flex items-center select-none ${className}`}>
      <svg 
        className="w-12 h-6" 
        viewBox="0 0 1749.42 602" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          className={`${logoColor} transition-colors duration-300`} 
          d="M1727.27,600.5h-109.54l-173.45-442.83-12.37-31.58-3.27-7.63-3.66,7.63-68.55,175.02-80.39,205.24-41.16,94.15h-101.16l-2.05-4.96-4.63-11.19-38.52-93.19-57.25-138.52-60.15-145.51-29.89-72.32-109.96,266.03-69.06,167.09-13.88,33.57h-100.14l-75.43-172.54c-12.29,26.48-28.33,50.88-47.44,72.5-49,55.45-118.18,92.64-196.04,100.04H.5V124.5h.07c-.05-1.39-.07-2.78-.07-4.17C.5,54.45,45.28,1.05,100.5,1.05v500.45h176.47c7.72.91,15.57,1.38,23.53,1.38s15.81-.47,23.53-1.38c99.36-11.65,176.47-96.21,176.47-198.81,0-20.83-3.18-40.92-9.08-59.81-4.37-13.98-10.23-27.3-17.39-39.78l-.03-.05c-34.52-60.08-99.29-100.54-173.5-100.54v218.45s-.16,1.88-.21,2.82c-1.83,43.21-45.87,77.78-99.79,77.78V.5h99.86c44.16,1.15,86.09,10.97,123.85,28.38,14.86,6.86,29.07,14.89,42.52,23.97,20.72,13.97,39.62,30.42,56.26,48.85,17.68,19.57,32.81,41.47,44.88,65.2l15.01,34.8,118.26,274.21,29.94-76.44,100-255.3,17.11-43.67L886.64,2.33l.33-.83h108.86l.33.83,37.92,96.81,135.12,344.95,12.28,31.36,179.49-434.24,17.8-40.71h99.16l7.62,17.44,16.82,38.48,22.5,54.42,202.4,489.66Z"
        />
      </svg>
    </div>
  );
}

export default function ServicesNavPill() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Invert colors/styles when scrolled past 80px
    if (latest > 80) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const containerClasses = isScrolled 
    ? "px-6 py-2.5 border border-steel-200/50 rounded-full flex items-center gap-6 bg-white/95 backdrop-blur-md text-navy-900 shadow-lg transition-all duration-300"
    : "px-6 py-2.5 border border-white/10 rounded-full flex items-center gap-6 bg-navy-900/40 backdrop-blur-md text-white shadow-lg transition-all duration-300";

  const linkClasses = isScrolled
    ? "px-2 py-1.5 hover:text-navy-600 transition-colors duration-300 font-sans text-xs font-semibold"
    : "px-2 py-1.5 hover:text-steel-300 transition-colors duration-300 font-sans text-xs font-semibold";

  return (
    <AnimatePresence>
      <motion.nav 
        initial={{ opacity: 0, y: -50, x: "-50%" }}
        animate={{ opacity: 1, y: 0, x: "-50%" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-6 left-1/2 z-50 flex justify-center pointer-events-none"
      >
        <div className={`${containerClasses} pointer-events-auto`}>
          {/* Davem Logo icon */}
          <Link to="/" className="flex items-center shrink-0 pr-1 border-r border-slate-200/10">
            <DavemLogo isDark={isScrolled} />
          </Link>

          {/* Links */}
          <div className="flex items-center gap-4">
            <Link to="/" className={linkClasses}>
              Home
            </Link>
            
            <a href="#related" className={linkClasses}>
              Services
            </a>

            <a href="mailto:info@davemenergy.com" className={linkClasses}>
              Contact
            </a>
          </div>

          {/* Separator & CTA Button */}
          <div className="flex items-center gap-3 pl-1 border-l border-slate-200/10">
            <a 
              href="mailto:info@davemenergy.com"
              className={`px-4 py-1.5 font-sans text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm hover:shadow-md transition-all ${
                isScrolled 
                  ? "bg-navy-500 text-white hover:bg-navy-600" 
                  : "bg-white text-navy-900 hover:bg-steel-100"
              }`}
            >
              Get in Touch
            </a>
          </div>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
}
