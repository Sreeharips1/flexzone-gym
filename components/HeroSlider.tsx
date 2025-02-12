"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import CustomButton from "./CustomButton";
import SwiperNavButtons from "./SwiperNavButtons";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const HeroSlider = () => {
  return (
    <Swiper className="h-full relative">
      {[
        {
          title: "Our gym your path to greatness",
          subtitle:
            "Creating a culture of fitness where everyone, regardless of gender or fitness level, feels welcome and inspired.",
        },
        {
          title: "Your transformation begins here",
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
              {/* Title */}
              <motion.h1
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className="h1 mb-3 text-[28px] sm:text-[40px] md:text-[55px] lg:text-[72px] leading-tight"
              >
                <span>{slide.title.split(" ")[0]}</span>{" "}
                {slide.title.split(" ").slice(1).join(" ")}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className="text-white italic mb-6 text-sm sm:text-base lg:text-lg"
              >
                {slide.subtitle}
              </motion.p>

              {/* Get Started Button - Adjusted for Better Spacing */}
              <motion.div
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className="mb-6 md:mb-0"
              >
                <CustomButton text="Get Started" containerStyles="w-[140px] h-[45px] sm:w-[160px] sm:h-[50px]" />
              </motion.div>
            </motion.div>
          </div>
        </SwiperSlide>
      ))}

      {/* Swiper Navigation Buttons - Positioned Correctly */}
      <SwiperNavButtons
        containerStyles="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex justify-center gap-2"
        btnStyles="border border-accent text-white w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] flex justify-center items-center hover:bg-accent transition-all duration-300"
        iconStyles="text-xl sm:text-2xl"
      />
    </Swiper>
  );
};

export default HeroSlider;

