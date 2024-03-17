/** @type {import('tailwindcss').Config} */
export default {
  purge: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode: "class",
  content: [],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
