import Vue from 'vue'
import 'uno.css'
import VueI18n from 'vue-i18n'
import { initI18n } from '@opentiny/vue-locale'
import { Loading } from '@opentiny/vue'
import App from '@/App.vue'
import { $local } from '@/uses'

const mode = $local.mode || 'pc'

Vue.prototype.tiny_mode = { value: mode }
Vue.prototype.isPcMode = mode === 'pc'
Vue.prototype.isMobileMode = mode === 'mobile'

// 注入全局的saas主题变量
Vue.prototype.tiny_theme = { value: import.meta.env.VITE_TINY_THEME }

Vue.use(VueI18n)
Vue.use(Loading)

new Vue({
  i18n: initI18n({ VueI18n, i18n: {} }),
  render: h => h(App),
}).$mount('#app')
