/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "main-100": "#e6ecdb",
        "main-500": "#799A55",
        "main-900": "#323f28",
        footer: "#232323",
      },
      backgroundImage: {
        "hero-pattern": "url('./assets/wiggle.svg')",
        "image-bg": "url('./assets/trees-bg.jpg')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
