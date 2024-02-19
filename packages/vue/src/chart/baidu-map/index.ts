import BMap from './src/index.js'
import { version } from './package.json'

/* istanbul ignore next */
BMap.install = function (Vue) {
  Vue.component(BMap.name, BMap)
}

BMap.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    BMap.install(window.Vue)
  }
}

export default BMap
