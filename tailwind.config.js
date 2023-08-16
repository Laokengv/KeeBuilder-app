/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    base: true,
    styled: true,
    utils: true,
    rtl: false,
    prefix: "",
    logs: true,
  },
}

