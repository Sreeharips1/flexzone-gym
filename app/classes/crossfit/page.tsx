"use client";
import Image from "next/image";

export default function CrossFitPage() {
  return (
    <div className="bg-black text-white py-24 px-6 md:px-16 lg:px-28">
      <div className="bg-black p-10 rounded-lg shadow-lg max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold text-accent uppercase tracking-wide text-center mb-8">
          CrossFit Training
        </h1>
        <div className="flex flex-col lg:flex-row items-stretch gap-8">
          <div className="lg:w-1/2 space-y-6 flex flex-col justify-center">
            <p className="text-lg text-justify text-gray-300 leading-normal tracking-tight sm:leading-relaxed sm:tracking-normal">
              Experience high-intensity functional workouts designed to improve strength, agility, and endurance. Perfect for those looking for a challenging workout.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="w-full h-full max-w-md">
              <Image
                src="/assets/img/classes/crossfit.jpg"
                width={500}
                height={550}
                alt="CrossFit Training"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
