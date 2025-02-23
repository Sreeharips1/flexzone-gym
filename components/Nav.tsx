
// "use client";

// import { Link as ScrollLink } from "react-scroll";

// const links = [
//   { name: "Home", target: "home", offset: -100 },
//   { name: "About Us", target: "about", offset: -80 },
//   { name: "Perks", target: "perks", offset: -80 },
//   { name: "Team", target: "team", offset: 0 },
//   { name: "Prices", target: "prices", offset: -40 },
//   { name: "Book Free Trial", target: "contact", offset: 0 },
// ];

// interface NavProps {
//   containerStyles: string;
//   itemStyles: string;
// }

// const Nav: React.FC<NavProps> = ({ containerStyles, itemStyles }) => {
//   return (
//     <nav className={`${containerStyles} flex items-center gap-6 bg-gray-900/70 backdrop-blur-md p-4 border border-gray-800/50 rounded-lg`}>
//       {links.map((link, index) => (
//         <ScrollLink
//           key={index}
//           to={link.target}
//           offset={link.offset}
//           smooth
//           spy
//           activeClass="active"
//           className={`${itemStyles} relative text-lg px-6 py-3 font-semibold transition-all
//           rounded-full border border-white/20 text-white
//           hover:border-red-500 hover:text-red-500
//           hover:shadow-[0_0_10px_rgba(255,0,0,0.8)]
//           active:shadow-[0_0_14px_rgba(255,0,0,1)]
//           transition-all duration-300 ${
//             link.name === "Book Free Trial" ? "bg-red-600 hover:bg-red-700" : ""
//           }`}
//         >
//           {link.name}
//         </ScrollLink>
//       ))}
//     </nav>
//   );
// };

// export default Nav;
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
    <nav className={`${containerStyles} flex items-center gap-6 bg-gray-900/70 backdrop-blur-md p-4 border border-gray-800/50 rounded-lg`}>
      {links.map((link, index) => (
        <ScrollLink
          key={index}
          to={link.target}
          offset={link.offset}
          smooth
          spy
          activeClass="active"
          className={`${itemStyles} relative text-lg px-6 py-3 font-semibold transition-all
          rounded-full border border-white/20 text-white bg-black/40
          hover:border-red-500 hover:text-red-500
          hover:shadow-[0_0_10px_rgba(255,0,0,0.8)]
          active:shadow-[0_0_14px_rgba(255,0,0,1)]
          transition-all duration-300 ${
            link.name === "Book Free Trial" ? "bg-red-600 hover:bg-red-700" : ""
          }`}
        >
          {link.name}
        </ScrollLink>
      ))}
    </nav>
  );
};

export default Nav;