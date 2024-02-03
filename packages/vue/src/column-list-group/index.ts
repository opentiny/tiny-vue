import ColumnListGroup from './src/mobile-first.vue'
import { version } from './package.json'

ColumnListGroup.model = {
  prop: 'modelValue',
  event: 'update:modelValue'
}
/* istanbul ignore next */
ColumnListGroup.install = function (Vue) {
  Vue.component(ColumnListGroup.name, ColumnListGroup)
}

ColumnListGroup.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    ColumnListGroup.install(window.Vue)
  }
}

export default ColumnListGroup
