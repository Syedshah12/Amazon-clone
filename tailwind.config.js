/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'goldish':"#FFD814",
        'dark':"#F7CA00",
        "orangish":"#C45500",
        "darkBlusish":"#131921",
         "light-gray":"#E6E6E6",
         "dark-gray":"#D4D4D4",
         "light-orangish":"#FEBD69",
         "dark-orangish":"#F3A847",
         "light-bluish" :"#232F3E",
         "light-gray":"#E3E6E6",
         "red_darkish":"#CC0C39"
      }
    },
  },
  plugins: [],
}