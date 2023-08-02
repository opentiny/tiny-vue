import Core from './src/index.vue'
import '@opentiny/vue-theme/chart-core/index.less'
import { version } from './package.json'

/* istanbul ignore next */
Core.install = function (Vue) {
  Vue.component(Core.name, Core)
}

Core.version = version

export default Core
