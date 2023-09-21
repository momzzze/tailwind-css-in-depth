import animationDelay from './src/plugins/animationDelay';
import buttonPlugin from './src/plugins/buttonPlugin';
import openVariant from './src/plugins/openVariant';
import tableCaption from './src/plugins/tableCaption';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        wavey:{
          "0%, 100%": { transform: "scaleY(0.5)" },
          "50%": { transform: "scaleY(1.5)" },
        }
      },
      animation:{
        wavey: "wavey 1s linear infinite",
      },      
    },
  },
  plugins: [openVariant,animationDelay,tableCaption,buttonPlugin],
}

