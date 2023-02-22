import ChartMap from './src/index.js'

/* istanbul ignore next */
ChartMap.install = function (Vue) {
  Vue.component(ChartMap.name, ChartMap)
}

ChartMap.version = process.env.COMPONENT_VERSION

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    ChartMap.install(window.Vue)
  }
}

export default ChartMap
