"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import CustomButton from "./CustomButton";
import Link from "next/link";

const classes = [
  {
    name: "Body Building",
    slug: "body-building",
    img: "/assets/img/classes/body builder2.png",
    description: "Success in the gym isn’t about luck, it’s about consistency and effort.",
  },
  {
    name: "Cardio",
    slug: "cardio",
    img: "/assets/img/classes/cardio2.png",
    description: "Every step, every breath, every drop of sweat brings you closer to your goals.",
  },
  {
    name: "Fitness",
    slug: "fitness",
    img: "/assets/img/classes/fitness1.png",
    description: "Being fit is not about perfection, but about persistence and progress",
  },
  {
    name: "CrossFit",
    slug: "crossfit",
    img: "/assets/img/classes/crossfit1.png",
    description: "Push yourself because no one else is going to do it for you.",
  },
];

const Classes = () => {
  return (
    <section id="class" className="py-16 bg-black hidden">
      <motion.div 
        initial="hidden" 
        whileInView="show" 
        viewport={{ once: false, amount: 0.2 }} 
        className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 lg:px-20"
      >
        {classes.map((item, index) => (
          <motion.div 
            key={index}
            variants={{
              hidden: { opacity: 0, y: 80 },
              show: { opacity: 1, y: 0, transition: { duration: 0.8, delay: index * 0.2 } },
            }}
            className="relative w-full h-[380px] lg:h-[500px] flex flex-col justify-center items-center overflow-hidden rounded-xl group shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            {/* Background Image with Parallax Effect */}
            <motion.div 
              className="absolute inset-0 z-0 transition-transform duration-700"
              whileHover={{ scale: 1.15 }}
            >
              <Image 
                src={item.img} 
                fill 
                className="object-cover rounded-xl" 
                alt={item.name} 
              />
            </motion.div>

            {/* Animated Overlay */}
            <div className="absolute w-full h-full bg-black/50 top-0 left-0 z-10 transition-opacity duration-500 group-hover:bg-black/60"></div>

            {/* Text & Button with Motion Effects */}
            <div className="z-20 max-w-[380px] text-center flex flex-col items-center justify-center gap-4 px-6">
              <motion.h3 
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
                className="text-accent text-2xl font-extrabold tracking-wide uppercase"
              >
                {item.name}
              </motion.h3>
              <motion.p 
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
                className="text-white text-sm lg:text-base leading-relaxed"
              >
                {item.description}
              </motion.p>
              <motion.div 
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
              >
                <Link href={`/classes/${item.slug}`}>
                  <CustomButton 
                    containerStyles="w-[180px] h-[50px] text-white bg-accent hover:bg-accent/90 transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-accent/50"
                    text="Read More" 
                  />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Classes;



