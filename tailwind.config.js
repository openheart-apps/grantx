const { transform } = require('next/dist/build/swc');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      animation: {
        tilt:"tilt 10s infinite linear"
      },
      keyframes: {
        tilt: {
          "0%,50%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%,":{
            transform: "rotate(10deg)",
          },
          "75%,":{
            transform: "rotate(-10deg)"
          }
        }
      }
    },
  },
  plugins: [],
}

