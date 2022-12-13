/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "1.75rem",
        md: "2rem",
        lg: "2.25rem",
        xl: "2.5rem",
        "2xl": "3rem",
      },
    },
    fontSize: {
      "2xs": ".625rem",
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.75rem",
      "4xl": "2rem",
      "5xl": "2.25rem",
      "6xl": "2.5rem",
      "7xl": "2.75rem",
    },
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
