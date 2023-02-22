import Candle from './src/index.js'

/* istanbul ignore next */
Candle.install = function (Vue) {
  Vue.component(Candle.name, Candle)
}

Candle.version = process.env.COMPONENT_VERSION

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Candle.install(window.Vue)
  }
}

export default Candle
