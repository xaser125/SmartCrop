/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        earth: {
          50: '#f6f7f4',
          100: '#e7eadd',
          200: '#cfd8be',
          300: '#b0c097',
          400: '#90a470',
          500: '#738a53',
          600: '#586b3e',
          700: '#455532',
          800: '#38442b',
          900: '#2f3925',
          950: '#171e10',
        },
        clay: {
          50: '#f8f6f5',
          100: '#efebe7',
          200: '#dfd4cd',
          300: '#cbb4a9',
          400: '#b48f81',
          500: '#a37361',
          600: '#976150',
          700: '#7f4f41',
          800: '#684237',
          900: '#55372e',
          950: '#2d1b16',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
