import SelectView from './src/mobile-first.vue'
import { version } from './package.json'

SelectView.model = {
  prop: 'modelValue',
  event: 'update:modelValue'
}

/* istanbul ignore next */
SelectView.install = function (Vue) {
  Vue.component(SelectView.name, SelectView)
}

SelectView.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    SelectView.install(window.Vue)
  }
}

export default SelectView
