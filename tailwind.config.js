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
        cream: "var(--cream)",
        "dark-cream": "var(--dark-cream)",
        rose: "var(--rose)",
        sage: "var(--sage)",
        "dark-gray": "var(--dark-gray)",
      },
      fontFamily: {
        sans: "var(--font-sans)",
        serif: "var(--font-serif)",
        accent: "var(--font-accent)",
      },
    },
  },
  plugins: [],
};
