export default defineNuxtConfig({
  modules: ['../src/module'],
  devtools: { enabled: true },

  build: {
    transpile: ['@opentiny/vue']
  },

  compatibilityDate: '2024-07-18',
})