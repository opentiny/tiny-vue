import Core from './src/index.vue'
import '@opentiny/vue-theme/chart-core/index.css'

/* istanbul ignore next */
Core.install = function (Vue) {
  Vue.component(Core.name, Core)
}

Core.version = process.env.COMPONENT_VERSION

export default Core
