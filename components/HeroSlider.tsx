"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import CustomButton from "./CustomButton";
import SwiperNavButtons from "./SwiperNavButtons";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const HeroSlider = () => {
  const handleGetStarted = ()=>{
    // console.log("buttonClicked")
    const tagName =  document.getElementById('prices')
    if (tagName) {
      tagName.scrollIntoView({ behavior: "smooth" });
      // console.log("Membership section found!"); // Logs if the section exists
    } 
  }
  return (
    <Swiper className="h-full relative">
      {[
        {
          title: "Train Like a Warrior",
          subtitle:
            "Unleash your inner strength and achieve the fitness level you never thought possible.",
        },
        {
          title: "Your Transformation Begins Now",
          subtitle:
            "Strength doesn’t come from what you can do; it comes from overcoming what you once thought you couldn’t.",
        },
      ].map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="h-full flex justify-center md:justify-end items-center px-6 md:px-12 lg:px-16">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="max-w-[600px] text-left"
            >
              {/* Title Animation */}
              <motion.h1
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className="h1 mb-3 text-[28px] sm:text-[40px] md:text-[55px] lg:text-[72px] leading-tight text-white"
              >
                <span className="text-[#d4000d]">{slide.title.split(" ")[0]}</span>{" "}
                {slide.title.split(" ").slice(1).join(" ")}
              </motion.h1>

              {/* Subtitle Animation */}
              <motion.p
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className="text-gray-300 italic mb-6 text-sm sm:text-base lg:text-lg"
              >
                {slide.subtitle}
              </motion.p>

              {/* Get Started Button */}
              <motion.div
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className="mb-6 md:mb-0"
              >
                <CustomButton onClick={handleGetStarted} text="Get Started" containerStyles="w-[160px] h-[50px] bg-[#d4000d] hover:bg-red-700 text-white font-bold uppercase tracking-wide rounded-lg transition duration-300" />
              </motion.div>
            </motion.div>
          </div>
        </SwiperSlide>
      ))}

      {/* Swiper Navigation Buttons */}
      <SwiperNavButtons
        containerStyles="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex justify-center gap-2"
        btnStyles="border border-accent text-white w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] flex justify-center items-center hover:bg-accent transition-all duration-300"
        iconStyles="text-xl sm:text-2xl"
      />
    </Swiper>
  );
};

export default HeroSlider;


