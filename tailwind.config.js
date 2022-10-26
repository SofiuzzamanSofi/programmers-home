/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  darkMode: 'media',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require('flowbite/plugin'),
  ],
}