/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        'main-100': "#96BD6C",
        'main-500': "#799A55",
        'main-900': "#6D8F49",
        footer: "#232323",
      },
      backgroundImage: {
        'hero-pattern': "url('./assets/wiggle.svg')",
        'image-bg': "url('./assets/trees-bg.jpg')",
      },
    },
  },
  plugins: [],
};
