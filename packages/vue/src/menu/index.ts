import Menu from './src/mobile-first.vue'
import { version } from './package.json'

/* istanbul ignore next */
Menu.install = function (Vue) {
  Vue.component(Menu.name, Menu)
}

Menu.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Menu.install(window.Vue)
  }
}

export default Menu
