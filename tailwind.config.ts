import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/templates/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          700: '#121214',
          900: '#0a0a0a'
        },
        green: '#023D29'
      },
      fontFamily: {
        nunito: ['var(--font-nunito)'],
      },
      maxWidth: {
        userView: '80rem'
      },
      width: {
        userView: '80rem'
      },
      backgroundImage: {
        'custom-radial': 'radial-gradient(circle, #023D29 0%, #0a0a0a 45%)',
      },
      keyframes: {
        pulseBG: {
          '0%': { backgroundImage: 'radial-gradient(circle, #023D29 0%, #0a0a0a 45%)' },
          '25%': { backgroundImage: 'radial-gradient(circle, #023D29 0%, #0a0a0a 44.5%)' },
          '50%': { backgroundImage: 'radial-gradient(circle, #023D29 0%, #0a0a0a 44%)' },
          '75%': { backgroundImage: 'radial-gradient(circle, #023D29 0%, #0a0a0a 43.5%)' },
          '100%': { backgroundImage: 'radial-gradient(circle, #023D29 0%, #0a0a0a 44%)' },
        },
      },
      animation: {
        pulseBG: 'pulseBG 1.2s infinite ease-in-out',
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;
