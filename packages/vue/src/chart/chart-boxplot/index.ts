import Boxplot from './src/index.js'
import { version } from './package.json'

/* istanbul ignore next */
Boxplot.install = function (Vue) {
  Vue.component(Boxplot.name, Boxplot)
}

Boxplot.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Boxplot.install(window.Vue)
  }
}

export default Boxplot
