"use client";
import Image from "next/image";

export default function FitnessPage() {
  return (
  
    <div className="bg-black text-white py-24 px-6 md:px-16 lg:px-28">
      <div className="bg-black p-10 rounded-lg shadow-lg max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold text-accent uppercase tracking-wide text-center mb-8">
          General Fitness
        </h1>
        <div className="flex flex-col lg:flex-row items-stretch gap-8">
          <div className="lg:w-1/2 space-y-6 flex flex-col justify-center">
            <p className="text-lg text-justify text-gray-300 leading-normal tracking-tight sm:leading-relaxed sm:tracking-normal">
              Stay active and maintain overall health with our general fitness programs. Designed for all fitness levels, these sessions focus on strength, flexibility, and endurance.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="w-full h-full max-w-md">
              <Image
                src="/assets/img/classes/fitness.jpg"
                width={500}
                height={550}
                alt="General Fitness"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
