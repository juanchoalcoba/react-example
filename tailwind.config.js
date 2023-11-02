/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '3px 2px 4px 0 rgba(255,255 ,255, 0.6)',
      },
    },
  },
  plugins: [],
}