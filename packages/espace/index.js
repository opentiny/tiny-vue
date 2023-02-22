import Espace from './src/index'
import '@opentiny/vue-theme/espace/index.css'

/* istanbul ignore next */
Espace.install = function (Vue) {
  Vue.component(Espace.name, Espace)
}

Espace.version = process.env.COMPONENT_VERSION

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Espace.install(window.Vue)
  }
}

export default Espace
