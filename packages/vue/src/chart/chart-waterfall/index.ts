import Waterfall from './src/index.js'
import { waterfall } from '@opentiny/vue-renderless/chart-waterfall/index'
import { version } from './package.json'

/* istanbul ignore next */
Waterfall.install = function (Vue) {
  Vue.component(Waterfall.name, Waterfall)
}

Waterfall.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Waterfall.install(window.Vue)
  }
}

export { waterfall }

export default Waterfall
