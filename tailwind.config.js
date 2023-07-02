/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'background1': '#F1EEE5',
      },
      backgroundColor:{
        'background1':'#F1EEE5',
      }
    },
  },
  plugins: [],
}

