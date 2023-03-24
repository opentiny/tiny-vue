import Locales from './src/index.vue'
import '@opentiny/vue-theme/locales/index.less'
import { version } from './package.json'

/* istanbul ignore next */
Locales.install = function (Vue) {
  Vue.component(Locales.name, Locales)
}

Locales.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Locales.install(window.Vue)
  }
}

export default Locales
