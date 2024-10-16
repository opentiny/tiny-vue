import Sticky from './src/index'
import { version } from './package.json'

/* istanbul ignore next */
Sticky.install = function (Vue) {
  Vue.component(Sticky.name, Sticky)
}

Sticky.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Sticky.install(window.Vue)
  }
}

export default Sticky
