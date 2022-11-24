import Vue from 'vue'
import VueI18n from 'vue-i18n'
import VueRouter from 'vue-router'
import { Loading, Modal } from '@opentiny/vue'
import { initI18n } from '@opentiny/vue-locale'
import App from './App.vue'
import Home from './components/Home.vue'
import DemoView from './DemoView.vue'
import PcRouter from './route.config.comp'
import MobileRouter from './route.config.comp.mobile'

Vue.use(VueRouter)
Vue.use(Loading)
Vue.use(Modal)
Vue.use(VueI18n)

Vue.component('NovaDemoView', DemoView)
Vue.component('mobileView', DemoView)
Vue.component('NovaUxlink', { render: () => null })
Vue.component('uxlink', { render: () => null })
Vue.component('mobileUxlink', { render: () => null })
Vue.component('NovaAttributes', { render: () => null })
Vue.component('mobileAttributes', { render: () => null })

Vue.config.productionTip = false
const mode = localStorage.getItem('vue-example-mode') || 'pc'

const TinyMode = 'tiny_mode'
Vue.prototype[TinyMode] = { value: mode }

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home,
      children: mode === 'mobile' ? MobileRouter : PcRouter
    }
  ]
})

new Vue({
  i18n: initI18n({ VueI18n }),
  router,
  render: (h) => h(App)
}).$mount('#app')
