'use client'

import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";

const MotionTextarea = motion("textarea");

const Contact: React.FC = () => {
  return (
    <div
      id="contact"
      className="bg-gray-900 text-white py-12 px-6 md:px-12 relative bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/img/contact.jpg')" }} // Full-section background image
    >
      <div className="absolute inset-0 bg-black bg-opacity-90 animate-fadeIn"></div> {/* Animated dark overlay */}
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact Us
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Contact Form */}
          <motion.div
            className="bg-gray-800 p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4">Send us a message</h3>
            <form className="space-y-5">
              {["Your Name", "Your Email", "Your Phone"].map((placeholder, index) => (
                <motion.input
                  key={index}
                  type={placeholder.includes("Email") ? "email" : "text"}
                  placeholder={placeholder}
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
                  whileFocus={{ scale: 1.05 }}
                />
              ))}
              <MotionTextarea
                placeholder="Your Query"
                rows={4}
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
                whileFocus={{ scale: 1.05 }}
              />
              <motion.button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Right: Contact Info (No changes here, image still applied) */}
          <motion.div
            className="relative bg-cover bg-center rounded-lg overflow-hidden shadow-lg p-8"
            style={{ backgroundImage: "url('/assets/img/gym-bg1.png')" }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold">SAMEER SHAIK</h3>
              <p className="text-lg font-semibold text-gray-300 underline mb-4">DIRECTOR</p>

              <div className="space-y-5">
                {[
                  { icon: <FaPhone className="text-red-500 text-xl mt-1" />, label: "Phone", value: "+91 8919138745" },
                  { icon: <FaGlobe className="text-red-500 text-xl mt-1" />, label: "Website", value: "www.flexzonegym.com" },
                  { icon: <FaEnvelope className="text-red-500 text-xl mt-1" />, label: "Email", value: "enquiries@flexzonegym.com" },
                  { icon: <FaMapMarkerAlt className="text-red-500 text-xl mt-1" />, label: "Location", value: "Shaheen Nagar, Hyderabad" },
                  { icon: <span className="text-red-500 text-xl mt-1">🕒</span>, label: "Working Hours", value: "Mon-Sat: 5 AM - 10 AM, 5 PM - 10 PM | Sunday: Closed" }
                ].map((item, index) => (
                  <motion.div key={index} className="flex items-start gap-3" whileHover={{ scale: 1.05 }}>
                    {item.icon}
                    <div>
                      <p className="font-semibold">{item.label}</p>
                      <p className="text-gray-300">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;






  