import SelectMobile from './src/mobile-first.vue'
import { version } from './package.json'

SelectMobile.model = {
  prop: 'modelValue',
  event: 'update:modelValue'
}

/* istanbul ignore next */
SelectMobile.install = function (Vue) {
  Vue.component(SelectMobile.name, SelectMobile)
}

SelectMobile.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    SelectMobile.install(window.Vue)
  }
}

export default SelectMobile
