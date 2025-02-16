'use client';

import React, { useState, useEffect } from 'react';
import { BiDumbbell, BiRun, BiBowlRice } from 'react-icons/bi';
import { FaUserTie, FaBiking, FaSpa } from 'react-icons/fa';

const perks = [
  { icon: <BiDumbbell />, title: 'Personalized Training', text: 'Customized workout plans tailored to your goals.' },
  { icon: <BiRun />, title: 'Top-Tier Equipment', text: 'Premium machines for all fitness levels.' },
  { icon: <FaUserTie />, title: 'Expert Coaching', text: 'Certified trainers to help you reach milestones.' },
  { icon: <FaBiking />, title: 'Cardio and Core Area', text: 'Enjoy our Full Cardio and fitness workout space' },
  { icon: <FaSpa />, title:"Friendly Gym Environment" , text:'Our gym offers a welcoming and friendly environment.' },
  { icon: <BiBowlRice />, title: 'Nutrition Guidance', text: 'Meal plans & dietary coaching for fitness.' },
];

const images = [
  '/assets/img/perk/illustration/run.png',
  '/assets/img/perk/illustration/heart2.png',
  '/assets/img/perk/illustration/men2.png',
  '/assets/img/perk/illustration/men1.png',
  '/assets/img/perk/illustration/menwomen.png',
];

const Perks = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null); // ✅ Fixed Type Issue

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 500);
    return () => clearInterval(imageInterval);
  }, []);

  return (
    <section
      className="relative w-full py-16 text-accent flex flex-col items-center bg-fixed bg-cover bg-center -mb-16 pb-0"
      style={{ backgroundImage: "url('/assets/img/perk/perksnn.png')" }}
    >
      {/* Light Overlay for Text Visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-75"></div>

      <div className="relative max-w-7xl mx-auto flex flex-col gap-6 mb-0">
        
        {/* ✅ Small Screen (Accordion View) */}
        <div className="block md:hidden w-full flex flex-col gap-2 px-4">
          {perks.map((perk, index) => (
            <div 
              key={index} 
              className="border border-red-500 rounded-md p-3 text-center bg-black cursor-pointer transition-all duration-300"
              onClick={() => setOpenIndex(openIndex === index ? null : index)} // ✅ Fixed Type Issue
            >
              <div className="flex items-center justify-center gap-2 text-red-500 text-lg font-bold">
                {React.cloneElement(perk.icon, { className: 'text-2xl' })}
                {perk.title}
              </div>
              {openIndex === index && (
                <p className="text-white text-sm mt-2">{perk.text}</p>
              )}
            </div>
          ))}
        </div>

        {/* ✅ Large Screen (Existing Layout) */}
        <div className="hidden md:flex flex-col md:flex-row w-full items-center gap-6 sm:gap-8 md:gap-12">
          
          {/* Left Side Perks */}
          <div className="w-1/3 flex flex-col items-start text-left">
            {perks.slice(0, 3).map((perk, index) => (
              <div key={index} className="mb-6 flex items-start gap-3 group">
                {React.cloneElement(perk.icon, { className: 'text-3xl group-hover:text-gold transition duration-300' })}
                <div>
                  <h3 className="font-bold text-2xl group-hover:text-gold transition duration-300">{perk.title}</h3>
                  <p className="text-white text-lg leading-6">{perk.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Center Image (Auto-changing) */}
          <div className="w-[350px] h-[350px] flex items-center justify-center">
            <img
              src={images[currentImageIndex]}
              alt="Perk Illustration"
              className="w-full h-full object-contain transition-opacity duration-500 ease-in-out"
            />
          </div>

          {/* Right Side Perks */}
          <div className="w-1/3 flex flex-col items-end text-right">
            {perks.slice(3, 6).map((perk, index) => (
              <div key={index} className="mb-6 flex items-start gap-3 group">
                <div className="text-right">
                  <h3 className="font-bold text-2xl group-hover:text-gold transition duration-300">{perk.title}</h3>
                  <p className="text-white text-lg leading-6">{perk.text}</p>
                </div>
                {React.cloneElement(perk.icon, { className: 'text-3xl group-hover:text-gold transition duration-300' })}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Perks;









