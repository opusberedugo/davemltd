import React, { createContext, useContext, useState } from "react";
import { PopupModal } from "react-calendly";

const CalendlyContext = createContext(null);

// Default Calendly scheduling link (can be overridden via environment variable or per call)
export const DEFAULT_CALENDLY_URL =
  import.meta.env.VITE_CALENDLY_URL || "https://calendly.com/davemenergy";

export function CalendlyProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [calendlyUrl, setCalendlyUrl] = useState(DEFAULT_CALENDLY_URL);
  const [prefill, setPrefill] = useState({});

  /**
   * Open the Calendly modal.
   * @param {string} [customUrl] - Optional custom Calendly event URL.
   * @param {object} [customPrefill] - Optional prefill info (email, name, etc.).
   */
  const openCalendly = (customUrl, customPrefill = {}) => {
    setCalendlyUrl(customUrl || DEFAULT_CALENDLY_URL);
    setPrefill(customPrefill);
    setIsOpen(true);
  };

  const closeCalendly = () => {
    setIsOpen(false);
  };

  return (
    <CalendlyContext.Provider value={{ isOpen, openCalendly, closeCalendly }}>
      {children}
      <PopupModal
        url={calendlyUrl}
        onModalClose={closeCalendly}
        open={isOpen}
        rootElement={document.getElementById("root") || document.body}
        prefill={prefill}
      />
    </CalendlyContext.Provider>
  );
}

export function useCalendly() {
  const context = useContext(CalendlyContext);
  if (!context) {
    throw new Error("useCalendly must be used within a CalendlyProvider");
  }
  return context;
}
