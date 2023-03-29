import Sankey from './src/index.js'
import { version } from './package.json'

/* istanbul ignore next */
Sankey.install = function (Vue) {
  Vue.component(Sankey.name, Sankey)
}

Sankey.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Sankey.install(window.Vue)
  }
}

export default Sankey
