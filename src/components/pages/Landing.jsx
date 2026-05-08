import React, { useState, useCallback } from 'react';
import Hero from '../layout/Hero';
import Navpill from '../navigation/NavPill';
import About from '../layout/About';

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
    </>
  );  
}