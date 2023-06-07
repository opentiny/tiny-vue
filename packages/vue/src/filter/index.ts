import Filter from './src/index'
import { version } from './package.json'

Filter.model = {
  prop: 'modelValue',
  event: 'update:modelValue'
}

/* istanbul ignore next */
Filter.install = function (Vue) {
  Vue.component(Filter.name, Filter)
}

Filter.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Filter.install(window.Vue)
  }
}

export default Filter
