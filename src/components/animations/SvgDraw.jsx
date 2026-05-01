import { motion } from 'framer-motion';

export default function SvgDraw() {
  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(217, 70, 239, 0)"
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(217, 70, 239, 0.2)",
      transition: {
        default: { duration: 3, ease: "easeInOut" },
        fill: { duration: 2, ease: [1, 0, 0.8, 1], delay: 2 }
      }
    }
  };

  return (
    <section className="py-32 flex flex-col items-center justify-center bg-zinc-950/50 relative border-y border-zinc-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,70,239,0.05)_0%,transparent_50%)]" />
      
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">SVG Path Drawing</h2>
        <p className="text-zinc-400">Powered natively by Framer Motion (No Vivus needed)</p>
      </div>

      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-48 h-48 stroke-fuchsia-500 stroke-[0.5]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
      >
        <motion.path
          d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
          variants={icon}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
    </section>
  );
}
