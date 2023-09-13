import Divider from './src/index'
import '@opentiny/vue-theme/divider/index.less'
import { version } from './package.json'

/* istanbul ignore next */
Divider.install = function (Vue) {
  Vue.component(Divider.name, Divider)
}

Divider.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Divider.install(window.Vue)
  }
}

export default Divider
