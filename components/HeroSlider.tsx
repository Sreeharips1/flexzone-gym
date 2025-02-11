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
      <SwiperSlide>
        <div className="h-full flex justify-end items-center pt-32 px-4">
          <div className="flex flex-col items-start max-w-[600px] text-left">
            <motion.h1
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="h1 mb-3 text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px]"
            >
              <span>Our gym</span> your path to greatness
            </motion.h1>
            <motion.p
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="text-white italic mb-6"
            >
               Creating a culture of fitness where everyone, regardless of gender or fitness level, feels welcome and inspired.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
            >
              <CustomButton text="Get Started" containerStyles="w-[160px] h-[50px]" />
            </motion.div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-full flex justify-end items-center pt-32 px-4">
          <div className="flex flex-col items-start max-w-[600px] text-left">
            <motion.h1 variants={fadeIn('up',0.4)} initial ='hidden'
            whileInView={'show'}
            viewport={
              {
                once: false,amount: 0.2
              }}className="h1 mb-3 text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px]">
              <span>Your transformation</span> begins here
            </motion.h1>
            <motion.p variants={fadeIn('up',0.6)} initial ='hidden'
            whileInView={'show'}
            viewport={
              {
                once: false,amount: 0.2
              }}className="text-white italic mb-6">
              Strength doesn’t come from what you can do; it comes from overcoming what you once thought you couldn’t.
            </motion.p>
            <motion.div variants={fadeIn('up',0.6)} initial ='hidden'
            whileInView={'show'}
            viewport={
              {
                once: false,amount: 0.2
              }}>
            <CustomButton text="Get Started" containerStyles="w-[160px] h-[50px]" />
            </motion.div>
          </div>
        </div>
      </SwiperSlide>
      

      {/* Swiper Navigation Buttons */}
      <SwiperNavButtons
        containerStyles="absolute bottom-0  lg:bottom-0 right-0 h-[58px]
      w-full lg:w-[700px] z-50 flex justify-center lg:justify-start gap-1"
        btnStyles="border border-accent text-white w-[56px] h-[56px] flex justify-center items-center hover:bg-accent transition-all duration-300"
        iconStyles="text-2xl"
      />
    </Swiper>
  );
};

export default HeroSlider;