import VirtualScrollBox from './src/index'
import { version } from './package.json'

/* istanbul ignore next */
VirtualScrollBox.install = function (Vue) {
  Vue.component(VirtualScrollBox.name, VirtualScrollBox)
}

VirtualScrollBox.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    VirtualScrollBox.install(window.Vue)
  }
}

export default VirtualScrollBox
