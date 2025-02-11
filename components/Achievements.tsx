"use client";
import React, { useRef } from "react";
import CountUp from "react-countup";
import { FaClock, FaTrophy, FaDumbbell } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

const stats = [
  { number: 12, icon: FaClock, text: "Working Hours" },
  { number: 10, icon: FaTrophy, text: "Certified Trainers" },
  { number: 30, icon: FaDumbbell, text: "Modern Equipment" },
];

const statsContainerVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.4, duration: 0.5, ease: "linear" } },
};

const statsItem = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.25, 0.6, 0.3, 0.8] } },
};

const Achievements = () => {
  // Create refs outside of the loop
  const refs = [useRef(null), useRef(null), useRef(null)];
  const isInViewList = refs.map((ref) => useInView(ref, { once: true }));

  return (
    <section className="py-16 lg:py-6 bg-grey-100">
      <div className="container mx-auto px-4">
        <motion.div
          variants={statsContainerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {stats.map((item, index) => (
            <motion.div
              ref={refs[index]}
              key={index}
              variants={statsItem}
              className="flex flex-col justify-center items-center"
            >
              <div className="border border-accent/90 w-[140px] h-[140px] mx-auto rounded-full p-1 mb-6">
                <div className="border border-accent/30 w-full h-full flex items-center justify-center text-5xl rounded-full">
                  {isInViewList[index] && <CountUp start={0} end={item.number} duration={6} suffix="+" />}
                </div>
              </div>
              <div className="flex flex-col justify-center items-center text-center">
                <item.icon className="text-3xl mb-2" />
                <h4 className="h4">{item.text}</h4>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;

