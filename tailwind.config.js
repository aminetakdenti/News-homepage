/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {},
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      SoftOrange: "hsl(35, 77%, 62%)",
      SoftRed: "hsl(5, 85%, 63%)",
      OffWhite: "hsl(36, 100%, 99%)",
      GrayishBlue: "hsl(233, 8%, 79%)",
      Darkgrayishblue: "hsl(236, 13%, 42%)",
      VeryDarkBlue: "hsl(240, 100%, 5%)",
      Overllay: "rgba(0, 0, 0, .6)",
    },
  },
  plugins: [],
};
