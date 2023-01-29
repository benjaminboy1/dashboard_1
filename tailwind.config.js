/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,json}",
  ],
  theme: {
    extend: {
      colors:{
        "slate": "rgb(15 23 42);",
      },
    },
  },
  plugins: [],
}
