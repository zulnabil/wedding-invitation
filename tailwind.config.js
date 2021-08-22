module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxHeight: {
        100: "28rem",
      },
      cursor: {
        grab: "grab",
        grabbing: "grabbing",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
