import Dept from './src/index'
import '@opentiny/vue-theme/dept/index.less'
import { version } from './package.json'

Dept.model = {
  prop: 'modelValue',
  event: 'update:modelValue'
}

/* istanbul ignore next */
Dept.install = function (Vue) {
  Vue.component(Dept.name, Dept)
}

Dept.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Dept.install(window.Vue)
  }
}

export default Dept
