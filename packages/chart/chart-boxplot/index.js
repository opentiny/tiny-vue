import Boxplot from './src/index.js'

/* istanbul ignore next */
Boxplot.install = function (Vue) {
  Vue.component(Boxplot.name, Boxplot)
}

Boxplot.version = process.env.COMPONENT_VERSION

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Boxplot.install(window.Vue)
  }
}

export default Boxplot
