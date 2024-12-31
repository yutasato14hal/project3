/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          50: '#ecfdf5',
          100: '#d1fae5',
          // ... other shades
          950: '#022c22',
        },
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          // ... other shades
          950: '#042f2e',
        },
        cyan: {
          50: '#ecfeff',
          100: '#cffafe',
          // ... other shades
          950: '#083344',
        },
      },
    },
  },
  plugins: [],
}

