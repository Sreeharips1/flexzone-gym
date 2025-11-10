
'use client';
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";

const Header = () => {
  const [headerActive, setHeaderActive] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderActive(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${headerActive ? 'h-[100px]' : 'h-[124px]'}
      fixed max-w-[1920px] top-0 w-full bg-primary-200 h-[100px] transition-all z-50`}>
      <div className="container mx-auto h-full flex items-center justify-between">
        {/* Logo */}
        <Link href='/' className="flex items-center gap-2">
          <Image src={'/assets/img/logo.png'} width={100} height={30} alt='' />
          <span className="text-accent text-xl font-bold whitespace-nowrap hidden sm:inline">FLEX </span>
          <span className="text-white text-xl font-bold whitespace-nowrap hidden sm:inline">GYM</span>
        </Link>

        {/* Mobile Nav - Hidden on large devices */}
        <MobileNav containerStyles={`${headerActive ? 'top-[90px]' : 'top-[124px]'}
          ${openNav ? 'max-h-max pt-8 pb-10 border-t border-white/10' : 'max-h-0 pt-0 pb-0 overflow-hidden border-white/0'}
          flex flex-col text-center gap-8 fixed bg-primary-200 w-full left-0 text-base uppercase font-medium 
          text-white transition-all xl:hidden`}
        />

        {/* Desktop Nav - Hidden on small devices */}
        <Nav containerStyles="flex gap-4 text-white text-base uppercase font-medium transition-all hidden xl:flex"
          itemStyles="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition duration-300" 
        />

        {/* Right Section: Login Button + Mobile Menu Button */}
        <div className="flex items-center gap-4">
          {/* Login Button */}
          <Link href="https://userfrontend-psi.vercel.app/"
            className="bg-red-600 text-white px-4 py-2 rounded-full font-medium transition duration-300 hover:bg-red-700 ">
            Login
          </Link>

          {/* Mobile Menu Button */}
          <button onClick={() => setOpenNav(!openNav)} className="text-white xl:hidden">
            <MdMenu className="text-4xl" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;


