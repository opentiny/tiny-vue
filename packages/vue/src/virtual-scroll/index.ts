import VirtualScroll from './src/index'

import '@opentiny/vue-theme/virtual-scroll/index.less'
import { version } from './package.json'

VirtualScroll.model = {
  prop: 'modelValue',
  event: 'update:modelValue'
}
/* istanbul ignore next */
VirtualScroll.install = function (Vue) {
  Vue.component(VirtualScroll.name, VirtualScroll)
}

VirtualScroll.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    VirtualScroll.install(window.Vue)
  }
}

export default VirtualScroll
