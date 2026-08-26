import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Mail, Sparkles } from "lucide-react";

export default function ServicesContact({ service }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    location: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        location: "",
        email: "",
        message: "",
      });
    }, 1200);
  };

  return (
    <section id="services-contact" className="relative py-24 px-6 md:px-12 lg:px-24 bg-navy-950 text-white overflow-hidden w-full">
      
      {/* Background Vibrant Glow / Mesh Aura matching reference image */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-steel-400/15 rounded-full blur-[100px]" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-navy-600/30 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Outer Dark Glassmorphism Container Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-navy-900/60 backdrop-blur-2xl border border-white/10 rounded-3xl lg:rounded-4xl p-6 sm:p-10 lg:p-12 shadow-2xl shadow-black/80 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch"
        >
          
          {/* Left Column: Heading & Service Context */}
          <div className="lg:col-span-5 flex flex-col justify-between items-start text-left space-y-8 pr-0 lg:pr-4">
            <div>
              {/* Service Pill Tag */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-steel-300 font-sans font-bold text-xs uppercase tracking-widest mb-8 backdrop-blur">
                <span>Contact / {service?.shortTitle || "Services"}</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-white font-display font-semibold text-3xl md:text-5xl lg:text-6xl leading-tight tracking-tight">
                Get In touch <br className="hidden sm:inline" />with us!
              </h2>

              {/* Subtitle Description */}
              <p className="text-slate-300/80 text-sm md:text-base mt-6 leading-relaxed font-sans max-w-md">
                Have questions or project specifications for {service?.title || "our services"}? We'd love to hear from you. Reach out anytime and let's connect.
              </p>
            </div>

            {/* Direct Contact Button */}
            <div className="pt-4">
              <a
                href={`mailto:info@davemenergy.com?subject=Inquiry for ${service?.title || "Service"}`}
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/15 text-white font-sans text-xs font-bold uppercase tracking-wider rounded-xl transition-all backdrop-blur flex items-center gap-2.5 shadow-md active:scale-95 cursor-pointer"
              >
                <span>Direct Mail</span>
                <Mail size={16} className="text-cyan-400" />
              </a>
            </div>
          </div>

          {/* Right Column: Dark Embedded Form Card matching reference image */}
          <div className="lg:col-span-7 bg-navy-950/85 backdrop-blur-xl border border-white/10 rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-inner flex flex-col justify-center">
            
            <h3 className="text-white font-display font-semibold text-xl sm:text-2xl mb-8 text-left">
              Contact Us
            </h3>

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-navy-900/60 border border-white/10 rounded-2xl p-8 text-center flex flex-col items-center justify-center my-auto"
                >
                  <div className="w-16 h-16 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center mb-4">
                    <CheckCircle2 size={36} />
                  </div>
                  <h4 className="text-white font-display font-semibold text-xl mb-2">
                    Inquiry Received!
                  </h4>
                  <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto mb-6 leading-relaxed font-sans">
                    Thank you for submitting your project query regarding {service?.title || "our services"}. Our technical engineering team will review it and get back to you shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 bg-steel-300 hover:bg-white text-navy-950 font-sans text-xs font-bold rounded-xl transition-colors shadow-md cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 text-left">
                  
                  {/* First Name & Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="services-first-name" className="block text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2 font-sans">
                        First Name
                      </label>
                      <input
                        id="services-first-name"
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        className="w-full px-4 py-3.5 bg-navy-900/60 border border-white/15 rounded-xl text-white text-sm font-sans placeholder:text-slate-500 focus:outline-none focus:bg-navy-900/90 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all shadow-inner"
                      />
                    </div>

                    <div>
                      <label htmlFor="services-last-name" className="block text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2 font-sans">
                        Last Name
                      </label>
                      <input
                        id="services-last-name"
                        type="text"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                        className="w-full px-4 py-3.5 bg-navy-900/60 border border-white/15 rounded-xl text-white text-sm font-sans placeholder:text-slate-500 focus:outline-none focus:bg-navy-900/90 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all shadow-inner"
                      />
                    </div>
                  </div>

                  {/* Postal Code / Location & Email Address */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="services-location" className="block text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2 font-sans">
                        Location / Postal Code
                      </label>
                      <input
                        id="services-location"
                        type="text"
                        name="location"
                        required
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="Port Harcourt / 500001"
                        className="w-full px-4 py-3.5 bg-navy-900/60 border border-white/15 rounded-xl text-white text-sm font-sans placeholder:text-slate-500 focus:outline-none focus:bg-navy-900/90 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all shadow-inner"
                      />
                    </div>

                    <div>
                      <label htmlFor="services-email" className="block text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2 font-sans">
                        Email Address
                      </label>
                      <input
                        id="services-email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="hello@company.com"
                        className="w-full px-4 py-3.5 bg-navy-900/60 border border-white/15 rounded-xl text-white text-sm font-sans placeholder:text-slate-500 focus:outline-none focus:bg-navy-900/90 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all shadow-inner"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="services-message" className="block text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2 font-sans">
                      Message
                    </label>
                    <textarea
                      id="services-message"
                      name="message"
                      rows={3}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your project details or inquiry here..."
                      className="w-full px-4 py-3.5 bg-navy-900/60 border border-white/15 rounded-xl text-white text-sm font-sans placeholder:text-slate-500 focus:outline-none focus:bg-navy-900/90 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all shadow-inner resize-none"
                    />
                  </div>

                  {/* Submit Button matching cyan/mint pill button in reference image */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-3.5 bg-steel-300 hover:bg-white text-navy-950 font-sans text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/10 active:scale-95 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-navy-950/30 border-t-navy-950 rounded-full animate-spin" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit</span>
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}
            </AnimatePresence>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
