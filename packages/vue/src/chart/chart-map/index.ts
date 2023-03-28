import ChartMap from './src/index.js'
import { version } from './package.json'

/* istanbul ignore next */
ChartMap.install = function (Vue) {
  Vue.component(ChartMap.name, ChartMap)
}

ChartMap.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    ChartMap.install(window.Vue)
  }
}

export default ChartMap
