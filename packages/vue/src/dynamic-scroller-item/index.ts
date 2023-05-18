import DynamicScrollerItem from './src/index'

/* istanbul ignore next */
DynamicScrollerItem.install = function (Vue) {
  Vue.component(DynamicScrollerItem.name, DynamicScrollerItem)
}

DynamicScrollerItem.version = process.env.COMPONENT_VERSION

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    DynamicScrollerItem.install(window.Vue)
  }
}

export default DynamicScrollerItem
