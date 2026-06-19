import React, { useState, useRef, useEffect } from "react"; 
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Grid from "../layout/Grid";

const servicesData = [
  {
    id: "soil-remediation",
    title: "Soil Remediation Services",
    shortTitle: "Soil Remediation",
    description: "Davem Energy Resources Limited provides complete turn-key solutions for the management of contaminated soil. Contaminated soils are encountered on many sites as a result of uncontrolled discharges, spillages, or historical activities. Our comprehensive services include site characterization (trial pits, boreholes, analytical services), risk assessment & management, site delineation, excavation, and treatment of contaminated soil or groundwater, along with expert consultancy and training.",
    image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "oil-spill-control",
    title: "Oil Spill Control / Clean Up Services",
    shortTitle: "Oil Spill Control",
    description: "DAVEM possesses extensive capabilities in the cleanup, handling, disposal of hazardous materials, and remediation of contaminated sites. We offer an integrated approach to environmental management, handling all phases from investigation to design and final cleanup. Our spill clean-up services employ eco-friendly methods such as Micronized PolyUrethane (which enables oil recovery and reuse) and Biodegradable Sorbents containing oil-eating microbes that accelerate bioremediation.",
    image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "marine-logistics",
    title: "Marine Logistics / Supply Services",
    shortTitle: "Marine Logistics",
    description: "DAVEM is among the most efficient indigenous companies in Inland Waterway Transportation and Deepwater/Offshore Operations. With a fleet of tugboats, crew boats, utility vessels, service vessels, and barges, we support both downstream and upstream sub-sectors. Our capabilities include offshore equipment supply, vessel chartering for seismic/construction operations, geophysical subsea services, marine logistics transportation, vessel management, and expert marine consultancy.",
    image: "/marine_logistics.png"
  },
  {
    id: "procurement-management",
    title: "Procurement Management Services",
    shortTitle: "Procurement",
    description: "Procurement in the Oil & Gas Industry is essential for operational success. DAVEM specializes in sourcing and supplying manufactured goods associated with oil and gas exploration, drilling, production, and marine services. Partnering with leading global manufacturers across the UK, Europe, the USA, and the Far East, we deliver high-specification equipment—including valves, pumps, tubular products, ATEX electrical equipment, and safety gear—on time and within budget.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "spill-equipment",
    title: "Oil Spill Response Equipment and Consumables",
    shortTitle: "Response Equipment",
    description: "Leveraging strong partnerships with international oil spill equipment manufacturers, Davem Energy supplies and maintains a comprehensive range of response hardware and consumables. Our inventory includes oil spill containment booms, advanced skimmers, decontamination setups, temporary storage Fast Tanks, high-capacity sorbents (pads, pillows), eco-friendly dispersants, communication radios, specialized response vessels, and ancillary pumps and containers.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "corrosion-control",
    title: "Corrosion Control and Tank Cleaning Services",
    shortTitle: "Corrosion Control",
    description: "We provide comprehensive corrosion control and tank cleaning services designed to protect infrastructure and maintain asset integrity. Serving plants (petrochemical, power generation, gas processing), oil and gas facilities (refineries, upgraders), and terminals (tank farms, pipelines, vessels), we deliver advanced coating, blasting, cathodic protection, and storage tank cleaning services that minimize downtime and prevent material degradation.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "construction-engineering",
    title: "Construction Engineering Services",
    shortTitle: "Construction Eng.",
    description: "We deliver a comprehensive range of multi-discipline construction and engineering services tailored for heavy industrial projects. Our team manages structural fabrications, civil construction, facility maintenance, and pipeline engineering, ensuring all projects are executed to the highest standards of safety, quality, and structural durability in line with oil and gas industry requirements.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop"
  }
];

export default function Services() {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const serviceRefs = useRef([]);
  const mobileTabContainerRef = useRef(null);
  const desktopTabContainerRef = useRef(null);
  const desktopTabRefs = useRef([]);

  // IntersectionObserver to set active service index during scrolling
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-35% 0px -35% 0px", // triggers when elements pass through the middle 30% of view
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = serviceRefs.current.indexOf(entry.target);
          if (index !== -1) {
            setActiveServiceIndex(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    serviceRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Sync mobile tab container scrolling with active state
  useEffect(() => {
    if (mobileTabContainerRef.current) {
      const activeTab = mobileTabContainerRef.current.children[activeServiceIndex];
      if (activeTab) {
        activeTab.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [activeServiceIndex]);

  // Sync desktop tab container scrolling to align active tab at the top
  useEffect(() => {
    const container = desktopTabContainerRef.current;
    const activeTab = desktopTabRefs.current[activeServiceIndex];
    if (container && activeTab) {
      const containerRect = container.getBoundingClientRect();
      const activeTabRect = activeTab.getBoundingClientRect();
      
      if (containerRect.height > 0 && activeTabRect.height > 0) {
        // Use relative bounding rect offset adjusted by current scroll position
        const relativeTop = activeTabRect.top - containerRect.top + container.scrollTop;
        
        // Scroll so that the active tab is positioned at the top of the container
        container.scrollTo({
          top: relativeTop,
          behavior: "smooth"
        });
      }
    }
  }, [activeServiceIndex]);

  const handleTabClick = (index) => {
    const target = serviceRefs.current[index];
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  const getDialStyles = (index) => {
    const diff = Math.abs(index - activeServiceIndex);
    if (diff === 0) {
      return {
        opacity: 1,
        scale: 1.05,
        colorClass: "text-navy-600 font-bold",
        indicatorOpacity: "opacity-100 translate-x-0",
      };
    } else if (diff === 1) {
      return {
        opacity: 0.75,
        scale: 0.96,
        colorClass: "text-slate-600 font-semibold",
        indicatorOpacity: "opacity-0 -translate-x-2",
      };
    } else if (diff === 2) {
      return {
        opacity: 0.45,
        scale: 0.90,
        colorClass: "text-slate-500 font-medium",
        indicatorOpacity: "opacity-0 -translate-x-4",
      };
    } else {
      return {
        opacity: 0.25,
        scale: 0.85,
        colorClass: "text-slate-400 font-normal",
        indicatorOpacity: "opacity-0 -translate-x-4",
      };
    }
  };

  return (
    <section className="bg-steel-100 py-20 px-8 md:px-16 lg:px-24"> 
      <div className="max-w-7xl mx-auto">
        <Grid className="grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Title, Intro & Service Navigation (Sticky on Desktop) */}
          <div className="lg:col-span-5 flex flex-col lg:sticky lg:top-24 lg:self-start lg:max-h-[calc(100vh-6rem)]">
            <span className="text-steel-600 font-sans font-medium text-sm tracking-widest uppercase mb-2">
              (our capabilities)
            </span>
            
            <h2 className="text-navy-500 font-display font-semibold text-2xl md:text-3xl lg:text-4xl leading-tight">
              Safeguarding Resources, Delivering Solutions
            </h2>
            
            <p className="text-slate-700 text-sm mt-6 leading-relaxed font-sans max-w-xl">
              Guided by over 36 years of industry heritage and an unwavering commitment to environmental safety, Davem Energy Resources Limited delivers specialized, cost-effective solutions across the West African energy corridor.
            </p>

            {/* Interactive Vertical Dial Selector for Desktop */}
            <div className="hidden lg:block relative mt-8 w-full">
              {/* Scrollable Container */}
              <div
                ref={desktopTabContainerRef}
                className="h-[320px] overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] flex flex-col"
              >
                {servicesData.map((service, index) => {
                  const styles = getDialStyles(index);
                  return (
                    <div
                      key={service.id}
                      ref={(el) => (desktopTabRefs.current[index] = el)}
                      onClick={() => handleTabClick(index)}
                      style={{
                        opacity: styles.opacity,
                        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                      className="border-b border-steel-300/30 last:border-b-0 py-4 cursor-pointer select-none shrink-0"
                    >
                      <div className="flex items-center justify-between transition-all duration-300">
                        <span
                          style={{
                            transform: `scale(${styles.scale})`,
                            transformOrigin: "left center",
                            display: "inline-block",
                            transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), color 0.3s ease",
                          }}
                          className={`font-sans text-base md:text-lg ${styles.colorClass}`}
                        >
                          {service.shortTitle}
                        </span>
                        
                        <span className={`text-lg transition-all duration-300 mr-2 text-navy-500 ${styles.indicatorOpacity}`}>
                          →
                        </span>
                      </div>
                    </div>
                  );
                })}

                {/* Bottom spacer to allow scrolling the last items to the top */}
                <div className="h-[280px] shrink-0" />
              </div>
            </div>
          </div>
          {/* End of Left Column */}

          {/* Sticky Mobile Navigation Tabs */}
          <div 
            ref={mobileTabContainerRef}
            id="mobile-capabilities-tabs"
            className="lg:hidden sticky top-0 bg-steel-100/95 backdrop-blur z-20 border-b border-steel-300/60 -mx-8 px-8 py-3 flex gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {servicesData.map((service, index) => {
              const isActive = index === activeServiceIndex;
              return (
                <button
                  key={service.id}
                  onClick={() => handleTabClick(index)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full font-sans text-xs font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-navy-500 text-white shadow-sm"
                      : "bg-white text-steel-600 hover:text-navy-500 border border-steel-300"
                  }`}
                >
                  {service.shortTitle}
                </button>
              );
            })}
          </div>

          {/* Right Column: Vertical stack of service detail blocks */}
          <div className="lg:col-span-7 flex flex-col space-y-32 lg:space-y-40 pb-32">
            {servicesData.map((service, index) => {
              return (
                <motion.div
                  key={service.id}
                  ref={(el) => (serviceRefs.current[index] = el)}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col"
                >
                  {/* Service Image */}
                  <div className="w-full aspect-[16/10] min-h-[250px] md:min-h-[350px] rounded-3xl overflow-hidden shadow-md bg-steel-200">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>

                  {/* Service Title */}
                  <h3 className="text-2xl md:text-3xl font-display font-semibold text-navy-500 mt-8 leading-tight">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-slate-700 text-sm md:text-base mt-4 leading-relaxed font-sans max-w-2xl">
                    {service.description}
                  </p>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-4 mt-8">
                    <Link 
                      to={`/services/${service.id}`}
                      className="px-6 py-3 bg-navy-500 text-white font-sans text-sm font-semibold rounded-full hover:bg-navy-600 transition-all duration-300 shadow-sm cursor-pointer hover:shadow-md active:scale-95 flex items-center justify-center text-decoration-none"
                    >
                      Details Services
                    </Link>
                    <button 
                      onClick={() => window.location.href = `mailto:info@davemenergy.com?subject=Appointment Booking - ${service.title}`}
                      className="px-6 py-3 border border-steel-400 text-steel-700 bg-transparent font-sans text-sm font-semibold rounded-full hover:bg-steel-200 hover:text-navy-700 transition-all duration-300 shadow-sm cursor-pointer active:scale-95"
                    >
                      Book Appointment
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
          {/* End of Right Column */}

        </Grid>
      </div>
    </section>
  );
}