import Locales from './src/index.vue'
import '@opentiny/vue-theme/locales/index.css'

/* istanbul ignore next */
Locales.install = function (Vue) {
  Vue.component(Locales.name, Locales)
}

Locales.version = process.env.COMPONENT_VERSION

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Locales.install(window.Vue)
  }
}

export default Locales
