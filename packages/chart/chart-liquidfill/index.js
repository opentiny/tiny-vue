import Liquidfill from './src/index.js'

/* istanbul ignore next */
Liquidfill.install = function (Vue) {
  Vue.component(Liquidfill.name, Liquidfill)
}

Liquidfill.version = process.env.COMPONENT_VERSION

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Liquidfill.install(window.Vue)
  }
}

export default Liquidfill
