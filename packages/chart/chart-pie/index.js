import Pie from './src/index.js'
import { ring, pie } from '@opentiny/vue-renderless/chart-pie/index'

/* istanbul ignore next */
Pie.install = function (Vue) {
  Vue.component(Pie.name, Pie)
}

Pie.version = process.env.COMPONENT_VERSION

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Pie.install(window.Vue)
  }
}

export { ring, pie }

export default Pie
