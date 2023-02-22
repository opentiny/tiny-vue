import Histogram from './src/index.js'

/* istanbul ignore next */
Histogram.install = function (Vue) {
  Vue.component(Histogram.name, Histogram)
}

Histogram.version = process.env.COMPONENT_VERSION

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Histogram.install(window.Vue)
  }
}

export default Histogram
