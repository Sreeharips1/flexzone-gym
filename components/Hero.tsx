"use client";

import HeroSlider from "./HeroSlider";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative h-[80vh] md:h-[90vh] lg:h-[912px] bg-hero bg-cover bg-left md:bg-[left_05%] lg:bg-center bg-no-repeat"
      id="home"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="container mx-auto h-full flex items-center relative z-10">
        <HeroSlider />
      </div>
    </motion.section>
  );
};

export default Hero;


