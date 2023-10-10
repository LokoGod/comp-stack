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
        turquoise: '#41E2BA',
        seasalt: '#F7F7F9',
        aureolin: '#F7E733',
        cyclamen: '#E86A92',
        spaceCadet: '#2B2D42',
      }
    },
  },
  plugins: [],
}