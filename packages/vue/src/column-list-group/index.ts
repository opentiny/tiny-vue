import ColumnListGroup from './src/mobile-first.vue'

ColumnListGroup.model = {
  prop: 'modelValue',
  event: 'update:modelValue'
}
/* istanbul ignore next */
ColumnListGroup.install = function (Vue) {
  Vue.component(ColumnListGroup.name, ColumnListGroup)
}

ColumnListGroup.version = process.env.COMPONENT_VERSION

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    ColumnListGroup.install(window.Vue)
  }
}

export default ColumnListGroup
