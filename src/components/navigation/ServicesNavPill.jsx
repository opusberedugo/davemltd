import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Link } from "react-router-dom";

// Custom path-animating hamburger menu icon that morphs into a close (X) icon
function HamburgerIcon({ isOpen, isScrolled }) {
  const strokeColor = isScrolled ? "#1F456E" : "#FFFFFF"; // navy-500 or white

  const lineVariants = {
    top: {
      closed: { rotate: 0, y: 0 },
      open: { rotate: 45, y: 6 }
    },
    middle: {
      closed: { opacity: 1 },
      open: { opacity: 0 }
    },
    bottom: {
      closed: { rotate: 0, y: 0 },
      open: { rotate: -45, y: -6 }
    }
  };

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" className="cursor-pointer">
      <motion.path
        stroke={strokeColor}
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ d: "M 4 6 L 20 6" }}
        animate={{ d: isOpen ? "M 5 5 L 19 19" : "M 4 6 L 20 6" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      <motion.path
        stroke={strokeColor}
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ opacity: 1, d: "M 4 12 L 20 12" }}
        animate={{ 
          opacity: isOpen ? 0 : 1,
          d: "M 4 12 L 20 12"
        }}
        transition={{ duration: 0.2 }}
      />
      <motion.path
        stroke={strokeColor}
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ d: "M 4 18 L 20 18" }}
        animate={{ d: isOpen ? "M 5 19 L 19 5" : "M 4 18 L 20 18" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </svg>
  );
}

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
  const [navTheme, setNavTheme] = useState("transparent"); // "transparent" | "blue" | "white"
  
  // Dynamic Scroll Direction & Hide
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const lastScrollY = useRef(0);

  // Mobile Menu state coordination for sequential animation flow
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isIconOpen, setIsIconOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect if mobile layout (tailwinds lg is 1024px)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update theme based on scroll position dynamically
  const updateNavTheme = (latestScrollY) => {
    const heroEl = document.getElementById("services-hero");
    const ctaEl = document.getElementById("services-cta");

    const heroHeight = heroEl ? heroEl.offsetHeight : window.innerHeight * 0.8;
    const ctaOffset = ctaEl ? ctaEl.offsetTop : document.body.offsetHeight;

    if (latestScrollY < heroHeight - 80) {
      setNavTheme("transparent");
    } else if (latestScrollY + 80 >= ctaOffset) {
      setNavTheme("white");
    } else {
      setNavTheme("blue");
    }
  };

  useEffect(() => {
    const handleInitialTheme = () => {
      updateNavTheme(window.scrollY);
    };
    handleInitialTheme();
    window.addEventListener("resize", handleInitialTheme);
    return () => window.removeEventListener("resize", handleInitialTheme);
  }, []);

  // Sequential closing flow: Hide text -> unmount & shrink container -> morph icon back
  const closeMenu = () => {
    setIsTextVisible(false);
    
    setTimeout(() => {
      setIsMounted(false);
      setIsMenuExpanded(false);
      
      setTimeout(() => {
        setIsIconOpen(false);
      }, 300);
    }, 100);
  };

  // Opening flow: morph icon, expand container, mount and reveal text
  const openMenu = () => {
    setIsMounted(true);
    setIsIconOpen(true);
    setIsMenuExpanded(true);
    setIsTextVisible(true);
  };

  const handleToggle = () => {
    if (isMenuExpanded) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    updateNavTheme(latest);

    // Hide-on-scroll logic for mobile
    const currentScrollY = latest;
    if (currentScrollY > lastScrollY.current && currentScrollY > 120) {
      setIsScrollingDown(true);
      if (isMenuExpanded) {
        closeMenu(); // Auto-collapse mobile menu on scroll down
      }
    } else if (currentScrollY < lastScrollY.current) {
      setIsScrollingDown(false);
    }
    lastScrollY.current = currentScrollY;
  });

  // Dynamic theme configurations
  let containerClasses = "";
  let linkClasses = "";
  let mobileContainerClasses = "";
  let mobileLinkClasses = "";
  let isDarkLogo = false;
  let isScrolledIcon = false;
  let ctaButtonClasses = "";

  if (navTheme === "transparent") {
    containerClasses = "w-fit px-4 py-2 rounded-full flex items-center gap-4 bg-navy-900/40 backdrop-blur-md text-white border-white/10 border-2 shadow-lg transition-all duration-300 font-medium";
    linkClasses = "px-4 py-2 hover:text-steel-300 transition-all duration-300";
    mobileContainerClasses = "bg-navy-900/40 backdrop-blur-md text-white border border-white/10 shadow-lg transition-all duration-300";
    mobileLinkClasses = "px-1.5 py-1.5 font-bold text-white hover:text-steel-300 transition-colors duration-300";
    isDarkLogo = false;
    isScrolledIcon = false;
    ctaButtonClasses = "bg-white text-navy-900 hover:bg-steel-100";
  } else if (navTheme === "blue") {
    containerClasses = "w-fit px-4 py-2 rounded-full flex items-center gap-4 bg-navy-500 text-white border border-navy-500 border-2 shadow-lg transition-all duration-300 font-medium";
    linkClasses = "px-4 py-2 hover:text-steel-300 transition-all duration-300";
    mobileContainerClasses = "bg-navy-500 text-white border border-navy-500 shadow-lg transition-all duration-300";
    mobileLinkClasses = "px-1.5 py-1.5 font-bold text-white hover:text-steel-300 transition-colors duration-300";
    isDarkLogo = false;
    isScrolledIcon = false;
    ctaButtonClasses = "bg-white text-navy-900 hover:bg-steel-100";
  } else { // "white"
    containerClasses = "w-fit px-4 py-2 rounded-full flex items-center gap-4 bg-white text-navy-900 border border-steel-200/50 border-2 shadow-lg transition-all duration-300 font-medium";
    linkClasses = "px-4 py-2 hover:text-navy-600 transition-all duration-300";
    mobileContainerClasses = "bg-white text-navy-500 border border-steel-200/50 shadow-lg transition-all duration-300";
    mobileLinkClasses = "px-1.5 py-1.5 font-bold text-navy-500 hover:text-navy-800 transition-colors duration-300";
    isDarkLogo = true;
    isScrolledIcon = true;
    ctaButtonClasses = "bg-navy-500 text-white hover:bg-navy-600";
  }

  const showNav = !isScrollingDown;

  const navPositionClasses = `flex p-4 fixed top-0 left-0 z-40 w-full pointer-events-none ${
    isMobile ? "justify-start pl-6 md:pl-[80px]" : "justify-center"
  }`;

  return (
    <AnimatePresence>
      {showNav && (
        <motion.nav 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={navPositionClasses}
        >
          {isMobile ? (
            /* Morphing Floating Menu for Mobile views */
            <motion.div 
              layout
              transition={{ type: "spring", stiffness: 300, damping: 26 }}
              className={`${mobileContainerClasses} flex items-center overflow-hidden h-[46px] pointer-events-auto`}
              style={{
                borderRadius: "9999px",
                width: isMenuExpanded ? "min(310px, calc(100vw - 6px))" : "46px",
                justifyContent: isMenuExpanded ? "flex-start" : "center"
              }}
            >
              {/* Animated Hamburger/Close button - always on the left */}
              <motion.button 
                layout
                onClick={handleToggle}
                className="w-[42px] h-[42px] flex items-center justify-center rounded-full hover:bg-slate-200/20 active:scale-95 transition-transform cursor-pointer shrink-0 border-none bg-transparent"
              >
                <HamburgerIcon isOpen={isIconOpen} isScrolled={isScrolledIcon} />
              </motion.button>

              <AnimatePresence>
                {isMounted && (
                  /* Navigation Links (fade in and expand to the right) */
                  <motion.div 
                    layout
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ 
                      opacity: isTextVisible ? 1 : 0,
                      x: isTextVisible ? 0 : -10
                    }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.15 }}
                    className="flex items-center gap-1 pr-3 whitespace-nowrap text-xs font-semibold"
                  >
                    <Link className={mobileLinkClasses} onClick={closeMenu} to="/">Home</Link>
                    <a className={mobileLinkClasses} onClick={closeMenu} href="#process">Process</a>
                    <a className={mobileLinkClasses} onClick={closeMenu} href="#outputs">Deliverables</a>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ) : (
            /* Standard Desktop Nav Pill */
            <div className={`${containerClasses} pointer-events-auto`}>
              {/* Davem Logo icon */}
              <Link to="/" className="flex items-center shrink-0 pr-1">
                <DavemLogo isDark={isDarkLogo} />
              </Link>

              {/* Links */}
              <div className="flex items-center gap-0">
                <Link to="/" className={linkClasses}>
                  Home
                </Link>
                
                <a href="#process" className={linkClasses}>
                  Process
                </a>

                <a href="#outputs" className={linkClasses}>
                  Deliverables
                </a>
              </div>

              {/* CTA Button */}
              <div className="flex items-center gap-3 pl-1">
                <a 
                  href="mailto:info@davemenergy.com"
                  className={`px-4 py-2 font-sans text-xs font-bold uppercase tracking-wider rounded-full shadow-sm hover:shadow-md transition-all ${ctaButtonClasses}`}
                >
                  Get in Touch
                </a>
              </div>
            </div>
          )}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
