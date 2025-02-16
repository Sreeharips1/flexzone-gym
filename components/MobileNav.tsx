'use client';

import { useMediaQuery } from 'react-responsive';
import { Link as ScrollLink } from 'react-scroll';

const Links = [
  { name: 'home', target: 'home', offset: -100 },
  { name: 'about us', target: 'about', offset: -80 },
  { name: 'perks', target: 'perks', offset: -80 },
  { name: 'team', target: 'team', offset: 0 },
  { name: 'prices', target: 'prices', offset: -40 },
  { name: 'book free trial', target: 'contact', offset: 0 },
];

const MobileNav = ({ containerStyles }: { containerStyles: string }) => {
  const isMobile = useMediaQuery({
    query: '(max-width: 640px)',
  });

  return (
    <nav className={`${containerStyles}`}>
      {Links.map((link, index) => (
        <ScrollLink
          offset={link.offset}
          to={link.target}
          smooth
          spy
          activeClass={!isMobile ? 'active' : ''} // Apply activeClass only if not mobile
          className="cursor-pointer hover:text-accent transition-all"
          key={index}
        >
          {link.name}
        </ScrollLink>
      ))}
    </nav>
  );
};

export default MobileNav;

