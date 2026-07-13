import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

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

export default function Navpill({ isVisible = true }) {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [hideForTabs, setHideForTabs] = useState(false);

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

  // Sequential closing flow: Hide text -> shrink container -> morph icon back
  const closeMenu = () => {
    setIsTextVisible(false);

    setTimeout(() => {
      setIsMenuExpanded(false);

      setTimeout(() => {
        setIsIconOpen(false);
        setIsMounted(false);
      }, 350); // wait for width spring animation to complete
    }, 150); // wait for opacity fade transition to complete
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
    // Invert colors when scrolling past the Hero section (100vh)
    // Subtracting 80px to trigger right as the navpill touches the new section
    if (latest > window.innerHeight - 80) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    // Hide-on-scroll logic
    // Hide when scrolling down, show when scrolling up
    const currentScrollY = latest;
    const diff = currentScrollY - lastScrollY.current;
    if (Math.abs(diff) > 5) {
      if (diff > 0 && currentScrollY > 120) {
        setIsScrollingDown(true);
        if (isMenuExpanded) {
          closeMenu(); // Auto-collapse mobile menu on scroll down
        }
      } else if (diff < 0) {
        setIsScrollingDown(false);
      }
      lastScrollY.current = currentScrollY;
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      const tabsEl = document.getElementById("mobile-capabilities-tabs");
      if (!tabsEl) {
        setHideForTabs(false);
        return;
      }

      if (window.innerWidth < 1024) {
        const rect = tabsEl.getBoundingClientRect();
        // Hide nav pill if the top of capabilities tabs has scrolled up to/past 80px from top of viewport,
        // and the capabilities section is still active/visible in view (rect.bottom > 0).
        if (rect.top <= 80 && rect.bottom > 0) {
          setHideForTabs(true);
        } else {
          setHideForTabs(false);
        }
      } else {
        setHideForTabs(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Theme styling configurations
  const desktopContainerClasses = isScrolled
    ? "w-fit px-4 py-2 border-white border-2 rounded-full overflow-hidden flex bg-white text-navy-500 font-medium shadow-lg transition-colors duration-300"
    : "w-fit px-4 py-2 border-navy-500 border-2 rounded-full overflow-hidden flex bg-navy-500 text-white font-medium shadow-lg transition-colors duration-300";

  const desktopLinkClasses = isScrolled
    ? "px-4 py-2 hover:font-bold hover:text-navy-800 transition-all duration-300"
    : "px-4 py-2 hover:text-steel-500 transition-all duration-300";

  // Mobile navigation style configuration
  const mobileContainerClasses = isScrolled
    ? "border-white border-2 bg-white text-navy-500 shadow-lg transition-all duration-300"
    : "border-navy-500 border-2 bg-navy-500 text-white shadow-lg transition-all duration-300";

  const mobileLinkClasses = isScrolled
    ? "px-2 py-1.5 font-bold text-navy-500 hover:text-navy-800 transition-colors duration-300"
    : "px-2 py-1.5 font-bold text-white hover:text-steel-300 transition-colors duration-300";

  const showNav = isVisible && !hideForTabs && !isScrollingDown;

  return (
    <AnimatePresence>
      {showNav && (
        <motion.nav
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`flex p-4 fixed top-0 left-0 z-40 w-full pointer-events-none ${isMobile ? "justify-start pl-6 md:pl-[80px]" : "justify-around"
            }`}
        >
          {isMobile ? (
            /* Morphing Floating Menu for Mobile views */
            <motion.div 
              layout
              transition={{ type: "spring", stiffness: 300, damping: 26 }}
              className={`${mobileContainerClasses} flex items-center overflow-hidden h-[46px] pointer-events-auto`}
              style={{
                borderRadius: "9999px",
                width: isMenuExpanded ? "240px" : "46px",
                justifyContent: isMenuExpanded ? "flex-start" : "center"
              }}
            >
              {/* Animated Hamburger/Close button - always on the left */}
              <motion.button 
                layout
                onClick={handleToggle}
                className="w-[42px] h-[42px] flex items-center justify-center rounded-full hover:bg-slate-200/20 active:scale-95 transition-transform cursor-pointer shrink-0 border-none bg-transparent"
              >
                <HamburgerIcon isOpen={isIconOpen} isScrolled={isScrolled} />
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
                    <a className={mobileLinkClasses} onClick={closeMenu} href="#">About</a>
                    <a className={mobileLinkClasses} onClick={closeMenu} href="#">Services</a>
                    <a className={mobileLinkClasses} onClick={() => { closeMenu(); }} href="#">Projects</a>
                    <a className={mobileLinkClasses} onClick={closeMenu} href="#">Contact</a>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ) : (
            /* Standard Desktop Nav Pill */
            <div className={`${desktopContainerClasses} pointer-events-auto`}>
              <a className={desktopLinkClasses} href="#">About</a>
              <a className={desktopLinkClasses} href="#">Services</a>
              <a className={desktopLinkClasses} href="#">Projects</a>
              <a className={desktopLinkClasses} href="#">Contact</a>
            </div>
          )}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}