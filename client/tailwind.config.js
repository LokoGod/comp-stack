/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        turquoise: '#41E2BA', // Light green
        seasalt: '#F7F7F9', // white
        aureolin: '#F7E733', // yellow
        cyclamen: '#E86A92', // pink
        spaceCadet: '#2B2D42', // blackish
      }
    },
  },
  plugins: [],
}