import Hero from "@/components/Hero";
import About from "@/components/About";
import Classes from "@/components/Classes";
import Team from "@/components/Team";
import Membership from "@/components/Membership";
import Contact from "@/components/Contact";
import GymRules from '@/components/GymRules'



export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Classes />
      <Team />
      < GymRules />
      <Membership />
      <Contact />
      
    </main>
  );
}
