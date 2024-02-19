import Espace from './src/index'
import '@opentiny/vue-theme/espace/index.less'
import { version } from './package.json'

/* istanbul ignore next */
Espace.install = function (Vue) {
  Vue.component(Espace.name, Espace)
}

Espace.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Espace.install(window.Vue)
  }
}

export default Espace
