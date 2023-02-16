import * as Vue3 from 'vue'
import { createI18n } from 'vue-i18n'
import { createRouter, createWebHashHistory } from 'vue-router'
import { Loading } from '@opentiny/vue'
import { initI18n } from '@opentiny/vue-locale'
import App from './App.vue'
import Home from './components/Home.vue'
import DemoView from './DemoView.vue'
import PcRouter from './route.config.comp'
import MobileRouter from './route.config.comp.mobile'
import TinyThemeTool from '@opentiny/vue-theme/theme-tool.js'
import { CURRENT_THEME_KEY, DEFAULT_THEME, THEME_MAP } from './const'

const app = Vue3.createApp(App)

const currentTheme = localStorage.getItem(CURRENT_THEME_KEY) || DEFAULT_THEME
const theme = new TinyThemeTool(THEME_MAP[currentTheme], 'tinyStyleSheetId')
app.config.globalProperties.theme = theme

app.use(Loading)

app.component('NovaDemoView', DemoView)
app.component('mobileView', DemoView)
app.component('NovaUxlink', { render: () => null })
app.component('uxlink', { render: () => null })
app.component('mobileUxlink', { render: () => null })
app.component('NovaAttributes', { render: () => null })
app.component('mobileAttributes', { render: () => null })

const mode = localStorage.getItem('vue-example-mode') || 'pc'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Home,
      children: mode === 'mobile' ? MobileRouter : PcRouter
    }
  ]
})

app.use(router)

const TinyMode = 'tiny_mode'
app.config.globalProperties[TinyMode] = { value: mode }
app.use(initI18n({ createI18n }))
app.mount('#app')
