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
      teal: colors.teal,
      lightBlue: colors.lightBlue,
    },
    fontFamily: {
      sans: ["Barlow", "sans-serif"],
      display: ["Philosopher", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        cloud: "url('/cloud.svg')",
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
      maxWidth: {
        lg: "30rem",
      },
      minHeight: {
        38: "38rem",
      },
      padding: {
        "1/5": "20%",
        "1/4": "25%",
        "1/3": "33.3%",
        "3/8": "37.5%",
        "1/2": "50%",
        "2/3": "66.6%",
        "3/4": "75%",
      },
      transitionDelay: {
        0: "0ms",
        1500: "1500ms",
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
        messageSent: {
          "0%": { opacity: "1", transform: "scale(1) rotate(0)" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0", transform: "scale(0) rotate(-90deg)" },
        },
      },
      animation: {
        star: "star 3 linear both",
        messageSent: "messageSent 0.75s cubic-bezier(0.6, 0, 0.8, 0.5) both",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
