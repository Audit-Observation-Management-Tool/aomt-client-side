/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#f4f5f7",
        white: "#fff",
        darkgray: "#999",
        grayy: "#fafafa",
        seagreen: "#0b7046",
        seagreenlight: "#0E945C",
        black: "#000",
        red: "#f10808",
        black: "#000",
        gainsboro: "#e4e4e4",
        darkslategray: "#404040",
        gray: "rgba(0, 0, 0, 0.2)",
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
      },
      borderRadius: {
        "3xs": "10px",
         xl: "200px",
        "31xl": "50px",
      },
    },
    fontSize: {
      lg: "18px",
      mini: "15px",
      xs: "12px",
      base: "16px",
      inherit: "inherit",
    },
    screens: {
      mq1325: {
        raw: "screen and (max-width: 1325px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
