import FluentEditor from './src/pc.vue'
import { version } from './package.json'

FluentEditor.model = {
  prop: 'modelValue',
  event: 'update:modelValue'
}

/* istanbul ignore next */
FluentEditor.install = function (Vue) {
  Vue.component(FluentEditor.name, FluentEditor)
}

FluentEditor.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    FluentEditor.install(window.Vue)
  }
}

export default FluentEditor
