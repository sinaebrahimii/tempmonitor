/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        madison: {
          50: "#ecf8ff",
          100: "#d5eeff",
          200: "#b4e3ff",
          300: "#80d3ff",
          400: "#44b7ff",
          500: "#1994ff",
          600: "#0173ff",
          700: "#005bfa",
          800: "#0449c9",
          900: "#0b429d",
          950: "#0d2c67",
        },
        "la-palma": {
          50: "#f1fce9",
          100: "#e1f8cf",
          200: "#c3f2a4",
          300: "#9de76f",
          400: "#7ad843",
          500: "#5abe24",
          600: "#3c8816",
          700: "#347417",
          800: "#2d5c18",
          900: "#294e19",
          950: "#112b08",
        },
        "alizarin-crimson": {
          50: "#fff2f1",
          100: "#ffe3e0",
          200: "#ffcbc6",
          300: "#ffa79e",
          400: "#ff7466",
          500: "#fd4836",
          600: "#e62714",
          700: "#c6200f",
          800: "#a31e11",
          900: "#871f15",
          950: "#4a0b05",
        },
      },
    },
  },
  plugins: [],
};
