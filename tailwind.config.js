// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue,svelte}", // sesuaikan framework
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#22c55e',
          700: '#15803d',
        },
        secondary: {
          500: '#0288d1',
          700: '#01579b',
        },
        accent: {
          500: '#fbc02d',
          700: '#f57f17',
        },
        background: '#f9fbe7',
        text: '#333333',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Nunito Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
