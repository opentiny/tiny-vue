import FilterBox from './src/pc.vue'
import '@opentiny/vue-theme/filter-box/index.less'
import { version } from './package.json'

/* istanbul ignore next */
FilterBox.install = function (Vue) {
  Vue.component(FilterBox.name, FilterBox)
}

FilterBox.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    FilterBox.install(window.Vue)
  }
}

export default FilterBox
