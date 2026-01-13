/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamiy: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
