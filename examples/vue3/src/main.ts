import * as Vue3 from 'vue'
import { createI18n } from 'vue-i18n'
import { initI18n } from '@opentiny/vue-locale'
import App from '@/App.vue'

const app = Vue3.createApp(App)

const mode = new URL(location.href).searchParams.get('mode') || localStorage.getItem('vue-example-mode') || 'pc'
const isPcMode = mode === 'pc'
const isMobileMode = mode === 'mobile'
app.config.globalProperties.tiny_mode = { value: mode }
app.config.globalProperties.isPcMode = isPcMode
app.config.globalProperties.isMobileMode = isMobileMode
app.use(initI18n({ createI18n, i18n: {} }))
app.mount('#app')
