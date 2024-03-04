import Area from './src/index'
import '@opentiny/vue-theme/area/index.less'
import { version } from './package.json'

Area.model = {
  prop: 'modelValue',
  event: 'update:modelValue'
}

/* istanbul ignore next */
Area.install = function (Vue) {
  Vue.component(Area.name, Area)
}

Area.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Area.install(window.Vue)
  }
}

export default Area
