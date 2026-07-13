import React from "react";
import { Link } from "react-router-dom";
import { Mail, Globe, MapPin, Phone } from "lucide-react";
import { DavemLogo } from "../navigation/ServicesNavPill";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white border-t border-white/5 py-16 px-6 md:px-12 lg:px-24 text-left w-full">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Col 1: Logo & Copy */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <DavemLogo isDark={false} className="mb-6" />
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-sm">
              Davem Energy Resources Limited delivers cost-effective engineering, marine logistics, and environmental solutions across West Africa. Established in 2009, the company holds a rich operational heritage.
            </p>
          </div>

          {/* Col 2: Services List */}
          <div className="lg:col-span-3 flex flex-col space-y-3">
            <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-slate-300 mb-2">Services</h4>
            <Link to="/services/soil-remediation" className="text-slate-400 hover:text-white text-xs md:text-sm transition-colors">Soil Remediation</Link>
            <Link to="/services/oil-spill-control" className="text-slate-400 hover:text-white text-xs md:text-sm transition-colors">Oil Spill Clean-up</Link>
            <Link to="/services/marine-logistics" className="text-slate-400 hover:text-white text-xs md:text-sm transition-colors">Marine Logistics</Link>
            <Link to="/services/procurement-management" className="text-slate-400 hover:text-white text-xs md:text-sm transition-colors">Procurement Management</Link>
          </div>

          {/* Col 3: Company links */}
          <div className="lg:col-span-2 flex flex-col space-y-3">
            <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-slate-300 mb-2">Company</h4>
            <a href="#" className="text-slate-400 hover:text-white text-xs md:text-sm transition-colors">About Us</a>
            <a href="#" className="text-slate-400 hover:text-white text-xs md:text-sm transition-colors">Capabilities</a>
            <a href="#" className="text-slate-400 hover:text-white text-xs md:text-sm transition-colors">Careers</a>
            <a href="#" className="text-slate-400 hover:text-white text-xs md:text-sm transition-colors">Contact</a>
          </div>

          {/* Col 4: Contact details */}
          <div className="lg:col-span-3 flex flex-col space-y-3">
            <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-slate-300 mb-2">Contact Details</h4>
            <div className="flex flex-col gap-1.5 text-slate-400 text-xs md:text-sm">
              <a href="mailto:info@davemenergy.com" className="hover:text-white transition-colors flex items-center gap-2">
                <Mail size={14} className="shrink-0" /> <span>info@davemenergy.com</span>
              </a>
              <a href="mailto:e.akaluogbo@davemenergy.com" className="hover:text-white transition-colors pl-5 text-[11px] md:text-xs">
                e.akaluogbo@davemenergy.com
              </a>
              <a href="mailto:davemenergy@yahoo.com" className="hover:text-white transition-colors pl-5 text-[11px] md:text-xs">
                davemenergy@yahoo.com
              </a>
            </div>
            <a href="https://www.davemenergyltd.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white text-xs md:text-sm transition-colors flex items-center gap-2">
              <Globe size={14} className="shrink-0" /> <span>www.davemenergyltd.com</span>
            </a>
            <div className="text-slate-400 text-xs md:text-sm flex items-start gap-2">
              <Phone size={14} className="mt-0.5 shrink-0" />
              <div className="flex flex-col text-[11px] md:text-xs">
                <span>+234 803 308 8942</span>
                <span>+234 802 782 3939</span>
              </div>
            </div>
            <span className="text-slate-400 text-xs md:text-sm flex items-start gap-2">
              <MapPin size={14} className="mt-0.5 shrink-0" />
              <span>6b Udom Close, D/Line, Port Harcourt, Rivers State, Nigeria.</span>
            </span>
          </div>

        </div>

        <div className="border-t border-white/5 mt-16 pt-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Large Footer Accent Brand Name */}
          <div className="text-white/20 font-display font-black text-6xl md:text-8xl tracking-tight select-none">
            DAVEM
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-slate-500 text-xs font-sans">
            <span>© 2009-{new Date().getFullYear()} Davem Energy Resources Limited. All rights reserved.</span>
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
