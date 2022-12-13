/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["var(--font-nunito)"],
        josefin: ["var(--font-josefin)"],
      },
      colors: {
        primary: {
          light: "#017caa",
          DEFAULT: "#018abd",
          dark: "#34a1ca",
        },
      },
    },
  },
  plugins: [],
};
