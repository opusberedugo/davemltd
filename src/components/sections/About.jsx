import { useRef, useState } from "react";
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
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 12 
    } 
  },
};

export default function About() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.33 && activeIndex !== 0) {
      setActiveIndex(0);
    } else if (latest >= 0.33 && latest < 0.66 && activeIndex !== 1) {
      setActiveIndex(1);
    } else if (latest >= 0.66 && activeIndex !== 2) {
      setActiveIndex(2);
    }
  });

  const xValue = `-${activeIndex * 100}vw`;

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-navy-500">
      <div className="sticky top-0 flex h-screen flex-col justify-start overflow-hidden pt-8 pb-8">
        <div className="px-24 mb-8 flex items-center gap-8">
          <h1 className="text-white text-5xl font-semibold uppercase shrink-0"> About Us</h1>
        </div>
        
        <motion.main 
          initial={false}
          animate={{ x: xValue }}
          transition={{ type: "spring", stiffness: 200, damping: 25, mass: 0.5 }}
          className="flex w-[300vw] flex-1 min-h-0"
        >
          <div className="w-screen px-12 md:px-24 h-full overflow-y-auto pb-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <motion.div 
              className="max-w-7xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              animate={activeIndex === 0 ? "visible" : "hidden"}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
                
                {/* Left Column: Portrait Operative Photo with Floating Avatars Badge */}
                <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col h-full">
                  <div className="relative w-full aspect-[4/5] lg:aspect-auto lg:h-full rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 bg-navy-800">
                    <img
                      src="/about_davem_marine.png"
                      alt="About Davem Energy Marine Logistics"
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Floating Badge */}
                    <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-2xl border border-slate-200/50 flex items-center gap-4 max-w-[260px] z-10">
                      <div className="text-4xl font-black text-navy-600 tracking-tight shrink-0 font-display">
                        36+
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-sans font-bold text-navy-600 uppercase tracking-widest leading-none">
                          Years Of
                        </span>
                        <span className="text-slate-800 font-sans font-extrabold text-sm leading-tight mt-1">
                          Trustworthy Partnerships
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Right Column: Premium Light Card with Content */}
                <motion.div variants={itemVariants} className="lg:col-span-7 flex flex-col justify-center">
                  <div className="bg-slate-50 text-slate-800 rounded-[2rem] p-8 lg:p-10 flex flex-col justify-between shadow-2xl border border-slate-200/40 h-full">
                    <div>
                      <span className="text-navy-600 font-sans font-semibold text-xs tracking-widest uppercase mb-2 block">
                        (who we are)
                      </span>
                      
                      <h2 className="text-navy-950 font-display font-bold text-2xl md:text-3xl lg:text-4xl leading-tight">
                        Pioneering Sustainable Energy & Environmental Protection
                      </h2>
                      
                      <p className="text-slate-600 text-sm mt-4 leading-relaxed font-sans">
                        Davem Energy Resources Limited (RC 845000) is a premier indigenous Nigerian company delivering cost-effective Engineering, Marine, Procurement, and Logistics Solutions across the West African energy corridor.
                      </p>

                      <p className="text-slate-600 text-sm mt-3 leading-relaxed font-sans">
                        As former operators of the largest Oil Spill Response organization in West Africa (Clean Nigeria Associates - CNA), we have been at the forefront of environmental stewardship, waste management, and soil remediation.
                      </p>

                      <div className="mt-6">
                        <button className="px-6 py-3 bg-navy-600 hover:bg-navy-700 text-white font-sans text-sm font-semibold rounded-full transition-all duration-300 shadow-md cursor-pointer flex items-center gap-2 w-fit">
                          Read More <span className="text-base">→</span>
                        </button>
                      </div>
                    </div>

                    {/* Grid of two vertical cards at the bottom */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      <div className="bg-white rounded-2xl p-6 border border-slate-200/50 shadow-md flex flex-col items-start text-left">
                        <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4 shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <h4 className="text-slate-900 font-bold text-sm">Environmental Shield</h4>
                        <p className="text-slate-500 text-xs mt-2 leading-relaxed">Advanced oil spill control, soil remediation, and waste management facilities.</p>
                      </div>

                      <div className="bg-white rounded-2xl p-6 border border-slate-200/50 shadow-md flex flex-col items-start text-left">
                        <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4 shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                          </svg>
                        </div>
                        <h4 className="text-slate-900 font-bold text-sm">Marine & Logistics</h4>
                        <p className="text-slate-500 text-xs mt-2 leading-relaxed">Comprehensive vessel chartering, procurement, and deepwater logistics support.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

              </div>
            </motion.div>
          </div>
          
          <div className="w-screen px-24 h-full overflow-y-auto pb-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="max-w-full">
              <h2 className="text-steel-300 text-2xl font-semibold uppercase"> What we believe in?</h2>
              <h3 className="text-white text-xl font-semibold uppercase mt-4"> Our Vision</h3>
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
                variants={containerVariants}
                initial="hidden"
                animate={activeIndex === 1 ? "visible" : "hidden"}
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
          </div>
          
          <div className="w-screen px-24 h-full overflow-y-auto pb-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="max-w-full">
              <h2 className="text-steel-300 text-2xl font-semibold uppercase"> What we believe in?</h2>
              <h3 className="text-white text-xl font-semibold uppercase mt-4"> Our Mission & Values</h3>
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
                variants={containerVariants}
                initial="hidden"
                animate={activeIndex === 2 ? "visible" : "hidden"}
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
          </div>
        </motion.main>
      </div>
    </section>
  )
}