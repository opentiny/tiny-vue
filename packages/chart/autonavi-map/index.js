import AMap from './src/index.js'

/* istanbul ignore next */
AMap.install = function (Vue) {
  Vue.component(AMap.name, AMap)
}

AMap.version = process.env.COMPONENT_VERSION

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    AMap.install(window.Vue)
  }
}

export default AMap
