/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      sans: ["Josefin Sans", "sans-serif"],
    },
    fontSize: {
      xs: [
        "12px",
        {
          lineHeight: "16px",
        },
      ],
      sm: ["14px"],
      md: [
        "18px",
        {
          lineHeight: "24px",
        },
      ],
      // base: ["12px", "24px"],
      lg: [
        "28px",
        {
          letterSpacing: "10px",
          fontWeight: "700",
          // lineHeight: "50px",
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
        md: "600px",
      },
      boxShadow: {
        "2md": "0 35px 50px -15px rgba(194, 195, 214, 0.5)",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
