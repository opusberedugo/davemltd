import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

export default function Navpill({ isVisible = true }) {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Invert colors when scrolling past the Hero section (100vh)
    // Subtracting 80px to trigger right as the navpill touches the new section
    if (latest > window.innerHeight - 80) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const containerClasses = isScrolled 
    ? "w-fit px-4 py-2 border-white border-2 rounded-full overflow-hidden flex bg-white text-navy-500 font-medium shadow-lg transition-colors duration-300"
    : "w-fit px-4 py-2 border-navy-500 border-2 rounded-full overflow-hidden flex bg-navy-500 text-white font-medium shadow-lg transition-colors duration-300";

  const linkClasses = isScrolled
    ? "px-4 py-2 hover:text-navy-800 transition-colors duration-300"
    : "px-4 py-2 hover:text-steel-500 transition-colors duration-300";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-around p-4 sticky top-0 z-10 "
        >
          <div className={containerClasses}>
            <a className={linkClasses} href="#">About</a>
            <a className={linkClasses} href="#">Services</a>
            <a className={linkClasses} href="#">Projects</a>
            <a className={linkClasses} href="#">Contact</a>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}