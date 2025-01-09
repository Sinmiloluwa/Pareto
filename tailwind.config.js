/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#666666',
        'background': '#f8f8f8',
        'primary': '#ec4f30',
        'secondary': '#494949',
        'accent': '#feedea',
        'nw1' : '#edf7f8',
        'nw2': '#e9e9ef',
        'con': '#FEDED8',
       },

       backgroundImage: {
        'bg-image': "url('/assets/bg.png')",
      },

       fontFamily: {
        sans: ['Poppins', 'sans-serif'], 
      },
       
    },
  },
  plugins: [],
};
