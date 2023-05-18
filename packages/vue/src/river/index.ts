import River from './src/index'
import { version } from './package.json'

/* istanbul ignore next */
River.install = function (Vue) {
  Vue.component(River.name, River)
}

River.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    River.install(window.Vue)
  }
}

export default River
