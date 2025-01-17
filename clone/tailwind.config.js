/** @type {import('tailwindcss').Config} */
module.exports = {
  // Specify the files to scan for classes
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      // Custom colors - you can adjust these to match your brand
      colors: {
        'primary': {
          DEFAULT: '#4169e1', // Royal blue, adjust to match your brand
          'light': '#6188ff',
          'dark': '#2851c7',
        },
      },
      // Custom spacing if needed
      spacing: {
        'navbar': '4rem', // Height for navbar
      },
      // Custom screen breakpoints if needed
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      // Custom box shadow
      boxShadow: {
        'navbar': '0 2px 4px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
}