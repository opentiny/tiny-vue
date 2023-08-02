import FilterBar from './src/index'
import { version } from './package.json'

FilterBar.model = {
  prop: 'modelValue',
  event: 'update:modelValue'
}

/* istanbul ignore next */
FilterBar.install = function (Vue) {
  Vue.component(FilterBar.name, FilterBar)
}

FilterBar.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    FilterBar.install(window.Vue)
  }
}

export default FilterBar
