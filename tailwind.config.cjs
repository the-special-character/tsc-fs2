/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
  ],
  theme: {
    colors: {
      primary: '#064EA4',
      secondary1: '#E1EDFB',
      secondary2: '#FCDF69',
      secondary3: '#F99D77',
      neutral: {
        100: '#FFFFFF',
        200: '#F9FAFB',
        300: '#E7EAEE',
        400: '#BECAD7',
        500: '#8096B0',
        600: '#62778F',
        700: '#1E3D60',
        800: '#1E3D60',
      }
    },
    fontSize: {
      "10xl": ["60px", "1.3em"],
      "9xl": ["50px", "1.3em"],
      "8xl": ["42px", "1.3em"],
      "7xl": ["38px", "1.289em"],
      "6xl": ["35px", "1.3em"],
      "5xl": ["32px", "1.289em"],
      "4xl": ["26px", "1.289em"],
      "3xl": ["24px", "1.5em"],
      xxl: ["22px", "1.5em"],
      xl: ["20px", "1.5em"],
      lg: ["18px", "1.5em"],
      base: ["16px", "1.444em"],
      sm: ["15px", "1.6em"],
      xs: ["14px", "1.5em"],
    },
    fontFamily: {
      "serif": ['Newsreader', "serif"],
      "sans": ['Kumbh Sans', "sans-serif"],
    },
    extend: {
      aspectRatio: {
        image: '4 / 3',
        vimage: '3 / 4',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
