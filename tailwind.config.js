/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows:{
        'custom-2': '2fr 3fr'
      },
      flex:{
        2: '2 2 0%',
        3: '3 2 0%'
      },
      colors:{
        'background1': '#F1EEE5',
      },
      backgroundColor:{
        'background1':'#135040',
        'gradient1': 'radial-gradient(68.85% 96.18% at 50.00% 3.79%, #ECC785 0%, rgba(0, 0, 0, 0.00) 100%), #135040',
      },
      letterSpacing:{
        '1': '0.2em'
      },
      backgroundImage:{
        gradientimg: 'radial-gradient(68.85% 96.18% at 50.00% 3.79%, #ECC785 0%, rgba(0, 0, 0, 0.00) 100%)'
      },
      boxShadow:{

      },
      boxShadowColor:{
        gray: '#1b1b1b'
      }
    },
  },
  plugins: [],
}

