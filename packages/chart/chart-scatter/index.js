import Scatter from './src/index.js'

/* istanbul ignore next */
Scatter.install = function (Vue) {
  Vue.component(Scatter.name, Scatter)
}

Scatter.version = process.env.COMPONENT_VERSION

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Scatter.install(window.Vue)
  }
}

export default Scatter
