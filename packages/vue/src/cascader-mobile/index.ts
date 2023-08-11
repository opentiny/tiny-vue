import CascaderMobile from './src/mobile-first.vue'
import { version } from './package.json'

CascaderMobile.model = {
  prop: 'modelValue',
  event: 'update:modelValue'
}

/* istanbul ignore next */
CascaderMobile.install = function (Vue) {
  Vue.component(CascaderMobile.name, CascaderMobile)
}

CascaderMobile.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    CascaderMobile.install(window.Vue)
  }
}

export default CascaderMobile
