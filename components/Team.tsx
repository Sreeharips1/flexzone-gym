'use client';

import { useState } from 'react';
import Image from 'next/image';

const trainerData = [
  { 
    name: "xxx xxx", 
    role: "DIRECTOR", 
    image: "/assets/img/trainers/head.png",
    description: "Director of Flexzone gym "
  },
  { 
    name: "Not available", 
    role: "Not available", 
    image: "/assets/img/trainers/head.png",
    description: "details are not available now"
  },
  // { 
  //   name: "Not available", 
  //   role: "Not available", 
  //   image: "/assets/img/trainers/head.png",
  //   description: "details are not available now"
  // },
  // { 
  //   name: "Not available", 
  //   role: "Not available", 
  //   image: "/assets/img/trainers/head.png",
  //   description: "details are not available now"
  // },
];

const Team = () => {
  const [selectedTrainer, setSelectedTrainer] = useState<number | null>(null);

  return (
    <section
      className="relative py-16 text-accent bg-fixed bg-cover bg-center -mb-16 mt-4"
      style={{ backgroundImage: "url('/assets/img/perk/teambb.png')" }}
      id="team"
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-55"></div>

      <div className="relative container mx-auto text-center">
        <h2 className="text-3xl font-bold uppercase mb-10 tracking-wide text-white">Our Team</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {trainerData.map((trainer, index) => (
            <div key={index} className="w-full">
              {/* Trainer Card */}
              <div
                className="relative flex items-center p-4 w-full h-[140px] bg-white rounded-lg shadow-lg border border-gray-200 transition-all duration-500 hover:shadow-2xl hover:scale-105 cursor-pointer"
                onClick={() => setSelectedTrainer(selectedTrainer === index ? null : index)}
              >
                <div className="w-1/4">
                  <Image src={trainer.image} width={80} height={80} alt={trainer.name} className="rounded-lg object-cover" />
                </div>
                <div className="ml-4 text-left w-3/4">
                  <h4 className="text-xl font-bold text-black">{trainer.name}</h4>
                  <p className="text-sm text-gray-500">{trainer.role}</p>
                </div>
              </div>

              {/* Expandable Description */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  selectedTrainer === index ? "max-h-40 py-4 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600 text-sm bg-white px-4 py-2 rounded-lg shadow-md border border-gray-200 mt-2">
                  {trainer.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;





