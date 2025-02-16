"use client";

import HeroSlider from "./HeroSlider";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative h-screen md:h-[90vh] lg:h-[912px] bg-black overflow-hidden"
      id="home"
    >
      {/* 🔥 Background Image Layer with Smooth Motion */}
      <motion.div
        initial={{ opacity: 0.8, scale: 1 }}
        animate={{ opacity: 1, scale: 1.02, x: "-10%" }} // Slight left shift for small screens
        transition={{ duration: 5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0"
      >
        <Image
          src="/assets/img/hero/b1.jpg"
          alt="Gym Background"
          layout="fill"
          objectFit="cover"
          
          quality={100}
          priority
          className="w-full h-full"
          
          
        />
      </motion.div>

      {/* 🔥 Energy Aura Overlay (Subtle Glow Effect) */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0.5, scale: 1 }}
        animate={{ opacity: 1, scale: 1.05 }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", repeatType: "reverse" }}
        
      >
        <Image
          src="/assets/img/hero/b1.jpg"
          alt="Energy Aura"
          layout="fill"
          objectFit="cover"
          quality={100}
          
        />
      </motion.div>

      {/* 🥊 Left Character: Male Fighter (Powerful Entrance) */}
      <motion.div
        className="absolute bottom-0 left-[5%] w-[350px] md:w-[400px] h-auto"
        initial={{ x: -250, opacity: 0, rotate: -10 }}
        animate={{ x: 0, opacity: 1, rotate: 0 }}
        transition={{ duration: 1.2, type: "spring", stiffness: 120 }}
        whileHover={{ scale: 1.05 }}
        hidden
      >
        <Image
          src="/assets/img/hero/hero22.png"
          alt="Male Fighter"
          width={400}
          height={600}
          quality={100}
        />
      </motion.div>

      {/* 🏋️‍♀️ Right Character: Female Fighter (Smooth Entrance) */}
      <motion.div
        className="absolute bottom-0 right-[5%] w-[350px] md:w-[400px] h-auto"
        initial={{ x: 250, opacity: 0, rotate: 10 }}
        animate={{ x: 0, opacity: 1, rotate: 0 }}
        transition={{ duration: 1.2, type: "spring", stiffness: 120 }}
        whileHover={{ scale: 1.05 }}
        hidden
      >
        <Image
          src="/assets/img/hero/bbbodyhero.png"
          alt="Female Fighter"
          width={400}
          height={600}
          quality={100}
        />
      </motion.div>
      {/* 🔥 Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>


      {/* Swiper Slider with Text */}
      <div className="container mx-auto h-full flex items-center relative z-10">
        <HeroSlider />
      </div>
    </motion.section>
  );
};

export default Hero;


