/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#F10808",
        white: "#fff",
        darkgray: "#999",
        grayy: "#fafafa",
        seagreen: "#0b7046",
        seagreenlight: "#0E945C",
        black: "#000",
        red: {
          "100": "#f10808",
          "200": "#ff0000",
        },
        royalblue: "#007af5",
        blacks: "#000", // Assuming this was a typo, I corrected it to "blacks"
        whitesmoke: "#f4f5f7",
        gainsboro: "#e4e4e4",
        darkslategray: {
          "100": "#494949",
          "200": "#404040",
        },
        gray: {
          "100": "#fafafa",
          "200": "#0d062d",
          "300": "rgba(0, 0, 0, 0.2)",
        },
        silver: "#c5c5c5",
        slategray: "#787486",
        red: "F10808",
        {
  white: "#fff",
  darkgray: "#999",
  grayy: "#fafafa",
  seagreen: "#0b7046",
  seagreenlight: "#0E945C",
  black: "#000",
  red: {
    "100": "#f10808",
    "200": "#ff0000",
  },
  royalblue: "#007af5",
  blacks: "#000", // Assuming this was a typo, I corrected it to "blacks"
  whitesmoke: "#f4f5f7",
  gainsboro: "#e4e4e4",
}
        darkslategray: {
          "100": "#494949",
          "200": "#404040",
        },
        gray: {
          "100": "#fafafa",
          "200": "#0d062d",
          "300": "rgba(0, 0, 0, 0.2)",
        },
        silver: "#c5c5c5",
        slategray: "#787486",
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
        inter: "Inter",
      },
      borderRadius: {
        xl: "20px",
        "3xs": "10px",
        // Removed duplicate 'xl' key here
        "31xl": "50px",
      },
    },
    fontSize: {
      xs: "12px",
      base: "16px",
      lg: "18px",
      mini: "15px",
      // Removed duplicate 'xs' key here
      inherit: "inherit",
    },
    screens: {
      mq1325: {
        raw: "screen and (max-width: 1325px)",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
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