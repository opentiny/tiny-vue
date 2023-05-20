import * as Vue3 from 'vue'
import 'uno.css'
import { createI18n } from 'vue-i18n'
import { initI18n } from '@opentiny/vue-locale'
import { Loading } from '@opentiny/vue'
import App from '@/App.vue'

const app = Vue3.createApp(App)

const mode = location.pathname.split('/')[1] || 'pc'

app.config.globalProperties.tiny_mode = { value: mode }
app.config.globalProperties.isPcMode = mode === 'pc'
app.config.globalProperties.isMobileMode = mode === 'mobile'

app.use(initI18n({ createI18n, i18n: {} } as any))
app.use(Loading)
app.mount('#app')
