import Candle from './src/index.js'
import { version } from './package.json'

/* istanbul ignore next */
Candle.install = function (Vue) {
  Vue.component(Candle.name, Candle)
}

Candle.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Candle.install(window.Vue)
  }
}

export default Candle
