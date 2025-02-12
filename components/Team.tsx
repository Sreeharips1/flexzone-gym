"use client";
import { FaUser } from "react-icons/fa";

const trainerData = [
  { 
    name: "Coach Name 1", 
    role: "Gym Instructor", 
    quote: "Train insane or remain the same." 
  },
  { 
    name: "Coach Name 2", 
    role: "Gym Instructor", 
    quote: "Your body can stand almost anything. It’s your mind that you have to convince." 
  },
  { 
    name: "Coach Name 3", 
    role: "Gym Instructor", 
    quote: "Push yourself because no one else is going to do it for you." 
  },
];

const Team = () => {
  return (
    <section className="py-16 bg-white text-accent" id="team">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold uppercase mb-10 tracking-wide">Our Trainers</h2>
        
        {/* Trainer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {trainerData.map((trainer, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center justify-center w-[280px] h-[340px] mx-auto border-4 border-red-500 rounded-lg transition-all duration-500 hover:border-black group p-6"
            >
              {/* User Icon */}
              <FaUser className="text-7xl text-gray-400 group-hover:text-white transition-all duration-500" />
              
              {/* Name */}
              <h4 className="mt-6 text-lg text-black font-bold">{trainer.name}</h4>
              
              {/* Role */}
              <p className="text-sm uppercase tracking-wide text-gray-400 group-hover:text-gray-200 transition-all duration-500">
                {trainer.role}
              </p>

              {/* Quote */}
              <p className="italic text-black text-sm mt-4 border-l-4 border-red-500 pl-4">
                “{trainer.quote}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

