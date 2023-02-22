import Heatmap from './src/index.js'

/* istanbul ignore next */
Heatmap.install = function (Vue) {
  Vue.component(Heatmap.name, Heatmap)
}

Heatmap.version = process.env.COMPONENT_VERSION

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Heatmap.install(window.Vue)
  }
}

export default Heatmap
