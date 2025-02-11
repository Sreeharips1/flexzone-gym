"use client";

import { MdClose } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import CustomButton from "./CustomButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
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
        768: {
            slidesPerView: 2,
            spaceBetween: 20, // Reduced space between slides
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20, // Reduced space between slides
        }
      }}
      className="min-h-[500px]" // Reduced height
    >
      {membershipData.map((item, index) => (
        <SwiperSlide key={index}>
            <div className="border border-accent hover:bg-primary-300/80 transition-all duration-300 w-full max-w-[280px] mx-auto"> 
                {/* Reduced max-width */}
                <div className="py-4 px-6 border-b border-accent"> 
                    {/* Reduced padding */}
                    <h4 className="text-2xl  font-bold">{item.title}</h4> 
                    {/* Reduced font size */}
                </div>
                {/* Benefits */}
                <div className="py-6 px-6"> 
                    {/* Reduced padding */}
                    <ul className="flex flex-col gap-4 mb-5"> 
                        {/* Reduced gap and margin */}
                        {item.benefits.map((benefit, index) => (
                            <li className="flex items-center gap-2" key={index}>
                                <benefit.icon className="text-accent text-base" /> 
                                {/* Reduced icon size */}
                                <span className="text-sm">{benefit.text}</span> 
                                {/* Reduced font size */}
                            </li>
                        ))}
                    </ul>
                    {/* Price & Button */}
                    <p className="text-accent mb-6 flex gap-1 items-center"> 
                        {/* Reduced margin */}
                        <sup className="text-2xl">₹:</sup> 
                        {/* Reduced font size */}
                        <strong className="text-4xl">{item.price}</strong> 
                        {/* Reduced font size */}
                         
                        
                    </p>
                    <CustomButton containerStyles='w-[140px] h-[40px] text-sm' text='Choose now'/> 
                    {/* Reduced button size */}
                </div>
            </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MembershipSlider;


