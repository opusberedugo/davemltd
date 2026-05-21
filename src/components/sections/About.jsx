import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Grid from "../layout/Grid";
import Card3 from "../ui/Card3";
import Card4 from "../ui/Card4";
import Flex from "../layout/Flex";
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 12 
    } 
  },
};

export default function About() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.33 && activeIndex !== 0) {
      setActiveIndex(0);
    } else if (latest >= 0.33 && latest < 0.66 && activeIndex !== 1) {
      setActiveIndex(1);
    } else if (latest >= 0.66 && activeIndex !== 2) {
      setActiveIndex(2);
    }
  });

  const xValue = `-${activeIndex * 100}vw`;

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-navy-500">
      <div className="sticky top-0 flex h-screen flex-col justify-start overflow-hidden pt-8 pb-8">
        <div className="px-24 mb-8 flex items-center gap-8">
          <h1 className="text-white text-5xl font-semibold uppercase shrink-0"> About Us</h1>
        </div>
        
        <motion.main 
          initial={false}
          animate={{ x: xValue }}
          transition={{ type: "spring", stiffness: 200, damping: 25, mass: 0.5 }}
          className="flex w-[300vw] flex-1 min-h-0"
        >
          <div className="w-screen px-24 h-full overflow-y-auto pb-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <motion.div 
              className="max-w-full"
              variants={containerVariants}
              initial="hidden"
              animate={activeIndex === 0 ? "visible" : "hidden"}
            >
              <motion.h2 variants={itemVariants} className="text-steel-300 text-2xl font-semibold uppercase"> Who are we?</motion.h2>
              <motion.p variants={itemVariants} className="text-white mt-4 text-lg"> Davem Energy Resources Limited (RC 845000) is a multifaceted indigenous company incorporated under the Companies and Allied Matters Act of 1990 to deliver cost-effective Engineering, Marine, Procurement, and Logistics Solutions. </motion.p>
              <motion.p variants={itemVariants} className="text-white mt-4 text-lg"> We have been at the forefront of oil spill control, containment, and clean-up, assisting both Government agencies and private sector organizations in setting up and managing oil pollution response facilities. We were operators of the largest Oil Spill Response organization in Nigeria and the entire West Coast of Africa called Clean Nigeria Associates (CNA) with over 36 years of Experience. </motion.p>

              <motion.p variants={itemVariants} className="text-white mt-4 text-lg"> Davem Energy Resources Limited has been active in waste management, soil remediation, EIA, contingency plans, capacity building, manpower development, and training. We pride ourselves in protecting the Nigerian environment. </motion.p>
            </motion.div>
          </div>
          
          <div className="w-screen px-24 h-full overflow-y-auto pb-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="max-w-full">
              <h2 className="text-steel-300 text-2xl font-semibold uppercase"> What we believe in?</h2>
              <h3 className="text-white text-xl font-semibold uppercase mt-4"> Our Vision</h3>
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
                variants={containerVariants}
                initial="hidden"
                animate={activeIndex === 1 ? "visible" : "hidden"}
              >

                <motion.div variants={itemVariants} className="h-full flex flex-col">
                  <Card3
                    className="h-full"
                    title="Continental Leadership"
                    description="To evolve into a continental leader in our sphere of influence, setting the standard for energy resources, engineering, and logistics across West Africa."
                    imageSrc="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=600&auto=format&fit=crop"
                    imageAlt="Continental Leadership"
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="h-full flex flex-col">
                  <Card4
                    className="h-full"
                    title="Environmental Stewardship"
                    description="Protecting and restoring the Nigerian environment through eco-friendly clean-up methods, soil remediation, and advanced waste management."
                    imageSrc="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=600&auto=format&fit=crop"
                    imageAlt="Environmental Stewardship"
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="h-full flex flex-col">
                  <Card3
                    className="h-full"
                    title="Value & Quality"
                    description="Creating sustainable value and delivering high-quality, cost-effective engineering and marine logistics solutions to our upstream and downstream clients."
                    imageSrc="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600&auto=format&fit=crop"
                    imageAlt="Value & Quality"
                  />
                </motion.div>
              </motion.div>
              
            </div>
          </div>
          
          <div className="w-screen px-24 h-full overflow-y-auto pb-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="max-w-full">
              <h2 className="text-steel-300 text-2xl font-semibold uppercase"> What we believe in?</h2>
              <h3 className="text-white text-xl font-semibold uppercase mt-4"> Our Mission & Values</h3>
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
                variants={containerVariants}
                initial="hidden"
                animate={activeIndex === 2 ? "visible" : "hidden"}
              >

                <motion.div variants={itemVariants} className="h-full flex flex-col">
                  <Card4
                    className="h-full"
                    title="Our Mission"
                    description="To support the world by creating value and making a difference through cost-effective solutions, leveraging our 36+ years of industry experience."
                    imageSrc="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop"
                    imageAlt="Our Mission"
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="h-full flex flex-col">
                  <Card3
                    className="h-full"
                    title="Our Core Values"
                    description="Quality, Service, Innovation, Professionalism, Integrity, and Collaboration guide everything we do and define our interactions with clients."
                    imageSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop"
                    imageAlt="Our Core Values"
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="h-full flex flex-col">
                  <Card4
                    className="h-full"
                    title="Capacity & Training"
                    description="Empowering organizations with capacity building, contingency planning, manpower development, and certified training in oil spill response."
                    imageSrc="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600&auto=format&fit=crop"
                    imageAlt="Capacity & Training"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.main>
      </div>
    </section>
  )
}