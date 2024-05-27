/** @type {import('tailwindcss').Config} */
import form from "@tailwindcss/forms";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#edf2f8",
      secondary: " #00007A",
      black: "#00000",
      "lightGray-color": " #e4e4e4",
      "gray-color": "#333333",
      "brown-color": "#46364a",
      "white-color": "#F7F7F7",
    },
    backgroundImage: {
      "mobile-bg": "url('assets/bgWhite.png')",
      "header-bg": "url('assets/bgIMG.png')",
    },
    screens: {
      xxs: "300px",
      xs: "450px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "2000px",
    },
    extend: {
      fontFamily: {
        palanquin: ["Palanquin", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        "custom-hover": "0 0 25px rgba(0, 0, 0, 0.2)",
        "skills-hover": "0 0 25px #F7F7F7",
        "test-shadow": "0 0 30px rgba(0, 0, 0,0.1)",
      },
      borderColor: {
        "white-rgba-18": "rgba(255, 255, 255, 0.18)",
      },
      grayscale: {
        0: "0",
        50: "50%",
        80: "80%",
        90: "90%",
        95: "95%",
        100: "100%",
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ["hover"],
    },
  },
  plugins: [
    form,
    function ({ addUtilities }) {
      addUtilities({
        ".backdrop-blur-4": {
          "backdrop-filter": "blur(4px)",
        },
      });
    },
  ],
};
