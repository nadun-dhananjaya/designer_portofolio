/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        galactic_blue: "#755CDE",
        summer_yellow: "#F6A560",
        light_pink: "#F39E9E",
        light_red: "#EB7565",
        cyan: "#61C4B7",
        indigo: "#552049",
        black: "#030303",
        medium_brown: "#7A746E",
        light_cream: "#FFF7F0",
      },
      container: {
        // screens: {
        //   sm: "576px",
        //   md: "768px",
        //   lg: "992px",
        //   xl: "1111px",
        //   // "2xl": "1111px",
        // },
      },
      screens: {
        xs: "375px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1111px",
      },
      aspectRatio: {
        "1/1.1": "1/1.1",
      },
    },
    fontFamily: {
      jakarta: ["Plus Jakarta Sans", "sans-serif"],
    },
  },
  plugins: [],
};
