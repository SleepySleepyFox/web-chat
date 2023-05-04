/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,svg}",
  ],
  theme: {
    extend: {
      colors:{
        input: '#eeeeee',
        links: '#2D9CDB'
      },
      fontSize: {
        xxs: '0.625rem'
      },
    },
  },
  plugins: [],
}

