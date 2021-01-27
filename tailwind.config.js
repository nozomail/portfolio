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
      textShadow: {
        md: "0px 3px 10px rgba(0, 0, 0, 0.3)",
      },
      inset: {
        "1/5": "20%",
        "1/7": "14.2%",
        "1/10": "10%",
        "1/20": "5%",
      },
      fontSize: {
        "10xl": "10rem",
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
  plugins: [require("tailwindcss-textshadow")],
};
