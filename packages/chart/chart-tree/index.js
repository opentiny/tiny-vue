import ChartTree from './src/index.js'

/* istanbul ignore next */
ChartTree.install = function (Vue) {
  Vue.component(ChartTree.name, ChartTree)
}

ChartTree.version = process.env.COMPONENT_VERSION

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    ChartTree.install(window.Vue)
  }
}

export default ChartTree
