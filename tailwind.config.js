/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.jsx"
  ],
  theme: {
    extend: {
      backgroundImage: {
        triangle: 'url(./bg-triangle.svg)'
      },
      fontFamily: {
        sans: '"Barlow Semi Condensed", sans-serif'
      }
    },
  },
  plugins: [],
}

