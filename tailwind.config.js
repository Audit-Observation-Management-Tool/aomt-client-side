/** @type {import('tailwindcss').Config} */
module.exports = {

  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#fafafa",
          "200": "#0d062d",
          "300": "rgba(0, 0, 0, 0.2)",
          "400": "#7f7f7f",
          "500": "#838383",
          "600": "#eeeeee",
          "900": "rgba(0, 0, 0, 0.78)",
        },
        red: {
          "100": "#fe1e1e",
          "200": "#f10808",
          "300": "#ff0000",
        },
        white: "#fff",
        gainsboro: {
          "100": "#ede3e3",
          "200": "#e4e4e4",
          "300": "#dcdcdc",
          "400": "#dadada",
        },
        seagreen: {
          "100": "#208957",
          "200": "#0b7046",
          "300": "#008c44",
        },
        lightgray: {
          "100": "#d7d7d7",
          "200": "#d4d4d4",
          "300": "#d2d2d2",
        },
        darkgray: {
          "100": "#b3b3b3",
          "200": "#999",
        },
        dimgray: {
          "100": "#727272",
          "200": "#716f6f",
          "300": "#6f6f6f",
          "400": "#7d5a5a",
          "500": "rgba(81, 76, 76, 0.33)",
          "600": "#545454",
          "700": "#525252",
        },
        gold: "#fad600",
        tomato: "#ff674c",
        deepskyblue: "#29d2ff",
        royalblue: "#007af5",
        black: "#000",
        silver: {
          "100": "#c5c5c5",
          "200": "#c2c2c2",
        },
        slategray: "#787486",
        darkslategray: {
          "100": "#494949",
          "200": "#404040",
        },
        whitesmoke: {
          "100": "#f4f5f7",
          "200": "#eee",
        },
        darkorange: "#f18200",
        blue: "#000aff",
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
        inter: "Inter",
      },
      borderRadius: {
        "3xs": "10px",
        mini: "15px",
        "8xs": "5px",
        "31xl": "50px",
        xl: "20px",
        "6xs": "7px",
      },
    },
    fontSize: {
      mini: "15px",
      "41xl": "60px",
      "2xs": "11px",
      mid: "17px",
      smi: "13px",
      sm: "14px",
      xl: "20px",
      base: "16px",
      xs: "12px",
      lg: "18px",
      "4xs": "10px",
      inherit: "inherit",
    },
    screens: {
      mq1325: {
        raw: "screen and (max-width: 1325px)",
      },
      mq1250: {
        raw: "screen and (max-width: 1250px)",
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
      mq750: {
        raw: "screen and (max-width: 750px)",
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
