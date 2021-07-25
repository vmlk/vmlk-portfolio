module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      blue: {
        light: "#F6F3F6",
        DEFAULT: "#d8c7d8",
        dark: "#221A23",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
