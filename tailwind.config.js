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
        black: "#000",
        red: {
          "100": "#fe1e1e",
          "200": "#f10808",
          "300": "#ff0000",
        },
        royalblue: "#007af5",
        blacks: "#000", 
        whitesmoke: "#f4f5f7",
        darkgray: "#999",
        seagreen: {
          "100": "#208957",
          "200": "#0b7046",
        },
        gainsboro: {
          "100": "#ede3e3",
          "200": "#e4e4e4",
        },
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
        darkorange: "#f18200",
        dimgray: {
          "100": "#727272",
          "200": "#716f6f",
          "300": "#6f6f6f",
          "400": "#7d5a5a",
          "500": "rgba(81, 76, 76, 0.33)",
        },
        blue: "#000aff",
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
        inter: "Inter",
      },
      borderRadius: {
        "xl": "20px",
        "3xs": "10px",
        "6xs": "7px",
        "8xs": "5px",
        "31xl": "50px",
      },
    },
    fontSize: {
      xs: "12px",
      base: "16px",
      lg: "18px",
      mini: "15px",
      "2xs": "11px",
      "4xs": "9px",
      inherit: "inherit",
    },
    screens: {
      mq1325: {
        raw: "screen and (max-width: 1325px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
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
