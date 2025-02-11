'use client'

import { useMediaQuery } from 'react-responsive';
import {Link as ScrollLink} from 'react-scroll';

const Links =[
    {name: 'home',target:'home',offset:-100},
    {name: 'about',target:'about',offset:-80},
    {name: 'class',target:'class',offset:-80},
    {name: 'team',target:'team',offset:0},
    {name: 'prices',target:'prices',offset:-40},
    
    {name: 'contact',target:'contact',offset:0},
];
const MobileNav = ({containerStyles}:{containerStyles:string}) => {
    const isMobile = useMediaQuery({
        query:'(max-width:640px)',
    })
  return (
    <nav className={`${containerStyles}`}>
    {Links.map((Link,index)=>{
        return ( <ScrollLink 
        offset={Link.offset}
        to={Link.target} 
        smooth
        spy
        activeClass={`${!isMobile && 'active'}`}
        className='cursor-pointer hover:text-accent transition-all'
        key={index}
        >
            {Link.name}
        </ScrollLink>
        );
    })}
    </nav>     
  );
};
export default MobileNav