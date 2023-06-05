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
      trinary: "#dfeeff",
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
      inter: ["var(--font-inter)"],
      fugaze: ["var(--font-fugaze_one)"],
    },
    extend: {
      backgroundImage: {
        "main-bg-gradient":
          "linear-gradient(0deg, rgba(206,221,242,1) 0%, rgba(241,242,248,1) 86%)",
        "main-gradient":
          "linear-gradient(90deg, hsla(228, 17%, 53%, 1) 0%, hsla(229, 28%, 88%, 1) 100%)",
      },
      screens: {
        mdmin1050: { min: "1050px" },
        mdmin960: { min: "960px" },
        mdmax800: { max: "800px" },
        mdmin720: { min: "720px" },
      },
    },
  },
  plugins: [],
};
