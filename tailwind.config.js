/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#146EF5",
        primary2: "#0055D4",
        dark: "#080808",
        dark2: "#898989",
        dark3: "#171717",
        success: "#22c55e",
      },
    },
  },
  plugins: [],
};
