'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { motion } from 'framer-motion';
import SwiperNavButtons from './SwiperNavButtons'; // Reuse the same navigation buttons
import PerksData from './PerksData'; // 🔹 Import PerksData

const images = [
  '/assets/img/perk/carousel/body builder2.png',
  '/assets/img/perk/carousel/body builder1.png',
  '/assets/img/perk/carousel/cardio1.png',
  '/assets/img/perk/carousel/crossfit1.png',
  '/assets/img/perk/carousel/fitness1.png',
];

export default function perks() {
  return (
    <section id="perks" className="w-full flex flex-col items-center py-12 bg-gradient-to-r from-gray-900 to-black">
      {/* Section Title */}
      <h2 className="text-black text-4xl font-bold mb-8 text-center">Exclusive Perks</h2>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl px-4"
      >
        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 }, // Mobile: Show 1 image fully
            768: { slidesPerView: 1.2, spaceBetween: -40 }, // Tablet: Slightly visible side images
            1024: { slidesPerView: 1.5, spaceBetween: -100 }, // Desktop: Smooth visibility of side images
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150, // 🔹 Depth for better effect
            modifier: 2.5,
            slideShadows: false, // 🔹 Fix: Removes unwanted extra shadow
          }}
          className="w-full h-[400px] md:h-[450px] lg:h-[500px] relative bg-white" // 🔹 Fix: Adjusts height for small screens
        >
          {images.map((src, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative w-[90%] md:w-[80%] lg:w-[600px] h-[300px] md:h-[350px] lg:h-[400px] rounded-lg overflow-hidden shadow-2xl"
              >
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </motion.div>
            </SwiperSlide>
          ))}

          {/* Keep your existing navigation buttons */}
          <SwiperNavButtons
            containerStyles="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex justify-center gap-2"
            btnStyles="border border-accent text-white w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] flex justify-center items-center hover:bg-accent transition-all duration-300"
            iconStyles="text-xl sm:text-2xl"
          />
        </Swiper>
      </motion.div>

      {/* 🔹 Add PerksData Below */}
      <PerksData />
    </section>
  );
}



