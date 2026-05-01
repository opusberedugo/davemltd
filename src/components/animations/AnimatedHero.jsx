import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function AnimatedHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { type: 'spring', stiffness: 80, damping: 20 },
    },
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Dynamic Background Glow */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-fuchsia-600 rounded-full blur-[120px] pointer-events-none"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center"
      >
        <motion.div variants={itemVariants} className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-sm font-medium text-zinc-300">
          <Sparkles className="w-4 h-4 text-fuchsia-400" />
          <span>Welcome to the future of animation</span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
          Breathtaking <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-600">Transitions</span> <br className="hidden md:block"/> 
          Jaw-Dropping <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">Design</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl">
          Experience the power of Framer Motion and GSAP working in perfect harmony without any dependency clashes. Smooth, 60fps animations out of the box.
        </motion.p>

        <motion.div variants={itemVariants} className="flex gap-4">
          <button className="group relative px-8 py-4 bg-zinc-50 text-zinc-950 font-semibold rounded-full overflow-hidden transition-transform active:scale-95">
            <span className="relative z-10 flex items-center gap-2">
              Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          <button className="px-8 py-4 bg-zinc-900 text-zinc-50 font-semibold rounded-full border border-zinc-800 hover:bg-zinc-800 transition-colors active:scale-95">
            View Components
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
