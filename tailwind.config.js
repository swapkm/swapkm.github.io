/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    fontFamily: {
      sans: ['Inter Variable', 'sans-serif'],
      serif: ['Inter Variable', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}
