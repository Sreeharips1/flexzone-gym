'use client';
import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import { FaUser } from "react-icons/fa";
import { IoIosPricetags } from "react-icons/io";
import { FaDumbbell } from "react-icons/fa6";
import Achievements from "./Achievements";
import Image from "next/image";

const featured = [
  {
    icon: <FaUser />,
    title: 'Excellent Trainers',
    subtitle: 'Our trainers are certified professionals dedicated to helping you achieve your fitness goals.'
  },
  {
    icon: <IoIosPricetags />,
    title: 'Affordable Prices',
    subtitle: 'We offer affordable membership plans to make fitness accessible to everyone.'
  },
  {
    icon: <FaDumbbell />,
    title: 'Modern Equipment',
    subtitle: 'Our gym is equipped with state-of-the-art machines to enhance your workout experience.'
  },
];

const About = () => {
  return (
    <section className="pt-8 pb-14 lg:pt-16 lg:pb-28" id="about">
      <div className="container mx-auto">
        
        {/* About Us Section with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Fade-in and slide-up for the black box
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }} // Ensures animation repeats every time section enters viewport
          className="border border-gray-300 p-10 rounded-lg bg-black text-white shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
            
            {/* Left Side - Animated Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }} // Image starts hidden & slightly left
              whileInView={{ opacity: 1, x: 0 }} // Moves into place smoothly
              transition={{ duration: 1, ease: "easeOut" }} // Professional smoothness
              viewport={{ once: false }} // Repeats animation on scroll
              className="flex justify-center"
            >
              <Image 
                src="/assets/img/bb.png" 
                alt="Gym Workout" 
                width={400} 
                height={300}
                className="w-full max-w-md rounded-lg shadow-lg"
              />
            </motion.div>

            {/* Right Side - About Us Content */}
            <div className="text-left">
              <h2 className="h2 text-left mb-4 text-accent">ABOUT US</h2>
              
              <p className="mb-4 text-gray-200 text-justify">
                At our gym, we provide a state-of-the-art training environment with modern equipment, spacious workout areas, and expert guidance. Whether you are a beginner or a seasoned athlete, our facility is designed to support your fitness journey and help you achieve your goals. We are committed to creating an inclusive and motivating atmosphere where members feel encouraged and supported. From strength training and cardio workouts to personalized coaching, we ensure every individual has access to the best fitness resources.
              </p>

              <p className="text-gray-200 text-justify">
                 Empowering individuals to embrace a healthier lifestyle through world-class fitness facilities, expert guidance, and a supportive community. Our mission is to inspire and motivate people of all fitness levels by providing high-quality training, cutting-edge equipment, and an inclusive environment where everyone can achieve their personal fitness goals.
              </p>

              {/* Become a Member Button */}
              <button className="px-6 py-3 bg-white text-black font-semibold rounded-md hover:bg-[#d4000d] hover:text-white transition-all duration-300 mt-4">
                JOIN NOW 
              </button>
            </div>
          </div>
        </motion.div>

        {/* Featured Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-16 mb-16">
          {featured.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center gap-4 border p-10 transition-all duration-300 hover:border-black hover:shadow-lg"
            >
              <div className="text-4xl bg-primary-300 text-white w-[80px] h-[80px] rounded-full flex justify-center items-center">
                {feature.icon}
              </div>
              <div className="flex flex-col justify-center items-center gap-2 text-center">
                <h4 className="h4 text-accent">{feature.title}</h4>
                <p>{feature.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <Achievements />
      </div>
    </section>
  );
};

export default About;
