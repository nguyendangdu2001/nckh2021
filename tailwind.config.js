// const ar = require("@tailwindcss/aspect-ratio");s
module.exports = {
  mode: "jit",
  purge: {
    enable: true,
    content: ["./src/**/*.{js,jsx,ts,tsx,css}", "./index.html"],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("./src/plugin/border"),
  ],
};
