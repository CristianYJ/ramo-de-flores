/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  theme: {
    extend: {
      rotate: {
        'x-180': '180deg',
      },
      transform: {
        'preserve-3d': 'preserve-3d',
      }
    }
  }
}

