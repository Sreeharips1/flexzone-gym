'use client'

import {Link as ScrollLink} from 'react-scroll';

const Links =[
    {name: 'home',target:'home',offset:-100},
    {name: 'about us',target:'about',offset:-80},
    {name:'perks',target:'perks',offset:-80},
    {name: 'team',target:'team',offset:0},
    {name: 'prices',target:'prices',offset:-40},
    
    {name: 'book free trial',target:'contact',offset:0},
];

const Nav = ({containerStyles}:{containerStyles:string}) => {
  return (
    <nav className={`${containerStyles}`}>
    {Links.map((Link,index)=>{
        return ( <ScrollLink 
        offset={Link.offset}
        to={Link.target} 
        smooth
        spy
        activeClass='active'
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

export default Nav
