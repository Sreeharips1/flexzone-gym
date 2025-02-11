import { Oswald } from "next/font/google";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center:true,
      padding:'15px',
    },
    screens: {
      sm:'640px',
      md:'768px',
      lg:'1024px',
      xl:'1400px',
    },
    fontFamily: {
      oswald: ["Oswald", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
   
    },
    backgroundImage:{
      hero:'url(/assets/img/hero/hero1.png)',
      membership:'url(/assets/img/membership/bg.jpg)',
    },
    extend: {
      colors:{
        primary:{
          DEFAULT:'#333',
          100:'#484848',
          200:'#151515',
          300:'#111',

        },
        accent:'#d4000d',
        
      },
    },
  },
  plugins: [],
} satisfies Config;