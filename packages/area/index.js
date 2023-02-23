import Area from './src/index.vue'
import '@opentiny/vue-theme/area/index.css'

Area.model = {
  prop: 'modelValue',
  event: 'update:modelValue'
}

/* istanbul ignore next */
Area.install = function (Vue) {
  Vue.component(Area.name, Area)
}

Area.version = process.env.COMPONENT_VERSION

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Area.install(window.Vue)
  }
}

export default Area
