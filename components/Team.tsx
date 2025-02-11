"use client";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import Image from "next/image";


const trainerData = [
  {
    image: "/assets/img/trainers/david.jpg",
    name: "Thomas Jose",
    role: "Body builder coach",
    description:
      "He is a powerhouse of strength and discipline, with a sculpted physique that reflects relentless dedication and hard work.",
    social: [
      { icon: FaFacebook, href: "http://facebook.com" },
      { icon: FaTwitter, href: "http://twitter.com" },
      { icon: FaYoutube, href: "http://youtube.com" },
    ],
  },
  {
    image: "/assets/img/trainers/rosy.jpg",
    name: "Shanet Rose",
    role: "Body builder coach",
    description:
      "She is a powerhouse of strength and discipline, with a sculpted physique that reflects relentless dedication and hard work.",
    social: [
      { icon: FaFacebook, href: "http://facebook.com" },
      { icon: FaTwitter, href: "http://twitter.com" },
      { icon: FaYoutube, href: "http://youtube.com" },
    ],
  },
  {
    image: "/assets/img/trainers/matt.jpg",
    name: "Sandesh",
    role: "Body builder coach",
    description:
      "He is a powerhouse of strength and discipline, with a sculpted physique that reflects relentless dedication and hard work.",
    social: [
      { icon: FaFacebook, href: "http://facebook.com" },
      { icon: FaTwitter, href: "http://twitter.com" },
      { icon: FaYoutube, href: "http://youtube.com" },
    ],
  },
  {
    image: "/assets/img/trainers/sofia.jpg",
    name: "Venus Thomas",
    role: "Body builder coach",
    description:
      "She is a powerhouse of strength and discipline, with a sculpted physique that reflects relentless dedication and hard work.",
    social: [
      { icon: FaFacebook, href: "http://facebook.com" },
      { icon: FaTwitter, href: "http://twitter.com" },
      { icon: FaYoutube, href: "http://youtube.com" },
    ],
  },
];

const Team = () => {
  return (
    <section className="py-12 xl:h-[110vh]" id="team">
      <div className="container mx-auto h-full flex flex-col items-center justify-center">
        <h2 className="h2 text-center mb-6">Our Trainers</h2>
        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 mb-12">
          {trainerData.map((trainer, index) => {
            return (
              <div className="flex flex-col items-center text-center" key={index}>
                {/* Image */}
                <div className="relative w-[320px] h-[360px] mx-auto mb-4">
                  <Image src={trainer.image} fill style={{ objectFit: "cover" }} alt={trainer.name} />
                </div>
                {/* Name */}
                <h4 className="h4 mb-2">{trainer.name}</h4>
                <p className="uppercase text-xs tracking-[3px] mb-2">{trainer.role}</p>
                <p className="mb-6 max-w-[320px] mx-auto">{trainer.description}</p>
                {/* Social Icons */}
                <div className="flex gap-6 justify-center">
                  {trainer.social.map((social, index) => {
                    return (
                      <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                        <social.icon className="text-lg" />
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;

