/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./node_modules/flowbite/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#243823',
        stone: {

              50:'#84BA3F1F',
             100:'#84BA3F',
             200:'#0E6936',
             300:'#0E6836',
             400:'#003D06',
             500:'#F0F6E8',
             600:'#F1F7EA4F',
             700:'#534a4b'



        },
        black:{
           50:"#817474",
           100:'#3B3A43',
           200:'#000000',
           300:'#3C3A43',
           400:'#000000CC',
           500:'#000000B2',
           600:"#1E1E1E",
           700:"#121212",

        },
        gray:{
          50:"#F1F0F0",
          100:"#D9D9D9",
          300:"#636363",
          400:"#5E5E5E",
          500:"#F1F3F5",
          600:"#96772C",
          700:"#6C757D",
          800:"#FAF9F9"
        },
        red:{
          100:"#C64816",
        },
        stone:{
          500:"#817574",
          600:"#5D5351",
          700:"#3B3A43",
        },
        green:{
          100:"#008000",
        },
        blue:{
          100:"#0E1284",
          200:"#2043C1",
        },
        orange:{
          50:'#FFE49F',
          100:'#EA9E08',
          200:'#D79109',
        },

      },
      container: {
        center: true,
        padding: "8rem",
    }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

