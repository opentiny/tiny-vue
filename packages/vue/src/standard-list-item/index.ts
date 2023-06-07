import StandardListItem from './src/mobile-first.vue'

/* istanbul ignore next */
StandardListItem.install = function (Vue) {
  Vue.component(StandardListItem.name, StandardListItem)
}

StandardListItem.version = process.env.COMPONENT_VERSION

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    StandardListItem.install(window.Vue)
  }
}

export default StandardListItem
