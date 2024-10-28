/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*.js"],
  theme: {
    extend: {
      screens: {
        "sm": "320px",
        "sm-m": "375px",
        "sm-l": "425px",
        "sm-xl": "576px",
        "md": "768px",
        "lg": "992px",
        "xl": "1024px",
        "2xl": "1200px",
        "3xl": "1440px"
      },
      fontFamily: {
        "sans": ["Inter", "sans-serif"]
      },
      fontSize: {
        "md": ["16px", "24px"]
      },
      colors: {
        "black": "#111315",
        "balticsea": "#292c2d",
        "ironside": "#676767",
        "chalice": "#ababab",
        "lightgray": "#cfdddb",
        "moonraker": "#e4cded",
        "bubblegum": "#fac1d9",
        "powderblue": "#c2dbe9",
        "oyster": "#f1c8d0",
        "periwinkle": "#c9caef"
      },
      transitionDuration: {
        "375": "375ms"
      },
      transitionProperty: {
        "width": "width"
      }
    },
  },
  plugins: [],
}

