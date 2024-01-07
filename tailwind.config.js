/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.jsx"
  ],
  theme: {
    extend: {
      backgroundImage: {
        triangle: 'url(./bg-triangle.svg)',
        backgroundGradient: "radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%))",
        rockGradient: "radial-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))",
        paperGradient: "radial-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))",
        scissorsGradient: "radial-gradient(hsl(39, 89%, 49%) ,hsl(40, 84%, 53%))"
      },
      fontFamily: {
        sans: '"Barlow Semi Condensed", sans-serif'
      },
      colors: {
        text1: "hsl(229, 25%, 31%)",
        text2:"hsl(229, 64%, 46%)",
        headerOutline: "hsl(217, 16%, 45%)",
        rockShade: "hsl(346, 74%, 35%)",
        paperShade: "hsl(229, 66%, 45%)",
        scissorsShade: "hsl(28, 77%, 44%)",
        innerShade: "hsl(229, 19%, 77%)"
      }
    },
  },
  plugins: [],
}

