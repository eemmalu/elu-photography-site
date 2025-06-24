/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg1: "var(--cream)",
        bg2: "var(--dark-cream)",
        primary: "var(--color-rose)",
        accent: "var(--color-sage)",
        neutral: "var(--color-dark-gray)",
      },
      fontFamily: {
        sans: "var(--font-sans)",
        serif: "var(--font-serif)",
        accent: "var(--font-accent)"
      },
    },
  },
  plugins: [],
};
