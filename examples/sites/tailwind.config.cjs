/** @type { import('tailwindcss').Config } */
module.exports = {
  presets: [require('@opentiny/vue-theme-saas/tailwind.config.js')],
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/@opentiny/vue-*/lib/*.js',
    '!../../packages/vue/src/**/node_modules',
    '../../packages/vue/src/**/*.{css,less,vue,js,jsx,ts,tsx}'
  ]
}
