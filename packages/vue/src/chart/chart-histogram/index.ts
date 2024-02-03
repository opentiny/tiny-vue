import Histogram from './src/index.js'
import { version } from './package.json'

/* istanbul ignore next */
Histogram.install = function (Vue) {
  Vue.component(Histogram.name, Histogram)
}

Histogram.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Histogram.install(window.Vue)
  }
}

export default Histogram
