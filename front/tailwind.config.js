/* eslint quotes: ["error", "double"] */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: "#BC8034",
        lightGrey: "#C9C9C9",
        brown: "#583420",
        lightBrown: "#765948",
        darkBrown: "#392525",
        swamp: "#274747",
        beige: "#F1E5D5",
      },
      fontFamily: {
        bubblegum: "'Bubblegum Sans', cursive",
        inter: "'Inter', sans-serif",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
  ],
};

