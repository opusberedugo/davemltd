import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Grid from "../layout/Grid";
import Card3 from "../ui/Card3";
import Card4 from "../ui/Card4";
import Flex from "../layout/Flex";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 15 
    } 
  },
};

const slideVariants = {
  past: {
    opacity: 0,
    y: -120,
    scale: 0.96,
    pointerEvents: "none",
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 22,
    }
  },
  active: {
    opacity: 1,
    y: 0,
    scale: 1,
    pointerEvents: "auto",
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 18,
      mass: 0.8,
    }
  },
  future: {
    opacity: 0,
    y: 120,
    scale: 1,
    pointerEvents: "none",
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 22,
    }
  }
};

export default function About() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const [isSticky, setIsSticky] = useState(true);

  // Toggle slide system behavior based on layout dimensions
  useEffect(() => {
    const handleResize = () => {
      const isTall = window.innerHeight >= 550; // Lowered threshold to ensure compatibility on normal laptops
      const isWide = window.innerWidth >= 1024;  // Desktop size
      setIsSticky(isTall && isWide);
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!isSticky) return;
    if (latest < 0.33 && activeIndex !== 0) {
      setActiveIndex(0);
    } else if (latest >= 0.33 && latest < 0.66 && activeIndex !== 1) {
      setActiveIndex(1);
    } else if (latest >= 0.66 && activeIndex !== 2) {
      setActiveIndex(2);
    }
  });

  // Dynamic layout styling
  const sectionClass = isSticky 
    ? "relative h-[300vh] bg-navy-500" 
    : "relative h-auto bg-navy-500 py-16 md:py-24";

  const stickyWrapperClass = isSticky 
    ? "sticky top-0 flex h-screen flex-col justify-start overflow-hidden pt-6 pb-6 lg:pt-8 lg:pb-8" 
    : "relative flex flex-col justify-start w-full";

  const mainClass = isSticky 
    ? "relative w-full flex-1 min-h-0" 
    : "flex flex-col w-full gap-20 md:gap-24";

  const slideClass = isSticky 
    ? "w-full px-6 md:px-12 lg:px-24 h-full overflow-y-auto pb-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]" 
    : "w-full px-6 md:px-12 lg:px-24 h-auto pb-0";

  return (
    <section ref={targetRef} className={sectionClass}>
      <div className={stickyWrapperClass}>
        <div className="px-6 md:px-12 lg:px-24 mb-6 lg:mb-8 flex items-center gap-8">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold uppercase shrink-0">
            About Us
          </h1>
        </div>
        
        <div className={mainClass}>
          {/* SLIDE 1 */}
          <motion.div 
            variants={slideVariants}
            animate={
              !isSticky 
                ? "active" 
                : activeIndex === 0 
                  ? "active" 
                  : activeIndex > 0 
                    ? "past" 
                    : "future"
            }
            className={`${slideClass} ${isSticky ? "absolute inset-0 flex flex-col" : "relative"}`}
          >
            <motion.div 
              className="max-w-7xl mx-auto w-full my-auto"
              variants={containerVariants}
              initial="hidden"
              animate={!isSticky || activeIndex === 0 ? "visible" : "hidden"}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
                
                {/* Left Column: Image */}
                <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col h-full justify-center">
                  <div className="relative w-full aspect-[4/3] sm:aspect-[4/5] lg:aspect-auto lg:h-[380px] xl:h-[460px] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 bg-navy-800">
                    <img
                      src="/about_davem_marine.png"
                      alt="About Davem Energy Marine Logistics"
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Floating Badge */}
                    <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-slate-200/50 flex items-center gap-3 max-w-[220px] z-10">
                      <div className="text-3xl font-black text-navy-600 tracking-tight shrink-0 font-display">
                        36+
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[9px] font-sans font-bold text-navy-600 uppercase tracking-widest leading-none">
                          Years Of
                        </span>
                        <span className="text-slate-800 font-sans font-extrabold text-xs leading-tight mt-1">
                          Trustworthy Partnerships
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Right Column: Content Card */}
                <motion.div variants={itemVariants} className="lg:col-span-7 flex flex-col justify-center">
                  <div className="bg-slate-50 text-slate-800 rounded-[2rem] p-5 md:p-6 lg:p-6 xl:p-8 flex flex-col justify-between shadow-2xl border border-slate-200/40 min-h-[380px] xl:min-h-[460px]">
                    <div>
                      <span className="text-navy-600 font-sans font-semibold text-xs tracking-widest uppercase mb-1 block">
                        (who we are)
                      </span>
                      
                      <h2 className="text-navy-950 font-display font-bold text-xl md:text-2xl lg:text-2xl xl:text-3xl leading-tight">
                        Pioneering Sustainable Energy & Environmental Protection
                      </h2>
                      
                      <p className="text-slate-600 text-xs mt-2 leading-relaxed font-sans">
                        Davem Energy Resources Limited (RC 845000) is a premier indigenous Nigerian company delivering cost-effective Engineering, Marine, Procurement, and Logistics Solutions across the West African energy corridor.
                      </p>

                      <p className="text-slate-600 text-xs mt-2 leading-relaxed font-sans">
                        As former operators of the largest Oil Spill Response organization in West Africa (Clean Nigeria Associates - CNA), we have been at the forefront of environmental stewardship, waste management, and soil remediation.
                      </p>

                      <div className="mt-3">
                        <button className="px-5 py-2 bg-navy-600 hover:bg-navy-700 text-white font-sans text-xs font-semibold rounded-full transition-all duration-300 shadow-md cursor-pointer flex items-center gap-2 w-fit">
                          Read More <span className="text-xs">→</span>
                        </button>
                      </div>
                    </div>

                    {/* Compact Horizontal List Sub-cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                      <div className="bg-white rounded-xl p-3 border border-slate-200/50 shadow-sm flex items-start gap-3 hover:shadow-md transition-shadow duration-300">
                        <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-slate-900 font-bold text-xs">Environmental Shield</h4>
                          <p className="text-slate-500 text-[10px] mt-0.5 leading-normal">Advanced oil spill control, remediation, and waste management.</p>
                        </div>
                      </div>

                      <div className="bg-white rounded-xl p-3 border border-slate-200/50 shadow-sm flex items-start gap-3 hover:shadow-md transition-shadow duration-300">
                        <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-slate-900 font-bold text-xs">Marine & Logistics</h4>
                          <p className="text-slate-500 text-[10px] mt-0.5 leading-normal">Vessel chartering, procurement, and deepwater logistics support.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

              </div>
            </motion.div>
          </motion.div>
          
          {/* SLIDE 2 */}
          <motion.div 
            variants={slideVariants}
            animate={
              !isSticky 
                ? "active" 
                : activeIndex === 1 
                  ? "active" 
                  : activeIndex > 1 
                    ? "past" 
                    : "future"
            }
            className={`${slideClass} ${isSticky ? "absolute inset-0 flex flex-col" : "relative"}`}
          >
            <div className="max-w-7xl mx-auto w-full my-auto">
              <span className="text-steel-300 text-xs lg:text-sm font-semibold uppercase tracking-wider">
                What we believe in?
              </span>
              <h3 className="text-white text-2xl lg:text-3xl font-bold uppercase mt-1">
                Our Vision
              </h3>
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 lg:mt-8"
                variants={containerVariants}
                initial="hidden"
                animate={!isSticky || activeIndex === 1 ? "visible" : "hidden"}
              >
                <motion.div variants={itemVariants} className="h-full flex flex-col">
                  <Card3
                    className="h-full"
                    title="Continental Leadership"
                    description="To evolve into a continental leader in our sphere of influence, setting the standard for energy resources, engineering, and logistics across West Africa."
                    imageSrc="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=600&auto=format&fit=crop"
                    imageAlt="Continental Leadership"
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="h-full flex flex-col">
                  <Card4
                    className="h-full"
                    title="Environmental Stewardship"
                    description="Protecting and restoring the Nigerian environment through eco-friendly clean-up methods, soil remediation, and advanced waste management."
                    imageSrc="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=600&auto=format&fit=crop"
                    imageAlt="Environmental Stewardship"
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="h-full flex flex-col">
                  <Card3
                    className="h-full"
                    title="Value & Quality"
                    description="Creating sustainable value and delivering high-quality, cost-effective engineering and marine logistics solutions to our upstream and downstream clients."
                    imageSrc="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600&auto=format&fit=crop"
                    imageAlt="Value & Quality"
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* SLIDE 3 */}
          <motion.div 
            variants={slideVariants}
            animate={
              !isSticky 
                ? "active" 
                : activeIndex === 2 
                  ? "active" 
                  : activeIndex > 2 
                    ? "past" 
                    : "future"
            }
            className={`${slideClass} ${isSticky ? "absolute inset-0 flex flex-col" : "relative"}`}
          >
            <div className="max-w-7xl mx-auto w-full my-auto">
              <span className="text-steel-300 text-xs lg:text-sm font-semibold uppercase tracking-wider">
                What we believe in?
              </span>
              <h3 className="text-white text-2xl lg:text-3xl font-bold uppercase mt-1">
                Our Mission & Values
              </h3>
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 lg:mt-8"
                variants={containerVariants}
                initial="hidden"
                animate={!isSticky || activeIndex === 2 ? "visible" : "hidden"}
              >
                <motion.div variants={itemVariants} className="h-full flex flex-col">
                  <Card4
                    className="h-full"
                    title="Our Mission"
                    description="To support the world by creating value and making a difference through cost-effective solutions, leveraging our 36+ years of industry experience."
                    imageSrc="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop"
                    imageAlt="Our Mission"
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="h-full flex flex-col">
                  <Card3
                    className="h-full"
                    title="Our Core Values"
                    description="Quality, Service, Innovation, Professionalism, Integrity, and Collaboration guide everything we do and define our interactions with clients."
                    imageSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop"
                    imageAlt="Our Core Values"
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="h-full flex flex-col">
                  <Card4
                    className="h-full"
                    title="Capacity & Training"
                    description="Empowering organizations with capacity building, contingency planning, manpower development, and certified training in oil spill response."
                    imageSrc="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600&auto=format&fit=crop"
                    imageAlt="Capacity & Training"
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}