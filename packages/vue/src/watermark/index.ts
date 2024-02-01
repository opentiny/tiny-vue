import Watermark from './src/pc.vue'
import '@opentiny/vue-theme/watermark/index.less'
import { version } from './package.json'

/* istanbul ignore next */
Watermark.install = function (Vue) {
  Vue.component(Watermark.name, Watermark)
}

Watermark.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Watermark.install(window.Vue)
  }
}

export default Watermark
