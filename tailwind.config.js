/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        scgblack: "#000000",
        scgwhite: "#ffffff",
        scgred: "#dc2626",
        scgoff: "#e5e5e5",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["'Bebas Neue'", "Impact", "sans-serif"],
      },
      boxShadow: {
        redglow: "0 0 40px rgba(220, 38, 38, 0.45)",
      },
    },
  },
  plugins: [],
};
