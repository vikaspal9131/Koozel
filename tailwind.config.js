/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html"],
  theme: {
    extend: {
      colors: {
        customwhite: '#EDF1F4', // Add a custom blue color
        customGreen: '#10B981', // Add a custom green color
        customblack: '#101010', 
      },
    },
  },
  plugins: [],
}

