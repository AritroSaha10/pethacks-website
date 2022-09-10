/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        desc:['Gaegu', 'cursive;']
      },
      colors: {
        "pet-teal": "#264653",
        "pet-turquoise": "#2A9D8F",
        "pet-yellow": "#E9C46A",
        "pet-lightorange": "#F4A261",
        "pet-red": "#E76F51"
      }
    },
  },
  plugins: [],
}
