import AMap from './src/index.js'
import { version } from './package.json'

/* istanbul ignore next */
AMap.install = function (Vue) {
  Vue.component(AMap.name, AMap)
}

AMap.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    AMap.install(window.Vue)
  }
}

export default AMap
