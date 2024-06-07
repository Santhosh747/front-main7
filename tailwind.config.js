/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-01": "#000",
        lime: "rgba(66, 255, 0, 0.28)",
        forestgreen: "#00ac4f",
        white: "#fff",
        gray: {
          "100": "#808080",
          "200": "#050000",
          "300": "#030000",
          "400": "#0e0000",
          "700": "rgba(24, 39, 36, 0.8)",
        },
        springgreen: "#01ff57",
        mediumseagreen: "#1ac469",
        dimgray: {
          "100": "#666",
          "200": "rgba(101, 94, 94, 0)",
        },
        darkslategray: "#082e10",
        gainsboro: "#d9d9d9",
        silver: "#bfbfbf",
        limegreen: {
          "100": "#34cc54",
          "200": "#1ab33b",
        },
        "gray-03": "#659372",
        "green-primary": "#5db075",
        "material-you-state-layers-light-on-secondary-fixed-opacity-012":
          "rgba(20, 27, 44, 0.12)",
        "android-navigation-light": "#949494",
        "android-gray-light": "#5f6368",
        snow: "#fffbfb",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        "ui-16-semi": "Inter",
        roboto: "Roboto",
      },
      borderRadius: {
        lg: "18px",
        "11xl": "30px",
        "base-8": "15.8px",
        "2xl": "21px",
        "7xs-6": "5.6px",
        "120xl-7": "139.7px",
        "xs-2": "11.2px",
        "81xl": "100px",
        mini: "15px",
        "base-2": "16.2px",
      },
    },
    fontSize: {
      "5xl": "24px",
      lgi: "19px",
      "lg-9": "18.9px",
      "11xl": "30px",
      lg: "18px",
      "mid-9": "17.9px",
      mini: "15px",
      xl: "20px",
      base: "16px",
      "31xl": "50px",
      "17xl": "36px",
      "3xl": "22px",
      "10xl": "29px",
      "15xl": "34px",
      "8xl": "27px",
      "3xl-4": "22.4px",
      "22xl-9": "41.9px",
      sm: "14px",
      "9xl": "28px",
      "5xl-4": "24.4px",
      "9xl-4": "28.4px",
      "4xl": "23px",
      "29xl-7": "48.7px",
      "20xl": "39px",
      "13xl-4": "32.4px",
      "41xl-8": "60.8px",
      inherit: "inherit",
    },
    screens: {
      mq1825: {
        raw: "screen and (max-width: 1825px)",
      },
      mq1800: {
        raw: "screen and (max-width: 1800px)",
      },
      mq1525: {
        raw: "screen and (max-width: 1525px)",
      },
      mq1450: {
        raw: "screen and (max-width: 1450px)",
      },
      mq1425: {
        raw: "screen and (max-width: 1425px)",
      },
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1325: {
        raw: "screen and (max-width: 1325px)",
      },
      mq1225: {
        raw: "screen and (max-width: 1225px)",
      },
      lg: {
        max: "1200px",
      },
      mq1150: {
        raw: "screen and (max-width: 1150px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq950: {
        raw: "screen and (max-width: 950px)",
      },
      mq925: {
        raw: "screen and (max-width: 925px)",
      },
      mq850: {
        raw: "screen and (max-width: 850px)",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
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
