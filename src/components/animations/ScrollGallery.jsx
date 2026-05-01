import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const images = [
  "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1531297172864-822d1cc25359?auto=format&fit=crop&q=80&w=800"
];

export default function ScrollGallery() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Horizontal scroll animation
      gsap.to(cardsRef.current, {
        xPercent: -100 * (cardsRef.current.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (cardsRef.current.length - 1),
          end: () => "+=" + containerRef.current.offsetWidth
        }
      });
    }, containerRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <section ref={containerRef} className="h-screen flex items-center overflow-hidden bg-zinc-900">
      <div className="absolute top-10 left-10 z-10 mix-blend-difference">
        <h2 className="text-4xl md:text-6xl font-bold text-white">GSAP ScrollTrigger</h2>
        <p className="text-xl text-zinc-300 mt-2">Horizontal timeline pinning</p>
      </div>
      
      <div className="flex w-[400vw] h-full items-center">
        {images.map((src, i) => (
          <div 
            key={i} 
            ref={el => cardsRef.current[i] = el}
            className="w-screen h-[70vh] flex items-center justify-center p-8 md:p-24 shrink-0"
          >
            <div className="w-full h-full relative rounded-3xl overflow-hidden group">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10"/>
              <img 
                src={src} 
                alt={`Gallery image ${i + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
