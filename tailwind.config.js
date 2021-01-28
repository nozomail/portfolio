const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: false,
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      indigo: colors.indigo,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
      orange: colors.orange,
      emerald: colors.emerald,
    },
    fontFamily: {
      sans: ["Barlow", "sans-serif"],
      display: ["Philosopher", "sans-serif"],
    },
    extend: {
      inset: {
        "1/5": "20%",
        "1/7": "14.2%",
        "1/10": "10%",
        "1/20": "5%",
      },
      fontSize: {
        "10xl": "10rem",
      },
      padding: {
        "1/4": "25%",
        "1/3": "33.3%",
        "3/8": "37.5%",
        "1/2": "50%",
        "2/3": "66.6%",
        "3/4": "75%",
        full: "100%",
      },
      screens: {
        portrait: { raw: "(max-width: 639px) and (orientation: portrait)" },
        landscape: { raw: "(max-width: 639px) and (orientation: landscape)" },
        smPortrait: { raw: "(min-width: 640px) and (max-width: 767px) and (orientation: portrait)" },
        smLandscape: { raw: "(min-width: 640px) and (max-width: 767px) and (orientation: landscape)" },
      },
      keyframes: {
        star: {
          "0%, 10%, 100%": { opacity: "0" },
          "5%": { opacity: "1" },
        },
      },
      animation: {
        star: "star 3 linear both",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
