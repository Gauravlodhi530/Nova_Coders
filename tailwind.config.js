// tailwind.config.js
const {heroui} = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@heroui/theme/dist/components/(button|ripple|spinner).js",
  ],
  theme: {
    extend: {
      fontFamily: {
        // You can choose any name you like, I'm using short, clear ones here
        bitcount: ['"Bitcount Grid Double Ink"', 'sans-serif'],
        roboto: ['"Roboto Slab"', 'serif'],
        sharetech: ['"Share Tech"', 'sans-serif'],
      },
      keyframes: {
        keyframes: {
          spin: {
            "0%": { transform: "rotate(0deg)" },
            "100%": { transform: "rotate(360deg)" },
          },
          spinReverse: {
            "0%": { transform: "rotate(360deg)" },
            "100%": { transform: "rotate(0deg)" },
          },
        },
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "spin-slower": "spin 6s linear infinite",
      },

    },
  },
  darkMode: "class",
  plugins: [],
};
