'use client';

import { FaCheck } from "react-icons/fa6";
import CustomButton from "./CustomButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

// Membership details
const membershipData = [
    {
        title: "Monthly",
        price: 1000,
        benefits: [
            { icon: FaCheck, text: "Includes membership" },
            { icon: FaCheck, text: "Access to all gym facilities" },
            { icon: FaCheck, text: "Diet plan included" },
            { icon: FaCheck, text: "Health and fitness tips" },
            { icon: FaCheck, text: "Monday-Saturday gym access" },
            { icon: FaCheck, text: "Additional amenities" },
        ],
    },
    {
        title: "Quarterly",
        price: 5500,
        benefits: [
            { icon: FaCheck, text: "Includes membership" },
            { icon: FaCheck, text: "Access to all gym facilities" },
            { icon: FaCheck, text: "Diet plan included" },
            { icon: FaCheck, text: "Health and fitness tips" },
            { icon: FaCheck, text: "Monday-Saturday gym access" },
            { icon: FaCheck, text: "Additional amenities" },
        ],
    },
    {
        title: "Yearly",
        price: 11500,
        benefits: [
            { icon: FaCheck, text: "Includes membership" },
            { icon: FaCheck, text: "Access to all gym facilities" },
            { icon: FaCheck, text: "Diet plan included" },
            { icon: FaCheck, text: "Health and fitness tips" },
            { icon: FaCheck, text: "Monday-Saturday gym access" },
            { icon: FaCheck, text: "Additional amenities" },
        ],
    },
];

const MembershipSlider = () => {
  return (
    <Swiper 
      slidesPerView={1}
      spaceBetween={20} 
      grabCursor={true}
      modules={[Pagination]} 
      pagination={{ clickable: true }}
      breakpoints={{
        768: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 20 }
      }}
      className="min-h-[500px]"
    >
      {membershipData.map((item, index) => (
        <SwiperSlide key={index}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="border border-accent bg-primary-300/20 hover:bg-primary-300/80 
            transition-all duration-300 w-full max-w-[280px] mx-auto 
            shadow-lg rounded-lg p-4 transform hover:scale-105"
          > 
            {/* Title */}
            <div className="py-4 px-6 border-b border-accent">
              <h4 className="text-2xl font-bold">{item.title}</h4>
            </div>
            
            {/* Benefits */}
            <div className="py-6 px-6">
              <ul className="flex flex-col gap-4 mb-5">
                {item.benefits.map((benefit, index) => (
                  <li className="flex items-center gap-2" key={index}>
                    <benefit.icon className="text-accent text-lg" /> 
                    <span className="text-base">{benefit.text}</span>
                  </li>
                ))}
              </ul>

              {/* Price */}
              <motion.p 
                className="text-accent mb-6 flex gap-1 items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <sup className="text-2xl">₹</sup>
                <strong className="text-4xl">{item.price}</strong>
              </motion.p>
              
              {/* Button with animation */}
              <motion.div 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              ><a href="http://localhost:3001/">
                <CustomButton 
                  containerStyles="w-[140px] h-[40px] text-sm bg-accent text-white hover:bg-red-700 transition duration-300"
                  text="Choose now"
                />
                </a>.
              </motion.div>
            </div>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MembershipSlider;




