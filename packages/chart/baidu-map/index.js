import BMap from './src/index.js'

/* istanbul ignore next */
BMap.install = function (Vue) {
  Vue.component(BMap.name, BMap)
}

BMap.version = process.env.COMPONENT_VERSION

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    BMap.install(window.Vue)
  }
}

export default BMap
