import Sunburst from './src/index.js'
import { version } from './package.json'

/* istanbul ignore next */
Sunburst.install = function (Vue) {
  Vue.component(Sunburst.name, Sunburst)
}

Sunburst.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Sunburst.install(window.Vue)
  }
}

export default Sunburst
