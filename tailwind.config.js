/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#00D4FF",
        dark: "#0a0a0a",
      },
      fontFamily: {
        display: ['"Archivo Black"', "sans-serif"],
        script: ['"Pacifico"', "cursive"],
        body: ['"Inter Tight"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
