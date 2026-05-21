import React, { useState } from "react"; 
import { motion, AnimatePresence } from "framer-motion";
import Grid from "../layout/Grid";

const servicesData = [
  {
    id: "soil-remediation",
    title: "Soil Remediation Services",
    shortTitle: "Soil Remediation Services",
    description: "Davem Energy Resources Limited provides complete turn-key solutions for the management of contaminated soil. Contaminated soils are encountered on many sites as a result of uncontrolled discharges, spillages, or historical activities. Our comprehensive services include site characterization (trial pits, boreholes, analytical services), risk assessment & management, site delineation, excavation, and treatment of contaminated soil or groundwater, along with expert consultancy and training.",
    image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "oil-spill-control",
    title: "Oil Spill Control / Clean Up Services",
    shortTitle: "Oil Spill Control & Clean Up",
    description: "DAVEM possesses extensive capabilities in the cleanup, handling, disposal of hazardous materials, and remediation of contaminated sites. We offer an integrated approach to environmental management, handling all phases from investigation to design and final cleanup. Our spill clean-up services employ eco-friendly methods such as Micronized PolyUrethane (which enables oil recovery and reuse) and Biodegradable Sorbents containing oil-eating microbes that accelerate bioremediation.",
    image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "marine-logistics",
    title: "Marine Logistics / Supply Services",
    shortTitle: "Marine Logistics & Supply",
    description: "DAVEM is among the most efficient indigenous companies in Inland Waterway Transportation and Deepwater/Offshore Operations. With a fleet of tugboats, crew boats, utility vessels, service vessels, and barges, we support both downstream and upstream sub-sectors. Our capabilities include offshore equipment supply, vessel chartering for seismic/construction operations, geophysical subsea services, marine logistics transportation, vessel management, and expert marine consultancy.",
    image: "https://images.unsplash.com/photo-1506521788701-1e13a4e83f2a?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "procurement-management",
    title: "Procurement Management Services",
    shortTitle: "Procurement Management",
    description: "Procurement in the Oil & Gas Industry is essential for operational success. DAVEM specializes in sourcing and supplying manufactured goods associated with oil and gas exploration, drilling, production, and marine services. Partnering with leading global manufacturers across the UK, Europe, the USA, and the Far East, we deliver high-specification equipment—including valves, pumps, tubular products, ATEX electrical equipment, and safety gear—on time and within budget.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "spill-equipment",
    title: "Oil Spill Response Equipment and Consumables",
    shortTitle: "Spill Equipment & Consumables",
    description: "Leveraging strong partnerships with international oil spill equipment manufacturers, Davem Energy supplies and maintains a comprehensive range of response hardware and consumables. Our inventory includes oil spill containment booms, advanced skimmers, decontamination setups, temporary storage Fast Tanks, high-capacity sorbents (pads, pillows), eco-friendly dispersants, communication radios, specialized response vessels, and ancillary pumps and containers.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "corrosion-control",
    title: "Corrosion Control and Tank Cleaning Services",
    shortTitle: "Corrosion Control & Tank Cleaning",
    description: "We provide comprehensive corrosion control and tank cleaning services designed to protect infrastructure and maintain asset integrity. Serving plants (petrochemical, power generation, gas processing), oil and gas facilities (refineries, upgraders), and terminals (tank farms, pipelines, vessels), we deliver advanced coating, blasting, cathodic protection, and storage tank cleaning services that minimize downtime and prevent material degradation.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "construction-engineering",
    title: "Construction Engineering Services",
    shortTitle: "Construction Engineering",
    description: "We deliver a comprehensive range of multi-discipline construction and engineering services tailored for heavy industrial projects. Our team manages structural fabrications, civil construction, facility maintenance, and pipeline engineering, ensuring all projects are executed to the highest standards of safety, quality, and structural durability in line with oil and gas industry requirements.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop"
  }
];

export default function Services() {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const activeService = servicesData[activeServiceIndex];

  return (
    <section className="bg-steel-100 py-20 px-8 md:px-16 lg:px-24"> 
      <div className="max-w-7xl mx-auto">
        <Grid className="grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Title, Intro & Service Navigation */}
          <div className="lg:col-span-5 flex flex-col">
            <span className="text-steel-600 font-sans font-medium text-sm tracking-widest uppercase mb-2">
              (our capabilities)
            </span>
            
            <h2 className="text-navy-500 font-display font-semibold text-2xl md:text-3xl lg:text-4xl leading-tight">
              Safeguarding Resources, Delivering Solutions
            </h2>
            
            <p className="text-slate-700 text-sm mt-6 leading-relaxed font-sans max-w-xl">
              Guided by over 36 years of industry heritage and an unwavering commitment to environmental safety, Davem Energy Resources Limited delivers specialized, cost-effective solutions across the West African energy corridor.
            </p>

            {/* Interactive Vertical Tab Selector */}
            <div className="mt-10 border-t border-steel-300/60 flex flex-col">
              {servicesData.map((service, index) => {
                const isActive = index === activeServiceIndex;
                return (
                  <div
                    key={service.id}
                    onClick={() => setActiveServiceIndex(index)}
                    className="border-b border-steel-300/60 py-4 cursor-pointer select-none group transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`font-sans text-base md:text-lg transition-all duration-300 ${
                          isActive
                            ? "text-navy-500 font-semibold translate-x-2"
                            : "text-steel-600/90 font-normal group-hover:text-navy-500 group-hover:translate-x-1"
                        }`}
                      >
                        {service.shortTitle}
                      </span>
                      
                      {/* Interactive indicator arrow */}
                      <span
                        className={`text-lg transition-all duration-300 mr-2 ${
                          isActive 
                            ? "text-navy-500 opacity-100 translate-x-0" 
                            : "text-steel-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                        }`}
                      >
                        →
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* End of Left Column */}

          {/* Right Column: Dynamic Detail Panel with animations */}
          <div className="lg:col-span-7 flex flex-col h-full lg:sticky lg:top-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="flex flex-col"
              >
                {/* Active Service Image */}
                <div className="w-full aspect-[16/10] min-h-[250px] md:min-h-[350px] rounded-3xl overflow-hidden shadow-md bg-steel-200">
                  <img
                    src={activeService.image}
                    alt={activeService.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* Active Service Title */}
                <h3 className="text-2xl md:text-3xl font-display font-semibold text-navy-500 mt-8 leading-tight">
                  {activeService.title}
                </h3>

                {/* Active Service Description */}
                <p className="text-slate-700 text-sm md:text-base mt-4 leading-relaxed font-sans max-w-2xl">
                  {activeService.description}
                </p>

                {/* Actions */}
                <div className="flex flex-wrap gap-4 mt-8">
                  <button className="px-6 py-3 bg-navy-500 text-white font-sans text-sm font-semibold rounded-full hover:bg-navy-600 transition-all duration-300 shadow-sm cursor-pointer hover:shadow-md active:scale-95">
                    Details Services
                  </button>
                  <button className="px-6 py-3 border border-steel-400 text-steel-700 bg-transparent font-sans text-sm font-semibold rounded-full hover:bg-steel-200 hover:text-navy-700 transition-all duration-300 shadow-sm cursor-pointer active:scale-95">
                    Book Appointment
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          {/* End of Right Column */}

        </Grid>
      </div>
    </section>
  );
}