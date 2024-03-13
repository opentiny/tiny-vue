import Scatter from './src/index.js'
import { version } from './package.json'

/* istanbul ignore next */
Scatter.install = function (Vue) {
  Vue.component(Scatter.name, Scatter)
}

Scatter.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Scatter.install(window.Vue)
  }
}

export default Scatter
