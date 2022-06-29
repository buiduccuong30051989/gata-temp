const colors = require("tailwindcss/colors");
module.exports = {
  darkMode: "class",
  important: "#__next",
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
        primary: colors.teal[400],
        secondary: colors.gray[200],
        info: colors.blue[400],
        success: colors.lime[500],
        warning: colors.yellow[400],
        danger: colors.rose[500],
      },
      ...colors,
      teal: {
        50: "#e8f8f5",
        400: "#18b69b",
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
