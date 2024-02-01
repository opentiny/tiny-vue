/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '../../packages/react/src/**/*.{css,less,vue,js,jsx,ts,tsx}',
    '!../../packages/react/src/**/node_modules',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}