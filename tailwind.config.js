/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      fontFamily: {
        popins:["Poppins","sans"]
      },
      colors: {
        primary: "#1a0dab",
        secondry:"#4d5156"
      }
    },
  },
  plugins: [],
}