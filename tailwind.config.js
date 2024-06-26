/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sans": ['Comfortaa', 'cursive'],
        "dancing-script": ['Dancing Script', 'cursive']
      }
    },
  },
  plugins: [],
}

