// 'use client'

// import {Link as ScrollLink} from 'react-scroll';

// const Links =[
//     {name: 'home',target:'home',offset:-100},
//     {name: 'about us',target:'about',offset:-80},
//     {name:'perks',target:'perks',offset:-80},
//     {name: 'team',target:'team',offset:0},
//     {name: 'prices',target:'prices',offset:-40},
    
//     {name: 'book free trial',target:'contact',offset:0},
// ];

// const Nav = ({containerStyles,itemStyles}:{containerStyles:string,itemStyles:string}) => {
//   return (
//     <nav className={`${containerStyles}`}>
//     {Links.map((Link,index)=>{
//         return ( <ScrollLink 
//         offset={Link.offset}
//         to={Link.target} 
//         smooth
//         spy
//         activeClass='active'
//         className='cursor-pointer hover:text-accent transition-all'
//         key={index}
//         >
//             {Link.name}
//         </ScrollLink>
//         );
//     })}
//     </nav>     
//   );
// };

// export default Nav
"use client";

import { Link as ScrollLink } from "react-scroll";

const links = [
  { name: "Home", target: "home", offset: -100 },
  { name: "About Us", target: "about", offset: -80 },
  { name: "Perks", target: "perks", offset: -80 },
  { name: "Team", target: "team", offset: 0 },
  { name: "Prices", target: "prices", offset: -40 },
  { name: "Book Free Trial", target: "contact", offset: 0 },
];

interface NavProps {
  containerStyles: string;
  itemStyles: string;
}

const Nav: React.FC<NavProps> = ({ containerStyles, itemStyles }) => {
  return (
    <nav className={`${containerStyles} flex items-center gap-6`}>
      {links.map((link, index) => (
        <ScrollLink
          key={index}
          to={link.target}
          offset={link.offset}
          smooth
          spy
          activeClass="active"
          className={`${itemStyles} relative text-lg px-6 py-3 font-semibold transition-all
          rounded-full border border-transparent
          hover:border-red-500 hover:bg-red-600/20
          hover:shadow-[0_0_10px_rgba(255,0,0,0.8)]
          active:shadow-[0_0_14px_rgba(255,0,0,1)]
          transition-all duration-300`}
        >
          {link.name}
        </ScrollLink>
      ))}
    </nav>
  );
};

export default Nav;


