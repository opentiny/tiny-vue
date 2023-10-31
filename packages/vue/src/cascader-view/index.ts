import CascaderView from './src/mobile-first.vue'
import { version } from './package.json'

CascaderView.model = {
  prop: 'modelValue',
  event: 'update:modelValue'
}

/* istanbul ignore next */
CascaderView.install = function (Vue) {
  Vue.component(CascaderView.name, CascaderView)
}

CascaderView.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    CascaderView.install(window.Vue)
  }
}

export default CascaderView
