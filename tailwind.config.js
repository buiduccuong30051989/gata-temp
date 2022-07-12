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
      brands: {
        primary: "#18b69b",
        secondary: colors.gray[200],
        info: colors.blue[400],
        success: colors.lime[500],
        warning: colors.yellow[400],
        danger: colors.rose[500],
      },
      ...colors,
      primary: {
        DEFAULT: "#18B69B",
        50: "#e8f8f5",
        100: "#CBF8F0",
        200: "#83EFDC",
        300: "#3BE5C8",
        400: "#18B69B",
        500: "#16A48C",
        600: "#13927C",
        700: "#11806D",
        800: "#0E6E5E",
        900: "#0C5C4E",
      },
      success: {
        ...colors.emerald,
      },
      info: {
        ...colors.sky,
      },
      warning: {
        ...colors.orange,
      },
      danger: {
        ...colors.red,
      },
    },
    extend: {
      fontFamily: {
        git: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        rupik: '"Rubik", "sans-serif"',
      },
    },
  },
  plugins: [],
};
