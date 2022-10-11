/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      sans: ["Josefin Sans", "sans-serif"],
    },
    fontSize: {
      sm: ["14px", "20px"],
      base: ["12px", "24px"],
      lg: ["20px", "28px"],
      lg: [
        "26px",
        {
          letterSpacing: "10px",
          fontWeight: "700",
          lineHeight: "50px",
        },
      ],
      xl: [
        "40px",
        {
          letterSpacing: "15px",
          fontWeight: "700",
        },
      ],
    },
    extend: {
      colors: {
        veryLightGray: "hsl(0, 0%, 98%)",
        veryLightGrayishBlue: "hsl(236, 33%, 92%)",
        LightGrayishBlue: "hsl(233, 11%, 84%)",
        darkGrayishBlue: "hsl(236, 9%, 61%)",
        veryDarkGrayishBlue: "hsl(235, 19%, 35%)",
        veryDarkBlue: "hsl(235, 21%, 11%)",
        veryDarkDesaturatedBlue: "hsl(235, 24%, 19%)",
        lightGrayishBlue: "hsl(234, 39%, 85%)",
        lightGrayishBlueHover: "hsl(236, 33%, 92%)",
        darkGrayishBlue: "hsl(234, 11%, 52%)",
        veryDarkGrayishBlue: "hsl(233, 14%, 35%)",
        veryDarkGrayishBlue: "hsl(237, 14%, 26%)",
      },
      backgroundImage: {
        mobile: "url('/images/bg-light-mobile.jpg')",
        desk: "url('/images/bg-light-desk.png')",
      },
      screens: {
        sm: "320px",
        // => @media (min-width: 375px) { ... }
        md: "600px",
        lg: "900px",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
