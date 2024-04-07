/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        DarkColors: {
          50: "#6F757C",
          100: "#1B1D1F",
          200: "#111315",
        },
        LightColors: {
          50: "#FEF7EE",
          100: "#F6C768",
          200: "#ED735D",
          300: "#BEE3CC"
        }

      }
    },
  },
  plugins: [],
}