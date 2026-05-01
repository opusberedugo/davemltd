import AnimatedHero from '../animations/AnimatedHero';
import SvgDraw from '../animations/SvgDraw';
import ScrollGallery from '../animations/ScrollGallery';

export default function Landing() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-fuchsia-500/30">
      <AnimatedHero />
      <SvgDraw />
      <ScrollGallery />
    </main>
  );
}