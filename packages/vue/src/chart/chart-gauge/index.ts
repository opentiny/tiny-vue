import Gauge from './src/index.vue'
import { version } from './package.json'

/* istanbul ignore next */
Gauge.install = function (Vue) {
  Vue.component(Gauge.name, Gauge)
}

Gauge.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Gauge.install(window.Vue)
  }
}

export default Gauge
