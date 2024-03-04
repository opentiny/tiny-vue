import Heatmap from './src/index.js'
import { version } from './package.json'

/* istanbul ignore next */
Heatmap.install = function (Vue) {
  Vue.component(Heatmap.name, Heatmap)
}

Heatmap.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Heatmap.install(window.Vue)
  }
}

export default Heatmap
