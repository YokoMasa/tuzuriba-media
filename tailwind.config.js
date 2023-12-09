/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./layouts/**/*.html', './content/**/*.md'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['Shippori Mincho', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif']
      },
      colors: {
        'Tblue': {
          '50': '#f3f7fc',
          '100': '#e7f0f7',
          '200': '#c9deee',
          '300': '#9ac4df',
          '400': '#63a4cd',
          '500': '#3f89b8',
          '600': '#2e6e9b',
          '700': '#26577c',
          '800': '#234b69',
          '900': '#224058',
          '950': '#17293a',
        },
      }
    },
  },
  plugins: [],
}