/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        '26px': '26px',
        '6px': '6px',
      },
      colors: {
        MAIN: "#1a1a1a",
        SEC: "#B2261E",
        THIRD: "#7F7D7D",
        FOURTH: "#D9D9D9",
        HOVER: "#E6B800",
        PrimFont: "#FFCC00",
        SecFont: "#FFFFFF",
      },
      fontFamily: {
        inria: ["'Inria Serif'", "serif"],
        kameron: ["'Kameron'", "serif"],
        lexend: ["'Lexend Exa'", "sans-serif"],
        jockey: ["'Jockey One'", "sans-serif"],
      },
    },
  },
  plugins: [],
}