import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        black: {
          900: 'rgba(0,0,0,1)'
        },
        green: 'rgba(2,61,41,1)'
      },
      fontFamily: {
        nunito: ['var(--font-nunito)'],
      },
      backgroundImage: {
        'custom-radial': 'radial-gradient(circle, rgba(2,61,41,1) 0%, rgba(0,0,0,1) 45%)',
      },
      keyframes: {
        pulseBG: {
          '0%': { backgroundImage: 'radial-gradient(circle, rgba(2,61,41,1) 0%, rgba(0,0,0,1) 45%)' },
          '25%': { backgroundImage: 'radial-gradient(circle, rgba(2,61,41,1) 0%, rgba(0,0,0,1) 44.5%)' },
          '50%': { backgroundImage: 'radial-gradient(circle, rgba(2,61,41,1) 0%, rgba(0,0,0,1) 44%)' },
          '75%': { backgroundImage: 'radial-gradient(circle, rgba(2,61,41,1) 0%, rgba(0,0,0,1) 43.5%)' },
          '100%': { backgroundImage: 'radial-gradient(circle, rgba(2,61,41,1) 0%, rgba(0,0,0,1) 44%)' },
        },
      },
      animation: {
        pulseBG: 'pulseBG 1.2s infinite ease-in-out',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
