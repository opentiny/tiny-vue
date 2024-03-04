import Skeleton from './src/index'
import '@opentiny/vue-theme/skeleton/index.less'
import { version } from './package.json'

Skeleton.model = {
  prop: 'modelValue',
  event: 'update:modelValue'
}

/* istanbul ignore next */
Skeleton.install = function (Vue) {
  Vue.component(Skeleton.name, Skeleton)
}

Skeleton.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Skeleton.install(window.Vue)
  }
}

export default Skeleton
