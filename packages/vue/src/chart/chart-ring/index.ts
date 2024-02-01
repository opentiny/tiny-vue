import Ring from './src/index.js'
import { version } from './package.json'

/* istanbul ignore next */
Ring.install = function (Vue) {
  Vue.component(Ring.name, Ring)
}

Ring.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Ring.install(window.Vue)
  }
}

export default Ring
