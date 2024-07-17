import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '320px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'green': '#88C800',
      'greenlight': '#98D90E',
      'greendark': '#5F850D',
      'black': '#000000',
      'white': '#FFFFFF',
      'black-4': 'rgba(0, 0, 0, 0.4)',
      'black-2': 'rgba(0, 0, 0, 0.2)',
      'black-0': 'rgba(0, 0, 0, 0)',
      'dark-blue': '#002E47',
      'blue': '#0C74AE',
      'white-50': 'rgba(f, f, f, 0.4)',
      'dark-bg': '#020610',
      'blur-blue': 'rgba(0, 148, 255, 0.05)',
      'blur-yellow': 'rgba(255, 237, 0, 0.05)',
      'blur-green': 'rgba(136, 200, 0, 0.05)',
      'blur-red': 'rgba(255, 8, 8, 0.05)',
    },
    extend: {
      backgroundImage: {
       
      },
      height: {
        '40': '40rem',
      }
    },
  },
  plugins: [],
};
export default config;
