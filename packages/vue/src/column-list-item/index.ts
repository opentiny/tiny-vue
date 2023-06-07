import ColumnListItem from './src/mobile-first.vue'
import { version } from './package.json'

ColumnListItem.model = {
  prop: 'modelValue',
  event: 'update:modelValue'
}
/* istanbul ignore next */
ColumnListItem.install = function (Vue) {
  Vue.component(ColumnListItem.name, ColumnListItem)
}

ColumnListItem.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    ColumnListItem.install(window.Vue)
  }
}

export default ColumnListItem
