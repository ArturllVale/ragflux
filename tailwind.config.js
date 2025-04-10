/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4361ee',
        secondary: '#3a56d4',
        dark: {
          DEFAULT: '#1a1a2e',
          light: '#16213e'
        }
      }
    },
  },
  plugins: [],
}