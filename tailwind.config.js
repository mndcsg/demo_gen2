import { fontFamily } from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f9f1",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#90f0b5",
          400: "#52b788",
          500: "#2d6a4f",
          600: "#1b4332",
          700: "#163629",
          800: "#122a1e",
          900: "#0f2116",
        },
        dark: {
          50: "#f9f9f9",
          100: "#f0f0f0",
          200: "#e0e0e0",
          300: "#c0c0c0",
          400: "#a0a0a0",
          500: "#707070",
          600: "#505050",
          700: "#303030",
          800: "#1a1a1a",
          900: "#0a0a0a",
        },
        background: {
          DEFAULT: "#F8F7F4",
          dark: "#141414",
        },
      },
      fontFamily: {
        display: ["Playfair Display", ...fontFamily.serif],
        body: ["Geist", ...fontFamily.sans],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "1" }],
      },
      spacing: {
        "128": "32rem",
      },
    },
  },
  plugins: [],
};