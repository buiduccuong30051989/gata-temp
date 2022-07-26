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
        "gradient-400": "",
        "gradient-500": "",
        "gradient-900": "",
      },
      info: {
        ...colors.sky,
        900: "#084B8A",
        400: "#1070CA",
        100: "#084B8A",
        50: "#F6F9FD",
      },
      warning: {
        ...colors.orange,
        900: "#95591E",
        400: "#D9822B",
        100: "#FAE3CD",
        50: "#FDF8F3",
      },
      danger: {
        ...colors.red,
        900: "#BF0E08",
        400: "#EC4C47",
        100: "#FAE2E2",
        50: "#FEF6F6",
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
        900: "#234361",
        800: "#425A70",
        700: "#66788A",
        400: "#E4E7EB",
        200: "#E4E7EB",
        100: "#EDF0F2",
        50: "#EDF0F2",
      },
      aqua: {
        50: "rgba(16, 112, 202, 0.08)",
      },
      gradient: {
        success: 'linear-gradient(180deg, #23C277 0%, #399D6C 100%)',
        info: '',
        warning: '',
        danger: '',
        light: '',
      }
    },
    extend: {
      fontFamily: {
        git: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        rupik: '"Rubik", "sans-serif"',
      },
      boxShadow: {
        100: "0px 0px 1px rgba(67, 90, 111, 0.47)",
        200: "0px 0px 1px rgba(67, 90, 111, 0.415)",
        300: "0px 0px 1px rgba(67, 90, 111, 0.47)",
        400: "0px 0px 1px rgba(67, 90, 111, 0.47)",
        500: "0px 0px 1px rgba(67, 90, 111, 0.47)",
        "inset-100": "inset 0px 1px 1px rgba(67, 90, 111, 0.09)",
        "inset-200": "inset 0px 1px 2px rgba(67, 90, 111, 0.2)",
      },
    },
  },
  plugins: [],
};
