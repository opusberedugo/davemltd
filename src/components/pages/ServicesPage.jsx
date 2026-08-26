import React, { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { servicesDataExtended } from "../../data/servicesDataExtended";
import { useNavigate } from "react-router-dom";

// Import split components
import ServicesNavPill from "../navigation/ServicesNavPill";
import ServicesHero from "../sections/ServicesHero";
import ServicesStats from "../sections/ServicesStats";
import ServicesProcess from "../sections/ServicesProcess";
import ServicesSplitCard from "../sections/ServicesSplitCard";
import ServicesOutputs from "../sections/ServicesOutputs";
import ServicesRelated from "../sections/ServicesRelated";
import ServicesCTA from "../sections/ServicesCTA";
import Footer from "../sections/Footer";

export default function ServicesPage({ serviceId, onBack }) {
  const navigate = useNavigate();
  const [openAccordion, setOpenAccordion] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  // Sync with serviceId prop changes and scroll to top
  useEffect(() => {
    setActiveStep(0);
    setOpenAccordion(0);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [serviceId]);

  // Find active service data
  const service = servicesDataExtended.find((s) => s.id === serviceId);

  // Fallback in case service isn't found
  if (!service) {
    return (
      <div className="min-h-screen bg-steel-50 flex flex-col items-center justify-center p-8 text-navy-900">
        <h2 className="text-2xl font-bold mb-4 font-display">Service Not Found</h2>
        <button
          onClick={onBack}
          className="px-6 py-3 bg-navy-500 text-white rounded-full font-semibold hover:bg-navy-600 transition-all flex items-center gap-2 cursor-pointer shadow-md"
        >
          <ArrowLeft size={16} /> Back to Homepage
        </button>
      </div>
    );
  }

  // Get related services data
  const relatedServices = servicesDataExtended.filter((s) =>
    service.related?.includes(s.id)
  );

  const handleRelatedClick = (id) => {
    navigate(`/services/${id}`);
  };

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="bg-steel-50 min-h-screen font-sans text-slate-800 selection:bg-navy-100 selection:text-navy-950 overflow-x-hidden">
      
      {/* FLOATING NAVIGATION PILL */}
      <ServicesNavPill />

      {/* HERO SECTION */}
      <ServicesHero service={service} />

      {/* STATS SECTION */}
      <ServicesStats service={service} />

      {/* DELIVERY PROCESS SECTION */}
      <ServicesProcess 
        service={service} 
        activeStep={activeStep} 
        setActiveStep={setActiveStep} 
      />

      {/* PLANETARY SCALE SPLIT CARD SECTION */}
      <ServicesSplitCard service={service} />

      {/* TANGIBLE OUTPUTS SECTION */}
      <ServicesOutputs 
        service={service} 
        openAccordion={openAccordion} 
        toggleAccordion={toggleAccordion} 
      />

      {/* RELATED SERVICES */}
      <ServicesRelated 
        relatedServices={relatedServices} 
        handleRelatedClick={handleRelatedClick} 
        onBack={onBack} 
      />

      {/* BOTTOM CTA */}
      <ServicesCTA service={service} />

      {/* BASE FOOTER */}
      <Footer showTopBorder={false} />

    </div>
  );
}
