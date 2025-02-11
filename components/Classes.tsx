"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import CustomButton from "./CustomButton";

const classes = [
  {
    name: "body building",
    img: "/assets/img/classes/body builder2.png",
    description: "Success in the gym isn’t about luck, it’s about consistency and effort.",
  },
  {
    name: "cardio",
    img: "/assets/img/classes/cardio2.png",
    description: "Every step, every breath, every drop of sweat brings you closer to your goals.",
  },
  {
    name: "fitness",
    img: "/assets/img/classes/fitness1.png",
    description: "Being fit is not about perfection, but about persistence and progress",
  },
  {
    name: "crossfit",
    img: "/assets/img/classes/crossfit1.png",
    description: "Push yourself because no one else is going to do it for you.",
  },
];

const Classes = () => {
  return (
    <section id="class">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {classes.map((item, index) => (
          <div 
            className="relative w-full h-[300px] lg:h-[485px] flex flex-col justify-center items-center" 
            key={index}
          >
            {/* Background Image */}
            <Image src={item.img} fill className="object-cover" alt={item.name} />

            {/* Overlay */}
            <div className="absolute w-full h-full bg-black/30 top-0 left-0 z-10"></div>

            {/* Text & Button */}
            <div className="z-20 max-w-[380px] text-center flex flex-col items-center justify-center gap-4">
              <motion.h3 
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className="h3 text-accent"
              >
                {item.name}
              </motion.h3>
              <p className="text-white">{item.description}</p>
              <motion.div 
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
              >
                <CustomButton containerStyles="w-[164px] h-[46px]" text="Read more" />
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Classes;
