import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useCalendly } from '../../context/CalendlyContext';

const logoPath = "M-0 2848.7c0,0 0,-1564.64 0,-2374.78 0,-125.7 49.93,-246.23 138.8,-335.12 88.89,-88.89 209.44,-138.8 335.12,-138.8 0.02,0 0.02,0 0.02,0l0 1358.94c-2.52,27.89 -3.82,56.13 -3.82,84.63 0,28.52 1.3,56.75 3.82,84.62l0 859.69 941.54 0 0 -0.13c5.2,0.07 10.43,0.13 15.65,0.13 8.98,0 17.93,-0.13 26.85,-0.37 377.17,-10.18 700.34,-234.34 848.17,-553.25 55.21,-119.07 85.99,-251.38 85.99,-390.69 0,-110.4 -19.32,-216.44 -54.84,-314.96 -13.44,-37.26 -29.19,-73.46 -47.07,-108.41 -111.09,-217.03 -304.88,-386.29 -540.59,-467.75 -91.65,-31.66 -189.69,-50.06 -291.66,-52.8 -8.92,-0.25 -17.87,-0.37 -26.85,-0.37 -5.22,0 -10.45,0.03 -15.65,0.12 0,0 0,583.93 0,1000.6 0,108.96 -43.29,213.44 -120.33,290.48 -77.04,77.05 -181.53,120.33 -290.48,120.33 -41.6,0 -68.92,0 -68.92,0l0 -1910.81 439.21 0c13.54,0 27.06,0.17 40.52,0.54 153.79,4.15 301.64,31.91 439.93,79.69 355.55,122.83 647.82,378.14 815.39,705.51l635.49 1463.7 885.93 -2249.44 516.89 0 890.13 2278.09 897.22 -2278.09 498.34 0 1193.13 2848.7 -514.99 0 -925.2 -2283.86 -899.47 2283.86 -494.82 0 -917.96 -2266.05 -892.49 2266.05 -485.62 0 -362.54 -835.06c-223.03,481.02 -710.47,819.14 -1279.36,834.52 -13.46,0.34 -26.98,0.54 -40.52,0.54l-1374.96 0z";

const paths = [logoPath];

export default function Hero({ onAnimationComplete }) {
  const { openCalendly } = useCalendly();
  const [animationPhase, setAnimationPhase] = useState('hidden');
  const [showText, setShowText] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let isCancelled = false;

    const sequence = async () => {
      // 1. Start hidden
      await new Promise(r => setTimeout(r, 100));
      if (isCancelled) return;
      
      // 2. Scale up and center container
      setAnimationPhase('center');
      controls.start('visible'); // Start SVG path drawing

      // Wait specifically for the drawing to fully finish (5.5s total duration)
      await new Promise(r => setTimeout(r, 5500));
      if (isCancelled) return;
      
      // 4. Scale down and shift to the left
      setAnimationPhase('topLeft');

      // Wait for the scaling and shifting transition to fully finish (1.2s duration)
      await new Promise(r => setTimeout(r, 1200));
      if (isCancelled) return;

      // 5. Show leading text
      setShowText(true);
      if (onAnimationComplete) {
        onAnimationComplete();
      }
    };
    
    sequence();

    return () => {
      isCancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [controls]);

  // GPU-Accelerated Framer Motion variants (Responsive sizing)
  const containerVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.5, 
      width: isMobile ? "300px" : "600px",
      maxWidth: "90vw"
    },
    center: {
      opacity: 1,
      scale: 1,
      width: isMobile ? "300px" : "600px",
      maxWidth: "90vw",
      transition: { duration: 0.8, ease: "backOut" }
    },
    topLeft: {
      opacity: 1,
      scale: 1,
      width: isMobile ? "150px" : "300px",
      maxWidth: "90vw",
      transition: { duration: 1.2, ease: [0.65, 0, 0.35, 1] }
    }
  };

  // Framer motion variants for the paths
  const pathVariants = {
    hidden: (i) => ({
      pathLength: 0,
      fill: "rgba(31, 69, 110, 0)",
      stroke: "#1F456E"
    }),
    visible: (i) => ({
      pathLength: 1,
      fill: "rgba(31, 69, 110, 1)",
      transition: {
        pathLength: { duration: 3.0, ease: [0.47, 0, 0.745, 0.715], delay: i * 0.15 },
        fill: { duration: 1.0, ease: [0.47, 0, 0.745, 0.715], delay: 2.0 + i * 0.15 }
      }
    })
  };

  return (
    <section className="relative min-h-[640px] md:h-screen w-full font-sans overflow-hidden bg-white">
      {/* Wrapper that dynamically shifts alignment, allowing Framer Motion's 'layout' to interpolate perfectly */}
      <div className={`absolute inset-0 pointer-events-none flex ${
        animationPhase === 'topLeft' 
          ? 'items-start justify-start pt-28 pl-6 md:pt-[80px] md:pl-[80px]' 
          : 'items-center justify-center'
      }`}>
        <motion.div 
          layout
          className="relative pointer-events-none"
          variants={containerVariants}
          initial="hidden"
          animate={animationPhase}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 8262.72 4956.33" 
            preserveAspectRatio="xMidYMid meet"
            className="w-full h-auto drop-shadow-2xl"
          >
            <defs>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="35" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {paths.map((d, index) => (
              <motion.path
                key={index}
                d={d}
                custom={index}
                variants={pathVariants}
                initial="hidden"
                animate={controls}
                strokeWidth="10"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            ))}

            {/* Glowing Tracer Dot drawing along the logo path - fully synced and scaled */}
            {animationPhase !== 'hidden' && (
              <circle r="35" fill="#1F456E" filter="url(#glow)">
                <animateMotion 
                  dur="3.0s" 
                  repeatCount="1" 
                  fill="freeze"
                  calcMode="spline" 
                  keyTimes="0;1" 
                  keySplines="0.47 0 0.745 0.715"
                  path={paths[0]} 
                />
                <animate 
                  attributeName="opacity" 
                  values="1;1;0" 
                  keyTimes="0;0.95;1" 
                  dur="3.2s" 
                  fill="freeze" 
                />
              </circle>
            )}

            {/* Sub-text tags that fade in below the logo icon */}
            {showText && (
              <g>
                <motion.text
                  x="-88.16"
                  y="3975.62"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.0, delay: 0.2 }}
                  style={{
                    fontFamily: "'Google Sans', 'Inter', sans-serif",
                    fontWeight: "bold",
                    fontSize: "1088.63px",
                    fill: "#94ACC3"
                  }}
                >
                  DAVEM ENERGY
                </motion.text>
                <motion.text
                  x="-84.98"
                  y="4939.33"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.0, delay: 0.5 }}
                  style={{
                    fontFamily: "'Google Sans Medium', 'Inter', sans-serif",
                    fontWeight: "500",
                    fontSize: "1062.36px",
                    fill: "#94ACC3"
                  }}
                >
                  RESOURCES LTD.
                </motion.text>
              </g>
            )}
          </svg>
        </motion.div>
      </div>

      {/* Hero Paragraph - Slides up below the logo after logo reaches its position */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={showText ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-[235px] md:top-[300px] left-6 md:left-[80px] w-[calc(100%-3rem)] md:w-full md:max-w-3xl text-left"
      >
        <p className="text-base md:text-lg font-sans leading-relaxed text-balance text-black">
          Davem Energy Resources Limited delivers cost-effective Engineering, Marine, Procurement, and Logistics Solutions. Established in 2009, the company brings a rich heritage in oil spill response, soil remediation, and environmental protection.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mt-8">
          <motion.a
            href="#services"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={showText ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 1.0 }}
            className="px-6 py-3 md:px-8 md:py-4 text-sm md:text-base text-white border-navy-600 border-2 bg-navy-600 rounded-full font-semibold transition-all shadow-lg hover:bg-navy-700 hover:border-navy-700 hover:text-white cursor-pointer inline-flex items-center justify-center text-decoration-none"
          >
            Learn More
          </motion.a>
         
          <motion.button
            onClick={() => openCalendly()}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={showText ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 1.0 }}
            className="px-6 py-3 md:px-8 md:py-4 text-sm md:text-base text-steel-500 border-steel-500 border-2 rounded-full font-semibold transition-all shadow-lg hover:bg-steel-500 hover:text-white cursor-pointer"
          >
            Book Call / Get Quote
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}