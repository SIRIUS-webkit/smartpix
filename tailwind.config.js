/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      black: "#000000",
      gray: {
        100: "#F9F9F9",
        200: "#F0F0F0",
        300: "#D1D5DB",
        400: "#666666",
        500: "#333333",
        600: "#0F172A", // extra
      },
      "form-border": "#e0e0e0",
      info: "#3FA2F7",
      positive: "#56C568",
      negative: "#EB5757",
      warning: "#FFC400",
      disable: "#979797",
      primary: "#1977F2",
      secondary: "#0C5FCC",

      slate: {
        50: "#F8FAFC",
        100: "#F1F5F9",
        200: "#E2E8F0",
        300: "#CBD5E1",
        400: "#94A3B8",
        500: "#64748B",
        600: "#475569",
        700: "#334155",
        800: "#1E293B",
        900: "#0F172A",
      },
    },
    fontFamily: {
      lato: ["Lato", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      backgroundImage: {
        "main-gradient":
          "linear-gradient(90deg, hsla(228, 17%, 53%, 1) 0%, hsla(229, 28%, 88%, 1) 100%)",
      },
    },
  },
  plugins: [],
};
