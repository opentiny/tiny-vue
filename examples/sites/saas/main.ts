import '../../../packages/theme-saas/src/index.less'
import '../../../packages/theme-saas/theme/theme.json'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.config.globalProperties.tiny_mode = 'mobile-first'
app.mount('#app')
