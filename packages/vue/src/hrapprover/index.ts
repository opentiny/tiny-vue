import Hrapprover from './src/index'
import '@opentiny/vue-theme/hrapprover/index.less'
import { version } from './package.json'

Hrapprover.model = {
  prop: 'modelValue',
  event: 'update:modelValue'
}

/* istanbul ignore next */
Hrapprover.install = function (Vue) {
  Vue.component(Hrapprover.name, Hrapprover)
}

Hrapprover.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Hrapprover.install(window.Vue)
  }
}

export default Hrapprover
