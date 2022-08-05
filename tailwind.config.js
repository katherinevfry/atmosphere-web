/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'cream': '#FFF9ED',
      'dark-green': '#093120',
      'green': '#0E7C4E',
      'pink': '#FFD7CB'
    },
    extend: {},
  },
  plugins: [],
}