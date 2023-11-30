/** @type { import('tailwindcss').Config } */
module.exports = {
  presets: [require('@opentiny/vue-theme-saas/tailwind.config.js')],
  content: [
    '../../packages/vue/src/**/*.{css,less,vue,js,jsx,ts,tsx}',
    '!../../packages/vue/src/**/node_modules',
    '../sites/demos/mobile-first/**/*.{css,less,vue,js,jsx,ts,tsx}'
  ]
}
