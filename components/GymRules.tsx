"use client";
import Image from "next/image";
import { Dumbbell } from "lucide-react";
import { motion } from "framer-motion";

const rules = [
  "NO USAGE OF CHALK/LIQUID CHALK",
  "NO FOOD AND DRINKS AT THE GYM FLOOR",
  "NO ROWDY BEHAVIOUR",
  "RE-RACK WEIGHTS AFTER USE",
  "WIPE DOWN EQUIPMENT AFTER USE",
  "RESPECT OTHER MEMBERS",
];

export default function GymRules() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 1 }}
      className="relative bg-[url('/assets/img/gymrules/bb.jpg')] bg-cover bg-center bg-no-repeat text-white py-20 px-5 mt-12"
    >
      {/* Dark Overlay for Better Readability */}
      <div className="absolute inset-0 bg-black/80 "></div>

      {/* Content Box (Centered) */}
      <div className="relative z-10 bg-black p-10 rounded-2xl max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Side - Text */}
        <div className="relative w-full md:w-1/2">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-red-600"
          >
            GYM RULES
          </motion.h2>

          <motion.div
            initial={{ scale: 0, rotate: 180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="flex justify-start my-4"
          >
            <Dumbbell size={50} className="text-red-600" />
          </motion.div>

          <ul className="space-y-4 text-lg">
            {rules.map((rule, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                whileHover={{ scale: 1.1, color: "#ff0000" }}
                className="flex items-center"
              >
                <Dumbbell size={20} className="text-red-600 mr-3" /> {rule}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1 }}
          className="relative w-full md:w-1/2 flex justify-center mt-6 md:mt-0"
        >
          <Image
            src="/assets/img/gymrules/b1.jpg"
            alt="Gym Rules"
            width={400}
            height={300}
            className="rounded-2xl shadow-lg"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
