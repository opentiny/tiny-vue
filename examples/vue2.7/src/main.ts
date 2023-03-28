import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { initI18n } from '@opentiny/vue-locale'
import App from '@/App.vue'

const mode = new URL(location.href).searchParams.get('mode') || localStorage.getItem('vue-example-mode') || 'pc'
const isPcMode = mode === 'pc'
const isMobileMode = mode === 'mobile'
Vue.prototype.tiny_mode = { value: mode }
Vue.prototype.isPcMode = isPcMode
Vue.prototype.isMobileMode = isMobileMode
Vue.use(VueI18n)

new Vue({
  i18n: initI18n({ VueI18n, i18n: {} }),
  render: h => h(App),
}).$mount('#app')
