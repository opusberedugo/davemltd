import React, { useState, useCallback } from 'react';
import Hero from '../sections/Hero';
import Navpill from '../navigation/NavPill';
import About from '../sections/About';
import Services from '../sections/Services';
import Footer from '../sections/Footer';

export default function Landing() {
  const [heroDone, setHeroDone] = useState(false);

  const handleAnimationComplete = useCallback(() => {
    setHeroDone(true);
  }, []);

  return (
    <>
      <Navpill isVisible={heroDone} />
      <Hero onAnimationComplete={handleAnimationComplete} />
      <About />
      <Services />
      <Footer />
    </>
  );  
}