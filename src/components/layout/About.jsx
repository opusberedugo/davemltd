import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function About() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const x = useTransform(smoothProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section ref={targetRef} className="relative h-[200vh] bg-navy-500">
      <div className="sticky top-0 flex h-screen flex-col justify-start overflow-hidden pt-12 pb-12">
        <div className="px-24 mb-16">
          <h1 className="text-white text-5xl font-semibold uppercase"> About Us</h1>
        </div>
        
        <motion.main style={{ x }} className="flex w-[200vw] flex-1 min-h-0">
          <div className="w-screen px-24 h-full overflow-y-auto pb-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="max-w-4xl">
              <h2 className="text-steel-300 text-2xl font-semibold uppercase"> Who are we?</h2>
              <p className="text-white mt-4 text-lg"> Davem Energy Resources Limited is a multifaceted indigenous company incorporated under the Companies and Allied Matters Act of 1990 to deliver cost-effective Engineering, Marine, Procurement, and Logistics Solutions. </p>
              <p className="text-white mt-4 text-lg"> We have been at the forefront of oil spill control, containment, and clean-up, assisting both Government agencies and private sector organizations in setting up and managing oil pollution response facilities. We were operators of the largest Oil Spill Response organization in Nigeria and the entire West Coast of Africa called Clean Nigeria Associates (CNA) with over 36 years of Experience. </p>

              <p className="text-white mt-4 text-lg"> Davem Energy Resources Limited has been active in waste management, soil remediation, EIA, contingency plans, capacity building, manpower development, and training. We pride ourselves in protecting the Nigerian environment. </p>
            </div>
          </div>
          
          <div className="w-screen px-24 h-full overflow-y-auto pb-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="max-w-4xl">
              <h2 className="text-steel-300 text-2xl font-semibold uppercase"> What we believe in?</h2>
              <h3 className="text-white text-xl font-semibold uppercase mt-4"> Our Mission?</h3>
              <p className="text-white mt-4 text-lg"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae maxime ullam praesentium saepe accusamus officia at, nisi quas similique et a vel ipsum, quam hic ratione enim. Vero rem consequuntur doloribus praesentium. Et, doloribus ratione? Labore enim ut voluptatum suscipit soluta hic voluptate provident cupiditate expedita possimus exercitationem recusandae earum eligendi consequatur delectus neque reiciendis temporibus aliquid sequi optio voluptatibus consectetur inventore, cum id? Esse repellat hic facere laudantium aliquid veniam eligendi a quo eveniet nobis id earum perspiciatis dolor dolores aut enim, eaque vitae excepturi commodi, non expedita? Rerum doloribus eaque vitae cum, quis sunt at delectus facilis maiores vero nemo ducimus corrupti neque distinctio harum inventore, dolorem saepe, suscipit doloremque hic quas. Voluptatum dolore consequuntur, consectetur mollitia, quam vitae reprehenderit fugit incidunt ad, ea a repellendus similique. Ipsum nesciunt a deserunt, sunt, ducimus vel accusantium repudiandae excepturi ipsa alias non tenetur facere distinctio autem doloribus asperiores consequuntur corporis quidem tempora accusamus possimus qui. At, quos id. Facere eligendi voluptates officia adipisci ex sit aperiam soluta voluptatum doloremque rerum corrupti libero repellendus veritatis perspiciatis tempora odit, placeat repudiandae a earum molestiae commodi nobis dolor at. Officiis itaque quae architecto animi repellendus similique autem totam. Consequatur aliquid nobis eius. Sint?</p>
            </div>
          </div>
        </motion.main>
      </div>
    </section>
  )
}