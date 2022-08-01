const colors = require("tailwindcss/colors");
module.exports = {
  darkMode: "class",
  important: "body",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  safelist: [
    {
      pattern: /./,
    },
  ],
  theme: {
    colors: {
      ...colors,
      success: {
        ...colors.green,
        900: "#00783E",
        400: "#47B881",
        100: "#D4EEE2",
        50: "#F1FAF5",
        "gradient-400": "linear-gradient(180deg, #23C277 0%, #399D6C 100%)",
        "gradient-500":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05)), linear-gradient(180deg, #23C277 0%, #399D6C 100%)",
        "gradient-900": "linear-gradient(180deg, #208A58 1.91%, #329966 100%)",
      },
      info: {
        ...colors.sky,
        900: "#084B8A",
        400: "#1070CA",
        100: "#DBEAF7",
        50: "#F6F9FD",
        "gradient-400": "linear-gradient(360deg, #116AB8 0%, #0788DE 100%)",
        "gradient-500":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05)), linear-gradient(360deg, #116AB8 0%, #0788DE 100%)",
        "gradient-900": "linear-gradient(360deg, #1663A7 0.22%, #0F5A8C 100%)",
      },
      warning: {
        ...colors.orange,
        900: "#95591E",
        400: "#D9822B",
        100: "#FAE3CD",
        50: "#FDF8F3",
        "gradient-400": "linear-gradient(180deg, #EE9913 0%, #D9822B 100%)",
        "gradient-500":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05)), linear-gradient(180deg, #EE9913 0%, #D9822B 100%)",
        "gradient-900": "linear-gradient(180deg, #A76A0B 0.78%, #C4701C 100%)",
      },
      danger: {
        ...colors.red,
        900: "#BF0E08",
        400: "#EC4C47",
        100: "#FAE2E2",
        50: "#FEF6F6",
        "gradient-400": "linear-gradient(180deg, #EE5029 0%, #EC4C47 100%)",
        "gradient-500":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05)), linear-gradient(180deg, #F16F4F 0%, #EC4C47 100%)",
        "gradient-900": "linear-gradient(180deg, #EC4C47 0%, #D64540 97.57%)",
      },
      yellow: {
        ...colors.yellow,
        900: "#7E6514",
        400: "#F7D154",
        100: "#FBE6A2",
        50: "#FEF8E7",
      },
      teal: {
        ...colors.teal,
        900: "#007489",
        400: "#14B5D0",
        100: "#D2EEF3",
        50: "#F1FBFC",
      },
      purple: {
        ...colors.purple,
        900: "#37248F",
        400: "#735DD0",
        100: "#EAE7F8",
        50: "#F8F7FC",
      },
      slate: {
        ...colors.slate,
        900: "#234361", // dakest
        800: "#425A70", // dark
        700: "#66788A", // muted dark
        400: "#E4E7EB", // light
        200: "#E4E7EB", // muted
        100: "#F5F6F7", // lighter
        50: "#FAFAFA", // lightest
      },
      aqua: {
        50: "rgba(16, 112, 202, 0.08)",
      },
      light: {
        100: "rgba(67, 90, 111, 0.06)",
        "gradient-100":
          "linear-gradient(360deg, #F4F5F7 0%, #FFFFFF 100%), #FFFFFF",
        "gradient-200":
          "linear-gradient(360deg, #EAECEE 0%, #FAFBFB 100%), #FFFFFF",
      },
    },
    extend: {
      fontFamily: {
        git: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        rupik: '"Rubik", "sans-serif"',
      },
      boxShadow: {
        100: "0px 0px 1px rgba(67, 90, 111, 0.47)",
        200: "0px 0px 1px rgba(67, 90, 111, 0.415)",
        "inset-100": "inset 0px 1px 1px rgba(67, 90, 111, 0.09)", // active regular button
        "inset-200": "inset 0px 1px 2px rgba(67, 90, 111, 0.2)", // form
        "inset-1": "inset 0px -1px 1px rgba(67, 90, 111, 0.2)", // default button
        "inset-2": "inset 0px -1px 1px rgba(67, 90, 111, 0.09)", // focus/hover button
        "inset-3": "inset 0px 1px 1px rgba(67, 90, 111, 0.2)", // active button
      },
      borderRadius: {
        DEFAULT: "3px",
      },
    },
  },
  plugins: [],
};
